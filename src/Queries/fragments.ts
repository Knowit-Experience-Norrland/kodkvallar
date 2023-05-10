import { gql } from "@apollo/client";

//FRAGMENT

export const HeroFragment = gql`
fragment Hero on Hero {
  altText
  id
  image {
    url
  }
}
`;

export const PageContentFragment = gql`
  fragment PageContent on StartPage {
    content(first: 1000) {
      ... on Heading {
        heading
        id
      }
      ... on Image {
        altText
        id
        imageText
        image {
          url
        }
      }
      ... on Text {
        text {
          raw
        }
        id
      }
    }
  }
`;

export const BlogContentFragment = gql`
  fragment BlogContent on PastEvent {
    content(first: 1000) {
      ... on FeedbackHighlight {
        author
        feedback
        id
      }
      ... on Heading {
        heading
        id
      }
      ... on Text {
        text {
          raw
        }
        id
      }
      ... on Image {
        imageText
        id
        altText
        image {
          url
        }
      }
    }
  }
`;

export const EventContentFragment = gql`
  fragment EventContent on EventPage {
    content(first: 1000) {
      ... on Heading {
        heading
        id
      }
      ... on Image {
        altText
        imageText
        id
        image {
          url
        }
      }
      ... on Text {
        id
        text {
          raw
        }
      }
    }
  }
`;

export const AboutContentFragment = gql`
    fragment AboutContent on AboutPage {
      content(first: 1000) {
        ... on Heading {
          heading
          id
        }
        ... on Image {
          altText
          imageText
          id
          image {
            url
          }
        }
        ... on Text {
          id
          text {
            raw
          }
        }
      }
    }
  `;

export const locationFragment = gql`
  fragment location on EventPage {
    location {
      ... on EventLocation {
        adress
        id
        map {
          latitude
          longitude
        }
      }
    }
  }
`;

export const adressFragment = gql`
fragment adress on AboutPage {
  id
  adress {
    adress
    map {
      latitude
      longitude
    }
  }
}
`;

export const FormInputsFragment = gql`
  fragment FormInputs on FormPage {
    formInputs(first: 1000) {
      ... on FormsTextarea {
        required
        textareaname: name
        label
      }
      ... on FormsSelect {
        required
        selectname: name
        label
        options {
          option
          value
        }
      }
      ... on FormsInput {
        type
        required
        inputname: name
        label
      }
      ... on FormsCheckbox {
        required
        label
        checkboxname: name
      }
    }
  }
`;
