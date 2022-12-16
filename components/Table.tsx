import { Product } from "@stripe/firestore-stripe-payments";
import React from "react";

interface Props {
  products: Product[];
}

function Table({ products }: Props) {
  return (
    <table>
      <tbody className="divide-y-3 divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product) => (
            <td className="tableData" key={product.id}>
              {product.prices[0].unit_amount}
            </td>
          ))}
        </tr>{" "}
        <tr className="tableRow">
          <td className="tableDataTitle">Watch Limit</td>
          {products.map((product) => (
            <td className="tableData" key={product.id}>
              {product.metadata.watchLimit} Trailers
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Resolution</td>
          {products.map((product) => (
            <td className="tableData" key={product.id}>
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Download</td>
          {products.map((product) => (
            <td className="tableData" key={product.id}>
              {product.metadata.download}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
