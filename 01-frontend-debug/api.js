// api.js

async function fetchUser(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

  if (!response.ok) {
    throw new Error(`User not found (${response.status})`);
  }

  return response.json();
}