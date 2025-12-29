export async function getExperiences() {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BE_API}/experiences`, {
    method: "GET",
    credentials: "include",
    headers: {
      "content-type": "application/js",
    },
  });

  const data = await request.json();

  return {
    status: request.status,
    response: data,
  };
}