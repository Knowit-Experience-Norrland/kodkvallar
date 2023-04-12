import React from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import UpcomingEventListComp from "../components/UpcomingEventList/UpcomingEventListComp";
import { Get_LandingpageQuery } from "../gql/graphql";

const UpcomingEventsPage = () => {
  const GET_LANDINGPAGE = graphql(`
    query GET_LANDINGPAGE {
      eventLandingpage(where: { slug: "kommande-event" }) {
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

  const { data, error } = useQuery<Get_LandingpageQuery>(GET_LANDINGPAGE);
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
      <UpcomingEventListComp />
      <section className="upcoming-events-container">
        <UpcomingEventSpotlightComp />
      </section>
    </main>
  );
};

export default UpcomingEventsPage;
