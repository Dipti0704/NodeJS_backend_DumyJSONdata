

const axios = require('axios');
const fs = require('fs');
const path = require('path');


class DataService{
  constructor(){
    this.filePath = path.join(__dirname, '../../data/data.json');

  }

  async fetchDataAndStore(){
    try {
      const response =await axios.get('https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json');
      await fs.writeFileSync(this.filePath, JSON.stringify(response.data, null, 2));
      console.log("Data fetched and stored successfully");

    }
    catch(error){
      console.log("Error in fetching data ", error);
      throw error;
    }
  }

  async getData(){
    try{
      const data = await fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    }
    catch(error){
      console.log("Error in reading data ", error);
      throw error;
    }
  }
}

module.exports = new DataService();
