/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\nquery GET_COMMENTS($slug: String!) {\neventComments(\nwhere: {\n  documentInStages_some: { stage: PUBLISHED }\n  pastEvent: { slug: $slug }\n}\norderBy: createdAt_DESC, first: 100\n) {\nid\ncomment\ncommentPolicy\ncreatedAt\nlastname\nfirstname\n}\n}\n": types.Get_CommentsDocument,
    "\nmutation createEventComment($data: EventCommentCreateInput!) {\n  createEventComment(data: $data) {\n      comment\n  commentPolicy\n  email\n  firstname\n  lastname\n  pastEvent {\n    slug\n  }\n}\n}\n  ": types.CreateEventCommentDocument,
    "\n  query GET_PAST_EVENTPAGE($where: PastEventWhereUniqueInput!) {\n    pastEvent(where: $where) {\n      hero {\n        ...Hero\n      }\n      ...BlogContent\n      slug\n      title\n    }\n  }\n  \n  \n": types.Get_Past_EventpageDocument,
    "\n  query GET_EVENTPAGE($where: EventPageWhereUniqueInput!) {\n    eventPage(where: $where) {\n      contact {\n        email\n        image {\n          url\n        }\n        name\n        phone\n        title\n      }\n      hero {\n        ...Hero\n      }\n      maxParticipants\n      ...EventContent\n      date\n      slug\n      title\n      ...location\n      eventSignups {\n        id\n        firstName\n      }\n    }\n  }\n  \n  \n  \n": types.Get_EventpageDocument,
    "\nquery GET_UPCOMING_EVENTS($today: DateTime!) {\n  eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2, stage: PUBLISHED) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n": types.Get_Upcoming_EventsDocument,
    "\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, stage: PUBLISHED) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  ": types.Get_Upcoming_Events_ListDocument,
    "\nquery GET_PAST_EVENTS {\n  pastEvents(stage: PUBLISHED, first: 2) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n": types.Get_Past_EventsDocument,
    "\nquery GET_PAST_EVENTS_LIST {\n  pastEvents(stage: PUBLISHED, orderBy: publishedAt_ASC) {\n    title\n    slug\n    ingress\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n": types.Get_Past_Events_ListDocument,
    "\nfragment Hero on Hero {\n  altText\n  id\n  image {\n    url\n  }\n}\n": types.HeroFragmentDoc,
    "\n  fragment PageContent on StartPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        id\n        imageText\n        image {\n          url\n        }\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n    }\n  }\n": types.PageContentFragmentDoc,
    "\n  fragment BlogContent on PastEvent {\n    content(first: 1000) {\n      ... on FeedbackHighlight {\n        author\n        feedback\n        id\n      }\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n      ... on Image {\n        imageText\n        id\n        altText\n        image {\n          url\n        }\n      }\n    }\n  }\n": types.BlogContentFragmentDoc,
    "\n  fragment EventContent on EventPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        imageText\n        id\n        image {\n          url\n        }\n      }\n      ... on Text {\n        id\n        text {\n          raw\n        }\n      }\n    }\n  }\n": types.EventContentFragmentDoc,
    "\n    fragment AboutContent on AboutPage {\n      content(first: 1000) {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  ": types.AboutContentFragmentDoc,
    "\n  fragment location on EventPage {\n    location {\n      ... on EventLocation {\n        adress\n        id\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n": types.LocationFragmentDoc,
    "\nfragment adress on AboutPage {\n  id\n  adress {\n    adress\n    map {\n      latitude\n      longitude\n    }\n  }\n}\n": types.AdressFragmentDoc,
    "\n  fragment FormInputs on FormPage {\n    formInputs(first: 1000) {\n      ... on FormsTextarea {\n        required\n        textareaname: name\n        label\n      }\n      ... on FormsSelect {\n        required\n        selectname: name\n        label\n        options {\n          option\n          value\n        }\n      }\n      ... on FormsInput {\n        type\n        required\n        inputname: name\n        label\n      }\n      ... on FormsCheckbox {\n        required\n        label\n        checkboxname: name\n      }\n    }\n  }\n": types.FormInputsFragmentDoc,
    "\nmutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n  createWaitingListEvent(data: $data) {\n    email\n    lastName\n    firstName\n    eventPage {\n    slug\n  }\n  }\n}\n  ": types.CreateWaitingListEventDocument,
    "\nmutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n  createNewsletterSignup(data: $data) {\n    email\n    lastName\n    firstName\n  }\n}\n  ": types.CreateNewsletterSignupDocument,
    "\nmutation createFormAnswer($data: FormAnswerCreateInput!) {\n  createFormAnswer(data: $data) {\n  formData\n  formPage{\n    slug\n  }\n  eventPage {\n    slug\n  }\n}\n}\n  ": types.CreateFormAnswerDocument,
    "\nmutation createEventSignup($data: EventSignupCreateInput!) {\n createEventSignup(data: $data) {\n   photoConsent\n   occupation\n   lastName\n   firstName\n   eventPageSlug {\n     slug\n   }\n   email\n   allergies\n }\n}\n   ": types.CreateEventSignupDocument,
    "\n  query GET_LANDINGPAGE($where: EventLandingpageWhereUniqueInput!) {\n    eventLandingpage(where: $where) {\n      hero {\n        ...Hero\n      }\n      title\n    }\n  }\n  \n": types.Get_LandingpageDocument,
    "\n  query GET_STARTPAGE($where: StartPageWhereUniqueInput!) {\n    startPage(where: $where) {\n      title\n      slug\n      id\n      hero {\n        ...Hero\n      }\n      ...PageContent\n    }\n  }\n  \n  \n": types.Get_StartpageDocument,
    "\n  query GET_FORMPAGE($where: FormPageWhereUniqueInput!) {\n    formPage(where: $where) {\n      hero {\n        ...Hero\n      }\n      eventPage {\n        slug\n      }\n      formInfo {\n        raw\n      }\n      ...FormInputs\n      slug\n      title\n    }\n  }\n  \n  \n": types.Get_FormpageDocument,
    "\n    query GET_ABOUT_PAGE($where: AboutPageWhereUniqueInput!) {\n      aboutPage(where: $where) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n         ...Hero\n        }\n        ...AboutContent\n        slug\n        title\n        sidebarInfo\n        ...adress\n      }\n    }\n    \n    \n    \n  ": types.Get_About_PageDocument,
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
export function graphql(source: "\nquery GET_COMMENTS($slug: String!) {\neventComments(\nwhere: {\n  documentInStages_some: { stage: PUBLISHED }\n  pastEvent: { slug: $slug }\n}\norderBy: createdAt_DESC, first: 100\n) {\nid\ncomment\ncommentPolicy\ncreatedAt\nlastname\nfirstname\n}\n}\n"): (typeof documents)["\nquery GET_COMMENTS($slug: String!) {\neventComments(\nwhere: {\n  documentInStages_some: { stage: PUBLISHED }\n  pastEvent: { slug: $slug }\n}\norderBy: createdAt_DESC, first: 100\n) {\nid\ncomment\ncommentPolicy\ncreatedAt\nlastname\nfirstname\n}\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createEventComment($data: EventCommentCreateInput!) {\n  createEventComment(data: $data) {\n      comment\n  commentPolicy\n  email\n  firstname\n  lastname\n  pastEvent {\n    slug\n  }\n}\n}\n  "): (typeof documents)["\nmutation createEventComment($data: EventCommentCreateInput!) {\n  createEventComment(data: $data) {\n      comment\n  commentPolicy\n  email\n  firstname\n  lastname\n  pastEvent {\n    slug\n  }\n}\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_PAST_EVENTPAGE($where: PastEventWhereUniqueInput!) {\n    pastEvent(where: $where) {\n      hero {\n        ...Hero\n      }\n      ...BlogContent\n      slug\n      title\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query GET_PAST_EVENTPAGE($where: PastEventWhereUniqueInput!) {\n    pastEvent(where: $where) {\n      hero {\n        ...Hero\n      }\n      ...BlogContent\n      slug\n      title\n    }\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_EVENTPAGE($where: EventPageWhereUniqueInput!) {\n    eventPage(where: $where) {\n      contact {\n        email\n        image {\n          url\n        }\n        name\n        phone\n        title\n      }\n      hero {\n        ...Hero\n      }\n      maxParticipants\n      ...EventContent\n      date\n      slug\n      title\n      ...location\n      eventSignups {\n        id\n        firstName\n      }\n    }\n  }\n  \n  \n  \n"): (typeof documents)["\n  query GET_EVENTPAGE($where: EventPageWhereUniqueInput!) {\n    eventPage(where: $where) {\n      contact {\n        email\n        image {\n          url\n        }\n        name\n        phone\n        title\n      }\n      hero {\n        ...Hero\n      }\n      maxParticipants\n      ...EventContent\n      date\n      slug\n      title\n      ...location\n      eventSignups {\n        id\n        firstName\n      }\n    }\n  }\n  \n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_UPCOMING_EVENTS($today: DateTime!) {\n  eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2, stage: PUBLISHED) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"): (typeof documents)["\nquery GET_UPCOMING_EVENTS($today: DateTime!) {\n  eventPages(where: { date_gte: $today }, orderBy: date_ASC, first: 2, stage: PUBLISHED) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, stage: PUBLISHED) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "): (typeof documents)["\n    query GET_UPCOMING_EVENTS_LIST($today: DateTime!) {\n      eventPages(where: { date_gte: $today }, orderBy: date_ASC, stage: PUBLISHED) {\n        title\n        slug\n        date\n        ingress\n        hero {\n          image {\n            url\n          }\n          altText\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_PAST_EVENTS {\n  pastEvents(stage: PUBLISHED, first: 2) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"): (typeof documents)["\nquery GET_PAST_EVENTS {\n  pastEvents(stage: PUBLISHED, first: 2) {\n    title\n    slug\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GET_PAST_EVENTS_LIST {\n  pastEvents(stage: PUBLISHED, orderBy: publishedAt_ASC) {\n    title\n    slug\n    ingress\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"): (typeof documents)["\nquery GET_PAST_EVENTS_LIST {\n  pastEvents(stage: PUBLISHED, orderBy: publishedAt_ASC) {\n    title\n    slug\n    ingress\n    hero {\n      image {\n        url\n      }\n      altText\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment Hero on Hero {\n  altText\n  id\n  image {\n    url\n  }\n}\n"): (typeof documents)["\nfragment Hero on Hero {\n  altText\n  id\n  image {\n    url\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PageContent on StartPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        id\n        imageText\n        image {\n          url\n        }\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PageContent on StartPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        id\n        imageText\n        image {\n          url\n        }\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BlogContent on PastEvent {\n    content(first: 1000) {\n      ... on FeedbackHighlight {\n        author\n        feedback\n        id\n      }\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n      ... on Image {\n        imageText\n        id\n        altText\n        image {\n          url\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment BlogContent on PastEvent {\n    content(first: 1000) {\n      ... on FeedbackHighlight {\n        author\n        feedback\n        id\n      }\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Text {\n        text {\n          raw\n        }\n        id\n      }\n      ... on Image {\n        imageText\n        id\n        altText\n        image {\n          url\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EventContent on EventPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        imageText\n        id\n        image {\n          url\n        }\n      }\n      ... on Text {\n        id\n        text {\n          raw\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment EventContent on EventPage {\n    content(first: 1000) {\n      ... on Heading {\n        heading\n        id\n      }\n      ... on Image {\n        altText\n        imageText\n        id\n        image {\n          url\n        }\n      }\n      ... on Text {\n        id\n        text {\n          raw\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment AboutContent on AboutPage {\n      content(first: 1000) {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment AboutContent on AboutPage {\n      content(first: 1000) {\n        ... on Heading {\n          heading\n          id\n        }\n        ... on Image {\n          altText\n          imageText\n          id\n          image {\n            url\n          }\n        }\n        ... on Text {\n          id\n          text {\n            raw\n          }\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment location on EventPage {\n    location {\n      ... on EventLocation {\n        adress\n        id\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment location on EventPage {\n    location {\n      ... on EventLocation {\n        adress\n        id\n        map {\n          latitude\n          longitude\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment adress on AboutPage {\n  id\n  adress {\n    adress\n    map {\n      latitude\n      longitude\n    }\n  }\n}\n"): (typeof documents)["\nfragment adress on AboutPage {\n  id\n  adress {\n    adress\n    map {\n      latitude\n      longitude\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FormInputs on FormPage {\n    formInputs(first: 1000) {\n      ... on FormsTextarea {\n        required\n        textareaname: name\n        label\n      }\n      ... on FormsSelect {\n        required\n        selectname: name\n        label\n        options {\n          option\n          value\n        }\n      }\n      ... on FormsInput {\n        type\n        required\n        inputname: name\n        label\n      }\n      ... on FormsCheckbox {\n        required\n        label\n        checkboxname: name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FormInputs on FormPage {\n    formInputs(first: 1000) {\n      ... on FormsTextarea {\n        required\n        textareaname: name\n        label\n      }\n      ... on FormsSelect {\n        required\n        selectname: name\n        label\n        options {\n          option\n          value\n        }\n      }\n      ... on FormsInput {\n        type\n        required\n        inputname: name\n        label\n      }\n      ... on FormsCheckbox {\n        required\n        label\n        checkboxname: name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n  createWaitingListEvent(data: $data) {\n    email\n    lastName\n    firstName\n    eventPage {\n    slug\n  }\n  }\n}\n  "): (typeof documents)["\nmutation createWaitingListEvent($data: WaitingListEventCreateInput!) {\n  createWaitingListEvent(data: $data) {\n    email\n    lastName\n    firstName\n    eventPage {\n    slug\n  }\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n  createNewsletterSignup(data: $data) {\n    email\n    lastName\n    firstName\n  }\n}\n  "): (typeof documents)["\nmutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {\n  createNewsletterSignup(data: $data) {\n    email\n    lastName\n    firstName\n  }\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createFormAnswer($data: FormAnswerCreateInput!) {\n  createFormAnswer(data: $data) {\n  formData\n  formPage{\n    slug\n  }\n  eventPage {\n    slug\n  }\n}\n}\n  "): (typeof documents)["\nmutation createFormAnswer($data: FormAnswerCreateInput!) {\n  createFormAnswer(data: $data) {\n  formData\n  formPage{\n    slug\n  }\n  eventPage {\n    slug\n  }\n}\n}\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation createEventSignup($data: EventSignupCreateInput!) {\n createEventSignup(data: $data) {\n   photoConsent\n   occupation\n   lastName\n   firstName\n   eventPageSlug {\n     slug\n   }\n   email\n   allergies\n }\n}\n   "): (typeof documents)["\nmutation createEventSignup($data: EventSignupCreateInput!) {\n createEventSignup(data: $data) {\n   photoConsent\n   occupation\n   lastName\n   firstName\n   eventPageSlug {\n     slug\n   }\n   email\n   allergies\n }\n}\n   "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_LANDINGPAGE($where: EventLandingpageWhereUniqueInput!) {\n    eventLandingpage(where: $where) {\n      hero {\n        ...Hero\n      }\n      title\n    }\n  }\n  \n"): (typeof documents)["\n  query GET_LANDINGPAGE($where: EventLandingpageWhereUniqueInput!) {\n    eventLandingpage(where: $where) {\n      hero {\n        ...Hero\n      }\n      title\n    }\n  }\n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_STARTPAGE($where: StartPageWhereUniqueInput!) {\n    startPage(where: $where) {\n      title\n      slug\n      id\n      hero {\n        ...Hero\n      }\n      ...PageContent\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query GET_STARTPAGE($where: StartPageWhereUniqueInput!) {\n    startPage(where: $where) {\n      title\n      slug\n      id\n      hero {\n        ...Hero\n      }\n      ...PageContent\n    }\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GET_FORMPAGE($where: FormPageWhereUniqueInput!) {\n    formPage(where: $where) {\n      hero {\n        ...Hero\n      }\n      eventPage {\n        slug\n      }\n      formInfo {\n        raw\n      }\n      ...FormInputs\n      slug\n      title\n    }\n  }\n  \n  \n"): (typeof documents)["\n  query GET_FORMPAGE($where: FormPageWhereUniqueInput!) {\n    formPage(where: $where) {\n      hero {\n        ...Hero\n      }\n      eventPage {\n        slug\n      }\n      formInfo {\n        raw\n      }\n      ...FormInputs\n      slug\n      title\n    }\n  }\n  \n  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query GET_ABOUT_PAGE($where: AboutPageWhereUniqueInput!) {\n      aboutPage(where: $where) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n         ...Hero\n        }\n        ...AboutContent\n        slug\n        title\n        sidebarInfo\n        ...adress\n      }\n    }\n    \n    \n    \n  "): (typeof documents)["\n    query GET_ABOUT_PAGE($where: AboutPageWhereUniqueInput!) {\n      aboutPage(where: $where) {\n        employees {\n          title\n          name\n          phone\n          email\n          image {\n            url\n          }\n        }\n        hero {\n         ...Hero\n        }\n        ...AboutContent\n        slug\n        title\n        sidebarInfo\n        ...adress\n      }\n    }\n    \n    \n    \n  "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;