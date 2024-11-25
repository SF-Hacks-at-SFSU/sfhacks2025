"use client";

import { useState } from "react";
import "../styles.css";

function FAQ() {
  // Added a default value to the `open` state variable.
  const [open, setOpen] = useState(false);

  // Added a `handleClose` function to close the FAQ item.
  const handleClose = () => setOpen(false);

  // Added a `handleToggle` function to toggle the FAQ item open and closed.
  const handleToggle = (i) => {
    if (open === i) {
      handleClose();
    } else {
      setOpen(i);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
        <h1 className="faq-banner-text">Frequently Asked Questions!</h1>
      <div className="faq-banner">
      </div>
      <div className="faq-main">
        {data.map((item, i) => (
          <div key={i}>
            <div
              open={open === i}
              className="faq-questions"
              onClick={() => handleToggle(i)}
            >
              <ul className="faq-list">
                <li className="faq-ques">
                  {item.question} <span>+</span>
                </li>
              </ul>
            </div>
            {open === i && (
              <div className="answer-visible p-3 rounded-md">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

const data = [
  {
    question: "What is a Hack-a-thon? ",
    answer:
      "A hackathon is a 24-hour event where individuals get together for a short period of time to collaborate on a project. Participants work rapidly and often work in groups to achieve their tasks.",
  },
  {
    question: "I have no prior hacking experience, can I still participate?",
    answer:
      'Yes! While the word "hack" is in hackathon, hackathons are primarily focused on the coding used for building projects.',
  },
  {
    question: "Who can attend and do I have to know coding?",
    answer:
      "No prior knowledge of computer science is needed! We encourage all levels of coders to attend. In our events, we dedicate officers/mentors/tutors to help all hackers find their beginnings in CS.",
  },
  // {
  //   question: 'When does the event start?',
  //   answer: 'The event starts on April 5th and last until April 7th.'
  // },
  // {
  //   question: 'Where is the venue located?',
  //   answer: 'The event is located at Annex I, 1 N State Dr, San Francisco, CA 94132'
  // },
  // {
  //   question: 'What’s the cost for attendance?',
  //   answer: 'It’s a free event hosted by the SF Hacks Team at San Francisco State University.'
  // },
  // {
  //   question: 'Is there travel reimbursements?',
  //   answer: 'Unfortunately, we will not be able to reimburse travel costs.'
  // },
  {
    question: "Do I work by myself or with teams?",
    answer:
      "You can work either in a solo project, or you can choose to work with other students as a team.",
  },
  {
    question: "Who will I meet at the event?",
    answer:
      "You will meet other students, event organizers, or even company/sponsor representatives.",
  },
  {
    question: "Is there a theme for the project?",
    answer:
      "Yes, there is a theme planned for the event. We'll unveil it as we approach the event date.",
  },
  {
    question: "How can I get possible project ideas?",
    answer:
      "Check Devpost! Devpost is a website where hackathon results are displayed. Check the pages of previous hackathons for ideas!",
  },
  {
    question: "How do I prepare in general?",
    answer:
      "Think of what you want to build, what tools you want to use, and reach out to potential teammates to brainstorm together.",
  },
  {
    question: "Is there a code of conduct?",
    answer: (
      <p>
        {" "}
        Yes! Check it out{" "}
        <a
          className="underline font-bold"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    ),
  },
  {
    question: "What other events will be held in the convention?",
    answer:
      "There will be a host of events including workshops from sponsors and ACM student leaders, panels, showcases, and fun mini-games!",
  },
  {
    question: "Where can I contact you for any questions or support?",
    answer: (
      <p className="">
        {" "}
        You may email us at{" "}
        <a
          href="mailto:sfhacksteam@gmail.com"
          className=" pointer-events-auto text-sfPink hover:underline"
        >
          sfhacksteam@gmail.com{" "}
        </a>
      </p>
    ),
  },
];

export default FAQ;
