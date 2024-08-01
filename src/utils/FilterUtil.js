exports.FilterData = (data, filterBy, filterValue) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  if (!filterBy || !filterValue) {
    return data;
  }

  if (!(filterBy in data[0])) {
    throw new Error(`Field '${filterBy}' does not exist in the data.`);
  }

  return data.filter(item => item[filterBy] == filterValue);
};
