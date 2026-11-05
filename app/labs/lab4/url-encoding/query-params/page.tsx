export default async function QueryParameters({
  searchParams,
}: {
  searchParams: Promise<{ a?: string; b?: string; c?: string }>;
}) {
  const { a = "0", b = "0", c = "0" } = await searchParams;
  return (
    <div id="wd-query-parameters">
      <h4>Query Parameters</h4>
      {a} + {b} + {c} = {parseInt(a) + parseInt(b) + parseInt(c)}
    </div>
  );
}
