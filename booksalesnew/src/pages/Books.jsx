import React from 'react';
import '../styles/navigation.css';

function Books() {
  // Book data array with the same structure as in home.jsx
  const books = [
    {
      title: "Seporsi Mie Ayam Sebelum Mati",
      author: "Brian Khrisna",
      description:
        "Kisah tentang perjalanan hidup, kesedihan, dan kejujuran yang terbungkus dalam semangkuk mie ayam.",
      imageUrl: "https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg",
      price: "Rp 85.000"
    },
    {
      title: "Kita Pergi Hari Ini",
      author: "Ziggy Z.",
      description:
        "Sebuah perjalanan anak-anak penuh imajinasi dan perenungan tentang hidup yang tak selalu adil.",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634170562i/59345269.jpg",
      price: "Rp 78.000"
    },
    {
      title: "Laut Bercerita",
      author: "Leila S. Chudori",
      description:
        "Perjalanan penuh luka dari aktivis muda yang hilang secara misterius di masa kelam Indonesia.",
      imageUrl:
        "https://archive.org/services/img/laut-bercerita-leila-s.-chudori/full/pct:200/0/default.jpg",
      price: "Rp 95.000"
    },
    {
      title: "Bumi",
      author: "Tere Liye",
      description:
        "Petualangan fantastis dalam dunia paralel yang mengajarkan tentang keberanian dan nilai persahabatan.",
      imageUrl:
        "https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg",
      price: "Rp 90.000"
    },
    {
      title: "Negeri 5 Menara",
      author: "Ahmad Fuadi",
      description:
        "Kisah inspiratif para santri yang memiliki mimpi besar dan berjuang mewujudkannya.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/id/3/34/N5M-POSTER-FIN.jpg",
      price: "Rp 88.000"
    },
    {
      title: "Filosofi Teras",
      author: "Henry Manampiring",
      description:
        "Panduan hidup modern berdasarkan Stoikisme agar lebih tenang dan rasional dalam menghadapi hidup.",
      imageUrl:
        "https://imgv2-2-f.scribdassets.com/img/document/490005986/original/2bf4f94fff/1?v=1",
      price: "Rp 98.000"
    },
    {
      title: "Hujan",
      author: "Tere Liye",
      description:
        "Kisah cinta dan pengorbanan dalam latar dunia yang nyaris musnah karena bencana alam.",
      imageUrl:
        "https://cdn.gramedia.com/uploads/items/img20220905_11493451.jpg",
      price: "Rp 85.000"
    },
    {
      title: "Perahu Kertas",
      author: "Dee Lestari",
      description:
        "Dua jiwa muda dan pencarian jati diri melalui surat-surat yang ditulis dalam bentuk perahu kertas.",
      imageUrl:
        "https://cdn.gramedia.com/uploads/items/ID_MIZ2016MTH03PKER_C.jpg",
      price: "Rp 82.000"
    },
    {
      title: "Rasa",
      author: "Tere Liye",
      description:
        "Kumpulan kisah pendek tentang rasa yang sering kita rasakan tapi sulit kita jelaskan dengan kata-kata.",
      imageUrl: "https://cdn.gramedia.com/uploads/items/Rasa.jpg",
      price: "Rp 75.000"
    },
    {
      title: "Pulang",
      author: "Tere Liye",
      description: 
        "Kisah perjalanan seorang anak yang meninggalkan kampung halaman dan kembali dengan sejuta cerita.",
      imageUrl: "https://cdn.gramedia.com/uploads/items/9786020822129_Pulang.jpg",
      price: "Rp 89.000"
    },
    {
      title: "Rentang Kisah",
      author: "Gita Savitri Devi",
      description: 
        "Memoar perjalanan hidup seorang mahasiswa Indonesia di Jerman yang menemukan jati dirinya.",
      imageUrl: "https://cdn.gramedia.com/uploads/items/img20220830_11242766.jpg",
      price: "Rp 85.000"
    },
    {
      title: "Laskar Pelangi",
      author: "Andrea Hirata",
      description: 
        "Kisah perjuangan anak-anak Belitung untuk mendapatkan pendidikan yang layak di tengah keterbatasan.",
      imageUrl: "https://cdn.gramedia.com/uploads/items/9786022916628_Laskar_Pelangi_cov_2018-1.jpg",
      price: "Rp 95.000"
    }
  ];

  return (
    <div className="container">
      {/* Page Header */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-3">Koleksi Buku</h1>
          <p className="lead text-muted mb-4">Temukan berbagai buku terbaik untuk menemani hari-harimu</p>
          
          {/* Filter and Search Section */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Cari judul buku atau penulis..." aria-label="Search books" />
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search me-2"></i>Cari
                </button>
              </div>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
            <button className="btn btn-sm btn-primary rounded-pill px-3">Semua</button>
            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Fiksi</button>
            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Non-Fiksi</button>
            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Pengembangan Diri</button>
            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Novel</button>
            <button className="btn btn-sm btn-outline-secondary rounded-pill px-3">Komik</button>
          </div>
        </div>
      </div>
      
      {/* Books Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
        {books.map((book, index) => (
          <div className="col" key={index}>
            <div className="card shadow-sm h-100">
              <div className="position-relative">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="card-img-top"
                  style={{
                    height: "320px",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="position-absolute top-0 end-0 m-2">
                  <button className="btn btn-sm btn-outline-light rounded-circle">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>

              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-semibold mb-1">{book.title}</h5>
                  <p className="text-muted small mb-2">by {book.author}</p>
                  <p
                    className="card-text text-muted"
                    style={{
                      fontSize: "0.9rem",
                      maxHeight: "4rem",
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
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold text-primary">{book.price}</span>
                    <span className="badge bg-light text-dark">Tersedia</span>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary btn-sm">
                      <i className="fas fa-shopping-cart me-2"></i>Tambah ke Keranjang
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="fas fa-eye me-2"></i>Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <nav aria-label="Page navigation" className="my-5">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Books;