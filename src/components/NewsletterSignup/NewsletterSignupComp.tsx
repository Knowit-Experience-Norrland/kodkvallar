import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_NEWSLETTERSIGNUP } from "../../Queries/mutations";
import { useForm } from "react-hook-form";

// newsletter signup component, with form and mutation to create newsletter signup
const NewsletterSignupComp = () => {
  const [message, setMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // use mutation to create newsletter signup
  const [createNewsletterSignup] = useMutation(CREATE_NEWSLETTERSIGNUP);

  //   handle submit
  const onSubmit = (data: any) => {
    try {
      data = {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
      };
      createNewsletterSignup({ variables: { data } });
      setMessage("SUCCESS");
      reset();
    } catch (err) {
      setMessage("ERROR");
      console.log(err);
    }
  };

  return (
    <section className="newsletter-signup">
      <div className="form-container">
        <p className="bold">
          Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna!
        </p>

        <div>
          {message === "SUCCESS" && (
            <>
              <p className="green bold">
                Tack för att du vill prenumerera på vårt nyhetsbrev!
              </p>
              <p className="gdpr-text">
                Pssst! Ibland hamnar vi i skärpkorgen...
              </p>
            </>
          )}
          {message === "ERROR" && (
            <p className="error">Något gick fel. Vänligen försök igen.</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} name="NewsletterSignup">
          <div className="form-child">
            <label htmlFor="newsletter-firstname">
              Förnamn: <span className="required">*</span>
            </label>
            <input
              id="newsletter-firstname"
              type="text"
              aria-label="Förnamn"
              {...register("firstname", {
                required: "Fyll i förnamn.",
                pattern: {
                  value: /^[A-Za-zåäöÅÄÖ0-9\s.,"\-_\n\r]+$/, // default pattern for text input type
                  message:
                    "Förnamn: Felaktigt format. Endast bokstäver och skiljetecken tillåtna.", // default error message for text input type
                },
                minLength: {
                  value: 2,
                  message: "Minst 2 tecken.",
                },
              })}
            />
          </div>
          <div className="form-child">
            <label htmlFor="newsletter-lastname">
              Efternamn: <span className="required">*</span>
            </label>
            <input
              id="newsletter-lastname"
              type="text"
              aria-label="Efternamn"
              {...register("lastname", {
                required: "Fyll i efternamn.",
                pattern: {
                  value: /^[A-Za-zåäöÅÄÖ0-9\s.,"\-_\n\r]+$/, // default pattern for text input type
                  message:
                    "Efternamn: Felaktigt format. Endast bokstäver och skiljetecken tillåtna.", // default error message for text input type
                },
                minLength: {
                  value: 2,
                  message: "Minst 2 tecken.",
                },
              })}
            />
          </div>
          <div className="form-child">
            <label htmlFor="newsletter-email">
              Email: <span className="required">*</span>
            </label>
            <input
              id="newsletter-email"
              type="email"
              aria-label="Email"
              {...register("email", {
                required: "Fyll i e-post.",
                pattern: {
                  value: /\S+@\S+\.\S+/, // default pattern for text input type
                  message: "Felaktigt e-postformat.", // default error message for text input type
                },
              })}
            />
          </div>
          <button type="submit">Prenumerera</button>
        </form>
        {errors.firstname && (
          <p className="error">{(errors.firstname as any).message}</p>
        )}
        {errors.lastname && (
          <p className="error">{(errors.lastname as any).message}</p>
        )}
        {errors.email && (
          <p className="error">{(errors.email as any).message}</p>
        )}
        <p className="gdpr-text">
          Genom att prenumerera godkänner du att vi lagrar ovan information.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignupComp;
