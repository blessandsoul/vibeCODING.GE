export interface TeamMemberData {
  name: string;
  nameKa: string;
  role: { ka: string; en: string };
  bio: { ka: string; en: string };
  image: string;
  imagePosition?: string;
  accent: string;
  tags?: string[];
  isPublic?: boolean;
}

// Mirrors the two people shown on the landing page: Andrew and Giorgi.
// Roles and bios are localized (ka/en); the /about page falls back
// to `en` for other locales.
export const team: TeamMemberData[] = [
  {
    name: "Andro Kasparov",
    nameKa: "ანდრო კასპაროვი",
    role: { ka: "დამფუძნებელი · CEO", en: "Founder · CEO" },
    bio: {
      ka: "განსაზღვრავს ბიზნესის მიზანს, პროდუქტის მიმართულებასა და ხარისხის სტანდარტს.",
      en: "Sets the business goal, product direction and quality bar for every result.",
    },
    image: "/team/andro-kasparov-v3.png",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "Tornike Epitashvili",
    nameKa: "თორნიკე ეპიტაშვილი",
    role: { ka: "თანადამფუძნებელი · CTO", en: "Co-founder · CTO" },
    bio: {
      ka: "ხელმძღვანელობს ტექნოლოგიურ არქიტექტურას, AI მოდელების ინტეგრაციასა და სისტემების მდგრადობას.",
      en: "Leads technological architecture, AI model integration and core infrastructure.",
    },
    image: "/team/tornike-epitashvili-v2.jpg",
    accent: "from-purple-500 to-indigo-600",
    isPublic: false,
  },
  {
    name: "Nika Skhirtladze",
    nameKa: "ნიკა სხირტლაძე",
    role: { ka: "CCO", en: "CCO" },
    bio: {
      ka: "მართავს კომერციულ ოპერაციებს, სტრატეგიულ პარტნიორობებსა და კლიენტებთან ურთიერთობას.",
      en: "Leads commercial operations, strategic partnerships and client relationships.",
    },
    image: "/team/nika-skhirtladze-v3.png",
    accent: "from-pink-500 to-rose-500",
  },
];

export const publicTeam = team.filter((member) => member.isPublic !== false);
export const teamVisibility = { tornikeEpitashvili: false } as const;
