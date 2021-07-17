export const getUsers = async () => {
  try {
    const result = await fetch(`https://reqres.in/api/users`);
    const data = await result.json();
    return data.data;
  } catch (e) {
    return null;
  }
};

export const getUser = async (userId) => {
  try {
    const result = await fetch(`https://reqres.in/api/users/${userId}`);
    const data = await result.json();
    return data.data;
  } catch (e) {
    return null;
  }
};
