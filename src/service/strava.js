class StravaApi {
  constructor() {
    this.id = process.env.REACT_APP_ATHELATE_ID;
    this.clientId = process.env.REACT_APP_CLIENT_ID;
    this.clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    this.refreshToken = process.env.REACT_APP_REFRESH_TOKEN;
  }

  getAccessToken = async () => {
    const params = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      refresh_token: this.refreshToken,
      grant_type: "refresh_token",
    };
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    const url = `https://www.strava.com/api/v3/oauth/token`;
    const response = await fetch(url, options);

    const data = await response.json();
    return data;
  };

  getRecord = async (token) => {
    const url = `https://www.strava.com/api/v3/athletes/${this.id}/stats`;
    // const url = `https://www.strava.com/api/v3/athlete/activities`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  };
}

export default StravaApi;
