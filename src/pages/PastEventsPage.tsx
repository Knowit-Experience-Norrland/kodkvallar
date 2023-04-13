import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventListComp from "../components/UpcomingEventList/UpcomingEventListComp";
import PastEventSpotlightComp from "../components/PastEventSpotlight/PastEventSpotlightComp";
import { Get_Landingpage_Past_EventQuery } from "../gql/graphql";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import PastEventListComp from "../components/PastEventList/PastEventListComp";



const PastEventsPage = () => {
    const GET_LANDINGPAGE_PAST_EVENT = graphql(`
    query GET_LANDINGPAGE_PAST_EVENT {
      eventLandingpage(where: { slug: "tidigare-event" }) {
        hero {
          altText
          image {
            url
          }
        }
        title
      }
    }
  `);

  const { data, error } = useQuery<Get_Landingpage_Past_EventQuery>(GET_LANDINGPAGE_PAST_EVENT);
  const { eventLandingpage } = data || {};
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
        url={eventLandingpage?.hero?.image.url || ""}
        altText={eventLandingpage?.hero?.altText || ""}
        title={eventLandingpage?.title || ""}
      />
      <PastEventListComp />
      <section className="events-spotlight-container">
        <UpcomingEventSpotlightComp />
      </section>
    </main>
  );
};

export default PastEventsPage