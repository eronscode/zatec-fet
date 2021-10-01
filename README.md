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

NOTE: Ensure you're connected to the internet so api's can load up data.


### TASK FEATURES EXPLANATION

1. Design System - colors and stylings were used as specified in the design prototype. 

2. Autocomplete Search - A re-usable custom input component and re-usable hook was used to implement the live search. Also debounce function was used from lodash to prevent api calls on every key stroke.

3. Repository filter - Filters work as expected. Name filter filters repository by name. Min and max filters works together.  Error occurs when min greater than max filter and hence data is not refetched. 

4. Table Pagination & Sorting: React-table was used for the implementation of table. It comes with hooks by default for sorting & pagination.

5. Preserve Filter State Data: React context was used to preserve filter data. Filter data is stored for each organization only if the filter input was touched.

6. Charts: React google chart was used for the implementation of Timeline chart and scatter charts


## Deployment Link

This project was deployed to heroku : https://zatec-fet.herokuapp.com/

## Tips and Additions

Some features were not implemented due to lack of time and busy schedule. They include the Scatter chart and Data visualization. I also looked for an enpoint to fetch repositories in an organization with open and closed issues in the payload but unfortunately, the api provided by github only has open issues count in its payload for listed repositories in an organization. The only way to fetch the closed issues was to fetch by each repository. So that means for every 100 repositories, I'll hit an endpoint to fetch the closed issues. This implementation will be very poor. But using a library like react-query for data fetching might for very helpful in such cases. With react-query background fetch to those endpoints will be carried out with ease. it also provides caching of data. 

## Contact Info

Feel free to reach me on:

LinkedIn: https://www.linkedin.com/in/ose-matthew/

Email: osemu.matthew@gmail.com

Gracias 
