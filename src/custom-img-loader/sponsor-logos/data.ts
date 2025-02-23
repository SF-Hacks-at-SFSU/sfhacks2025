export type SponsorsDatum = {
	name: string
	path: string
	tier?: SponsorTier
	isCurrent: boolean
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
		name: "OpenAI",
		path: "sponsor-logos/past/OpenAI_Logo.png",
		isCurrent: false
	},
	{
		name: "Google Cloud",
		path: "sponsor-logos/past/gcloud.png",
		isCurrent: false
	},
	{
		name: "Browserbase",
		path: "sponsor-logos/past/browser-base.png",
		isCurrent: false,
	},
	{
		name: "Zuora",
		path: "sponsor-logos/past/Zuora_logo.png",
		isCurrent: false
	},
	{
		name: "Notion",
		path: "sponsor-logos/past/Notion_logo.png",
		isCurrent: false
	},
	{
		name: "Fireworks",
		path: "sponsor-logos/past/Fireworks.svg",
		isCurrent: false
	},
	{
		name: "Fastly",
		path: "sponsor-logos/past/fastly-ar21.svg",

		isCurrent: false
	},
	{
		name: "MongoDB",
		path: "sponsor-logos/past/MongoDB_White.svg",

		isCurrent: false
	},
	{
		name: "ByteDance",
		path: "sponsor-logos/past/ByteDance_logo.png",

		isCurrent: false
	},
	{
		name: "SFSU Department of Computer Science",
		path: "sponsor-logos/past/csdep_logo.svg",

		isCurrent: false
	},
	{
		name: "SFSU College of Science and Engineering",
		path: "sponsor-logos/past/COSE_logo.svg",

		isCurrent: false
	},
	{
		name: "Art of Problem Solving",
		path: "sponsor-logos/past/AOPS_Logo.png",
		isCurrent: false
	},
	{
		name: "Axure",
		path: "sponsor-logos/past/Axure_logo_400.svg",
		isCurrent: false
	},
	{
		name: "Balsamiq",
		path: "sponsor-logos/past/balsamiq_logo.png",
		isCurrent: false
	},
	{
		name: "Celcius",
		path: "sponsor-logos/past/Celcius_logo.png",
		isCurrent: false
	},
	{
		name: "Cisco",
		path: "sponsor-logos/past/Cisco_logo.png",
		isCurrent: false
	},
	{
		name: "Management Leadership for Tomorrow",
		path: "sponsor-logos/past/Colored_MLT_Logo.png",
		isCurrent: false,
	},
	{
		name: "Desmos",
		path: "sponsor-logos/past/Desmos_logo.svg",
		isCurrent: false
	},
	{
		name: "echo3D",
		path: "sponsor-logos/past/Echo3D_logo.png",
		isCurrent: false
	},
	{
		name: "Games For Love",
		path: "sponsor-logos/past/Games_For_Love_logo.png",
		isCurrent: false
	},
	{
		name: "Humane",
		path: "sponsor-logos/past/Humane_logo.png",
		isCurrent: false
	},
	{
		name: "Ike's",
		path: "sponsor-logos/past/Ikes_logo.svg",
		isCurrent: false
	},
	{
		name: "Kaiser Permanente",
		path: "sponsor-logos/past/Kaiser_Permanente.png",
		isCurrent: false
	},
	{
		name: "Lam-Larsen Initiative in Emerging Technologies",
		path: "sponsor-logos/past/LamLarsen.png",
		isCurrent: false
	},
	{
		name: "Marvell",
		path: "sponsor-logos/past/Marvell_Logo.svg",
		isCurrent: false
	},
	{
		name: "Neurelo",
		path: "sponsor-logos/past/Neurelo_logo.png",
		isCurrent: false
	},
	{
		name: "StandOut Stickers",
		path: "sponsor-logos/current/stand-out-stickers-logo.png",
		isCurrent: true
	},
	{
		name: "Sticker Mule",
		path: "sponsor-logos/past/Sticker_Mule_logo.svg",
		isCurrent: false
	},
	{
		name: "Vectara",
		path: "sponsor-logos/past/Vectara_Logo.svg",
		isCurrent: false
	},
	{
		name: "Verb",
		path: "sponsor-logos/past/Verb_logo.svg",
		isCurrent: false
	},
	{
		name: "Workday",
		path: "sponsor-logos/past/Workday_logo.png",
		isCurrent: false
	},
	{
		name: ".xyz",
		path: "sponsor-logos/past/xyz-logo-color.svg",
		isCurrent: false
	},
	{
		name: "Associated Students",
		path: "sponsor-logos/current/AS.png",
		isCurrent: true
	},
	{
		name: "Association for Computing Machinery",
		path: "sponsor-logos/current/ACM.svg",
		isCurrent: true
	},
	{
		name: "Innovation & Entrepreneurship at San Francisco State University",
		path: "sponsor-logos/current/IE.png",
		isCurrent: true
	},
	{
		name: "Lam Family College Of Business at San Francisco State University",
		path: "sponsor-logos/current/lamFamily.png",
		isCurrent: true
	}
] as const

export default data