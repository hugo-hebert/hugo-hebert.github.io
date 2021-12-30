
import get from "lodash.get";

export function getStrapiURL (path = "") {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337/api"}${path}`;
};

// make populate string from array
export function getPopulateString (populate) {
    var popString = '';
    populate.map( (pop, ix) => {
        if(popString !== '')
            popString = popString.concat(`&populate[${ix}]=${pop}`);
        else
            popString = popString.concat(`populate[${ix}]=${pop}`);
    });

    if(popString !== '')
        popString = '?'.concat(popString);

    return popString;
}
  
// Helper to make GET requests to Strapi
export async function fetchAPI (path, populate = []) {
    const popString = getPopulateString(populate);
    const requestUrl = getStrapiURL(path + popString);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
};

export async function fetchSingles (path, populate = []) {
    const popString = getPopulateString(populate);
    const requestUrl = getStrapiURL(path + popString);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return get(data, 'data.attributes', null);
};

export async function fetchCollections (path, populate = []) {
    const popString = getPopulateString(populate);
    const requestUrl = getStrapiURL(path + popString);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
};
