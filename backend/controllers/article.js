import axios from "axios";

/**
 * Gets the article closest to the runner based on their lat and long coordinates.
 * @param {*} lat 
 * @param {*} long 
 * @returns 
 */
export const getNearbyArticle = async (lat, long) => {
    let url = "https://en.wikipedia.org/w/api.php"; 

    // Query parameters for the API URL
    const params = {
        action: "query",
        list: "geosearch",
        gscoord: `${lat}|${long}`,
        gsradius: "10",
        gslimit: "100",
        format: "json"
    };

    // Set up the URL for querying
    url += "?origin=*";
    Object.keys(params).forEach(key => url += "&" + key + "=" + params[key]);

    const response = await axios.get(url);

    if (response.data){ 
        return response.data.query.geosearch[0];
    }   
    
    // Throw an error to calling program if there are no nearby articles
    throw "No nearby articles";
}

/**
 * Gets the text content of a Wikipedia article corresponding to the first blurb only.
 * @param {*} title 
 * @returns 
 */
export const getArticleContent = async (title) => {
    let url = "https://en.wikipedia.org/w/api.php"; 

    // Query parameters for the API URL
    const params = {
        action: "query",
        prop: "extracts",
        exsentences: 10,
        exlimit: 1,
        titles: title,
        explaintext: 1,
        formatversion: 2,
        format: "json",
    };

    // Set up the URL for querying
    url += "?origin=*";
    Object.keys(params).forEach(key => url += "&" + key + "=" + params[key]);
    // url = url.replace(/\s/g, "%20");

    const response = await axios.get(url);

    if (response.data) { 
        return response.data.query.pages[0].extract;
    }   

    // Article couldn't be found by the 
    throw "Article not found";
}