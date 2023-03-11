

const ContactCard=(props)=>{

    const {id,name,email}=props.contact;

    return (
       
        <div className="content">
            <div className="">{name}</div>
            <div>{email}</div>
            
        </div>
    );

}



export default ContactCard