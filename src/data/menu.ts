import type { Restaurant } from '../types';

export const restaurants = [
  'Dost Tost',
  'Hart Dog',
  'Wonder Waffle',
  'Pilavneli',
  'Çiko Çiğköfte',
  'Tavuk Sepeti',
  '322 Döner',
  'Annemin Elinden Ev Yemekleri',
  'Sandwich Lab',
  'Fit Wraps',
  'Smaaash Burger',
  'SucuKöfte'
];

export const restaurantMenus: Restaurant[] = [
  {
    id: '1',
    name: 'Dost Tost',
    logoUrl: 'https://i.ibb.co/jkhrfxJH/dost-tost-8-x-8-cm.jpg',
    categories: [
      {
        name: 'Tostlar',
        items: [
          {
            id: 'dt-t-1',
            name: 'Dost Tost',
            description: '50 gr. kaşar peyniri, 30 gr. dana kavurma, 30 gr. kasap sucuk',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66181698.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-2',
            name: 'Düşman Tost',
            description: 'Acı soslu 50 gr. kaşar peyniri, 30 gr. dana kavurma, 30 gr. kasap sucuk',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66181676.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-3',
            name: 'Tower Tost',
            description: '3 kat ekmek, 2 kat malzeme',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69061374.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-4',
            name: 'Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038575.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-5',
            name: 'Kaşarlı Sucuklu Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Sucuk',
            price: 80,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038573.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-6',
            name: 'Kasap Sucuklu Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Kasap Sucuk',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038574.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-7',
            name: 'Kavurmalı Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Dana Kavurma',
            price: 125,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038606.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-8',
            name: 'Cheddarlı Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 30 gr. Cheddar',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038630.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-9',
            name: '3 Peynirli Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 30 gr. Cheddar, Labne',
            price: 120,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038630.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-10',
            name: 'Dana Salamlı Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Dana Salam',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-11',
            name: 'Dana Jambonlu Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Dana Jambon',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-12',
            name: 'Dana Baconlu Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Dana Bacon',
            price: 175,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Tostlar'
          },
          {
            id: 'dt-t-13',
            name: 'Füme Roastbeefli Kaşarlı Tost',
            description: 'Seçeceğiniz Ekmekte (Bazlama - Ayvalık - Sandviç ) 50 gr. kaşar peyniri, 40 gr. Füme Roastbeef',
            price: 175,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Tostlar'
          }
          
        ]
      },
      {
        name: 'Menüler',
        items: [
          {
            id: 'dt-m-1',
            name: 'Dost Tost Menü',
            description: 'Dost Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66181698.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-2',
            name: 'Düşman Tost Menü',
            description: 'Düşman Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66181676.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-3',
            name: 'Tower Tost Menü',
            description: 'Tower Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69061374.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-4',
            name: 'Kaşarlı Tost Menü',
            description: 'Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 120,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038575.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-5',
            name: 'Kaşarlı Sucuklu Tost Menü',
            description: 'Kaşarlı Sucuklu Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 140,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038573.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-6',
            name: 'Kasap Sucuklu Kaşarlı Tost Menü',
            description: 'Kasap Sucuklu Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 160,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038574.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-7',
            name: 'Kavurmalı Kaşarlı Tost Menü',
            description: 'Kavurmalı Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 185,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038606.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-8',
            name: 'Cheddarlı Kaşarlı Tost Menü',
            description: 'Cheddarlı Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 160,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038630.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-9',
            name: '3 Peynirli Tost Menü',
            description: '3 Peynirli Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 180,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038630.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-10',
            name: 'Dana Salamlı Kaşarlı Tost Menü',
            description: 'Dana Salamlı Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-11',
            name: 'Dana Jambonlu Kaşarlı Tost Menü',
            description: 'Dana Jambonlu Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-12',
            name: 'Dana Baconlu Tost Menü',
            description: 'Dana Baconlu Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 235,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'dt-m-13',
            name: 'Füme Roastbeefli Kaşarlı Tost Menü',
            description: 'Füme Roastbeefli Kaşarlı Tost + Patates Kızartması + Dilediğiniz İçecek + Söğüş + İkram Tatlı',
            price: 235,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038656.jpg??width=400',
            category: 'Menüler'
          }
        ]
      },
      {
        name: 'Yanlar',
        items: [
          {
            id: 'dt-y-1',
            name: 'Patates Kızartması',
            description: 'İsteğe Göre Baharatlı',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093230.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'dt-y-2',
            name: 'Soğan Halkası',
            description: '6 adet',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65931669.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'dt-y-3',
            name: 'Nugget',
            description: 'Kızarmış Nugget 6 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66796540.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'dt-y-4',
            name: 'Tavuk Topları',
            description: 'İsteğe Göre Tavuk Baharatı İle, 10 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66795371.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'dt-y-5',
            name: 'Mozzarella Sticks',
            description: 'Kızarmış Mozzarella Peyniri, 6 adet',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66794170.jpg??width=400',
            category: 'Yanlar'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'dt-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-10',
            name: 'Çay',
            description: 'Çeşitler İçin Personele Danışınız',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69695783.jpg??width=400',
            category: 'İçecekler'
          },
          
        ]
      },
      {
        name: 'Tatlılar',
        items: [
          {
            id: 'dt-t-1',
            name: 'Nutellalı Bazlama Tost',
            description: 'Bazlama Ekmeğinde Nutella',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65782636.jpg??width=400',
            category: 'Tatlılar'
          },
          {
            id: 'dt-t-2',
            name: 'Dost PB&J',
            description: 'Yer fısıtığı ezmesi ve çilek reçelinin enfes uyumu',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093231.jpg??width=400',
            category: 'Tatlılar'
          },
          {
            id: 'dt-t-3',
            name: 'Reçelli Labneli Tost',
            description: 'Taptaze Labne Peyniri, Üzerine Çilek Reçeli, Çocukluğunuzdan Bir Parça',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093231.jpg??width=400',
            category: 'Tatlılar'
          },
          {
            id: 'dt-t-4',
            name: 'Çikolatalı Donut',
            description: '40 gr. Çikolatalı Donut',
            price: 25,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dunkin-Donuts-Chocolate-Glazed.jpg/800px-Dunkin-Donuts-Chocolate-Glazed.jpg',
            category: 'Tatlılar'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Hart Dog',
    logoUrl: 'https://i.ibb.co/27Gzbp8h/Adobe-Express-file.jpg',
    categories: [
      {
        name: 'Hot Dogs',
        items: [
          {
            id: 'hd--d-1',
            name: 'Hart Dog',
            description: 'Özel Piliç Sosis, İsteğe Göre Turşu + Kıtır Soğan + Patates Kızartması, Dilediğiniz Soslar İle',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125960.jpg??width=400',
            category: 'Hot Dogs'
          },
          {
            id: 'hd-d-2',
            name: 'Kasap Dog',
            description: 'Dana sosis, İsteğe Göre Turşu + Kıtır Soğan + Patates Kızartması, Dilediğiniz Soslar İle',
            price: 125,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66106992.jpg??width=400',
            category: 'Hot Dogs'
          },
           {
            id: 'hd-d-3',
            name: 'Double Kasap Dog',
            description: 'Duble Dana sosis, İsteğe Göre Turşu + Kıtır Soğan + Patates Kızartması, Dilediğiniz Soslar İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66095466.jpg??width=400',
            category: 'Hot Dogs'
          },
           {
            id: 'hd-d-4',
            name: 'Special Dog',
            description: 'Dana sosis + Dana Bacon, İsteğe Göre Turşu + Kıtır Soğan + Patates Kızartması, Dilediğiniz Soslar İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66106992.jpg??width=400',
            category: 'Hot Dogs'
          },
           {
            id: 'hd-d-5',
            name: 'PatDog',
            description: 'Patso, İsteğe Göre Turşu + Kıtır Soğan + Patates Kızartması, Dilediğiniz Soslar İle',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66096009.jpg??width=400',
            category: 'Hot Dogs'
          }
        ]
      },
      {
        name: 'Menüler',
        items: [
           {
            id: 'hd-m-1',
            name: 'Hart Dog Menü',
            description: 'Hart Dog + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 160,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125989.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'hd-m-2',
            name: 'Kasap Dog Menü',
            description: 'Kasap Dog + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 185,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125989.jpg??width=400',
            category: 'Menüler'
          },
           {
            id: 'hd-m-3',
            name: 'Double Kasap Dog Menü',
            description: 'Double Kasap Dog + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125989.jpg??width=400',
            category: 'Menüler'
          },
           {
            id: 'hd-m-4',
            name: 'Special Dog Menü',
            description: 'Special Dog + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125989.jpg??width=400',
            category: 'Menüler'
          },
           {
            id: 'hd-m-5',
            name: 'PatDog Menü',
            description: 'Pat Dog + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 135,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125989.jpg??width=400',
            category: 'Menüler'
          }
        ]
      },
      {
        name: 'Yanlar',
        items: [
          {
            id: 'hd-y-1',
            name: 'Patates Kızartması',
            description: 'İsteğe Göre Baharatlı',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093230.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'hd-y-2',
            name: 'Soğan Halkası',
            description: '6 adet',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65931669.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'hd-y-3',
            name: 'Nugget',
            description: 'Kızarmış Nugget 6 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66796540.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'hd-y-4',
            name: 'Tavuk Topları',
            description: 'İsteğe Göre Tavuk Baharatı İle, 10 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66795371.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'hd-y-5',
            name: 'Mozzarella Sticks',
            description: 'Kızarmış Mozzarella Peyniri, 6 adet',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66794170.jpg??width=400',
            category: 'Yanlar'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'hd-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'hd-i-10',
            name: 'Çay',
            description: 'Çeşitler İçin Personele Danışınız',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69695783.jpg??width=400',
            category: 'İçecekler'
          },
          
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Wonder Waffle',
    logoUrl: 'https://i.ibb.co/QjXJ2H4n/wonder-waffle.jpg',
    categories: [
      {
        name: 'Wafflelar',
        items: [
          {
            id: 'ww-1',
            name: 'Waffle Kendin Yap Meyveli',
            description: 'Taban Çikolatası Seçimi (Beyaz, Sütlü, Bitter, Karamel) - Malzemelerden İstediğinizi Seçebilirsiniz (Muz, Çilek, Kivi, Çakıltaşı, Bonibon, Sütlü Damla Çikolata, Bitter Damla Çikolata, Beyaz Damla Çikolata, Frambuazlı Damla Çikolata, Bitter Pirinç Patlağı, Beyaz Buğday Patlağı, Hindistan Cevizi) - Soslardan İstediğinizi Seçebilirsiniz (Karamel, Sütlü Çikolata, Bitter, Çilek, Frambuaz, Kivi, Antep Fıstığı, Muz)',
            price: 125,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66146808.jpg??width=400',
            category: 'Wafflelar'
          },
          {
            id: 'ww-2',
            name: 'Waffle Kendin Yap Meyvesiz',
            description: 'Taban Çikolatası Seçimi (Beyaz, Sütlü, Bitter, Karamel) - Malzemelerden İstediğinizi Seçebilirsiniz (Çakıltaşı, Bonibon, Sütlü Damla Çikolata, Bitter Damla Çikolata, Beyaz Damla Çikolata, Frambuazlı Damla Çikolata, Bitter Pirinç Patlağı, Beyaz Buğday Patlağı, Hindistan Cevizi) - Soslardan İstediğinizi Seçebilirsiniz (Karamel, Sütlü Çikolata, Bitter, Çilek, Frambuaz, Kivi, Antep Fıstığı, Muz)',
            price: 100,
            imageUrl: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
            category: 'Tatlı Waffle'
          }
        ]
      },
     {
        name: 'İçecekler',
        items: [
           {
            id: 'ww-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ww-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'dt-i-10',
            name: 'Çay',
            description: 'Çeşitler İçin Personele Danışınız',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69695783.jpg??width=400',
            category: 'İçecekler'
          }
          
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Pilavneli',
    logoUrl: 'https://i.ibb.co/xtyRp28z/pilavneli-1.jpg',
    categories: [
      {
        name: 'Pilavlar',
        items: [
          {
            id: 'pv-1',
            name: 'Tavuklu Pilav (75 gr.)',
            description: '75 gram Tiftik Tavuk, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66425669.jpg??width=400',
            category: 'Pilavlar'
          },
          {
            id: 'pv-2',
            name: 'Tavuklu Nohutlu Pilav (75 gr.)',
            description: '75 gram Tiftik Tavuk, Haşlanmış Nohut , Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 105,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66426173.jpg??width=400',
            category: 'Pilavlar'
          },
          {
            id: 'pv-3',
            name: 'Duble Tavuklu Pilav (150 gr.)',
            description: '150 gram Tiftik Tavuk, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66426268.jpg??width=400',
            category: 'Pilavlar'
          },
          {
            id: 'pv-4',
            name: 'Duble Tavuklu Nohutlu Pilav',
            description: '150 gram Tiftik Tavuk, Haşlanmış Nohut, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 155,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66426293.jpg??width=400',
            category: 'Pilavlar'
          },
          {
            id: 'pv-5',
            name: 'Köri Soslu Tavuklu Pilav',
            description: '150 gram Köri Soslu Tavuk, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69027750.jpg??width=400',
            category: 'Pilavlar'
          },
          {
            id: 'pv-6',
            name: 'Mantarlı Tavuk Soteli Pilav',
            description: '150 gram Mantarlı Tavuk Sote, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69012478.jpg??width=400',
            category: 'Pilavlar'
          },
           {
            id: 'pv-7',
            name: 'Etli Kuru Fasulyeli Pilav',
            description: '150 gram Etli Kuru Fasulye, Pirinç Pilavı Yanında Söğüş, Turşular, Özel Pilavneli Sosu ve Helva',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69012472.jpg??width=400',
            category: 'Pilavlar'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'pv-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'pv-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'5',
    name: 'Çiko Çiğköfte',
    logoUrl: 'https://i.ibb.co/N2bP3X5H/cccckofte.jpg',
    categories: [
      {
        name: 'Dürümler',
        items: [
          {
            id: 'cc-1',
            name: 'Meksika Usulü Çiğköfte Wrap',
            description: 'Tortilla Ekmeğinde 200 gram Çiğ Köfte, Salsa Sosu, Meksika Fasulyesi, Jalapeno Turşusu ve Doritos İle',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66545562.jpg??width=400',
            category: 'Dürümler'
          },
          {
            id: 'cc-2',
            name: 'Çiğköfte Taco',
            description: 'Sert Taco Kabuğu Arasında 100 gr. Çiğ Köfte, Salsa Sosu, Meksika Fasulyesi, Jalapeno Turşusu ve Doritos İle',
            price: 60,
            imageUrl: 'https://www.refikaninmutfagi.com/taco-cigkofte-tarifi-149-atistirmalik-taco-cigkofte-tarifi-109-14-K.jpg',
            category: 'Dürümler'
          },
          {
            id: 'cc-3',
            name: 'Çiğköfte Dürüm',
            description: 'Çift Lavaşa 100 gram Çiğ Köfte Ekstra 50 gram ÇiğKöfte = +15 Ekstra Doritos = +5 Ekstra Lavaş = +5 Malzeme Seçimi (Marul, Domates, Turşu, Nane, Roka, Maydonoz, Yeşil Biber, Kırmızı Biber, Nar Ekşisi, Limon Sosu, Acı Sos',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66545620.jpg??width=400',
            category: 'Dürümler'
          },
        ]
      },
      {
        name: 'Porsiyonlar',
        items: [
          {
            id: 'cc-4',
            name: '250 gr. Porsiyon',
            description: '250 gram Çiğ Köfte Garnitür Lavaş ve Nar Ekşisi İle Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66546048.jpg??width=400',
            category: 'Porsiyonlar'
          },
          {
            id: 'cc-5',
            name: '500 gr. Porsiyon',
            description: '500 gram Çiğ Köfte Garnitür Lavaş ve Nar Ekşisi İle Servis Edilir',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66546048.jpg??width=400',
            category: 'Porsiyonlar'
          },
          {
            id: 'cc-6',
            name: '1000 gr. Porsiyon',
            description: '1000 gram Çiğ Köfte Garnitür Lavaş ve Nar Ekşisi İle Servis Edilir',
            price: 300,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66546048.jpg??width=400',
            category: 'Porsiyonlar'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'cc-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'cc-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'6',
    name: '322 Döner',
    logoUrl: 'https://i.ibb.co/23mpVjzh/resim-2025-02-10-195009505.png',
    categories: [
      {
      name: 'Dönerler',
      items:[
         {
            id: 'do-d-1',
            name: 'Bazlama Ekmeğinde Tavuk Döner',
            description: '100 Gram Tavuk Döner, 50 Gram Kaşar Peyniri, Özel Domates Sosu İle, Menü +60',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67688791.jpg??width=400',
            category: 'Dönerler'
          },
         {
            id: 'do-d-2',
            name: 'Lokmalık Tavuk Döner Dürüm',
            description: 'Çift İnce Lavaşa Sarılmış 100 Gram Tavuk Döner, Özel Domates Sosu İle, Menü +60, Malzeme Seçimi (Patates Kızartması, Domates, Marul, Turşu, Jalapeno',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67688829.jpg??width=400',
            category: 'Dönerler'
          },
         {
            id: 'do-d-3',
            name: 'Tavuk Döner Wrap',
            description: 'Mısır Tortillasına Sarılmış 100 Gram Tavuk Döner, Özel Domates Sosu İle, Menü +60 Malzeme Seçimi (Patates Kızartması, Domates, Marul, Turşu, Jalapeno',
            price: 110,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67688903.jpg??width=400',
            category: 'Dönerler'
          }
      ]
        },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'do-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'do-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'do-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
      ]
  },
  {
    id:'7',
    name: 'Tavuk Sepeti',
    logoUrl: 'https://i.ibb.co/pjdqn1nD/resim-2025-02-10-195150076.png',
    categories: [
      {
      name : 'Sepetler',
      items: [
        {
            id: 'ts-s-1',
            name: 'Jumbo Filetolu Sepet',
            description: '200 Gram Jumbo Fileto Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686772.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-2',
            name: 'Jumbo Filetolu Sepet (XL)',
            description: '300 Gram Jumbo Fileto Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 200,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686772.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-3',
            name: 'Nuggetlı Sepet',
            description: '200 Gram Nugget Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686703.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-4',
            name: 'Nuggetlı Sepet (XL)',
            description: '300 Gram Nugget Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686703.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-5',
            name: 'Piliç Toplu Sepet',
            description: '200 Gram Piliç Topu Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686731.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-6',
            name: 'Piliç Toplu Sepet (XL)',
            description: '300 Gram Piliç Topu Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686731.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-s-7',
            name: 'Mozzarella Sticks Sepeti',
            description: '200 Gram Mozzarella Sticks Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686807.jpg??width=400',
            category: 'Sepetler'
          },
        {
            id: 'ts-k-1',
            name: 'Mozzarella Sticks Sepeti (XL)',
            description: '300 Gram Mozzarella Sticks Patates Kızartması İle, İsteğe Göre Baharat, Soslar ve Kıtır Soğan İle',
            price: 200,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67686807.jpg??width=400',
            category: 'Sepetler'
          }
      ]
        },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'ts-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ts-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'8',
    name:'Annemin Elinden Ev Yemekleri',
    logoUrl: 'https://i.ibb.co/RT6fxmjG/Annem-in-Elinden-Sub-brand-Logos.png',
    categories: [
      {
        name: 'Çorbalar',
        items: [
          {
            id: 'ae-c-1',
            name: 'Mercimek Çorbası',
            description: 'Mercimek',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67784860.jpg??width=400',
            category: 'Çorbalar'
          },
          {
            id: 'ae-c-2',
            name: 'Ezogelin',
            description: 'Ezogelin',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/67784861.jpg??width=400',
            category: 'Çorbalar'
          },
          {
            id: 'ae-c-3',
            name: 'Yayla Çorbası',
            description: 'Yayla Çorbası',
            price: 50,
            imageUrl: 'https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/soups/yayla-corbasi/YaylaCorbasi_Main.jpeg',
            category: 'Çorbalar'
          }
        ]
      },
      {
        name: 'Sebze Yemekleri',
        items: [
           {
            id: 'ae-s-1',
            name: 'Mücver',
            description: 'Mücver',
            price: 80,
            imageUrl: 'https://www.ardaninmutfagi.com/wp-content/uploads/2022/04/mucver-i1.jpg',
            category: 'Sebze Yemekleri'
          },
           {
            id: 'ae-s-2',
            name: 'Bezelye Yemeği',
            description: 'Bezelye Yemeği',
            price: 80,
            imageUrl: 'https://cdn.tarifikolay.com/public/tt/img/bezelye-yemegi_4x3_1706-375x281.jpg',
            category: 'Sebze Yemekleri'
          },
           {
            id: 'ae-s-3',
            name: 'Ispanak Yemeği',
            description: 'Ispanak',
            price: 80,
            imageUrl: 'https://i.lezzet.com.tr/images-xxlarge-recipe/ispanak-yemegi-3023e837-cdbf-4d83-a30b-acc9d82d6bd0.jpg',
            category: 'Sebze Yemekleri'
          },
           {
            id: 'ae-s-4',
            name: 'Taze Fasulye',
            description: 'Taze Fasulye',
            price: 80,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBUpV5yyYmNbuEPw0v8vEuuBQB8iRY6wWOQ&s',
            category: 'Sebze Yemekleri'
          },
           {
            id: 'ae-s-5',
            name: 'Biber Dolması',
            description: '2 adet',
            price: 100,
            imageUrl: 'https://s8k8w4m8.delivery.rocketcdn.me/wp-content/uploads/2008/03/etli_biber_dolmasi_tarifi-640x445.jpg',
            category: 'Sebze Yemekleri'
          }
        ]
      },
      {
        name: 'Tavuk Yemekleri',
        items: [
           {
            id: 'ae-t-1',
            name: 'Köri Soslu Tavuk',
            description: '250 Gram Tavuk',
            price: 120,
            imageUrl: 'https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-chicken-curry-recipe-1667606333.jpg',
            category: 'Tavuk Yemekleri'
          },
           {
            id: 'ae-t-2',
            name: 'Mantarlı Tavuk Sote',
            description: '250 Gram Tavuk',
            price: 120,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QGHkKDwRIGXSjxu9UXgrEsuvNyNlBbi3aw&s',
            category: 'Tavuk Yemekleri'
          },
           {
            id: 'ae-t-3',
            name: 'Fırın Baget',
            description: '2 adet, sebzelerle servis edilir',
            price: 120,
            imageUrl: 'https://www.ebruomurcali.com.tr/wp-content/uploads/2020/05/portakalli-firin-baget_1600.jpg',
            category: 'Tavuk Yemekleri'
          }
        ]
      },
      {
        name: 'Et Yemekleri',
        items: [
          {
            id: 'ae-e-1',
            name: 'Etli Kuru Fasulye',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://image.hurimg.com/i/hurriyet/75/750x422/5e787099d3806c27c4ef5369.jpg',
            category: 'Et Yemekleri'
          },
          {
            id: 'ae-e-2',
            name: 'Etli Nohut Yahni',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://www.ardaninmutfagi.com/wp-content/uploads/2019/09/etli-nohut-yemegi-i.jpg',
            category: 'Et Yemekleri'
          },
          {
            id: 'ae-e-3',
            name: 'Kadınbudu Köfte',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8L3pbAjO-Mxwwq3_S-b-hr4PV5Y_pFz7WA&s',
            category: 'Et Yemekleri'
          },
          {
            id: 'ae-e-4',
            name: 'İzmir Köfte',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiFpDmFToe8Q6_E9fXEsks5jub6Y_gcP1ug&s',
            category: 'Et Yemekleri'
          },
          {
            id: 'ae-e-5',
            name: 'Patlıcan Musakka',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0rNVvZF7wI2eNF7jGnOS1akieGUZz-Hibw&s',
            category: 'Et Yemekleri'
          },
          {
            id: 'ae-e-6',
            name: 'Püreli Et Sote',
            description: '300 Gram',
            price: 120,
            imageUrl: 'https://i.ytimg.com/vi/rDdO2oKGqEE/maxresdefault.jpg',
            category: 'Et Yemekleri'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'ae-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'ae-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'9',
    name: 'Fit Wraps',
    logoUrl:'https://i.ibb.co/Wp5vbmJm/Fit-Wraps-Logo.png',
    categories: [
      {
        name: 'Wraps',
        items:[
           {
            id: 'fw-w-1',
            name: 'Falafel Wrap',
            description: 'Malzeme Seçimi (Domates, Salatalık, Marul, Yeşil Biber, Kırmızı Biber,Roka,Maydonoz, Nane, Havuç, Labne +10, Sezar Sos +5',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68722301.jpg??width=400',
            category: 'Wraps'
          },
           {
            id: 'fw-w-2',
            name: 'Hellim Wrap',
            description: 'Malzeme Seçimi (Domates, Salatalık, Marul, Yeşil Biber, Kırmızı Biber,Roka,Maydonoz, Nane, Havuç, Labne +10, Sezar Sos +5',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68722391.jpg??width=400',
            category: 'Wraps'
          },
           {
            id: 'fw-w-3',
            name: 'Mozzarella Wrap',
            description: 'Malzeme Seçimi (Domates, Salatalık, Marul, Yeşil Biber, Kırmızı Biber,Roka,Maydonoz, Nane, Havuç, Labne +10, Sezar Sos +5',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68722470.jpg??width=400',
            category: 'Wraps'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'fw-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'fw-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'10',
    name:'Sandwich Lab',
    logoUrl:'https://i.ibb.co/DPXYtkp9/sandwich-lab-logo.png',
    categories: [
      {
        name: 'Peynirli Sandviçler',
        items:[
          {
            id: 'sl-p-1',
            name: 'Kaşarlı Sandviç',
            description: '50 gr. Kaşar + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 60,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-2',
            name: 'Çeçil Peynirli Sandviç',
            description: '50 gr. Çeçil Peyniri + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 60,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-3',
            name: 'Örgü Peynirli Sandviç',
            description: '50 gr. Örgü Peyniri + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 60,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-4',
            name: 'Mozzarellalı Sandviç',
            description: '50 gr. Mozzarella + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 70,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-5',
            name: 'Cheddarlı Sandviç',
            description: '40 gr. Cheddar + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 75,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-6',
            name: '3 Peynirli Sandviç',
            description: '20 gr. Kaşar, 20 gr. Cheddar, Labne + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 75,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-7',
            name: 'Yerel 3 Peynirli Sandviç',
            description: '20 gr. Kaşar, 20gr. Eski Kaşar, 20gr. Ezine Peyniri + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 80,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          },
          {
            id: 'sl-p-8',
            name: 'Eski Kaşarlı Sandviç',
            description: '50 gr. Eski Kaşar + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 80,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Peynirli Sandviçler'
          }
        ]
      },
      {
        name: 'Piliç Şarküteri',
        items:[
          {
          id: 'sl-ps-1',
            name: 'Tavuk Salamlı Sandviç',
            description: '50 gr. Kaşar, 50 gr. Tavuk Salam + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 90,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Piliç Şarküteri'
          },
          {
            id: 'sl-ps-2',
            name: 'Tavuk Jambonlu (Beyaz) Sandviç',
            description: '50 gr. Kaşar, 50 gr. Tavuk Jambon + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 90,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Piliç Şarküteri'
          }
        ]
      },
      {
        name: 'Hindi Şarküteri',
        items:[
          {
          id: 'sl-hs-1',
            name: 'Hindi Salamlı Sandviç',
            description: '50 gr. Kaşar, 50 gr. Hindi Salam + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 100,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Hindi Şarküteri'
          },
          {
          id: 'sl-hs-2',
            name: 'Hindi Jambonlu Sandviç',
            description: '50 gr. Kaşar, 50 gr. Hindi Jambon + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 100,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Hindi Şarküteri'
          },
          {
          id: 'sl-hs-3',
            name: 'Hindi Fümeli Sandviç',
            description: '50 gr. Kaşar, 50 gr. Hindi Füme + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 120,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Hindi Şarküteri'
          }
        ]
      },
      {
        name:'Dana Şarküteri',
        items:[
          {
          id: 'sl-ds-1',
            name: 'Dana Salamlı Sandviç',
            description: '50 gr. Kaşar, 50 gr. Dana Salam + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 120,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Dana Şarküteri'
          },
           {
          id: 'sl-ds-2',
            name: 'Dana Jambonlu Sandviç',
            description: '50 gr. Kaşar, 50 gr. Dana Jambon + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 120,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Dana Şarküteri'
          },
           {
          id: 'sl-ds-3',
            name: 'Dana Baconlu Sandviç',
            description: '50 gr. Kaşar, 50 gr. Dana Bacon + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 150,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Dana Şarküteri'
          },
           {
          id: 'sl-ds-4',
            name: 'Füme Roastbeefli Sandviç',
            description: '50 gr. Kaşar, 50 gr. Füme Roastbeef + Dilediğiniz Malzemeler (Domates, Salatalık, Marul, Havuç, Turşu, Jalapeno, Yeşil Biber, Kırmızı Biber, Nane, Maydonoz, Roka',
            price: 150,
imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68714400.jpg??width=400',
            category: 'Dana Şarküteri'
          },
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'sl-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sl-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'11',
    name:'Smaaash Burger',
    logoUrl:'https://i.ibb.co/0P0zScB/SMAAASH-Burger.png',
    categories:[
      {
        name:'Burgerler',
        items:[
          {
            id: 'sb-b-1',
            name: 'Smaaash Burger',
            description: 'Brioche Ekmeğinde 100 gr. Dana Smaaash Burger',
            price: 150,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-2',
            name: 'Cheese Smaaash Burger',
            description: 'Brioche Ekmeğinde 100 gr. Dana Smaaash Burger, Cheddar Peyniri',
            price: 170,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-3',
            name: 'Smaaash Bacon Burger',
            description: 'Brioche Ekmeğinde Dana Baconlu 100 gr. Dana Smaaash Burger',
            price: 175,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-4',
            name: 'Double Smaaash Burger',
            description: 'Brioche Ekmeğinde 2 adet 100 gr. Dana Smaaash Burger Köftesi',
            price: 200,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-5',
            name: 'Double Cheese Smaaash Burger',
            description: 'Brioche Ekmeğinde 2 adet 100 gr. Dana Smaaash Burger Köftesi, Cheddar Peyniri İle',
            price: 220,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-6',
            name: 'Double Smaaash Bacon Burger',
            description: 'Brioche Ekmeğinde 2 adet 100 gr. Dana Smaaash Burger Köftesi, Dana Bacon',
            price: 225,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-7',
            name: 'King Smaaash Burger',
            description: 'Brioche Ekmeğinde 3 adet 100 gr. Dana Smaaash Burger Köftesi, Dana Bacon, Cheddar Peyniri İle',
            price: 300,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          },
          {
            id: 'sb-b-8',
            name: 'Fried Chicken Burger',
            description: 'Brioche Ekmeğinde 150 gr. Tavuk Filetolu Burger',
            price: 100,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69227714.jpg??width=400',
            category: 'Burgerler'
          }
        ]
      },
      {
        name:'Menüler',
        items:[
          {
            id: 'sb-m-1',
            name: 'Smaaash Burger Menü',
            description: 'Smaaash Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 210,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-2',
            name: 'Cheese Smaaash Burger Menü',
            description: 'Cheese Smaaash Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 230,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-3',
            name: 'Smaaash Bacon Burger Menü',
            description: 'Smaaash Bacon Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 235,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-4',
            name: 'Double Smaaash Burger Menü',
            description: 'Double Smaaash Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 260,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-5',
            name: 'Double Cheese Smaaash Burger Menü',
            description: 'Double Cheese Smaaash Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 280,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-6',
            name: 'Double Smaaash Bacon Burger Menü',
            description: 'Double Smaaash Bacon Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 285,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-7',
            name: 'King Smaaash Burger Menü',
            description: 'King Smaaash Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 360,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          },
          {
            id: 'sb-m-8',
            name: 'Fried Chicken Burger Menü',
            description: 'Fried Chicken Burger + Patates Kızartması + Dilediğiniz Kutu İçecek',
            price: 160,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69228301.jpg??width=400',
            category: 'Menüler'
          }
        ]
      },
       {
        name: 'Yanlar',
        items: [
          {
            id: 'sb-y-1',
            name: 'Patates Kızartması',
            description: 'İsteğe Göre Baharatlı',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093230.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'sb-y-2',
            name: 'Soğan Halkası',
            description: '6 adet',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65931669.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'sb-y-3',
            name: 'Nugget',
            description: 'Kızarmış Nugget 6 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66796540.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'sb-y-4',
            name: 'Tavuk Topları',
            description: 'İsteğe Göre Tavuk Baharatı İle, 10 adet',
            price: 50,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66795371.jpg??width=400',
            category: 'Yanlar'
          },
          {
            id: 'sb-y-5',
            name: 'Mozzarella Sticks',
            description: 'Kızarmış Mozzarella Peyniri, 6 adet',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66794170.jpg??width=400',
            category: 'Yanlar'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'sb-i-1',
            name: 'Taze Sıkılmış Portakal Suyu',
            description: 'Taptaze, Şişelenmiş Şekilde Servis Edilir',
            price: 75,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/68294217.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-7',
            name: 'Tropicana Meyve Suyu',
            description: 'Vişne - Karışık - Şeftali',
            price: 40,
            imageUrl: 'https://malatyapide.com/wp-content/uploads/2023/01/tropikana-meyve-suyu.jpg',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sb-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          }
        ]
      }
    ]
  },
  {
    id:'12',
    name:'SucuKöfte',
    logoUrl:'https://i.ibb.co/zW86KvTk/resim-2025-02-10-200553464.png',
    categories:[
      {
        name:'Ekmek Arası',
        items:[
          {
            id:'sk-e-1',
            name: 'Yarım Ekmek Köfte',
            description: '150 gr. Köfte İstediğiniz Malzemeler (Domates, Soğan, Yeşil Biber, Kırmızı Biber İle',
            price: 150,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDw0pAy9LMXW8fAYOXddZnROHuNzdTqOFDw&s',
            category: 'Ekmek Arası'
          },
          {
            id:'sk-e-2',
            name: 'Yarım Ekmek Sucuk',
            description: '150 gr. Sucuk İstediğiniz Malzemeler (Domates, Soğan, Yeşil Biber, Kırmızı Biber İle',
            price: 150,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGUujqzmwQu-bGUmmk4rjKXL1mIZgK1Bi41Q&s',
            category: 'Ekmek Arası'
          }
        ]
      },
       {
        name:'Wrapler',
        items:[
          {
            id:'sk-w-1',
            name: 'Köfte Wrap',
            description: 'Tortilla Ekmeğinde 150 gr. Köfte İstediğiniz Malzemeler (Domates, Soğan, Yeşil Biber, Kırmızı Biber İle',
            price: 150,
            imageUrl: 'https://migrostvstr.blob.core.windows.net/migrostv/2017/11/etli-wrap.jpg',
            category: 'Wrapler'
          },
          {
            id:'sk-w-2',
            name: 'Sucuk Wrap',
            description: 'Tortilla Ekmeğinde 150 gr. Sucuk İstediğiniz Malzemeler (Domates, Soğan, Yeşil Biber, Kırmızı Biber İle',
            price: 150,
            imageUrl: 'https://i.ytimg.com/vi/JDnepPcT6RE/maxresdefault.jpg',
            category: 'Wrapler'
          }
        ]
      },
      {
        name: 'Porsiyon',
        items:[
          {
            id:'sk-p-1',
            name: 'Köfte Porsiyon',
            description: '150 gr. Köfteve Pilav Yancılarıyla Servis Edilir ',
            price: 200,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/LH/w2zj-listing.jpg',
            category: 'Porsiyon'
          }
        ]
      },
      {
        name: 'İçecekler',
        items: [
           {
            id: 'sk-i-2',
            name: 'Pepsi',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093232.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-3',
            name: 'Pepsi Zero Sugar',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584294.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-4',
            name: 'Yedigün',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584306.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-5',
            name: '7Up',
            description: '33lük Kutu',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66125926.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-6',
            name: 'Lipton Ice Tea',
            description: 'Limon - Şeftali - Mango ',
            price: 40,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/65584318.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-8',
            name: 'Sek Ayran (28.5 cl)',
            description: 'Eker Ayran Büyük',
            price: 30,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/66093233.jpg??width=400',
            category: 'İçecekler'
          },
           {
            id: 'sk-i-9',
            name: 'Doğanay Gurme Şalgam',
            description: 'Acılı - Acısız',
            price: 20,
            imageUrl: 'https://images.deliveryhero.io/image/fd-tr/Products/69038669.jpg??width=400',
            category: 'İçecekler'
          } 
        ]
      }
    ]
  }
    ];
  
export function getRestaurantCategories(restaurantName: string): string[] {
  const restaurant = restaurantMenus.find(r => r.name === restaurantName);
  return restaurant ? restaurant.categories.map(cat => cat.name) : [];
}