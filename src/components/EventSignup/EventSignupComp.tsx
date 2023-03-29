import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";

// recive id from EventSignupComp.tsx, send data from API and print to DOM
interface EventSignupCompProps {
    id: number;
}

const EventSignupComp = ({id}: EventSignupCompProps) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  // send data from API
  const CREATE_EVENTSIGNUP = gql(`
  mutation createEventSignup($data: EventSignupCreateInput!) {
    createEventSignup(data: $data) {
        email
        firstName
        eventPage {
          eventId
        }
        lastName
      }
    }
    `);
  const [createEventSignup] = useMutation(CREATE_EVENTSIGNUP);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const data = { "firstName":firstname, "lastName":lastname,"email":email, "eventPage": { "connect": { "eventId": id } }  };
        createEventSignup({ variables: { data } });
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
      <div>EventSignupComp</div>
      <form onSubmit={handleSubmit} name="EventSignup">
        <input
          name="firstname"
          type="text"
          placeholder="Förnamn"
          value={firstname}
          onChange={handleFirstnameChange}
          required
        />
        <input
          name="lastname"
          type="text"
          placeholder="Efternamn"
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
        <button type="submit">Anmäl</button>
      </form>
      {/* print to DOM */}
     <div>
        {message === "SUCCESS" && (
            <p>Tack för din anmälan!</p>
        )}
        {message === "ERROR" && (
            <p>Något gick fel. Vänligen försök igen.</p>
        )}
        {message === null && (
            <p>Anmäl dig till eventet!</p>
        )}
     </div>
    </section>
  );
};

export default EventSignupComp;
