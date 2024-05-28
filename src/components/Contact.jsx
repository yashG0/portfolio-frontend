import React, { useState } from 'react';
import Header from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    // Handle form submission
    console.log(JSON.stringify(formData));
    fetch("https://portfolio-backend-2-production.up.railway.app/api/form/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Server Response:", data);

        // Clear form
        setName("");
        setEmail("");
        setMessage("");

        // Show alert
        alert("You've submitted data!");
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <>
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#81b3e2] opacity-50 blur-[80px]"></div>
      </div>

      <div className="h-full w-full flex flex-col">
        <Header />
        <div className="text-black text-center text-3xl uppercase mt-12">Contact Me</div>

        {/* CONTACT INPUTS */}
        <section className="flex flex-grow justify-center items-center px-4 py-10">
          <div className="border border-gray-500 rounded-lg w-full md:w-1/2 shadow-sm shadow-gray-900 p-8">
            <h2 className="text-2xl font-semibold text-center mb-4">Let's Talk</h2>

            <form className="space-y-4" onSubmit={onSubmit}>
              <div>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-500"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-500"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <Textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className="w-full px-3 py-2 rounded-lg border border-gray-500"
                  placeholder="Write your message here..."
                  required
                ></Textarea>
              </div>
              <Button type="submit">
                Submit
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
