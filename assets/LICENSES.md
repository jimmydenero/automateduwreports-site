# Photograph and font licences

## Photographs

The photo below is a free photograph under the [Pexels License](https://www.pexels.com/license/), which permits commercial use and modification. Retrieved 24 October 2026. It appears only inside two of the product screens on the homepage (review and approval, and the self-inspection phone), as one fictional example house. Stock properties are illustrative, not customers or endorsements. No paid generation or image APIs were used.

The original is **not checked into Git or served**. `node website/fetch-photos.mjs` fetches it to `/tmp/au-photo-sources` (override with `AU_PHOTO_SOURCES`). The CDN URL is `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg`. `render-assets.mjs` makes a compressed, metadata-free 960×640 JPEG from a centered 3:2 crop. The crop has no readable property number or street sign.

| Derivative | Used in | Photographer | Source photo page | Licence |
| --- | --- | --- | --- | --- |
| front-960.jpg | approval, self-inspection | Max Vakhtbovych | https://www.pexels.com/photo/contemporary-country-house-facade-in-winter-7031406/ | Pexels |

Work item #2888 cut the homepage to one message, and with it every photograph shown outside the product screens (Pexels 7174110, 7587882, 7746548, 9869392, 36757760, 8204355 and 5256993), the AVIF and WebP copies of the three elevations, and ten product screens. Its messaging revision on 27 October 2026 replaced the drafted report and photo intake screens with three restored from Git history (review and approval, the self-inspection phone and carrier connections), and removed the right and rear elevations (Pexels 7031414 and 7031405), which only the photo intake showed. Their sources and licences remain in this file's Git history.

### The example house

The screens show the front of a winter house from Max Vakhtbovych's January 8, 2019 shoot (Pexels 7031406): centered entry doors and walkway approach, with the carport on the viewer's right. Pexels' generic description calls this a backyard view; the entrance/approach and corresponding terrace view support using it as Front under the owner's definition. That is a visual judgment, not a surveyed bearing or a real customer's inspection. Findings, names, addresses and policy numbers are fictional examples.

Product screens are rendered from `screens/*.html` at 2× and served as WebP and PNG, the desktop screens at 360/640/800/1200/1600/2000 pixels and the self-inspection phone at 360/640/800. They contain only original interface artwork, fictional text and the photograph above.

## Self-hosted typefaces

Both faces are served locally with `font-display: swap`; visitors make no Google Fonts requests.

### Inter Tight (body text and the product screens)

`fonts/inter-tight-latin.woff2` is the Google Fonts Latin subset of Inter Tight, normal variable weight 400–600. Copyright 2022 The Inter Project Authors. Licensed under SIL Open Font License 1.1; the complete licence is checked in at `fonts/OFL.txt`.

- Font source: https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2
- Source stylesheet: https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400..600&display=swap (modern Chromium user agent)
- Licence source: https://github.com/google/fonts/blob/main/ofl/intertight/OFL.txt

### Archivo ExtraBold (headlines)

`fonts/archivo-800-latin.woff2` is the Google Fonts Latin subset of Archivo, a static ExtraBold (800) instance at normal width: 14,436 bytes, 302 glyphs, SHA-256 `2995622a3e4021e730bfea260fee758858342921930caab513363e8d316b64bc`. Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo). Licensed under SIL Open Font License 1.1; the complete licence is checked in at `fonts/archivo-OFL.txt`. Retrieved 27 October 2026 for work item #2888, because the bundled Inter Tight file stops at weight 600. The file is unmodified.

- Font source: https://fonts.gstatic.com/s/archivo/v25/k3k6o8UDI-1M0wlSV9XAw6lQkqWY8Q82sJaRE-NWIDdgffTTtDRZ9xdpBU7iVNRQ.woff2
- Source stylesheet: https://fonts.googleapis.com/css2?family=Archivo:wght@800&display=swap (modern Chromium user agent)
- Licence source: https://github.com/google/fonts/blob/main/ofl/archivo/OFL.txt
