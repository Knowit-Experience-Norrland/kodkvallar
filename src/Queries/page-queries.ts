import { gql } from "@apollo/client";
import { AboutContentFragment, HeroFragment, adressFragment } from "./fragments";
import { PageContentFragment, FormInputsFragment } from "./fragments";

export const GET_LANDINGPAGE = gql`
  query GET_LANDINGPAGE($where: EventLandingpageWhereUniqueInput!) {
    eventLandingpage(where: $where) {
      hero {
        ...Hero
      }
      title
    }
  }
  ${HeroFragment}
`;

export const GET_STARTPAGE = gql`
  query GET_STARTPAGE($where: StartPageWhereUniqueInput!) {
    startPage(where: $where) {
      title
      slug
      id
      hero {
        ...Hero
      }
      ...PageContent
    }
  }
  ${HeroFragment}
  ${PageContentFragment}
`;

export const GET_FORMPAGE = gql`
  query GET_FORMPAGE($where: FormPageWhereUniqueInput!) {
    formPage(where: $where) {
      hero {
        ...Hero
      }
      eventPage {
        slug
      }
      formInfo {
        raw
      }
      ...FormInputs
      slug
      title
    }
  }
  ${HeroFragment}
  ${FormInputsFragment}
`;


export const GET_ABOUT_PAGE = gql`
    query GET_ABOUT_PAGE($where: AboutPageWhereUniqueInput!) {
      aboutPage(where: $where) {
        employees {
          title
          name
          phone
          email
          image {
            url
          }
        }
        hero {
         ...Hero
        }
        ...AboutContent
        slug
        title
        sidebarInfo
        ...adress
      }
    }
    ${HeroFragment}
    ${AboutContentFragment}
    ${adressFragment}
  `;
