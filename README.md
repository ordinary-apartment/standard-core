# STANDARD CORE

`ordinary products for everyday life. selected from around the world.`

A static, English-language product archive. It is intentionally an archive rather than a shop: there are no prices, reviews, rankings, or recommendations.

## Add a product

Edit [`products.json`](products.json) and append an object with a permanent `SC-XXXXXX` ID. Do not reuse IDs or reorder existing products.

Fields:

- `id`: permanent archive ID, for example `SC-000043`
- `name`: public product name
- `brand`: maker or brand
- `year`: known introduction year, or `null` when unconfirmed
- `category`: Stationery, Food & Drink, Daily Goods, Household, Electronics, Tools, Kitchen, Furniture, Clothing, Hygiene, Storage, Lighting, or Others
- `country`: country associated with the product or brand
- `description`: one short, factual sentence in English
- `asin`: optional Amazon ASIN
- `amazonUrl`: optional affiliate/product URL
- `imageUrl`: optional image URL obtained through a permitted source
- `imageProvider`: optional provider identifier such as `wikimedia`, `amazon`, `rakuten`, or `manufacturer`
- `imageSourceUrl`: optional source page used to verify the image and its license
- `imageLicense`: optional license label for the image
- `imageCredit`: optional attribution text
- `imageFit`: optional `contain` value for product photos that should not be cropped
- `productUrl`: optional non-affiliate product page URL
- `affiliateUrl`: optional affiliate URL; it takes priority over `amazonUrl` and `productUrl`
- `jan`: optional JAN or other catalog identifier

The page uses a graphic placeholder while `imageUrl` is empty. Do not copy or re-host Amazon product images. Keep image retrieval separate from the catalog data so an approved API or affiliate image service can be added later.

## External image records

The first three catalog images use Wikimedia Commons file redirects. The files remain hosted by Wikimedia; STANDARD CORE stores URLs and attribution metadata only.

| Product | Provider | Source and license | Verified |
| --- | --- | --- | --- |
| Cup Noodles | Wikimedia Commons | [202404 Cup Noodle.jpg](https://commons.wikimedia.org/wiki/File:202404_Cup_Noodle.jpg), CC0 1.0 — ボッチボード / Wikimedia Commons | 2026-09-27 |
| Kikkoman Soy Sauce Dispenser | Wikimedia Commons | [Kikkoman soysauce.jpg](https://commons.wikimedia.org/wiki/File:Kikkoman_soysauce.jpg), CC BY 2.0 — Creative Tools AB / Wikimedia Commons | 2026-09-27 |
| LAMY safari | Wikimedia Commons | [LamySafari.jpg](https://commons.wikimedia.org/wiki/File:LamySafari.jpg), CC BY-SA 3.0 — Malpei / Wikimedia Commons | 2026-09-27 |
| BIC Classic Lighter | Wikimedia Commons | [Bic Lighter.JPG](https://commons.wikimedia.org/wiki/File:Bic_Lighter.JPG), CC BY 3.0 — Dwight Burdette / Wikimedia Commons | 2026-09-27 |
| MONO Eraser | Wikimedia Commons | [Tombow MONO.jpg](https://commons.wikimedia.org/wiki/File:Tombow_MONO.jpg), CC BY-SA 4.0 — Kgw1226 / Wikimedia Commons | 2026-09-27 |
| OLFA Cutter | Wikimedia Commons | [OLFA cutter.JPG](https://commons.wikimedia.org/wiki/File:OLFA_cutter.JPG), CC BY-SA 3.0 — Guillermo Arévalo Aucahuasi / Wikimedia Commons | 2026-09-27 |
| Pocari Sweat | Wikimedia Commons | [Pocari sweat 500ml.jpg](https://commons.wikimedia.org/wiki/File:Pocari_sweat_500ml.jpg), CC BY-SA 2.5 — Geographer / Wikimedia Commons | 2026-09-27 |
| NIVEA Creme | Wikimedia Commons | [Nivea Creme.webp](https://commons.wikimedia.org/wiki/File:Nivea_Creme.webp), CC BY-SA 4.0 — Susana22BN / Wikimedia Commons | 2026-09-27 |
| Cow Brand Beauty Soap Red Box | Wikimedia Commons | [Beauty Sope.jpg](https://commons.wikimedia.org/wiki/File:Beauty_Sope.jpg), CC BY-SA 3.0 — Toneriko_ef / Wikimedia Commons | 2026-09-27 |
| Scotch Tape | Wikimedia Commons | [Scotch Tape.jpg](https://commons.wikimedia.org/wiki/File:Scotch_Tape.jpg), CC BY-SA 3.0 — Improbcat / Wikimedia Commons | 2026-09-27 |
| CASIO F-91W | Wikimedia Commons | [Casio F-91W watch (2023) (front view - full length).jpg](https://commons.wikimedia.org/wiki/File:Casio_F-91W_watch_(2023)_(front_view_-_full_length).jpg), CC BY-SA 4.0 — Multicherry / Wikimedia Commons | 2026-09-27 |
| CASIO Calculator | Wikimedia Commons | [Casio Calculator.jpg](https://commons.wikimedia.org/wiki/File:Casio_Calculator.jpg), CC BY-SA 4.0 — Yumigahama / Wikimedia Commons | 2026-09-27 |
| MAX Stapler | Wikimedia Commons | [Stapler 001.jpg](https://commons.wikimedia.org/wiki/File:Stapler_001.jpg), CC0 — Ocdp / Wikimedia Commons | 2026-09-27 |
| Zojirushi Electric Pot | Wikimedia Commons | [Zojirushi CD-XD30 20101026.jpg](https://commons.wikimedia.org/wiki/File:Zojirushi_CD-XD30_20101026.jpg), Public domain — Batholith / Wikimedia Commons | 2026-09-27 |
| Duralex Picardie | Wikimedia Commons | [Picardie glass.jpg](https://commons.wikimedia.org/wiki/File:Picardie_glass.jpg), CC BY-SA 3.0 — Denkhenk / Wikimedia Commons | 2026-09-27 |
| Enamel Mug | Wikimedia Commons | [Enamel mug.jpg](https://commons.wikimedia.org/wiki/File:Enamel_mug.jpg), CC BY 3.0 — Knoe / Wikimedia Commons | 2026-09-27 |
| Kimwipes | Wikimedia Commons | [KimWipe (S).jpg](https://commons.wikimedia.org/wiki/File:KimWipe_(S).jpg), CC BY-SA 3.0 — D.328 / Wikimedia Commons | 2026-09-27 |
| MAGLITE | Wikimedia Commons | [Maglite Flashlight.jpg](https://commons.wikimedia.org/wiki/File:Maglite_Flashlight.jpg), CC BY-SA 2.0 — redjar / Wikimedia Commons | 2026-09-27 |
| CalorieMate | Wikimedia Commons | [Calorie mate 012.jpg](https://commons.wikimedia.org/wiki/File:Calorie_mate_012.jpg), CC0 — Ocdp / Wikimedia Commons | 2026-09-27 |
| Yakult | Wikimedia Commons | [Yakult drink.jpg](https://commons.wikimedia.org/wiki/File:Yakult_drink.jpg), CC BY-SA 4.0 — Amin / Wikimedia Commons | 2026-09-27 |
| Converse All Star | Wikimedia Commons | [Converse All Star.jpg](https://commons.wikimedia.org/wiki/File:Converse_All_Star.jpg), CC0 — LuanCampSouza93 / Wikimedia Commons | 2026-09-27 |
| EASTPAK backpack | Wikimedia Commons | [Eastpak Sugarbush backpack black.jpg](https://commons.wikimedia.org/wiki/File:Eastpak_Sugarbush_backpack_black.jpg), CC BY-SA 4.0 — Ubcule / Wikimedia Commons | 2026-09-27 |
| Pyrex Measuring Cup | Wikimedia Commons | [Pyrex 1-quart liquid measuring cup - DPLA - b07e5efc0a37cf693d74b366a3065c72.jpg](https://commons.wikimedia.org/wiki/File:Pyrex_1-quart_liquid_measuring_cup_-_DPLA_-_b07e5efc0a37cf693d74b366a3065c72.jpg), Public domain — Science History Institute / Wikimedia Commons | 2026-09-27 |
| IKEA FRAKTA | Wikimedia Commons | [イケアのイエローバッグ (4940095895).jpg](https://commons.wikimedia.org/wiki/File:イケアのイエローバッグ_(4940095895).jpg), CC BY 2.0 — t.ohashi / Wikimedia Commons | 2026-09-27 |
| Victorinox Swiss Army Knife | Wikimedia Commons | [Victorinox Swiss Army Knife.jpg](https://commons.wikimedia.org/wiki/File:Victorinox_Swiss_Army_Knife.jpg), CC BY 2.0 — James Case / Wikimedia Commons | 2026-09-27 |
| Zippo Classic Lighter | Wikimedia Commons | [Zippolighter.jpg](https://commons.wikimedia.org/wiki/File:Zippolighter.jpg), Public domain — Jan1024.mueller / Wikimedia Commons | 2026-09-27 |
| Power Strip | Wikimedia Commons | [Power strip.jpg](https://commons.wikimedia.org/wiki/File:Power_strip.jpg), CC BY-SA 4.0 — User1779637 / Wikimedia Commons | 2026-09-27 |
| Anglepoise-style Desk Lamp | Wikimedia Commons | [Type 1227 desk lamp, Anglepoise, designed by George Carwardine, manufactured by Herbert Terry and Sons, 1935 - Design Museum, Kensington - London - DSC01571.jpg](https://commons.wikimedia.org/wiki/File:Type_1227_desk_lamp,_Anglepoise,_designed_by_George_Carwardine,_manufactured_by_Herbert_Terry_and_Sons,_1935_-_Design_Museum,_Kensington_-_London_-_DSC01571.jpg), CC0 — Daderot / Wikimedia Commons | 2026-09-27 |
| Folding Chair | Wikimedia Commons | [Folding Chair (USA), 1863–75 (CH 18691569-2).jpg](https://commons.wikimedia.org/wiki/File:Folding_Chair_(USA),_1863–75_(CH_18691569-2).jpg), Public Domain Mark 1.0 — Edward W. Vaill / Wikimedia Commons | 2026-09-27 |
| Post-it Notes | Wikimedia Commons | [Post it notes.jpg](https://commons.wikimedia.org/wiki/File:Post_it_notes.jpg), Public domain — EraserGirl / Wikimedia Commons | 2026-09-27 |
| Windex Glass Cleaner | Wikimedia Commons | [Windex (48089717956).jpg](https://commons.wikimedia.org/wiki/File:Windex_(48089717956).jpg), CC BY 2.0 — Ajay Suresh / Wikimedia Commons | 2026-09-27 |
| Vaseline Petroleum Jelly | Wikimedia Commons | [Vaseline Opened.jpg](https://commons.wikimedia.org/wiki/File:Vaseline_Opened.jpg), CC BY-SA 3.0 — Med Chaos / Wikimedia Commons | 2026-09-27 |
| Kleenex Tissue | Wikimedia Commons | [Kleenex-small-box.jpg](https://commons.wikimedia.org/wiki/File:Kleenex-small-box.jpg), Public domain — Evan-Amos / Wikimedia Commons | 2026-09-27 |
| Postman’s Rubber Band | Wikimedia Commons | [Rubber bands.jpg](https://commons.wikimedia.org/wiki/File:Rubber_bands.jpg), CC BY-SA 2.5 — FML / Wikimedia Commons | 2026-09-27 |
| Cork Notice Board | Wikimedia Commons | [Cork board.jpg](https://commons.wikimedia.org/wiki/File:Cork_board.jpg), CC BY 2.0 — net_efekt / Wikimedia Commons | 2026-09-27 |
| Duct Tape | Wikimedia Commons | [Duct-tape.jpg](https://commons.wikimedia.org/wiki/File:Duct-tape.jpg), Public domain — Evan-Amos / Wikimedia Commons | 2026-09-27 |
| Lego Brick | Wikimedia Commons | [Lego Brick.jpg](https://commons.wikimedia.org/wiki/File:Lego_Brick.jpg), CC BY-SA 3.0 — Срђан Весић / Wikimedia Commons | 2026-09-27 |

`resolveImageUrl(product)` accepts only `http:` and `https:` URLs. A failed image request replaces the image with the normal placeholder. No image file is downloaded into this repository. For Amazon or Rakuten images, a permitted affiliate/API credential and provider-specific terms are required before an adapter can be added.

If an Amazon link is added, the interface opens it in a new tab with `rel="sponsored noopener noreferrer"`. Prices are never shown.

## Local check

Serve the directory over HTTP so `products.json` can be fetched:

```sh
python3 -m http.server 8000 --directory standard-core
```

Open <http://localhost:8000>. Check desktop, tablet, and phone widths, keyboard focus, search, and placeholder behavior.

## GitHub Pages

Publish the `standard-core/` directory as part of the repository's static Pages artifact, or point a separate Pages project at this directory. The site has no build step and only needs `index.html`, `styles.css`, `script.js`, and `products.json`.
