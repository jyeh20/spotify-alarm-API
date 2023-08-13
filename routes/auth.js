import { Router } from "express";
import dotenv from "dotenv";
import { stringify } from "querystring";

const router = Router();
const dotenvConfig = dotenv.config();

router.get("/", (req, res) => {
  console.log(req);
  const scopes = [
    "ugc-image-upload",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "app-remote-control",
    "streaming",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-follow-modify",
    "user-follow-read",
    "user-read-playback-position",
    "user-top-read",
    "user-read-recently-played",
    "user-library-modify",
    "user-library-read",
    "user-read-email",
    "user-read-private",
    "user-soa-link",
    "user-soa-unlink",
    "user-manage-entitlements",
    "user-manage-partner",
    "user-create-partner",
  ];

  const scope = scopes.join(" ");
  const redirect_uri = `${dotenvConfig.parsed.URL}/login/callback`;

  const body = stringify({
    response_type: "code",
    client_id: dotenvConfig.parsed.CLIENT_ID,
    // scope: "ugc-image-upload",
    redirect_uri: redirect_uri,
  });

  // console.log(body);

  res.redirect("https://accounts.spotify.com/authorize?" + body);
});

router.get("/callback", (req, res) => {
  console.log(req.query);
  res.redirect("/");
});

export default router;
