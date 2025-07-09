/**
 * To configure the eslint rules with ease, run this in the terminal:
 * npx eslint --inspect-config
 *
 * Blog Post about this new config system (flat config): https://eslint.org/blog/2022/08/new-config-system-part-2/
 * ESLint's Docs on Configuration: https://eslint.org/docs/latest/use/configure/
 * Next's Docs on ESLint Plugin: https://nextjs.org/docs/app/api-reference/config/eslint#with-core-web-vitals
 * The config style isn't based off of Next's documentation but instead is a mix of TS ESLint and this article: https://stackoverflow.com/a/79577022
 * Typescript ESLint Docs on config: https://typescript-eslint.io/getting-started/typed-linting
 */

import { flatConfig as pluginNext } from "@next/eslint-plugin-next";
/** Just leaving this here in case you want to use the config */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import eslintConfigPrettier from "eslint-config-prettier/flat";

import tseslint from "typescript-eslint";

export default tseslint.config(
	/**
	 * The reason I'm not using eslint-plugin-prettier so that ESLint formats in Prettier's style is because I'm waiting for prettier-eslint v17 which supports ESLint flat config
	 *
	 * eslint-plugin-prettier: https://github.com/prettier/eslint-plugin-prettier
	 * prettier-eslint v17: https://github.com/prettier/prettier-eslint/releases
	 */
	{
		name: "config-sfhacks",
		ignores: [".next/**"],

		extends: [
			pluginNext.coreWebVitals,
			tseslint.configs.recommendedTypeChecked,
			/**
			 * This config isn't really necessary because modern linters shouldn't have formatter rules anymore according to this article: https://typescript-eslint.io/users/what-about-formatting#problems-with-using-linters-as-formatters
			 * But just in case, I'll just leave it here. It's commented out because it adds like 300+ rules that are deprecated or unused by ESLint
			 * eslintConfigPrettier should be the last one in the extends list: https://typescript-eslint.io/users/what-about-formatting#suggested-usage---prettier
			 */
			// eslintConfigPrettier,
		],
		rules: {
			"no-compare-neg-zero": "error",
			"prefer-const": "warn",
			"@typescript-eslint/no-base-to-string": "error",
			"@typescript-eslint/no-unused-vars": "warn",
			"@typescript-eslint/no-empty-object-type": "warn",
			"@typescript-eslint/no-unused-vars": "warn",
		},
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	}
);
