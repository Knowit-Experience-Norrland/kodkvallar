
import { gql } from "@apollo/client";


//FRAGMENTS

//___________________________________________
//QUERY
export const HEJ = gql(`
query Hej ($where: EventLandingpageWhereUniqueInput!) {
    title
    hero {
      altText
      image {
        url
      }
    }
  } 
`);


