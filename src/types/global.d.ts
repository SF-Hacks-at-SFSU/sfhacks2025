/* 
I found multiple ways to write a declaration file for the process environment such as:
- https://bobbyhadz.com/blog/typescript-process-env-type
- https://www.totaltypescript.com/how-to-strongly-type-process-env
I decided to go with the 2nd one because it didn't require writing `export {}` which felt very hacky.
Plus, the current one is more consistent with how nextJS declares its NODEE_ENV in process.env
*/

declare namespace NodeJS {
	interface ProcessEnv {
		/**
		 * The base path to the deployment of the site.
		 * This is neccessary for deploying to GitHub Pages as the base path affects how assets, routes, CSS, etc. are referenced after building.
		 *
		 * The environment variable is outputted by GitHub pages during build time.
		 * You can see where the variable is being assigned in the local nextjs.yml file
		 *
		 * If you rename this variable, make sure to update its name in .github/workflows/nextjs.yml.
		 * The variable is named `NEXT_PUBLIC_BASE_PATH` so that the variable is available to the browser via `npm run dev`.
		 * It used to be called `GITHUB_PAGES_BASE_PATH` because it made more sense,
		 * but I didn't want to call it `NEXT_PUBLIC_GITHUB_PAGES_BASE_PATH` because that is just ridiculous.
		 *
		 * @see https://github.com/nextjs/deploy-github-pages/blob/main/next.config.ts
		 */
		NEXT_PUBLIC_BASE_PATH: string | undefined;
	}
}
