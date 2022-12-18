import { CheckIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { Product } from "@stripe/firestore-stripe-payments";
import React from "react";

interface Props {
  products: Product[]
  selectedPlan: Product | null
}

function Table({ products, selectedPlan }: Props) {
  return (
    <table>
      <tbody className="divide-y divide-[white]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product) => (
            <td className={`tableData ${selectedPlan?.id === product.id ? "text-white" : "text-gray-500"}`} key={product.id}   >
              {product.prices[0].unit_amount}
            </td>
          ))}
        </tr>{" "}
        <tr className="tableRow">
          <td className="tableDataTitle">Watch Limit</td>
          {products.map((product) => (
            <td className={`tableData ${selectedPlan?.id === product.id ? "text-white" : "text-gray-500"}`} key={product.id}   >
              {product.metadata.watchLimit} Trailers
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Resolution</td>
          {products.map((product) => (
            <td className={`tableData ${selectedPlan?.id === product.id ? "text-white" : "text-gray-500"}`} key={product.id}  >
              {product.metadata.resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Download</td>
          {products.map((product) => (
            <td className={`tableData ${selectedPlan?.id === product.id ? "text-white" : "text-gray-500"}`} key={product.id} >
              {product.metadata.download === 'true' ? (
                <CheckIcon className="inline-block h-8 w-8"/>
              ) : <LockClosedIcon className="inline-block h-8 w-8"/>}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
