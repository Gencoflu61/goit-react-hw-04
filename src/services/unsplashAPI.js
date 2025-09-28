// unsplashAPI.js - ÇOK BASİT VERSİYON (axios'suz)

// Resim arama fonksiyonu - AXİOS KULLANMIYORUZ
export const searchImages = async (query) => {
  console.log(`"${query}" için resim aranıyor...`);
  
  // Hemen test verisi döndür (bekleme yok)
  const testData = {
    results: [
      {
        id: '1',
        urls: {
          small: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=300',
          regular: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800'
        },
        alt_description: 'Sevimli kedi',
        user: { name: 'Kedi Sever' },
        likes: 150
      },
      {
        id: '2', 
        urls: {
          small: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=300',
          regular: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?w=800'
        },
        alt_description: 'Mutlu köpek',
        user: { name: 'Köpek Sever' },
        likes: 200
      }
    ]
  };

  // Hemen döndür (async çalışsın diye Promise kullan)
  return Promise.resolve(testData);
};