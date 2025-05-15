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

    {shoedata.map((data) => <Product 
    id={data.id}
    title={data.title}
    description={data.description}
    category={data.category}
    price={data.price}
    discountPercentage={data.discountPercentage}
    rating={data.rating}
    stock={data.stock}
    />
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
