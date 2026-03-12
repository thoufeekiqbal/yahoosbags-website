import React, {useState} from "react";
import axios from "axios";

function Contact(){

const [form,setForm]=useState({

name:"",
email:"",
message:""

})

const handleChange=(e)=>{

setForm({...form,[e.target.name]:e.target.value})

}

const handleSubmit=async(e)=>{

e.preventDefault()

await axios.post("http://localhost:5000/contact",form)

alert("Message sent")

}

return(

<div>

<h1>Bulk Order Inquiry</h1>

<form onSubmit={handleSubmit}>

<input name="name" placeholder="Name" onChange={handleChange}/>

<input name="email" placeholder="Email" onChange={handleChange}/>

<textarea name="message" placeholder="Your Requirement" onChange={handleChange}></textarea>

<button type="submit">Send</button>

</form>

</div>

)

}

export default Contact