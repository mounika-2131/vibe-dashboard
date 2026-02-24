Vibe Dashboard - Digital Library 
Hi! This is my submission for the Full-Stack Developer task. I built a modern "Digital Shelf" where you can search through a collection of books. My main goal was to create a UI that feels "premium" and "Next-Gen" using glassmorphism and smooth transitions.

-- Key Highlights--
Clean Design: I used a soft light theme with indigo accents and a subtle dot-grid background to make the space feel professional.

Centered Search: If you search for a specific book, it stays perfectly in the middle of the page for a balanced look.

Image Safety: I added a fallback system. If a book cover (like The Hobbit) fails to load, the app automatically generates a stylish, color-coded book cover so the UI never looks broken.

Compact Feel: I tightened the text spacing and margins to give it a "dense," high-end editorial feel.

-- How to Run the Project Locally --
To get this running on your machine, follow these simple steps:

1. Clone the project
2. Start the Backend (API)
Open a terminal in the root folder and run:

The API will start running on http://localhost:5000

3. Start the Frontend (UI)
Open a new terminal window and run:

The website will be live at http://localhost:3000

-- The API --
I built a simple Node.js/Express backend with one main endpoint:

GET /api/items: Returns the full list of books.

GET /api/items?search=query: Filters the books by title.

-- Tech Used --
Frontend: Next.js, Tailwind CSS, Lucide React

Backend: Node.js, Express