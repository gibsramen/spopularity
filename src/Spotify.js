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

    const result = await fetch(tokenUrl, params);
    const data = await result.json();
    return data.access_token;
}

export const searchAlbum = async (token, searchString) => {
    const searchUrl = "https://api.spotify.com/v1/search?";
    const params = {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token,
        },
    };
    const query = searchUrl + "q=" + searchString + "&type=album";
    const result = await fetch(query, params);
    const data = await result.json();
    return data;
}

export const getTracks = async (token, albumID) => {
    const searchUrl = "https://api.spotify.com/v1/albums/";
    const params = {
        method: "GET",
        headers: {"Authorization": "Bearer " + token}
    };
    const query = searchUrl + albumID + "/tracks";
    const result = await fetch(query, params);
    const data = await result.json();
    return data;
}
