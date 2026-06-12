import API_BASE from "./api";

export async function getEntities() {
  console.log("Fetching:", `${API_BASE}/entities`);

  const response =
    await fetch(`${API_BASE}/entities`);

  const json =
    await response.json();

  console.log("API Response:", json);

  return json.data || [];
}