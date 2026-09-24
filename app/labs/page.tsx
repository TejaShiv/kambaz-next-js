import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2>Tejas Shivaprasad</h2>
      <ul>
        <li><Link href="/labs/lab1" id="wd-lab1-index-link">Lab 1: HTML Examples</Link></li>
        <li><Link href="/labs/lab2" id="wd-lab2-index-link">Lab 2: CSS Basics</Link></li>
        <li><Link href="/labs/lab3" id="wd-lab3-index-link">Lab 3: JavaScript Fundamentals</Link></li>
        <li><Link href="/labs/lab4" id="wd-lab4-link">Lab 4</Link></li>
        <li><Link href="/labs/lab5" id="wd-lab5-link">Lab 5</Link></li>
        <li><Link href="/" id="wd-kambaz-index-link">Kambaz</Link></li>
      </ul>
      <a href="https://github.com/TejaShiv/kambaz-next-js" id="wd-github">
        My GitHub repository
      </a>
    </div>
  );
}