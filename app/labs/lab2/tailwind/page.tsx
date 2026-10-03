export default function TailwindLab() {
  return (
    <div id="wd-tailwind">
      <h2>Tailwind Samples</h2>

      <div id="wd-tailwind-spacing">
        <h3>Spacing</h3>
        <div className="p-4 m-4 bg-yellow-200">Padding 4 and margin 4</div>
        <div className="px-8 py-2 mt-6 bg-blue-200">
          Horizontal padding 8, vertical padding 2, margin top 6
        </div>
      </div>

      <div id="wd-tailwind-typography">
        <h3>Typography</h3>
        <p className="text-xs">Extra small text</p>
        <p className="text-base font-normal">Base size, normal weight</p>
        <p className="text-2xl font-bold">Large and bold</p>
        <p className="text-right italic underline">Right aligned, italic, underlined</p>
      </div>

      <div id="wd-tailwind-background-colors">
        <h3>Background colors</h3>
        <div className="bg-red-500 text-white p-2">Red 500</div>
        <div className="bg-green-500 text-white p-2">Green 500</div>
        <div className="bg-blue-500 text-white p-2">Blue 500</div>
        <div className="bg-gray-800 text-white p-2">Gray 800</div>
      </div>

      <div id="wd-tailwind-responsive">
        <h3>Responsive prefixes</h3>
        <div className="bg-red-300 md:bg-green-300 lg:bg-blue-300 p-4">
          Red on small screens, green at md, blue at lg. Resize the window.
        </div>
        <div className="text-sm md:text-lg lg:text-3xl">
          This text grows at each breakpoint.
        </div>
      </div>

      <div id="wd-tailwind-filters">
        <h3>Filters</h3>
        <div className="bg-purple-500 text-white p-4 blur-sm">Blurred</div>
        <div className="bg-purple-500 text-white p-4 grayscale">Grayscale</div>
        <div className="bg-purple-500 text-white p-4 opacity-50">Half opacity</div>
        <div className="bg-purple-500 text-white p-4 brightness-150">Brighter</div>
      </div>

      <div id="wd-tailwind-grid-system">
        <h3>Grid system</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-yellow-200 p-4">One</div>
          <div className="bg-blue-200 p-4">Two</div>
          <div className="bg-green-200 p-4">Three</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="bg-red-200 p-4">A</div>
          <div className="bg-red-200 p-4">B</div>
          <div className="bg-red-200 p-4">C</div>
          <div className="bg-red-200 p-4">D</div>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="col-span-3 bg-indigo-200 p-4">Spans three columns</div>
          <div className="bg-indigo-400 p-4">One</div>
        </div>
      </div>
    </div>
  );
}
