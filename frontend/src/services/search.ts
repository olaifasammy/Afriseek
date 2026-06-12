import API_BASE from "./api";

export async function searchKnowledge(
  query: string
) {
  const response =
    await fetch(
      `${API_BASE}/search?q=${encodeURIComponent(query)}`
    );

  const json =
    await response.json();

  return json.data || [];
}
