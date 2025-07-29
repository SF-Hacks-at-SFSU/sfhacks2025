// https://github.com/lint-staged/lint-staged?tab=readme-ov-file#using-js-configuration-files
export default {
	"*": ["eslint --fix", "prettier --ignore-unknown --write"],
};
