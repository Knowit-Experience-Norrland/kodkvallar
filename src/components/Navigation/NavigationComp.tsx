import { gql, useQuery } from "@apollo/client";
import React from "react";
import { NavLink } from "react-router-dom";
import { Get_NavigationpagesQuery } from "../../gql/graphql";

const GET_NAVIGATIONPAGES = gql(`
query GET_NAVIGATIONPAGES {
    eventPages {
        slug
        title
        eventId
      }
      infoPages {
        slug
        title
      }
    }
`);

const NavigationComp = () => {
  const { data, error } =
    useQuery<Get_NavigationpagesQuery>(GET_NAVIGATIONPAGES);
  if (error) {
    console.log(error);
  }

  return (
    <nav id="navigation">
      <h1>NavigationComp</h1>
      <NavLink to="/">Hem</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div>
        <h2>Sidor</h2>
        {data?.infoPages.map((element: { slug: string; title: string }, i) => {
          return <NavLink to={`/${element?.slug}`} key={i}>{element.title} </NavLink>;
        })}
      </div>
      <div>
        <h2>Event</h2>
        {data?.eventPages.map((element: { eventId: number; title: string },i) => {
          return (
            <NavLink to={`/event/${element?.eventId}`} key={i}>{element.title}</NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationComp;
