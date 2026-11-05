export default async function PathParametersThree({
  params,
}: {
  params: Promise<{ a: string; b: string; c: string }>;
}) {
  const { a, b, c } = await params;
  return (
    <div id="wd-path-parameters-three">
      <h4>Path Parameters</h4>
      {a} + {b} + {c} = {parseInt(a) + parseInt(b) + parseInt(c)}
    </div>
  );
}
