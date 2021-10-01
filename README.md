## Zatec Frontend Test

An assignment to build a client-only UI that lets the user browse repositories on GitHub and extract some simple statistics as visualization - Task done by Osemudiamen Matthew Elebesunu.

## Libraries/Framework

- React
- styled-components
- axios
- react-table
- react-toastify
- react-google-charts

## Run this project locally

1. Download and Install Node JS from https://nodejs.org/en/download/
2. In the root project directory, type `npm install` to install the project's dependencies.
3. Once installation is complete, type `npm start` to start the project in your local browser. This will start up the full react application.

NOTE: Ensure you're connected to the internet so repos can load up.


### TASK FEATURES EXPLANATION

1. API Implementation: I used firebase firestore for this project and created endpoints in `pages/api/products/index.js` to create products and fetch products.

2. Featured Products: The products list being fetched from the backend had one product with a flag of featured=true. This product was filtered from the array and displayed at the top of the page. Code implementation can be found here: `components/Product/FeaturedProduct/index.js`

3. Product List: The products fetched from the api displays 6 items at first and hovering over the image displays the "add to cart" button. Some products also have the best seller flag.

4. Add to cart: The add to cart button add elements to the cart and make the cart dropdown visible. A context state was created for the cart items and cart open state. This made cart items avaialble to comsumers of any components, giving components the flexibility to add and remove items from cart or even close the dropdown toggle of the cart.

5. Pagination: I created a resuable pagination component and also created functions to change pagination display content.

6. Sorting: i implemted dynamic category filter. Categories were dynamically filtered from the list of API data. Also price ranges were also dynamically filtered based the mininum and maximum prices from the API data.

7. Filtering: I implemented filtering of products based on price and name in ascending and descending order. This was achieved with javascript filter functions. The modal for filtering also works on mobile.

8. Web performance: In order to achieve great web performance, i utitlized the next js image component to render images specified for every screen thereby reducing Largest Contentful Paint(LCP) core web vital.

## Deployment Link

This project was deployed to heroku : https://poc-ecommerce-test.herokuapp.com/

## Tips and Additions

Althought this is a POC, it would have been nice to display a flash message when an item is added to cart. That way a user knows items are added to cart.

## Contact Info

Feel free to reach me on:

LinkedIn: https://www.linkedin.com/in/ose-matthew/

Email: osemu.matthew@gmail.com

Gracias
