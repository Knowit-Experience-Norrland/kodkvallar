import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { CREATE_COMMENT } from "../../Queries/comment-queries";

type Props = {};

const CommentFormComp = (props: Props) => {
  const [message, setMessage] = useState<string | null>(null);
  const [errmessage, setErrMessage] = useState<string | null>(null);

  const params = useParams();
  let slug = params.slug;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createEventComment] = useMutation(CREATE_COMMENT);

  const onSubmit = (data: any) => {
    try {
      data = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        comment: data.comment,
        commentPolicy: Boolean(data.commentpolicy),
        pastEvent: { connect: { slug: slug } },
      };
      createEventComment({ variables: { data } });
      setMessage("Tack för din kommentar!");
      setErrMessage(null);
      reset();
    } catch (err) {
      setErrMessage("Något gick fel, vänligen försök igen.");
      setMessage(null);
      console.log(err);
    }
  };

  return (
    <div className="comment-form">
      <h2>Lämna kommentar</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="comment-grid">
          <div className="form-child">
            <label htmlFor="firstname">
              Förnamn: <span className="required">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              aria-label="Förnamn"
              {...register("firstname", {
                required: "Detta fält är obligatoriskt.",
                pattern: {
                  value: /^[A-Za-zåäöÅÄÖ0-9\s.,"\-_\n\r]+$/, // default pattern for text input type
                  message:
                    "Felaktigt format. Endast bokstäver och skiljetecken tillåtna.", // default error message for text input type
                },
                minLength: {
                  value: 2,
                  message: "Minst 2 tecken.",
                },
              })}
            />
            {errors.firstname && ( // if errors.firstname exists (is true), display error message below
              <p className="error">{(errors.firstname as any).message}</p>
            )}
          </div>
          <div className="form-child">
            <label htmlFor="lastname">
              Efternamn: <span className="required">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              aria-label="Efternamn:"
              {...register("lastname", {
                required: "Detta fält är obligatoriskt.",
                pattern: {
                  value: /^[A-Za-zåäöÅÄÖ0-9\s.,"\-_\n\r]+$/, // default pattern for text input type
                  message:
                    "Felaktigt format. Endast bokstäver och skiljetecken tillåtna.", // default error message for text input type
                },
                minLength: {
                  value: 2,
                  message: "Minst 2 tecken.",
                },
              })}
            />
            {errors.lastname && ( // if errors.lastname exists (is true), display error message below
              <p className="error">{(errors.lastname as any).message}</p>
            )}
          </div>
        </div>
        <div className="form-child">
          <label htmlFor="email">
            Email: <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            aria-label="Email:"
            {...register("email", {
              required: "Detta fält är obligatoriskt.",
              pattern: {
                value: /\S+@\S+\.\S+/, // default pattern for text input type
                message: "Felaktigt e-postformat.", // default error message for text input type
              },
            })}
          />
          {errors.email && ( // if errors.email exists (is true), display error message below
            <p className="error">{(errors.email as any).message}</p>
          )}
        </div>
        <div className="form-child">
          <label htmlFor="comment">
            Kommentar:<span className="required">*</span>
          </label>
          <textarea
            {...register("comment", {
              required: "Detta fält är obligatoriskt.",
              pattern: {
                value: /^[A-Za-zåäöÅÄÖ0-9\s.,!?;()[\]{}"\-_+=*&%#@€£$\n\r]+$/,
                message:
                  "Felaktigt format. Endast bokstäver och skiljetecken tillåtna.",
              },
            })}
            id="comment"
            aria-label="Kommentar:"
            rows={5}
            cols={33}
          />
          {errors.comment && ( // if errors.comment exists (is true), display error message below
            <p className="error">{(errors.comment as any).message}</p>
          )}
        </div>
        <div className="form-child checkbox">
          <input
            type="checkbox"
            {...register("commentpolicy", {
              required: {
                value: true,
                message: "Detta fält är obligatoriskt.",
              },
            })}
            id="commentpolicy"
            aria-label="Jag godkänner villkoren för att lämna en kommentar."
          />
          <label htmlFor="commentpolicy">
            Jag godkänner nedan villkor.<span className="required">*</span>
          </label>
        </div>
        {errors.commentpolicy && ( // if errors.commentpolicy exists (is true), display error message below
          <p className="error">{(errors.commentpolicy as any).message}</p>
        )}
        <p className="gdpr-text">
          Din kommentar inväntar granskning innan den publiceras. Du som
          kommenterar ansvarar själv för innehållet i kommentaren. Ansvarig
          utgivare för denna webbplats har inte något ansvar för kommentarerna.
          Knowit Experience uppmanar kommentatorer att använda vänlig ton, ett
          civiliserat språk, uppföra sig väl och följa tillämpliga lagar.
        </p>
        <button type="submit">Skicka</button>
      </form>
      {message && <p className="green bold">{message}</p>}
      {errmessage && <p className="error">{errmessage}</p>}
    </div>
  );
};

export default CommentFormComp;
