function Contact() {
    return (
      <div className="container py-5">
        <h1 className="mb-4 text-center"><i className="fas fa-envelope me-2"></i>Hubungi Saya</h1>
        <p className="text-center mb-5">Silakan isi formulir di bawah untuk menghubungi saya secara langsung.</p>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <i className="fas fa-user me-2"></i>Nama
                </label>
                <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  <i className="fas fa-comment me-2"></i>Pesan
                </label>
                <textarea className="form-control" id="message" rows="5" placeholder="Tulis pesan Anda di sini"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fas fa-paper-plane me-2"></i>Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Contact;
  