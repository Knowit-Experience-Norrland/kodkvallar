import React from "react";
import { useQuery } from "@apollo/client";
import { Get_StartpageQuery } from "../gql/graphql";
import HeroComp from "../components/Hero/HeroComp";
import MainContent from "../components/MainContent/MainContent";
import StartPageCards from "../components/StartpageCards/StartpageCards";
import Rocket from "../media/Rocket.png";
import Lightbulb from "../media/Lightbulb.png";
import Computer from "../media/Computer.png";
import { graphql, useFragment } from "../gql";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";

const StartPage = () => {
  // Define a fragment that will be used by the query
  // Fragment is a subset of the query, and is used to define the data that we want to use.
  const contentFragment = graphql(`
    fragment StartpageContent on StartPage {
      content {
        ... on Heading {
          heading
          id
        }
        ... on Image {
          id
          altText
          imageText
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
  // Use the `useQuery` hook to make a query to the API
  // Spread the fragment into the query
  const GET_STARTPAGE = graphql(`
    query GET_STARTPAGE {
      startPage(where: { slug: "start" }) {
        ...StartpageContent
        hero {
          image {
            url
          }
          altText
        }
        title
      }
    }
  `);

  const { data, error } = useQuery<Get_StartpageQuery>(GET_STARTPAGE);
  const { startPage } = data || {};
  let content = useFragment(contentFragment, startPage);
  let startpageContent = content?.content || undefined;
 
  if (error) {
    return <div><p>Något gick fel..</p></div>;
  }
  return (
    <main>
      <HeroComp
        url={startPage?.hero.image.url || ""}
        altText={startPage?.hero.altText || ""}
        title={startPage?.title || ""}
      />
      {startpageContent && <MainContent content={startpageContent} />}
      <section className="startpage-cards-container">
        <StartPageCards
          img={Rocket}
          title={"Om oss"}
          text={"Läs mer om Knowit Experience!"}
          link={"/about"}
        />
        <StartPageCards
          img={Computer}
          title={"Kommande kodkvällar"}
          text={"Se information om kommande kodkvällar!"}
          link={"/event"}
        />
        <StartPageCards
          img={Lightbulb}
          title={"Tidigare kodkvällar"}
          text={"Se vad vi gjort på tidigare kodkvällar!"}
          link={"/blog"}
        />
      </section>
      <section className="upcoming-events-container">
        <UpcomingEventSpotlightComp />
      </section>
    </main>
  );
};

export default StartPage;
