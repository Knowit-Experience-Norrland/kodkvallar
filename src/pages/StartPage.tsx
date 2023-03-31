import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Get_StartpageQuery } from "../gql/graphql";
import HeroComp from "../components/Hero/HeroComp";
import MainContent from "../components/Main Content/MainContent";

const StartPage = () => {
  // Use the `useQuery` hook to make a query to the API
  const GET_STARTPAGE = gql(`
   query GET_STARTPAGE {
    startPage(where: {slug: "start"}) {
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
  if (error) {
    console.log(error);
  }
  const { startPage } = data || {};
  return (
    <main>
      <HeroComp
        url={startPage?.hero.image.url || ""}
        altText={startPage?.hero.altText || ""}
        title={startPage?.title || ""}
      />
      <MainContent content={startPage?.content} />
      <section className="startpage-cards">
        <div>
          <img src="" alt="" />
          <h2>Card 1</h2>
          <p> text  </p>
          ikon med piiiiil 
        </div>
      </section>
    </main>
  );
};

export default StartPage;
