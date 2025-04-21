const Footer = () => {
    return (
        <div className="container">
        <footer className="py-5">
          <div className="row">
            {/* Kategori Buku */}
            <div className="col-6 col-md-2 mb-3">
              <h5>Kategori Buku</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Fiksi</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Non-Fiksi</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Pengembangan Diri</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Anak & Remaja</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Komik</a>
                </li>
              </ul>
            </div>
  
            {/* Bantuan */}
            <div className="col-6 col-md-2 mb-3">
              <h5>Bantuan</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Cara Belanja</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Pembayaran</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Pengiriman</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Retur & Refund</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Hubungi Kami</a>
                </li>
              </ul>
            </div>
  
            {/* Informasi */}
            <div className="col-6 col-md-2 mb-3">
              <h5>Informasi</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Tentang Kami</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Kebijakan Privasi</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Syarat & Ketentuan</a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">Program Afiliasi</a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Berlangganan Newsletter</h5>
                <p>Dapatkan informasi promo dan buku terbaru langsung ke inbox kamu!</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Alamat Email
                  </label>
                  <input
                    id="newsletter1"
                    type="email"
                    className="form-control"
                    placeholder="Alamat email"
                  />
                  <button className="btn btn-primary" type="button">
                    Langganan
                  </button>
                </div>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2025 Toko Buku Martin H. SIBM NF 2025 | All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="fab fa-instagram fa-lg"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" href="#">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
    }
    
    export default Footer;
