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
  const handleAllergiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllergies(e.target.value);
  };

  return (
    <section className="event-signup">
      <div className="form-container">
        <div>
          {message === "SUCCESS" && (
            <p>Tack för din anmälan!</p>
          )}
          {message === "ERROR" && <p>Något gick fel. Vänligen försök igen.</p>}
          {message === null && (
            <p>
              Anmäl dig till kodkvällen!
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit} name="NewsletterSignup">
          <div className="form-child">
            <label htmlFor="firstname" className="visuallyhidden">
              Förnamn:
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Förnamn"
              aria-label="Förnamn"
              value={firstname}
              onChange={handleFirstnameChange}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="lastname" className="visuallyhidden">
              Efternamn:
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Efternamn"
              aria-label="Efternamn"
              value={lastname}
              onChange={handleLastnameChange}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="email" className="visuallyhidden">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="allergies" className="visuallyhidden">
              Allergier eller annan viktig information:
            </label>
            <input
              id="allergies"
              name="allergies"
              type="allergies"
              placeholder="Allergier"
              aria-label="Allergier eller annan viktig information"
              value={allergies}
              onChange={handleAllergiesChange}
              required
            />
          </div>
          <div className="form-child">
            <label htmlFor="photo-consent" className="visuallyhidden">
              Klicka i om du godkänner att vara med på bild från eventet:
            </label>
            <input type="checkbox"
              id="photo-consent"
              name="photo-consent"
              aria-label="Godkänn att vara med på bild genom att bocka i rutan"
              onChange={handlePhotoConsentChange}
              required
            />
          </div>
          <p className="gdpr-text">Genom att anmäla dig godkänner du att vi lagrar ovan information.</p>
          <button type="submit">Anmäl</button>
        </form>
      </div>
    </section>
  );
};

export default EventSignupComp;
