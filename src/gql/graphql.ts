/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type AboutPage = Node & {
  __typename?: 'AboutPage';
  /** Adress till kontor som syns i sidebaren  */
  adress: EventLocation;
  /** Rubriker, bilder och text. Addera hur många av varje som helst. Publiceras i den ordning de placeras här. */
  content: Array<AboutPagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<AboutPage>;
  /** Kontaktkort */
  employees: Array<ContactCard>;
  /** Herobild som syns längst upp på sidan */
  hero: Hero;
  /** List of AboutPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Övrig info som visas i sidebaren */
  sidebarInfo?: Maybe<Scalars['String']>;
  /**
   * Sökvägen i URL. Blir automatiskt titeln på inlägget.
   * För om oss sidan ska denna vara "om-oss" då det är på denna som webbplatsen hämtar datan
   */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type AboutPageAdressArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AboutPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type AboutPageEmployeesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactCardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactCardWhereInput>;
};


export type AboutPageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type AboutPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type AboutPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type AboutPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AboutPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AboutPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type AboutPageConnection = {
  __typename?: 'AboutPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AboutPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AboutPageCreateInput = {
  adress: EventLocationCreateOneInlineInput;
  content?: InputMaybe<AboutPagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  employees?: InputMaybe<ContactCardCreateManyInlineInput>;
  hero: HeroCreateOneInlineInput;
  sidebarInfo?: InputMaybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AboutPageCreateManyInlineInput = {
  /** Connect multiple existing AboutPage documents */
  connect?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Create and connect multiple existing AboutPage documents */
  create?: InputMaybe<Array<AboutPageCreateInput>>;
};

export type AboutPageCreateOneInlineInput = {
  /** Connect one existing AboutPage document */
  connect?: InputMaybe<AboutPageWhereUniqueInput>;
  /** Create and connect one AboutPage document */
  create?: InputMaybe<AboutPageCreateInput>;
};

/** An edge in a connection. */
export type AboutPageEdge = {
  __typename?: 'AboutPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: AboutPage;
};

/** Identifies documents */
export type AboutPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<EventLocationWhereInput>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<AboutPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutPageWhereStageInput>;
  employees_every?: InputMaybe<ContactCardWhereInput>;
  employees_none?: InputMaybe<ContactCardWhereInput>;
  employees_some?: InputMaybe<ContactCardWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sidebarInfo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sidebarInfo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sidebarInfo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sidebarInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sidebarInfo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sidebarInfo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sidebarInfo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sidebarInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sidebarInfo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sidebarInfo_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AboutPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SidebarInfoAsc = 'sidebarInfo_ASC',
  SidebarInfoDesc = 'sidebarInfo_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type AboutPageUpdateInput = {
  adress?: InputMaybe<EventLocationUpdateOneInlineInput>;
  content?: InputMaybe<AboutPagecontentUnionUpdateManyInlineInput>;
  employees?: InputMaybe<ContactCardUpdateManyInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  sidebarInfo?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutPageUpdateManyInlineInput = {
  /** Connect multiple existing AboutPage documents */
  connect?: InputMaybe<Array<AboutPageConnectInput>>;
  /** Create and connect multiple AboutPage documents */
  create?: InputMaybe<Array<AboutPageCreateInput>>;
  /** Delete multiple AboutPage documents */
  delete?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Disconnect multiple AboutPage documents */
  disconnect?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AboutPage documents */
  set?: InputMaybe<Array<AboutPageWhereUniqueInput>>;
  /** Update multiple AboutPage documents */
  update?: InputMaybe<Array<AboutPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple AboutPage documents */
  upsert?: InputMaybe<Array<AboutPageUpsertWithNestedWhereUniqueInput>>;
};

export type AboutPageUpdateManyInput = {
  sidebarInfo?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AboutPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AboutPageUpdateManyInput;
  /** Document search */
  where: AboutPageWhereInput;
};

export type AboutPageUpdateOneInlineInput = {
  /** Connect existing AboutPage document */
  connect?: InputMaybe<AboutPageWhereUniqueInput>;
  /** Create and connect one AboutPage document */
  create?: InputMaybe<AboutPageCreateInput>;
  /** Delete currently connected AboutPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected AboutPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single AboutPage document */
  update?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutPage document */
  upsert?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
};

export type AboutPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AboutPageUpdateInput;
  /** Unique document search */
  where: AboutPageWhereUniqueInput;
};

export type AboutPageUpsertInput = {
  /** Create document if it didn't exist */
  create: AboutPageCreateInput;
  /** Update document if it exists */
  update: AboutPageUpdateInput;
};

export type AboutPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AboutPageUpsertInput;
  /** Unique document search */
  where: AboutPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AboutPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AboutPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<EventLocationWhereInput>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<AboutPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_none?: InputMaybe<AboutPageWhereStageInput>;
  documentInStages_some?: InputMaybe<AboutPageWhereStageInput>;
  employees_every?: InputMaybe<ContactCardWhereInput>;
  employees_none?: InputMaybe<ContactCardWhereInput>;
  employees_some?: InputMaybe<ContactCardWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  sidebarInfo?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  sidebarInfo_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  sidebarInfo_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  sidebarInfo_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  sidebarInfo_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  sidebarInfo_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  sidebarInfo_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  sidebarInfo_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  sidebarInfo_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  sidebarInfo_starts_with?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AboutPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AboutPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AboutPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References AboutPage record uniquely */
export type AboutPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type AboutPagecontentUnion = Heading | Image | Text;

export type AboutPagecontentUnionConnectInput = {
  Heading?: InputMaybe<HeadingConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type AboutPagecontentUnionCreateInput = {
  Heading?: InputMaybe<HeadingCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type AboutPagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing AboutPagecontentUnion documents */
  create?: InputMaybe<Array<AboutPagecontentUnionCreateInput>>;
};

export type AboutPagecontentUnionCreateOneInlineInput = {
  /** Create and connect one AboutPagecontentUnion document */
  create?: InputMaybe<AboutPagecontentUnionCreateInput>;
};

export type AboutPagecontentUnionCreateWithPositionInput = {
  Heading?: InputMaybe<HeadingCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type AboutPagecontentUnionUpdateInput = {
  Heading?: InputMaybe<HeadingUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type AboutPagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple AboutPagecontentUnion component instances */
  create?: InputMaybe<Array<AboutPagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple AboutPagecontentUnion documents */
  delete?: InputMaybe<Array<AboutPagecontentUnionWhereUniqueInput>>;
  /** Update multiple AboutPagecontentUnion component instances */
  update?: InputMaybe<Array<AboutPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple AboutPagecontentUnion component instances */
  upsert?: InputMaybe<Array<AboutPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type AboutPagecontentUnionUpdateManyWithNestedWhereInput = {
  Heading?: InputMaybe<HeadingUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type AboutPagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one AboutPagecontentUnion document */
  create?: InputMaybe<AboutPagecontentUnionCreateInput>;
  /** Delete currently connected AboutPagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single AboutPagecontentUnion document */
  update?: InputMaybe<AboutPagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AboutPagecontentUnion document */
  upsert?: InputMaybe<AboutPagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type AboutPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type AboutPagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type AboutPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type AboutPagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type AboutPagecontentUnionWhereInput = {
  Heading?: InputMaybe<HeadingWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type AboutPagecontentUnionWhereUniqueInput = {
  Heading?: InputMaybe<HeadingWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  imageContactCard?: InputMaybe<ContactCardCreateManyInlineInput>;
  imageHero?: InputMaybe<HeroCreateManyInlineInput>;
  imageImage?: InputMaybe<ImageCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  imageContactCard?: InputMaybe<ContactCardUpdateManyInlineInput>;
  imageHero?: InputMaybe<HeroUpdateManyInlineInput>;
  imageImage?: InputMaybe<ImageUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export type ContactCard = {
  __typename?: 'ContactCard';
  /** Epost */
  email: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Bildfil */
  image?: Maybe<Asset>;
  /** Namn på kontakt */
  name: Scalars['String'];
  /** Telefonnummer */
  phone?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** Titel tex chef, projektledare, utvecklare */
  title: Scalars['String'];
};


export type ContactCardImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ContactCardConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ContactCardWhereUniqueInput;
};

/** A connection to a list of items. */
export type ContactCardConnection = {
  __typename?: 'ContactCardConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ContactCardEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ContactCardCreateInput = {
  email: Scalars['String'];
  image?: InputMaybe<AssetCreateOneInlineInput>;
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type ContactCardCreateManyInlineInput = {
  /** Create and connect multiple existing ContactCard documents */
  create?: InputMaybe<Array<ContactCardCreateInput>>;
};

export type ContactCardCreateOneInlineInput = {
  /** Create and connect one ContactCard document */
  create?: InputMaybe<ContactCardCreateInput>;
};

export type ContactCardCreateWithPositionInput = {
  /** Document to create */
  data: ContactCardCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ContactCardEdge = {
  __typename?: 'ContactCardEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ContactCard;
};

/** Identifies documents */
export type ContactCardManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ContactCardOrderByInput {
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type ContactCardParent = AboutPage | EventPage;

export type ContactCardParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
};

export type ContactCardParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
};

export type ContactCardParentCreateManyInlineInput = {
  /** Connect multiple existing ContactCardParent documents */
  connect?: InputMaybe<Array<ContactCardParentWhereUniqueInput>>;
  /** Create and connect multiple existing ContactCardParent documents */
  create?: InputMaybe<Array<ContactCardParentCreateInput>>;
};

export type ContactCardParentCreateOneInlineInput = {
  /** Connect one existing ContactCardParent document */
  connect?: InputMaybe<ContactCardParentWhereUniqueInput>;
  /** Create and connect one ContactCardParent document */
  create?: InputMaybe<ContactCardParentCreateInput>;
};

export type ContactCardParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
};

export type ContactCardParentUpdateManyInlineInput = {
  /** Connect multiple existing ContactCardParent documents */
  connect?: InputMaybe<Array<ContactCardParentConnectInput>>;
  /** Create and connect multiple ContactCardParent documents */
  create?: InputMaybe<Array<ContactCardParentCreateInput>>;
  /** Delete multiple ContactCardParent documents */
  delete?: InputMaybe<Array<ContactCardParentWhereUniqueInput>>;
  /** Disconnect multiple ContactCardParent documents */
  disconnect?: InputMaybe<Array<ContactCardParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ContactCardParent documents */
  set?: InputMaybe<Array<ContactCardParentWhereUniqueInput>>;
  /** Update multiple ContactCardParent documents */
  update?: InputMaybe<Array<ContactCardParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ContactCardParent documents */
  upsert?: InputMaybe<Array<ContactCardParentUpsertWithNestedWhereUniqueInput>>;
};

export type ContactCardParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
};

export type ContactCardParentUpdateOneInlineInput = {
  /** Connect existing ContactCardParent document */
  connect?: InputMaybe<ContactCardParentWhereUniqueInput>;
  /** Create and connect one ContactCardParent document */
  create?: InputMaybe<ContactCardParentCreateInput>;
  /** Delete currently connected ContactCardParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ContactCardParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactCardParent document */
  update?: InputMaybe<ContactCardParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactCardParent document */
  upsert?: InputMaybe<ContactCardParentUpsertWithNestedWhereUniqueInput>;
};

export type ContactCardParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
};

export type ContactCardParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
};

export type ContactCardParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
};

export type ContactCardParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
};

export type ContactCardUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactCardUpdateManyInlineInput = {
  /** Create and connect multiple ContactCard component instances */
  create?: InputMaybe<Array<ContactCardCreateWithPositionInput>>;
  /** Delete multiple ContactCard documents */
  delete?: InputMaybe<Array<ContactCardWhereUniqueInput>>;
  /** Update multiple ContactCard component instances */
  update?: InputMaybe<Array<ContactCardUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple ContactCard component instances */
  upsert?: InputMaybe<Array<ContactCardUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ContactCardUpdateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ContactCardUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ContactCardUpdateManyInput;
  /** Document search */
  where: ContactCardWhereInput;
};

export type ContactCardUpdateOneInlineInput = {
  /** Create and connect one ContactCard document */
  create?: InputMaybe<ContactCardCreateInput>;
  /** Delete currently connected ContactCard document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single ContactCard document */
  update?: InputMaybe<ContactCardUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ContactCard document */
  upsert?: InputMaybe<ContactCardUpsertWithNestedWhereUniqueInput>;
};

export type ContactCardUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ContactCardUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactCardWhereUniqueInput;
};

export type ContactCardUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ContactCardUpdateInput;
  /** Unique document search */
  where: ContactCardWhereUniqueInput;
};

export type ContactCardUpsertInput = {
  /** Create document if it didn't exist */
  create: ContactCardCreateInput;
  /** Update document if it exists */
  update: ContactCardUpdateInput;
};

export type ContactCardUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ContactCardUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ContactCardWhereUniqueInput;
};

export type ContactCardUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ContactCardUpsertInput;
  /** Unique document search */
  where: ContactCardWhereUniqueInput;
};

/** Identifies documents */
export type ContactCardWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ContactCardWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  phone_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  phone_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  phone_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  phone_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  phone_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  phone_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  phone_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
};

/** References ContactCard record uniquely */
export type ContactCardWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type EventComment = Node & {
  __typename?: 'EventComment';
  comment: Scalars['String'];
  commentPolicy: Scalars['Boolean'];
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<EventComment>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  /** List of EventComment versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastname: Scalars['String'];
  pastEvent?: Maybe<PastEvent>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EventCommentCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventCommentDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventCommentHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventCommentPastEventArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventCommentPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventCommentScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventCommentUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EventCommentConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventCommentWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventCommentConnection = {
  __typename?: 'EventCommentConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventCommentEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventCommentCreateInput = {
  comment: Scalars['String'];
  commentPolicy: Scalars['Boolean'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  pastEvent?: InputMaybe<PastEventCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCommentCreateManyInlineInput = {
  /** Connect multiple existing EventComment documents */
  connect?: InputMaybe<Array<EventCommentWhereUniqueInput>>;
  /** Create and connect multiple existing EventComment documents */
  create?: InputMaybe<Array<EventCommentCreateInput>>;
};

export type EventCommentCreateOneInlineInput = {
  /** Connect one existing EventComment document */
  connect?: InputMaybe<EventCommentWhereUniqueInput>;
  /** Create and connect one EventComment document */
  create?: InputMaybe<EventCommentCreateInput>;
};

/** An edge in a connection. */
export type EventCommentEdge = {
  __typename?: 'EventCommentEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventComment;
};

/** Identifies documents */
export type EventCommentManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  commentPolicy?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  commentPolicy_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventCommentWhereStageInput>;
  documentInStages_none?: InputMaybe<EventCommentWhereStageInput>;
  documentInStages_some?: InputMaybe<EventCommentWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstname_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastname_starts_with?: InputMaybe<Scalars['String']>;
  pastEvent?: InputMaybe<PastEventWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EventCommentOrderByInput {
  CommentPolicyAsc = 'commentPolicy_ASC',
  CommentPolicyDesc = 'commentPolicy_DESC',
  CommentAsc = 'comment_ASC',
  CommentDesc = 'comment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstnameAsc = 'firstname_ASC',
  FirstnameDesc = 'firstname_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastnameAsc = 'lastname_ASC',
  LastnameDesc = 'lastname_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventCommentUpdateInput = {
  comment?: InputMaybe<Scalars['String']>;
  commentPolicy?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
  pastEvent?: InputMaybe<PastEventUpdateOneInlineInput>;
};

export type EventCommentUpdateManyInlineInput = {
  /** Connect multiple existing EventComment documents */
  connect?: InputMaybe<Array<EventCommentConnectInput>>;
  /** Create and connect multiple EventComment documents */
  create?: InputMaybe<Array<EventCommentCreateInput>>;
  /** Delete multiple EventComment documents */
  delete?: InputMaybe<Array<EventCommentWhereUniqueInput>>;
  /** Disconnect multiple EventComment documents */
  disconnect?: InputMaybe<Array<EventCommentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EventComment documents */
  set?: InputMaybe<Array<EventCommentWhereUniqueInput>>;
  /** Update multiple EventComment documents */
  update?: InputMaybe<Array<EventCommentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EventComment documents */
  upsert?: InputMaybe<Array<EventCommentUpsertWithNestedWhereUniqueInput>>;
};

export type EventCommentUpdateManyInput = {
  comment?: InputMaybe<Scalars['String']>;
  commentPolicy?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  lastname?: InputMaybe<Scalars['String']>;
};

export type EventCommentUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventCommentUpdateManyInput;
  /** Document search */
  where: EventCommentWhereInput;
};

export type EventCommentUpdateOneInlineInput = {
  /** Connect existing EventComment document */
  connect?: InputMaybe<EventCommentWhereUniqueInput>;
  /** Create and connect one EventComment document */
  create?: InputMaybe<EventCommentCreateInput>;
  /** Delete currently connected EventComment document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EventComment document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventComment document */
  update?: InputMaybe<EventCommentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventComment document */
  upsert?: InputMaybe<EventCommentUpsertWithNestedWhereUniqueInput>;
};

export type EventCommentUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventCommentUpdateInput;
  /** Unique document search */
  where: EventCommentWhereUniqueInput;
};

export type EventCommentUpsertInput = {
  /** Create document if it didn't exist */
  create: EventCommentCreateInput;
  /** Update document if it exists */
  update: EventCommentUpdateInput;
};

export type EventCommentUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventCommentUpsertInput;
  /** Unique document search */
  where: EventCommentWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventCommentWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type EventCommentWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventCommentWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  comment?: InputMaybe<Scalars['String']>;
  commentPolicy?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  commentPolicy_not?: InputMaybe<Scalars['Boolean']>;
  /** All values containing the given string. */
  comment_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  comment_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  comment_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  comment_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  comment_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  comment_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  comment_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  comment_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  comment_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventCommentWhereStageInput>;
  documentInStages_none?: InputMaybe<EventCommentWhereStageInput>;
  documentInStages_some?: InputMaybe<EventCommentWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  firstname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstname_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastname?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastname_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastname_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastname_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastname_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastname_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastname_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastname_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastname_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastname_starts_with?: InputMaybe<Scalars['String']>;
  pastEvent?: InputMaybe<PastEventWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventCommentWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventCommentWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventCommentWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventCommentWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventCommentWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References EventComment record uniquely */
export type EventCommentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EventLandingpage = Node & {
  __typename?: 'EventLandingpage';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<EventLandingpage>;
  /**
   * Herobild längst upp på sidan
   *
   */
  hero: Hero;
  /** List of EventLandingpage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Sökvägen i URL. Blir automatiskt titeln på inlägget. */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EventLandingpageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventLandingpageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventLandingpageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventLandingpageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventLandingpagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventLandingpageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventLandingpageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EventLandingpageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventLandingpageWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventLandingpageConnection = {
  __typename?: 'EventLandingpageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventLandingpageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventLandingpageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  hero: HeroCreateOneInlineInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventLandingpageCreateManyInlineInput = {
  /** Connect multiple existing EventLandingpage documents */
  connect?: InputMaybe<Array<EventLandingpageWhereUniqueInput>>;
  /** Create and connect multiple existing EventLandingpage documents */
  create?: InputMaybe<Array<EventLandingpageCreateInput>>;
};

export type EventLandingpageCreateOneInlineInput = {
  /** Connect one existing EventLandingpage document */
  connect?: InputMaybe<EventLandingpageWhereUniqueInput>;
  /** Create and connect one EventLandingpage document */
  create?: InputMaybe<EventLandingpageCreateInput>;
};

/** An edge in a connection. */
export type EventLandingpageEdge = {
  __typename?: 'EventLandingpageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventLandingpage;
};

/** Identifies documents */
export type EventLandingpageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventLandingpageWhereStageInput>;
  documentInStages_none?: InputMaybe<EventLandingpageWhereStageInput>;
  documentInStages_some?: InputMaybe<EventLandingpageWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EventLandingpageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventLandingpageUpdateInput = {
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventLandingpageUpdateManyInlineInput = {
  /** Connect multiple existing EventLandingpage documents */
  connect?: InputMaybe<Array<EventLandingpageConnectInput>>;
  /** Create and connect multiple EventLandingpage documents */
  create?: InputMaybe<Array<EventLandingpageCreateInput>>;
  /** Delete multiple EventLandingpage documents */
  delete?: InputMaybe<Array<EventLandingpageWhereUniqueInput>>;
  /** Disconnect multiple EventLandingpage documents */
  disconnect?: InputMaybe<Array<EventLandingpageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EventLandingpage documents */
  set?: InputMaybe<Array<EventLandingpageWhereUniqueInput>>;
  /** Update multiple EventLandingpage documents */
  update?: InputMaybe<Array<EventLandingpageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EventLandingpage documents */
  upsert?: InputMaybe<Array<EventLandingpageUpsertWithNestedWhereUniqueInput>>;
};

export type EventLandingpageUpdateManyInput = {
  title?: InputMaybe<Scalars['String']>;
};

export type EventLandingpageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventLandingpageUpdateManyInput;
  /** Document search */
  where: EventLandingpageWhereInput;
};

export type EventLandingpageUpdateOneInlineInput = {
  /** Connect existing EventLandingpage document */
  connect?: InputMaybe<EventLandingpageWhereUniqueInput>;
  /** Create and connect one EventLandingpage document */
  create?: InputMaybe<EventLandingpageCreateInput>;
  /** Delete currently connected EventLandingpage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EventLandingpage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventLandingpage document */
  update?: InputMaybe<EventLandingpageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventLandingpage document */
  upsert?: InputMaybe<EventLandingpageUpsertWithNestedWhereUniqueInput>;
};

export type EventLandingpageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventLandingpageUpdateInput;
  /** Unique document search */
  where: EventLandingpageWhereUniqueInput;
};

export type EventLandingpageUpsertInput = {
  /** Create document if it didn't exist */
  create: EventLandingpageCreateInput;
  /** Update document if it exists */
  update: EventLandingpageUpdateInput;
};

export type EventLandingpageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventLandingpageUpsertInput;
  /** Unique document search */
  where: EventLandingpageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventLandingpageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type EventLandingpageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventLandingpageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventLandingpageWhereStageInput>;
  documentInStages_none?: InputMaybe<EventLandingpageWhereStageInput>;
  documentInStages_some?: InputMaybe<EventLandingpageWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventLandingpageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventLandingpageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventLandingpageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventLandingpageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventLandingpageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References EventLandingpage record uniquely */
export type EventLandingpageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type EventLocation = {
  __typename?: 'EventLocation';
  /** Adress */
  adress: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Adderar karta, sök på adressen. */
  map: Location;
  /** System stage field */
  stage: Stage;
};

export type EventLocationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventLocationWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventLocationConnection = {
  __typename?: 'EventLocationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventLocationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventLocationCreateInput = {
  adress: Scalars['String'];
  map: LocationInput;
};

export type EventLocationCreateManyInlineInput = {
  /** Create and connect multiple existing EventLocation documents */
  create?: InputMaybe<Array<EventLocationCreateInput>>;
};

export type EventLocationCreateOneInlineInput = {
  /** Create and connect one EventLocation document */
  create?: InputMaybe<EventLocationCreateInput>;
};

export type EventLocationCreateWithPositionInput = {
  /** Document to create */
  data: EventLocationCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type EventLocationEdge = {
  __typename?: 'EventLocationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventLocation;
};

/** Identifies documents */
export type EventLocationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  adress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  adress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  adress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  adress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  adress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  adress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  adress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  adress_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum EventLocationOrderByInput {
  AdressAsc = 'adress_ASC',
  AdressDesc = 'adress_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type EventLocationParent = AboutPage | EventPage;

export type EventLocationParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
};

export type EventLocationParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
};

export type EventLocationParentCreateManyInlineInput = {
  /** Connect multiple existing EventLocationParent documents */
  connect?: InputMaybe<Array<EventLocationParentWhereUniqueInput>>;
  /** Create and connect multiple existing EventLocationParent documents */
  create?: InputMaybe<Array<EventLocationParentCreateInput>>;
};

export type EventLocationParentCreateOneInlineInput = {
  /** Connect one existing EventLocationParent document */
  connect?: InputMaybe<EventLocationParentWhereUniqueInput>;
  /** Create and connect one EventLocationParent document */
  create?: InputMaybe<EventLocationParentCreateInput>;
};

export type EventLocationParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
};

export type EventLocationParentUpdateManyInlineInput = {
  /** Connect multiple existing EventLocationParent documents */
  connect?: InputMaybe<Array<EventLocationParentConnectInput>>;
  /** Create and connect multiple EventLocationParent documents */
  create?: InputMaybe<Array<EventLocationParentCreateInput>>;
  /** Delete multiple EventLocationParent documents */
  delete?: InputMaybe<Array<EventLocationParentWhereUniqueInput>>;
  /** Disconnect multiple EventLocationParent documents */
  disconnect?: InputMaybe<Array<EventLocationParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EventLocationParent documents */
  set?: InputMaybe<Array<EventLocationParentWhereUniqueInput>>;
  /** Update multiple EventLocationParent documents */
  update?: InputMaybe<Array<EventLocationParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EventLocationParent documents */
  upsert?: InputMaybe<Array<EventLocationParentUpsertWithNestedWhereUniqueInput>>;
};

export type EventLocationParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
};

export type EventLocationParentUpdateOneInlineInput = {
  /** Connect existing EventLocationParent document */
  connect?: InputMaybe<EventLocationParentWhereUniqueInput>;
  /** Create and connect one EventLocationParent document */
  create?: InputMaybe<EventLocationParentCreateInput>;
  /** Delete currently connected EventLocationParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EventLocationParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventLocationParent document */
  update?: InputMaybe<EventLocationParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventLocationParent document */
  upsert?: InputMaybe<EventLocationParentUpsertWithNestedWhereUniqueInput>;
};

export type EventLocationParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
};

export type EventLocationParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
};

export type EventLocationParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
};

export type EventLocationParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
};

export type EventLocationUpdateInput = {
  adress?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<LocationInput>;
};

export type EventLocationUpdateManyInlineInput = {
  /** Create and connect multiple EventLocation component instances */
  create?: InputMaybe<Array<EventLocationCreateWithPositionInput>>;
  /** Delete multiple EventLocation documents */
  delete?: InputMaybe<Array<EventLocationWhereUniqueInput>>;
  /** Update multiple EventLocation component instances */
  update?: InputMaybe<Array<EventLocationUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EventLocation component instances */
  upsert?: InputMaybe<Array<EventLocationUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EventLocationUpdateManyInput = {
  adress?: InputMaybe<Scalars['String']>;
  map?: InputMaybe<LocationInput>;
};

export type EventLocationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventLocationUpdateManyInput;
  /** Document search */
  where: EventLocationWhereInput;
};

export type EventLocationUpdateOneInlineInput = {
  /** Create and connect one EventLocation document */
  create?: InputMaybe<EventLocationCreateInput>;
  /** Delete currently connected EventLocation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventLocation document */
  update?: InputMaybe<EventLocationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventLocation document */
  upsert?: InputMaybe<EventLocationUpsertWithNestedWhereUniqueInput>;
};

export type EventLocationUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<EventLocationUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EventLocationWhereUniqueInput;
};

export type EventLocationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventLocationUpdateInput;
  /** Unique document search */
  where: EventLocationWhereUniqueInput;
};

export type EventLocationUpsertInput = {
  /** Create document if it didn't exist */
  create: EventLocationCreateInput;
  /** Update document if it exists */
  update: EventLocationUpdateInput;
};

export type EventLocationUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<EventLocationUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: EventLocationWhereUniqueInput;
};

export type EventLocationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventLocationUpsertInput;
  /** Unique document search */
  where: EventLocationWhereUniqueInput;
};

/** Identifies documents */
export type EventLocationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventLocationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  adress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  adress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  adress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  adress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  adress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  adress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  adress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  adress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  adress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  adress_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References EventLocation record uniquely */
export type EventLocationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type EventPage = Node & {
  __typename?: 'EventPage';
  /** Kontaktkort */
  contact: Array<ContactCard>;
  /** Rubriker, bilder och text. Addera hur många av varje som helst. Publiceras i den ordning de placeras här. */
  content: Array<EventPagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Datum för eventet */
  date: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<EventPage>;
  /** Vilka som har anmält upp sig till eventet */
  eventSignups: Array<EventSignup>;
  formAnswers: Array<FormAnswer>;
  /** Vilket formulär hör till eventet */
  formPages: Array<FormPage>;
  /** Herobilden längst upp på sidan */
  hero?: Maybe<Hero>;
  /** List of EventPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Kort text som syns på samlingssidan. */
  ingress: Scalars['String'];
  /** Adress och ev karta till eventet */
  location?: Maybe<EventLocation>;
  /** Max antal deltagare på eventet. När detta fyllts kommer att formulär för "reserv listan" att finnas på webbplatsen istället för anmälan */
  maxParticipants: Scalars['Int'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Sökvägen i URL. Blir automatiskt titeln på inlägget. */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  waitingListEvents: Array<WaitingListEvent>;
};


export type EventPageContactArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ContactCardOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ContactCardWhereInput>;
};


export type EventPageContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type EventPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventPageEventSignupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<EventSignupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventSignupWhereInput>;
};


export type EventPageFormAnswersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FormAnswerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormAnswerWhereInput>;
};


export type EventPageFormPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FormPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormPageWhereInput>;
};


export type EventPageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventPageLocationArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventPageWaitingListEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<WaitingListEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WaitingListEventWhereInput>;
};

export type EventPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventPageConnection = {
  __typename?: 'EventPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventPageCreateInput = {
  contact?: InputMaybe<ContactCardCreateManyInlineInput>;
  content?: InputMaybe<EventPagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  eventSignups?: InputMaybe<EventSignupCreateManyInlineInput>;
  formAnswers?: InputMaybe<FormAnswerCreateManyInlineInput>;
  formPages?: InputMaybe<FormPageCreateManyInlineInput>;
  hero?: InputMaybe<HeroCreateOneInlineInput>;
  ingress: Scalars['String'];
  location?: InputMaybe<EventLocationCreateOneInlineInput>;
  maxParticipants: Scalars['Int'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  waitingListEvents?: InputMaybe<WaitingListEventCreateManyInlineInput>;
};

export type EventPageCreateManyInlineInput = {
  /** Connect multiple existing EventPage documents */
  connect?: InputMaybe<Array<EventPageWhereUniqueInput>>;
  /** Create and connect multiple existing EventPage documents */
  create?: InputMaybe<Array<EventPageCreateInput>>;
};

export type EventPageCreateOneInlineInput = {
  /** Connect one existing EventPage document */
  connect?: InputMaybe<EventPageWhereUniqueInput>;
  /** Create and connect one EventPage document */
  create?: InputMaybe<EventPageCreateInput>;
};

/** An edge in a connection. */
export type EventPageEdge = {
  __typename?: 'EventPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventPage;
};

/** Identifies documents */
export type EventPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contact_every?: InputMaybe<ContactCardWhereInput>;
  contact_none?: InputMaybe<ContactCardWhereInput>;
  contact_some?: InputMaybe<ContactCardWhereInput>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<EventPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<EventPageWhereStageInput>;
  documentInStages_none?: InputMaybe<EventPageWhereStageInput>;
  documentInStages_some?: InputMaybe<EventPageWhereStageInput>;
  eventSignups_every?: InputMaybe<EventSignupWhereInput>;
  eventSignups_none?: InputMaybe<EventSignupWhereInput>;
  eventSignups_some?: InputMaybe<EventSignupWhereInput>;
  formAnswers_every?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_none?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_some?: InputMaybe<FormAnswerWhereInput>;
  formPages_every?: InputMaybe<FormPageWhereInput>;
  formPages_none?: InputMaybe<FormPageWhereInput>;
  formPages_some?: InputMaybe<FormPageWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ingress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<EventLocationWhereInput>;
  maxParticipants?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  maxParticipants_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  maxParticipants_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  maxParticipants_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  maxParticipants_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  maxParticipants_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  maxParticipants_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  maxParticipants_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  waitingListEvents_every?: InputMaybe<WaitingListEventWhereInput>;
  waitingListEvents_none?: InputMaybe<WaitingListEventWhereInput>;
  waitingListEvents_some?: InputMaybe<WaitingListEventWhereInput>;
};

export enum EventPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IngressAsc = 'ingress_ASC',
  IngressDesc = 'ingress_DESC',
  MaxParticipantsAsc = 'maxParticipants_ASC',
  MaxParticipantsDesc = 'maxParticipants_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventPageUpdateInput = {
  contact?: InputMaybe<ContactCardUpdateManyInlineInput>;
  content?: InputMaybe<EventPagecontentUnionUpdateManyInlineInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  eventSignups?: InputMaybe<EventSignupUpdateManyInlineInput>;
  formAnswers?: InputMaybe<FormAnswerUpdateManyInlineInput>;
  formPages?: InputMaybe<FormPageUpdateManyInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  ingress?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<EventLocationUpdateOneInlineInput>;
  maxParticipants?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  waitingListEvents?: InputMaybe<WaitingListEventUpdateManyInlineInput>;
};

export type EventPageUpdateManyInlineInput = {
  /** Connect multiple existing EventPage documents */
  connect?: InputMaybe<Array<EventPageConnectInput>>;
  /** Create and connect multiple EventPage documents */
  create?: InputMaybe<Array<EventPageCreateInput>>;
  /** Delete multiple EventPage documents */
  delete?: InputMaybe<Array<EventPageWhereUniqueInput>>;
  /** Disconnect multiple EventPage documents */
  disconnect?: InputMaybe<Array<EventPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EventPage documents */
  set?: InputMaybe<Array<EventPageWhereUniqueInput>>;
  /** Update multiple EventPage documents */
  update?: InputMaybe<Array<EventPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EventPage documents */
  upsert?: InputMaybe<Array<EventPageUpsertWithNestedWhereUniqueInput>>;
};

export type EventPageUpdateManyInput = {
  date?: InputMaybe<Scalars['DateTime']>;
  ingress?: InputMaybe<Scalars['String']>;
  maxParticipants?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EventPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventPageUpdateManyInput;
  /** Document search */
  where: EventPageWhereInput;
};

export type EventPageUpdateOneInlineInput = {
  /** Connect existing EventPage document */
  connect?: InputMaybe<EventPageWhereUniqueInput>;
  /** Create and connect one EventPage document */
  create?: InputMaybe<EventPageCreateInput>;
  /** Delete currently connected EventPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EventPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventPage document */
  update?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventPage document */
  upsert?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
};

export type EventPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventPageUpdateInput;
  /** Unique document search */
  where: EventPageWhereUniqueInput;
};

export type EventPageUpsertInput = {
  /** Create document if it didn't exist */
  create: EventPageCreateInput;
  /** Update document if it exists */
  update: EventPageUpdateInput;
};

export type EventPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventPageUpsertInput;
  /** Unique document search */
  where: EventPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type EventPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  contact_every?: InputMaybe<ContactCardWhereInput>;
  contact_none?: InputMaybe<ContactCardWhereInput>;
  contact_some?: InputMaybe<ContactCardWhereInput>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<EventPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<EventPageWhereStageInput>;
  documentInStages_none?: InputMaybe<EventPageWhereStageInput>;
  documentInStages_some?: InputMaybe<EventPageWhereStageInput>;
  eventSignups_every?: InputMaybe<EventSignupWhereInput>;
  eventSignups_none?: InputMaybe<EventSignupWhereInput>;
  eventSignups_some?: InputMaybe<EventSignupWhereInput>;
  formAnswers_every?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_none?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_some?: InputMaybe<FormAnswerWhereInput>;
  formPages_every?: InputMaybe<FormPageWhereInput>;
  formPages_none?: InputMaybe<FormPageWhereInput>;
  formPages_some?: InputMaybe<FormPageWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ingress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<EventLocationWhereInput>;
  maxParticipants?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  maxParticipants_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  maxParticipants_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  maxParticipants_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** All values less than the given value. */
  maxParticipants_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  maxParticipants_lte?: InputMaybe<Scalars['Int']>;
  /** Any other value that exists and is not equal to the given value. */
  maxParticipants_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  maxParticipants_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  waitingListEvents_every?: InputMaybe<WaitingListEventWhereInput>;
  waitingListEvents_none?: InputMaybe<WaitingListEventWhereInput>;
  waitingListEvents_some?: InputMaybe<WaitingListEventWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References EventPage record uniquely */
export type EventPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type EventPagecontentUnion = Heading | Image | Text;

export type EventPagecontentUnionConnectInput = {
  Heading?: InputMaybe<HeadingConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type EventPagecontentUnionCreateInput = {
  Heading?: InputMaybe<HeadingCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type EventPagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing EventPagecontentUnion documents */
  create?: InputMaybe<Array<EventPagecontentUnionCreateInput>>;
};

export type EventPagecontentUnionCreateOneInlineInput = {
  /** Create and connect one EventPagecontentUnion document */
  create?: InputMaybe<EventPagecontentUnionCreateInput>;
};

export type EventPagecontentUnionCreateWithPositionInput = {
  Heading?: InputMaybe<HeadingCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type EventPagecontentUnionUpdateInput = {
  Heading?: InputMaybe<HeadingUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type EventPagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple EventPagecontentUnion component instances */
  create?: InputMaybe<Array<EventPagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple EventPagecontentUnion documents */
  delete?: InputMaybe<Array<EventPagecontentUnionWhereUniqueInput>>;
  /** Update multiple EventPagecontentUnion component instances */
  update?: InputMaybe<Array<EventPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple EventPagecontentUnion component instances */
  upsert?: InputMaybe<Array<EventPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type EventPagecontentUnionUpdateManyWithNestedWhereInput = {
  Heading?: InputMaybe<HeadingUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type EventPagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one EventPagecontentUnion document */
  create?: InputMaybe<EventPagecontentUnionCreateInput>;
  /** Delete currently connected EventPagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventPagecontentUnion document */
  update?: InputMaybe<EventPagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventPagecontentUnion document */
  upsert?: InputMaybe<EventPagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type EventPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type EventPagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type EventPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type EventPagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type EventPagecontentUnionWhereInput = {
  Heading?: InputMaybe<HeadingWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type EventPagecontentUnionWhereUniqueInput = {
  Heading?: InputMaybe<HeadingWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type EventSignup = Node & {
  __typename?: 'EventSignup';
  allergies?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<EventSignup>;
  email: Scalars['String'];
  eventPageSlug?: Maybe<EventPage>;
  firstName: Scalars['String'];
  /** List of EventSignup versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  /** Utbildning eller sysselsättning */
  occupation: Scalars['String'];
  /** Om personen är ok med att bli publicerad med bild på webbplatsen från ett event */
  photoConsent?: Maybe<Scalars['Boolean']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type EventSignupCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventSignupDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type EventSignupEventPageSlugArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventSignupHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type EventSignupPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type EventSignupScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type EventSignupUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type EventSignupConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: EventSignupWhereUniqueInput;
};

/** A connection to a list of items. */
export type EventSignupConnection = {
  __typename?: 'EventSignupConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<EventSignupEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type EventSignupCreateInput = {
  allergies?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  eventPageSlug?: InputMaybe<EventPageCreateOneInlineInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  occupation: Scalars['String'];
  photoConsent?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventSignupCreateManyInlineInput = {
  /** Connect multiple existing EventSignup documents */
  connect?: InputMaybe<Array<EventSignupWhereUniqueInput>>;
  /** Create and connect multiple existing EventSignup documents */
  create?: InputMaybe<Array<EventSignupCreateInput>>;
};

export type EventSignupCreateOneInlineInput = {
  /** Connect one existing EventSignup document */
  connect?: InputMaybe<EventSignupWhereUniqueInput>;
  /** Create and connect one EventSignup document */
  create?: InputMaybe<EventSignupCreateInput>;
};

/** An edge in a connection. */
export type EventSignupEdge = {
  __typename?: 'EventSignupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: EventSignup;
};

/** Identifies documents */
export type EventSignupManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  allergies?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  allergies_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  allergies_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  allergies_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  allergies_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  allergies_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  allergies_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  allergies_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  allergies_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  allergies_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventSignupWhereStageInput>;
  documentInStages_none?: InputMaybe<EventSignupWhereStageInput>;
  documentInStages_some?: InputMaybe<EventSignupWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  eventPageSlug?: InputMaybe<EventPageWhereInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']>;
  photoConsent?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  photoConsent_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum EventSignupOrderByInput {
  AllergiesAsc = 'allergies_ASC',
  AllergiesDesc = 'allergies_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  OccupationAsc = 'occupation_ASC',
  OccupationDesc = 'occupation_DESC',
  PhotoConsentAsc = 'photoConsent_ASC',
  PhotoConsentDesc = 'photoConsent_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type EventSignupUpdateInput = {
  allergies?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  eventPageSlug?: InputMaybe<EventPageUpdateOneInlineInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  photoConsent?: InputMaybe<Scalars['Boolean']>;
};

export type EventSignupUpdateManyInlineInput = {
  /** Connect multiple existing EventSignup documents */
  connect?: InputMaybe<Array<EventSignupConnectInput>>;
  /** Create and connect multiple EventSignup documents */
  create?: InputMaybe<Array<EventSignupCreateInput>>;
  /** Delete multiple EventSignup documents */
  delete?: InputMaybe<Array<EventSignupWhereUniqueInput>>;
  /** Disconnect multiple EventSignup documents */
  disconnect?: InputMaybe<Array<EventSignupWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing EventSignup documents */
  set?: InputMaybe<Array<EventSignupWhereUniqueInput>>;
  /** Update multiple EventSignup documents */
  update?: InputMaybe<Array<EventSignupUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple EventSignup documents */
  upsert?: InputMaybe<Array<EventSignupUpsertWithNestedWhereUniqueInput>>;
};

export type EventSignupUpdateManyInput = {
  allergies?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  photoConsent?: InputMaybe<Scalars['Boolean']>;
};

export type EventSignupUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: EventSignupUpdateManyInput;
  /** Document search */
  where: EventSignupWhereInput;
};

export type EventSignupUpdateOneInlineInput = {
  /** Connect existing EventSignup document */
  connect?: InputMaybe<EventSignupWhereUniqueInput>;
  /** Create and connect one EventSignup document */
  create?: InputMaybe<EventSignupCreateInput>;
  /** Delete currently connected EventSignup document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected EventSignup document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single EventSignup document */
  update?: InputMaybe<EventSignupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single EventSignup document */
  upsert?: InputMaybe<EventSignupUpsertWithNestedWhereUniqueInput>;
};

export type EventSignupUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: EventSignupUpdateInput;
  /** Unique document search */
  where: EventSignupWhereUniqueInput;
};

export type EventSignupUpsertInput = {
  /** Create document if it didn't exist */
  create: EventSignupCreateInput;
  /** Update document if it exists */
  update: EventSignupUpdateInput;
};

export type EventSignupUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: EventSignupUpsertInput;
  /** Unique document search */
  where: EventSignupWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type EventSignupWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type EventSignupWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventSignupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  allergies?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  allergies_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  allergies_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  allergies_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  allergies_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  allergies_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  allergies_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  allergies_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  allergies_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  allergies_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<EventSignupWhereStageInput>;
  documentInStages_none?: InputMaybe<EventSignupWhereStageInput>;
  documentInStages_some?: InputMaybe<EventSignupWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  eventPageSlug?: InputMaybe<EventPageWhereInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  occupation?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  occupation_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  occupation_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  occupation_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  occupation_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  occupation_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  occupation_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  occupation_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  occupation_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  occupation_starts_with?: InputMaybe<Scalars['String']>;
  photoConsent?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  photoConsent_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type EventSignupWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<EventSignupWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<EventSignupWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<EventSignupWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<EventSignupWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References EventSignup record uniquely */
export type EventSignupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Highlight för feedback/kommentarer som kan placeras i tidigare event.  */
export type FeedbackHighlight = {
  __typename?: 'FeedbackHighlight';
  /** Vem feedbacken kommer från. */
  author: Scalars['String'];
  /**
   * Innehållet på feedbacken/kommentaren.
   *
   */
  feedback: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type FeedbackHighlightConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FeedbackHighlightWhereUniqueInput;
};

/** A connection to a list of items. */
export type FeedbackHighlightConnection = {
  __typename?: 'FeedbackHighlightConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FeedbackHighlightEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FeedbackHighlightCreateInput = {
  author: Scalars['String'];
  feedback: Scalars['String'];
};

export type FeedbackHighlightCreateManyInlineInput = {
  /** Create and connect multiple existing FeedbackHighlight documents */
  create?: InputMaybe<Array<FeedbackHighlightCreateInput>>;
};

export type FeedbackHighlightCreateOneInlineInput = {
  /** Create and connect one FeedbackHighlight document */
  create?: InputMaybe<FeedbackHighlightCreateInput>;
};

export type FeedbackHighlightCreateWithPositionInput = {
  /** Document to create */
  data: FeedbackHighlightCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FeedbackHighlightEdge = {
  __typename?: 'FeedbackHighlightEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FeedbackHighlight;
};

/** Identifies documents */
export type FeedbackHighlightManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  feedback_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  feedback_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  feedback_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  feedback_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  feedback_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  feedback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  feedback_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  feedback_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum FeedbackHighlightOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  FeedbackAsc = 'feedback_ASC',
  FeedbackDesc = 'feedback_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type FeedbackHighlightParent = PastEvent;

export type FeedbackHighlightParentConnectInput = {
  PastEvent?: InputMaybe<PastEventConnectInput>;
};

export type FeedbackHighlightParentCreateInput = {
  PastEvent?: InputMaybe<PastEventCreateInput>;
};

export type FeedbackHighlightParentCreateManyInlineInput = {
  /** Connect multiple existing FeedbackHighlightParent documents */
  connect?: InputMaybe<Array<FeedbackHighlightParentWhereUniqueInput>>;
  /** Create and connect multiple existing FeedbackHighlightParent documents */
  create?: InputMaybe<Array<FeedbackHighlightParentCreateInput>>;
};

export type FeedbackHighlightParentCreateOneInlineInput = {
  /** Connect one existing FeedbackHighlightParent document */
  connect?: InputMaybe<FeedbackHighlightParentWhereUniqueInput>;
  /** Create and connect one FeedbackHighlightParent document */
  create?: InputMaybe<FeedbackHighlightParentCreateInput>;
};

export type FeedbackHighlightParentUpdateInput = {
  PastEvent?: InputMaybe<PastEventUpdateInput>;
};

export type FeedbackHighlightParentUpdateManyInlineInput = {
  /** Connect multiple existing FeedbackHighlightParent documents */
  connect?: InputMaybe<Array<FeedbackHighlightParentConnectInput>>;
  /** Create and connect multiple FeedbackHighlightParent documents */
  create?: InputMaybe<Array<FeedbackHighlightParentCreateInput>>;
  /** Delete multiple FeedbackHighlightParent documents */
  delete?: InputMaybe<Array<FeedbackHighlightParentWhereUniqueInput>>;
  /** Disconnect multiple FeedbackHighlightParent documents */
  disconnect?: InputMaybe<Array<FeedbackHighlightParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FeedbackHighlightParent documents */
  set?: InputMaybe<Array<FeedbackHighlightParentWhereUniqueInput>>;
  /** Update multiple FeedbackHighlightParent documents */
  update?: InputMaybe<Array<FeedbackHighlightParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FeedbackHighlightParent documents */
  upsert?: InputMaybe<Array<FeedbackHighlightParentUpsertWithNestedWhereUniqueInput>>;
};

export type FeedbackHighlightParentUpdateManyWithNestedWhereInput = {
  PastEvent?: InputMaybe<PastEventUpdateManyWithNestedWhereInput>;
};

export type FeedbackHighlightParentUpdateOneInlineInput = {
  /** Connect existing FeedbackHighlightParent document */
  connect?: InputMaybe<FeedbackHighlightParentWhereUniqueInput>;
  /** Create and connect one FeedbackHighlightParent document */
  create?: InputMaybe<FeedbackHighlightParentCreateInput>;
  /** Delete currently connected FeedbackHighlightParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FeedbackHighlightParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FeedbackHighlightParent document */
  update?: InputMaybe<FeedbackHighlightParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeedbackHighlightParent document */
  upsert?: InputMaybe<FeedbackHighlightParentUpsertWithNestedWhereUniqueInput>;
};

export type FeedbackHighlightParentUpdateWithNestedWhereUniqueInput = {
  PastEvent?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
};

export type FeedbackHighlightParentUpsertWithNestedWhereUniqueInput = {
  PastEvent?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
};

export type FeedbackHighlightParentWhereInput = {
  PastEvent?: InputMaybe<PastEventWhereInput>;
};

export type FeedbackHighlightParentWhereUniqueInput = {
  PastEvent?: InputMaybe<PastEventWhereUniqueInput>;
};

export type FeedbackHighlightUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
};

export type FeedbackHighlightUpdateManyInlineInput = {
  /** Create and connect multiple FeedbackHighlight component instances */
  create?: InputMaybe<Array<FeedbackHighlightCreateWithPositionInput>>;
  /** Delete multiple FeedbackHighlight documents */
  delete?: InputMaybe<Array<FeedbackHighlightWhereUniqueInput>>;
  /** Update multiple FeedbackHighlight component instances */
  update?: InputMaybe<Array<FeedbackHighlightUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FeedbackHighlight component instances */
  upsert?: InputMaybe<Array<FeedbackHighlightUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FeedbackHighlightUpdateManyInput = {
  author?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
};

export type FeedbackHighlightUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FeedbackHighlightUpdateManyInput;
  /** Document search */
  where: FeedbackHighlightWhereInput;
};

export type FeedbackHighlightUpdateOneInlineInput = {
  /** Create and connect one FeedbackHighlight document */
  create?: InputMaybe<FeedbackHighlightCreateInput>;
  /** Delete currently connected FeedbackHighlight document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FeedbackHighlight document */
  update?: InputMaybe<FeedbackHighlightUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FeedbackHighlight document */
  upsert?: InputMaybe<FeedbackHighlightUpsertWithNestedWhereUniqueInput>;
};

export type FeedbackHighlightUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FeedbackHighlightUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeedbackHighlightWhereUniqueInput;
};

export type FeedbackHighlightUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FeedbackHighlightUpdateInput;
  /** Unique document search */
  where: FeedbackHighlightWhereUniqueInput;
};

export type FeedbackHighlightUpsertInput = {
  /** Create document if it didn't exist */
  create: FeedbackHighlightCreateInput;
  /** Update document if it exists */
  update: FeedbackHighlightUpdateInput;
};

export type FeedbackHighlightUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FeedbackHighlightUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FeedbackHighlightWhereUniqueInput;
};

export type FeedbackHighlightUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FeedbackHighlightUpsertInput;
  /** Unique document search */
  where: FeedbackHighlightWhereUniqueInput;
};

/** Identifies documents */
export type FeedbackHighlightWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FeedbackHighlightWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  author?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  author_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  author_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  author_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  author_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  author_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  author_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  author_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  author_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  author_starts_with?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  feedback_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  feedback_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  feedback_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  feedback_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  feedback_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  feedback_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  feedback_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  feedback_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  feedback_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References FeedbackHighlight record uniquely */
export type FeedbackHighlightWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FormAnswer = Node & {
  __typename?: 'FormAnswer';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<FormAnswer>;
  eventPage?: Maybe<EventPage>;
  formData?: Maybe<Scalars['Json']>;
  formPage?: Maybe<FormPage>;
  /** List of FormAnswer versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FormAnswerCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FormAnswerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FormAnswerEventPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FormAnswerFormPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FormAnswerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FormAnswerPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type FormAnswerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FormAnswerUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FormAnswerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormAnswerWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormAnswerConnection = {
  __typename?: 'FormAnswerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormAnswerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormAnswerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventPage?: InputMaybe<EventPageCreateOneInlineInput>;
  formData?: InputMaybe<Scalars['Json']>;
  formPage?: InputMaybe<FormPageCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FormAnswerCreateManyInlineInput = {
  /** Connect multiple existing FormAnswer documents */
  connect?: InputMaybe<Array<FormAnswerWhereUniqueInput>>;
  /** Create and connect multiple existing FormAnswer documents */
  create?: InputMaybe<Array<FormAnswerCreateInput>>;
};

export type FormAnswerCreateOneInlineInput = {
  /** Connect one existing FormAnswer document */
  connect?: InputMaybe<FormAnswerWhereUniqueInput>;
  /** Create and connect one FormAnswer document */
  create?: InputMaybe<FormAnswerCreateInput>;
};

/** An edge in a connection. */
export type FormAnswerEdge = {
  __typename?: 'FormAnswerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormAnswer;
};

/** Identifies documents */
export type FormAnswerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FormAnswerWhereStageInput>;
  documentInStages_none?: InputMaybe<FormAnswerWhereStageInput>;
  documentInStages_some?: InputMaybe<FormAnswerWhereStageInput>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  /** All values containing the given json path. */
  formData_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  formData_value_recursive?: InputMaybe<Scalars['Json']>;
  formPage?: InputMaybe<FormPageWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FormAnswerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FormAnswerUpdateInput = {
  eventPage?: InputMaybe<EventPageUpdateOneInlineInput>;
  formData?: InputMaybe<Scalars['Json']>;
  formPage?: InputMaybe<FormPageUpdateOneInlineInput>;
};

export type FormAnswerUpdateManyInlineInput = {
  /** Connect multiple existing FormAnswer documents */
  connect?: InputMaybe<Array<FormAnswerConnectInput>>;
  /** Create and connect multiple FormAnswer documents */
  create?: InputMaybe<Array<FormAnswerCreateInput>>;
  /** Delete multiple FormAnswer documents */
  delete?: InputMaybe<Array<FormAnswerWhereUniqueInput>>;
  /** Disconnect multiple FormAnswer documents */
  disconnect?: InputMaybe<Array<FormAnswerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormAnswer documents */
  set?: InputMaybe<Array<FormAnswerWhereUniqueInput>>;
  /** Update multiple FormAnswer documents */
  update?: InputMaybe<Array<FormAnswerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormAnswer documents */
  upsert?: InputMaybe<Array<FormAnswerUpsertWithNestedWhereUniqueInput>>;
};

export type FormAnswerUpdateManyInput = {
  formData?: InputMaybe<Scalars['Json']>;
};

export type FormAnswerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormAnswerUpdateManyInput;
  /** Document search */
  where: FormAnswerWhereInput;
};

export type FormAnswerUpdateOneInlineInput = {
  /** Connect existing FormAnswer document */
  connect?: InputMaybe<FormAnswerWhereUniqueInput>;
  /** Create and connect one FormAnswer document */
  create?: InputMaybe<FormAnswerCreateInput>;
  /** Delete currently connected FormAnswer document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormAnswer document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormAnswer document */
  update?: InputMaybe<FormAnswerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormAnswer document */
  upsert?: InputMaybe<FormAnswerUpsertWithNestedWhereUniqueInput>;
};

export type FormAnswerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormAnswerUpdateInput;
  /** Unique document search */
  where: FormAnswerWhereUniqueInput;
};

export type FormAnswerUpsertInput = {
  /** Create document if it didn't exist */
  create: FormAnswerCreateInput;
  /** Update document if it exists */
  update: FormAnswerUpdateInput;
};

export type FormAnswerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormAnswerUpsertInput;
  /** Unique document search */
  where: FormAnswerWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FormAnswerWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FormAnswerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormAnswerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FormAnswerWhereStageInput>;
  documentInStages_none?: InputMaybe<FormAnswerWhereStageInput>;
  documentInStages_some?: InputMaybe<FormAnswerWhereStageInput>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  /** All values containing the given json path. */
  formData_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  formData_value_recursive?: InputMaybe<Scalars['Json']>;
  formPage?: InputMaybe<FormPageWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FormAnswerWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormAnswerWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormAnswerWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormAnswerWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FormAnswerWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References FormAnswer record uniquely */
export type FormAnswerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Vilket sorts fält detta är, tex text, telefonnummer, email  */
export enum FormInputType {
  Email = 'email',
  Number = 'number',
  Text = 'text'
}

/** Sida med formulär för feedback på specifika event */
export type FormPage = Node & {
  __typename?: 'FormPage';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<FormPage>;
  /** Vilket event hör till formuläret */
  eventPage?: Maybe<EventPage>;
  formAnswers: Array<FormAnswer>;
  /** Information om formuläret och dess syfte osv */
  formInfo: RichText;
  /** skapa ett formulär med hjälp av olika input fält, de visas i den ordning som de placeras här  */
  formInputs: Array<FormPageformInputsUnion>;
  /** bilden högst upp på sidan */
  hero: Hero;
  /** List of FormPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** genereras från title, måste vara unik. Bildar sidans sökväg på webbplatsen */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageEventPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageFormAnswersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FormAnswerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormAnswerWhereInput>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageFormInputsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Sida med formulär för feedback på specifika event */
export type FormPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type FormPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormPageConnection = {
  __typename?: 'FormPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormPageCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventPage?: InputMaybe<EventPageCreateOneInlineInput>;
  formAnswers?: InputMaybe<FormAnswerCreateManyInlineInput>;
  formInfo: Scalars['RichTextAST'];
  formInputs?: InputMaybe<FormPageformInputsUnionCreateManyInlineInput>;
  hero: HeroCreateOneInlineInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FormPageCreateManyInlineInput = {
  /** Connect multiple existing FormPage documents */
  connect?: InputMaybe<Array<FormPageWhereUniqueInput>>;
  /** Create and connect multiple existing FormPage documents */
  create?: InputMaybe<Array<FormPageCreateInput>>;
};

export type FormPageCreateOneInlineInput = {
  /** Connect one existing FormPage document */
  connect?: InputMaybe<FormPageWhereUniqueInput>;
  /** Create and connect one FormPage document */
  create?: InputMaybe<FormPageCreateInput>;
};

/** An edge in a connection. */
export type FormPageEdge = {
  __typename?: 'FormPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormPage;
};

/** Identifies documents */
export type FormPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FormPageWhereStageInput>;
  documentInStages_none?: InputMaybe<FormPageWhereStageInput>;
  documentInStages_some?: InputMaybe<FormPageWhereStageInput>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  formAnswers_every?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_none?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_some?: InputMaybe<FormAnswerWhereInput>;
  /** All values in which the union is empty. */
  formInputs_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  formInputs_some?: InputMaybe<FormPageformInputsUnionWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FormPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FormPageUpdateInput = {
  eventPage?: InputMaybe<EventPageUpdateOneInlineInput>;
  formAnswers?: InputMaybe<FormAnswerUpdateManyInlineInput>;
  formInfo?: InputMaybe<Scalars['RichTextAST']>;
  formInputs?: InputMaybe<FormPageformInputsUnionUpdateManyInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FormPageUpdateManyInlineInput = {
  /** Connect multiple existing FormPage documents */
  connect?: InputMaybe<Array<FormPageConnectInput>>;
  /** Create and connect multiple FormPage documents */
  create?: InputMaybe<Array<FormPageCreateInput>>;
  /** Delete multiple FormPage documents */
  delete?: InputMaybe<Array<FormPageWhereUniqueInput>>;
  /** Disconnect multiple FormPage documents */
  disconnect?: InputMaybe<Array<FormPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormPage documents */
  set?: InputMaybe<Array<FormPageWhereUniqueInput>>;
  /** Update multiple FormPage documents */
  update?: InputMaybe<Array<FormPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormPage documents */
  upsert?: InputMaybe<Array<FormPageUpsertWithNestedWhereUniqueInput>>;
};

export type FormPageUpdateManyInput = {
  formInfo?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type FormPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormPageUpdateManyInput;
  /** Document search */
  where: FormPageWhereInput;
};

export type FormPageUpdateOneInlineInput = {
  /** Connect existing FormPage document */
  connect?: InputMaybe<FormPageWhereUniqueInput>;
  /** Create and connect one FormPage document */
  create?: InputMaybe<FormPageCreateInput>;
  /** Delete currently connected FormPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormPage document */
  update?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormPage document */
  upsert?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
};

export type FormPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormPageUpdateInput;
  /** Unique document search */
  where: FormPageWhereUniqueInput;
};

export type FormPageUpsertInput = {
  /** Create document if it didn't exist */
  create: FormPageCreateInput;
  /** Update document if it exists */
  update: FormPageUpdateInput;
};

export type FormPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormPageUpsertInput;
  /** Unique document search */
  where: FormPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type FormPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type FormPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<FormPageWhereStageInput>;
  documentInStages_none?: InputMaybe<FormPageWhereStageInput>;
  documentInStages_some?: InputMaybe<FormPageWhereStageInput>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  formAnswers_every?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_none?: InputMaybe<FormAnswerWhereInput>;
  formAnswers_some?: InputMaybe<FormAnswerWhereInput>;
  /** All values in which the union is empty. */
  formInputs_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  formInputs_some?: InputMaybe<FormPageformInputsUnionWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type FormPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<FormPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References FormPage record uniquely */
export type FormPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type FormPageformInputsUnion = FormsCheckbox | FormsInput | FormsSelect | FormsTextarea;

export type FormPageformInputsUnionConnectInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxConnectInput>;
  FormsInput?: InputMaybe<FormsInputConnectInput>;
  FormsSelect?: InputMaybe<FormsSelectConnectInput>;
  FormsTextarea?: InputMaybe<FormsTextareaConnectInput>;
};

export type FormPageformInputsUnionCreateInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxCreateInput>;
  FormsInput?: InputMaybe<FormsInputCreateInput>;
  FormsSelect?: InputMaybe<FormsSelectCreateInput>;
  FormsTextarea?: InputMaybe<FormsTextareaCreateInput>;
};

export type FormPageformInputsUnionCreateManyInlineInput = {
  /** Create and connect multiple existing FormPageformInputsUnion documents */
  create?: InputMaybe<Array<FormPageformInputsUnionCreateInput>>;
};

export type FormPageformInputsUnionCreateOneInlineInput = {
  /** Create and connect one FormPageformInputsUnion document */
  create?: InputMaybe<FormPageformInputsUnionCreateInput>;
};

export type FormPageformInputsUnionCreateWithPositionInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxCreateWithPositionInput>;
  FormsInput?: InputMaybe<FormsInputCreateWithPositionInput>;
  FormsSelect?: InputMaybe<FormsSelectCreateWithPositionInput>;
  FormsTextarea?: InputMaybe<FormsTextareaCreateWithPositionInput>;
};

export type FormPageformInputsUnionUpdateInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpdateInput>;
  FormsInput?: InputMaybe<FormsInputUpdateInput>;
  FormsSelect?: InputMaybe<FormsSelectUpdateInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpdateInput>;
};

export type FormPageformInputsUnionUpdateManyInlineInput = {
  /** Create and connect multiple FormPageformInputsUnion component instances */
  create?: InputMaybe<Array<FormPageformInputsUnionCreateWithPositionInput>>;
  /** Delete multiple FormPageformInputsUnion documents */
  delete?: InputMaybe<Array<FormPageformInputsUnionWhereUniqueInput>>;
  /** Update multiple FormPageformInputsUnion component instances */
  update?: InputMaybe<Array<FormPageformInputsUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormPageformInputsUnion component instances */
  upsert?: InputMaybe<Array<FormPageformInputsUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormPageformInputsUnionUpdateManyWithNestedWhereInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpdateManyWithNestedWhereInput>;
  FormsInput?: InputMaybe<FormsInputUpdateManyWithNestedWhereInput>;
  FormsSelect?: InputMaybe<FormsSelectUpdateManyWithNestedWhereInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpdateManyWithNestedWhereInput>;
};

export type FormPageformInputsUnionUpdateOneInlineInput = {
  /** Create and connect one FormPageformInputsUnion document */
  create?: InputMaybe<FormPageformInputsUnionCreateInput>;
  /** Delete currently connected FormPageformInputsUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormPageformInputsUnion document */
  update?: InputMaybe<FormPageformInputsUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormPageformInputsUnion document */
  upsert?: InputMaybe<FormPageformInputsUnionUpsertWithNestedWhereUniqueInput>;
};

export type FormPageformInputsUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpdateWithNestedWhereUniqueAndPositionInput>;
  FormsInput?: InputMaybe<FormsInputUpdateWithNestedWhereUniqueAndPositionInput>;
  FormsSelect?: InputMaybe<FormsSelectUpdateWithNestedWhereUniqueAndPositionInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FormPageformInputsUnionUpdateWithNestedWhereUniqueInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpdateWithNestedWhereUniqueInput>;
  FormsInput?: InputMaybe<FormsInputUpdateWithNestedWhereUniqueInput>;
  FormsSelect?: InputMaybe<FormsSelectUpdateWithNestedWhereUniqueInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpdateWithNestedWhereUniqueInput>;
};

export type FormPageformInputsUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpsertWithNestedWhereUniqueAndPositionInput>;
  FormsInput?: InputMaybe<FormsInputUpsertWithNestedWhereUniqueAndPositionInput>;
  FormsSelect?: InputMaybe<FormsSelectUpsertWithNestedWhereUniqueAndPositionInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FormPageformInputsUnionUpsertWithNestedWhereUniqueInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxUpsertWithNestedWhereUniqueInput>;
  FormsInput?: InputMaybe<FormsInputUpsertWithNestedWhereUniqueInput>;
  FormsSelect?: InputMaybe<FormsSelectUpsertWithNestedWhereUniqueInput>;
  FormsTextarea?: InputMaybe<FormsTextareaUpsertWithNestedWhereUniqueInput>;
};

export type FormPageformInputsUnionWhereInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxWhereInput>;
  FormsInput?: InputMaybe<FormsInputWhereInput>;
  FormsSelect?: InputMaybe<FormsSelectWhereInput>;
  FormsTextarea?: InputMaybe<FormsTextareaWhereInput>;
};

export type FormPageformInputsUnionWhereUniqueInput = {
  FormsCheckbox?: InputMaybe<FormsCheckboxWhereUniqueInput>;
  FormsInput?: InputMaybe<FormsInputWhereUniqueInput>;
  FormsSelect?: InputMaybe<FormsSelectWhereUniqueInput>;
  FormsTextarea?: InputMaybe<FormsTextareaWhereUniqueInput>;
};

/** skapar en checkbox */
export type FormsCheckbox = {
  __typename?: 'FormsCheckbox';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Fältets rubrik tex "Ditt namn: " */
  label: Scalars['String'];
  /** Namnge fältet på engelska och med - istället för mellanslag, används som referens till backend  */
  name: Scalars['String'];
  /** anger om fältet är obligatoriskt eller ej  */
  required: Scalars['Boolean'];
  /** System stage field */
  stage: Stage;
};

export type FormsCheckboxConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormsCheckboxWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormsCheckboxConnection = {
  __typename?: 'FormsCheckboxConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormsCheckboxEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormsCheckboxCreateInput = {
  label: Scalars['String'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
};

export type FormsCheckboxCreateManyInlineInput = {
  /** Create and connect multiple existing FormsCheckbox documents */
  create?: InputMaybe<Array<FormsCheckboxCreateInput>>;
};

export type FormsCheckboxCreateOneInlineInput = {
  /** Create and connect one FormsCheckbox document */
  create?: InputMaybe<FormsCheckboxCreateInput>;
};

export type FormsCheckboxCreateWithPositionInput = {
  /** Document to create */
  data: FormsCheckboxCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormsCheckboxEdge = {
  __typename?: 'FormsCheckboxEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormsCheckbox;
};

/** Identifies documents */
export type FormsCheckboxManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

export enum FormsCheckboxOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

export type FormsCheckboxParent = FormPage;

export type FormsCheckboxParentConnectInput = {
  FormPage?: InputMaybe<FormPageConnectInput>;
};

export type FormsCheckboxParentCreateInput = {
  FormPage?: InputMaybe<FormPageCreateInput>;
};

export type FormsCheckboxParentCreateManyInlineInput = {
  /** Connect multiple existing FormsCheckboxParent documents */
  connect?: InputMaybe<Array<FormsCheckboxParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormsCheckboxParent documents */
  create?: InputMaybe<Array<FormsCheckboxParentCreateInput>>;
};

export type FormsCheckboxParentCreateOneInlineInput = {
  /** Connect one existing FormsCheckboxParent document */
  connect?: InputMaybe<FormsCheckboxParentWhereUniqueInput>;
  /** Create and connect one FormsCheckboxParent document */
  create?: InputMaybe<FormsCheckboxParentCreateInput>;
};

export type FormsCheckboxParentUpdateInput = {
  FormPage?: InputMaybe<FormPageUpdateInput>;
};

export type FormsCheckboxParentUpdateManyInlineInput = {
  /** Connect multiple existing FormsCheckboxParent documents */
  connect?: InputMaybe<Array<FormsCheckboxParentConnectInput>>;
  /** Create and connect multiple FormsCheckboxParent documents */
  create?: InputMaybe<Array<FormsCheckboxParentCreateInput>>;
  /** Delete multiple FormsCheckboxParent documents */
  delete?: InputMaybe<Array<FormsCheckboxParentWhereUniqueInput>>;
  /** Disconnect multiple FormsCheckboxParent documents */
  disconnect?: InputMaybe<Array<FormsCheckboxParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormsCheckboxParent documents */
  set?: InputMaybe<Array<FormsCheckboxParentWhereUniqueInput>>;
  /** Update multiple FormsCheckboxParent documents */
  update?: InputMaybe<Array<FormsCheckboxParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormsCheckboxParent documents */
  upsert?: InputMaybe<Array<FormsCheckboxParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormsCheckboxParentUpdateManyWithNestedWhereInput = {
  FormPage?: InputMaybe<FormPageUpdateManyWithNestedWhereInput>;
};

export type FormsCheckboxParentUpdateOneInlineInput = {
  /** Connect existing FormsCheckboxParent document */
  connect?: InputMaybe<FormsCheckboxParentWhereUniqueInput>;
  /** Create and connect one FormsCheckboxParent document */
  create?: InputMaybe<FormsCheckboxParentCreateInput>;
  /** Delete currently connected FormsCheckboxParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormsCheckboxParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsCheckboxParent document */
  update?: InputMaybe<FormsCheckboxParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsCheckboxParent document */
  upsert?: InputMaybe<FormsCheckboxParentUpsertWithNestedWhereUniqueInput>;
};

export type FormsCheckboxParentUpdateWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
};

export type FormsCheckboxParentUpsertWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
};

export type FormsCheckboxParentWhereInput = {
  FormPage?: InputMaybe<FormPageWhereInput>;
};

export type FormsCheckboxParentWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageWhereUniqueInput>;
};

export type FormsCheckboxUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsCheckboxUpdateManyInlineInput = {
  /** Create and connect multiple FormsCheckbox component instances */
  create?: InputMaybe<Array<FormsCheckboxCreateWithPositionInput>>;
  /** Delete multiple FormsCheckbox documents */
  delete?: InputMaybe<Array<FormsCheckboxWhereUniqueInput>>;
  /** Update multiple FormsCheckbox component instances */
  update?: InputMaybe<Array<FormsCheckboxUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsCheckbox component instances */
  upsert?: InputMaybe<Array<FormsCheckboxUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsCheckboxUpdateManyInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsCheckboxUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormsCheckboxUpdateManyInput;
  /** Document search */
  where: FormsCheckboxWhereInput;
};

export type FormsCheckboxUpdateOneInlineInput = {
  /** Create and connect one FormsCheckbox document */
  create?: InputMaybe<FormsCheckboxCreateInput>;
  /** Delete currently connected FormsCheckbox document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsCheckbox document */
  update?: InputMaybe<FormsCheckboxUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsCheckbox document */
  upsert?: InputMaybe<FormsCheckboxUpsertWithNestedWhereUniqueInput>;
};

export type FormsCheckboxUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormsCheckboxUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsCheckboxWhereUniqueInput;
};

export type FormsCheckboxUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormsCheckboxUpdateInput;
  /** Unique document search */
  where: FormsCheckboxWhereUniqueInput;
};

export type FormsCheckboxUpsertInput = {
  /** Create document if it didn't exist */
  create: FormsCheckboxCreateInput;
  /** Update document if it exists */
  update: FormsCheckboxUpdateInput;
};

export type FormsCheckboxUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormsCheckboxUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsCheckboxWhereUniqueInput;
};

export type FormsCheckboxUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormsCheckboxUpsertInput;
  /** Unique document search */
  where: FormsCheckboxWhereUniqueInput;
};

/** Identifies documents */
export type FormsCheckboxWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsCheckboxWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

/** References FormsCheckbox record uniquely */
export type FormsCheckboxWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Vanligt input fält med antingen typen text/email(kräver ett email-format)/number(tar endast siffror) */
export type FormsInput = {
  __typename?: 'FormsInput';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Rubriken för fältet */
  label: Scalars['String'];
  /** Namnge fältet på engelska och med - istället för mellanslag, används som referens till backend  */
  name: Scalars['String'];
  /** om fältet är obligatoriskt eller ej */
  required: Scalars['Boolean'];
  /** System stage field */
  stage: Stage;
  /** vilken typ av input ska godkännas: text, email (kräver ett email-format) eller number (endast siffror) */
  type: FormInputType;
};

export type FormsInputConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormsInputWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormsInputConnection = {
  __typename?: 'FormsInputConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormsInputEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormsInputCreateInput = {
  label: Scalars['String'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
  type: FormInputType;
};

export type FormsInputCreateManyInlineInput = {
  /** Create and connect multiple existing FormsInput documents */
  create?: InputMaybe<Array<FormsInputCreateInput>>;
};

export type FormsInputCreateOneInlineInput = {
  /** Create and connect one FormsInput document */
  create?: InputMaybe<FormsInputCreateInput>;
};

export type FormsInputCreateWithPositionInput = {
  /** Document to create */
  data: FormsInputCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormsInputEdge = {
  __typename?: 'FormsInputEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormsInput;
};

/** Identifies documents */
export type FormsInputManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<FormInputType>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<FormInputType>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<FormInputType>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<FormInputType>>>;
};

export enum FormsInputOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type FormsInputParent = FormPage;

export type FormsInputParentConnectInput = {
  FormPage?: InputMaybe<FormPageConnectInput>;
};

export type FormsInputParentCreateInput = {
  FormPage?: InputMaybe<FormPageCreateInput>;
};

export type FormsInputParentCreateManyInlineInput = {
  /** Connect multiple existing FormsInputParent documents */
  connect?: InputMaybe<Array<FormsInputParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormsInputParent documents */
  create?: InputMaybe<Array<FormsInputParentCreateInput>>;
};

export type FormsInputParentCreateOneInlineInput = {
  /** Connect one existing FormsInputParent document */
  connect?: InputMaybe<FormsInputParentWhereUniqueInput>;
  /** Create and connect one FormsInputParent document */
  create?: InputMaybe<FormsInputParentCreateInput>;
};

export type FormsInputParentUpdateInput = {
  FormPage?: InputMaybe<FormPageUpdateInput>;
};

export type FormsInputParentUpdateManyInlineInput = {
  /** Connect multiple existing FormsInputParent documents */
  connect?: InputMaybe<Array<FormsInputParentConnectInput>>;
  /** Create and connect multiple FormsInputParent documents */
  create?: InputMaybe<Array<FormsInputParentCreateInput>>;
  /** Delete multiple FormsInputParent documents */
  delete?: InputMaybe<Array<FormsInputParentWhereUniqueInput>>;
  /** Disconnect multiple FormsInputParent documents */
  disconnect?: InputMaybe<Array<FormsInputParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormsInputParent documents */
  set?: InputMaybe<Array<FormsInputParentWhereUniqueInput>>;
  /** Update multiple FormsInputParent documents */
  update?: InputMaybe<Array<FormsInputParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormsInputParent documents */
  upsert?: InputMaybe<Array<FormsInputParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormsInputParentUpdateManyWithNestedWhereInput = {
  FormPage?: InputMaybe<FormPageUpdateManyWithNestedWhereInput>;
};

export type FormsInputParentUpdateOneInlineInput = {
  /** Connect existing FormsInputParent document */
  connect?: InputMaybe<FormsInputParentWhereUniqueInput>;
  /** Create and connect one FormsInputParent document */
  create?: InputMaybe<FormsInputParentCreateInput>;
  /** Delete currently connected FormsInputParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormsInputParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsInputParent document */
  update?: InputMaybe<FormsInputParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsInputParent document */
  upsert?: InputMaybe<FormsInputParentUpsertWithNestedWhereUniqueInput>;
};

export type FormsInputParentUpdateWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
};

export type FormsInputParentUpsertWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
};

export type FormsInputParentWhereInput = {
  FormPage?: InputMaybe<FormPageWhereInput>;
};

export type FormsInputParentWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageWhereUniqueInput>;
};

export type FormsInputUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<FormInputType>;
};

export type FormsInputUpdateManyInlineInput = {
  /** Create and connect multiple FormsInput component instances */
  create?: InputMaybe<Array<FormsInputCreateWithPositionInput>>;
  /** Delete multiple FormsInput documents */
  delete?: InputMaybe<Array<FormsInputWhereUniqueInput>>;
  /** Update multiple FormsInput component instances */
  update?: InputMaybe<Array<FormsInputUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsInput component instances */
  upsert?: InputMaybe<Array<FormsInputUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsInputUpdateManyInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<FormInputType>;
};

export type FormsInputUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormsInputUpdateManyInput;
  /** Document search */
  where: FormsInputWhereInput;
};

export type FormsInputUpdateOneInlineInput = {
  /** Create and connect one FormsInput document */
  create?: InputMaybe<FormsInputCreateInput>;
  /** Delete currently connected FormsInput document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsInput document */
  update?: InputMaybe<FormsInputUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsInput document */
  upsert?: InputMaybe<FormsInputUpsertWithNestedWhereUniqueInput>;
};

export type FormsInputUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormsInputUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsInputWhereUniqueInput;
};

export type FormsInputUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormsInputUpdateInput;
  /** Unique document search */
  where: FormsInputWhereUniqueInput;
};

export type FormsInputUpsertInput = {
  /** Create document if it didn't exist */
  create: FormsInputCreateInput;
  /** Update document if it exists */
  update: FormsInputUpdateInput;
};

export type FormsInputUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormsInputUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsInputWhereUniqueInput;
};

export type FormsInputUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormsInputUpsertInput;
  /** Unique document search */
  where: FormsInputWhereUniqueInput;
};

/** Identifies documents */
export type FormsInputWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsInputWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<FormInputType>;
  /** All values that are contained in given list. */
  type_in?: InputMaybe<Array<InputMaybe<FormInputType>>>;
  /** Any other value that exists and is not equal to the given value. */
  type_not?: InputMaybe<FormInputType>;
  /** All values that are not contained in given list. */
  type_not_in?: InputMaybe<Array<InputMaybe<FormInputType>>>;
};

/** References FormsInput record uniquely */
export type FormsInputWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Dropdown lista med alternativ */
export type FormsSelect = {
  __typename?: 'FormsSelect';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Rubrik mot användaren */
  label: Scalars['String'];
  /** Namnge fältet på engelska och med - istället för mellanslag, används som referens till backend  */
  name: Scalars['String'];
  /** De olika alternativen i listan */
  options: Array<FormsSelectOption>;
  /** anger om fältet är obligatoriskt eller ej  */
  required: Scalars['Boolean'];
  /** System stage field */
  stage: Stage;
};


/** Dropdown lista med alternativ */
export type FormsSelectOptionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<FormsSelectOptionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormsSelectOptionWhereInput>;
};

export type FormsSelectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormsSelectWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormsSelectConnection = {
  __typename?: 'FormsSelectConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormsSelectEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormsSelectCreateInput = {
  label: Scalars['String'];
  name: Scalars['String'];
  options?: InputMaybe<FormsSelectOptionCreateManyInlineInput>;
  required: Scalars['Boolean'];
};

export type FormsSelectCreateManyInlineInput = {
  /** Create and connect multiple existing FormsSelect documents */
  create?: InputMaybe<Array<FormsSelectCreateInput>>;
};

export type FormsSelectCreateOneInlineInput = {
  /** Create and connect one FormsSelect document */
  create?: InputMaybe<FormsSelectCreateInput>;
};

export type FormsSelectCreateWithPositionInput = {
  /** Document to create */
  data: FormsSelectCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormsSelectEdge = {
  __typename?: 'FormsSelectEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormsSelect;
};

/** Identifies documents */
export type FormsSelectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  options_every?: InputMaybe<FormsSelectOptionWhereInput>;
  options_none?: InputMaybe<FormsSelectOptionWhereInput>;
  options_some?: InputMaybe<FormsSelectOptionWhereInput>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

/** Alternativen till dropdown */
export type FormsSelectOption = {
  __typename?: 'FormsSelectOption';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Det som visas till användaren tex "Kvinna", "Man" */
  option: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Det som sparas i backend, på engelska tex "female", "male" */
  value: Scalars['String'];
};

export type FormsSelectOptionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormsSelectOptionWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormsSelectOptionConnection = {
  __typename?: 'FormsSelectOptionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormsSelectOptionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormsSelectOptionCreateInput = {
  option: Scalars['String'];
  value: Scalars['String'];
};

export type FormsSelectOptionCreateManyInlineInput = {
  /** Create and connect multiple existing FormsSelectOption documents */
  create?: InputMaybe<Array<FormsSelectOptionCreateInput>>;
};

export type FormsSelectOptionCreateOneInlineInput = {
  /** Create and connect one FormsSelectOption document */
  create?: InputMaybe<FormsSelectOptionCreateInput>;
};

export type FormsSelectOptionCreateWithPositionInput = {
  /** Document to create */
  data: FormsSelectOptionCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormsSelectOptionEdge = {
  __typename?: 'FormsSelectOptionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormsSelectOption;
};

/** Identifies documents */
export type FormsSelectOptionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  option?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  option_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  option_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  option_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  option_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  option_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  option_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  option_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  option_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  option_starts_with?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

export enum FormsSelectOptionOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OptionAsc = 'option_ASC',
  OptionDesc = 'option_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type FormsSelectOptionParent = FormsSelect;

export type FormsSelectOptionParentConnectInput = {
  FormsSelect?: InputMaybe<FormsSelectConnectInput>;
};

export type FormsSelectOptionParentCreateInput = {
  FormsSelect?: InputMaybe<FormsSelectCreateInput>;
};

export type FormsSelectOptionParentCreateManyInlineInput = {
  /** Create and connect multiple existing FormsSelectOptionParent documents */
  create?: InputMaybe<Array<FormsSelectOptionParentCreateInput>>;
};

export type FormsSelectOptionParentCreateOneInlineInput = {
  /** Create and connect one FormsSelectOptionParent document */
  create?: InputMaybe<FormsSelectOptionParentCreateInput>;
};

export type FormsSelectOptionParentCreateWithPositionInput = {
  FormsSelect?: InputMaybe<FormsSelectCreateWithPositionInput>;
};

export type FormsSelectOptionParentUpdateInput = {
  FormsSelect?: InputMaybe<FormsSelectUpdateInput>;
};

export type FormsSelectOptionParentUpdateManyInlineInput = {
  /** Create and connect multiple FormsSelectOptionParent component instances */
  create?: InputMaybe<Array<FormsSelectOptionParentCreateWithPositionInput>>;
  /** Delete multiple FormsSelectOptionParent documents */
  delete?: InputMaybe<Array<FormsSelectOptionParentWhereUniqueInput>>;
  /** Update multiple FormsSelectOptionParent component instances */
  update?: InputMaybe<Array<FormsSelectOptionParentUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsSelectOptionParent component instances */
  upsert?: InputMaybe<Array<FormsSelectOptionParentUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsSelectOptionParentUpdateManyWithNestedWhereInput = {
  FormsSelect?: InputMaybe<FormsSelectUpdateManyWithNestedWhereInput>;
};

export type FormsSelectOptionParentUpdateOneInlineInput = {
  /** Create and connect one FormsSelectOptionParent document */
  create?: InputMaybe<FormsSelectOptionParentCreateInput>;
  /** Delete currently connected FormsSelectOptionParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsSelectOptionParent document */
  update?: InputMaybe<FormsSelectOptionParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsSelectOptionParent document */
  upsert?: InputMaybe<FormsSelectOptionParentUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectOptionParentUpdateWithNestedWhereUniqueAndPositionInput = {
  FormsSelect?: InputMaybe<FormsSelectUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type FormsSelectOptionParentUpdateWithNestedWhereUniqueInput = {
  FormsSelect?: InputMaybe<FormsSelectUpdateWithNestedWhereUniqueInput>;
};

export type FormsSelectOptionParentUpsertWithNestedWhereUniqueAndPositionInput = {
  FormsSelect?: InputMaybe<FormsSelectUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type FormsSelectOptionParentUpsertWithNestedWhereUniqueInput = {
  FormsSelect?: InputMaybe<FormsSelectUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectOptionParentWhereInput = {
  FormsSelect?: InputMaybe<FormsSelectWhereInput>;
};

export type FormsSelectOptionParentWhereUniqueInput = {
  FormsSelect?: InputMaybe<FormsSelectWhereUniqueInput>;
};

export type FormsSelectOptionUpdateInput = {
  option?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FormsSelectOptionUpdateManyInlineInput = {
  /** Create and connect multiple FormsSelectOption component instances */
  create?: InputMaybe<Array<FormsSelectOptionCreateWithPositionInput>>;
  /** Delete multiple FormsSelectOption documents */
  delete?: InputMaybe<Array<FormsSelectOptionWhereUniqueInput>>;
  /** Update multiple FormsSelectOption component instances */
  update?: InputMaybe<Array<FormsSelectOptionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsSelectOption component instances */
  upsert?: InputMaybe<Array<FormsSelectOptionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsSelectOptionUpdateManyInput = {
  option?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type FormsSelectOptionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormsSelectOptionUpdateManyInput;
  /** Document search */
  where: FormsSelectOptionWhereInput;
};

export type FormsSelectOptionUpdateOneInlineInput = {
  /** Create and connect one FormsSelectOption document */
  create?: InputMaybe<FormsSelectOptionCreateInput>;
  /** Delete currently connected FormsSelectOption document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsSelectOption document */
  update?: InputMaybe<FormsSelectOptionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsSelectOption document */
  upsert?: InputMaybe<FormsSelectOptionUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectOptionUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormsSelectOptionUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsSelectOptionWhereUniqueInput;
};

export type FormsSelectOptionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormsSelectOptionUpdateInput;
  /** Unique document search */
  where: FormsSelectOptionWhereUniqueInput;
};

export type FormsSelectOptionUpsertInput = {
  /** Create document if it didn't exist */
  create: FormsSelectOptionCreateInput;
  /** Update document if it exists */
  update: FormsSelectOptionUpdateInput;
};

export type FormsSelectOptionUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormsSelectOptionUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsSelectOptionWhereUniqueInput;
};

export type FormsSelectOptionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormsSelectOptionUpsertInput;
  /** Unique document search */
  where: FormsSelectOptionWhereUniqueInput;
};

/** Identifies documents */
export type FormsSelectOptionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsSelectOptionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  option?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  option_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  option_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  option_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  option_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  option_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  option_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  option_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  option_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  option_starts_with?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

/** References FormsSelectOption record uniquely */
export type FormsSelectOptionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum FormsSelectOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

export type FormsSelectParent = FormPage;

export type FormsSelectParentConnectInput = {
  FormPage?: InputMaybe<FormPageConnectInput>;
};

export type FormsSelectParentCreateInput = {
  FormPage?: InputMaybe<FormPageCreateInput>;
};

export type FormsSelectParentCreateManyInlineInput = {
  /** Connect multiple existing FormsSelectParent documents */
  connect?: InputMaybe<Array<FormsSelectParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormsSelectParent documents */
  create?: InputMaybe<Array<FormsSelectParentCreateInput>>;
};

export type FormsSelectParentCreateOneInlineInput = {
  /** Connect one existing FormsSelectParent document */
  connect?: InputMaybe<FormsSelectParentWhereUniqueInput>;
  /** Create and connect one FormsSelectParent document */
  create?: InputMaybe<FormsSelectParentCreateInput>;
};

export type FormsSelectParentUpdateInput = {
  FormPage?: InputMaybe<FormPageUpdateInput>;
};

export type FormsSelectParentUpdateManyInlineInput = {
  /** Connect multiple existing FormsSelectParent documents */
  connect?: InputMaybe<Array<FormsSelectParentConnectInput>>;
  /** Create and connect multiple FormsSelectParent documents */
  create?: InputMaybe<Array<FormsSelectParentCreateInput>>;
  /** Delete multiple FormsSelectParent documents */
  delete?: InputMaybe<Array<FormsSelectParentWhereUniqueInput>>;
  /** Disconnect multiple FormsSelectParent documents */
  disconnect?: InputMaybe<Array<FormsSelectParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormsSelectParent documents */
  set?: InputMaybe<Array<FormsSelectParentWhereUniqueInput>>;
  /** Update multiple FormsSelectParent documents */
  update?: InputMaybe<Array<FormsSelectParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormsSelectParent documents */
  upsert?: InputMaybe<Array<FormsSelectParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormsSelectParentUpdateManyWithNestedWhereInput = {
  FormPage?: InputMaybe<FormPageUpdateManyWithNestedWhereInput>;
};

export type FormsSelectParentUpdateOneInlineInput = {
  /** Connect existing FormsSelectParent document */
  connect?: InputMaybe<FormsSelectParentWhereUniqueInput>;
  /** Create and connect one FormsSelectParent document */
  create?: InputMaybe<FormsSelectParentCreateInput>;
  /** Delete currently connected FormsSelectParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormsSelectParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsSelectParent document */
  update?: InputMaybe<FormsSelectParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsSelectParent document */
  upsert?: InputMaybe<FormsSelectParentUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectParentUpdateWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
};

export type FormsSelectParentUpsertWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectParentWhereInput = {
  FormPage?: InputMaybe<FormPageWhereInput>;
};

export type FormsSelectParentWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageWhereUniqueInput>;
};

export type FormsSelectUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<FormsSelectOptionUpdateManyInlineInput>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsSelectUpdateManyInlineInput = {
  /** Create and connect multiple FormsSelect component instances */
  create?: InputMaybe<Array<FormsSelectCreateWithPositionInput>>;
  /** Delete multiple FormsSelect documents */
  delete?: InputMaybe<Array<FormsSelectWhereUniqueInput>>;
  /** Update multiple FormsSelect component instances */
  update?: InputMaybe<Array<FormsSelectUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsSelect component instances */
  upsert?: InputMaybe<Array<FormsSelectUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsSelectUpdateManyInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsSelectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormsSelectUpdateManyInput;
  /** Document search */
  where: FormsSelectWhereInput;
};

export type FormsSelectUpdateOneInlineInput = {
  /** Create and connect one FormsSelect document */
  create?: InputMaybe<FormsSelectCreateInput>;
  /** Delete currently connected FormsSelect document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsSelect document */
  update?: InputMaybe<FormsSelectUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsSelect document */
  upsert?: InputMaybe<FormsSelectUpsertWithNestedWhereUniqueInput>;
};

export type FormsSelectUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormsSelectUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsSelectWhereUniqueInput;
};

export type FormsSelectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormsSelectUpdateInput;
  /** Unique document search */
  where: FormsSelectWhereUniqueInput;
};

export type FormsSelectUpsertInput = {
  /** Create document if it didn't exist */
  create: FormsSelectCreateInput;
  /** Update document if it exists */
  update: FormsSelectUpdateInput;
};

export type FormsSelectUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormsSelectUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsSelectWhereUniqueInput;
};

export type FormsSelectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormsSelectUpsertInput;
  /** Unique document search */
  where: FormsSelectWhereUniqueInput;
};

/** Identifies documents */
export type FormsSelectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsSelectWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  options_every?: InputMaybe<FormsSelectOptionWhereInput>;
  options_none?: InputMaybe<FormsSelectOptionWhereInput>;
  options_some?: InputMaybe<FormsSelectOptionWhereInput>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

/** References FormsSelect record uniquely */
export type FormsSelectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** skapar ett större textfält för längre svar  */
export type FormsTextarea = {
  __typename?: 'FormsTextarea';
  /** The unique identifier */
  id: Scalars['ID'];
  /** Fältets rubrik så som "Ditt namn: "  */
  label: Scalars['String'];
  /** Namnge fältet på engelska och med - istället för mellanslag, används som referens till backend  */
  name: Scalars['String'];
  /** Anger om fältet är obligatoriskt eller ej  */
  required: Scalars['Boolean'];
  /** System stage field */
  stage: Stage;
};

export type FormsTextareaConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FormsTextareaWhereUniqueInput;
};

/** A connection to a list of items. */
export type FormsTextareaConnection = {
  __typename?: 'FormsTextareaConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FormsTextareaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FormsTextareaCreateInput = {
  label: Scalars['String'];
  name: Scalars['String'];
  required: Scalars['Boolean'];
};

export type FormsTextareaCreateManyInlineInput = {
  /** Create and connect multiple existing FormsTextarea documents */
  create?: InputMaybe<Array<FormsTextareaCreateInput>>;
};

export type FormsTextareaCreateOneInlineInput = {
  /** Create and connect one FormsTextarea document */
  create?: InputMaybe<FormsTextareaCreateInput>;
};

export type FormsTextareaCreateWithPositionInput = {
  /** Document to create */
  data: FormsTextareaCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type FormsTextareaEdge = {
  __typename?: 'FormsTextareaEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: FormsTextarea;
};

/** Identifies documents */
export type FormsTextareaManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

export enum FormsTextareaOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RequiredAsc = 'required_ASC',
  RequiredDesc = 'required_DESC'
}

export type FormsTextareaParent = FormPage;

export type FormsTextareaParentConnectInput = {
  FormPage?: InputMaybe<FormPageConnectInput>;
};

export type FormsTextareaParentCreateInput = {
  FormPage?: InputMaybe<FormPageCreateInput>;
};

export type FormsTextareaParentCreateManyInlineInput = {
  /** Connect multiple existing FormsTextareaParent documents */
  connect?: InputMaybe<Array<FormsTextareaParentWhereUniqueInput>>;
  /** Create and connect multiple existing FormsTextareaParent documents */
  create?: InputMaybe<Array<FormsTextareaParentCreateInput>>;
};

export type FormsTextareaParentCreateOneInlineInput = {
  /** Connect one existing FormsTextareaParent document */
  connect?: InputMaybe<FormsTextareaParentWhereUniqueInput>;
  /** Create and connect one FormsTextareaParent document */
  create?: InputMaybe<FormsTextareaParentCreateInput>;
};

export type FormsTextareaParentUpdateInput = {
  FormPage?: InputMaybe<FormPageUpdateInput>;
};

export type FormsTextareaParentUpdateManyInlineInput = {
  /** Connect multiple existing FormsTextareaParent documents */
  connect?: InputMaybe<Array<FormsTextareaParentConnectInput>>;
  /** Create and connect multiple FormsTextareaParent documents */
  create?: InputMaybe<Array<FormsTextareaParentCreateInput>>;
  /** Delete multiple FormsTextareaParent documents */
  delete?: InputMaybe<Array<FormsTextareaParentWhereUniqueInput>>;
  /** Disconnect multiple FormsTextareaParent documents */
  disconnect?: InputMaybe<Array<FormsTextareaParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing FormsTextareaParent documents */
  set?: InputMaybe<Array<FormsTextareaParentWhereUniqueInput>>;
  /** Update multiple FormsTextareaParent documents */
  update?: InputMaybe<Array<FormsTextareaParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple FormsTextareaParent documents */
  upsert?: InputMaybe<Array<FormsTextareaParentUpsertWithNestedWhereUniqueInput>>;
};

export type FormsTextareaParentUpdateManyWithNestedWhereInput = {
  FormPage?: InputMaybe<FormPageUpdateManyWithNestedWhereInput>;
};

export type FormsTextareaParentUpdateOneInlineInput = {
  /** Connect existing FormsTextareaParent document */
  connect?: InputMaybe<FormsTextareaParentWhereUniqueInput>;
  /** Create and connect one FormsTextareaParent document */
  create?: InputMaybe<FormsTextareaParentCreateInput>;
  /** Delete currently connected FormsTextareaParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected FormsTextareaParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsTextareaParent document */
  update?: InputMaybe<FormsTextareaParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsTextareaParent document */
  upsert?: InputMaybe<FormsTextareaParentUpsertWithNestedWhereUniqueInput>;
};

export type FormsTextareaParentUpdateWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
};

export type FormsTextareaParentUpsertWithNestedWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
};

export type FormsTextareaParentWhereInput = {
  FormPage?: InputMaybe<FormPageWhereInput>;
};

export type FormsTextareaParentWhereUniqueInput = {
  FormPage?: InputMaybe<FormPageWhereUniqueInput>;
};

export type FormsTextareaUpdateInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsTextareaUpdateManyInlineInput = {
  /** Create and connect multiple FormsTextarea component instances */
  create?: InputMaybe<Array<FormsTextareaCreateWithPositionInput>>;
  /** Delete multiple FormsTextarea documents */
  delete?: InputMaybe<Array<FormsTextareaWhereUniqueInput>>;
  /** Update multiple FormsTextarea component instances */
  update?: InputMaybe<Array<FormsTextareaUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple FormsTextarea component instances */
  upsert?: InputMaybe<Array<FormsTextareaUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type FormsTextareaUpdateManyInput = {
  label?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
};

export type FormsTextareaUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FormsTextareaUpdateManyInput;
  /** Document search */
  where: FormsTextareaWhereInput;
};

export type FormsTextareaUpdateOneInlineInput = {
  /** Create and connect one FormsTextarea document */
  create?: InputMaybe<FormsTextareaCreateInput>;
  /** Delete currently connected FormsTextarea document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single FormsTextarea document */
  update?: InputMaybe<FormsTextareaUpdateWithNestedWhereUniqueInput>;
  /** Upsert single FormsTextarea document */
  upsert?: InputMaybe<FormsTextareaUpsertWithNestedWhereUniqueInput>;
};

export type FormsTextareaUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<FormsTextareaUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsTextareaWhereUniqueInput;
};

export type FormsTextareaUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FormsTextareaUpdateInput;
  /** Unique document search */
  where: FormsTextareaWhereUniqueInput;
};

export type FormsTextareaUpsertInput = {
  /** Create document if it didn't exist */
  create: FormsTextareaCreateInput;
  /** Update document if it exists */
  update: FormsTextareaUpdateInput;
};

export type FormsTextareaUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<FormsTextareaUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: FormsTextareaWhereUniqueInput;
};

export type FormsTextareaUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FormsTextareaUpsertInput;
  /** Unique document search */
  where: FormsTextareaWhereUniqueInput;
};

/** Identifies documents */
export type FormsTextareaWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FormsTextareaWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  label_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  label_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  label_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  label_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  label_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  label_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  label_starts_with?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  required?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  required_not?: InputMaybe<Scalars['Boolean']>;
};

/** References FormsTextarea record uniquely */
export type FormsTextareaWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Heading = {
  __typename?: 'Heading';
  /** Rubrik */
  heading: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
};

export type HeadingConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeadingWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeadingConnection = {
  __typename?: 'HeadingConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeadingEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeadingCreateInput = {
  heading: Scalars['String'];
};

export type HeadingCreateManyInlineInput = {
  /** Create and connect multiple existing Heading documents */
  create?: InputMaybe<Array<HeadingCreateInput>>;
};

export type HeadingCreateOneInlineInput = {
  /** Create and connect one Heading document */
  create?: InputMaybe<HeadingCreateInput>;
};

export type HeadingCreateWithPositionInput = {
  /** Document to create */
  data: HeadingCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeadingEdge = {
  __typename?: 'HeadingEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Heading;
};

/** Identifies documents */
export type HeadingManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeadingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeadingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeadingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum HeadingOrderByInput {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeadingParent = AboutPage | EventPage | PastEvent | StartPage;

export type HeadingParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
  PastEvent?: InputMaybe<PastEventConnectInput>;
  StartPage?: InputMaybe<StartPageConnectInput>;
};

export type HeadingParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
  PastEvent?: InputMaybe<PastEventCreateInput>;
  StartPage?: InputMaybe<StartPageCreateInput>;
};

export type HeadingParentCreateManyInlineInput = {
  /** Connect multiple existing HeadingParent documents */
  connect?: InputMaybe<Array<HeadingParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeadingParent documents */
  create?: InputMaybe<Array<HeadingParentCreateInput>>;
};

export type HeadingParentCreateOneInlineInput = {
  /** Connect one existing HeadingParent document */
  connect?: InputMaybe<HeadingParentWhereUniqueInput>;
  /** Create and connect one HeadingParent document */
  create?: InputMaybe<HeadingParentCreateInput>;
};

export type HeadingParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
  PastEvent?: InputMaybe<PastEventUpdateInput>;
  StartPage?: InputMaybe<StartPageUpdateInput>;
};

export type HeadingParentUpdateManyInlineInput = {
  /** Connect multiple existing HeadingParent documents */
  connect?: InputMaybe<Array<HeadingParentConnectInput>>;
  /** Create and connect multiple HeadingParent documents */
  create?: InputMaybe<Array<HeadingParentCreateInput>>;
  /** Delete multiple HeadingParent documents */
  delete?: InputMaybe<Array<HeadingParentWhereUniqueInput>>;
  /** Disconnect multiple HeadingParent documents */
  disconnect?: InputMaybe<Array<HeadingParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeadingParent documents */
  set?: InputMaybe<Array<HeadingParentWhereUniqueInput>>;
  /** Update multiple HeadingParent documents */
  update?: InputMaybe<Array<HeadingParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeadingParent documents */
  upsert?: InputMaybe<Array<HeadingParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeadingParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
  PastEvent?: InputMaybe<PastEventUpdateManyWithNestedWhereInput>;
  StartPage?: InputMaybe<StartPageUpdateManyWithNestedWhereInput>;
};

export type HeadingParentUpdateOneInlineInput = {
  /** Connect existing HeadingParent document */
  connect?: InputMaybe<HeadingParentWhereUniqueInput>;
  /** Create and connect one HeadingParent document */
  create?: InputMaybe<HeadingParentCreateInput>;
  /** Delete currently connected HeadingParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected HeadingParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeadingParent document */
  update?: InputMaybe<HeadingParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeadingParent document */
  upsert?: InputMaybe<HeadingParentUpsertWithNestedWhereUniqueInput>;
};

export type HeadingParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpdateWithNestedWhereUniqueInput>;
};

export type HeadingParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpsertWithNestedWhereUniqueInput>;
};

export type HeadingParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
  PastEvent?: InputMaybe<PastEventWhereInput>;
  StartPage?: InputMaybe<StartPageWhereInput>;
};

export type HeadingParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageWhereUniqueInput>;
};

export type HeadingUpdateInput = {
  heading?: InputMaybe<Scalars['String']>;
};

export type HeadingUpdateManyInlineInput = {
  /** Create and connect multiple Heading component instances */
  create?: InputMaybe<Array<HeadingCreateWithPositionInput>>;
  /** Delete multiple Heading documents */
  delete?: InputMaybe<Array<HeadingWhereUniqueInput>>;
  /** Update multiple Heading component instances */
  update?: InputMaybe<Array<HeadingUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Heading component instances */
  upsert?: InputMaybe<Array<HeadingUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeadingUpdateManyInput = {
  heading?: InputMaybe<Scalars['String']>;
};

export type HeadingUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeadingUpdateManyInput;
  /** Document search */
  where: HeadingWhereInput;
};

export type HeadingUpdateOneInlineInput = {
  /** Create and connect one Heading document */
  create?: InputMaybe<HeadingCreateInput>;
  /** Delete currently connected Heading document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Heading document */
  update?: InputMaybe<HeadingUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Heading document */
  upsert?: InputMaybe<HeadingUpsertWithNestedWhereUniqueInput>;
};

export type HeadingUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeadingUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeadingWhereUniqueInput;
};

export type HeadingUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeadingUpdateInput;
  /** Unique document search */
  where: HeadingWhereUniqueInput;
};

export type HeadingUpsertInput = {
  /** Create document if it didn't exist */
  create: HeadingCreateInput;
  /** Update document if it exists */
  update: HeadingUpdateInput;
};

export type HeadingUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeadingUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeadingWhereUniqueInput;
};

export type HeadingUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeadingUpsertInput;
  /** Unique document search */
  where: HeadingWhereUniqueInput;
};

/** Identifies documents */
export type HeadingWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeadingWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeadingWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeadingWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  heading?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  heading_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  heading_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  heading_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  heading_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  heading_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  heading_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  heading_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References Heading record uniquely */
export type HeadingWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Hero = {
  __typename?: 'Hero';
  /** Alternativ text till bild om den ej laddas */
  altText: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Bildfil */
  image: Asset;
  /** System stage field */
  stage: Stage;
};


export type HeroImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type HeroConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: HeroWhereUniqueInput;
};

/** A connection to a list of items. */
export type HeroConnection = {
  __typename?: 'HeroConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<HeroEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type HeroCreateInput = {
  altText: Scalars['String'];
  image: AssetCreateOneInlineInput;
};

export type HeroCreateManyInlineInput = {
  /** Create and connect multiple existing Hero documents */
  create?: InputMaybe<Array<HeroCreateInput>>;
};

export type HeroCreateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
};

export type HeroCreateWithPositionInput = {
  /** Document to create */
  data: HeroCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type HeroEdge = {
  __typename?: 'HeroEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Hero;
};

/** Identifies documents */
export type HeroManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  altText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

export enum HeroOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type HeroParent = AboutPage | EventLandingpage | EventPage | FormPage | PastEvent | StartPage;

export type HeroParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventLandingpage?: InputMaybe<EventLandingpageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
  FormPage?: InputMaybe<FormPageConnectInput>;
  PastEvent?: InputMaybe<PastEventConnectInput>;
  StartPage?: InputMaybe<StartPageConnectInput>;
};

export type HeroParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventLandingpage?: InputMaybe<EventLandingpageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
  FormPage?: InputMaybe<FormPageCreateInput>;
  PastEvent?: InputMaybe<PastEventCreateInput>;
  StartPage?: InputMaybe<StartPageCreateInput>;
};

export type HeroParentCreateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Create and connect multiple existing HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
};

export type HeroParentCreateOneInlineInput = {
  /** Connect one existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
};

export type HeroParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventLandingpage?: InputMaybe<EventLandingpageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
  FormPage?: InputMaybe<FormPageUpdateInput>;
  PastEvent?: InputMaybe<PastEventUpdateInput>;
  StartPage?: InputMaybe<StartPageUpdateInput>;
};

export type HeroParentUpdateManyInlineInput = {
  /** Connect multiple existing HeroParent documents */
  connect?: InputMaybe<Array<HeroParentConnectInput>>;
  /** Create and connect multiple HeroParent documents */
  create?: InputMaybe<Array<HeroParentCreateInput>>;
  /** Delete multiple HeroParent documents */
  delete?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Disconnect multiple HeroParent documents */
  disconnect?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing HeroParent documents */
  set?: InputMaybe<Array<HeroParentWhereUniqueInput>>;
  /** Update multiple HeroParent documents */
  update?: InputMaybe<Array<HeroParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple HeroParent documents */
  upsert?: InputMaybe<Array<HeroParentUpsertWithNestedWhereUniqueInput>>;
};

export type HeroParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventLandingpage?: InputMaybe<EventLandingpageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
  FormPage?: InputMaybe<FormPageUpdateManyWithNestedWhereInput>;
  PastEvent?: InputMaybe<PastEventUpdateManyWithNestedWhereInput>;
  StartPage?: InputMaybe<StartPageUpdateManyWithNestedWhereInput>;
};

export type HeroParentUpdateOneInlineInput = {
  /** Connect existing HeroParent document */
  connect?: InputMaybe<HeroParentWhereUniqueInput>;
  /** Create and connect one HeroParent document */
  create?: InputMaybe<HeroParentCreateInput>;
  /** Delete currently connected HeroParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected HeroParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single HeroParent document */
  update?: InputMaybe<HeroParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single HeroParent document */
  upsert?: InputMaybe<HeroParentUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventLandingpage?: InputMaybe<EventLandingpageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
  FormPage?: InputMaybe<FormPageUpdateWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpdateWithNestedWhereUniqueInput>;
};

export type HeroParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventLandingpage?: InputMaybe<EventLandingpageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
  FormPage?: InputMaybe<FormPageUpsertWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpsertWithNestedWhereUniqueInput>;
};

export type HeroParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventLandingpage?: InputMaybe<EventLandingpageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
  FormPage?: InputMaybe<FormPageWhereInput>;
  PastEvent?: InputMaybe<PastEventWhereInput>;
  StartPage?: InputMaybe<StartPageWhereInput>;
};

export type HeroParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventLandingpage?: InputMaybe<EventLandingpageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
  FormPage?: InputMaybe<FormPageWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageWhereUniqueInput>;
};

export type HeroUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type HeroUpdateManyInlineInput = {
  /** Create and connect multiple Hero component instances */
  create?: InputMaybe<Array<HeroCreateWithPositionInput>>;
  /** Delete multiple Hero documents */
  delete?: InputMaybe<Array<HeroWhereUniqueInput>>;
  /** Update multiple Hero component instances */
  update?: InputMaybe<Array<HeroUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Hero component instances */
  upsert?: InputMaybe<Array<HeroUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type HeroUpdateManyInput = {
  altText?: InputMaybe<Scalars['String']>;
};

export type HeroUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: HeroUpdateManyInput;
  /** Document search */
  where: HeroWhereInput;
};

export type HeroUpdateOneInlineInput = {
  /** Create and connect one Hero document */
  create?: InputMaybe<HeroCreateInput>;
  /** Delete currently connected Hero document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Hero document */
  update?: InputMaybe<HeroUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Hero document */
  upsert?: InputMaybe<HeroUpsertWithNestedWhereUniqueInput>;
};

export type HeroUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<HeroUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: HeroUpdateInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertInput = {
  /** Create document if it didn't exist */
  create: HeroCreateInput;
  /** Update document if it exists */
  update: HeroUpdateInput;
};

export type HeroUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<HeroUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: HeroWhereUniqueInput;
};

export type HeroUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: HeroUpsertInput;
  /** Unique document search */
  where: HeroWhereUniqueInput;
};

/** Identifies documents */
export type HeroWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<HeroWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<HeroWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  altText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
};

/** References Hero record uniquely */
export type HeroWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Image = {
  __typename?: 'Image';
  /** Alternativ text för bild om den ej laddas */
  altText: Scalars['String'];
  /** The unique identifier */
  id: Scalars['ID'];
  /** Bildfil */
  image: Asset;
  /** Bildtext som placeras under bilden */
  imageText?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
};


export type ImageImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ImageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ImageWhereUniqueInput;
};

/** A connection to a list of items. */
export type ImageConnection = {
  __typename?: 'ImageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ImageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ImageCreateInput = {
  altText: Scalars['String'];
  image: AssetCreateOneInlineInput;
  imageText?: InputMaybe<Scalars['String']>;
};

export type ImageCreateManyInlineInput = {
  /** Create and connect multiple existing Image documents */
  create?: InputMaybe<Array<ImageCreateInput>>;
};

export type ImageCreateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
};

export type ImageCreateWithPositionInput = {
  /** Document to create */
  data: ImageCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type ImageEdge = {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Image;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

/** Identifies documents */
export type ImageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  altText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  imageText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  imageText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageText_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ImageOrderByInput {
  AltTextAsc = 'altText_ASC',
  AltTextDesc = 'altText_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ImageTextAsc = 'imageText_ASC',
  ImageTextDesc = 'imageText_DESC'
}

export type ImageParent = AboutPage | EventPage | PastEvent | StartPage;

export type ImageParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
  PastEvent?: InputMaybe<PastEventConnectInput>;
  StartPage?: InputMaybe<StartPageConnectInput>;
};

export type ImageParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
  PastEvent?: InputMaybe<PastEventCreateInput>;
  StartPage?: InputMaybe<StartPageCreateInput>;
};

export type ImageParentCreateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Create and connect multiple existing ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
};

export type ImageParentCreateOneInlineInput = {
  /** Connect one existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
};

export type ImageParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
  PastEvent?: InputMaybe<PastEventUpdateInput>;
  StartPage?: InputMaybe<StartPageUpdateInput>;
};

export type ImageParentUpdateManyInlineInput = {
  /** Connect multiple existing ImageParent documents */
  connect?: InputMaybe<Array<ImageParentConnectInput>>;
  /** Create and connect multiple ImageParent documents */
  create?: InputMaybe<Array<ImageParentCreateInput>>;
  /** Delete multiple ImageParent documents */
  delete?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Disconnect multiple ImageParent documents */
  disconnect?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ImageParent documents */
  set?: InputMaybe<Array<ImageParentWhereUniqueInput>>;
  /** Update multiple ImageParent documents */
  update?: InputMaybe<Array<ImageParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ImageParent documents */
  upsert?: InputMaybe<Array<ImageParentUpsertWithNestedWhereUniqueInput>>;
};

export type ImageParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
  PastEvent?: InputMaybe<PastEventUpdateManyWithNestedWhereInput>;
  StartPage?: InputMaybe<StartPageUpdateManyWithNestedWhereInput>;
};

export type ImageParentUpdateOneInlineInput = {
  /** Connect existing ImageParent document */
  connect?: InputMaybe<ImageParentWhereUniqueInput>;
  /** Create and connect one ImageParent document */
  create?: InputMaybe<ImageParentCreateInput>;
  /** Delete currently connected ImageParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ImageParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ImageParent document */
  update?: InputMaybe<ImageParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ImageParent document */
  upsert?: InputMaybe<ImageParentUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpdateWithNestedWhereUniqueInput>;
};

export type ImageParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpsertWithNestedWhereUniqueInput>;
};

export type ImageParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
  PastEvent?: InputMaybe<PastEventWhereInput>;
  StartPage?: InputMaybe<StartPageWhereInput>;
};

export type ImageParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageWhereUniqueInput>;
};

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type ImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<AssetUpdateOneInlineInput>;
  imageText?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateManyInlineInput = {
  /** Create and connect multiple Image component instances */
  create?: InputMaybe<Array<ImageCreateWithPositionInput>>;
  /** Delete multiple Image documents */
  delete?: InputMaybe<Array<ImageWhereUniqueInput>>;
  /** Update multiple Image component instances */
  update?: InputMaybe<Array<ImageUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Image component instances */
  upsert?: InputMaybe<Array<ImageUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type ImageUpdateManyInput = {
  altText?: InputMaybe<Scalars['String']>;
  imageText?: InputMaybe<Scalars['String']>;
};

export type ImageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ImageUpdateManyInput;
  /** Document search */
  where: ImageWhereInput;
};

export type ImageUpdateOneInlineInput = {
  /** Create and connect one Image document */
  create?: InputMaybe<ImageCreateInput>;
  /** Delete currently connected Image document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Image document */
  update?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Image document */
  upsert?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
};

export type ImageUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<ImageUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ImageUpdateInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertInput = {
  /** Create document if it didn't exist */
  create: ImageCreateInput;
  /** Update document if it exists */
  update: ImageUpdateInput;
};

export type ImageUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<ImageUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: ImageWhereUniqueInput;
};

export type ImageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ImageUpsertInput;
  /** Unique document search */
  where: ImageWhereUniqueInput;
};

/** Identifies documents */
export type ImageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ImageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ImageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  altText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  altText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  altText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  altText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  altText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  altText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  altText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  altText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  altText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  altText_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<AssetWhereInput>;
  imageText?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  imageText_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  imageText_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  imageText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  imageText_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  imageText_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  imageText_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  imageText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  imageText_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  imageText_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Image record uniquely */
export type ImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one aboutPage */
  createAboutPage?: Maybe<AboutPage>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one eventComment */
  createEventComment?: Maybe<EventComment>;
  /** Create one eventLandingpage */
  createEventLandingpage?: Maybe<EventLandingpage>;
  /** Create one eventPage */
  createEventPage?: Maybe<EventPage>;
  /** Create one eventSignup */
  createEventSignup?: Maybe<EventSignup>;
  /** Create one formAnswer */
  createFormAnswer?: Maybe<FormAnswer>;
  /** Create one formPage */
  createFormPage?: Maybe<FormPage>;
  /** Create one newsletterSignup */
  createNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Create one pastEvent */
  createPastEvent?: Maybe<PastEvent>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one startPage */
  createStartPage?: Maybe<StartPage>;
  /** Create one waitingListEvent */
  createWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Delete one aboutPage from _all_ existing stages. Returns deleted document. */
  deleteAboutPage?: Maybe<AboutPage>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one eventComment from _all_ existing stages. Returns deleted document. */
  deleteEventComment?: Maybe<EventComment>;
  /** Delete one eventLandingpage from _all_ existing stages. Returns deleted document. */
  deleteEventLandingpage?: Maybe<EventLandingpage>;
  /** Delete one eventPage from _all_ existing stages. Returns deleted document. */
  deleteEventPage?: Maybe<EventPage>;
  /** Delete one eventSignup from _all_ existing stages. Returns deleted document. */
  deleteEventSignup?: Maybe<EventSignup>;
  /** Delete one formAnswer from _all_ existing stages. Returns deleted document. */
  deleteFormAnswer?: Maybe<FormAnswer>;
  /** Delete one formPage from _all_ existing stages. Returns deleted document. */
  deleteFormPage?: Maybe<FormPage>;
  /**
   * Delete many AboutPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyAboutPagesConnection)
   */
  deleteManyAboutPages: BatchPayload;
  /** Delete many AboutPage documents, return deleted documents */
  deleteManyAboutPagesConnection: AboutPageConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many EventComment documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventCommentsConnection)
   */
  deleteManyEventComments: BatchPayload;
  /** Delete many EventComment documents, return deleted documents */
  deleteManyEventCommentsConnection: EventCommentConnection;
  /**
   * Delete many EventLandingpage documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventLandingpagesConnection)
   */
  deleteManyEventLandingpages: BatchPayload;
  /** Delete many EventLandingpage documents, return deleted documents */
  deleteManyEventLandingpagesConnection: EventLandingpageConnection;
  /**
   * Delete many EventPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventPagesConnection)
   */
  deleteManyEventPages: BatchPayload;
  /** Delete many EventPage documents, return deleted documents */
  deleteManyEventPagesConnection: EventPageConnection;
  /**
   * Delete many EventSignup documents
   * @deprecated Please use the new paginated many mutation (deleteManyEventSignupsConnection)
   */
  deleteManyEventSignups: BatchPayload;
  /** Delete many EventSignup documents, return deleted documents */
  deleteManyEventSignupsConnection: EventSignupConnection;
  /**
   * Delete many FormAnswer documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormAnswersConnection)
   */
  deleteManyFormAnswers: BatchPayload;
  /** Delete many FormAnswer documents, return deleted documents */
  deleteManyFormAnswersConnection: FormAnswerConnection;
  /**
   * Delete many FormPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyFormPagesConnection)
   */
  deleteManyFormPages: BatchPayload;
  /** Delete many FormPage documents, return deleted documents */
  deleteManyFormPagesConnection: FormPageConnection;
  /**
   * Delete many NewsletterSignup documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewsletterSignupsConnection)
   */
  deleteManyNewsletterSignups: BatchPayload;
  /** Delete many NewsletterSignup documents, return deleted documents */
  deleteManyNewsletterSignupsConnection: NewsletterSignupConnection;
  /**
   * Delete many PastEvent documents
   * @deprecated Please use the new paginated many mutation (deleteManyPastEventsConnection)
   */
  deleteManyPastEvents: BatchPayload;
  /** Delete many PastEvent documents, return deleted documents */
  deleteManyPastEventsConnection: PastEventConnection;
  /**
   * Delete many StartPage documents
   * @deprecated Please use the new paginated many mutation (deleteManyStartPagesConnection)
   */
  deleteManyStartPages: BatchPayload;
  /** Delete many StartPage documents, return deleted documents */
  deleteManyStartPagesConnection: StartPageConnection;
  /**
   * Delete many WaitingListEvent documents
   * @deprecated Please use the new paginated many mutation (deleteManyWaitingListEventsConnection)
   */
  deleteManyWaitingListEvents: BatchPayload;
  /** Delete many WaitingListEvent documents, return deleted documents */
  deleteManyWaitingListEventsConnection: WaitingListEventConnection;
  /** Delete one newsletterSignup from _all_ existing stages. Returns deleted document. */
  deleteNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Delete one pastEvent from _all_ existing stages. Returns deleted document. */
  deletePastEvent?: Maybe<PastEvent>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one startPage from _all_ existing stages. Returns deleted document. */
  deleteStartPage?: Maybe<StartPage>;
  /** Delete one waitingListEvent from _all_ existing stages. Returns deleted document. */
  deleteWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Publish one aboutPage */
  publishAboutPage?: Maybe<AboutPage>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one eventComment */
  publishEventComment?: Maybe<EventComment>;
  /** Publish one eventLandingpage */
  publishEventLandingpage?: Maybe<EventLandingpage>;
  /** Publish one eventPage */
  publishEventPage?: Maybe<EventPage>;
  /** Publish one eventSignup */
  publishEventSignup?: Maybe<EventSignup>;
  /** Publish one formAnswer */
  publishFormAnswer?: Maybe<FormAnswer>;
  /** Publish one formPage */
  publishFormPage?: Maybe<FormPage>;
  /**
   * Publish many AboutPage documents
   * @deprecated Please use the new paginated many mutation (publishManyAboutPagesConnection)
   */
  publishManyAboutPages: BatchPayload;
  /** Publish many AboutPage documents */
  publishManyAboutPagesConnection: AboutPageConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many EventComment documents
   * @deprecated Please use the new paginated many mutation (publishManyEventCommentsConnection)
   */
  publishManyEventComments: BatchPayload;
  /** Publish many EventComment documents */
  publishManyEventCommentsConnection: EventCommentConnection;
  /**
   * Publish many EventLandingpage documents
   * @deprecated Please use the new paginated many mutation (publishManyEventLandingpagesConnection)
   */
  publishManyEventLandingpages: BatchPayload;
  /** Publish many EventLandingpage documents */
  publishManyEventLandingpagesConnection: EventLandingpageConnection;
  /**
   * Publish many EventPage documents
   * @deprecated Please use the new paginated many mutation (publishManyEventPagesConnection)
   */
  publishManyEventPages: BatchPayload;
  /** Publish many EventPage documents */
  publishManyEventPagesConnection: EventPageConnection;
  /**
   * Publish many EventSignup documents
   * @deprecated Please use the new paginated many mutation (publishManyEventSignupsConnection)
   */
  publishManyEventSignups: BatchPayload;
  /** Publish many EventSignup documents */
  publishManyEventSignupsConnection: EventSignupConnection;
  /**
   * Publish many FormAnswer documents
   * @deprecated Please use the new paginated many mutation (publishManyFormAnswersConnection)
   */
  publishManyFormAnswers: BatchPayload;
  /** Publish many FormAnswer documents */
  publishManyFormAnswersConnection: FormAnswerConnection;
  /**
   * Publish many FormPage documents
   * @deprecated Please use the new paginated many mutation (publishManyFormPagesConnection)
   */
  publishManyFormPages: BatchPayload;
  /** Publish many FormPage documents */
  publishManyFormPagesConnection: FormPageConnection;
  /**
   * Publish many NewsletterSignup documents
   * @deprecated Please use the new paginated many mutation (publishManyNewsletterSignupsConnection)
   */
  publishManyNewsletterSignups: BatchPayload;
  /** Publish many NewsletterSignup documents */
  publishManyNewsletterSignupsConnection: NewsletterSignupConnection;
  /**
   * Publish many PastEvent documents
   * @deprecated Please use the new paginated many mutation (publishManyPastEventsConnection)
   */
  publishManyPastEvents: BatchPayload;
  /** Publish many PastEvent documents */
  publishManyPastEventsConnection: PastEventConnection;
  /**
   * Publish many StartPage documents
   * @deprecated Please use the new paginated many mutation (publishManyStartPagesConnection)
   */
  publishManyStartPages: BatchPayload;
  /** Publish many StartPage documents */
  publishManyStartPagesConnection: StartPageConnection;
  /**
   * Publish many WaitingListEvent documents
   * @deprecated Please use the new paginated many mutation (publishManyWaitingListEventsConnection)
   */
  publishManyWaitingListEvents: BatchPayload;
  /** Publish many WaitingListEvent documents */
  publishManyWaitingListEventsConnection: WaitingListEventConnection;
  /** Publish one newsletterSignup */
  publishNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Publish one pastEvent */
  publishPastEvent?: Maybe<PastEvent>;
  /** Publish one startPage */
  publishStartPage?: Maybe<StartPage>;
  /** Publish one waitingListEvent */
  publishWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Schedule to publish one aboutPage */
  schedulePublishAboutPage?: Maybe<AboutPage>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one eventComment */
  schedulePublishEventComment?: Maybe<EventComment>;
  /** Schedule to publish one eventLandingpage */
  schedulePublishEventLandingpage?: Maybe<EventLandingpage>;
  /** Schedule to publish one eventPage */
  schedulePublishEventPage?: Maybe<EventPage>;
  /** Schedule to publish one eventSignup */
  schedulePublishEventSignup?: Maybe<EventSignup>;
  /** Schedule to publish one formAnswer */
  schedulePublishFormAnswer?: Maybe<FormAnswer>;
  /** Schedule to publish one formPage */
  schedulePublishFormPage?: Maybe<FormPage>;
  /** Schedule to publish one newsletterSignup */
  schedulePublishNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Schedule to publish one pastEvent */
  schedulePublishPastEvent?: Maybe<PastEvent>;
  /** Schedule to publish one startPage */
  schedulePublishStartPage?: Maybe<StartPage>;
  /** Schedule to publish one waitingListEvent */
  schedulePublishWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Unpublish one aboutPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAboutPage?: Maybe<AboutPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one eventComment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEventComment?: Maybe<EventComment>;
  /** Unpublish one eventLandingpage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEventLandingpage?: Maybe<EventLandingpage>;
  /** Unpublish one eventPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEventPage?: Maybe<EventPage>;
  /** Unpublish one eventSignup from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishEventSignup?: Maybe<EventSignup>;
  /** Unpublish one formAnswer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFormAnswer?: Maybe<FormAnswer>;
  /** Unpublish one formPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFormPage?: Maybe<FormPage>;
  /** Unpublish one newsletterSignup from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Unpublish one pastEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPastEvent?: Maybe<PastEvent>;
  /** Unpublish one startPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishStartPage?: Maybe<StartPage>;
  /** Unpublish one waitingListEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Unpublish one aboutPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAboutPage?: Maybe<AboutPage>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one eventComment from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEventComment?: Maybe<EventComment>;
  /** Unpublish one eventLandingpage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEventLandingpage?: Maybe<EventLandingpage>;
  /** Unpublish one eventPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEventPage?: Maybe<EventPage>;
  /** Unpublish one eventSignup from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishEventSignup?: Maybe<EventSignup>;
  /** Unpublish one formAnswer from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormAnswer?: Maybe<FormAnswer>;
  /** Unpublish one formPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFormPage?: Maybe<FormPage>;
  /**
   * Unpublish many AboutPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAboutPagesConnection)
   */
  unpublishManyAboutPages: BatchPayload;
  /** Find many AboutPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAboutPagesConnection: AboutPageConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many EventComment documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventCommentsConnection)
   */
  unpublishManyEventComments: BatchPayload;
  /** Find many EventComment documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventCommentsConnection: EventCommentConnection;
  /**
   * Unpublish many EventLandingpage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventLandingpagesConnection)
   */
  unpublishManyEventLandingpages: BatchPayload;
  /** Find many EventLandingpage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventLandingpagesConnection: EventLandingpageConnection;
  /**
   * Unpublish many EventPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventPagesConnection)
   */
  unpublishManyEventPages: BatchPayload;
  /** Find many EventPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventPagesConnection: EventPageConnection;
  /**
   * Unpublish many EventSignup documents
   * @deprecated Please use the new paginated many mutation (unpublishManyEventSignupsConnection)
   */
  unpublishManyEventSignups: BatchPayload;
  /** Find many EventSignup documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyEventSignupsConnection: EventSignupConnection;
  /**
   * Unpublish many FormAnswer documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormAnswersConnection)
   */
  unpublishManyFormAnswers: BatchPayload;
  /** Find many FormAnswer documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormAnswersConnection: FormAnswerConnection;
  /**
   * Unpublish many FormPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFormPagesConnection)
   */
  unpublishManyFormPages: BatchPayload;
  /** Find many FormPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFormPagesConnection: FormPageConnection;
  /**
   * Unpublish many NewsletterSignup documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewsletterSignupsConnection)
   */
  unpublishManyNewsletterSignups: BatchPayload;
  /** Find many NewsletterSignup documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewsletterSignupsConnection: NewsletterSignupConnection;
  /**
   * Unpublish many PastEvent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPastEventsConnection)
   */
  unpublishManyPastEvents: BatchPayload;
  /** Find many PastEvent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPastEventsConnection: PastEventConnection;
  /**
   * Unpublish many StartPage documents
   * @deprecated Please use the new paginated many mutation (unpublishManyStartPagesConnection)
   */
  unpublishManyStartPages: BatchPayload;
  /** Find many StartPage documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyStartPagesConnection: StartPageConnection;
  /**
   * Unpublish many WaitingListEvent documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWaitingListEventsConnection)
   */
  unpublishManyWaitingListEvents: BatchPayload;
  /** Find many WaitingListEvent documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWaitingListEventsConnection: WaitingListEventConnection;
  /** Unpublish one newsletterSignup from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Unpublish one pastEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPastEvent?: Maybe<PastEvent>;
  /** Unpublish one startPage from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishStartPage?: Maybe<StartPage>;
  /** Unpublish one waitingListEvent from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Update one aboutPage */
  updateAboutPage?: Maybe<AboutPage>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one eventComment */
  updateEventComment?: Maybe<EventComment>;
  /** Update one eventLandingpage */
  updateEventLandingpage?: Maybe<EventLandingpage>;
  /** Update one eventPage */
  updateEventPage?: Maybe<EventPage>;
  /** Update one eventSignup */
  updateEventSignup?: Maybe<EventSignup>;
  /** Update one formAnswer */
  updateFormAnswer?: Maybe<FormAnswer>;
  /** Update one formPage */
  updateFormPage?: Maybe<FormPage>;
  /**
   * Update many aboutPages
   * @deprecated Please use the new paginated many mutation (updateManyAboutPagesConnection)
   */
  updateManyAboutPages: BatchPayload;
  /** Update many AboutPage documents */
  updateManyAboutPagesConnection: AboutPageConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many eventComments
   * @deprecated Please use the new paginated many mutation (updateManyEventCommentsConnection)
   */
  updateManyEventComments: BatchPayload;
  /** Update many EventComment documents */
  updateManyEventCommentsConnection: EventCommentConnection;
  /**
   * Update many eventLandingpages
   * @deprecated Please use the new paginated many mutation (updateManyEventLandingpagesConnection)
   */
  updateManyEventLandingpages: BatchPayload;
  /** Update many EventLandingpage documents */
  updateManyEventLandingpagesConnection: EventLandingpageConnection;
  /**
   * Update many eventPages
   * @deprecated Please use the new paginated many mutation (updateManyEventPagesConnection)
   */
  updateManyEventPages: BatchPayload;
  /** Update many EventPage documents */
  updateManyEventPagesConnection: EventPageConnection;
  /**
   * Update many eventSignups
   * @deprecated Please use the new paginated many mutation (updateManyEventSignupsConnection)
   */
  updateManyEventSignups: BatchPayload;
  /** Update many EventSignup documents */
  updateManyEventSignupsConnection: EventSignupConnection;
  /**
   * Update many formAnswers
   * @deprecated Please use the new paginated many mutation (updateManyFormAnswersConnection)
   */
  updateManyFormAnswers: BatchPayload;
  /** Update many FormAnswer documents */
  updateManyFormAnswersConnection: FormAnswerConnection;
  /**
   * Update many formPages
   * @deprecated Please use the new paginated many mutation (updateManyFormPagesConnection)
   */
  updateManyFormPages: BatchPayload;
  /** Update many FormPage documents */
  updateManyFormPagesConnection: FormPageConnection;
  /**
   * Update many newsletterSignups
   * @deprecated Please use the new paginated many mutation (updateManyNewsletterSignupsConnection)
   */
  updateManyNewsletterSignups: BatchPayload;
  /** Update many NewsletterSignup documents */
  updateManyNewsletterSignupsConnection: NewsletterSignupConnection;
  /**
   * Update many pastEvents
   * @deprecated Please use the new paginated many mutation (updateManyPastEventsConnection)
   */
  updateManyPastEvents: BatchPayload;
  /** Update many PastEvent documents */
  updateManyPastEventsConnection: PastEventConnection;
  /**
   * Update many startPages
   * @deprecated Please use the new paginated many mutation (updateManyStartPagesConnection)
   */
  updateManyStartPages: BatchPayload;
  /** Update many StartPage documents */
  updateManyStartPagesConnection: StartPageConnection;
  /**
   * Update many waitingListEvents
   * @deprecated Please use the new paginated many mutation (updateManyWaitingListEventsConnection)
   */
  updateManyWaitingListEvents: BatchPayload;
  /** Update many WaitingListEvent documents */
  updateManyWaitingListEventsConnection: WaitingListEventConnection;
  /** Update one newsletterSignup */
  updateNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Update one pastEvent */
  updatePastEvent?: Maybe<PastEvent>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one startPage */
  updateStartPage?: Maybe<StartPage>;
  /** Update one waitingListEvent */
  updateWaitingListEvent?: Maybe<WaitingListEvent>;
  /** Upsert one aboutPage */
  upsertAboutPage?: Maybe<AboutPage>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one eventComment */
  upsertEventComment?: Maybe<EventComment>;
  /** Upsert one eventLandingpage */
  upsertEventLandingpage?: Maybe<EventLandingpage>;
  /** Upsert one eventPage */
  upsertEventPage?: Maybe<EventPage>;
  /** Upsert one eventSignup */
  upsertEventSignup?: Maybe<EventSignup>;
  /** Upsert one formAnswer */
  upsertFormAnswer?: Maybe<FormAnswer>;
  /** Upsert one formPage */
  upsertFormPage?: Maybe<FormPage>;
  /** Upsert one newsletterSignup */
  upsertNewsletterSignup?: Maybe<NewsletterSignup>;
  /** Upsert one pastEvent */
  upsertPastEvent?: Maybe<PastEvent>;
  /** Upsert one startPage */
  upsertStartPage?: Maybe<StartPage>;
  /** Upsert one waitingListEvent */
  upsertWaitingListEvent?: Maybe<WaitingListEvent>;
};


export type MutationCreateAboutPageArgs = {
  data: AboutPageCreateInput;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateEventCommentArgs = {
  data: EventCommentCreateInput;
};


export type MutationCreateEventLandingpageArgs = {
  data: EventLandingpageCreateInput;
};


export type MutationCreateEventPageArgs = {
  data: EventPageCreateInput;
};


export type MutationCreateEventSignupArgs = {
  data: EventSignupCreateInput;
};


export type MutationCreateFormAnswerArgs = {
  data: FormAnswerCreateInput;
};


export type MutationCreateFormPageArgs = {
  data: FormPageCreateInput;
};


export type MutationCreateNewsletterSignupArgs = {
  data: NewsletterSignupCreateInput;
};


export type MutationCreatePastEventArgs = {
  data: PastEventCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateStartPageArgs = {
  data: StartPageCreateInput;
};


export type MutationCreateWaitingListEventArgs = {
  data: WaitingListEventCreateInput;
};


export type MutationDeleteAboutPageArgs = {
  where: AboutPageWhereUniqueInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteEventCommentArgs = {
  where: EventCommentWhereUniqueInput;
};


export type MutationDeleteEventLandingpageArgs = {
  where: EventLandingpageWhereUniqueInput;
};


export type MutationDeleteEventPageArgs = {
  where: EventPageWhereUniqueInput;
};


export type MutationDeleteEventSignupArgs = {
  where: EventSignupWhereUniqueInput;
};


export type MutationDeleteFormAnswerArgs = {
  where: FormAnswerWhereUniqueInput;
};


export type MutationDeleteFormPageArgs = {
  where: FormPageWhereUniqueInput;
};


export type MutationDeleteManyAboutPagesArgs = {
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationDeleteManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyEventCommentsArgs = {
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationDeleteManyEventCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationDeleteManyEventLandingpagesArgs = {
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationDeleteManyEventLandingpagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationDeleteManyEventPagesArgs = {
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationDeleteManyEventPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationDeleteManyEventSignupsArgs = {
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationDeleteManyEventSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationDeleteManyFormAnswersArgs = {
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationDeleteManyFormAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationDeleteManyFormPagesArgs = {
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationDeleteManyFormPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationDeleteManyNewsletterSignupsArgs = {
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationDeleteManyNewsletterSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationDeleteManyPastEventsArgs = {
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationDeleteManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationDeleteManyStartPagesArgs = {
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationDeleteManyStartPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationDeleteManyWaitingListEventsArgs = {
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationDeleteManyWaitingListEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationDeleteNewsletterSignupArgs = {
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationDeletePastEventArgs = {
  where: PastEventWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteStartPageArgs = {
  where: StartPageWhereUniqueInput;
};


export type MutationDeleteWaitingListEventArgs = {
  where: WaitingListEventWhereUniqueInput;
};


export type MutationPublishAboutPageArgs = {
  to?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishEventCommentArgs = {
  to?: Array<Stage>;
  where: EventCommentWhereUniqueInput;
};


export type MutationPublishEventLandingpageArgs = {
  to?: Array<Stage>;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationPublishEventPageArgs = {
  to?: Array<Stage>;
  where: EventPageWhereUniqueInput;
};


export type MutationPublishEventSignupArgs = {
  to?: Array<Stage>;
  where: EventSignupWhereUniqueInput;
};


export type MutationPublishFormAnswerArgs = {
  to?: Array<Stage>;
  where: FormAnswerWhereUniqueInput;
};


export type MutationPublishFormPageArgs = {
  to?: Array<Stage>;
  where: FormPageWhereUniqueInput;
};


export type MutationPublishManyAboutPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationPublishManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyEventCommentsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationPublishManyEventCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationPublishManyEventLandingpagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationPublishManyEventLandingpagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationPublishManyEventPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationPublishManyEventPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationPublishManyEventSignupsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationPublishManyEventSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationPublishManyFormAnswersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationPublishManyFormAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationPublishManyFormPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationPublishManyFormPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationPublishManyNewsletterSignupsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationPublishManyNewsletterSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationPublishManyPastEventsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationPublishManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationPublishManyStartPagesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationPublishManyStartPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationPublishManyWaitingListEventsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationPublishManyWaitingListEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationPublishNewsletterSignupArgs = {
  to?: Array<Stage>;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationPublishPastEventArgs = {
  to?: Array<Stage>;
  where: PastEventWhereUniqueInput;
};


export type MutationPublishStartPageArgs = {
  to?: Array<Stage>;
  where: StartPageWhereUniqueInput;
};


export type MutationPublishWaitingListEventArgs = {
  to?: Array<Stage>;
  where: WaitingListEventWhereUniqueInput;
};


export type MutationSchedulePublishAboutPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishEventCommentArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventCommentWhereUniqueInput;
};


export type MutationSchedulePublishEventLandingpageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationSchedulePublishEventPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventPageWhereUniqueInput;
};


export type MutationSchedulePublishEventSignupArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: EventSignupWhereUniqueInput;
};


export type MutationSchedulePublishFormAnswerArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FormAnswerWhereUniqueInput;
};


export type MutationSchedulePublishFormPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FormPageWhereUniqueInput;
};


export type MutationSchedulePublishNewsletterSignupArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationSchedulePublishPastEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PastEventWhereUniqueInput;
};


export type MutationSchedulePublishStartPageArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: StartPageWhereUniqueInput;
};


export type MutationSchedulePublishWaitingListEventArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: WaitingListEventWhereUniqueInput;
};


export type MutationScheduleUnpublishAboutPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: AboutPageWhereUniqueInput;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishEventCommentArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EventCommentWhereUniqueInput;
};


export type MutationScheduleUnpublishEventLandingpageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationScheduleUnpublishEventPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EventPageWhereUniqueInput;
};


export type MutationScheduleUnpublishEventSignupArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: EventSignupWhereUniqueInput;
};


export type MutationScheduleUnpublishFormAnswerArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FormAnswerWhereUniqueInput;
};


export type MutationScheduleUnpublishFormPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: FormPageWhereUniqueInput;
};


export type MutationScheduleUnpublishNewsletterSignupArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationScheduleUnpublishPastEventArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PastEventWhereUniqueInput;
};


export type MutationScheduleUnpublishStartPageArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: StartPageWhereUniqueInput;
};


export type MutationScheduleUnpublishWaitingListEventArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: WaitingListEventWhereUniqueInput;
};


export type MutationUnpublishAboutPageArgs = {
  from?: Array<Stage>;
  where: AboutPageWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishEventCommentArgs = {
  from?: Array<Stage>;
  where: EventCommentWhereUniqueInput;
};


export type MutationUnpublishEventLandingpageArgs = {
  from?: Array<Stage>;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationUnpublishEventPageArgs = {
  from?: Array<Stage>;
  where: EventPageWhereUniqueInput;
};


export type MutationUnpublishEventSignupArgs = {
  from?: Array<Stage>;
  where: EventSignupWhereUniqueInput;
};


export type MutationUnpublishFormAnswerArgs = {
  from?: Array<Stage>;
  where: FormAnswerWhereUniqueInput;
};


export type MutationUnpublishFormPageArgs = {
  from?: Array<Stage>;
  where: FormPageWhereUniqueInput;
};


export type MutationUnpublishManyAboutPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUnpublishManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyEventCommentsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationUnpublishManyEventCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationUnpublishManyEventLandingpagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationUnpublishManyEventLandingpagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationUnpublishManyEventPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationUnpublishManyEventPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationUnpublishManyEventSignupsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationUnpublishManyEventSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationUnpublishManyFormAnswersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationUnpublishManyFormAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationUnpublishManyFormPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationUnpublishManyFormPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationUnpublishManyNewsletterSignupsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationUnpublishManyNewsletterSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationUnpublishManyPastEventsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationUnpublishManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationUnpublishManyStartPagesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationUnpublishManyStartPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationUnpublishManyWaitingListEventsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationUnpublishManyWaitingListEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationUnpublishNewsletterSignupArgs = {
  from?: Array<Stage>;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationUnpublishPastEventArgs = {
  from?: Array<Stage>;
  where: PastEventWhereUniqueInput;
};


export type MutationUnpublishStartPageArgs = {
  from?: Array<Stage>;
  where: StartPageWhereUniqueInput;
};


export type MutationUnpublishWaitingListEventArgs = {
  from?: Array<Stage>;
  where: WaitingListEventWhereUniqueInput;
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageUpdateInput;
  where: AboutPageWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateEventCommentArgs = {
  data: EventCommentUpdateInput;
  where: EventCommentWhereUniqueInput;
};


export type MutationUpdateEventLandingpageArgs = {
  data: EventLandingpageUpdateInput;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationUpdateEventPageArgs = {
  data: EventPageUpdateInput;
  where: EventPageWhereUniqueInput;
};


export type MutationUpdateEventSignupArgs = {
  data: EventSignupUpdateInput;
  where: EventSignupWhereUniqueInput;
};


export type MutationUpdateFormAnswerArgs = {
  data: FormAnswerUpdateInput;
  where: FormAnswerWhereUniqueInput;
};


export type MutationUpdateFormPageArgs = {
  data: FormPageUpdateInput;
  where: FormPageWhereUniqueInput;
};


export type MutationUpdateManyAboutPagesArgs = {
  data: AboutPageUpdateManyInput;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUpdateManyAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AboutPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AboutPageManyWhereInput>;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyEventCommentsArgs = {
  data: EventCommentUpdateManyInput;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationUpdateManyEventCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EventCommentUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventCommentManyWhereInput>;
};


export type MutationUpdateManyEventLandingpagesArgs = {
  data: EventLandingpageUpdateManyInput;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationUpdateManyEventLandingpagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EventLandingpageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventLandingpageManyWhereInput>;
};


export type MutationUpdateManyEventPagesArgs = {
  data: EventPageUpdateManyInput;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationUpdateManyEventPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EventPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventPageManyWhereInput>;
};


export type MutationUpdateManyEventSignupsArgs = {
  data: EventSignupUpdateManyInput;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationUpdateManyEventSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: EventSignupUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventSignupManyWhereInput>;
};


export type MutationUpdateManyFormAnswersArgs = {
  data: FormAnswerUpdateManyInput;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationUpdateManyFormAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FormAnswerUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormAnswerManyWhereInput>;
};


export type MutationUpdateManyFormPagesArgs = {
  data: FormPageUpdateManyInput;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationUpdateManyFormPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FormPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FormPageManyWhereInput>;
};


export type MutationUpdateManyNewsletterSignupsArgs = {
  data: NewsletterSignupUpdateManyInput;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationUpdateManyNewsletterSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NewsletterSignupUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsletterSignupManyWhereInput>;
};


export type MutationUpdateManyPastEventsArgs = {
  data: PastEventUpdateManyInput;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationUpdateManyPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PastEventUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PastEventManyWhereInput>;
};


export type MutationUpdateManyStartPagesArgs = {
  data: StartPageUpdateManyInput;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationUpdateManyStartPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: StartPageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StartPageManyWhereInput>;
};


export type MutationUpdateManyWaitingListEventsArgs = {
  data: WaitingListEventUpdateManyInput;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationUpdateManyWaitingListEventsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: WaitingListEventUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WaitingListEventManyWhereInput>;
};


export type MutationUpdateNewsletterSignupArgs = {
  data: NewsletterSignupUpdateInput;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationUpdatePastEventArgs = {
  data: PastEventUpdateInput;
  where: PastEventWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateStartPageArgs = {
  data: StartPageUpdateInput;
  where: StartPageWhereUniqueInput;
};


export type MutationUpdateWaitingListEventArgs = {
  data: WaitingListEventUpdateInput;
  where: WaitingListEventWhereUniqueInput;
};


export type MutationUpsertAboutPageArgs = {
  upsert: AboutPageUpsertInput;
  where: AboutPageWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertEventCommentArgs = {
  upsert: EventCommentUpsertInput;
  where: EventCommentWhereUniqueInput;
};


export type MutationUpsertEventLandingpageArgs = {
  upsert: EventLandingpageUpsertInput;
  where: EventLandingpageWhereUniqueInput;
};


export type MutationUpsertEventPageArgs = {
  upsert: EventPageUpsertInput;
  where: EventPageWhereUniqueInput;
};


export type MutationUpsertEventSignupArgs = {
  upsert: EventSignupUpsertInput;
  where: EventSignupWhereUniqueInput;
};


export type MutationUpsertFormAnswerArgs = {
  upsert: FormAnswerUpsertInput;
  where: FormAnswerWhereUniqueInput;
};


export type MutationUpsertFormPageArgs = {
  upsert: FormPageUpsertInput;
  where: FormPageWhereUniqueInput;
};


export type MutationUpsertNewsletterSignupArgs = {
  upsert: NewsletterSignupUpsertInput;
  where: NewsletterSignupWhereUniqueInput;
};


export type MutationUpsertPastEventArgs = {
  upsert: PastEventUpsertInput;
  where: PastEventWhereUniqueInput;
};


export type MutationUpsertStartPageArgs = {
  upsert: StartPageUpsertInput;
  where: StartPageWhereUniqueInput;
};


export type MutationUpsertWaitingListEventArgs = {
  upsert: WaitingListEventUpsertInput;
  where: WaitingListEventWhereUniqueInput;
};

export type NewsletterSignup = Node & {
  __typename?: 'NewsletterSignup';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<NewsletterSignup>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  /** List of NewsletterSignup versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NewsletterSignupCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterSignupDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NewsletterSignupHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type NewsletterSignupPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type NewsletterSignupScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NewsletterSignupUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterSignupConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewsletterSignupWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewsletterSignupConnection = {
  __typename?: 'NewsletterSignupConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewsletterSignupEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewsletterSignupCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NewsletterSignupCreateManyInlineInput = {
  /** Connect multiple existing NewsletterSignup documents */
  connect?: InputMaybe<Array<NewsletterSignupWhereUniqueInput>>;
  /** Create and connect multiple existing NewsletterSignup documents */
  create?: InputMaybe<Array<NewsletterSignupCreateInput>>;
};

export type NewsletterSignupCreateOneInlineInput = {
  /** Connect one existing NewsletterSignup document */
  connect?: InputMaybe<NewsletterSignupWhereUniqueInput>;
  /** Create and connect one NewsletterSignup document */
  create?: InputMaybe<NewsletterSignupCreateInput>;
};

/** An edge in a connection. */
export type NewsletterSignupEdge = {
  __typename?: 'NewsletterSignupEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: NewsletterSignup;
};

/** Identifies documents */
export type NewsletterSignupManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterSignupWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterSignupWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterSignupWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewsletterSignupOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NewsletterSignupUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type NewsletterSignupUpdateManyInlineInput = {
  /** Connect multiple existing NewsletterSignup documents */
  connect?: InputMaybe<Array<NewsletterSignupConnectInput>>;
  /** Create and connect multiple NewsletterSignup documents */
  create?: InputMaybe<Array<NewsletterSignupCreateInput>>;
  /** Delete multiple NewsletterSignup documents */
  delete?: InputMaybe<Array<NewsletterSignupWhereUniqueInput>>;
  /** Disconnect multiple NewsletterSignup documents */
  disconnect?: InputMaybe<Array<NewsletterSignupWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewsletterSignup documents */
  set?: InputMaybe<Array<NewsletterSignupWhereUniqueInput>>;
  /** Update multiple NewsletterSignup documents */
  update?: InputMaybe<Array<NewsletterSignupUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewsletterSignup documents */
  upsert?: InputMaybe<Array<NewsletterSignupUpsertWithNestedWhereUniqueInput>>;
};

export type NewsletterSignupUpdateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type NewsletterSignupUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewsletterSignupUpdateManyInput;
  /** Document search */
  where: NewsletterSignupWhereInput;
};

export type NewsletterSignupUpdateOneInlineInput = {
  /** Connect existing NewsletterSignup document */
  connect?: InputMaybe<NewsletterSignupWhereUniqueInput>;
  /** Create and connect one NewsletterSignup document */
  create?: InputMaybe<NewsletterSignupCreateInput>;
  /** Delete currently connected NewsletterSignup document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected NewsletterSignup document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single NewsletterSignup document */
  update?: InputMaybe<NewsletterSignupUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewsletterSignup document */
  upsert?: InputMaybe<NewsletterSignupUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterSignupUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewsletterSignupUpdateInput;
  /** Unique document search */
  where: NewsletterSignupWhereUniqueInput;
};

export type NewsletterSignupUpsertInput = {
  /** Create document if it didn't exist */
  create: NewsletterSignupCreateInput;
  /** Update document if it exists */
  update: NewsletterSignupUpdateInput;
};

export type NewsletterSignupUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewsletterSignupUpsertInput;
  /** Unique document search */
  where: NewsletterSignupWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewsletterSignupWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type NewsletterSignupWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSignupWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterSignupWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterSignupWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterSignupWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewsletterSignupWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterSignupWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterSignupWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterSignupWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewsletterSignupWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewsletterSignup record uniquely */
export type NewsletterSignupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PastEvent = Node & {
  __typename?: 'PastEvent';
  /** Rubriker, bilder, text och feedback highlights. Addera hur många av varje som helst. Publiceras i den ordning de placeras här. */
  content: Array<PastEventcontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PastEvent>;
  eventComments: Array<EventComment>;
  /** Hero bild längst upp på sidan.  */
  hero: Hero;
  /** List of PastEvent versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Kort text som syns på samlingssidan. */
  ingress: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** Sökvägen i URL. Blir automatiskt titeln på inlägget.  */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PastEventContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PastEventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PastEventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PastEventEventCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<EventCommentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventCommentWhereInput>;
};


export type PastEventHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PastEventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PastEventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type PastEventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PastEventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type PastEventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PastEventWhereUniqueInput;
};

/** A connection to a list of items. */
export type PastEventConnection = {
  __typename?: 'PastEventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PastEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PastEventCreateInput = {
  content?: InputMaybe<PastEventcontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  eventComments?: InputMaybe<EventCommentCreateManyInlineInput>;
  hero: HeroCreateOneInlineInput;
  ingress: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PastEventCreateManyInlineInput = {
  /** Connect multiple existing PastEvent documents */
  connect?: InputMaybe<Array<PastEventWhereUniqueInput>>;
  /** Create and connect multiple existing PastEvent documents */
  create?: InputMaybe<Array<PastEventCreateInput>>;
};

export type PastEventCreateOneInlineInput = {
  /** Connect one existing PastEvent document */
  connect?: InputMaybe<PastEventWhereUniqueInput>;
  /** Create and connect one PastEvent document */
  create?: InputMaybe<PastEventCreateInput>;
};

/** An edge in a connection. */
export type PastEventEdge = {
  __typename?: 'PastEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PastEvent;
};

/** Identifies documents */
export type PastEventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PastEventcontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PastEventWhereStageInput>;
  documentInStages_none?: InputMaybe<PastEventWhereStageInput>;
  documentInStages_some?: InputMaybe<PastEventWhereStageInput>;
  eventComments_every?: InputMaybe<EventCommentWhereInput>;
  eventComments_none?: InputMaybe<EventCommentWhereInput>;
  eventComments_some?: InputMaybe<EventCommentWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ingress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PastEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IngressAsc = 'ingress_ASC',
  IngressDesc = 'ingress_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PastEventUpdateInput = {
  content?: InputMaybe<PastEventcontentUnionUpdateManyInlineInput>;
  eventComments?: InputMaybe<EventCommentUpdateManyInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  ingress?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PastEventUpdateManyInlineInput = {
  /** Connect multiple existing PastEvent documents */
  connect?: InputMaybe<Array<PastEventConnectInput>>;
  /** Create and connect multiple PastEvent documents */
  create?: InputMaybe<Array<PastEventCreateInput>>;
  /** Delete multiple PastEvent documents */
  delete?: InputMaybe<Array<PastEventWhereUniqueInput>>;
  /** Disconnect multiple PastEvent documents */
  disconnect?: InputMaybe<Array<PastEventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PastEvent documents */
  set?: InputMaybe<Array<PastEventWhereUniqueInput>>;
  /** Update multiple PastEvent documents */
  update?: InputMaybe<Array<PastEventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PastEvent documents */
  upsert?: InputMaybe<Array<PastEventUpsertWithNestedWhereUniqueInput>>;
};

export type PastEventUpdateManyInput = {
  ingress?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PastEventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PastEventUpdateManyInput;
  /** Document search */
  where: PastEventWhereInput;
};

export type PastEventUpdateOneInlineInput = {
  /** Connect existing PastEvent document */
  connect?: InputMaybe<PastEventWhereUniqueInput>;
  /** Create and connect one PastEvent document */
  create?: InputMaybe<PastEventCreateInput>;
  /** Delete currently connected PastEvent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PastEvent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PastEvent document */
  update?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PastEvent document */
  upsert?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
};

export type PastEventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PastEventUpdateInput;
  /** Unique document search */
  where: PastEventWhereUniqueInput;
};

export type PastEventUpsertInput = {
  /** Create document if it didn't exist */
  create: PastEventCreateInput;
  /** Update document if it exists */
  update: PastEventUpdateInput;
};

export type PastEventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PastEventUpsertInput;
  /** Unique document search */
  where: PastEventWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type PastEventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type PastEventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<PastEventcontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<PastEventWhereStageInput>;
  documentInStages_none?: InputMaybe<PastEventWhereStageInput>;
  documentInStages_some?: InputMaybe<PastEventWhereStageInput>;
  eventComments_every?: InputMaybe<EventCommentWhereInput>;
  eventComments_none?: InputMaybe<EventCommentWhereInput>;
  eventComments_some?: InputMaybe<EventCommentWhereInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  ingress?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  ingress_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  ingress_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  ingress_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  ingress_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  ingress_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  ingress_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  ingress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  ingress_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  ingress_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type PastEventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PastEventWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PastEventWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PastEventWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<PastEventWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References PastEvent record uniquely */
export type PastEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PastEventcontentUnion = FeedbackHighlight | Heading | Image | Text;

export type PastEventcontentUnionConnectInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightConnectInput>;
  Heading?: InputMaybe<HeadingConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type PastEventcontentUnionCreateInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightCreateInput>;
  Heading?: InputMaybe<HeadingCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type PastEventcontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing PastEventcontentUnion documents */
  create?: InputMaybe<Array<PastEventcontentUnionCreateInput>>;
};

export type PastEventcontentUnionCreateOneInlineInput = {
  /** Create and connect one PastEventcontentUnion document */
  create?: InputMaybe<PastEventcontentUnionCreateInput>;
};

export type PastEventcontentUnionCreateWithPositionInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightCreateWithPositionInput>;
  Heading?: InputMaybe<HeadingCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type PastEventcontentUnionUpdateInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpdateInput>;
  Heading?: InputMaybe<HeadingUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type PastEventcontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple PastEventcontentUnion component instances */
  create?: InputMaybe<Array<PastEventcontentUnionCreateWithPositionInput>>;
  /** Delete multiple PastEventcontentUnion documents */
  delete?: InputMaybe<Array<PastEventcontentUnionWhereUniqueInput>>;
  /** Update multiple PastEventcontentUnion component instances */
  update?: InputMaybe<Array<PastEventcontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple PastEventcontentUnion component instances */
  upsert?: InputMaybe<Array<PastEventcontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type PastEventcontentUnionUpdateManyWithNestedWhereInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpdateManyWithNestedWhereInput>;
  Heading?: InputMaybe<HeadingUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type PastEventcontentUnionUpdateOneInlineInput = {
  /** Create and connect one PastEventcontentUnion document */
  create?: InputMaybe<PastEventcontentUnionCreateInput>;
  /** Delete currently connected PastEventcontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single PastEventcontentUnion document */
  update?: InputMaybe<PastEventcontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PastEventcontentUnion document */
  upsert?: InputMaybe<PastEventcontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type PastEventcontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpdateWithNestedWhereUniqueAndPositionInput>;
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type PastEventcontentUnionUpdateWithNestedWhereUniqueInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpdateWithNestedWhereUniqueInput>;
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type PastEventcontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpsertWithNestedWhereUniqueAndPositionInput>;
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type PastEventcontentUnionUpsertWithNestedWhereUniqueInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightUpsertWithNestedWhereUniqueInput>;
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type PastEventcontentUnionWhereInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightWhereInput>;
  Heading?: InputMaybe<HeadingWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type PastEventcontentUnionWhereUniqueInput = {
  FeedbackHighlight?: InputMaybe<FeedbackHighlightWhereUniqueInput>;
  Heading?: InputMaybe<HeadingWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single aboutPage */
  aboutPage?: Maybe<AboutPage>;
  /** Retrieve document version */
  aboutPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple aboutPages */
  aboutPages: Array<AboutPage>;
  /** Retrieve multiple aboutPages using the Relay connection interface */
  aboutPagesConnection: AboutPageConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single eventComment */
  eventComment?: Maybe<EventComment>;
  /** Retrieve document version */
  eventCommentVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple eventComments */
  eventComments: Array<EventComment>;
  /** Retrieve multiple eventComments using the Relay connection interface */
  eventCommentsConnection: EventCommentConnection;
  /** Retrieve a single eventLandingpage */
  eventLandingpage?: Maybe<EventLandingpage>;
  /** Retrieve document version */
  eventLandingpageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple eventLandingpages */
  eventLandingpages: Array<EventLandingpage>;
  /** Retrieve multiple eventLandingpages using the Relay connection interface */
  eventLandingpagesConnection: EventLandingpageConnection;
  /** Retrieve a single eventPage */
  eventPage?: Maybe<EventPage>;
  /** Retrieve document version */
  eventPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple eventPages */
  eventPages: Array<EventPage>;
  /** Retrieve multiple eventPages using the Relay connection interface */
  eventPagesConnection: EventPageConnection;
  /** Retrieve a single eventSignup */
  eventSignup?: Maybe<EventSignup>;
  /** Retrieve document version */
  eventSignupVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple eventSignups */
  eventSignups: Array<EventSignup>;
  /** Retrieve multiple eventSignups using the Relay connection interface */
  eventSignupsConnection: EventSignupConnection;
  /** Retrieve a single formAnswer */
  formAnswer?: Maybe<FormAnswer>;
  /** Retrieve document version */
  formAnswerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formAnswers */
  formAnswers: Array<FormAnswer>;
  /** Retrieve multiple formAnswers using the Relay connection interface */
  formAnswersConnection: FormAnswerConnection;
  /** Retrieve a single formPage */
  formPage?: Maybe<FormPage>;
  /** Retrieve document version */
  formPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple formPages */
  formPages: Array<FormPage>;
  /** Retrieve multiple formPages using the Relay connection interface */
  formPagesConnection: FormPageConnection;
  /** Retrieve a single newsletterSignup */
  newsletterSignup?: Maybe<NewsletterSignup>;
  /** Retrieve document version */
  newsletterSignupVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newsletterSignups */
  newsletterSignups: Array<NewsletterSignup>;
  /** Retrieve multiple newsletterSignups using the Relay connection interface */
  newsletterSignupsConnection: NewsletterSignupConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single pastEvent */
  pastEvent?: Maybe<PastEvent>;
  /** Retrieve document version */
  pastEventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pastEvents */
  pastEvents: Array<PastEvent>;
  /** Retrieve multiple pastEvents using the Relay connection interface */
  pastEventsConnection: PastEventConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single startPage */
  startPage?: Maybe<StartPage>;
  /** Retrieve document version */
  startPageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple startPages */
  startPages: Array<StartPage>;
  /** Retrieve multiple startPages using the Relay connection interface */
  startPagesConnection: StartPageConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
  /** Retrieve a single waitingListEvent */
  waitingListEvent?: Maybe<WaitingListEvent>;
  /** Retrieve document version */
  waitingListEventVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple waitingListEvents */
  waitingListEvents: Array<WaitingListEvent>;
  /** Retrieve multiple waitingListEvents using the Relay connection interface */
  waitingListEventsConnection: WaitingListEventConnection;
};


export type QueryAboutPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AboutPageWhereUniqueInput;
};


export type QueryAboutPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAboutPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AboutPageWhereInput>;
};


export type QueryAboutPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AboutPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AboutPageWhereInput>;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryEventCommentArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventCommentWhereUniqueInput;
};


export type QueryEventCommentVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventCommentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventCommentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventCommentWhereInput>;
};


export type QueryEventCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventCommentOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventCommentWhereInput>;
};


export type QueryEventLandingpageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventLandingpageWhereUniqueInput;
};


export type QueryEventLandingpageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventLandingpagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventLandingpageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventLandingpageWhereInput>;
};


export type QueryEventLandingpagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventLandingpageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventLandingpageWhereInput>;
};


export type QueryEventPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventPageWhereUniqueInput;
};


export type QueryEventPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventPageWhereInput>;
};


export type QueryEventPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventPageWhereInput>;
};


export type QueryEventSignupArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: EventSignupWhereUniqueInput;
};


export type QueryEventSignupVersionArgs = {
  where: VersionWhereInput;
};


export type QueryEventSignupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventSignupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventSignupWhereInput>;
};


export type QueryEventSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<EventSignupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<EventSignupWhereInput>;
};


export type QueryFormAnswerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FormAnswerWhereUniqueInput;
};


export type QueryFormAnswerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormAnswersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FormAnswerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FormAnswerWhereInput>;
};


export type QueryFormAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FormAnswerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FormAnswerWhereInput>;
};


export type QueryFormPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FormPageWhereUniqueInput;
};


export type QueryFormPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFormPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FormPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FormPageWhereInput>;
};


export type QueryFormPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FormPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FormPageWhereInput>;
};


export type QueryNewsletterSignupArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewsletterSignupWhereUniqueInput;
};


export type QueryNewsletterSignupVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNewsletterSignupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterSignupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterSignupWhereInput>;
};


export type QueryNewsletterSignupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterSignupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NewsletterSignupWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPastEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PastEventWhereUniqueInput;
};


export type QueryPastEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPastEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PastEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PastEventWhereInput>;
};


export type QueryPastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PastEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PastEventWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryStartPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: StartPageWhereUniqueInput;
};


export type QueryStartPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryStartPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryStartPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryWaitingListEventArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: WaitingListEventWhereUniqueInput;
};


export type QueryWaitingListEventVersionArgs = {
  where: VersionWhereInput;
};


export type QueryWaitingListEventsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WaitingListEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WaitingListEventWhereInput>;
};


export type QueryWaitingListEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<WaitingListEventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<WaitingListEventWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = AboutPage | Asset | EventComment | EventLandingpage | EventPage | EventSignup | FormAnswer | FormPage | NewsletterSignup | PastEvent | StartPage | WaitingListEvent;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type StartPage = Node & {
  __typename?: 'StartPage';
  /** Rubriker, bilder och text. Addera hur många av varje som helst. Publiceras i den ordning de placeras här. */
  content: Array<StartPagecontentUnion>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<StartPage>;
  /** Hero bild längst upp på sidan */
  hero: Hero;
  /** List of StartPage versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** sökvägen i URL. Denna som webbplatsen hämtar datan från. Startsidan ska vara "start" */
  slug: Scalars['String'];
  /** System stage field */
  stage: Stage;
  /** Sidans huvudtitel, placeras i herobilden */
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type StartPageContentArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type StartPageCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StartPageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type StartPageHeroArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StartPageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type StartPagePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


export type StartPageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type StartPageUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type StartPageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: StartPageWhereUniqueInput;
};

/** A connection to a list of items. */
export type StartPageConnection = {
  __typename?: 'StartPageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<StartPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type StartPageCreateInput = {
  content?: InputMaybe<StartPagecontentUnionCreateManyInlineInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  hero: HeroCreateOneInlineInput;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StartPageCreateManyInlineInput = {
  /** Connect multiple existing StartPage documents */
  connect?: InputMaybe<Array<StartPageWhereUniqueInput>>;
  /** Create and connect multiple existing StartPage documents */
  create?: InputMaybe<Array<StartPageCreateInput>>;
};

export type StartPageCreateOneInlineInput = {
  /** Connect one existing StartPage document */
  connect?: InputMaybe<StartPageWhereUniqueInput>;
  /** Create and connect one StartPage document */
  create?: InputMaybe<StartPageCreateInput>;
};

/** An edge in a connection. */
export type StartPageEdge = {
  __typename?: 'StartPageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: StartPage;
};

/** Identifies documents */
export type StartPageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StartPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StartPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StartPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<StartPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StartPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StartPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StartPageWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum StartPageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type StartPageUpdateInput = {
  content?: InputMaybe<StartPagecontentUnionUpdateManyInlineInput>;
  hero?: InputMaybe<HeroUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StartPageUpdateManyInlineInput = {
  /** Connect multiple existing StartPage documents */
  connect?: InputMaybe<Array<StartPageConnectInput>>;
  /** Create and connect multiple StartPage documents */
  create?: InputMaybe<Array<StartPageCreateInput>>;
  /** Delete multiple StartPage documents */
  delete?: InputMaybe<Array<StartPageWhereUniqueInput>>;
  /** Disconnect multiple StartPage documents */
  disconnect?: InputMaybe<Array<StartPageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing StartPage documents */
  set?: InputMaybe<Array<StartPageWhereUniqueInput>>;
  /** Update multiple StartPage documents */
  update?: InputMaybe<Array<StartPageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple StartPage documents */
  upsert?: InputMaybe<Array<StartPageUpsertWithNestedWhereUniqueInput>>;
};

export type StartPageUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars['String']>;
};

export type StartPageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: StartPageUpdateManyInput;
  /** Document search */
  where: StartPageWhereInput;
};

export type StartPageUpdateOneInlineInput = {
  /** Connect existing StartPage document */
  connect?: InputMaybe<StartPageWhereUniqueInput>;
  /** Create and connect one StartPage document */
  create?: InputMaybe<StartPageCreateInput>;
  /** Delete currently connected StartPage document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected StartPage document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single StartPage document */
  update?: InputMaybe<StartPageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StartPage document */
  upsert?: InputMaybe<StartPageUpsertWithNestedWhereUniqueInput>;
};

export type StartPageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: StartPageUpdateInput;
  /** Unique document search */
  where: StartPageWhereUniqueInput;
};

export type StartPageUpsertInput = {
  /** Create document if it didn't exist */
  create: StartPageCreateInput;
  /** Update document if it exists */
  update: StartPageUpdateInput;
};

export type StartPageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: StartPageUpsertInput;
  /** Unique document search */
  where: StartPageWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type StartPageWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type StartPageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StartPageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StartPageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StartPageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  /** All values in which the union is empty. */
  content_empty?: InputMaybe<Scalars['Boolean']>;
  /** Matches if the modular component contains at least one connection to the item provided to the filter */
  content_some?: InputMaybe<StartPagecontentUnionWhereInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<StartPageWhereStageInput>;
  documentInStages_none?: InputMaybe<StartPageWhereStageInput>;
  documentInStages_some?: InputMaybe<StartPageWhereStageInput>;
  hero?: InputMaybe<HeroWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type StartPageWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<StartPageWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<StartPageWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<StartPageWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<StartPageWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References StartPage record uniquely */
export type StartPageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type StartPagecontentUnion = Heading | Image | Text;

export type StartPagecontentUnionConnectInput = {
  Heading?: InputMaybe<HeadingConnectInput>;
  Image?: InputMaybe<ImageConnectInput>;
  Text?: InputMaybe<TextConnectInput>;
};

export type StartPagecontentUnionCreateInput = {
  Heading?: InputMaybe<HeadingCreateInput>;
  Image?: InputMaybe<ImageCreateInput>;
  Text?: InputMaybe<TextCreateInput>;
};

export type StartPagecontentUnionCreateManyInlineInput = {
  /** Create and connect multiple existing StartPagecontentUnion documents */
  create?: InputMaybe<Array<StartPagecontentUnionCreateInput>>;
};

export type StartPagecontentUnionCreateOneInlineInput = {
  /** Create and connect one StartPagecontentUnion document */
  create?: InputMaybe<StartPagecontentUnionCreateInput>;
};

export type StartPagecontentUnionCreateWithPositionInput = {
  Heading?: InputMaybe<HeadingCreateWithPositionInput>;
  Image?: InputMaybe<ImageCreateWithPositionInput>;
  Text?: InputMaybe<TextCreateWithPositionInput>;
};

export type StartPagecontentUnionUpdateInput = {
  Heading?: InputMaybe<HeadingUpdateInput>;
  Image?: InputMaybe<ImageUpdateInput>;
  Text?: InputMaybe<TextUpdateInput>;
};

export type StartPagecontentUnionUpdateManyInlineInput = {
  /** Create and connect multiple StartPagecontentUnion component instances */
  create?: InputMaybe<Array<StartPagecontentUnionCreateWithPositionInput>>;
  /** Delete multiple StartPagecontentUnion documents */
  delete?: InputMaybe<Array<StartPagecontentUnionWhereUniqueInput>>;
  /** Update multiple StartPagecontentUnion component instances */
  update?: InputMaybe<Array<StartPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple StartPagecontentUnion component instances */
  upsert?: InputMaybe<Array<StartPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type StartPagecontentUnionUpdateManyWithNestedWhereInput = {
  Heading?: InputMaybe<HeadingUpdateManyWithNestedWhereInput>;
  Image?: InputMaybe<ImageUpdateManyWithNestedWhereInput>;
  Text?: InputMaybe<TextUpdateManyWithNestedWhereInput>;
};

export type StartPagecontentUnionUpdateOneInlineInput = {
  /** Create and connect one StartPagecontentUnion document */
  create?: InputMaybe<StartPagecontentUnionCreateInput>;
  /** Delete currently connected StartPagecontentUnion document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single StartPagecontentUnion document */
  update?: InputMaybe<StartPagecontentUnionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single StartPagecontentUnion document */
  upsert?: InputMaybe<StartPagecontentUnionUpsertWithNestedWhereUniqueInput>;
};

export type StartPagecontentUnionUpdateWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueAndPositionInput>;
};

export type StartPagecontentUnionUpdateWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpdateWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpdateWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
};

export type StartPagecontentUnionUpsertWithNestedWhereUniqueAndPositionInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueAndPositionInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueAndPositionInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueAndPositionInput>;
};

export type StartPagecontentUnionUpsertWithNestedWhereUniqueInput = {
  Heading?: InputMaybe<HeadingUpsertWithNestedWhereUniqueInput>;
  Image?: InputMaybe<ImageUpsertWithNestedWhereUniqueInput>;
  Text?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type StartPagecontentUnionWhereInput = {
  Heading?: InputMaybe<HeadingWhereInput>;
  Image?: InputMaybe<ImageWhereInput>;
  Text?: InputMaybe<TextWhereInput>;
};

export type StartPagecontentUnionWhereUniqueInput = {
  Heading?: InputMaybe<HeadingWhereUniqueInput>;
  Image?: InputMaybe<ImageWhereUniqueInput>;
  Text?: InputMaybe<TextWhereUniqueInput>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Text = {
  __typename?: 'Text';
  /** The unique identifier */
  id: Scalars['ID'];
  /** System stage field */
  stage: Stage;
  /** Text editor, formateringen kommer synas på webbplatsen */
  text: RichText;
};

export type TextConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TextWhereUniqueInput;
};

/** A connection to a list of items. */
export type TextConnection = {
  __typename?: 'TextConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TextEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TextCreateInput = {
  text: Scalars['RichTextAST'];
};

export type TextCreateManyInlineInput = {
  /** Create and connect multiple existing Text documents */
  create?: InputMaybe<Array<TextCreateInput>>;
};

export type TextCreateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
};

export type TextCreateWithPositionInput = {
  /** Document to create */
  data: TextCreateInput;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
};

/** An edge in a connection. */
export type TextEdge = {
  __typename?: 'TextEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Text;
};

/** Identifies documents */
export type TextManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

export enum TextOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type TextParent = AboutPage | EventPage | PastEvent | StartPage;

export type TextParentConnectInput = {
  AboutPage?: InputMaybe<AboutPageConnectInput>;
  EventPage?: InputMaybe<EventPageConnectInput>;
  PastEvent?: InputMaybe<PastEventConnectInput>;
  StartPage?: InputMaybe<StartPageConnectInput>;
};

export type TextParentCreateInput = {
  AboutPage?: InputMaybe<AboutPageCreateInput>;
  EventPage?: InputMaybe<EventPageCreateInput>;
  PastEvent?: InputMaybe<PastEventCreateInput>;
  StartPage?: InputMaybe<StartPageCreateInput>;
};

export type TextParentCreateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Create and connect multiple existing TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
};

export type TextParentCreateOneInlineInput = {
  /** Connect one existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
};

export type TextParentUpdateInput = {
  AboutPage?: InputMaybe<AboutPageUpdateInput>;
  EventPage?: InputMaybe<EventPageUpdateInput>;
  PastEvent?: InputMaybe<PastEventUpdateInput>;
  StartPage?: InputMaybe<StartPageUpdateInput>;
};

export type TextParentUpdateManyInlineInput = {
  /** Connect multiple existing TextParent documents */
  connect?: InputMaybe<Array<TextParentConnectInput>>;
  /** Create and connect multiple TextParent documents */
  create?: InputMaybe<Array<TextParentCreateInput>>;
  /** Delete multiple TextParent documents */
  delete?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Disconnect multiple TextParent documents */
  disconnect?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing TextParent documents */
  set?: InputMaybe<Array<TextParentWhereUniqueInput>>;
  /** Update multiple TextParent documents */
  update?: InputMaybe<Array<TextParentUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple TextParent documents */
  upsert?: InputMaybe<Array<TextParentUpsertWithNestedWhereUniqueInput>>;
};

export type TextParentUpdateManyWithNestedWhereInput = {
  AboutPage?: InputMaybe<AboutPageUpdateManyWithNestedWhereInput>;
  EventPage?: InputMaybe<EventPageUpdateManyWithNestedWhereInput>;
  PastEvent?: InputMaybe<PastEventUpdateManyWithNestedWhereInput>;
  StartPage?: InputMaybe<StartPageUpdateManyWithNestedWhereInput>;
};

export type TextParentUpdateOneInlineInput = {
  /** Connect existing TextParent document */
  connect?: InputMaybe<TextParentWhereUniqueInput>;
  /** Create and connect one TextParent document */
  create?: InputMaybe<TextParentCreateInput>;
  /** Delete currently connected TextParent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected TextParent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single TextParent document */
  update?: InputMaybe<TextParentUpdateWithNestedWhereUniqueInput>;
  /** Upsert single TextParent document */
  upsert?: InputMaybe<TextParentUpsertWithNestedWhereUniqueInput>;
};

export type TextParentUpdateWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpdateWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpdateWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpdateWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpdateWithNestedWhereUniqueInput>;
};

export type TextParentUpsertWithNestedWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageUpsertWithNestedWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageUpsertWithNestedWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventUpsertWithNestedWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageUpsertWithNestedWhereUniqueInput>;
};

export type TextParentWhereInput = {
  AboutPage?: InputMaybe<AboutPageWhereInput>;
  EventPage?: InputMaybe<EventPageWhereInput>;
  PastEvent?: InputMaybe<PastEventWhereInput>;
  StartPage?: InputMaybe<StartPageWhereInput>;
};

export type TextParentWhereUniqueInput = {
  AboutPage?: InputMaybe<AboutPageWhereUniqueInput>;
  EventPage?: InputMaybe<EventPageWhereUniqueInput>;
  PastEvent?: InputMaybe<PastEventWhereUniqueInput>;
  StartPage?: InputMaybe<StartPageWhereUniqueInput>;
};

export type TextUpdateInput = {
  text?: InputMaybe<Scalars['RichTextAST']>;
};

export type TextUpdateManyInlineInput = {
  /** Create and connect multiple Text component instances */
  create?: InputMaybe<Array<TextCreateWithPositionInput>>;
  /** Delete multiple Text documents */
  delete?: InputMaybe<Array<TextWhereUniqueInput>>;
  /** Update multiple Text component instances */
  update?: InputMaybe<Array<TextUpdateWithNestedWhereUniqueAndPositionInput>>;
  /** Upsert multiple Text component instances */
  upsert?: InputMaybe<Array<TextUpsertWithNestedWhereUniqueAndPositionInput>>;
};

export type TextUpdateManyInput = {
  text?: InputMaybe<Scalars['RichTextAST']>;
};

export type TextUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TextUpdateManyInput;
  /** Document search */
  where: TextWhereInput;
};

export type TextUpdateOneInlineInput = {
  /** Create and connect one Text document */
  create?: InputMaybe<TextCreateInput>;
  /** Delete currently connected Text document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Update single Text document */
  update?: InputMaybe<TextUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Text document */
  upsert?: InputMaybe<TextUpsertWithNestedWhereUniqueInput>;
};

export type TextUpdateWithNestedWhereUniqueAndPositionInput = {
  /** Document to update */
  data?: InputMaybe<TextUpdateInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TextUpdateInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

export type TextUpsertInput = {
  /** Create document if it didn't exist */
  create: TextCreateInput;
  /** Update document if it exists */
  update: TextUpdateInput;
};

export type TextUpsertWithNestedWhereUniqueAndPositionInput = {
  /** Document to upsert */
  data?: InputMaybe<TextUpsertInput>;
  /** Position in the list of existing component instances, will default to appending at the end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Unique component instance search */
  where: TextWhereUniqueInput;
};

export type TextUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TextUpsertInput;
  /** Unique document search */
  where: TextWhereUniqueInput;
};

/** Identifies documents */
export type TextWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TextWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TextWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TextWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
};

/** References Text record uniquely */
export type TextWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEvent = Node & {
  __typename?: 'WaitingListEvent';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<WaitingListEvent>;
  email: Scalars['String'];
  eventPage?: Maybe<EventPage>;
  firstName: Scalars['String'];
  /** List of WaitingListEvent versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  lastName: Scalars['String'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventEventPageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** When event is fully booked people can sign up to the waiting list  */
export type WaitingListEventUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']>;
  locales?: InputMaybe<Array<Locale>>;
};

export type WaitingListEventConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: WaitingListEventWhereUniqueInput;
};

/** A connection to a list of items. */
export type WaitingListEventConnection = {
  __typename?: 'WaitingListEventConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<WaitingListEventEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type WaitingListEventCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  eventPage?: InputMaybe<EventPageCreateOneInlineInput>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WaitingListEventCreateManyInlineInput = {
  /** Connect multiple existing WaitingListEvent documents */
  connect?: InputMaybe<Array<WaitingListEventWhereUniqueInput>>;
  /** Create and connect multiple existing WaitingListEvent documents */
  create?: InputMaybe<Array<WaitingListEventCreateInput>>;
};

export type WaitingListEventCreateOneInlineInput = {
  /** Connect one existing WaitingListEvent document */
  connect?: InputMaybe<WaitingListEventWhereUniqueInput>;
  /** Create and connect one WaitingListEvent document */
  create?: InputMaybe<WaitingListEventCreateInput>;
};

/** An edge in a connection. */
export type WaitingListEventEdge = {
  __typename?: 'WaitingListEventEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: WaitingListEvent;
};

/** Identifies documents */
export type WaitingListEventManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<WaitingListEventWhereStageInput>;
  documentInStages_none?: InputMaybe<WaitingListEventWhereStageInput>;
  documentInStages_some?: InputMaybe<WaitingListEventWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum WaitingListEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WaitingListEventUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  eventPage?: InputMaybe<EventPageUpdateOneInlineInput>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type WaitingListEventUpdateManyInlineInput = {
  /** Connect multiple existing WaitingListEvent documents */
  connect?: InputMaybe<Array<WaitingListEventConnectInput>>;
  /** Create and connect multiple WaitingListEvent documents */
  create?: InputMaybe<Array<WaitingListEventCreateInput>>;
  /** Delete multiple WaitingListEvent documents */
  delete?: InputMaybe<Array<WaitingListEventWhereUniqueInput>>;
  /** Disconnect multiple WaitingListEvent documents */
  disconnect?: InputMaybe<Array<WaitingListEventWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing WaitingListEvent documents */
  set?: InputMaybe<Array<WaitingListEventWhereUniqueInput>>;
  /** Update multiple WaitingListEvent documents */
  update?: InputMaybe<Array<WaitingListEventUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple WaitingListEvent documents */
  upsert?: InputMaybe<Array<WaitingListEventUpsertWithNestedWhereUniqueInput>>;
};

export type WaitingListEventUpdateManyInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type WaitingListEventUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WaitingListEventUpdateManyInput;
  /** Document search */
  where: WaitingListEventWhereInput;
};

export type WaitingListEventUpdateOneInlineInput = {
  /** Connect existing WaitingListEvent document */
  connect?: InputMaybe<WaitingListEventWhereUniqueInput>;
  /** Create and connect one WaitingListEvent document */
  create?: InputMaybe<WaitingListEventCreateInput>;
  /** Delete currently connected WaitingListEvent document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected WaitingListEvent document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single WaitingListEvent document */
  update?: InputMaybe<WaitingListEventUpdateWithNestedWhereUniqueInput>;
  /** Upsert single WaitingListEvent document */
  upsert?: InputMaybe<WaitingListEventUpsertWithNestedWhereUniqueInput>;
};

export type WaitingListEventUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WaitingListEventUpdateInput;
  /** Unique document search */
  where: WaitingListEventWhereUniqueInput;
};

export type WaitingListEventUpsertInput = {
  /** Create document if it didn't exist */
  create: WaitingListEventCreateInput;
  /** Update document if it exists */
  update: WaitingListEventUpdateInput;
};

export type WaitingListEventUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WaitingListEventUpsertInput;
  /** Unique document search */
  where: WaitingListEventWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type WaitingListEventWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type WaitingListEventWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WaitingListEventWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<WaitingListEventWhereStageInput>;
  documentInStages_none?: InputMaybe<WaitingListEventWhereStageInput>;
  documentInStages_some?: InputMaybe<WaitingListEventWhereStageInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  eventPage?: InputMaybe<EventPageWhereInput>;
  firstName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  firstName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  firstName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  firstName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  firstName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  firstName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  firstName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  firstName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  firstName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  firstName_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  lastName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  lastName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  lastName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  lastName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Any other value that exists and is not equal to the given value. */
  lastName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  lastName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  lastName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  lastName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** All values not starting with the given string. */
  lastName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  lastName_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WaitingListEventWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WaitingListEventWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WaitingListEventWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WaitingListEventWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WaitingListEventWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References WaitingListEvent record uniquely */
export type WaitingListEventWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type Get_CommentsQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type Get_CommentsQuery = { __typename?: 'Query', eventComments: Array<{ __typename?: 'EventComment', id: string, comment: string, commentPolicy: boolean, createdAt: any, lastname: string, firstname: string }> };

export type CreateEventCommentMutationVariables = Exact<{
  data: EventCommentCreateInput;
}>;


export type CreateEventCommentMutation = { __typename?: 'Mutation', createEventComment?: { __typename?: 'EventComment', comment: string, commentPolicy: boolean, email: string, firstname: string, lastname: string, pastEvent?: { __typename?: 'PastEvent', slug: string } | null } | null };

export type Get_Past_EventpageQueryVariables = Exact<{
  where: PastEventWhereUniqueInput;
}>;


export type Get_Past_EventpageQuery = { __typename?: 'Query', pastEvent?: (
    { __typename?: 'PastEvent', slug: string, title: string, hero: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ) }
    & { ' $fragmentRefs'?: { 'BlogContentFragment': BlogContentFragment } }
  ) | null };

export type Get_EventpageQueryVariables = Exact<{
  where: EventPageWhereUniqueInput;
}>;


export type Get_EventpageQuery = { __typename?: 'Query', eventPage?: (
    { __typename?: 'EventPage', maxParticipants: number, date: any, slug: string, title: string, contact: Array<{ __typename?: 'ContactCard', email: string, name: string, phone?: string | null, title: string, image?: { __typename?: 'Asset', url: string } | null }>, hero?: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ) | null, eventSignups: Array<{ __typename?: 'EventSignup', id: string, firstName: string }> }
    & { ' $fragmentRefs'?: { 'EventContentFragment': EventContentFragment;'LocationFragment': LocationFragment } }
  ) | null };

export type Get_Upcoming_EventsQueryVariables = Exact<{
  today: Scalars['DateTime'];
}>;


export type Get_Upcoming_EventsQuery = { __typename?: 'Query', eventPages: Array<{ __typename?: 'EventPage', title: string, slug: string, hero?: { __typename?: 'Hero', altText: string, image: { __typename?: 'Asset', url: string } } | null }> };

export type Get_Upcoming_Events_ListQueryVariables = Exact<{
  today: Scalars['DateTime'];
}>;


export type Get_Upcoming_Events_ListQuery = { __typename?: 'Query', eventPages: Array<{ __typename?: 'EventPage', title: string, slug: string, date: any, ingress: string, hero?: { __typename?: 'Hero', altText: string, image: { __typename?: 'Asset', url: string } } | null }> };

export type Get_Past_EventsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Past_EventsQuery = { __typename?: 'Query', pastEvents: Array<{ __typename?: 'PastEvent', title: string, slug: string, hero: { __typename?: 'Hero', altText: string, image: { __typename?: 'Asset', url: string } } }> };

export type Get_Past_Events_ListQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Past_Events_ListQuery = { __typename?: 'Query', pastEvents: Array<{ __typename?: 'PastEvent', title: string, slug: string, ingress: string, hero: { __typename?: 'Hero', altText: string, image: { __typename?: 'Asset', url: string } } }> };

export type HeroFragment = { __typename?: 'Hero', altText: string, id: string, image: { __typename?: 'Asset', url: string } } & { ' $fragmentName'?: 'HeroFragment' };

export type PageContentFragment = { __typename?: 'StartPage', content: Array<{ __typename?: 'Heading', heading: string, id: string } | { __typename?: 'Image', altText: string, id: string, imageText?: string | null, image: { __typename?: 'Asset', url: string } } | { __typename?: 'Text', id: string, text: { __typename?: 'RichText', raw: any } }> } & { ' $fragmentName'?: 'PageContentFragment' };

export type BlogContentFragment = { __typename?: 'PastEvent', content: Array<{ __typename?: 'FeedbackHighlight', author: string, feedback: string, id: string } | { __typename?: 'Heading', heading: string, id: string } | { __typename?: 'Image', imageText?: string | null, id: string, altText: string, image: { __typename?: 'Asset', url: string } } | { __typename?: 'Text', id: string, text: { __typename?: 'RichText', raw: any } }> } & { ' $fragmentName'?: 'BlogContentFragment' };

export type EventContentFragment = { __typename?: 'EventPage', content: Array<{ __typename?: 'Heading', heading: string, id: string } | { __typename?: 'Image', altText: string, imageText?: string | null, id: string, image: { __typename?: 'Asset', url: string } } | { __typename?: 'Text', id: string, text: { __typename?: 'RichText', raw: any } }> } & { ' $fragmentName'?: 'EventContentFragment' };

export type AboutContentFragment = { __typename?: 'AboutPage', content: Array<{ __typename?: 'Heading', heading: string, id: string } | { __typename?: 'Image', altText: string, imageText?: string | null, id: string, image: { __typename?: 'Asset', url: string } } | { __typename?: 'Text', id: string, text: { __typename?: 'RichText', raw: any } }> } & { ' $fragmentName'?: 'AboutContentFragment' };

export type LocationFragment = { __typename?: 'EventPage', location?: { __typename?: 'EventLocation', adress: string, id: string, map: { __typename?: 'Location', latitude: number, longitude: number } } | null } & { ' $fragmentName'?: 'LocationFragment' };

export type AdressFragment = { __typename?: 'AboutPage', id: string, adress: { __typename?: 'EventLocation', adress: string, map: { __typename?: 'Location', latitude: number, longitude: number } } } & { ' $fragmentName'?: 'AdressFragment' };

export type FormInputsFragment = { __typename?: 'FormPage', formInputs: Array<{ __typename?: 'FormsCheckbox', required: boolean, label: string, checkboxname: string } | { __typename?: 'FormsInput', type: FormInputType, required: boolean, label: string, inputname: string } | { __typename?: 'FormsSelect', required: boolean, label: string, selectname: string, options: Array<{ __typename?: 'FormsSelectOption', option: string, value: string }> } | { __typename?: 'FormsTextarea', required: boolean, label: string, textareaname: string }> } & { ' $fragmentName'?: 'FormInputsFragment' };

export type CreateWaitingListEventMutationVariables = Exact<{
  data: WaitingListEventCreateInput;
}>;


export type CreateWaitingListEventMutation = { __typename?: 'Mutation', createWaitingListEvent?: { __typename?: 'WaitingListEvent', email: string, lastName: string, firstName: string, eventPage?: { __typename?: 'EventPage', slug: string } | null } | null };

export type CreateNewsletterSignupMutationVariables = Exact<{
  data: NewsletterSignupCreateInput;
}>;


export type CreateNewsletterSignupMutation = { __typename?: 'Mutation', createNewsletterSignup?: { __typename?: 'NewsletterSignup', email: string, lastName: string, firstName: string } | null };

export type CreateFormAnswerMutationVariables = Exact<{
  data: FormAnswerCreateInput;
}>;


export type CreateFormAnswerMutation = { __typename?: 'Mutation', createFormAnswer?: { __typename?: 'FormAnswer', formData?: any | null, formPage?: { __typename?: 'FormPage', slug: string } | null, eventPage?: { __typename?: 'EventPage', slug: string } | null } | null };

export type CreateEventSignupMutationVariables = Exact<{
  data: EventSignupCreateInput;
}>;


export type CreateEventSignupMutation = { __typename?: 'Mutation', createEventSignup?: { __typename?: 'EventSignup', photoConsent?: boolean | null, occupation: string, lastName: string, firstName: string, email: string, allergies?: string | null, eventPageSlug?: { __typename?: 'EventPage', slug: string } | null } | null };

export type Get_LandingpageQueryVariables = Exact<{
  where: EventLandingpageWhereUniqueInput;
}>;


export type Get_LandingpageQuery = { __typename?: 'Query', eventLandingpage?: { __typename?: 'EventLandingpage', title: string, hero: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ) } | null };

export type Get_StartpageQueryVariables = Exact<{
  where: StartPageWhereUniqueInput;
}>;


export type Get_StartpageQuery = { __typename?: 'Query', startPage?: (
    { __typename?: 'StartPage', title: string, slug: string, id: string, hero: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ) }
    & { ' $fragmentRefs'?: { 'PageContentFragment': PageContentFragment } }
  ) | null };

export type Get_FormpageQueryVariables = Exact<{
  where: FormPageWhereUniqueInput;
}>;


export type Get_FormpageQuery = { __typename?: 'Query', formPage?: (
    { __typename?: 'FormPage', slug: string, title: string, hero: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ), eventPage?: { __typename?: 'EventPage', slug: string } | null, formInfo: { __typename?: 'RichText', raw: any } }
    & { ' $fragmentRefs'?: { 'FormInputsFragment': FormInputsFragment } }
  ) | null };

export type Get_About_PageQueryVariables = Exact<{
  where: AboutPageWhereUniqueInput;
}>;


export type Get_About_PageQuery = { __typename?: 'Query', aboutPage?: (
    { __typename?: 'AboutPage', slug: string, title: string, sidebarInfo?: string | null, employees: Array<{ __typename?: 'ContactCard', title: string, name: string, phone?: string | null, email: string, image?: { __typename?: 'Asset', url: string } | null }>, hero: (
      { __typename?: 'Hero' }
      & { ' $fragmentRefs'?: { 'HeroFragment': HeroFragment } }
    ) }
    & { ' $fragmentRefs'?: { 'AboutContentFragment': AboutContentFragment;'AdressFragment': AdressFragment } }
  ) | null };

export const HeroFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<HeroFragment, unknown>;
export const PageContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PageContentFragment, unknown>;
export const BlogContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PastEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedbackHighlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogContentFragment, unknown>;
export const EventContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventContentFragment, unknown>;
export const AboutContentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutContentFragment, unknown>;
export const LocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"location"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]}}]} as unknown as DocumentNode<LocationFragment, unknown>;
export const AdressFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"adress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<AdressFragment, unknown>;
export const FormInputsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormInputs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formInputs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsTextarea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"textareaname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsSelect"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"selectname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"inputname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsCheckbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","alias":{"kind":"Name","value":"checkboxname"},"name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FormInputsFragment, unknown>;
export const Get_CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_COMMENTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"documentInStages_some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"pastEvent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"commentPolicy"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}}]}}]}}]} as unknown as DocumentNode<Get_CommentsQuery, Get_CommentsQueryVariables>;
export const CreateEventCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createEventComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventCommentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEventComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"commentPolicy"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"pastEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<CreateEventCommentMutation, CreateEventCommentMutationVariables>;
export const Get_Past_EventpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PAST_EVENTPAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PastEventWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pastEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BlogContent"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlogContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PastEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeedbackHighlight"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"feedback"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_Past_EventpageQuery, Get_Past_EventpageQueryVariables>;
export const Get_EventpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_EVENTPAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventPageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contact"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"maxParticipants"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventContent"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"eventSignups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"location"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EventLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]}}]} as unknown as DocumentNode<Get_EventpageQuery, Get_EventpageQueryVariables>;
export const Get_Upcoming_EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UPCOMING_EVENTS"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"date_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Upcoming_EventsQuery, Get_Upcoming_EventsQueryVariables>;
export const Get_Upcoming_Events_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_UPCOMING_EVENTS_LIST"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"today"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"date_gte"},"value":{"kind":"Variable","name":{"kind":"Name","value":"today"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"date_ASC"}},{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Upcoming_Events_ListQuery, Get_Upcoming_Events_ListQueryVariables>;
export const Get_Past_EventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PAST_EVENTS"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pastEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"2"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Past_EventsQuery, Get_Past_EventsQueryVariables>;
export const Get_Past_Events_ListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_PAST_EVENTS_LIST"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pastEvents"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stage"},"value":{"kind":"EnumValue","value":"PUBLISHED"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"publishedAt_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"ingress"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"altText"}}]}}]}}]}}]} as unknown as DocumentNode<Get_Past_Events_ListQuery, Get_Past_Events_ListQueryVariables>;
export const CreateWaitingListEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createWaitingListEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WaitingListEventCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWaitingListEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"eventPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<CreateWaitingListEventMutation, CreateWaitingListEventMutationVariables>;
export const CreateNewsletterSignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createNewsletterSignup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"NewsletterSignupCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNewsletterSignup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}}]}}]}}]} as unknown as DocumentNode<CreateNewsletterSignupMutation, CreateNewsletterSignupMutationVariables>;
export const CreateFormAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createFormAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FormAnswerCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFormAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formData"}},{"kind":"Field","name":{"kind":"Name","value":"formPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<CreateFormAnswerMutation, CreateFormAnswerMutationVariables>;
export const CreateEventSignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createEventSignup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventSignupCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createEventSignup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"photoConsent"}},{"kind":"Field","name":{"kind":"Name","value":"occupation"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"eventPageSlug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"allergies"}}]}}]}}]} as unknown as DocumentNode<CreateEventSignupMutation, CreateEventSignupMutationVariables>;
export const Get_LandingpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_LANDINGPAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventLandingpageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventLandingpage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<Get_LandingpageQuery, Get_LandingpageQueryVariables>;
export const Get_StartpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_STARTPAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"StartPageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageContent"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<Get_StartpageQuery, Get_StartpageQueryVariables>;
export const Get_FormpageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_FORMPAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"FormPageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}},{"kind":"Field","name":{"kind":"Name","value":"formInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormInputs"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormInputs"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"formInputs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsTextarea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"textareaname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsSelect"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"selectname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"option"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsInput"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","alias":{"kind":"Name","value":"inputname"},"name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormsCheckbox"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"required"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","alias":{"kind":"Name","value":"checkboxname"},"name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<Get_FormpageQuery, Get_FormpageQueryVariables>;
export const Get_About_PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GET_ABOUT_PAGE"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AboutPageWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"employees"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Hero"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AboutContent"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sidebarInfo"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"adress"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Hero"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AboutContent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"1000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Heading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Image"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"altText"}},{"kind":"Field","name":{"kind":"Name","value":"imageText"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Text"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"adress"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AboutPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"adress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"adress"}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<Get_About_PageQuery, Get_About_PageQueryVariables>;