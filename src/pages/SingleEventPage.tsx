import React from "react";
import { useQuery } from "@apollo/client";
import { ContactCard, Get_EventpageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams } from "react-router-dom";
// import EventSignupComp from "../components/EventSignup/EventSignupComp";
import MapComp from "../components/Map/MapComp";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";

function EventPage() {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  //create fragment of query
  const locationFragment = graphql(`
    fragment locationFragment on EventPage {
      location {
        ... on EventLocation {
          adress
          id
          map {
            latitude
            longitude
          }
        }
      }
    }
  `);
  //create fragment of query
  const EventContentFragment = graphql(`
    fragment EventContentFragment on EventPage {
      content {
        ... on Heading {
          heading
          id
        }
        ... on Image {
          altText
          imageText
          id
          image {
            url
          }
        }
        ... on Text {
          id
          text {
            raw
          }
        }
      }
    }
  `);
//create query with fragments and slug for variable 
  const GET_EVENTPAGE = graphql(`
    query GET_EVENTPAGE($slug: String!) {
      eventPage(where: { slug: $slug }) {
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
        ...EventContentFragment
        date
        slug
        title
        ...locationFragment
      }
    }
  `);

  const { data, error } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE, {
    variables: { slug },
  });
  const { eventPage } = data || {};
  let location = useFragment(locationFragment, eventPage);
  let map = location?.location?.map;
  let mainContent = useFragment(EventContentFragment, eventPage);
  let position = { lat: map?.latitude || 0, lng: map?.longitude || 0 };
 
  if (error) {
  return <div><p>Något gick fel..</p></div>;
  }
  
  return (
    <main>
      <article>
        <h1>{eventPage?.title}</h1>
        <p>{eventPage?.date}</p>
        <p>{location?.location?.adress}</p>
        {position.lat !== 0 && <MapComp position={position} />}
        {mainContent && <MainContent content={mainContent.content} />}
        <div>
          {eventPage?.contact?.map((contact, i) => {
            return <ContactCardComp contact={contact as ContactCard} key={i} />;
          })}
        </div>
        {/* <EventSignupComp slug={slug} /> */}
      </article>
    </main>
  );
}

export default EventPage;
