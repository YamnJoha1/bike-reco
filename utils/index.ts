
export async function fetchBike({pageNumber} : {pageNumber: number}) {
 
  const response = await fetch(`https://bikeindex.org/api/v3/search?page=${pageNumber}&per_page=10&location=munich&stolenness=proximity`, {
  });
  const result  = await response.json();
  

  return result
  
}


export async function allPageFetc() {
  const response = await fetch(`https://bikeindex.org/api/v3/search/count?&location=munich&stolenness=proximity`)
  const res  = await response.json();

  return res;
}

