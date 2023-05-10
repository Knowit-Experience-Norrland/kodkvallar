import { gql } from "@apollo/client";
import { HeroFragment } from "./fragments";
import {
  EventContentFragment,
  locationFragment,
  BlogContentFragment,
} from "./fragments";

export const GET_PAST_EVENTPAGE = gql`
  query GET_PAST_EVENTPAGE($where: PastEventWhereUniqueInput!) {
    pastEvent(where: $where) {
      hero {
        ...Hero
      }
      ...BlogContent
      slug
      title
    }
  }
  ${HeroFragment}
  ${BlogContentFragment}
`;

export const GET_EVENTPAGE = gql`
  query GET_EVENTPAGE($where: EventPageWhereUniqueInput!) {
    eventPage(where: $where) {
      contact {
        email
        image {
          url
        }
        name
        phone
        title
      }
      hero {
        ...Hero
      }
      maxParticipants
      ...EventContent
      date
      slug
      title
      ...location
      eventSignups {
        id
        firstName
      }
    }
  }
  ${EventContentFragment}
  ${locationFragment}
  ${HeroFragment}
`;

export   const GET_UPCOMING_EVENTS = gql`
query GET_UPCOMING_EVENTS($today: DateTime!) {
  eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2, stage: PUBLISHED) {
    title
    slug
    hero {
      image {
        url
      }
      altText
    }
  }
}
`;

export const GET_UPCOMING_EVENTS_LIST = gql`
    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {
      eventPages(where: { date_gte: $today }, orderBy: date_ASC, stage: PUBLISHED) {
        title
        slug
        date
        ingress
        hero {
          image {
            url
          }
          altText
        }
      }
    }
  `;


export const GET_PAST_EVENTS = gql`
query GET_PAST_EVENTS {
  pastEvents(stage: PUBLISHED, first: 2) {
    title
    slug
    hero {
      image {
        url
      }
      altText
    }
  }
}
`;

export const GET_PAST_EVENTS_LIST = gql`
query GET_PAST_EVENTS_LIST {
  pastEvents(stage: PUBLISHED, orderBy: publishedAt_ASC) {
    title
    slug
    ingress
    hero {
      image {
        url
      }
      altText
    }
  }
}
`;
