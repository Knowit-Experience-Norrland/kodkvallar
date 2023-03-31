import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Get_StartpageQuery } from "../gql/graphql";
import { RichText } from "@graphcms/rich-text-react-renderer";
import HeroComp from "../components/Hero/HeroComp";

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
      <HeroComp url={startPage?.hero.image.url || ""} altText={startPage?.hero.altText || ""} title={startPage?.title || ""} />
 
    </main>
  );
};

export default StartPage;
