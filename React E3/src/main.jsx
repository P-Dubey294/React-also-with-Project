import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Product from './componenet/product.jsx'
 let shoedata = [
      {
      id : 1,
      title : "Nike shoes",
      prices : "Rs5000",
      },
      {
      id : 2,
      title : "Addidass shoes",
      prices : "Rs6000",
      },
      {
      id : 3,
      title : "Jordan shoes",
      prices : "Rs1200",
      },
      {
      id : 4,
      title : "PUMA shoes",
      prices : "Rs6900",
      },
      {
      id : 5,
      title : "Skyland shoes",
      prices : "Rs1900",
      },

]

createRoot(document.getElementById('root')).render(<App shoedata ={shoedata}/>);
