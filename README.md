# BVO-Flexi-Box-Multi-Steps-v2
Flexi Box item to select multiple items from multiple collections with fixed price.

Follow the followings steps into your Dawn theme code:

1. Include the jQuery CDN link to the `<head>` section of your theme.liquid file.
  
    `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>`

2. Create a new section file `flexi-box-multi-steps-product.liquid` in the sections directory.

3. Paste the code from the `flexi-box-multi-steps-product.liquid` file.

4. Create a new product template in JSON format `product.flexi-box-multi-steps-product.json` in the templates directory.
  
      <img width="500" src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/Picture1_5c7434b9-fbfe-40a0-add7-1782760e9026.png?v=1650882666">

5. Paste the code from the `product.flexi-box-multi-steps-product.json` file.

6. Create a new product for the Flexi Box item with title and price (eg. Ultimate Perfume Box/Rs. 999/-) and choose the template `flexi-box-multi-steps-product`.

7. Create new manual/smart collections for Flexi Box categories with a title (eg. Men’s Perfume, Women’s Perfume, Unisex Perfumes).

8. Create a new asset file `flexi-box-multi-steps.css` in the assets directory.

9. Paste the code from the `flexi-box-multi-steps.css` file.
  
10. Create a new asset file `flexi-box-multi-steps.js` in the assets directory.

11. Paste the code from the `flexi-box-multi-steps.js` file.

12. Create a new liquid snippet file `flexi-box-img-wrapper.liquid` in the snippets directory.

13. Paste the code from the `flexi-box-img-wrapper.liquid` file.

14. Open Customize editor and go to the Flexi box item and open `Flexi Box Multi Steps` section. Choose your Flexi Box collections.
  
      <img width="300" src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/Picture2_6fb50509-f893-41cc-a2b2-af63a35608b7.png?v=1650882666">

>**Note:** Follow the following steps if you need to hide the Flexi box item from the collection pages and the search page results.

15. Add `hidden` tag to the Flexi Box item to hide it from the collection pages and the search page results.

16. Go to the file `main-collection-product-grid.liquid` in the sections directory and find(Ctrl + F) `{%- for product in collection.products -%}`. Paste the following code, best right after `{% for product in collection.products %}` and before the `<li>` tag.
  ```
    {% assign displayProduct = true %}
    {% if product.tags contains 'hidden' %}
    {% assign displayProduct = false %}
    {% endif %}
    {% if displayProduct %}
  ```

And paste `{% endif %}` after the closing the `</li>` tag and before the `{% endfor %}`. This will probably look similar to this:
  
<img width="500" src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/Picture3_c5b30456-ef00-499d-8f08-92c3bebd397c.png">

17. Go to the file `main-search.liquid` in the sections directory and find(Ctrl + F) `{%- for item in search.results -%}`. Paste the following code, best right after `{%- for item in search.results -%}` and before the `<li>` tag.
  ```
    {% assign displayProduct = true %}
    {% if product.tags contains 'hidden' %}
    {% assign displayProduct = false %}
    {% endif %}
    {% if displayProduct %}
  ```

And paste `{% endif %}` after the closing the `</li>` tag and before the `{% endfor %}`. This will probably look similar to this:

<img width="500" src="https://cdn.shopify.com/s/files/1/0561/9256/5292/files/Picture4_a4a6b90d-c217-432d-9154-43f654ff61bf.png">
