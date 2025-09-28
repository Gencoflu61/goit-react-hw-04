import { useState } from "react";
import styles from "./SearchBar.module.css"
function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //Eğer kullanıcı boş arama yaparsa
        if (searchTerm.trim() === ''){
            alert('Lütfen bir arama terimi girin!');
            return;
        }
        //Arama terimi ana bileşene gönderme
        onSearch(searchTerm.trim());
    };

    // Input değiştiğinde çalışacak fonsiyon
    const handleChange = (e) => {
        setSearchTerm(e.target.value);

    };
    // Ekranda gösterilecek HTML
    return(
        <header style={styles.header}>
            <form style={styles.form} onSubmit={handleSubmit}>
                <input 
                  style={styles.input}
                  type="text"
                  placeholder="Kediler, köpekler, manzara..."
                  value={searchTerm}
                  onChange={handleChange}
                  />
                  <button type="submit" style={styles.button}>
                    Ara
                  </button>
            </form>
        </header>
    );
};
export default SearchBar;