import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavbar from './Components/navbar/Navbar';
import Mycarousel from './Components/Slider/Slider';
import {ProductData}  from './ProductData';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';




export const App = () => {
  console.log(ProductData);
  return (
   <>
   <HeaderNavbar/>
   <Mycarousel/>
   <div style={{display:"flex",flexWrap:"wrap",gap:"50px",marginBlockStart:"100px"}} className="container mt-4">
   {
    ProductData.map((e,i) => {
      return <Cards key={i} imgSrc={e.image} tittle={e.title} desc={e.description}/>
    })
   }
   </div>
<Footer/>
   </>
  )
}


