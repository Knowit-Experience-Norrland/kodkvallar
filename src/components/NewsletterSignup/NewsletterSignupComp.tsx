import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

// newsletter signup component, with form and mutation to create newsletter signup
const NewsletterSignupComp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

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
      <div>
        {message === "SUCCESS" && (
          <p>Tack för att du vill prenumerera på vårt nyhetsbrev!</p>
        )}
        {message === "ERROR" && <p>Något gick fel. Vänligen försök igen.</p>}
        {message === null && (
          <p>Prenumerera på vårt nyhetsbrev för att få de senaste nyheterna!</p>
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
        <button type="submit">Prenumerera</button>
      </form>
    </section>
  );
};

export default NewsletterSignupComp;
