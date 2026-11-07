const retiredNames = new Set([
  "aleksandre-b.jpg",
  "aleksandre.jpg",
  "beka.jpg",
  "giorgi-darbaiseli-v2.png",
  "giorgi.jpg",
  "nika-skhirtladze-v3.png",
]);

function isRetiredTeamPath(pathname: string): boolean {
  try {
    const path = decodeURIComponent(pathname).toLowerCase();
    const name = path.slice(path.lastIndexOf("/") + 1);
    return path.startsWith("/team/") && retiredNames.has(name);
  } catch {
    return false;
  }
}

export function isRetiredTeamPortrait(requestUrl: URL): boolean {
  if (isRetiredTeamPath(requestUrl.pathname)) return true;
  if (requestUrl.pathname !== "/_next/image") return false;

  const imageUrl = requestUrl.searchParams.get("url");
  if (!imageUrl) return false;
  try {
    const image = new URL(imageUrl, requestUrl.origin);
    const isOwned = image.host === requestUrl.host ||
      image.hostname === "ainow.ge" || image.hostname === "www.ainow.ge";
    return isOwned && isRetiredTeamPath(image.pathname);
  } catch {
    return false;
  }
}
