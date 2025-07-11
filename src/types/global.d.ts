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
		 * Theoretically, this is the environment variable GitHub Pages outputs for the website
		 * @see https://github.com/nextjs/deploy-github-pages/blob/main/next.config.ts
		 */
		PAGES_BASE_PATH: string;
	}
}
