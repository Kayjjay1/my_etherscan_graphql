// Import ApolloServer from apollo-server
const { ApolloServer } = require("apollo-server");

// Import importSchema from graphql-import
const { importSchema } = require("graphql-import");

// Import EtherDataSource 
const EtherDataSource = require("./datasource/ethDatasource");

// Import schema from schema.graphql using importSchema
const typeDefs = importSchema("./schema.graphql"); 

// Configure environment variables
require("dotenv").config();

// Define resolvers
const resolvers = {
  Query: {
    // Resolver for etherBalanceByAddress
    etherBalanceByAddress: (root, _args, { dataSources }) =>  
      dataSources.ethDataSource.etherBalanceByAddress(),

    // Resolver for totalSupplyOfEther
    totalSupplyOfEther: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.totalSupplyOfEther(),

    // Resolver for latestEthereumPrice
    latestEthereumPrice: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.getLatestEthereumPrice(),

    // Resolver for blockConfirmationTime
    blockConfirmationTime: (root, _args, { dataSources }) =>
      dataSources.ethDataSource.getBlockConfirmationTime(),
  },
};

// Create ApolloServer instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ethDataSource: new EtherDataSource(), 
  }), 
});

// Set timeout to 0
server.timeout = 0;

// Start server on port 9000
server.listen("9000").then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`); 
});
