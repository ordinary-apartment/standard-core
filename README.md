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

The page uses a graphic placeholder while `imageUrl` is empty. Do not copy or re-host Amazon product images. Keep image retrieval separate from the catalog data so an approved API or affiliate image service can be added later.

If an Amazon link is added, the interface opens it in a new tab with `rel="sponsored noopener noreferrer"`. Prices are never shown.

## Local check

Serve the directory over HTTP so `products.json` can be fetched:

```sh
python3 -m http.server 8000 --directory standard-core
```

Open <http://localhost:8000>. Check desktop, tablet, and phone widths, keyboard focus, search, and placeholder behavior.

## GitHub Pages

Publish the `standard-core/` directory as part of the repository's static Pages artifact, or point a separate Pages project at this directory. The site has no build step and only needs `index.html`, `styles.css`, `script.js`, and `products.json`.
