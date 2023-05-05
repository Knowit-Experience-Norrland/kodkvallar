
import { gql } from "@apollo/client";


//FRAGMENTS

//___________________________________________
//QUERY
export const GET_EVENT_LANDINGPAGE = gql(`
query GetEventLandingpage ($where: EventLandingpageWhereUniqueInput!) {
    title
    hero {
      altText
      image {
        url
      }
    }
  }
`);


