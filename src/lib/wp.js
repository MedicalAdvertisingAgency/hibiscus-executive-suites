const endpoint = import.meta.env.WP_GRAPHQL_URL || process.env.WP_GRAPHQL_URL;

export async function fetchAPI(query, variables = {}) {
  if (!endpoint) {
    throw new Error("WP_GRAPHQL_URL is not set. Add it to .env");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  if (json.errors) {
    const message = json.errors.map((e) => e.message).join("; ");
    throw new Error(`WPGraphQL errors: ${message}`);
  }

  return json.data;
}
