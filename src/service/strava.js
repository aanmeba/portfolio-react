const id = process.env.REACT_APP_CLIENT_ID;
const token = process.env.REACT_APP_ACCESS_TOKEN;

export const getRecord = async () => {
  const url = `https://www.strava.com/api/v3/athletes/${id}/stats`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
};
