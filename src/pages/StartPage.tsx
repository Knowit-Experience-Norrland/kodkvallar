import React from "react";
import { useQuery } from "@apollo/client";
import HeroComp from "../components/Hero/HeroComp";
import MainContent from "../components/Main Content/MainContent";

import { graphql, useFragment } from "../gql";

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

  const { data, error } = useQuery(GET_STARTPAGE);
  if (error) {
    console.log(error);
  }

  const { startPage } = data || {};
  let content = useFragment(contentFragment, startPage);
  let startpageContent = content?.content || undefined;

  return (
    <main>
      <HeroComp
        url={startPage?.hero.image.url || ""}
        altText={startPage?.hero.altText || ""}
        title={startPage?.title || ""}
      />
      {/* Make sure the content is not undefined */}
      {startpageContent && <MainContent content={startpageContent} />} 
      <section className="startpage-cards">
        <div>
          <img src="" alt="" />
          <h2>Card 1</h2>
          <p> text </p>
          ikon med piiiiil
        </div>
      </section>
    </main>
  );
};

export default StartPage;
