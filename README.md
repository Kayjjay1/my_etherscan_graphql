# GraphQL With Etherscan APIs

## Getting Started

To get started using the GraphQL Etherscan API, follow these steps:

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create an Etherscan API key (explained below)
4. Start the Apollo server (explained below)
5. Make GraphQL queries against the server (example below)

## Benefits of using GraphQL API

Wrapping the Etherscan REST APIs in a GraphQL API provides the following benefits:

- Query multiple related resources in a single API call
- Strong typing system
- Intuitive query language
- Built-in documentation

## Create an Etherscan API Key

To use the Etherscan APIs, you'll need an API key. Follow these steps:

1. Sign up for an Etherscan account at https://etherscan.io/register
2. Go to https://etherscan.io/myapikey to generate an API key
3. Add the API key to a `.env` file as `ETHERSCAN_API=your_api_key`

## Overview of GraphQL Etherscan API endpoints

The GraphQL API wraps the following Etherscan REST endpoints:

- `etherBalanceByAddress` - Get ETH balance for an address
- `totalSupplyOfEther` - Get total ETH supply
- `latestEthereumPrice` - Get latest ETH price
- `blockConfirmationTime` - Get estimated block confirmation time

See the `schema.graphql` file for details.

## How to run Apollo Server

Starting the Apollo GraphQL Server:

1. Open your terminal on VSCode
2. Run the following command to start the server: `node index.js`
3. Upon successful startup, you should see this message: 🚀 Server ready at http://localhost:9000/
4. Access the Apollo Server by navigating to http://localhost:9000 on your browser

## Sample GraphQL Query

Below is a sample GraphQL query to fetch the necessary data from Etherscan

```graphql
query {
  etherBalanceByAddress {
    message
    result
  }
  totalSupplyOfEther {
    message
    result
  }
  latestEthereumPrice {
    message
    result {
      ethbtc
      ethusd
      ethusd_timestamp
    }
  }
  blockConfirmationTime {
    message
    result
  }
}
```