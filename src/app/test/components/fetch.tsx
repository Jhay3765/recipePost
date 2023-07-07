export const fetchData = async () => {
  const response = await fetch("/api/storeJSONData");
  const data = await response.json();
  console.log(data);
};
