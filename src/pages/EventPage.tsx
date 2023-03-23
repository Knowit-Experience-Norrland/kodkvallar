import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContactCard, Get_EventpageQuery} from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";

function EventPage() {
  // Use the `useQuery` hook to make a query to the API
  const GET_EVENTPAGE = gql(`
query GET_EVENTPAGE {
    eventPage(where: {eventId: 1}) {
      contact {
        email
        image {
          url
        }
        location
        name
        phone
        title
      }
        date
        eventId
        location {
          ... on EventLocation {
            adress
          }
        }
        title
        content {
          ... on Heading {
            heading
          }
          ... on Image {
            altText
            image {
              url
            }
          }
          ... on Text {
            text {
              text
            }
          }
        }
      }
    }
    
`);
  const { data } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE);

  return (
    <main>
      <article>
        <h1>{data?.eventPage?.title}</h1>
        <p>{data?.eventPage?.date}</p>
        <p>{data?.eventPage?.location?.adress}</p>
        {data?.eventPage?.content?.map((content) => {
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
       <div>
        {data?.eventPage?.contact?.map((contact) => {
          return <ContactCardComp contact={contact as ContactCard} />;
        })}
       </div>

      </article>
    </main>
  );
}

export default EventPage;
