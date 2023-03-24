import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

const NewsletterSignupComp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const CREATE_NEWSLETTERSIGNUP = gql(`
  mutation Mutation($data: NewsletterSignupCreateInput!) {
    createNewsletterSignup(data: $data) {
      email
      lastName
      firstName
    }
  }
    `);
  const [createNewsletterSignup] = useMutation(CREATE_NEWSLETTERSIGNUP);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const data = { "firstName":firstname, "lastName":lastname,"email":email };
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
    <section>
      <div>NewsletterSignupComp</div>
      <form onSubmit={handleSubmit} name="NewsletterSignup">
        <input
          name="firstname"
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={handleFirstnameChange}
          required
        />
        <input
          name="lastname"
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={handleLastnameChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
     <div>
        {message === "SUCCESS" && (
            <p>Thank you for subscribing to our newsletter!</p>
        )}
        {message === "ERROR" && (
            <p>Something went wrong. Please try again.</p>
        )}
        {message === null && (
            <p>Subscribe to our newsletter to get the latest news and updates.</p>
        )}
     </div>
    </section>
  );
};

export default NewsletterSignupComp;
