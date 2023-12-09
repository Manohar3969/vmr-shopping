import React from 'react'
import { Header } from './Header'
import { OffersBanner } from './OffersBanner'
import { Footer } from './Footer'
import { SmallBanners }  from './SmallBanners'

export const HomePage = () => {
  return (
    <div>
        <Header/>
        <OffersBanner imagePath="https://t3.ftcdn.net/jpg/03/16/37/64/360_F_316376413_nYL2jpLONPQPOsy31DE86n7FPpSxPIi3.jpg"/>
        <div className='flex justify-center my-5'>
          <h1 className="text-3xl font-bold text-red-600">CRAZY DEALS</h1>
        </div>
        <SmallBanners imagePath="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dress-store-big-promotion-poster-template-design-4431dfdb163a854b88eae2dfaf24e356_screen.jpg?ts=1665416756"/>
        <SmallBanners imagePath="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/summer-fashion-sale-poster-design-template-6cfa6550db50a3c184a2dc3f4b00b074_screen.jpg?ts=1656920331"/>
        <SmallBanners imagePath="https://i.pinimg.com/originals/b4/c6/80/b4c680f26a13d48905401ffa46e19e2d.jpg"/>
        <SmallBanners imagePath="https://d168jcr2cillca.cloudfront.net/uploadimages/sales_offer_mainpic_20100119171953Ritu-wear.png"/>
        <SmallBanners imagePath="https://pbs.twimg.com/media/CUPJ6-KWcAAAX1p.png"/>
        <SmallBanners imagePath="https://i.pinimg.com/1200x/80/95/7a/80957a83a8b2c2aa0339b6f4b3d00d85.jpg"/>
        <Footer/>
    </div>
  )
}
