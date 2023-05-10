import { gql } from "@apollo/client";

export const GET_COMMENTS = gql`
query GET_COMMENTS($slug: String!) {
eventComments(
where: {
  documentInStages_some: { stage: PUBLISHED }
  pastEvent: { slug: $slug }
}
orderBy: createdAt_DESC, first: 100
) {
id
comment
commentPolicy
createdAt
lastname
firstname
}
}
`;

export const CREATE_COMMENT = gql`
mutation createEventComment($data: EventCommentCreateInput!) {
  createEventComment(data: $data) {
      comment
  commentPolicy
  email
  firstname
  lastname
  pastEvent {
    slug
  }
}
}
  `;