// src/services/api.js

export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
