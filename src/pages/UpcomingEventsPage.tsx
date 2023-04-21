import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { graphql } from "../gql";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventListComp from "../components/UpcomingEventList/UpcomingEventListComp";
import { Get_LandingpageQuery } from "../gql/graphql";
import PastEventSpotlightComp from "../components/PastEventSpotlight/PastEventSpotlightComp";
import { useNavigate } from "react-router-dom";

const UpcomingEventsPage = () => {

  let navigate = useNavigate();

  
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

  const { data, error, loading } = useQuery<Get_LandingpageQuery>(GET_LANDINGPAGE);
  
  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!data || error)) {
      navigate("/404");
    }
  }, [loading, data, error, navigate]);
  const { eventLandingpage } = data || {};
  
  return (
    <main>
      <HeroComp
        url={eventLandingpage?.hero?.image?.url || ""}
        altText={eventLandingpage?.hero?.altText || ""}
        title={eventLandingpage?.title || ""}
      />
      <UpcomingEventListComp />
      <section className="events-spotlight-container">
        <PastEventSpotlightComp />
      </section>
    </main>
  );
};

export default UpcomingEventsPage;
