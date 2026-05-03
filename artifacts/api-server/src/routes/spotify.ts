import { Router } from "express";

const router = Router();

/**
 * GET /api/spotify/now-playing
 *
 * Returns the currently-playing track from the authenticated Spotify account.
 * Credentials are fetched via the Replit Spotify connector (OAuth).
 * After the connector is authorised, this route will use the access token
 * returned by the connectors proxy to call Spotify's Web API.
 */
router.get("/spotify/now-playing", async (req, res) => {
  try {
    const accessToken = await getSpotifyAccessToken();

    if (!accessToken) {
      res.json({ isPlaying: false });
      return;
    }

    const response = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );

    /* 204 = authenticated but nothing playing */
    if (response.status === 204 || !response.ok) {
      res.json({ isPlaying: false });
      return;
    }

    const raw = (await response.json()) as SpotifyCurrentlyPlayingResponse;

    if (!raw.is_playing || raw.item?.type !== "track") {
      res.json({ isPlaying: false });
      return;
    }

    const track = raw.item;
    res.json({
      isPlaying: true,
      track: {
        name: track.name,
        artist: track.artists.map((a) => a.name).join(", "),
        albumArt: track.album.images[0]?.url ?? "",
        url: track.external_urls.spotify,
      },
    });
  } catch (err) {
    req.log.error({ err }, "spotify/now-playing error");
    res.json({ isPlaying: false });
  }
});

export default router;

/* ── credential helper ───────────────────────────────── */

/**
 * Fetches a fresh Spotify access token via the Replit connectors proxy.
 * Requires the connector to be authorised (proposeIntegration completed).
 * Falls back to the SPOTIFY_ACCESS_TOKEN env var for local testing.
 */
async function getSpotifyAccessToken(): Promise<string | null> {
  /* Direct env-var override — useful for local dev / CI */
  const directToken = process.env["SPOTIFY_ACCESS_TOKEN"];
  if (directToken) return directToken;

  /* Replit connectors proxy path */
  const connectorHostname = process.env["REPLIT_CONNECTORS_HOSTNAME"];
  const replIdentity = process.env["REPL_IDENTITY"];
  const connectionId = process.env["SPOTIFY_CONNECTION_ID"];

  if (!connectorHostname || !replIdentity || !connectionId) {
    return null;
  }

  const proxyRes = await fetch(
    `https://${connectorHostname}/api/v2/connection/${connectionId}/settings`,
    { headers: { "X-Replit-Identity": replIdentity } },
  );

  if (!proxyRes.ok) return null;

  const { settings } = (await proxyRes.json()) as {
    settings?: { access_token?: string };
  };
  return settings?.access_token ?? null;
}

/* ── Spotify API types ───────────────────────────────── */

type SpotifyCurrentlyPlayingResponse = {
  is_playing: boolean;
  item?: {
    type: string;
    name: string;
    artists: { name: string }[];
    album: {
      images: { url: string; width: number; height: number }[];
    };
    external_urls: { spotify: string };
  };
};
