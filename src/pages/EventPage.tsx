import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContactCard, Get_EventpageQuery} from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";

function EventPage() {
  // get id from params 
const params = useParams();
let id = parseInt(params.id!)

  // Use the `useQuery` hook to make a query to the API
  const GET_EVENTPAGE = gql(`
query GET_EVENTPAGE ($id: Int!) {
    eventPage(where: {eventId: $id }) {
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
              raw
            }
          }
        }
      }
    }
    
`);

  const { data } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE, {variables: {id}});

  return (
    <main>
      <article>
        <h1>{data?.eventPage?.title}</h1>
        <p>{data?.eventPage?.date}</p>
        <p>{data?.eventPage?.location?.adress}</p>
        {data?.eventPage?.content?.map((content, i) => {
          if (content?.__typename === "Image") {
            return <img key={i} src={content?.image?.url} alt={content?.altText} />;
          }
          if (content?.__typename === "Text") {
            return <RichText content={content.text?.raw} key={i}/>;
          }
          if (content?.__typename === "Heading") {
            return <h2 key={i} >{content?.heading}</h2>;
          }
          return null;
        })}
       <div>
        {data?.eventPage?.contact?.map((contact, i) => {
          return <ContactCardComp contact={contact as ContactCard} key={i}  />;
        })}
       </div>

      </article>
    </main>
  );
}

export default EventPage;
