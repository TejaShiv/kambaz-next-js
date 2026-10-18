export default function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  return (
    <div id="wd-house">
      <h4>House</h4>
      bedrooms = {house.bedrooms}
      <br />
      bathrooms = {house.bathrooms}
      <br />
      <h5>owners</h5>
      {house.owners.join(", ")}
      <br />
      city = {house.address.city}
      <br />
      <pre>{JSON.stringify(house, null, 2)}</pre>
      <hr />
    </div>
  );
}
