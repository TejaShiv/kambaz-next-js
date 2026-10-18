export default function OptionalChaining() {
  const house = {
    bedrooms: 4,
    address: { street: "Via Roma", city: "Roma" },
  } as {
    bedrooms: number;
    address?: { street: string; city: string };
    garage?: { cars: number };
  };
  const missing = undefined as { prop?: string } | undefined;
  return (
    <div id="wd-optional-chaining">
      <h4>Optional Chaining</h4>
      house.address?.city = {house.address?.city}
      <br />
      {'missing?.prop ?? "n/a"'} = {missing?.prop ?? "n/a"}
      <br />
      {"house.garage?.cars ?? 0"} = {house.garage?.cars ?? 0}
      <hr />
    </div>
  );
}
