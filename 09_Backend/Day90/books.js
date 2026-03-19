const BookStore = [
  { id: 1, name: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, name: "Atomic Habits", author: "James Clear" },
  { id: 3, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki" },
  { id: 4, name: "The Psychology of Money", author: "Morgan Housel" },
  { id: 5, name: "Think and Grow Rich", author: "Napoleon Hill" },
  { id: 6, name: "Ikigai", author: "Héctor García & Francesc Miralles" },
  { id: 7, name: "Deep Work", author: "Cal Newport" },
  { id: 8, name: "The Power of Now", author: "Eckhart Tolle" },
  { id: 9, name: "Start With Why", author: "Simon Sinek" },
  { id: 10, name: "Can't Hurt Me", author: "David Goggins" }
];

const express = require('express');
const app = express();
// pursue express server to handle book data
app.use(express.json());

app.get("/book", (req, res) => {
    res.send(BookStore)
});

app.get("/book/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = BookStore.find(book => book.id === bookId);
    res.send(bookIndex)
});

app.post("/book", (req, res) => {
    BookStore.push(req.body);
    res.send("Book added successfully");
});

app.put("/book/:id", (req, res) => {
    const book = BookStore.find(book => book.id === parseInt(req.params.id));

    book.name = req.body.name;
    book.author = req.body.author;

    res.send("Book updated successfully");    
});

app.patch("/book", (req, res) => {
    const book = BookStore.find(book => book.id === parseInt(req.body.id));

    if (req.body.name) {
        book.name = req.body.name;
    }
    if (req.body.author) {
        book.author = req.body.author;
    }
    res.send("Book updated successfully");
});

app.delete("/book/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const index = BookStore.findIndex(book => book.id === bookId);

    BookStore.splice(index, 1);
    res.send("Book deleted successfully");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

