import React from "react";
import FAQ from "./components/Faqs";

export default function FAQPage() {
	return (
		<main>
			<h1>Frequently Asked Questions!</h1>
			<strong>
				<a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">
					MLH Code of Conduct
				</a>
			</strong>

			<FAQ />
		</main>
	);
}
