export default async function PathParameters({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
