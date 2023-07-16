import React, { Children } from "react";
function ContactUs({name,children}){
    return(
        <>
        <div>{name}</div>
        <div>{children}</div>

        </>
        
    );
}
export default ContactUs;