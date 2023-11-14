import React from 'react'

const OrderPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
        <table className='w-full border-seperate border-spacing-3'>
          <thead>
            <tr className='text-left'>
              <th className='hidden md:block'>Order ID</th>
              <th>Date</th>
              <th>Price</th>
              <th className='hidden md:block'>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-sm md:text-base bg-red-50'>
              <td className='hidden md:block py-6 px-1'>123456783454</td>
              <td className='py-6 px-1'>28.09.2023</td>
              <td className='py-6 px-1'>89.90</td>
              <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
              <td className='py-6 px-1 text-red-500'>On the way (approx. 10min)...</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123456543187</td>
              <td className='py-6 px-1'>27.09.2023</td>
              <td className='py-6 px-1'>90.90</td>
              <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (3)</td>
              <td className='py-6 px-1 text-green-500'>Delivered</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123479094902</td>
              <td className='py-6 px-1'>27.09.2023</td>
              <td className='py-6 px-1'>109.90</td>
              <td className='hidden md:block'>Big Burger Menu (2), Veggie Pizza (3), Coca Cola 1L (2)</td>
              <td className='py-6 px-1 text-green-500'>Delivered</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123468923412</td>
              <td className='py-6 px-1'>26.09.2023</td>
              <td className='py-6 px-1'>129.90</td>
              <td className='hidden md:block'>Big Burger Menu (4), Veggie Pizza (2), Coca Cola 1L (3)</td>
              <td className='py-6 px-1 text-green-500'>Delivered</td>
            </tr>
            <tr className='text-sm md:text-base odd:bg-gray-100'>
              <td className='hidden md:block py-6 px-1'>123456783465</td>
              <td className='py-6 px-1'>25.09.2023</td>
              <td className='py-6 px-1'>112.90</td>
              <td className='hidden md:block'>Big Burger Menu (3), Veggie Pizza (2), Coca Cola 1L (2)</td>
              <td className='py-6 px-1 text-green-500'>Delivered</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default OrderPage;
