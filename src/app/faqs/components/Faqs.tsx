import React from "react";
import "../styles.css";

function FAQ() {
	return (
		<ul className="faqContainer">
			{data.map((question, questionIndex) => (
				<li key={questionIndex}>
					<details className="faqQuestion">
						<summary>{question.question}</summary>
						<div>{question.answer}</div>
					</details>
				</li>
			))}
		</ul>
	);
}

type qnaType = {
	question: string;
	answer: React.ReactNode;
};

const data: qnaType[] = [
	{
		question: "What is a Hack-a-thon? ",
		answer: (
			<p>
				A hackathon is a 48-hour event where individuals get together for a
				short period of time to collaborate on a project. Participants work
				rapidly and often work in groups to achieve their tasks.
			</p>
		),
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
	{
		question: "Is there travel reimbursements?",
		answer: "Unfortunately, we will not be able to reimburse travel costs.",
	},
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
			<p>
				You may email us at{" "}
				<span>
					<a
						href="mailto:sfhacksteam@gmail.com"
						className=" pointer-events-auto text-sfPink hover:underline"
					>
						sfhacksteam@gmail.com
					</a>
				</span>
			</p>
		),
	},
];

export default FAQ;
