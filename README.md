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
| Cup Noodles | Wikimedia Commons | [202404 Cup Noodle](https://commons.wikimedia.org/wiki/File:202404_Cup_Noodle.jpg), CC0 1.0 | 2026-09-27 |
| Kikkoman Soy Sauce Dispenser | Wikimedia Commons | [Kikkoman soysauce](https://commons.wikimedia.org/wiki/File:Kikkoman_soysauce.jpg), CC BY 2.0 | 2026-09-27 |
| LAMY safari | Wikimedia Commons | [LamySafari](https://commons.wikimedia.org/wiki/File:LamySafari.jpg), CC BY-SA 3.0 | 2026-09-27 |

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
