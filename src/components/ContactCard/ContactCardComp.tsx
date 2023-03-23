import React from "react";
import { ContactCard } from "../../gql/graphql";

interface CardContactProps {
  contact: ContactCard | undefined;
}
function ContactPage({ contact }: CardContactProps) {


  return (
    <div>
         <div>
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
