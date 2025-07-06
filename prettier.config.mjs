/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 *
 * NOTE: The Prettier vscode extension might need a restart if the config is changed.
 * However, the config updates properly when running with CLI/Terminal
 */
export default {
	useTabs: true,
	tabWidth: 2,
	// If you are changing quote rules, don't forget to update the quote rules in .vscode/settings.json
	singleQuote: false,
	trailingComma: "es5",
	semi: true,
	bracketSpacing: true,
	singleAttributePerLine: true,
	bracketSameLine: false,
};
