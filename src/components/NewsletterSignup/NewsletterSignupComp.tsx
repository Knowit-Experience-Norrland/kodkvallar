import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

// newsletter signup component, with form and mutation to create newsletter signup
const NewsletterSignupComp = () => {
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

  //create query
  const CREATE_NEWSLETTERSIGNUP = gql(`
  mutation createNewsletterSignup($data: NewsletterSignupCreateInput!) {
    createNewsletterSignup(data: $data) {
      email
      lastName
      firstName
    }
  }
    `);

  const [createNewsletterSignup] = useMutation(CREATE_NEWSLETTERSIGNUP);

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
        const data = { firstName: firstname, lastName: lastname, email: email };
        createNewsletterSignup({ variables: { data } });
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
    <section className="newsletter-signup">
      <div className="form-container">
        <p className="bold">
          Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna!
        </p>

        <div>
          {message === "SUCCESS" && (
            <>
              <p>Tack för att du vill prenumerera på vårt nyhetsbrev!</p>
              <p className="gdpr-text">
                Pssst! Ibland hamnar vi i skärpkorgen, så kolla där om du inte får något mail!
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
          <button type="submit">Prenumerera</button>
        </form>
        {firstnameError && <p className="error">{firstnameError}</p>}
        {lastnameError && <p className="error">{lastnameError}</p>}
        {emailError && <p className="error">{emailError}</p>}
        <p className="gdpr-text">
          Genom att prenumerera godkänner du att vi lagrar ovan information.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignupComp;
