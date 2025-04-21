import { useState } from "react";
import books, { addBook } from "../utils/book";

function Books() {
  const [bookList, setBookList] = useState(books);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    imageUrl: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.description && newBook.imageUrl) {
      addBook(newBook, setBookList);
      setNewBook({
        title: "",
        author: "",
        description: "",
        imageUrl: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center">Our Book Collection</h1>
      
      {/* Add New Book Form */}
      <div className="card mb-5 shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Add New Book</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={newBook.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="author" className="form-label">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  name="author"
                  value={newBook.author}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={newBook.description}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">Image URL</label>
              <input
                type="url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                value={newBook.imageUrl}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Add Book</button>
          </form>
        </div>
      </div>

      {/* Book List */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {bookList.map((book, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm h-100">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="card-img-top"
                style={{
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold mb-2">{book.title}</h5>
                  <p className="card-text text-muted" style={{
                    fontSize: "0.95rem",
                    maxHeight: "4.5rem",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}>
                    {book.description}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-medium"
                  >
                    <i className="fas fa-eye me-2"></i> View Details
                  </button>
                  <small className="text-body-secondary">by {book.author}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;