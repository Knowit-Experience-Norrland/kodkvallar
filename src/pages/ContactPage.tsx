import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContactCard, Get_ContactpageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";

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
        altText
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
    contact {
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
  const { data, error } = useQuery<Get_ContactpageQuery>(GET_CONTACTPAGE);
  if(error) { console.log(error) }
  return (
    <main>
      <article>
        <h1>{data?.contactPage?.title}</h1>
        <section>
          {data?.contactPage?.content?.map((content) => {
            if (content?.__typename === "Image") {
              return <img src={content?.image?.url} alt={content?.altText} />;
            }
            if (content?.__typename === "Text") {
              return <p>{content?.text?.text}</p>;
            }
            if (content?.__typename === "Heading") {
              return <h2>{content?.heading}</h2>;
            }
            return null;
          })}
        </section>
        <section>
          {data?.contactPage?.contact?.map((contact) => {
            return <ContactCardComp contact={contact as ContactCard} />;
          })}
        </section>
      </article>
    </main>
  );
}

export default ContactPage;
