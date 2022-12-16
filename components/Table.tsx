import { Product } from '@stripe/firestore-stripe-payments'
import React from 'react'

interface Props {
  products: Product[]
}

function Table({products}: Props) {
  return (
    <table>
      <tbody>
        <tr className='tableRow'>
          <td className='tableDataTitle'>
            Monthly Price
          </td>
          {products.map((product) => (
            <td  className="tableData" key={product.id}>
              {product.prices[0].unit_amount}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}

export default Table
