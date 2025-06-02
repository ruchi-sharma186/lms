// Sample book data with Unsplash images
const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "fiction",
        isbn: "9780743273565",
        copies: 3,
        available: true,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "fiction",
        isbn: "9780061120084",
        copies: 2,
        available: true,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        isbn: "9780451524935",
        copies: 4,
        available: false,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
    },
    {
        id: 4,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "science",
        isbn: "9780553380163",
        copies: 1,
        available: true,
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
    },
    {
        id: 5,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "history",
        isbn: "9780062316097",
        copies: 3,
        available: true,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
        id: 6,
        title: "The Selfish Gene",
        author: "Richard Dawkins",
        category: "science",
        isbn: "9780199291151",
        copies: 2,
        available: false,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
];

// DOM Elements
const booksContainer = document.getElementById('booksContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryFilter = document.getElementById('categoryFilter');
const addBookBtn = document.getElementById('addBookBtn');
const addBookModal = document.getElementById('addBookModal');
const closeModal = document.querySelector('.close-modal');
const addBookForm = document.getElementById('addBookForm');

// Display books
function renderBooks(booksToRender = books) {
    booksContainer.innerHTML = '';
    
    if (booksToRender.length === 0) {
        booksContainer.innerHTML = '<p class="no-books">No books found matching your criteria.</p>';
        return;
    }
    
    booksToRender.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-info">
                <h3>${book.title}</h3>
                <p>by ${book.author}</p>
                <div class="book-meta">
                    <span class="book-status ${book.available ? 'available' : 'unavailable'}">
                        ${book.available ? 'Available' : 'Checked Out'}
                    </span>
                    <span>${book.copies} ${book.copies === 1 ? 'copy' : 'copies'}</span>
                </div>
            </div>
        `;
        booksContainer.appendChild(bookCard);
    });
}

// Filter books
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    
    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                             book.author.toLowerCase().includes(searchTerm);
        const matchesCategory = category === '' || book.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderBooks(filteredBooks);
}

// Add new book
function addNewBook(e) {
    e.preventDefault();
    
    const newBook = {
        id: books.length + 1,
        title: document.getElementById('bookTitle').value,
        author: document.getElementById('bookAuthor').value,
        category: document.getElementById('bookCategory').value,
        isbn: document.getElementById('bookISBN').value,
        copies: parseInt(document.getElementById('bookCopies').value),
        available: true,
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    };
    
    books.push(newBook);
    renderBooks();
    addBookModal.style.display = 'none';
    addBookForm.reset();
}

// Event Listeners
searchInput.addEventListener('input', filterBooks);
searchBtn.addEventListener('click', filterBooks);
categoryFilter.addEventListener('change', filterBooks);
addBookBtn.addEventListener('click', () => {
    addBookModal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
    addBookModal.style.display = 'none';
});
addBookForm.addEventListener('submit', addNewBook);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
});