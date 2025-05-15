// let a = 5 ;
// let b = 6 ; 
// let c = a + b ;
// console.log(c);

// child component 

import Product from "./componenet/product.jsx"

let showdata = [
      {
      title : "Nike shoes",
      prices : "Rs5000",
      },
      {
      title : "Addidass shoes",
      prices : "Rs6000",
      },
      {
      title : "Jordan shoes",
      prices : "Rs1200",
      },
      {
      title : "PUMA shoes",
      prices : "Rs6900",
      },
      {
      title : "Skyland shoes",
      prices : "Rs1900",
      },

]


// Parents component
function App() {  
  // return <div>{c}</div>;
  // return <Product title = "Nike shoes" prices = "Rs599"/>; // custome Attributes
    
  return (
    <div> 
      {/* {
           showdata.map((data) => {
            return <Product title={data.title} prices={data.prices}/>
           })
      } */}

    {showdata.map((data) => <Product title={data.title} prices={data.prices}/>
    )}
    </div>
  )
  
  
  
  
  
  
  //   let h = <div>
    //      <Product title = "Nike shoes" prices = "Rs599"/>
    //      <Product title = "Puma shoes" prices = "Rs899"/>
    //      <Product title = "Addidass shoes" prices = "Rs1999"/>      
    // </div>
    // console.log(h);
    // return (
    //   h
    // );
}


export default App
