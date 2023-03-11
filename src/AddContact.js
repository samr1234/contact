import { useState } from "react";

const AddContact = () => {
  
const [contacts,setContacts]=useState("");
function handleChange(event) {

    
    setContacts(event.target.value);
  

}

const output=()=>{
     const output1= setContacts(contacts);
        console.log(output1);
}
return (
<div className="ui-main">

    
    <h2>Add Contact</h2>

    <form className="ui-form">

        <div className="field">

            <label>Name</label>
            <input type="text" name="name" placeholder="Name"   value={contacts} onChange={handleChange}/>
            </div>

       
        <div className="field">

            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
            </div>
            {/* <button onClick={output}>Add</button> */}


        </form>

        <div>{contacts}</div>



</div>


)}

export default AddContact