import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_WAITINGLIST_SIGNUP } from "../../Queries/mutations";
import { useForm } from "react-hook-form";

interface WaitinglistProps {
  slug: string | undefined;
}

const WaitinglistComp = ({ slug }: WaitinglistProps) => {
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   use mutation hook for creating waitinglist signup
  const [createWaitingListEvent] = useMutation(CREATE_WAITINGLIST_SIGNUP);

  //   handle submit
  const onSubmit = (data: any) => {
    try {
      data = {
        firstName: data.firstname,
        lastName: data.lastname,
        email: data.email,
        eventPage: { connect: { slug: slug } },
      };
      createWaitingListEvent({ variables: { data } });
      setMessage("SUCCESS");
      reset();
    } catch (err) {
      setMessage("ERROR");
      console.log(err);
    }
  };

  return (
    <section className="waiting-list">
      <div className="form-container">
        <h2 className="bold">Eventet är fullbokat!</h2>
        <p className="bold">
          Anmäl dig till väntelistan så kontaktar vi dig om det blir en plats
          ledig.
        </p>

        <div>
          {message === "SUCCESS" && (
            <>
              <p className="green bold">
                Tack för din anmälan till väntelistan!
              </p>
              <p className="gdpr-text">
                Pssst! Ibland hamnar vi i skärpkorgen..
              </p>
            </>
          )}
          {message === "ERROR" && <p>Något gick fel. Vänligen försök igen.</p>}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} name="NewsletterSignup">
          <div className="form-child">
            <label htmlFor="firstname">
              Förnamn: <span className="required">*</span>
            </label>
            <input
              id="firstname"
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
            <label htmlFor="lastname">
              Efternamn: <span className="required">*</span>
            </label>
            <input
              id="lastname"
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
            <label htmlFor="email">
              Email: <span className="required">*</span>
            </label>
            <input
              id="email"
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
          <button type="submit">Ställ dig i kö!</button>
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
          Genom att anmäla dig godkänner du att vi lagrar ovan information.
        </p>
      </div>
    </section>
  );
};

export default WaitinglistComp;
