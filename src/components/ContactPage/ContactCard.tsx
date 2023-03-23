import React from "react";
import { ContactCard } from "../../gql/graphql";

function ContactPage(person: ContactCard) {
 console.log(person)

  return (
    <div>
         <div>
                <h2>{person?.name}</h2>
                <p>{person?.title}</p>
                <p>{person?.location}</p>
                <p>{person?.phone}</p>
                <p>{person?.email}</p>
                <img src={person?.image?.url} alt={person?.image?.url} /> 
              </div>
    </div>
  );
}

export default ContactPage;
