import React from "react";
import { ContactCard } from "../../gql/graphql";

// recive contact info from ContactCardComp.tsx and print to DOM
interface CardContactProps {
  contact: ContactCard | undefined;
}
function ContactPage({ contact }: CardContactProps) {
// print contact info 
  return (
    <div>
         <div key={contact?.id}>
                <h2>{contact?.name}</h2>
                <p>{contact?.title}</p>
                <p>{contact?.location}</p>
                <p>{contact?.email}</p>
                <p>{contact?.phone}</p>
                <img src={contact?.image?.url} alt={contact?.image?.url} /> 
              </div> 
    </div>
  );
}

export default ContactPage;
