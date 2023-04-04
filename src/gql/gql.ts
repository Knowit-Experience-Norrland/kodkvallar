/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation createEventSignup($data: EventSignupCreateInput!) {\n    createEventSignup(data: $data) {\n        email\n        firstName\n        eventPage {\n          eventId\n        }\n        lastName\n      }\n    }\n    ": types.CreateEventSignupDocument,
    "\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    ": types.CreateNewsletterSignupDocument,
    "\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        eventId\n        title\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Upcoming_EventsDocument,
    "\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n": types.Get_ContactpageDocument,
    "\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress {\n            raw\n          }\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  ": types.LocationFragmentFragmentDoc,
    "\n    fragment EventContentFramgment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.EventContentFramgmentFragmentDoc,
    "\n    query GET_EVENTPAGE($id: Int!) {\n      eventPage(where: { eventId: $id }) {\n        contact {\n          email\n          image {\n            url\n          }\n          location\n          name\n          phone\n          title\n        }\n        ...EventContentFramgment\n        date\n        eventId\n        slug\n        title\n        ...locationFragment\n      }\n    }\n  ": types.Get_EventpageDocument,
    "\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n": types.Get_InfopageDocument,
    "\nfragment StartpageContent on StartPage {\n  content {\n    ... on Heading {\n      heading\n      id\n    }\n    ... on Image {\n      id\n      altText\n      imageText\n      image {\n        url\n      }\n    }\n    ... on Text {\n      id\n      text {\n        raw\n      }\n    }\n  }\n}\n": types.StartpageContentFragmentDoc,
    "\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  ": types.Get_StartpageDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createEventSignup($data: EventSignupCreateInput!) {\n    createEventSignup(data: $data) {\n        email\n        firstName\n        eventPage {\n          eventId\n        }\n        lastName\n      }\n    }\n    "): (typeof documents)["\n  mutation createEventSignup($data: EventSignupCreateInput!) {\n    createEventSignup(data: $data) {\n        email\n        firstName\n        eventPage {\n          eventId\n        }\n        lastName\n      }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    "): (typeof documents)["\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        eventId\n        title\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        eventId\n        title\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n"): (typeof documents)["\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress {\n            raw\n          }\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress {\n            raw\n          }\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment EventContentFramgment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment EventContentFramgment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_EVENTPAGE($id: Int!) {\n      eventPage(where: { eventId: $id }) {\n        contact {\n          email\n          image {\n            url\n          }\n          location\n          name\n          phone\n          title\n        }\n        ...EventContentFramgment\n        date\n        eventId\n        slug\n        title\n        ...locationFragment\n      }\n    }\n  "): (typeof documents)["\n    query GET_EVENTPAGE($id: Int!) {\n      eventPage(where: { eventId: $id }) {\n        contact {\n          email\n          image {\n            url\n          }\n          location\n          name\n          phone\n          title\n        }\n        ...EventContentFramgment\n        date\n        eventId\n        slug\n        title\n        ...locationFragment\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n"): (typeof documents)["\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment StartpageContent on StartPage {\n  content {\n    ... on Heading {\n      heading\n      id\n    }\n    ... on Image {\n      id\n      altText\n      imageText\n      image {\n        url\n      }\n    }\n    ... on Text {\n      id\n      text {\n        raw\n      }\n    }\n  }\n}\n"): (typeof documents)["\nfragment StartpageContent on StartPage {\n  content {\n    ... on Heading {\n      heading\n      id\n    }\n    ... on Image {\n      id\n      altText\n      imageText\n      image {\n        url\n      }\n    }\n    ... on Text {\n      id\n      text {\n        raw\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;