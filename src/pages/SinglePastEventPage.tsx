import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import EventSignupComp from "../components/EventSignup/EventSignupComp";
import { graphql, useFragment } from "../gql";
import MainContent from "../components/MainContent/MainContent";
import HeroComp from "../components/Hero/HeroComp";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import { Get_Past_EventpageQuery } from "../gql/graphql";

const SinglePastEventPage = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  
  //create fragment of query
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
      }
    }
  `);
  //create query with fragments and slug for variable
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

  const { data, error } = useQuery<Get_Past_EventpageQuery>(GET_PAST_EVENTPAGE, {
    variables: { slug },
  });
  const { pastEvent } = data || {};
  let mainContent = useFragment(PastEventContentFragment, pastEvent);
 
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
        url={pastEvent?.hero?.image.url || ""}
        altText={pastEvent?.hero?.altText || ""}
        title={pastEvent?.title || ""}
      />
        {mainContent && <MainContent content={mainContent.content} />}
      <EventSignupComp slug={slug} />
      <div className="events-spotlight-container">
        <UpcomingEventSpotlightComp />
      </div>
    </main>
  );
}

export default SinglePastEventPage