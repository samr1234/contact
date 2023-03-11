import Header from './Header'
import AddContact from './AddContact'
import Contactlist from './Contactlist'
import {useState} from 'react'



const contacts=[

    {id:"1",name:"Raj",email:"Raj@gmail.com"},
    {id:"2",name:"sam",email:"sam@gmail.com"},
]




const App=()=>{


    // const [contacts,setContacts]=useState([]);
return (


    <div>
        <Header/>
        <AddContact/>
        <Contactlist
        contacts={contacts}
        />
      
       

    </div>
)



}

export default App