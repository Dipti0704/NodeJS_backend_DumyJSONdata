const sort = require("../utils/SortUtil");
const filter = require("../utils/FilterUtil");
const DataService = require("../services/dataStore");

exports.getData = async (req, res) => {
  try {
    let data = await DataService.getData();

    if (req.query.filterBy && req.query.filterValue) {
      console.log("Filtering by:", req.query.filterBy, "Value:", req.query.filterValue);
      try {
        data = filter.FilterData(data, req.query.filterBy, req.query.filterValue);
      } catch (error) {
        console.log("Error in filtering data", error);
        throw error;
      }
    }

    if (req.query.sortBy) {
      const sortOrder = req.query.sortOrder || "asc";
      console.log("Sorting by:", req.query.sortBy, "Order:", sortOrder);
      try {
        data = sort.SortData(data, req.query.sortBy, sortOrder);
      } catch (error) {
        console.log("Error in sorting data", error);
        throw error;
      }
    }

    res.send(data);
  } catch (error) {
    res.status(500).send("Error in reading data");
  }
};
