const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 5000;
const items = [
  { id: 1, title: "Harry Potter", description: "The boy who lived.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500" },
  { id: 2, title: "Alice in Wonderland", description: "Down the rabbit hole.", image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=500" },
  
  
  { 
    id: 3, 
    title: "The Hobbit", 
    description: "An epic journey into the wild.", 
    image: "https://covers.openlibrary.org/b/id/14571587-L.jpg" 
  },
  { id: 4, title: "Peter Pan", description: "Off to Neverland.", image: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500" },
  { id: 5, title: "Cinderella", description: "The magic of a glass slipper.", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500" },
  { id: 6, title: "Snow White", description: "The fairest in the land.", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500" },
  { id: 7, title: "Beauty and the Beast", description: "A tale as old as time.", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500" },
  { id: 8, title: "The Little Mermaid", description: "Deep sea dreams.", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500" }
];
app.get("/api/items", (req, res) => {
  const search = (req.query.search || "").toLowerCase().trim();
  const filtered = items.filter(i => i.title.toLowerCase().includes(search));
  res.json(filtered.slice(0, 8));
});
app.listen(PORT, () => console.log(`Backend: http://localhost:${PORT}`));