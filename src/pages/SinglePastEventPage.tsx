import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";

import CommentSectionComp from "../components/Commentsection/CommentSectionComp";
import { Get_Past_EventpageQuery } from "../gql/graphql";
const SinglePastEventPage = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  let navigate = useNavigate();

  // create fragment of query
  const PastEventContentFragment = graphql(`
    fragment PastEventContentFragment on PastEvent {
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
        ... on FeedbackHighlight {
          id
          author
          feedback
        }
      }
    }
  `);
  // create query with fragments and slug for variable
  const GET_PAST_EVENTPAGE = graphql(`
    query GET_PAST_EVENTPAGE($slug: String!) {
      pastEvent(where: { slug: $slug }) {
        hero {
          altText
          id
          image {
            url
          }
        }
        ...PastEventContentFragment
        slug
        title
      }
    }
  `);

  const { data, error, loading } = useQuery<Get_Past_EventpageQuery>(
    GET_PAST_EVENTPAGE,
    {
      variables: { slug },
    }
  );
  const { pastEvent } = data || {};

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!pastEvent || error)) {
      navigate("/404");
    }
  }, [loading, pastEvent, error, navigate]);

  let mainContent = useFragment(PastEventContentFragment, pastEvent);

  return (
    <main>
      <HeroComp
        url={pastEvent?.hero?.image?.url || ""}
        altText={pastEvent?.hero?.altText || ""}
        title={pastEvent?.title || ""}
      />
      {mainContent && <MainContent content={mainContent.content} />}
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
