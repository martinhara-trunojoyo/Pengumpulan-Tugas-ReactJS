// Book data for the application
const books = [
  {
    title: "Seporsi Mie Ayam Sebelum Mati",
    author: "Brian Khrisna",
    description:
      "Kisah tentang perjalanan hidup, kesedihan, dan kejujuran yang terbungkus dalam semangkuk mie ayam.",
    imageUrl: "https://cdn.gramedia.com/uploads/products/95ob5m98ur.jpg",
  },
  {
    title: "Kita Pergi Hari Ini",
    author: "Ziggy Z.",
    description:
      "Sebuah perjalanan anak-anak penuh imajinasi dan perenungan tentang hidup yang tak selalu adil.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634170562i/59345269.jpg",
  },
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    description:
      "Perjalanan penuh luka dari aktivis muda yang hilang secara misterius di masa kelam Indonesia.",
    imageUrl:
      "https://archive.org/services/img/laut-bercerita-leila-s.-chudori/full/pct:200/0/default.jpg",
  },
  {
    title: "Bumi",
    author: "Tere Liye",
    description:
      "Petualangan fantastis dalam dunia paralel yang mengajarkan tentang keberanian dan nilai persahabatan.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg",
  },
  {
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    description:
      "Kisah inspiratif para santri yang memiliki mimpi besar dan berjuang mewujudkannya.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/id/3/34/N5M-POSTER-FIN.jpg",
  },
  {
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    description:
      "Panduan hidup modern berdasarkan Stoikisme agar lebih tenang dan rasional dalam menghadapi hidup.",
    imageUrl:
      "https://imgv2-2-f.scribdassets.com/img/document/490005986/original/2bf4f94fff/1?v=1",
  },
  {
    title: "Hujan",
    author: "Tere Liye",
    description:
      "Kisah cinta dan pengorbanan dalam latar dunia yang nyaris musnah karena bencana alam.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/img20220905_11493451.jpg",
  },
  {
    title: "Perahu Kertas",
    author: "Dee Lestari",
    description:
      "Dua jiwa muda dan pencarian jati diri melalui surat-surat yang ditulis dalam bentuk perahu kertas.",
    imageUrl:
      "https://cdn.gramedia.com/uploads/items/ID_MIZ2016MTH03PKER_C.jpg",
  },
  {
    title: "Rasa",
    author: "Tere Liye",
    description:
      "Kumpulan kisah pendek tentang rasa yang sering kita rasakan tapi sulit kita jelaskan dengan kata-kata.",
    imageUrl: "https://cdn.gramedia.com/uploads/items/Rasa.jpg",
  },
];

// Export the books array as default
export default books;

// Function to add a new book to the collection
export const addBook = (newBook, setBooks) => {
  setBooks(prevBooks => [...prevBooks, newBook]);
};