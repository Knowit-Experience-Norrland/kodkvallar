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
      <div key={contact?.id} className="contact-card">
        {
          // if contact has image print image else print null
          contact?.image?.url ? (
            <img
              src={contact?.image?.url}
              alt={contact?.image?.url}
              className="contact-img"
            />
          ) : null
        }
        <p className="green bold">{contact?.name}</p>
        <p>{contact?.title}</p>
        <a href={"mailto:" + contact?.email}>{contact?.email}</a>
        <p>{contact?.phone}</p>
      </div>
    </div>
  );
}

export default ContactPage;
