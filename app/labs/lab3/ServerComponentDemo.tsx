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
  }
  return (
    <div id="wd-server-component-demo">
      <h4>Server Component Demo</h4>
      <h5>Server Information</h5>
      platform = {platform}
      <br />
      arch = {arch}
      <br />
      nodeVersion = {nodeVersion}
      <br />
      serverRenderTime = {serverRenderTime}
      <h5>Files read on the server</h5>
      <ul>
        {files.slice(0, 8).map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
