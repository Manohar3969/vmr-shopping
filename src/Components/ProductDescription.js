import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const ProductDescription = () => {
  return (
    <>
    <Header/>
    <div className='relative bg-slate-50 mt-1 overflow-auto'>
        <div className='pl-52 w-1/2 float-left'>
            <img className='float-left w-1/2 h-96 p-2 cursor-pointer' src="https://lowpricesaree.in/wp-content/uploads/2022/01/hrx-by-hrithik-roshan-men-yellow-printed-cotton-t-shirt-1.jpg" alt="" />
            <img className='float-left w-1/2 h-96 p-2 cursor-pointer' src="https://lowpricesaree.in/wp-content/uploads/2022/01/hrx-by-hrithik-roshan-men-yellow-printed-cotton-t-shirt-1.jpg" alt="" />
            <img className='float-left w-1/2 h-96 p-2 cursor-pointer' src="https://lowpricesaree.in/wp-content/uploads/2022/01/hrx-by-hrithik-roshan-men-yellow-printed-cotton-t-shirt-1.jpg" alt="" />
            <img className='float-left w-1/2 h-96 p-2 cursor-pointer' src="https://lowpricesaree.in/wp-content/uploads/2022/01/hrx-by-hrithik-roshan-men-yellow-printed-cotton-t-shirt-1.jpg" alt="" />
            <img className='float-left w-1/2 h-96 p-2 cursor-pointer' src="https://lowpricesaree.in/wp-content/uploads/2022/01/hrx-by-hrithik-roshan-men-yellow-printed-cotton-t-shirt-1.jpg" alt="" />

        </div>
        <div className='w-1/2 float-left'>
        <span className='flex font-bold pl-5 text-2xl mt-5'>HRX by Hrithik Roshan</span>
        <span className='flex pl-5 text-xl text-gray-500 mb-4 mt-2'>HRX T-Shirt</span>
        <hr className='mb-2'></hr>
        <span className='pl-5 font-semibold text-2xl'>Rs. 999</span>
        <span className='pl-5 line-through text-xl' >Rs. 499</span>
        <span className='pl-5 text-xl text-orange-400 font-semibold' >(50% Off)</span>
        <span className='flex pl-5 text-lg text-red-500 font-bold mt-5'>Only Few Left !</span>
        <span className='flex pl-5 text-sm text-green-600 font-bold mb-5'>Inclusive of all Taxes</span>
        
        <button className='float-left w-2/6 h-14 rounded-md bg-red-500 m-5 text-white font-semibold hover:bg-green-500'>Add to Cart</button>
        <button className='w-1/5 h-14 rounded-md m-5 font-semibold border-2 hover:bg-gray-500 hover:text-white'>Add to Wish List</button>
        <hr className='mb-2'></hr>

        <span className='flex pl-5 text-md font-bold mb-5'>Product Details</span>
        <span className='flex pl-5 text-md mb-10 w-3/5'>Stand out everywhere you go with the HRX Men's Athleisure T-shirt. The Bio Washed fabric feels soft against your skin while the classic cut makes it versatile and easy to style.</span>
        
        <span className='flex pl-5 text-md font-bold mb-5'>Features</span>
        <span className='flex pl-5 text-md mb-5 w-3/5'>
            Athleisure T-shirt <br />
        Bio Washed cotton feels soft against the skin. <br />
        Neck: Round Neck <br />
        Sleeve length: Short Sleeves <br />
        Length: Regular length <br />
        Fit: Regular fit</span>
        
        <span className='flex pl-5 text-md font-bold mb-5'>Size & Fit</span>
        <span className='flex pl-5 text-md mb-5 w-3/5'>
            Size worn by the model: M <br />
            Chest: 39" <br />
            Height: 6'1"
        </span>
        </div>
        <Footer/>
    </div>
    
    </>
    
  )
}
