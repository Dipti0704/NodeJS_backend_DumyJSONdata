exports.SortData = (data, sortBy, sortOrder) => {
  if (!data || !Array.isArray(data) || data.length ===0){
    return [];
  }

  if (!sortBy){
    return data;

  }
  if (!(sortBy in data[0])){
    throw new Error( `Field '${sortBy}' does not exist in the data.`);
  }
  if (sortOrder.toLowerCase()==="asc"){
    return data.sort((a,b)=>{
      if (a[sortBy] < b[sortBy]){
        return -1;
      }
      if (a[sortBy] > b[sortBy]){
        return 1;
      }
      return 0;
    });
  }
  else if(sortOrder.toLowerCase()==="desc"){
    return data.sort((a,b)=>{
      if (a[sortBy] > b[sortBy]){
        return -1;
      }
      if (a[sortBy] < b[sortBy]){
        return 1;
      }
      return 0;
    });
  }
  else{
    return data;
  }
}