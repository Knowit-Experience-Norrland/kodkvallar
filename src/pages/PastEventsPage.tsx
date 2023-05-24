import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import HeroComp from "../components/Hero/HeroComp";
import { Get_LandingpageQuery, HeroFragmentDoc } from "../gql/graphql";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import PastEventListComp from "../components/PastEventList/PastEventListComp";
import { useNavigate } from "react-router-dom";
import { GET_LANDINGPAGE } from "../Queries/page-queries";
import { useFragment } from "../gql";

const PastEventsPage = () => {
  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_LandingpageQuery>(
    GET_LANDINGPAGE,
    {
      variables: {
        where: {
          slug: "tidigare-event",
        },
      },
    }
  );

  //destructuring data and fragments
  const eventLandingpage = data?.eventLandingpage;
  const hero = useFragment(HeroFragmentDoc, eventLandingpage?.hero);

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!eventLandingpage || error)) {
      navigate("/404");
    }
  }, [loading, eventLandingpage, error, navigate]);

  return (
    <main>
      <HeroComp
        url={hero?.image?.url || ""}
        altText={hero?.altText || ""}
        title={eventLandingpage?.title || ""}
      />
      <PastEventListComp />
      <section className="events-spotlight-container">
        <UpcomingEventSpotlightComp />
      </section>
    </main>
  );
};

export default PastEventsPage;
