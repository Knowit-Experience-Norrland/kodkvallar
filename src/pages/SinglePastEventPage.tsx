import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import CommentSectionComp from "../components/Commentsection/CommentSectionComp";
import {
  Get_Past_EventpageQuery,
  HeroFragmentDoc,
  BlogContentFragmentDoc,
} from "../gql/graphql";
import { GET_PAST_EVENTPAGE } from "../Queries/event-queries";

const SinglePastEventPage = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_Past_EventpageQuery>(
    GET_PAST_EVENTPAGE,
    {
      variables: {
        where: {
          slug: slug,
        },
      },
    }
  );
  //destructuring data and fragments
  const { pastEvent } = data || {};
  let hero = useFragment(HeroFragmentDoc, pastEvent?.hero);
  let mainContent = useFragment(BlogContentFragmentDoc, pastEvent);

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!pastEvent || error)) {
      navigate("/404");
    }
  }, [loading, pastEvent, error, navigate]);

  return (
    <main>
      <HeroComp
        url={hero?.image?.url || ""}
        altText={hero?.altText || ""}
        title={pastEvent?.title || ""}
      />
      {mainContent && <MainContent content={mainContent} />}
      <div>
        <CommentSectionComp />
      </div>
      <div className="events-spotlight-container">
        <UpcomingEventSpotlightComp />
      </div>
    </main>
  );
};

export default SinglePastEventPage;
