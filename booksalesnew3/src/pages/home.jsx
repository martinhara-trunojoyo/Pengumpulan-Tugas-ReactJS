import books from "../utils/book";

function Home() {
  
    return (
      <>
        <div className="container">
         
          {/* Hero */}
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <h1 className="display-4 fw-bold lh-2 text-body-emphasis">
                  🌟 Telah Terbit! <br /> <em>Seporsi Mie Ayam Sebelum Mati</em>
                </h1>
                <p className="lead text-muted">— a story by Brian Khrisna</p>
                <section className="mb-4">
                  <h2 className="h6 fw-semibold mb-2">Sinopsis</h2>
                  <p className="text-muted small">
                    <strong>Seporsi Mie Ayam Sebelum Mati</strong> mengisahkan
                    Ale, pria 37 tahun yang berniat mengakhiri hidupnya. Dalam
                    pencarian mie ayam favoritnya, ia bertemu orang-orang yang
                    perlahan mengubah pandangannya tentang hidup. Cerita ini
                    menyentuh isu kesehatan mental dengan pendekatan ringan dan
                    penuh makna.
                  </p>
                </section>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    Detail
                  </button>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img
                  className="rounded-lg-3 w-100 h-100 object-fit-cover"
                  src="https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* product */}
          <section className="py-5 text-center bg-light">
            <div className="container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <em
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "700",
                      color: "#343a40",
                      display: "block",
                      marginBottom: "1rem",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Best Seller
                  </em>
                  <p
                    className="text-muted"
                    style={{
                      maxWidth: "600px",
                      margin: "0 auto",
                      fontSize: "1.1rem",
                      lineHeight: "1.75",
                      fontWeight: "400",
                      color: "#6c757d",
                    }}
                  >
                    Kumpulan buku terlaris yang menyentuh hati dan menggugah
                    pikiran. Pilihan terbaik dari para pembaca, kini hadir untuk
                    kamu nikmati.
                  </p>
                  <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                    <a
                      href="#"
                      className="btn btn-primary px-4 py-2 shadow-sm"
                      style={{ borderRadius: "50px", fontWeight: "500" }}
                    >
                      View
                    </a>
                    <a
                      href="#"
                      className="btn btn-outline-secondary px-4 py-2 shadow-sm"
                      style={{ borderRadius: "50px", fontWeight: "500" }}
                    >
                      Other Books
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book, index) => (
              <div className="col" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="card-img-top"
                    style={{
                      height: "550px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
  
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title fw-semibold mb-2">
                        {book.title}
                      </h5>
                      <p
                        className="card-text text-muted"
                        style={{
                          fontSize: "0.95rem",
                          maxHeight: "4.5rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {book.description}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap">
                      <div className="d-flex gap-2 mb-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-medium"
                        >
                          <i className="fas fa-eye me-2"></i> View More
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-success rounded-pill px-3 fw-medium"
                        >
                          <i className="fas fa-shopping-cart me-2"></i> Beli
                        </button>
                      </div>
                      <small className="text-body-secondary">
                        by {book.author}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </>
    );
  }
  
  export default Home;
  