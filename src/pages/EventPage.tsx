import React from "react";
import { useQuery } from "@apollo/client";
import { ContactCard, Get_EventpageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams } from "react-router-dom";
import { RichText } from "@graphcms/rich-text-react-renderer";
import EventSignupComp from "../components/EventSignup/EventSignupComp";
import MapComp from "../components/Map/MapComp";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";

function EventPage() {
  // get id from params
  const params = useParams();
  let id = parseInt(params.id!);

  //create fragments of query
  const locationFragment = graphql(`
    fragment locationFragment on EventPage {
      location {
        ... on EventLocation {
          adress {
            raw
          }
          map {
            latitude
            longitude
          }
        }
      }
    }
  `);

  const EventContentFramgment = graphql(`
    fragment EventContentFramgment on EventPage {
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

  const GET_EVENTPAGE = graphql(`
    query GET_EVENTPAGE($id: Int!) {
      eventPage(where: { eventId: $id }) {
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
        ...EventContentFramgment
        date
        eventId
        slug
        title
        ...locationFragment
      }
    }
  `);

  const { data, error } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE, {
    variables: { id },
  });
  if (error) {
    console.log(error);
  }
  const { eventPage } = data || {};
  let location = useFragment(locationFragment, eventPage);
  let map = location?.location?.map;
  let mainContent = useFragment(EventContentFramgment, eventPage);
  let position = { lat: map?.latitude || 0, lng: map?.longitude || 0 };

  return (
    <main>
      <article>
        <h1>{eventPage?.title}</h1>
        <p>{eventPage?.date}</p>
        {location && <RichText content={location?.location?.adress.raw} />}
        {position.lat !== 0 && <MapComp position={position} />}
        {mainContent && <MainContent content={mainContent.content} />}
        <div>
          {eventPage?.contact?.map((contact, i) => {
            return <ContactCardComp contact={contact as ContactCard} key={i} />;
          })}
        </div>
        <EventSignupComp id={id} />
      </article>
    </main>
  );
}

export default EventPage;
