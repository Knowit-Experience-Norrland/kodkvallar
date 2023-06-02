import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  ContactCard,
  EventContentFragmentDoc,
  Get_EventpageQuery,
  HeroFragmentDoc,
  LocationFragmentDoc,
} from "../gql/graphql";
import ContactCardComp from "../components/ContactCard/ContactCardComp";
import { useParams, useNavigate } from "react-router-dom";
import EventSignupComp from "../components/EventSignup/EventSignupComp";
import MapComp from "../components/Map/MapComp";
import { useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import PastEventSpotlightComp from "../components/PastEventSpotlight/PastEventSpotlightComp";
import WaitinglistComp from "../components/Waitinglist/WaitinglistComp";
import { GET_EVENTPAGE } from "../Queries/event-queries";
import SocialmedaiaLinksComp from "../components/SocialmediaLinks/SocialmedaiaLinksComp";

function EventPage() {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_EventpageQuery>(GET_EVENTPAGE, {
    variables: {
      where: {
        slug: slug,
      },
    },
  });
  // destructuring data and fragments
  const { eventPage } = data || {};
  const hero = useFragment(HeroFragmentDoc, eventPage?.hero);
  let location = useFragment(LocationFragmentDoc, eventPage);
  let mainContent = useFragment(EventContentFragmentDoc, eventPage);
  //get map position
  let map = location?.location?.map;
  let position = { lat: map?.latitude || 0, lng: map?.longitude || 0 };


  useEffect(() => {
    if (!loading && (!eventPage || error)) {
      navigate("/404");
    }
  }, [loading, eventPage, error, navigate]);

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

  //get number of signups and max participants
  let signups = eventPage?.eventSignups?.length || 0;
  let maxParticipants = eventPage?.maxParticipants || 0;

  return (
    <main>
      <HeroComp
        url={hero?.image?.url || ""}
        altText={hero?.altText || ""}
        title={eventPage?.title || ""}
      />
      <div className="event-wrapper">
        {mainContent && <MainContent content={mainContent} />}
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
            {position.lat !== 0 && <MapComp position={position}/>}
            <p className="adress">{location?.location?.adress}</p>
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
            <SocialmedaiaLinksComp />
          </div>
        </div>
      </div>
      {signups >= maxParticipants ? (
        <WaitinglistComp slug={slug} />
      ) : (
        <EventSignupComp slug={slug} />
      )}
      <div className="events-spotlight-container">
        <PastEventSpotlightComp />
      </div>
    </main>
  );
}

export default EventPage;
