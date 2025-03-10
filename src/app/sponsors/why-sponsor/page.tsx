import "./styles.css";

export default function WhySponsorPage() {
	return (
		<main>
			<h1>Why Sponsor Us?</h1>
			<p>
				Join us in empowering the next generation of tech leaders. SF Hacks
				brings together 400 talented hackers for a 48-hour hackathon full of
				innovation, collaboration, and creativity.
			</p>
			<div className="customGridContainer">
				<section className="card">
					<h3>Promote Your Brand</h3>
					<p className="text-center">
						Showcase your organization to a global audience of tech-savvy
						students and professionals. Build your brand’s reputation as a
						leader in innovation.
					</p>
				</section>
				<section className="card">
					<h3>Access Top Talent</h3>
					<p>
						Connect with some of the brightest minds in tech and discover
						potential interns, employees, or collaborators for your next big
						project.
					</p>
				</section>
				<section className="card">
					<h3>Engage with Hackers</h3>
					<p>
						Host workshops, sponsor challenge tracks, and provide proprietary
						tools to guide hackers in creating impactful projects.
					</p>
				</section>
				<section className="card">
					<h3>Support Innovation</h3>
					<p>
						Play a crucial role in advancing technology by providing mentorship,
						resources, and prizes that empower hackers to think outside the box.
					</p>
				</section>
			</div>

			<h2 className="bg-sfyellow text-black">Ready to Inspire Innovation?</h2>
			<p>
				Contact us today to learn how you can contribute to SF Hacks 2025 and
				make a lasting impact.
			</p>
			<a
				href="mailto:sfhacksteam@gmail.com"
				className="button specialButton"
			>
				Contact Us!
			</a>
		</main>
	);
}
