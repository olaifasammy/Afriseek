import API_BASE from "./api";

export async function getArticles() {
  const response =
    await fetch(
      `${API_BASE}/articles`
    );

  const json =
    await response.json();

  return json.data || [];
}
