// child component
function Product({id, title, description, category,  price, discountPercentage, rating, stock}) { // Dyanic data ....
  console.log("h");
  return (
    <>
    <h1>{id}</h1>
    <h1>{title}</h1>
    <p>{description}</p>
    <h3>{category}</h3>
    <h3>{price}</h3>
    <h4>{discountPercentage}</h4>
    <h4>{rating}</h4>
    <p>{stock}</p>
    </>
  )
 }

 export default Product;