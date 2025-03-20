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
    
    const correctAnswers = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E'];  // Örnek doğru cevaplar
    const results = data.map(entry => {
      const { isim, soyisim, cevaplar } = entry;
      
      let score = 0;
      let wrong = 0;
      let empty = 0;
      
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
    
    // Sonuçları JSON formatında göster
    document.getElementById('results').textContent = JSON.stringify(results, null, 2);
  };
  
  reader.readAsText(file);
});
