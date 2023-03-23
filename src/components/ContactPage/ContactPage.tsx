import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Get_ContactpageQuery } from "../../gql/graphql";
import ContactCard from "./ContactCard";

function ContactPage() {
  // Use the `useQuery` hook to make a query to the API
  const GET_CONTACTPAGE = gql(`
query GET_CONTACTPAGE {
      contactPage(where: {slug: "contacttest"}) {
    content {
      ... on Image {
        image {
          url
        }
      }
      ... on Text {
        text {
          text
        }
      }
      ... on Heading {
        heading
      }
    }
    slug
    person {
      location
      name
      phone
      stage
      title
      email
      image {
        url
      }
    }
    title
  }
}
`);
  const { data } = useQuery<Get_ContactpageQuery>(GET_CONTACTPAGE);

  return (
    <main>
      <article>
        <h1>{data?.contactPage?.title}</h1>
          {data?.contactPage?.content?.map((content) => {
            if (content?.__typename === "Image") {
              return (
                <img src={content?.image?.url} alt={content?.image?.url} />
              );
            }
            if (content?.__typename === "Text") { 
              return <p>{content?.text?.text}</p>;
            }
            if (content?.__typename === "Heading") {
              return <h2>{content?.heading}</h2>;
            }
            return null;
          })}
        
        <section>
          {data?.contactPage?.person?.map((person) => {
            return <ContactCard person={person} />; 
          })
          }
        </section>
      </article>
    </main>
      
  );
}
 
export default ContactPage;
