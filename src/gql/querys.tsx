import { gql } from "graphql-request";
import { graphql } from "./gql";


export  const PastEventContentFragment = graphql(`
fragment PastEventContentFragment on PastEvent {
  content {
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
    ... on FeedbackHighlight {
      id
      author
      feedback
    }
  }
}
`);

export  const GET_PAST_EVENTPAGE = gql`
query Hejhej($slug: String!) {
  pastEvent(where: { slug: $slug }) {
    hero {
      altText
      image {
        url
      }
    }
    slug
    title
  }
}
`;


