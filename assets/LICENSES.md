# Photograph licences and elevation assignments

All selected photos are free photographs under the [Pexels License](https://www.pexels.com/license/), which permits commercial use and modification. Retrieved 24 October 2026. Stock people and properties are illustrative, not customers or endorsements. No paid generation or image APIs were used. No construction workers, hard hats or hi-vis photos remain.

Originals are **not checked into Git or served**. `node website/fetch-photos.mjs` fetches them to `/tmp/au-photo-sources` (override with `AU_PHOTO_SOURCES`). The CDN URL for each row is `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg`. `render-assets.mjs` makes compressed, metadata-free derivatives. Standard photography uses centered 3:2 crops; commercial uses x1800 y0 w4200 h3750 from the 6000×4000 original before resizing, excluding vehicles, plates and signs. None of the selected crops has a readable property number or street sign.

| Derivatives | Photographer | Source photo page | Licence |
| --- | --- | --- | --- |
| hero-480/960 | Max Vakhtbovych | https://www.pexels.com/photo/house-near-plants-and-trees-on-lawn-7174110/ | Pexels |
| field-480/960 | Max Vakhtbovych | https://www.pexels.com/photo/photo-of-a-house-exterior-7587882/ | Pexels |
| inspector-480/960 | Max Vakhtbovych | https://www.pexels.com/photo/beautiful-brown-house-near-the-woods-7746548/ | Pexels |
| front-960; intake, draft, approval | Max Vakhtbovych | https://www.pexels.com/photo/contemporary-country-house-facade-in-winter-7031406/ | Pexels |
| right-960; intake | Max Vakhtbovych | https://www.pexels.com/photo/modern-cottage-house-with-parking-7031414/ | Pexels |
| rear-960; intake, analysis, answer evidence | Max Vakhtbovych | https://www.pexels.com/photo/modern-residential-house-facade-in-countryside-7031405/ | Pexels |
| desk-480/960 | Ron Lach | https://www.pexels.com/photo/a-high-angle-shot-at-documents-at-table-and-female-hands-9869392/ | Pexels |
| commercial-480/960 | Jan Wright | https://www.pexels.com/photo/modern-commercial-building-exterior-with-cars-36757760/ | Pexels |
| reviewer-480/960 | Kampus Production | https://www.pexels.com/photo/woman-in-yellow-long-sleeve-shirt-looking-at-computer-data-8204355/ | Pexels |
| team-480/960 | Thirdman | https://www.pexels.com/photo/businessmen-writing-and-discussing-5256993/ | Pexels |

## One house, three distinct sides

The product screens use the same winter house from Max Vakhtbovych's January 8, 2019 shoot. Assignments are visual judgments, not surveyed bearings or a real customer's inspection:

- **Front — 7031406:** centered entry doors and walkway approach. The carport is on the viewer's right. Pexels' generic description calls this a backyard view; the entrance/approach and corresponding terrace view support using it as Front under the owner's definition.
- **Right — 7031414:** the carport elevation around the right-hand corner when standing at the entrance facing the house. This is an oblique view showing that distinct side and its connection to the front.
- **Rear — 7031405:** the opposite elevation with broad garden glazing, terrace and pool; not another crop of the entry.
- **Left — no photograph:** displayed as **Uploading** with an empty slot. No fourth elevation was verified. Repeated terrace angles (7031407, 7031408, 7031411–7031413) were not passed off as Left.

The search included Max's profile, collections and related photographs, Curtis Adams' Pexels portfolio, and Francesca Tosolini and Zac Gudakov's Unsplash profiles. Three distinct elevations are used under the owner's explicit fallback instruction. Analysis, draft and approval all retain this same house. Findings, names, addresses and policy numbers are fictional examples. Roof/foundation uncertainties remain unresolved rather than inferred through snow; the later approval view illustrates a separately reviewed report version.

## Self-hosted typeface

`fonts/inter-tight-latin.woff2` is the Google Fonts Latin subset of Inter Tight, normal variable weight 400–600. Copyright 2022 The Inter Project Authors. Licensed under SIL Open Font License 1.1; the complete licence is checked in at `fonts/OFL.txt`.

- Font source: https://fonts.gstatic.com/s/intertight/v9/NGSwv5HMAFg6IuGlBNMjxLsH8ag.woff2
- Source stylesheet: https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400..600&display=swap (modern Chromium user agent)
- Licence source: https://github.com/google/fonts/blob/main/ofl/intertight/OFL.txt

The site serves this file locally with `font-display: swap`; visitors make no Google Fonts requests. Photographic derivatives now include AVIF, WebP and JPEG at 360/640/960 pixels (desk also 1440); product screenshots use WebP/PNG at 360/640/800/1200/1600/2000 pixels. Original source photographs remain outside Git.
