export type SponsorsDatum = {
  name: string,
  path: string,
  tier?: Tier,
  isCurrent: boolean
}

export type Tier = "first" | "second" | "third"