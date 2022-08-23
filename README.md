# graphQL-repo
graphQL Code Repository
***********************
This simple react application enables the user to fetch country list and once the user selects any country it will show its country code.

Ensure you have `node 14` or above

<i> Goal of this repo is to provide a starting point after the GraphQL workshop.
</i>

# Contents of this repo

- A sample Graphql server in `root/server/countries` folder;
- A react application in `root/src` folder.

##### To run this example you will need to do following.

Start the graphql server which runs on `port:4000` by default.

```
cd server/countries
npm install // (this is one time)
npm start
```

This starts the graphql server using `nodemon`;

- http://localhost:4000 (GET) will open the graphQL playground in the browser.
- http://localhost:4000 (POST) is being used to expose graphQL data.

Once the graphQL server is running - you can start the React App from root using

```
npm start
```

This will start your react application.