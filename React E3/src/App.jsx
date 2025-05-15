import Product from "./componenet/product.jsx"


// let a = 5 ;
// let b = 6 ; 
// let c = a + b ;
// console.log(c);


// Parents component
function App({shoedata}) {  
  // return <div>{c}</div>;
  // return <Product title = "Nike shoes" prices = "Rs599"/>; // custome Attributes
    
  return (
    <div> 
      {/* {
           shoedata.map((data) => {
            return <Product title={data.title} prices={data.prices}/>
           })
      } */}

    {shoedata.map((data) => <Product title={data.title} key={data.id} prices={data.prices}/>
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
