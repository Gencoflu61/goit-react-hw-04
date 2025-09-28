// App.jsx - EN BASİT VE ÇALIŞAN VERSİYON
import { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { searchImages } from './services/unsplashAPI';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    
    try {
      const data = await searchImages(query);
      setImages(data.results);
    } catch (error) {
      console.log('Hata:', error);
      alert('Bir hata oluştu: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <SearchBar onSearch={handleSearch} />
      
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>⏳ Yükleniyor...</p>
        </div>
      )}
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px'
      }}>
        {images.map(image => (
          <div key={image.id} style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={image.urls.small} 
              alt={image.alt_description}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                {image.alt_description}
              </p>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                👤 {image.user.name}
              </p>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '14px' }}>
                ❤️ {image.likes} beğeni
              </p>
            </div>
          </div>
        ))}
      </div>

      {images.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
          <p>🔍 Arama yapmak için yukarıya bir şeyler yazın!</p>
        </div>
      )}
    </div>
  );
}

export default App;