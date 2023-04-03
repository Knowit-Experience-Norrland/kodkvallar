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
    "\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n": types.Get_ContactpageDocument,
    "\nquery GET_EVENTPAGE ($id: Int!) {\n    eventPage(where: {eventId: $id }) {\n      eventId\n      location {\n      ... on EventLocation {\n        map {\n          latitude\n          longitude\n        }\n        adress {\n          raw\n        }\n      }\n      }\n      slug\n      title\n      content {\n        ... on Heading {\n          heading\n        }\n        ... on Image {\n          altText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          text {\n            raw\n          }\n        }\n      }\n      contact {\n        email\n        location\n        name\n        phone\n        title\n        image {\n          url\n        }\n      }\n      date\n    }\n  }\n    \n": types.Get_EventpageDocument,
    "\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n": types.Get_InfopageDocument,
    "\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.StartpageContentFragmentDoc,
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
export function graphql(source: "\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n"): (typeof documents)["\nquery GET_CONTACTPAGE {\n      contactPage(where: {slug: \"contacttest\"}) {\n    content {\n      ... on Image {\n        image {\n          url\n        }\n        altText\n      }\n      ... on Text {\n        text {\n          text\n        }\n      }\n      ... on Heading {\n        heading\n      }\n    }\n    slug\n    contact {\n      location\n      name\n      phone\n      stage\n      title\n      email\n      image {\n        url\n      }\n    }\n    title\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_EVENTPAGE ($id: Int!) {\n    eventPage(where: {eventId: $id }) {\n      eventId\n      location {\n      ... on EventLocation {\n        map {\n          latitude\n          longitude\n        }\n        adress {\n          raw\n        }\n      }\n      }\n      slug\n      title\n      content {\n        ... on Heading {\n          heading\n        }\n        ... on Image {\n          altText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          text {\n            raw\n          }\n        }\n      }\n      contact {\n        email\n        location\n        name\n        phone\n        title\n        image {\n          url\n        }\n      }\n      date\n    }\n  }\n    \n"): (typeof documents)["\nquery GET_EVENTPAGE ($id: Int!) {\n    eventPage(where: {eventId: $id }) {\n      eventId\n      location {\n      ... on EventLocation {\n        map {\n          latitude\n          longitude\n        }\n        adress {\n          raw\n        }\n      }\n      }\n      slug\n      title\n      content {\n        ... on Heading {\n          heading\n        }\n        ... on Image {\n          altText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          text {\n            raw\n          }\n        }\n      }\n      contact {\n        email\n        location\n        name\n        phone\n        title\n        image {\n          url\n        }\n      }\n      date\n    }\n  }\n    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n"): (typeof documents)["\nquery GET_INFOPAGE {\n    infoPage(where: {slug: \"test\"}) {\n        content {\n          ... on Text {\n            text {\n              raw\n            }\n          }\n          ... on Image {\n            altText\n            image {\n              url\n            }\n          }\n          ... on Heading {\n            heading\n          }\n        }\n        title\n        slug\n        heroImage {\n          url\n        }\n        contact {\n          title\n          phone\n          name\n          location\n          email\n          image {\n            url\n          }\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;