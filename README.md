A simple web page that uses JavaScript to filter, sum and display JSON data accessed from a remote server.

In this example, the data is a product list from a mock Shopify store.  The data is in JSON format and can be accessed [here](http://shopicruit.myshopify.com/products.json).

The goal is to calculate how much all variants of lamps and wallets in the product list cost.  The script uses the [JSONP](https://en.wikipedia.org/wiki/JSONP) technique to get the JSON data from the remote server.  The data is filtered for just lamp and wallet variant information.  The product title along with the color and price of each variant of the item is displayed on the web page.  The prices of all the filtered items are summed and a total price for all lamp and wallet variants is displayed.
