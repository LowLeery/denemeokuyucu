# denemeokuyucu
Okullarda Olduğunuz Veya Kendi Yaptığınız Sınav ve Denemeleri Okumak İçin Yaptığım Proje

## Kullanma Kılavuzu
1. **Deneme İçeriğini Girme**: Aşşağıda gösterdiğim yapıda JSON dosyasını düzenlemeniz gerekir.
2. **Cevaplar**: ["Y"] İle belirtilen cevap boş demektir.

```json
{
    "cevapAnahtari": ["A", "B", "C", "D", "A", "B", "C", "D", "E"], 
    "girenler": [
      {
        "isim": "Ahmet",
        "soyisim": "Yılmaz",
        "cevaplar": ["A", "B", "B", "D", "E", "C", "A", "D", "Y"]
      },
      {
        "isim": "Efe",
        "soyisim": "Yıldıran",
        "cevaplar": ["A", "A", "A", "A", "B", "B", "E", "C", "B"]
      }
    ]
  }
```

## Sonuç Listesi
| ISIM | SOYISIM | DOĞRU | YANLIŞ | BOŞ | NET | 
|------|---------|-------|--------|-----|-----|
|Ahmet|Yılmaz|4|4|1|3|
|Efe|Yıldıran|2|7|0|0|

- İsimler örnek olarak kullanışmış olup kimsenin gizliliği ihlal edilmemiştir.

# Bknz.
- Projenin Github-Pages Sitesi [tıklayınız](https://lowleery.github.io/denemeokuyucu/)
- Siteme Göz Atınız [tıklayınız](https://yardimet.vercel.app)
