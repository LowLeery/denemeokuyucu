document.getElementById('calculate').addEventListener('click', function() {
  const fileInput = document.getElementById('json-upload');
  
  // JSON dosyasını okuma
  const file = fileInput.files[0];
  
  if (!file) {
    alert("Lütfen bir JSON dosyası seçin.");
    return;
  }
  
  const reader = new FileReader();
  
  reader.onload = function(event) {
    const data = JSON.parse(event.target.result);

    // JSON dosyasından cevap anahtarını alıyoruz
    const correctAnswers = data.cevapAnahtari;  // JSON'dan cevap anahtarını alıyoruz
    
    const results = data.girenciler.map(entry => {
      const { isim, soyisim, cevaplar } = entry;
      
      let score = 0;
      let wrong = 0;
      let empty = 0;
      
      // Cevapları kontrol et
      for (let i = 0; i < cevaplar.length; i++) {
        if (cevaplar[i] === correctAnswers[i]) {
          score++;
        } else if (cevaplar[i] === 'Y') {
          empty++;
        } else {
          wrong++;
        }
      }
      
      // Yanlışı netten düşme
      const netScore = score - Math.floor(wrong / 3);
      
      return {
        isim: isim,
        soyisim: soyisim,
        cevaplar: cevaplar,
        net: netScore,
        doğru: score,
        yanlış: wrong,
        boş: empty
      };
    });
    
    // Sonuçları liste olarak göster
    const resultsList = document.getElementById('results-list');
    resultsList.innerHTML = '';  // Listeyi temizle

    results.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = `${result.isim} ${result.soyisim} - Doğru: ${result.doğru}, Yanlış: ${result.yanlış}, Boş: ${result.boş}, Net: ${result.net}`;
      resultsList.appendChild(listItem);
    });
  };
  
  reader.readAsText(file);
});
