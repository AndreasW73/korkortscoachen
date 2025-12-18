export const FARM_GENDER_OPTIONS = [
  { label: 'Men', value: 'Men' },
  { label: 'Women', value: 'Women' },
  { label: 'Kids', value: 'Kids' },
];

export const FARM_TAGS = [
  'Köttproduktion',
  'Ekologiskt jordbruk',
  'Grönsaksodling',
  'Mejeri',
  'Frigående ägg',
  'Biodling',
  'Gårdsbutik',
  'Fiske',
  'Akvaponi',
  'Permakultur',
  'Fruktodling',
  'Kryddor och örter',
  'Bär',
  'Svampodling',
  'Växthus',
  'Djurhållning',
  'Skogsbruk',
  'Hållbart jordbruk',
  'Andelsjordbruk (CSA)',
  'Gård-till-bord',
  'Agroturism',
  'Kurser och workshops',
  'Stugboende',
  'Lokalt hantverk',
  'Gårdscafé',
];


export const FARM_CATEGORY_OPTIONS = ['Shose', 'Apparel', 'Accessories'];

export const FARM_RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

export const FARM_COLOR_OPTIONS = [
  '#FF4842',
  '#1890FF',
  '#FFC0CB',
  '#00AB55',
  '#FFC107',
  '#7F00FF',
  '#000000',
  '#FFFFFF',
];

export const FARM_COLOR_NAME_OPTIONS = [
  { value: '#FF4842', label: 'Red' },
  { value: '#1890FF', label: 'Blue' },
  { value: '#FFC0CB', label: 'Pink' },
  { value: '#00AB55', label: 'Green' },
  { value: '#FFC107', label: 'Yellow' },
  { value: '#7F00FF', label: 'Violet' },
  { value: '#000000', label: 'Black' },
  { value: '#FFFFFF', label: 'White' },
];

export const FARM_SIZE_OPTIONS = [
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '8.5', label: '8.5' },
  { value: '9', label: '9' },
  { value: '9.5', label: '9.5' },
  { value: '10', label: '10' },
  { value: '10.5', label: '10.5' },
  { value: '11', label: '11' },
  { value: '11.5', label: '11.5' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
];

export const FARM_STOCK_OPTIONS = [
  { value: 'in stock', label: 'In stock' },
  { value: 'low stock', label: 'Low stock' },
  { value: 'out of stock', label: 'Out of stock' },
];

export const FARM_PUBLISH_OPTIONS = [
  { value: 'published', label: 'Published' },
  { value: 'draft', label: 'Draft' },
];

export const FARM_SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
];

export const FARM_CATEGORY_GROUP_OPTIONS = [
  { group: 'Clothing', classify: ['Shirts', 'T-shirts', 'Jeans', 'Leather', 'Accessories'] },
  { group: 'Tailored', classify: ['Suits', 'Blazers', 'Trousers', 'Waistcoats', 'Apparel'] },
  { group: 'Accessories', classify: ['Shoes', 'Backpacks and bags', 'Bracelets', 'Face masks'] },
];

export const MOCKED_FARMS = {
  "farms": [
    {
      "id": "d3e4f5a6-b7c8-4d9e-b0f1-2a3b4c5d6e7f",
      "name": "Mor Linas Getgård",
      "ownerName": "Lina Englund",
      "address": {
        "name": "Mor Linas Getgård",
        "company": "Mor Linas Getgård",
        "primary": true,
        "fullAddress": "Born Hembornsvägen 49, 795 92 Rättvik",
        "phoneNumber": "+46 76 856 58 50",
        "addressType": "Gård"
      },
      "location": { "latitude": 60.731, "longitude": 15.156 },
      "contactEmail": "linas.getgard@gmail.com",
      "contactPhone": "+46 76 856 58 50",
      "websiteUrl": "https://morlinasgetgard.se/",
      "foundedYear": 2021,
      "farmSize": 10,
      "farmType": "Getgård och mejeri",
      "description": "Mor Linas Getgård är en liten getgård i Born, Rättvik, där vi tillverkar hantverksmässiga getostar och erbjuder en levande gårdsupplevelse.",
      "shortDescription": "Hantverksmejeri med getost och gårdsupplevelse.",
      "mainImageUrl": "https://morlinasgetgard.se/data/files/image2.jpg",
      "galleryImageUrls": [
        "https://morlinasgetgard.se/data/files/img_2184.jpg",
        "https://morlinasgetgard.se/data/files/theme/img_20211005_193301_814.jpg",
        "https://morlinasgetgard.se/data/files/20220316105452_img_3839.jpg",
        "https://morlinasgetgard.se/data/files/dscf1601-2.jpg.jpg",
        "https://morlinasgetgard.se/data/files/img_2288.jpg",
        "https://morlinasgetgard.se/data/files/img_3792.jpg",
        "https://morlinasgetgard.se/data/files/img_7085.jpg"
      ],
      "certifications": ["Eldrimner-certifierad mathantverkare"],
      "facilities": [
        // {
        //   type: 'Farm Shop',
        //   available: true,
        //   openingHours: 'Måndag-Fredag 10–18',
        //   description: 'Sells local cheese, eggs, and vegetables.',
        // },
        {
          type: 'Online Shop',
          available: true,
          url: '/products',
        },
      ],
      "status": "active",
      "publishStatus": "published",
      "reviews": [],
      "totalRatings": 4.8,
      "totalReviews": 50,
      "createdAt": "2024-01-10T10:00:00Z",
      "labels": { "featuredFarm": true }
    },
    {
      "id": "b1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
      "name": "Björgården Syltmakeri & Gårdsbutik",
      "ownerName": "Yvonne & Jonas",
      "address": {
        "name": "Björgården",
        "company": "Björgården",
        "primary": true,
        "fullAddress": "Björgården, Rättvik",
        "phoneNumber": "+46 70 301 91 77",
        "addressType": "Gård"
      },
      "location": { "latitude": 60.883, "longitude": 15.106 },
      "contactEmail": "bjorgarden@gmail.com",
      "contactPhone": "+46 70 301 91 77",
      "websiteUrl": "https://bjorgarden.se/",
      "foundedYear": 2010,
      "farmSize": 5,
      "farmType": "Syltmakeri",
      "description": "Syltmakeri och gårdsbutik med produkter av närodlade frukter och bär.",
      "shortDescription": "Hantverkssylt och delikatesser.",
      "mainImageUrl": "http://bjorgarden.se/wp-content/uploads/2018/04/DSC_4923-e1522789523204.jpg",
      "galleryImageUrls": [
        "http://bjorgarden.se/wp-content/uploads/2018/04/DSC_4853-e1522788991249.jpg",
        "http://bjorgarden.se/wp-content/uploads/2018/03/1_DSC8604.jpg",
        "http://bjorgarden.se/wp-content/uploads/2018/05/20180516_133335-e1526581950600.jpg",
        "http://bjorgarden.se/wp-content/uploads/2018/04/DSC_4923-e1522789523204.jpg",
        "http://bjorgarden.se/wp-content/uploads/2018/04/DSC_2811-e1522789289711.jpg"
      ],
      "certifications": [],
      "facilities": [
        // {
        //   type: 'Farm Shop',
        //   available: true,
        //   openingHours: 'Måndag-Fredag 10–18',
        //   description: 'Sells local cheese, eggs, and vegetables.',
        // },
        {
          type: 'Café',
          available: false,
        },
        {
          type: 'Online Shop',
          available: true,
          url: 'https://examplefarm.se/shop',
        },
        {
          type: 'Workshops',
          available: true,
          description: 'Cheese-making workshops held monthly.',
        },
      ],
      "status": "active",
      "publishStatus": "published",
      "reviews": [],
      "totalRatings": 4.7,
      "totalReviews": 22,
      "createdAt": "2010-04-22T08:00:00Z",
      "labels": { "featuredFarm": false }
    },
    {
      "id": "c1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
      "name": "Gårdsfisk",
      "ownerName": "Johan Ljungquist & Mikael Olenmark",
      "address": {
        "name": "Gårdsfisk",
        "company": "Gårdsfisk AB",
        "primary": true,
        "fullAddress": "Skättilljunga 101, 291 94 Kristianstad",
        "phoneNumber": "+46 723 07 69 59",
        "addressType": "Gård"
      },
      "location": { "latitude": 56.032, "longitude": 14.152 },
      "contactEmail": "info@gardsfisk.se",
      "contactPhone": "+46 723 07 69 59",
      "websiteUrl": "https://www.gardsfisk.se/",
      "foundedYear": 2013,
      "farmSize": 2,
      "farmType": "Landbaserad fiskodling",
      "description": "Gårdsfisk är pionjärer inom hållbar fiskodling på land i Sverige. De föder upp fiskarter som Clarias och Rödstrimma i slutna system på gårdar, vilket minimerar miljöpåverkan.",
      "shortDescription": "Hållbar fiskodling på land i Skåne.",
      "mainImageUrl": "https://tse1.mm.bing.net/th/id/OIP.bpSP2jA7jMpCM2plJjeuQwHaD5?w=249&h=249&c=7",
      "galleryImageUrls": [
        "https://static.wixstatic.com/media/194825_a2880456f3a8495490a1fa1bad00a497~mv2.png/v1/fill/w_493,h_496,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Clarias_Frilagd%20transparant%20bakgrund%20!.png",
        "https://static.wixstatic.com/media/194825_7f20ad50485d4af48c314b62d9ec77a9~mv2.png/v1/crop/x_333,y_0,w_2749,h_1699/fill/w_484,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/R%C3%B6dstrimma_Transparant%20bakgrund.png"
      ],
      "certifications": ["Från Sverige", "Äkta Vara", "Klimatcertifierad"],
      "facilities": [
        {
          "type": "Online Shop",
          "available": true,
          "url": "https://www.gardsfisk.se/produkter"
        }
      ],
      "status": "active",
      "publishStatus": "published",
      "reviews": [],
      "totalRatings": 4.9,
      "totalReviews": 120,
      "createdAt": "2013-06-15T10:00:00Z",
      "labels": { "featuredFarm": true }
    },
    {
      "id": "d1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
      "name": "Torsåker Gård",
      "ownerName": "Axfoundation",
      "address": {
        "name": "Torsåker Gård",
        "company": "Axfoundation",
        "primary": true,
        "fullAddress": "Torsåker Gård, 194 91 Upplands Väsby",
        "phoneNumber": "+46 8 522 426 00",
        "addressType": "Gård"
      },
      "location": { "latitude": 59.556, "longitude": 17.911 },
      "contactEmail": "info@axfoundation.se",
      "contactPhone": "+46 8 522 426 00",
      "websiteUrl": "https://www.axfoundation.se/torsaker",
      "foundedYear": 2017,
      "farmSize": 100,
      "farmType": "Test- och utvecklingsgård",
      "description": "Torsåker Gård är Axfoundations utvecklingscenter för framtidens hållbara livsmedel och material. Här testas och utvecklas nya metoder för jordbruk och livsmedelsproduktion i samarbete med forskare och praktiker.",
      "shortDescription": "Utvecklingscenter för hållbart jordbruk och livsmedel.",
      "mainImageUrl": "https://ax-images.b-cdn.net/uploads/2022/06/Torsaker_Kernza_2019_web-1.jpg",
      "galleryImageUrls": [
        "https://ax-images.b-cdn.net/uploads/2024/05/AXF_0611_Vass_1440x960.jpg",
        "https://ax-images.b-cdn.net/uploads/2022/04/Tallrik_Braxen_AHM_Liggande_Torsakergard_S6A7590_1440x960_LindaPrieditis.jpg"
      ],
      "certifications": [],
      "facilities": [
        {
          "type": "Workshops",
          "available": true,
          "description": "Seminarier och workshops om hållbart jordbruk och livsmedel."
        }
      ],
      "status": "active",
      "publishStatus": "published",
      "reviews": [],
      "totalRatings": 4.8,
      "totalReviews": 85,
      "createdAt": "2017-04-10T09:00:00Z",
      "labels": { "featuredFarm": false }
    },
    {
      "id": "e1a2c3d4-e5f6-7g8h-9i0j-1k2l3m4n5o6p",
      "name": "Stafva Gård",
      "ownerName": "Familjen von Corswant",
      "address": {
        "name": "Stafva Gård",
        "company": "Stafva Gård AB",
        "primary": true,
        "fullAddress": "Stafva Gård, 622 75 Romakloster, Gotland",
        "phoneNumber": "+46 498 48 20 00",
        "addressType": "Gård"
      },
      "location": { "latitude": 57.533, "longitude": 18.417 },
      "contactEmail": "info@stafva.se",
      "contactPhone": "+46 498 48 20 00",
      "websiteUrl": "http://www.stafva.se/",
      "foundedYear": 1866,
      "farmSize": 650,
      "farmType": "Ost- och köttproduktion",
      "description": "Stafva Gård är en av Gotlands största gårdar och den största ostproducenten på ön. Gården har en lång historia och kombinerar traditionellt jordbruk med modern produktion.",
      "shortDescription": "Traditionell gård med ost- och köttproduktion på Gotland.",
      "mainImageUrl": "https://d13gofjvlwna3m.cloudfront.net/uploads/2024/07/img_4180-1-scaled.jpg",
      "galleryImageUrls": [
        "https://d13gofjvlwna3m.cloudfront.net/uploads/2024/07/img_4133-scaled.jpg",
        "https://d13gofjvlwna3m.cloudfront.net/uploads/2024/07/8584e00e-91c0-44b3-924e-c8d78a60cc3e.jpg",
        "https://d13gofjvlwna3m.cloudfront.net/uploads/2024/07/d27afb98-7621-4593-9e08-7a554714561c.jpg",
        "https://d13gofjvlwna3m.cloudfront.net/uploads/2024/07/787627ac-ef68-40fd-bdee-9d267258b43d.jpg"
      ],
      "certifications": ["KRAV", "EU-ekologiskt"],
      "facilities": [
        {
          "type": "Farm Shop",
          "available": true,
          "openingHours": "Måndag–Fredag 10–17",
          "description": "Försäljning av egenproducerad ost och kött."
        }
      ],
      "status": "active",
      "publishStatus": "published",
      "reviews": [],
      "totalRatings": 4.7,
      "totalReviews": 60,
      "createdAt": "1866-05-01T08:00:00Z",
      "labels": { "featuredFarm": false }
    }

  ]
}

