import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_EVENTSIGNUP } from "../../Queries/mutations";

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
  const [occupation, setOccupation] = useState("");

  //error messages
  const [firstnameError, setFirstnameError] = useState<string | null>(null);
  const [lastnameError, setLastnameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [occupationError, setOccupationError] = useState<string | null>(null);
  const [allergiesError, setAllergiesError] = useState<string | null>(null);

  // Regular expressions for input validation
  const nameRegex = /^[A-Öa-ö0-9\s,.-]+$/; // Accepts only letters and whitespace
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation

//use mutation to create event signup
  const [createEventSignup] = useMutation(CREATE_EVENTSIGNUP);

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //reset error msg
    setFirstnameError(null);
    setLastnameError(null);
    setEmailError(null);
    setOccupationError(null);
    setAllergiesError(null);

    //validate form inputs
    let isValid = true;

    if (!firstname) {
      setFirstnameError("Fyll i förnamn");
      isValid = false;
    } else if (firstname.length < 2) {
      setFirstnameError("Förnamnet måste vara minst 2 tecken");
      isValid = false;
    } else if (!firstname.match(nameRegex)) {
      setFirstnameError("Förnamnet får endast innehålla bokstäver");
      isValid = false;
    }
    if (!lastname) {
      setLastnameError("Fyll i efternamn");
      isValid = false;
    } else if (lastname.length < 2) {
      setLastnameError("Efternamnet måste vara minst 2 tecken");
      isValid = false;
    } else if (!lastname.match(nameRegex)) {
      setLastnameError("Efternamnet får endast innehålla bokstäver");
      isValid = false;
    }
    if (!email) {
      setEmailError("Fyll i e-post");
      isValid = false;
    } else if (!email.includes("@")) {
      setEmailError("Ogiltig email");
      isValid = false;
    } else if (!email.match(emailRegex)) {
      setEmailError("Ogiltig email");
      isValid = false;
    }
    if (!occupation) {
      setOccupationError("Fyll i utbildning/yrke");
      isValid = false;
    } else if (occupation.length < 2) {
      setOccupationError("Utbildning/yrke måste vara minst 2 tecken");
      isValid = false;
    }
    if (allergies.length > 0) {
      if (!allergies.match(nameRegex)) {
        setAllergiesError(
          "Allergier får endast innehålla bokstäver och mellanslag"
        );
        isValid = false;
      }
    }

    if (isValid) {
      try {
        const data = {
          firstName: firstname,
          lastName: lastname,
          email: email,
          eventPageSlug: { connect: { slug: slug } },
          photoConsent: photoConsent,
          allergies: allergies,
          occupation: occupation,
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
      setOccupation("");
    }
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
  const handleOccupationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(e.target.value);
  };

  return (
    <section className="event-signup">
      <div className="event-signup-container">
        <div className="form-container">

          <form onSubmit={handleSubmit} name="NewsletterSignup">
          <h2>Anmäl dig till eventet!</h2>
            <div className="form-child">
              <label htmlFor="event-firstname">
                Förnamn: <span className="required">*</span>
              </label>
              <input
                id="event-firstname"
                name="event-firstname"
                type="text"
                aria-label="Förnamn"
                className="smaller-input"
                value={firstname}
                onChange={handleFirstnameChange}
              />
              {firstnameError && <p className="error">{firstnameError}</p>}
            </div>
            <div className="form-child">
              <label htmlFor="event-lastname">
                Efternamn: <span className="required">*</span>
              </label>
              <input
                id="event-lastname"
                name="event-lastname"
                type="text"
                aria-label="Efternamn"
                className="smaller-input"
                value={lastname}
                onChange={handleLastnameChange}
              />
              {lastnameError && <p className="error">{lastnameError}</p>}
            </div>
            <div className="form-child">
              <label htmlFor="event-email">
                Email: <span className="required">*</span>
              </label>
              <input
                id="event-email"
                name="event-email"
                type="email"
                aria-label="Email"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && <p className="error">{emailError}</p>}
            </div>
            <div className="form-child">
              <label htmlFor="occupation">
                Utbildning eller sysselsättning:
                <span className="required">*</span>
              </label>
              <input
                id="occupation"
                name="occupation"
                type="text"
                aria-label="Utbildning eller sysselsättning"
                value={occupation}
                onChange={handleOccupationChange}
              />
              {occupationError && <p className="error">{occupationError}</p>}
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
              {allergiesError && <p className="error">{allergiesError}</p>}
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
              {message === "SUCCESS" &&   <>
              <p>Tack för din anmälan! En bekräftelse kommer på mail.</p>
              <p className="gdpr-text">
                Pssst! Ibland hamnar vi i skärpkorgen, så kolla där om du inte får något mail!
              </p>
            </>}
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
