import MathLib, { add, subtract, multiply, divide } from "./Math";
import * as Matematica from "./Math";

export default function DestructingImports() {
  return (
    <div id="wd-destructuring-imports">
      <h4>Destructing Imports</h4>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border p-1 text-left">Default object</th>
            <th className="border p-1 text-left">Namespace</th>
            <th className="border p-1 text-left">Named functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-1">MathLib.add(2, 3) = {MathLib.add(2, 3)}</td>
            <td className="border p-1">Matematica.add(2, 3) = {Matematica.add(2, 3)}</td>
            <td className="border p-1">add(2, 3) = {add(2, 3)}</td>
          </tr>
          <tr>
            <td className="border p-1">MathLib.subtract(5, 1) = {MathLib.subtract(5, 1)}</td>
            <td className="border p-1">Matematica.subtract(5, 1) = {Matematica.subtract(5, 1)}</td>
            <td className="border p-1">subtract(5, 1) = {subtract(5, 1)}</td>
          </tr>
          <tr>
            <td className="border p-1">MathLib.multiply(3, 4) = {MathLib.multiply(3, 4)}</td>
            <td className="border p-1">Matematica.multiply(3, 4) = {Matematica.multiply(3, 4)}</td>
            <td className="border p-1">multiply(3, 4) = {multiply(3, 4)}</td>
          </tr>
          <tr>
            <td className="border p-1">MathLib.divide(8, 2) = {MathLib.divide(8, 2)}</td>
            <td className="border p-1">Matematica.divide(8, 2) = {Matematica.divide(8, 2)}</td>
            <td className="border p-1">divide(8, 2) = {divide(8, 2)}</td>
          </tr>
          <tr>
            <td className="border p-1">MathLib.add(10, 20) = {MathLib.add(10, 20)}</td>
            <td className="border p-1">Matematica.add(10, 20) = {Matematica.add(10, 20)}</td>
            <td className="border p-1">add(10, 20) = {add(10, 20)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}
