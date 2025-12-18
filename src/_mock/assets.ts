// ----------------------------------------------------------------------

export const _id = Array.from(
  { length: 40 },
  (_, index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`
);

// ----------------------------------------------------------------------

export const _booleans = [
  true,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  false,
  false,
  true,
  true,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  false,
  true,
  false,
  false,
  true,
];

// ----------------------------------------------------------------------

export const _prices = [
  83.74, 97.14, 68.71, 85.21, 52.17, 25.18, 43.84, 60.98, 98.42, 53.37, 72.75, 56.61, 64.55, 77.32,
  60.62, 79.81, 93.68, 47.44, 76.24, 92.87, 72.91, 20.54, 94.25, 37.51,
];

export const _ratings = [
  4.2, 3.7, 4.5, 3.5, 0.5, 3.0, 2.5, 2.8, 4.9, 3.6, 2.5, 1.7, 3.9, 2.8, 4.1, 4.5, 2.2, 3.2, 0.6,
  1.3, 3.8, 3.8, 3.8, 2.0,
];

export const _ages = [
  30, 26, 59, 47, 29, 46, 18, 56, 39, 19, 45, 18, 46, 56, 38, 41, 44, 48, 32, 45, 42, 60, 33, 57,
];

export const _percents = [
  10.1, 13.6, 28.2, 42.1, 37.2, 18.5, 40.1, 94.8, 91.4, 53.0, 25.4, 62.9, 86.6, 62.4, 35.4, 17.6,
  52.0, 6.8, 95.3, 26.6, 69.9, 92.1, 46.2, 85.6,
];

export const _nativeS = [
  11, 10, 7, 10, 12, 5, 10, 1, 8, 8, 10, 11, 12, 8, 4, 11, 8, 9, 4, 9, 2, 6, 3, 7,
];

export const _nativeM = [
  497, 763, 684, 451, 433, 463, 951, 194, 425, 435, 807, 521, 538, 839, 394, 269, 453, 821, 364,
  849, 804, 776, 263, 239,
];

export const _nativeL = [
  9911, 1947, 9124, 6984, 8488, 2034, 3364, 8401, 8996, 5271, 8478, 1139, 8061, 3035, 6733, 3952,
  2405, 3127, 6843, 4672, 6995, 6053, 5192, 9686,
];

export const _fullAddress = [
  'Storgatan 12, 114 51 Stockholm',
  'Södra Förstadsgatan 8, 211 43 Malmö',
  'Avenyn 21, 411 36 Göteborg',
  'Drottninggatan 5, 753 10 Uppsala',
  'Rådhusgatan 14, 903 26 Umeå',
  'Kungsgatan 9, 632 20 Eskilstuna',
  'Östra Hamngatan 17, 411 10 Göteborg',
  'Bergsgatan 3, 791 31 Falun',
  'Stora Torget 2, 702 11 Örebro',
  'Stationsgatan 6, 972 31 Luleå',
  'Nygatan 4, 852 31 Sundsvall',
  'Västra Boulevarden 10, 291 31 Kristianstad',
  'Järnvägsgatan 15, 803 20 Gävle',
  'Storgatan 18, 582 23 Linköping',
  'Kungsgatan 28, 903 21 Umeå',
  'Storgatan 7, 831 30 Östersund',
  'Rådhusesplanaden 1, 903 28 Umeå',
  'Kyrkogatan 11, 352 31 Växjö',
  'Stora Gatan 16, 722 12 Västerås',
  'S:t Persgatan 9, 602 33 Norrköping',
  'Hamngatan 23, 111 47 Stockholm',
  'Torggatan 5, 691 31 Karlskoga',
  'Köpmangatan 12, 941 31 Piteå',
  'Storgatan 25, 271 43 Ystad',
];


// ----------------------------------------------------------------------

export const _emails = [
  'elin.sjoberg@example.se',
  'jonas.lind@example.se',
  'sara.bergstrom@example.se',
  'mikael.noren@example.se',
  'amina.khalil@example.se',
  'oskar.holm@example.se',
  'emma.andersson@example.se',
  'viktor.nilsson@example.se',
  'lina.ekstrom@example.se',
  'anton.berg@example.se',
  'sofia.larsson@example.se',
  'fredrik.persson@example.se',
  'nora.johansson@example.se',
  'albin.eriksson@example.se',
  'ida.svensson@example.se',
  'felix.karlsson@example.se',
  'malin.hedlund@example.se',
  'erik.lundqvist@example.se',
  'tilda.bjork@example.se',
  'hanna.ahlstrom@example.se',
  'gustav.berggren@example.se',
  'louis.palm@example.se',
  'julia.rosen@example.se',
  'samuel.nystrom@example.se',
];


// ----------------------------------------------------------------------

export const _firstNames = [
  'Elin','Jonas','Sara','Mikael','Amina','Oskar','Emma','Viktor','Lina','Anton','Sofia','Fredrik',
  'Nora','Albin','Ida','Felix','Malin','Erik','Tilda','Hanna','Gustav','Louise','Julia','Samuel',
];

export const _lastNames = [
  'Sjöberg','Lind','Bergström','Norén','Khalil','Holm','Andersson','Nilsson','Ekström','Berg','Larsson',
  'Persson','Johansson','Eriksson','Svensson','Karlsson','Hedlund','Lundqvist','Björk','Ahlström',
  'Berggren','Palm','Rosén','Nyström',
];

export const _fullNames = _firstNames.map((first, i) => `${first} ${_lastNames[i]}`);


// ----------------------------------------------------------------------

export const _phoneNumbers = [
  '+46 70 123 45 67',
  '+46 73 234 56 78',
  '+46 76 345 67 89',
  '+46 72 456 78 90',
  '+46 79 567 89 01',
  '+46 70 678 90 12',
  '+46 73 789 01 23',
  '+46 76 890 12 34',
  '+46 72 901 23 45',
  '+46 79 012 34 56',
  '+46 70 135 79 24',
  '+46 73 246 80 35',
  '+46 76 357 91 46',
  '+46 72 468 02 57',
  '+46 79 579 13 68',
  '+46 70 680 24 79',
  '+46 73 791 35 80',
  '+46 76 802 46 91',
  '+46 72 913 57 02',
  '+46 79 024 68 13',
  '+46 70 246 13 57',
  '+46 73 135 24 68',
  '+46 76 468 79 02',
  '+46 72 579 80 91',
];


// ----------------------------------------------------------------------

export const _countryNames = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'India',
  'Germany',
  'France',
  'Japan',
  'China',
  'Brazil',
  'South Africa',
  'Russia',
  'Mexico',
  'Italy',
  'Spain',
  'Netherlands',
  'Sweden',
  'Switzerland',
  'South Korea',
  'Argentina',
  'New Zealand',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Indonesia',
  'Philippines',
  'Turkey',
  'Saudi Arabia',
  'United Arab Emirates',
  'Egypt',
  'Nigeria',
  'Kenya',
  'Israel',
  'Greece',
  'Ireland',
  'Portugal',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
];

// ----------------------------------------------------------------------

export const _roles = [
  'VD',
  'CTO',
  'Projektkoordinator',
  'Teamledare',
  'Systemutvecklare',
  'Marknadsstrateg',
  'Dataanalytiker',
  'Produktägare',
  'Grafisk designer',
  'Driftsansvarig',
  'Kundsupport',
  'Säljchef',
  'HR-specialist',
  'Affärskonsult',
  'Ekonomiansvarig',
  'Nätverkstekniker',
  'Innehållsproducent',
  'QA-testare',
  'Kommunikatör',
  'IT-administratör',
  'Regelefterlevnad',
  'Eventkoordinator',
  'Bolagsjurist',
  'Utbildningskoordinator',
];


// ----------------------------------------------------------------------

export const _postTitles = [
  `The Future of Renewable Energy: Innovations and Challenges Ahead`,
  `Exploring the Impact of Artificial Intelligence on Modern Healthcare`,
  `Climate Change and Its Effects on Global Food Security`,
  `The Rise of Remote Work: Benefits, Challenges, and Future Trends`,
  `Understanding Blockchain Technology: Beyond Cryptocurrency`,
  `Mental Health in the Digital Age: Navigating Social Media and Well-being`,
  `Sustainable Fashion: How the Industry is Going Green`,
  `Space Exploration: New Frontiers and the Quest for Extraterrestrial Life`,
  `The Evolution of E-Commerce: Trends Shaping the Online Retail Landscape`,
  `Cybersecurity in the 21st Century: Protecting Data in a Digital World`,
  `The Role of Big Data in Transforming Business Strategies`,
  `Genetic Engineering: Ethical Considerations and Future Prospects`,
  `Urban Farming: A Solution to Food Deserts and Urban Sustainability`,
  `The Psychology of Consumer Behavior: What Drives Our Purchasing Decisions?`,
  `Renewable Energy vs. Fossil Fuels: Which is the Future?`,
  `Artificial Intelligence in Education: Enhancing Learning Experiences`,
  `The Impact of Climate Change on Global Migration Patterns`,
  `5G Technology: Revolutionizing Connectivity and Communication`,
  `The Gig Economy: Opportunities, Risks, and the Future of Work`,
  `Smart Cities: Integrating Technology for Sustainable Urban Living`,
  `The Influence of Pop Culture on Modern Society`,
  `Innovations in Medicine: From Telehealth to Personalized Treatment`,
  `The Environmental Cost of Fast Fashion: What Can Consumers Do?`,
  `The Intersection of Art and Technology: Digital Art in the 21st Century`,
];

// ----------------------------------------------------------------------

export const _productNames = [
  `Urban Explorer Sneakers`,
  `Classic Leather Loafers`,
  `Mountain Trekking Boots`,
  `Elegance Stiletto Heels`,
  `Comfy Running Shoes`,
  `Chic Ballet Flats`,
  `Vintage Oxford Shoes`,
  `Waterproof Hiking Boots`,
  `Casual Slip-On Sneakers`,
  `Premium Dress Shoes`,
  `Sporty Trail Runners`,
  `Sophisticated Brogues`,
  `Beach Sandals`,
  `Stylish Wedge Heels`,
  `Lightweight Training Shoes`,
  `Luxurious Moccasins`,
  `Durable Work Boots`,
  `Trendy Platform Sneakers`,
  `Cozy Winter Boots`,
  `Fashion Ankle Boots`,
  `Breathable Tennis Shoes`,
  `Elegant Evening Pumps`,
  `Modern Skate Shoes`,
  `Comfortable Walking Shoes`,
];

// ----------------------------------------------------------------------

export const _tourNames = [
  `Majestic Mountain Adventures`,
  `Island Hopping Extravaganza`,
  `Cultural Wonders of Europe`,
  `Safari Expedition in Africa`,
  `Grand Canyon Explorer`,
  `Historic Cities of Asia`,
  `Tropical Paradise Getaway`,
  `Alaskan Wilderness Tour`,
  `Mediterranean Cruise Voyage`,
  `Enchanting Eastern Europe`,
  `Scenic Coastal Road Trip`,
  `Ancient Ruins Discovery`,
  `Australian Outback Adventure`,
  `Northern Lights Experience`,
  `Wildlife Wonders of South America`,
  `Royal Castles and Palaces`,
  `Ultimate Beach Retreat`,
  `National Parks Exploration`,
  `Gastronomic Tour of Italy`,
  `Hiking Trails of New Zealand`,
  `Art and History of France`,
  `Exotic Temples of India`,
  `Canadian Rockies Journey`,
  `Caribbean Sun and Fun`,
];

// ----------------------------------------------------------------------

export const _jobTitles = [
  `Software Engineer`,
  `Marketing Manager`,
  `Data Scientist`,
  `Graphic Designer`,
  `Financial Analyst`,
  `Human Resources Specialist`,
  `Project Manager`,
  `Sales Executive`,
  `Content Writer`,
  `Network Administrator`,
  `Customer Service Representative`,
  `Product Manager`,
  `Business Analyst`,
  `Mechanical Engineer`,
  `Operations Manager`,
  `UX/UI Designer`,
  `Accountant`,
  `Social Media Manager`,
  `Research Scientist`,
  `Legal Advisor`,
  `Public Relations Specialist`,
  `Health and Safety Officer`,
  `IT Support Specialist`,
  `Environmental Consultant`,
];

// ----------------------------------------------------------------------

export const _companyNames = [
  'Björk & Co AB',
  'Nordic Harvest AB',
  'Dalarna Tech AB',
  'Stjärnkontoret Sverige AB',
  'Sjö & Berg Konsult AB',
  'Grön Logistik Sverige AB',
  'Fjäll & Skog Group AB',
  'Mellansvenska Bygg AB',
  'Norrland Food Partners AB',
  'Västra Hamnen Studio AB',
  'Trygg IT Sverige AB',
  'Sund & Smart Hälsa AB',
  'Klara Projektledning AB',
  'Lindström Advisory AB',
  'Åkerlund Produktion AB',
  'Rättvik Handel AB',
  'Falun Creative AB',
  'Uppsala Analytics AB',
  'Göteborg Service Group AB',
  'Stockholm Workspace AB',
  'Hållbar Mat i Sverige AB',
  'Svensk Industri Partner AB',
  'Berg & Dala Förvaltning AB',
  'Nordic People Ops AB',
];


// ----------------------------------------------------------------------

export const _tags = [
  `Technology`,
  `Health and Wellness`,
  `Travel`,
  `Finance`,
  `Education`,
  `Food and Beverage`,
  `Fashion`,
  `Home and Garden`,
  `Sports`,
  `Entertainment`,
  `Business`,
  `Science`,
  `Automotive`,
  `Beauty`,
  `Fitness`,
  `Lifestyle`,
  `Real Estate`,
  `Parenting`,
  `Pet Care`,
  `Environmental`,
  `DIY and Crafts`,
  `Gaming`,
  `Photography`,
  `Music`,
];

// ----------------------------------------------------------------------

export const _taskNames = [
  `Prepare Monthly Financial Report`,
  `Design New Marketing Campaign`,
  `Analyze Customer Feedback`,
  `Update Website Content`,
  `Conduct Market Research`,
  `Develop Software Application`,
  `Organize Team Meeting`,
  `Create Social Media Posts`,
  `Review Project Plan`,
  `Implement Security Protocols`,
  `Write Technical Documentation`,
  `Test New Product Features`,
  `Manage Client Inquiries`,
  `Train New Employees`,
  `Coordinate Logistics`,
  `Monitor Network Performance`,
  `Develop Training Materials`,
  `Draft Press Release`,
  `Prepare Budget Proposal`,
  `Evaluate Vendor Proposals`,
  `Perform Data Analysis`,
  `Conduct Quality Assurance`,
  `Plan Event Logistics`,
  `Optimize SEO Strategies`,
];

// ----------------------------------------------------------------------

export const _courseNames = [
  'Introduktion till körkortsteori',
  'Vägmärken & vägmarkeringar',
  'Trafikregler i praktiken',
  'Hastighet, avstånd & bromssträcka',
  'Riskmedvetenhet & olycksförebyggande',
  'Miljö & eco-driving',
  'Säkerhet och fordonskännedom',
  'Situationsanalys i trafiken',
  'Provfällor & vanliga misstag',
  'Tids- och stresshantering vid prov',
  'Riskettan – teori & attityder',
  'Risktvåan – körstrategi & säkerhet',
  'Trafikpsykologi och beteende',
  'Mörkerkörning & väglag',
  'Lagar, ansvar & försäkringar',
  'Skyldigheter vid olycka',
  'Tung trafik & samspelet på vägen',
  'Cykel, moped & oskyddade trafikanter',
  'Motorväg, landsväg & stadstrafik',
  'Teknik, hjälpmedel & förarstöd',
  'Provliknande tester – grundnivå',
  'Provliknande tester – avancerad nivå',
  'Snabb repetition inför teoriprovet',
  'Redo-check: är du provklar?',
];


// ----------------------------------------------------------------------

export const _fileNames = [
  'cover-2.jpg',
  'design-suriname-2015.mp3',
  'expertise-2015-conakry-sao-tome-and-principe-gender.mp4',
  'money-popup-crack.pdf',
  'cover-4.jpg',
  'cover-6.jpg',
  'large-news.txt',
  'nauru-6015-small-fighter-left-gender.psd',
  'tv-xs.doc',
  'gustavia-entertainment-productivity.docx',
  'vintage-bahrain-saipan.xls',
  'indonesia-quito-nancy-grace-left-glad.xlsx',
  'legislation-grain.zip',
  'large-energy-dry-philippines.rar',
  'footer-243-ecuador.iso',
  'kyrgyzstan-04795009-picabo-street-guide-style.ai',
  'india-data-large-gk-chesterton-mother.esp',
  'footer-barbados-celine-dion.ppt',
  'socio-respectively-366996.pptx',
  'socio-ahead-531437-sweden-popup.wav',
  'trinidad-samuel-morse-bring.m4v',
  'cover-12.jpg',
  'cover-18.jpg',
  'xl-david-blaine-component-tanzania-books.pdf',
];

export const _eventNames = [
  `Annual General Meeting`,
  `Summer Music Festival`,
  `Tech Innovators Conference`,
  `Charity Gala Dinner`,
  `Spring Art Exhibition`,
  `Corporate Training Workshop`,
  `Community Health Fair`,
  `Startup Pitch Night`,
  `Regional Sports Tournament`,
  `Book Launch Event`,
  `Film Premiere Screening`,
  `Industry Networking Mixer`,
  `Holiday Craft Fair`,
  `Environmental Awareness Week`,
  `New Year's Eve Party`,
  `Product Release Showcase`,
  `Cultural Heritage Festival`,
  `Science and Technology Expo`,
  `Annual Awards Ceremony`,
  `Fashion Week Runway Show`,
  `Food and Wine Tasting`,
  `Outdoor Adventure Camp`,
  `Leadership Summit`,
  `Wedding Expo`,
];

// ----------------------------------------------------------------------

export const _sentences = [
  `The sun slowly set over the horizon, painting the sky in vibrant hues of orange and pink.`,
  `She eagerly opened the gift, her eyes sparkling with excitement.`,
  `The old oak tree stood tall and majestic, its branches swaying gently in the breeze.`,
  `The aroma of freshly brewed coffee filled the air, awakening my senses.`,
  `The children giggled with joy as they ran through the sprinklers on a hot summer day.`,
  `He carefully crafted a beautiful sculpture out of clay, his hands skillfully shaping the intricate details.`,
  `The concert was a mesmerizing experience, with the music filling the venue and the crowd cheering in delight.`,
  `The waves crashed against the shore, creating a soothing symphony of sound.`,
  `The scent of blooming flowers wafted through the garden, creating a fragrant paradise.`,
  `She gazed up at the night sky, marveling at the twinkling stars that dotted the darkness.`,
  `The professor delivered a captivating lecture, engaging the students with thought-provoking ideas.`,
  `The hiker trekked through the dense forest, guided by the soft glow of sunlight filtering through the trees.`,
  `The delicate butterfly gracefully fluttered from flower to flower, sipping nectar with its slender proboscis.`,
  `The aroma of freshly baked cookies filled the kitchen, tempting everyone with its irresistible scent.`,
  'The majestic waterfall cascaded down the rocks, creating a breathtaking display of nature`s power.',
  `The actor delivered a powerful performance, moving the audience to tears with his emotional portrayal.`,
  `The book transported me to a magical world, where imagination knew no bounds.`,
  `The scent of rain filled the air as dark clouds gathered overhead, promising a refreshing downpour.`,
  `The chef skillfully plated the dish, turning simple ingredients into a work of culinary art.`,
  `The newborn baby let out a tiny cry, announcing its arrival to the world.`,
  `The athlete sprinted across the finish line, arms raised in victory as the crowd erupted in applause.`,
  `The ancient ruins stood as a testament to a civilization long gone, their grandeur still awe-inspiring.`,
  `The artist dipped the brush into vibrant paint, bringing the canvas to life with bold strokes and vivid colors.`,
  `The laughter of children echoed through the playground, filling the atmosphere with pure joy.`,
];

// ----------------------------------------------------------------------

export const _descriptions = [
  `Occaecati est et illo quibusdam accusamus qui. Incidunt aut et molestiae ut facere aut. Est quidem iusto praesentium excepturi harum nihil tenetur facilis. Ut omnis voluptates nihil accusantium doloribus eaque debitis.`,
  `Atque eaque ducimus minima distinctio velit. Laborum et veniam officiis. Delectus ex saepe hic id laboriosam officia. Odit nostrum qui illum saepe debitis ullam. Laudantium beatae modi fugit ut. Dolores consequatur beatae nihil voluptates rem maiores.`,
  `Rerum eius velit dolores. Explicabo ad nemo quibusdam. Voluptatem eum suscipit et ipsum et consequatur aperiam quia. Rerum nulla sequi recusandae illum velit quia quas. Et error laborum maiores cupiditate occaecati.`,
  `Et non omnis qui. Qui sunt deserunt dolorem aut velit cumque adipisci aut enim. Nihil quis quisquam nesciunt dicta nobis ab aperiam dolorem repellat. Voluptates non blanditiis. Error et tenetur iste soluta cupiditate ratione perspiciatis et. Quibusdam aliquid nam sunt et quisquam non esse.`,
  `Nihil ea sunt facilis praesentium atque. Ab animi alias sequi molestias aut velit ea. Sed possimus eos. Et est aliquid est voluptatem.`,
  `Non rerum modi. Accusamus voluptatem odit nihil in. Quidem et iusto numquam veniam culpa aperiam odio aut enim. Quae vel dolores. Pariatur est culpa veritatis aut dolorem.`,
  `Est enim et sit non impedit aperiam cumque animi. Aut eius impedit saepe blanditiis. Totam molestias magnam minima fugiat.`,
  `Unde a inventore et. Sed esse ut. Atque ducimus quibusdam fuga quas id qui fuga.`,
  `Eaque natus adipisci soluta nostrum dolorem. Nesciunt ipsum molestias ut aliquid natus ut omnis qui fugiat. Dolor et rem. Ut neque voluptatem blanditiis quasi ullam deleniti.`,
  `Nam et error exercitationem qui voluptate optio. Officia omnis qui accusantium ipsam qui. Quia sequi nulla perspiciatis optio vero omnis maxime omnis ipsum. Perspiciatis consequuntur asperiores veniam dolores.`,
  `Perspiciatis nulla ut ut ut voluptates totam consectetur eligendi qui. Optio ut cum. Dolorum sapiente qui laborum. Impedit temporibus totam delectus nihil. Voluptatem corrupti rem.`,
  `Distinctio omnis similique omnis eos. Repellat cumque rerum nisi. Reiciendis soluta non ut veniam temporibus. Accusantium et dolorem voluptas harum. Nemo eius voluptate dicta et hic nemo. Dolorem assumenda et beatae molestias sit quo mollitia quis consequatur.`,
  `Sed ut mollitia tempore ipsam et illum doloribus ut. Occaecati ratione veritatis explicabo. Omnis nam omnis sunt placeat tempore accusantium placeat distinctio velit.`,
  `Eum illo dicta et perspiciatis ut blanditiis eos sequi. Ea veritatis aut et voluptas aut. Laborum eos quia tempore a culpa.`,
  `Aut quos quae dolores repudiandae similique perferendis perferendis earum laudantium. Facere placeat natus nobis. Eius vitae ullam dolorem.`,
  `Vero dolorem et voluptatem fugit tempore a quam iure. Fuga consequatur corrupti sunt asperiores vitae. Libero totam repellendus animi debitis illum et sunt officia.`,
  `Cupiditate illum officiis id molestiae. Numquam non molestiae aliquid et natus sed hic. Alias quia explicabo sed corrupti sint. Natus in et odio qui unde facilis quia. Est sit eius laboriosam aliquid non aperiam quia quo corporis.`,
  `Et a ab. Optio aspernatur minus tempora amet vitae consectetur inventore cumque. Sed et omnis. Aspernatur a magnam.`,
  `Ipsum omnis et. Quia ea et autem tempore consequuntur veniam dolorem officiis. Ipsa dicta et ut quidem quia doloremque. Sequi vitae doloremque temporibus. Deserunt incidunt id aperiam itaque natus. Earum sit eaque quas incidunt nihil.`,
  `Quae consequatur reiciendis. Consequatur non optio. Eaque id placeat. Commodi quo officia aut repudiandae reiciendis tempore voluptatem et. Ut accusamus qui itaque maxime aliquam. Fugit ut animi molestiae porro maiores.`,
  `Modi hic asperiores ab cumque quam est aut. Voluptas atque quos molestias. Ut excepturi distinctio ipsam aspernatur sit.`,
  `Sunt totam facilis. Quam commodi voluptatem veniam. Tempora deleniti itaque fugit nihil voluptas.`,
  `Ipsam aliquam velit nobis repellendus officiis aut deserunt id et. Nihil sunt aut dolores aut. Dolores est ipsa quia et laborum quidem laborum accusamus id. Facilis odit quod hic laudantium saepe omnis nisi in sint. Sed cupiditate possimus id.`,
  `Magnam non eveniet optio optio ut aliquid atque. Velit libero aspernatur quis laborum consequatur laudantium. Tempora facere optio fugit accusantium ut. Omnis aspernatur reprehenderit autem esse ut ut enim voluptatibus.`,
];
