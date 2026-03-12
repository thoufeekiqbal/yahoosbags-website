import React, {useEffect, useState} from "react";
import axios from "axios";

function Products(){

const [products,setProducts] = useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/products")
.then(res=>{
setProducts(res.data)
})

},[])


return(

<div>

<h1>Our Products</h1>

<div className="grid md:grid-cols-3 gap-10 p-10">

{products.map((product) => (

<div className="shadow-lg rounded-xl overflow-hidden">

<img
src={product.image}
alt=""
className="w-full h-64 object-cover"
/>

<div className="p-5">

<h3 className="text-xl font-semibold">
{product.name}
</h3>

<p className="text-gray-500">
{product.description}
</p>

<p className="font-bold mt-3">
₹{product.price}
</p>

</div>

</div>

))}

</div>
</div>

)

}

export default Products