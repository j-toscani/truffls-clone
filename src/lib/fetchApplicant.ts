export default async function fetchApplicant(id: number) {
  const response = await fetch(`https://dummyjson.com/users/${id}`);

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Response not ok!");
  }
}
