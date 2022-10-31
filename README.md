# backendLoanAI

This express js application uses data from https://api.publicapis.org/entries and serves it.

## Routes Documentation

/api:
  ```
  http://localhost:8080/api
  ```
  This request will send back all the API records in a decreasing alphabetical order in JSON. 
  ```
  http://localhost:8080/api?render=true
  ```
  This request will send back a rendered html page with API records in a decreasing alphabetical order. 
  
/category:
  ```
  http://localhost:8080/category/:category
  ```
  This request will send back all the API records that matched the passed in category in JSON.. 
  ```
  http://localhost:8080/category/Music?limit=5
  ```
  This request will send back 5 API records in the music category in JSON as the query parameter indicates a limit of 5. 
  ```
  http://localhost:8080/category/Music?limit=5&render=true
  ```
  This request will send back a rendered html page with 5 API records in the music category as the query parameter indicates a limit of 5. 

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser, or make requests through insomnia/postman.

