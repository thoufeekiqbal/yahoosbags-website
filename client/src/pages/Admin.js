import React, {useState} from "react";
import axios from "axios";

function Admin(){

const [product,setProduct] = useState({

name:"",
price:"",
description:"",
image:""

})


const handleChange=(e)=>{

setProduct({...product,[e.target.name]:e.target.value})

}

const handleSubmit=(e)=>{

e.preventDefault()

axios.post("http://localhost:5000/api/products",product)

alert("Product Added")

}


return(

<div>

<h1>Add Product</h1>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Product Name" onChange={handleChange}/>

<input name="price" placeholder="Price" onChange={handleChange}/>

<input name="image" placeholder="Image URL" onChange={handleChange}/>

<textarea name="description" placeholder="Description" onChange={handleChange}></textarea>

<button>Add Product</button>

</form>

</div>

)

}

export default Admin