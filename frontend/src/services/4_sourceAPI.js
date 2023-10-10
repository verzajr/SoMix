
export async function API_GeneralSearch(searchValue){
const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchValue}`;    
console.log(url)   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d264a42f2msha14051721f20260p181bf3jsn4abad0cd5de7',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return(result)
    } catch (error) {
        console.error(error);
    }
};

export async function API_ArtistSearch(artistID){
    const url = `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistID}`;
    console.log(url) 
    const options = {  
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d264a42f2msha14051721f20260p181bf3jsn4abad0cd5de7',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

export async function API_AlbumSearch(albumID){
    const url = `https://deezerdevs-deezer.p.rapidapi.com/album/${albumID}`;
    console.log(url)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d264a42f2msha14051721f20260p181bf3jsn4abad0cd5de7',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

};

export async function API_TrackSearch(trackID){
    const url = `https://deezerdevs-deezer.p.rapidapi.com/track/${trackID}`;
    console.log(url) 
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1d264a42f2msha14051721f20260p181bf3jsn4abad0cd5de7',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

};
