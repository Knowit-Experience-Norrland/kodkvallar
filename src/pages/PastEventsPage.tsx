import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import { Get_Landingpage_Past_EventQuery } from "../gql/graphql";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import PastEventListComp from "../components/PastEventList/PastEventListComp";
import { useNavigate } from "react-router-dom";



const PastEventsPage = () => {

  let navigate = useNavigate();

  
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

  const { data, error, loading } = useQuery<Get_Landingpage_Past_EventQuery>(GET_LANDINGPAGE_PAST_EVENT);
  const { eventLandingpage } = data || {};
  
  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!eventLandingpage || error)) {
      navigate("/404");
    }
  }, [loading, eventLandingpage, error, navigate]);
  
  return (
    <main>
      <HeroComp
        url={eventLandingpage?.hero?.image?.url || ""}
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