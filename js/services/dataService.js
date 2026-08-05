// Handles fetching JSON data

/**
 * Data Service Module
 * Handles fetching application content from external JSON.
 */
let cachedData = null;

export async function fetchSiteData() {
    if (cachedData) return cachedData;

    try {
        const response = await fetch('data/data.json');
        if (!response.ok) throw new Error('Failed to load data.json');
        
        cachedData = await response.json();
        return cachedData;
    } catch (error) {
        console.error('DataService Error:', error);
        return null;
    }
}