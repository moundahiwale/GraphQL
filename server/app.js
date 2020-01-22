const express = require("express");
const graphQlHttp = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use("/graphql", graphQlHttp({ schema, graphiql: true }));

app.listen(4000, () => {
  console.log("Now listening for requests on port 4000");
});
