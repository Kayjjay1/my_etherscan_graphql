// Import RESTDataSource from apollo-datasource-rest
const { RESTDataSource } = require("apollo-datasource-rest"); 

// Define Ethereum address constant
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Define EtherDataSource class extending RESTDataSource
class EtherDataSource extends RESTDataSource {
  
  // Constructor method
  constructor() {
    
    // Call super constructor
    super();
    
    // Set base URL for API
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Method to get ETH balance for an address
  async etherBalanceByAddress() {
    
    // Call API to get balance
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get total ETH supply
  async totalSupplyOfEther() {
    
    // Call API to get supply
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get latest ETH price
  async getLatestEthereumPrice() {
    
    // Call API to get price
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get block confirmation time
  async getBlockConfirmationTime() {
    
    // Call API to get confirmation time
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Export EtherDataSource class 
module.exports = EtherDataSource;
