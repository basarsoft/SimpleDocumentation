# Simple Documentation V1


En basit hali ile bu proje MD dosyaları ile hiçbir sunucu kodu gerektirmeden ürün dokümantasyonu yapabilmek için geliştirildi. Mümkün olan en basit ve en hızlı yol ile ürün dokümantasyonunu geliştirmek bu projenin öncelikli hedefi.


## Kullanımı

Uygulama, `docs.json` dosyasını okuyarak çalışmaya başlar.

Bu dosya için örnek bir yapı aşağıdaki gibidir.

```
{
  "V1": {
    "Türkçe": "V1/TR",
    "İngilizce": "V1/EN"
  },
  "V2": {
    "İngilizce": "V2/EN"
  }
}

```

Yukarıdaki örnekte iki ana doküman bulunmakta. V1 ve V2 anahtar kelimeleri ile kaydedilmişler. V1'in içinde Türkçe ve İngilizce olmak üzere iki adet alt kırılım bulunuyor. Uygulama açıldığı zaman listede en tepede bulunan dokümanı yükleyecektir. `V1 - Türkçe` Diğer dokümanları uygulama içinden seçebilirsiniz.

Uygulama bu iki kırılıma göre dosyada karşılık gelen klasör içinde `index.md` ve `toc.md` dosyalarını arar. *TOC* sol taraftaki menüyü içinde barındırır. *INDEX* ise o kırılım için ilk açılan ana sayfayı temsil eder.

## TOC

```
- [1 Get Started](#)
  - [Sub menu 1](#sayfa1)
- [2 Menu 2](#)
  - [Sub menu 2](#sayfa2)
    - [Sub menu](#sayfa3)
    - [Sub menu](#sayfa4)
    -  [Sub menu](#sayfa5)
        - [Menu](#sayfa6)
  - [Sub menu 3](#sayfa7)
- [3 Index](#sayfa8)

```

Uygulama TOC.MD içindeki listeyi otomatik olarak kolay kullanılabilir otomatik açıp kapanan bir menüye dönüştürür. Bu menü ile doküman içinde geçişler sağlanabilir.

Dikkat edilmesi gereken nokta bağlantıların `hash` olarak verildiğidir. Uygulamada `#sayfa3` bağlantısına tıklandığı zaman, sistem seçilen versiyon ve dil'e göre ilgili dosya yolu içinde `sayfa3.md` dosyasını arayacak ve onu yüklemeye çalışacaktır.

## INDEX
`ìndex.md` dosyası ilk açılan sayfadır. Bu sayfadan sonra diğer bağlantılar ile istenilen konumlara bağlantı verilerek navigasyon  işlemi sağlanabilir. Bu dosyanın içerisinde MD formatının sağladığı her türlü özelliği kullanabilirsiniz.


##### Related

| İlgili Projeler  |
|--------|
| [Markdown Syntax](http://daringfireball.net/projects/markdown/syntax)       |
| [Marked On-the-fly MD Renderer](https://github.com/chjj/marked) |

