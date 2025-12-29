export async function getSocialMediaInfo() {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BE_API}/social-media`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await request.json();

  return {
    status: request.status,
    response: data,
  };
}