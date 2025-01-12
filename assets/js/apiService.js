

const apiUrlBase = "https://localhost:7037/";

export async function fetchPortfolio() {
    try {
        const response = await fetch(`${apiUrlBase}api/Resource/GetResources`);
        if (!response.ok){
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    }
    catch (error) {
        console.error("Error fetching portfolio:", error);
        throw error;
    }
}