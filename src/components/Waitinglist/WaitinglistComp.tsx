import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_WAITINGLIST_SIGNUP } from "../../Queries/mutations";

interface WaitinglistProps {
  slug: string | undefined;
}

const WaitinglistComp = ({ slug }: WaitinglistProps) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  //error messages
  const [firstnameError, setFirstnameError] = useState<string | null>(null);
  const [lastnameError, setLastnameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  // Regular expressions for input validation
  const nameRegex = /^[A-Öa-ö\s]+$/; // Accepts only letters and whitespace
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation 

  //   use mutation hook for creating waitinglist signup 
  const [createWaitingListEvent] = useMutation(CREATE_WAITINGLIST_SIGNUP);

  //   handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //reset error msg
    setFirstnameError(null);
    setLastnameError(null);
    setEmailError(null);

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

    if (isValid) {
      try {
        const data = {
          firstName: firstname,
          lastName: lastname,
          email: email,
          eventPage: { connect: { slug: slug } },
        };
        createWaitingListEvent({ variables: { data } });
        setMessage("SUCCESS");
      } catch (err) {
        setMessage("ERROR");
        console.log(err);
      }
      setFirstname("");
      setLastname("");
      setEmail("");
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
              <p>Tack för din anmälan till väntelistan!</p>
              <p className="gdpr-text">
                Pssst! Ibland hamnar vi i skärpkorgen..
              </p>
            </>
          )}
          {message === "ERROR" && <p>Något gick fel. Vänligen försök igen.</p>}
        </div>
        <form onSubmit={handleSubmit} name="NewsletterSignup">
          <div className="form-child">
            <label htmlFor="firstname">
              Förnamn: <span className="required">*</span>
            </label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              aria-label="Förnamn"
              value={firstname}
              onChange={handleFirstnameChange}
            />
          </div>
          <div className="form-child">
            <label htmlFor="lastname">
              Efternamn: <span className="required">*</span>
            </label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              aria-label="Efternamn"
              value={lastname}
              onChange={handleLastnameChange}
            />
          </div>
          <div className="form-child">
            <label htmlFor="email">
              Email: <span className="required">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              aria-label="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit">Ställ dig i kö!</button>
        </form>
        {firstnameError && <p className="error">{firstnameError}</p>}
        {lastnameError && <p className="error">{lastnameError}</p>}
        {emailError && <p className="error">{emailError}</p>}
        <p className="gdpr-text">
          Genom att anmäla dig godkänner du att vi lagrar ovan information.
        </p>
      </div>
    </section>
  );
};

export default WaitinglistComp;
