"use client";

import Link from "next/link";
import { useState } from "react";

export default function EncodingParametersInURLs() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const [c, setC] = useState("11");

  return (
    <div id="wd-encoding-parameters-in-urls">
      <h4>Encoding Parameters in URLs</h4>

      <label htmlFor="wd-url-a">a</label>
      <input
        id="wd-url-a"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <br />
      <label htmlFor="wd-url-b">b</label>
      <input
        id="wd-url-b"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <br />
      <label htmlFor="wd-url-c">c</label>
      <input
        id="wd-url-c"
        value={c}
        onChange={(e) => setC(e.target.value)}
      />
      <br />

      <h5>Query parameters</h5>
      <Link
        id="wd-query-parameters-link"
        href={`/labs/lab4/url-encoding/query-params?a=${a}&b=${b}&c=${c}`}
      >
        {`Query a=${a} b=${b} c=${c}`}
      </Link>

      <h5>Path parameters</h5>
      <Link
        id="wd-path-parameters-link"
        href={`/labs/lab4/url-encoding/path-params/${a}/${b}/${c}`}
      >
        {`Path ${a}/${b}/${c}`}
      </Link>
      <hr />
    </div>
  );
}
