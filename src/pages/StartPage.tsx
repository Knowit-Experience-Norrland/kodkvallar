import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import {
  Get_StartpageQuery,
  HeroFragmentDoc,
  PageContentFragmentDoc,
} from "../gql/graphql";
import HeroComp from "../components/Hero/HeroComp";
import MainContent from "../components/MainContent/MainContent";
import StartPageCards from "../components/StartpageCards/StartpageCards";
import Rocket from "../media/Rocket.png";
import Lightbulb from "../media/Lightbulb.png";
import Computer from "../media/Computer.png";
import { useFragment } from "../gql";
import UpcomingEventSpotlightComp from "../components/UpcomingEventSpotlight/UpcomingEventSpotlightComp";
import { useNavigate } from "react-router-dom";
import { GET_STARTPAGE } from "../Queries/page-queries";

const StartPage = () => {
  let navigate = useNavigate();

  // get data from graphql
  const { data, error, loading } = useQuery<Get_StartpageQuery>(GET_STARTPAGE, {
    variables: {
      where: {
        slug: "start",
      },
    },
  });
  //destructuring data and fragments
  const startPage = data?.startPage;
  const hero = useFragment(HeroFragmentDoc, startPage?.hero);
  const content = useFragment(PageContentFragmentDoc, startPage);

  //redirect to 404 if no data
  useEffect(() => {
    if (!loading && (!startPage || error)) {
      navigate("/404");
    }
  }, [loading, startPage, error, navigate]);

  return (
    <main>
      <HeroComp
        url={hero?.image.url || ""}
        altText={hero?.altText || ""}
        title={startPage?.title || ""}
      />
      {content && <MainContent content={content} />}
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
      <section className="events-spotlight-container">
        <UpcomingEventSpotlightComp />
      </section>
    </main>
  );
};

export default StartPage;
