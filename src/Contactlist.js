import React from 'react';
import ContactCard from './ContactCard';

const Contactlist = (props) => {
    console.log(props)
   
    const showContacts=props.contacts.map((contact)=>{
       
    return <ContactCard contact={contact}/>;


    
    

    });
    {console.log(showContacts);}
   return ( <div>

        <h1>Contact List</h1>

        <div className="">{showContacts}</div>
        
    </div>

   );

}

export default Contactlist