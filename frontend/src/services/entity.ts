import API_BASE from "./api";

export async function getEntity(
  slug: string
) {
  console.log(
    "Fetching:",
    `${API_BASE}/entities/${slug}`
  );

  const response = await fetch(
    `${API_BASE}/entities/${slug}`
  );

  const json =
    await response.json();

  console.log(
    "Response:",
    json
  );

  return json.data;
}
