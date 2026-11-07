import { publicTeam } from "@/features/about/data/team";

export const companyTeamProfiles = publicTeam.map((member) => ({
  id: member.id === "andro-kasparov"
    ? "https://andrewaltair.ge/#person"
    : "https://ainow.ge/#person-tornike-epitashvili",
  name: member.name,
  localizedNames: member.localizedNames,
  alternateName: member.id === "andro-kasparov"
    ? ["Andrew Altair", member.nameKa, member.localizedNames.ru]
    : ["Toko", "Токо", member.nameKa, member.localizedNames.ru],
  jobTitle: member.role.en,
  image: new URL(member.image, "https://ainow.ge").href,
  url: `https://ainow.ge/about#${member.id}`,
}));

export function companyTeamText(aboutUrl: string): string {
  return [
    "\n\n## aiNOW co-founders",
    `- About the company: ${aboutUrl}`,
    ...companyTeamProfiles.map((member) =>
      `- ${member.name}, co-founder and ${member.jobTitle}. Official portrait: ${member.image}`,
    ),
    "",
  ].join("\n");
}
