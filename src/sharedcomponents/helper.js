export function filterData(searchText, filterRestaurant) {
    const filteredData = filterRestaurant.filter((resto) => {
      return resto.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
}
  