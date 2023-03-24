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
  const [createNewsletterSignup, { loading }] = useMutation(CREATE_NEWSLETTERSIGNUP);
//   if (loading) return <p>Loading...</p>;

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

    return (
      <div>
        {message === "SUCCESS" && (
          <div>
            <p>Thank you for subscribing to our newsletter!</p>
          </div>
        )}
        {message === "ERROR" && (
          <div>
            <p>Something went wrong. Please <button onClick={() => setMessage(null)}>try again</button></p>
          </div>
        )}
        {message === null && (
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
         </section>
               ) }
      </div>
    );
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
    </section>
  );
};

export default NewsletterSignupComp;
