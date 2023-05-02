import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Get_CommentsQuery } from "../../gql/graphql";
import { useParams } from "react-router-dom";

const CommentsComp = () => {
  // get slug from params
  const params = useParams();
  let slug = params.slug;

  const GET_COMMENTS = gql(`
        query GET_COMMENTS($slug: String!) {
      eventComments(
        where: {
          documentInStages_some: { stage: PUBLISHED }
          pastEvent: { slug: $slug }
        }
      ) {
        id
        comment
        commentPolicy
        createdAt
        lastname
        firstname
      }
    }
    `);

  const { data, error, loading } = useQuery<Get_CommentsQuery>(GET_COMMENTS, {
    variables: { slug },
  });
  const { eventComments } = data || {};

  return (
    <section className="comments">
      <h2>Kommentarer</h2>
      <hr className="divider"/>
      {eventComments?.map((comment) => {
        //format date and time
        let newDate = new Date(comment?.createdAt);
        let date = newDate.toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        let time = newDate.toLocaleTimeString("sv-SE", {
          timeZone: "CET",
          hour: "2-digit",
          minute: "2-digit",
        });
        return (
          <div key={comment.id} className="comment">
            <div className="comment-content">
            <p className="bold">{comment.firstname}</p>
            <p>
              {date} kl:{time}
            </p>
            <p>{comment.comment}</p>
            </div>
            <hr className="divider"/>
          </div>
        );
      })}
    </section>
  );
};

export default CommentsComp;
