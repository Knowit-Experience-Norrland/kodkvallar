import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

// recive id from EventSignupComp.tsx, send data from API and print to DOM
interface EventSignupCompProps {
  slug: string | undefined;
}

const EventSignupComp = ({ slug }: EventSignupCompProps) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [photoConsent, setPhotoConsent] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [allergies, setAllergies] = useState("");

  // send data from API
  const CREATE_EVENTSIGNUP = gql(`
  mutation createEventSignup($data: EventSignupCreateInput!) {
    createEventSignup(data: $data) {
    allergies
    email
    firstName
    lastName
    photoConsent
    eventPageSlug {
      slug
    }
  }
}
    `);
  const [createEventSignup] = useMutation(CREATE_EVENTSIGNUP);

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = {
        firstName: firstname,
        lastName: lastname,
        email: email,
        eventPageSlug: { connect: { slug: slug } },
        photoConsent: photoConsent,
        allergies: allergies,
      };
      createEventSignup({ variables: { data } });
      setMessage("SUCCESS");
    } catch (err) {
      setMessage("ERROR");
      console.log(err);
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPhotoConsent(false);
    setAllergies("");
  };

  //   set states to values of input fields
  const handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastname(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhotoConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoConsent(e.target.checked);
  };
  const handleAllergiesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAllergies(e.target.value);
  };

  return (
    <section className="event-signup">
      <div className="event-signup-container">
        <div className="form-container">
          <h2>Anmäl dig till eventet!</h2>

          <form onSubmit={handleSubmit} name="NewsletterSignup">
            <div className="form-child">
              <label htmlFor="event-firstname">Förnamn:</label>
              <input
                id="event-firstname"
                name="event-firstname"
                type="text"
                aria-label="Förnamn"
                value={firstname}
                onChange={handleFirstnameChange}
                required
              />
            </div>
            <div className="form-child">
              <label htmlFor="event-lastname">Efternamn:</label>
              <input
                id="event-lastname"
                name="event-lastname"
                type="text"
                aria-label="Efternamn"
                value={lastname}
                onChange={handleLastnameChange}
                required
              />
            </div>
            <div className="form-child">
              <label htmlFor="event-email">Email:</label>
              <input
                id="event-email"
                name="event-email"
                type="email"
                aria-label="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-child">
              <label htmlFor="allergies">
                Allergier eller annan viktig information:
              </label>
              <textarea
                id="allergies"
                name="allergies"
                aria-label="Allergier eller annan viktig information"
                rows={5}
                cols={33}
                value={allergies}
                onChange={handleAllergiesChange}
              />
            </div>
            <div className="form-child checkbox">
              <input
                type="checkbox"
                id="photo-consent"
                name="photo-consent"
                checked={photoConsent}
                aria-label="Godkänn att vara med på bild genom att bocka i rutan"
                onChange={handlePhotoConsentChange}
              />
              <label htmlFor="photo-consent">
                Klicka i om du godkänner att vara med på bild från eventet.
              </label>
            </div>
            <div>
              {message === "SUCCESS" && <p>Tack för din anmälan!</p>}
              {message === "ERROR" && (
                <p>Något gick fel. Vänligen försök igen.</p>
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
