# The project
Built with React and Typescript and consumes a Hygraph GraphQL API and Google Maps API. 
Uses Sass for styling and GraphQL Code Generator for generating types from the GraphQL schema.

## ENV variables 

The types of ENV variables used in this project

| Variable  | Origin |
| ------------- | ------------- |
| REACT_APP_GOOGLE_MAPS_API_KEY | A Google API key for the Google Maps API "Maps JavaScript API" |
| REACT_APP_HG_API_URL  | The API url for your Hygraph Headless CMS. (Full access for this project)  |
| REACT_APP_HG_API_AUTH | API Key for the above API in Hygraph. (Full access for this project) |


## Scripts 
``Npm install`` - install dependencies

``Npm start`` - start the project

``Npm run build`` - build the project

``yarn graphql-codegen --require dotenv/config --watch`` - generate types from the GraphQL schema

