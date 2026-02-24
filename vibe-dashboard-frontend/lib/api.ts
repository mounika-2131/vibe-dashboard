export interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const getItems = async (query: string = ""): Promise<Item[]> => {
  try {
    // Adding 'cache: no-store' forces a fresh update
    const response = await fetch(`http://localhost:5000/api/items?search=${query}`, {
      cache: 'no-store' 
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};