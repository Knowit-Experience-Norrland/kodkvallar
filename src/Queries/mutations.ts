import { gql } from "@apollo/client";

export  const CREATE_WAITINGLIST_SIGNUP = gql`
mutation createWaitingListEvent($data: WaitingListEventCreateInput!) {
  createWaitingListEvent(data: $data) {
    email
    lastName
    firstName
    eventPage {
    slug
  }
  }
}
  `;

export const CREATE_NEWSLETTERSIGNUP = gql`
mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {
  createNewsletterSignup(data: $data) {
    email
    lastName
    firstName
  }
}
  `;

export const CREATE_FORM_ANSWER = gql`
mutation createFormAnswer($data: FormAnswerCreateInput!) {
  createFormAnswer(data: $data) {
  formData
  formPage{
    slug
  }
  eventPage {
    slug
  }
}
}
  `;


export const CREATE_EVENTSIGNUP = gql`
mutation createEventSignup($data: EventSignupCreateInput!) {
 createEventSignup(data: $data) {
   photoConsent
   occupation
   lastName
   firstName
   eventPageSlug {
     slug
   }
   email
   allergies
 }
}
   `;