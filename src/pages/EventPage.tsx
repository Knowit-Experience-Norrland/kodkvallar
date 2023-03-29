import React from "react";
import { gql, useQuery } from "@apollo/client";
import { ContactCard, Location, Get_EventpageQuery} from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import EventSignupComp from "../components/EventSignup/EventSignupComp";
import MapComp from "../components/Map/MapComp";

function EventPage() {
  // get id from params 
const params = useParams();
let id = parseInt(params.id!);

  // Use the `useQuery` hook to make a query to the API
  const GET_EVENTPAGE = gql(`
query GET_EVENTPAGE ($id: Int!) {
    eventPage(where: {eventId: $id }) {
      eventId
      location {
        ... on EventLocation {
          adress
          map {
            latitude
            longitude
          }
        }
      }
      slug
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
      contact {
        email
        location
        name
        phone
        title
        image {
          url
        }
      }
      date
    }
  }
    
`);

  const { data } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE, {variables: {id}});
const {eventPage} = data || {};
if (!eventPage) {
  return <div>Loading...</div>;
}
  return (
    <main>
      <article>
        <h1>{eventPage?.title}</h1>
        <p>{eventPage?.date}</p>
        <p>{eventPage?.location?.adress}</p>
        {/* <MapComp lat={eventPage.location?.map?.latitude as number} lng={eventPage.location?.map?.longitude as number} /> */}
        {eventPage?.content?.map((content, i) => {
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
        {eventPage?.contact?.map((contact, i) => {
          return <ContactCardComp contact={contact as ContactCard} key={i}  />;
        })}
       </div>
          <EventSignupComp id={id}/>
      </article>
    </main>
  );
}

export default EventPage;
