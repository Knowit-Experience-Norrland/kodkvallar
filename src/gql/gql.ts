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
    "\n  mutation createEventComment($data: EventCommentCreateInput!) {\n    createEventComment(data: $data) {\n        comment\n    commentPolicy\n    email\n    firstname\n    lastname\n    pastEvent {\n      slug\n    }\n  }\n  }\n    ": types.CreateEventCommentDocument,
    "\n        query GET_COMMENTS($slug: String!) {\n      eventComments(\n        where: {\n          documentInStages_some: { stage: PUBLISHED }\n          pastEvent: { slug: $slug }\n        }\n        orderBy: createdAt_DESC\n      ) {\n        id\n        comment\n        commentPolicy\n        createdAt\n        lastname\n        firstname\n      }\n    }\n    ": types.Get_CommentsDocument,
    "\n mutation createEventSignup($data: EventSignupCreateInput!) {\n  createEventSignup(data: $data) {\n    photoConsent\n    occupation\n    lastName\n    firstName\n    eventPageSlug {\n      slug\n    }\n    email\n    allergies\n  }\n}\n    ": types.CreateEventSignupDocument,
    "\n  mutation   createFormAnswer($data: FormAnswerCreateInput!) {\n    createFormAnswer(data: $data) {\n    formData\n    formPage{\n      slug\n    }\n    eventPage {\n      slug\n    }\n  }\n  }\n    ": types.CreateFormAnswerDocument,
    "\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    ": types.CreateNewsletterSignupDocument,
    "\n    query GET_PAST_EVENTS_LIST {\n      pastEvents(orderBy: publishedAt_ASC) {\n        title\n        slug\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Past_Events_ListDocument,
    "\n    query GET_PAST_EVENTS {\n      pastEvents(first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Past_EventsDocument,
    "\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Upcoming_Events_ListDocument,
    "\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Upcoming_EventsDocument,
    "\n  mutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n    createWaitingListEvent(data: $data) {\n      email\n      lastName\n      firstName\n      eventPage {\n      slug\n    }\n    }\n  }\n    ": types.CreateWaitingListEventDocument,
    "\n    fragment adressFragment on AboutPage {\n      id\n      adress {\n        adress\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  ": types.AdressFragmentFragmentDoc,
    "\n    fragment ContentFragment on AboutPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.ContentFragmentFragmentDoc,
    "\n    query GET_ABOUT_PAGE {\n      aboutPage(where: { slug: \"om-oss\" }) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...ContentFragment\n        slug\n        title\n        sidebarInfo\n        ...adressFragment\n      }\n    }\n  ": types.Get_About_PageDocument,
    "\n    fragment FormInputsFragment on FormPage {\n      formInputs {\n        ... on FormsTextarea {\n          required\n          textareaname: name\n          label\n        }\n        ... on FormsSelect {\n          required\n          selectname: name\n          label\n          options {\n            option\n            value\n          }\n        }\n        ... on FormsInput {\n          type\n          required\n          inputname: name\n          label\n        }\n        ... on FormsCheckbox {\n          required\n          label\n          checkboxname: name\n        }\n      }\n    }\n  ": types.FormInputsFragmentFragmentDoc,
    "\n    query GET_FORMPAGE($slug: String!) {\n      formPage(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        eventPage {\n          slug\n        }\n        formInfo {\n          raw\n        }\n        ...FormInputsFragment\n        slug\n        title\n      }\n    }\n  ": types.Get_FormpageDocument,
    "\n    query GET_LANDINGPAGE_PAST_EVENT {\n      eventLandingpage(where: { slug: \"tidigare-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  ": types.Get_Landingpage_Past_EventDocument,
    "\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress\n          id\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  ": types.LocationFragmentFragmentDoc,
    "\n    fragment EventContentFragment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.EventContentFragmentFragmentDoc,
    "\n    query GET_EVENTPAGE($slug: String!) {\n      eventPage(where: { slug: $slug }) {\n        contact {\n          email\n          image {\n            url\n          }\n          name\n          phone\n          title\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        maxParticipants\n        ...EventContentFragment\n        date\n        slug\n        title\n        ...locationFragment\n        eventSignups {\n          id\n          firstName\n        }\n      }\n    }\n  ": types.Get_EventpageDocument,
    "\n    fragment PastEventContentFragment on PastEvent {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n        ... on FeedbackHighlight {\n          id\n          author\n          feedback\n        }\n      }\n    }\n  ": types.PastEventContentFragmentFragmentDoc,
    "\n    query GET_PAST_EVENTPAGE($slug: String!) {\n      pastEvent(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...PastEventContentFragment\n        slug\n        title\n      }\n    }\n  ": types.Get_Past_EventpageDocument,
    "\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          } \n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.StartpageContentFragmentDoc,
    "\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  ": types.Get_StartpageDocument,
    "\n    query GET_LANDINGPAGE {\n      eventLandingpage(where: { slug: \"kommande-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  ": types.Get_LandingpageDocument,
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
export function graphql(source: "\n  mutation createEventComment($data: EventCommentCreateInput!) {\n    createEventComment(data: $data) {\n        comment\n    commentPolicy\n    email\n    firstname\n    lastname\n    pastEvent {\n      slug\n    }\n  }\n  }\n    "): (typeof documents)["\n  mutation createEventComment($data: EventCommentCreateInput!) {\n    createEventComment(data: $data) {\n        comment\n    commentPolicy\n    email\n    firstname\n    lastname\n    pastEvent {\n      slug\n    }\n  }\n  }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query GET_COMMENTS($slug: String!) {\n      eventComments(\n        where: {\n          documentInStages_some: { stage: PUBLISHED }\n          pastEvent: { slug: $slug }\n        }\n        orderBy: createdAt_DESC\n      ) {\n        id\n        comment\n        commentPolicy\n        createdAt\n        lastname\n        firstname\n      }\n    }\n    "): (typeof documents)["\n        query GET_COMMENTS($slug: String!) {\n      eventComments(\n        where: {\n          documentInStages_some: { stage: PUBLISHED }\n          pastEvent: { slug: $slug }\n        }\n        orderBy: createdAt_DESC\n      ) {\n        id\n        comment\n        commentPolicy\n        createdAt\n        lastname\n        firstname\n      }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n mutation createEventSignup($data: EventSignupCreateInput!) {\n  createEventSignup(data: $data) {\n    photoConsent\n    occupation\n    lastName\n    firstName\n    eventPageSlug {\n      slug\n    }\n    email\n    allergies\n  }\n}\n    "): (typeof documents)["\n mutation createEventSignup($data: EventSignupCreateInput!) {\n  createEventSignup(data: $data) {\n    photoConsent\n    occupation\n    lastName\n    firstName\n    eventPageSlug {\n      slug\n    }\n    email\n    allergies\n  }\n}\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation   createFormAnswer($data: FormAnswerCreateInput!) {\n    createFormAnswer(data: $data) {\n    formData\n    formPage{\n      slug\n    }\n    eventPage {\n      slug\n    }\n  }\n  }\n    "): (typeof documents)["\n  mutation   createFormAnswer($data: FormAnswerCreateInput!) {\n    createFormAnswer(data: $data) {\n    formData\n    formPage{\n      slug\n    }\n    eventPage {\n      slug\n    }\n  }\n  }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    "): (typeof documents)["\n  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n    createNewsletterSignup(data: $data) {\n      email\n      lastName\n      firstName\n    }\n  }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_PAST_EVENTS_LIST {\n      pastEvents(orderBy: publishedAt_ASC) {\n        title\n        slug\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_PAST_EVENTS_LIST {\n      pastEvents(orderBy: publishedAt_ASC) {\n        title\n        slug\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_PAST_EVENTS {\n      pastEvents(first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_PAST_EVENTS {\n      pastEvents(first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UPCOMING_EVENTS($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2) {\n        title\n        slug\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n    createWaitingListEvent(data: $data) {\n      email\n      lastName\n      firstName\n      eventPage {\n      slug\n    }\n    }\n  }\n    "): (typeof documents)["\n  mutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n    createWaitingListEvent(data: $data) {\n      email\n      lastName\n      firstName\n      eventPage {\n      slug\n    }\n    }\n  }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment adressFragment on AboutPage {\n      id\n      adress {\n        adress\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment adressFragment on AboutPage {\n      id\n      adress {\n        adress\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ContentFragment on AboutPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment ContentFragment on AboutPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_ABOUT_PAGE {\n      aboutPage(where: { slug: \"om-oss\" }) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...ContentFragment\n        slug\n        title\n        sidebarInfo\n        ...adressFragment\n      }\n    }\n  "): (typeof documents)["\n    query GET_ABOUT_PAGE {\n      aboutPage(where: { slug: \"om-oss\" }) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...ContentFragment\n        slug\n        title\n        sidebarInfo\n        ...adressFragment\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment FormInputsFragment on FormPage {\n      formInputs {\n        ... on FormsTextarea {\n          required\n          textareaname: name\n          label\n        }\n        ... on FormsSelect {\n          required\n          selectname: name\n          label\n          options {\n            option\n            value\n          }\n        }\n        ... on FormsInput {\n          type\n          required\n          inputname: name\n          label\n        }\n        ... on FormsCheckbox {\n          required\n          label\n          checkboxname: name\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment FormInputsFragment on FormPage {\n      formInputs {\n        ... on FormsTextarea {\n          required\n          textareaname: name\n          label\n        }\n        ... on FormsSelect {\n          required\n          selectname: name\n          label\n          options {\n            option\n            value\n          }\n        }\n        ... on FormsInput {\n          type\n          required\n          inputname: name\n          label\n        }\n        ... on FormsCheckbox {\n          required\n          label\n          checkboxname: name\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_FORMPAGE($slug: String!) {\n      formPage(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        eventPage {\n          slug\n        }\n        formInfo {\n          raw\n        }\n        ...FormInputsFragment\n        slug\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_FORMPAGE($slug: String!) {\n      formPage(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        eventPage {\n          slug\n        }\n        formInfo {\n          raw\n        }\n        ...FormInputsFragment\n        slug\n        title\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_LANDINGPAGE_PAST_EVENT {\n      eventLandingpage(where: { slug: \"tidigare-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_LANDINGPAGE_PAST_EVENT {\n      eventLandingpage(where: { slug: \"tidigare-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress\n          id\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment locationFragment on EventPage {\n      location {\n        ... on EventLocation {\n          adress\n          id\n          map {\n            latitude\n            longitude\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment EventContentFragment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment EventContentFragment on EventPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_EVENTPAGE($slug: String!) {\n      eventPage(where: { slug: $slug }) {\n        contact {\n          email\n          image {\n            url\n          }\n          name\n          phone\n          title\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        maxParticipants\n        ...EventContentFragment\n        date\n        slug\n        title\n        ...locationFragment\n        eventSignups {\n          id\n          firstName\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_EVENTPAGE($slug: String!) {\n      eventPage(where: { slug: $slug }) {\n        contact {\n          email\n          image {\n            url\n          }\n          name\n          phone\n          title\n        }\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        maxParticipants\n        ...EventContentFragment\n        date\n        slug\n        title\n        ...locationFragment\n        eventSignups {\n          id\n          firstName\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PastEventContentFragment on PastEvent {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n        ... on FeedbackHighlight {\n          id\n          author\n          feedback\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PastEventContentFragment on PastEvent {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n        ... on FeedbackHighlight {\n          id\n          author\n          feedback\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_PAST_EVENTPAGE($slug: String!) {\n      pastEvent(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...PastEventContentFragment\n        slug\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_PAST_EVENTPAGE($slug: String!) {\n      pastEvent(where: { slug: $slug }) {\n        hero {\n          altText\n          id\n          image {\n            url\n          }\n        }\n        ...PastEventContentFragment\n        slug\n        title\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          } \n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment StartpageContent on StartPage {\n      content {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          id\n          altText\n          imageText\n          image {\n            url\n          } \n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_STARTPAGE {\n      startPage(where: { slug: \"start\" }) {\n        ...StartpageContent\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n        title\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_LANDINGPAGE {\n      eventLandingpage(where: { slug: \"kommande-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  "): (typeof documents)["\n    query GET_LANDINGPAGE {\n      eventLandingpage(where: { slug: \"kommande-event\" }) {\n        hero {\n          altText\n          image {\n            url\n          }\n        }\n        title\n      }\n    }\n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;