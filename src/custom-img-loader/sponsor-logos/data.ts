export type SponsorsDatum = {
	name: string
	path: string
	isCurrent: boolean

	tier?: SponsorTier
	url?: string
}

export type SponsorTier = (typeof sponsorTier)[keyof (typeof sponsorTier)]

export const sponsorTier = {
	platinum: "platinum",
	gold: "gold",
	silver: "silver",
	bronze: "bronze",
	specialThanks: "specialThanks",
} as const

const data: SponsorsDatum[] = [
	{
		name: "Browserbase",
		path: "/sponsor-logos/current/BrowserBase.png",
		isCurrent: false,

		tier: "gold",
		url: "https://www.browserbase.com/"
	},
	{
		name: "SFSU Department of Computer Science",
		path: "/sponsor-logos/current/SFSU-CSDepartment.svg",
		isCurrent: false,

		tier: "gold",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://cs.sfsu.edu"
	},
	{
		name: "Gilead Sciences",
		path: "/sponsor-logos/current/Gilead.svg",
		isCurrent: false,

		tier: "gold",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://www.gilead.com"
	},
	{
		name: "SFSU College of Science and Engineering",
		path: "/sponsor-logos/current/CoSE.svg",
		isCurrent: false,

		tier: "gold",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://cose.sfsu.edu"
	},
	{
		name: "Innovation & Entrepreneurship at San Francisco State University",
		path: "/sponsor-logos/current/IE.png",
		isCurrent: false,

		tier: "silver",
		url: "https://cob.sfsu.edu/initiatives-centers/innovation-entrepreneurship-programs"
	},
	{
		name: "TensorStax",
		path: "/sponsor-logos/current/TensorStax.svg",
		isCurrent: false,

		tier: "silver",
		url: "https://tensorstax.com/"
	},
	{
		name: "Management Leadership for Tomorrow",
		path: "/sponsor-logos/current/MLT.png",
		isCurrent: false,

		tier: "bronze",
		url: "https://mlt.org/career-prep/"
	},
	{
		name: "Inductive Automation",
		path: "/sponsor-logos/current/InductiveAutomation.png",
		isCurrent: false,

		tier: "bronze",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://inductiveautomation.com"
	},
	{
		name: "CodePath",
		path: "/sponsor-logos/current/CodePath.png",
		isCurrent: false,

		tier: "bronze",
		url: "https://www.codepath.org"
	},
	//
	{
		name: "Lam-Larsen Initiative in Emerging Technologies",
		path: "/sponsor-logos/current/LamLarsen.png",
		isCurrent: false,

		tier: "bronze",
		url: "https://www.codepath.org"
	},
	//
	{
		name: "Momen",
		path: "/sponsor-logos/current/Momen.svg",
		isCurrent: false,

		tier: "bronze",
		url: "https://momen.app"
	},
	//
	{
		name: "Fastly",
		path: "/sponsor-logos/current/Fastly.svg",
		isCurrent: false,

		tier: "specialThanks", // idk what an a la carte sponsorship level is but imma jsut put bronze
		url: "https://www.fastly.com/"
	},
	{
		name: "StandOut Stickers",
		path: "/sponsor-logos/current/stand-out-stickers-logo.png",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "http://hackp.ac/mlh-StandOutStickers-hackathons"
	},
	{
		name: "Associated Students",
		path: "/sponsor-logos/current/AS.png",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://asi.sfsu.edu"
	},
	{
		name: "Association for Computing Machinery",
		path: "/sponsor-logos/current/ACM.svg",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://www.instagram.com/acm.sfsu"
	},
	{
		name: "Lam Family College Of Business at San Francisco State University",
		path: "/sponsor-logos/current/lamFamily.png",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://cob.sfsu.edu"
	},
	{
		name: "Dead Eye Coffee Bar",
		path: "/sponsor-logos/current/DeadEye.png",
		isCurrent: false,

		tier: "specialThanks",
		// This link was grapped directly from their page because I couldn't find it in the Notion document
		url: "https://deadeyecoffeebar.com"
	},
	{
		name: "SFSU Game Development Club",
		path: "/sponsor-logos/current/SFSUGameDev.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Computer Science Research",
		path: "/sponsor-logos/current/SFSUCSResearch.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Algorithms Club",
		path: "/sponsor-logos/current/SFSUAlgorithms.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Bit Bots Club",
		path: "/sponsor-logos/current/SFSUBitBots.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Society of Women Engineers",
		path: "/sponsor-logos/current/SFSUSWE.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU ColorStack Club",
		path: "/sponsor-logos/current/SFSUColorStack.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Cybersecurity Club",
		path: "/sponsor-logos/current/SFSUCybersecurity.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},

	{
		name: "SFSU 3D Printing and Design Club",
		path: "/sponsor-logos/current/SFSU3DPrinting.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU SparkSF Club",
		path: "/sponsor-logos/current/SFSUSparkSF.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "SFSU Data Science Society",
		path: "/sponsor-logos/current/SFSUDSS.svg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},
	{
		name: "Delta Sigma Pi Delta Omicron",
		path: "/sponsor-logos/current/DeltaSigmaPi_DeltaOmicron.jpg",
		isCurrent: false,

		tier: "specialThanks",
		url: undefined
	},

] as const

export default data
