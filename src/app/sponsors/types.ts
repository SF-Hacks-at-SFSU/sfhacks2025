import sponsorsData from "@/custom-img-loader/sponsor-logos/data.json";


export type SponsorsDatum = {
  name: string,
  path: string,
  tier?: Tier,
  isCurrent: boolean
}

export type Tier = "first" | "second" | "third"