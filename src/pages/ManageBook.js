import React, { useState } from 'react';
import axios from 'axios';

import './ManageBook.css';

const ManageBook = () => {
  // State variables for managing form data and book data
  const [books, setBooks] = useState([]);
  const [editBookId, setEditBookId] = useState(''); // Separate state for edit
  const [deleteBookId, setDeleteBookId] = useState(''); // Separate state for delete
  const [searchBookId, setSearchBookId] = useState(''); // State for book ID search
  const [searchedBook, setSearchedBook] = useState(null); // State for searched book

  // Add New Book state variables
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newIsbn, setNewIsbn] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newPublishedDate, setNewPublishedDate] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [newLocation, setNewLocation] = useState('');

  // Edit Book state variables
  const [editTitle, setEditTitle] = useState('');
  const [editAuthor, setEditAuthor] = useState('');
  const [editIsbn, setEditIsbn] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editPublishedDate, setEditPublishedDate] = useState('');
  const [editStatus, setEditStatus] = useState('');
  const [editLocation, setEditLocation] = useState('');

  // Function to fetch all books
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  // Function to search a book by its ID
  const searchBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books/${searchBookId}`);
      setSearchedBook(response.data); // Set the searched book
    } catch (error) {
      console.error("Error searching book by ID:", error);
      setSearchedBook(null); // Reset if not found
    }
  };

  // Function to add a new book
  const addNewBook = async () => {
    try {
      const newBook = {
        title: newTitle,
        author: newAuthor,
        isbn: newIsbn,
        category: newCategory,
        publishedDate: newPublishedDate,
        status: newStatus,
        location: newLocation,
      };
      await axios.post('http://localhost:5000/api/books', newBook);
      alert('New book added successfully!');
      fetchBooks(); // Refresh the list of books
    } catch (error) {
      console.error("Error adding new book:", error);
    }
  };

  // Function to edit a book by ID
  const editBook = async () => {
    try {
      const updatedBook = {
        title: editTitle,
        author: editAuthor,
        isbn: editIsbn,
        category: editCategory,
        publishedDate: editPublishedDate,
        status: editStatus,
        location: editLocation,
      };
      await axios.put(`http://localhost:5000/api/books/${editBookId}`, updatedBook);
      alert('Book updated successfully!');
      fetchBooks(); // Refresh the list of books
    } catch (error) {
      console.error("Error editing book:", error);
    }
  };

  // Function to delete a book by ID
  const deleteBook = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${deleteBookId}`);
      alert('Book deleted successfully!');
      fetchBooks(); // Refresh the list of books
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Manage Books</h2>

      {/* Button to show all books */}
      <button onClick={fetchBooks}>Show All Books</button>

      {/* Add New Book Section */}
      <div>
        <h3>Add New Book</h3>
        <label>Title: </label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <label>Author: </label>
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <label>ISBN: </label>
        <input
          type="text"
          value={newIsbn}
          onChange={(e) => setNewIsbn(e.target.value)}
        />
        <label>Category: </label>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <label>Published Date: </label>
        <input
          type="text"
          value={newPublishedDate}
          onChange={(e) => setNewPublishedDate(e.target.value)}
        />
        <label>Status: </label>
        <input
          type="text"
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <label>Location: </label>
        <input
          type="text"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
        <button onClick={addNewBook}>Add Book</button>
      </div>

      {/* Edit Book by ID */}
      <div>
        <h3>Edit Book by ID</h3>
        <label>Book ID to Edit: </label>
        <input
          type="text"
          value={editBookId}
          onChange={(e) => setEditBookId(e.target.value)}
        />
        <label>New Title: </label>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <label>New Author: </label>
        <input
          type="text"
          value={editAuthor}
          onChange={(e) => setEditAuthor(e.target.value)}
        />
        <label>New ISBN: </label>
        <input
          type="text"
          value={editIsbn}
          onChange={(e) => setEditIsbn(e.target.value)}
        />
        <label>New Category: </label>
        <input
          type="text"
          value={editCategory}
          onChange={(e) => setEditCategory(e.target.value)}
        />
        <label>New Published Date: </label>
        <input
          type="text"
          value={editPublishedDate}
          onChange={(e) => setEditPublishedDate(e.target.value)}
        />
        <label>New Status: </label>
        <input
          type="text"
          value={editStatus}
          onChange={(e) => setEditStatus(e.target.value)}
        />
        <label>New Location: </label>
        <input
          type="text"
          value={editLocation}
          onChange={(e) => setEditLocation(e.target.value)}
        />
        <button onClick={editBook}>Edit Book</button>
      </div>

      {/* Delete Book by ID */}
      <div>
        <h3>Delete Book by ID</h3>
        <label>Book ID to Delete: </label>
        <input
          type="text"
          value={deleteBookId}
          onChange={(e) => setDeleteBookId(e.target.value)}
        />
        <button onClick={deleteBook}>Delete Book</button>
      </div>

      {/* Search Book by ID */}
      <div>
        <h3>Search Book by ID</h3>
        <label>Enter Book ID: </label>
        <input
          type="text"
          value={searchBookId}
          onChange={(e) => setSearchBookId(e.target.value)}
        />
        <button onClick={searchBookById}>Search</button>

        {/* Display searched book */}
        {searchedBook ? (
          <div>
            <h4>Searched Book:</h4>
            <p><strong>Book ID:</strong> {searchedBook._id}</p>
            <p><strong>Title:</strong> {searchedBook.title}</p>
            <p><strong>Author:</strong> {searchedBook.author}</p>
            <p><strong>ISBN:</strong> {searchedBook.isbn}</p>
            <p><strong>Category:</strong> {searchedBook.category}</p>
            <p><strong>Published Date:</strong> {searchedBook.publishedDate}</p>
            <p><strong>Status:</strong> {searchedBook.status}</p>
            <p><strong>Location:</strong> {searchedBook.location}</p>
          </div>
        ) : null}
      </div>

      {/* List of books (only shows when Show All Books button is clicked) */}
      {books.length > 0 && (
        <div>
        <h3>Books List</h3>
        <div className="book-list-container">
          {books.map((book) => (
            <div className="book-card" key={book._id}>
              <p><strong>Book ID:</strong> {book._id}</p>
              <p><strong>Title:</strong> {book.title}</p>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Published Date:</strong> {book.publishedDate}</p>
              <p><strong>Status:</strong> {book.status}</p>
              <p><strong>Location:</strong> {book.location}</p>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
};

export default ManageBook;