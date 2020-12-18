export const _getToken = async () => {
    const tokenUrl = "https://accounts.spotify.com/api/token";
    const clientReg = btoa(
        process.env.REACT_APP_SPOTIFY_CLIENT_ID + ":" + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
    )
    const params = {
        method: "POST",
        headers: {
            "Authorization": "Basic " + clientReg,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "grant_type=client_credentials"
    };

    console.log("here");
    const result = await fetch(tokenUrl, params);
    const data = await result.json();
    return data.access_token;
}
