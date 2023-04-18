import React from "react";
import { useQuery } from "@apollo/client";
import { ContactCard, Get_EventpageQuery } from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams } from "react-router-dom";
import EventSignupComp from "../components/EventSignup/EventSignupComp";
import MapComp from "../components/Map/MapComp";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import PastEventSpotlightComp from "../components/PastEventSpotlight/PastEventSpotlightComp";
import {
  RiLinkedinBoxLine,
  RiFacebookBoxLine,
  RiInstagramLine,
} from "react-icons/ri";

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
          name
          phone
          title
        }
        hero {
          altText
          id
          image {
            url
          }
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

  //format date and time
  let newDate = new Date(eventPage?.date);
  let date = newDate.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let time = newDate.toLocaleTimeString("sv-SE", {
    timeZone: "CET",
    hour: "2-digit",
    minute: "2-digit",
  });

  if (error) {
    return (
      <div>
        <p>Något gick fel..</p>
      </div>
    );
  }

  return (
    <main>
      <HeroComp
        url={eventPage?.hero?.image.url || ""}
        altText={eventPage?.hero?.altText || ""}
        title={eventPage?.title || ""}
      />
      <div className="event-wrapper">
        {mainContent && <MainContent content={mainContent.content} />}
        <div className="event-sidebar">
          <div className="space">
            <h2 className="h2-light">När</h2>
            <p>
              <span className="green">Datum:</span> {date}
            </p>
            <p>
              <span className="green">Klockan:</span> {time}
            </p>
          </div>
          <div className="space">
            <h2 className="h2-light">Plats</h2>
            {position.lat !== 0 && <MapComp position={position} />}
            <p>{location?.location?.adress}</p>
          </div>
          <div className="space">
            <h2 className="h2-light">Kontakt</h2>
            {eventPage?.contact?.map((contact, i) => {
              return (
                <ContactCardComp contact={contact as ContactCard} key={i} />
              );
            })}
          </div>
          <div className="event-sidebar-socials">
            <a href="/" target="_blank" rel="noreferrer" title={"LinkedIn"}>
              <RiLinkedinBoxLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Instagram"}>
              <RiInstagramLine />
            </a>
            <a href="/" target="_blank" rel="noreferrer" title={"Facebook"}>
              <RiFacebookBoxLine />
            </a>
          </div>
        </div>
      </div>
      <EventSignupComp slug={slug} />
      <div className="events-spotlight-container">
        <PastEventSpotlightComp />
      </div>
    </main>
  );
}

export default EventPage;
