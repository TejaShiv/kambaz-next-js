import fs from "node:fs";
import path from "node:path";

export default function ServerComponentDemo() {
  const platform = process.platform;
  const arch = process.arch;
  const nodeVersion = process.version;
  const serverRenderTime = new Date().toLocaleTimeString();
  const lab3Dir = path.join(process.cwd(), "app/labs/lab3");
  let files: string[] = [];
  try {
    files = fs.readdirSync(lab3Dir);
  } catch (error) {
    console.error("Error reading lab3 directory:", error);
    files = [];
  }
  return (
    <div id="wd-server-component-demo">
      <h4>Server Component Demo</h4>
      <h5>Server Render Time</h5>
      <p>Rendered on server at: {serverRenderTime}</p>
      <h5>Server Information</h5>
      <pre>
        {JSON.stringify({ platform, arch, nodeVersion, serverRenderTime }, null, 2)}
      </pre>
      <h5>Filesystem Access Demo</h5>
      <pre>{JSON.stringify(files, null, 2)}</pre>
      <hr />
    </div>
  );
}
