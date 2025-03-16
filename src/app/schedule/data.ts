export type EventDatum = {
  start: string,
  end: string,
  name: string,
  description: string,
  location?: string
}

export const events: EventDatum[] = [
  {
    start: "1",
    end: "1",
    name: "ah",
    description: "cdjb"
  }
] as const

export const day1: EventDatum[][] = [
  [
    //general
    {
      start: "2:30 PM",
      end: "3:30 PM",
      name: "Check Ins",
      description: "Hackers will check in",
    },
    {
      start: "3:30 PM",
      end: "4:00 PM",
      name: "Opening Ceremony",
      description: "The Hacking Begins!",
    },

    {
      start: "7:30 PM",
      end: "8:00 PM",
      name: "Dinner",
      description: "Devour some amazing food from Taqueria (VG, HA)",
    },
    {
      start: "11:00 PM",
      end: "12:00 AM",
      name: "Midnight Snacks",
      description: "Foood!",
    },
  ],
  [
    //workshop1
    {
      start: "4:00 PM",
      end: "5:00 PM",
      name: "Coze: AI Bot Creation w/ Joshua Alphonse",
      description:
        "Next-generation AI chatbot building platform. Quickly create bots without coding and publish them on various platforms",
    },
    {
      start: "5:15 PM",
      end: "6:15 PM",
      name: "Mongo DB: Representing Meaning In Numbers With & Looking Them Up ",
      description:
        "Master MongoDB and vector search to enhance your project with efficient data retrieval.",
    },
    {
      start: "6:30 PM",
      end: "7:30 PM",
      name: "Notion Workshop w/ Giahuy Dang ",
      description: "Learn how to increase your productivity using Notion.",
    },
  ],
  [
    // worksjop 2
    {
      start: "4:00 PM",
      end: "5:00 PM",
      name: "Github Copilot Workshop with MLH",
      description:
        "Learn about how to use GitHub Copilot from MLH Coach Mansi.",
    },
    {
      start: "5:15 PM",
      end: "6:15 PM",
      name: "Neurelo Data API workshop w/ George Sumpster",
      description: "Boost your hackathon project's speed with AI-powered auto-generated Data APIs for MongoDB and PostgreSQL",
    },
    {
      start: "6:30 PM",
      end: "7:30 PM",
      name: "Fireworks AI Workshop w/ Raymond Thai",
      description: "",
    },
  ],
  [
    // sponsors
  ],
  [
    // misc
    {
      start: "9:00",
      end: "9:30",
      name: "Team Bulding Activity ",
      description: "Ice Breakers/Scavenger Hunt",
    },
  ],
];
export const day2: EventDatum[][] = [
  [
    //general
    {
      start: "8:00 AM",
      end: "8:30 AM",
      name: "Doors Open",
      description: "Those that left may return",
    },
    {
      start: "9:00 AM",
      end: "9:30 AM",
      name: "Breakfast",
      description: "Noah’s Bagel (VG, HA)",
    },
    {
      start: "1:00 PM",
      end: "2:00 PM",
      name: "Lunch",
      description:
        "Obliderate your hunger with Ike’s Sandwhiches (VG, V, HA)",
    },
    {
      start: "2:00 PM",
      end: "3:00 PM",
      name: "Women In Tech Panel (Golden Gate Park Room)",
      description:
        "Hear about our panelist's experiences as women in the technology industry.",
    },

    {
      start: "6:00 PM",
      end: "7:00 PM",
      name: "POC in Tech Panel (Treasure Island Room)",
      description:
        "Hear about our panelist's experiences as people of color in the technology industry.",
    },
    {
      start: "8:00 PM",
      end: "9:00 PM",
      name: "Dinner",
      description: "Feast on some Costco Pizza (VG, HA)",
    },
  ],
  [
    //workshop1
    {
      start: "5:00 PM",
      end: "6:00 PM",
      name: "Workshop w/ Jon Wolheim: Neuroscience in Games: Applying Game Tech to Your World (Pier 39 Room)",
      description: "Learn how to save lives by making awesome games",
    },
    {
      start: "7:00 PM",
      end: "10:30 PM",
      name: "Game Dev SIG workshop (Golden Gate Park Room)",
      description:
        "Learn the basics of creating groundbreaking gaming experiences",
    },
  ],
  [
    // worksjop 2
  ],
  [
    // sponsors
  ],
  [
    // misc
    {
      start: "10:00 AM",
      end: "10:30 AM",
      name: "Merchandise Handout",
      description: "Enjoy all of the splended goodies",
    },
    {
      start: "3:00PM",
      end: "4:00PM",
      name: "Would You Rather (Treasure Island Room)",
      description: "Enjoy all of the splended goodies",
    },
    {
      start: "4:00 PM",
      end: "5:00 PM",
      name: "Mini-event: Painting/Watercolor (Golden Gate Park Room)",
      description: "Hone in your artistic side and learn painting techniques",
    },
    {
      start: "9:00 PM",
      end: "9:30 PM",
      name: "Karaoke (Golden Gate Park Room)",
      description: "Show off your singing skills.",
    },
    {
      start: "11:00 PM",
      end: "11:30 PM",
      name: "Mini-event: Paper airplanes (Hallway)",
      description: "Learn how to make paper airplanes",
    },
    {
      start: "2:00 AM",
      end: "3:00 AM",
      name: "Mini-event: Board Game night (Tables in the Main Annex)",
      description: "Stay up late and play some games",
    },
  ],
];
export const day3: EventDatum[][] = [
  [
    //general
    {
      start: "8:00 AM",
      end: "8:30 AM",
      name: "Doors Open",
      description: "Those who left may return",
    },
    {
      start: "9:00 AM",
      end: "9:30 AM",
      name: "Breakfast",
      description:
        "Enjoy some coffee and breakfast with Noah's Bagel (VG, HA)",
    },
    {
      start: "10:30 AM",
      end: "11:00 AM",
      name: "Project Submission deadline",
      description: "Submit your project by 11:00 AM",
    },

    {
      start: "11:30 AM",
      end: "1:00 PM",
      name: "Project Judging",
      description: "Relax and take a breather while your project gets judged",
    },

    {
      start: "2:00 PM",
      end: "4:00 PM",
      name: "Winners revealed",
      description: "Celebrate those who won",
    },
  ],
  [
    //workshop1
  ],
  [
    // worksjop 2
  ],
  [
    // sponsors
  ],
  [
    // misc
    {
      start: "1:10 PM",
      end: "2:00 PM",
      name: "SF State Alumni Panel (Main stage)",
      description:
        "Hear about our panelist's experiences as alumni of San Francisco State University.",
    },
    {
      start: "2:00 PM",
      end: "2:15 PM",
      name: "Dance Party",
      description: "Learn how to dance and sing like your favorite idol.",
    },
  ],
];
