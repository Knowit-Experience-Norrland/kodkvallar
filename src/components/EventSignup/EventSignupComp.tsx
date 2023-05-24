import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_EVENTSIGNUP } from "../../Queries/mutations";
import { useForm } from "react-hook-form";

// recive id from EventSignupComp.tsx, send data from API and print to DOM
interface EventSignupCompProps {
  slug: string | undefined;
}

const EventSignupComp = ({ slug }: EventSignupCompProps) => {
  const [message, setMessage] = useState<string | null>(null);
  //use mutation to create event signup
  const [createEventSignup] = useMutation(CREATE_EVENTSIGNUP);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle submit
  const onSubmit = (data: any) => {
    try {
      data = {
        firstName: data.eventfirstname,
        lastName: data.eventlastname,
        email: data.eventemail,
        eventPageSlug: { connect: { slug: slug } },
        photoConsent: data.photoConsent,
        allergies: data.allergies,
        occupation: data.occupation,
      };
      createEventSignup({ variables: { data } });
      setMessage("SUCCESS");
      reset();
    } catch (err) {
      setMessage("ERROR");
      console.log(err);
    }
  };

  return (
    <section className="event-signup">
      <div className="event-signup-container">
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)} name="NewsletterSignup">
            <h2>Anmäl dig till eventet!</h2>
            <div className="form-child">
              <label htmlFor="eventfirstname">
                Förnamn: <span className="required">*</span>
              </label>
              <input
                id="eventfirstname"
                type="text"
                aria-label="Förnamn"
                className="smaller-input"
                {...register("eventfirstname", {
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
              {errors.eventfirstname && (
                <p className="error">
                  {(errors.eventfirstname as any).message}
                </p>
              )}
            </div>
            <div className="form-child">
              <label htmlFor="eventlastname">
                Efternamn: <span className="required">*</span>
              </label>
              <input
                id="eventlastname"
                type="text"
                aria-label="Efternamn"
                className="smaller-input"
                {...register("eventlastname", {
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
              {errors.eventlastname && (
                <p className="error">{(errors.eventlastname as any).message}</p>
              )}
            </div>
            <div className="form-child">
              <label htmlFor="eventemail">
                Email: <span className="required">*</span>
              </label>
              <input
                id="eventemail"
                type="email"
                aria-label="Email"
                {...register("eventemail", {
                  required: "Detta fält är obligatoriskt.",
                  pattern: {
                    value: /\S+@\S+\.\S+/, // default pattern for text input type
                    message: "Felaktigt e-postformat.", // default error message for text input type
                  },
                })}
              />
              {errors.eventemail && (
                <p className="error">{(errors.eventemail as any).message}</p>
              )}
            </div>
            <div className="form-child">
              <label htmlFor="occupation">
                Utbildning eller sysselsättning:
                <span className="required">*</span>
              </label>
              <input
                id="occupation"
                type="text"
                aria-label="Utbildning eller sysselsättning"
                {...register("occupation", {
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
              {errors.occupation && (
                <p className="error">{(errors.occupation as any).message}</p>
              )}{" "}
            </div>
            <div className="form-child">
              <label htmlFor="allergies">
                Allergier eller annan viktig information:
              </label>
              <textarea
                id="allergies"
                aria-label="Allergier eller annan viktig information"
                rows={5}
                cols={33}
                {...register("allergies", {
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
              {errors.allergies && (
                <p className="error">{(errors.allergies as any).message}</p>
              )}{" "}
            </div>
            <div className="form-child checkbox">
              <input
                type="checkbox"
                id="photoconsent"
                aria-label="Godkänn att vara med på bild genom att bocka i rutan"
                {...register("photoconsent")}
              />
              <label htmlFor="photo-consent">
                Klicka i om du godkänner att vara med på bild från eventet.
              </label>
            </div>
            <div>
              {message === "SUCCESS" && (
                <>
                  <p className="green bold">
                    Tack för din anmälan! En bekräftelse kommer på mail.
                  </p>
                  <p className="gdpr-text">
                    Pssst! Ibland hamnar vi i skärpkorgen, så kolla där om du
                    inte får något mail!
                  </p>
                </>
              )}
              {message === "ERROR" && (
                <p className="error">Något gick fel. Vänligen försök igen.</p>
              )}
            </div>
            <button type="submit">Anmäl</button>
            <p className="gdpr-text">
              Genom att anmäla dig godkänner du att vi lagrar ovan information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EventSignupComp;
