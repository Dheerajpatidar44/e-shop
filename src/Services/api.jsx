import axios from "axios";

const BASE_URL = "https://real-time-amazon-data.p.rapidapi.com";
const API_KEY = "YOUR_RAPIDAPI_KEY"; // Replace with your actual API key

const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		"x-rapidapi-key": API_KEY,
		"x-rapidapi-host": "real-time-amazon-data.p.rapidapi.com", 
	},
});

const cache = new Map(); // Store API responses to reduce redundant calls

export const fetchAmazonProduct = async (asin, country = "US") => {
	if (cache.has(asin)) {
		console.log("Returning cached data for ASIN:", asin); 
		return cache.get(asin); // Return cached data 
	}

	try {
		const response = await apiClient.get("/product-details", {
			params: { asin, country },
		});

		cache.set(asin, response.data); // Store in cache  
		return response.data;
	} catch (error) {
		console.error("Error fetching product details:", error);       
		return null;
	}
};
