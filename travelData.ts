import { TourPackage, Sanctuary, Expedition, GalleryPhoto, VideoStory } from '../types';

export const CURRENCY_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AUD: 1.52,
  LKR: 305,
};

export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AUD: 'A$',
  LKR: 'Rs.',
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'pkg-3days',
    title: 'Sri Lanka Highlights',
    durationDays: 3,
    badge: '3 Days • Express Voyage',
    highlightRoute: 'Colombo • Sigiriya Fortress • Dambulla Cave Temples • Kandy',
    description: 'Ideal for weekend getaways and transit travelers eager to witness the cultural triangle and sacred hills.',
    keyFeatures: [
      'Private chauffeured hybrid cruiser with panoramic sunroof',
      'VIP fast-track Sigiriya rock climb with certified archaeologist',
      'Sacred Tooth Relic temple ceremony access in Kandy',
      'Spice garden private walkthrough & herbal tea infusion'
    ],
    basePriceUSD: 580,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9j-4sJ1dm5tNyR7HzSeT6-hLaGSeCz7wYdZDFVuFU2VHkGZ6yEo38T74TpZp541c4jnmrccGj6madf0rLW4zHPf78BN-UX16Vj05Yl8tOPtOuYuckrE_71qE24N2SW3FxPV9UVWn3xWApizYbANe_WlGVGl4n-V_fu8eSMK1IolsAi5bW4W3gDfsl6KuzHMDu26wefHKqUiWwgEQSFPjjrr6_KOnKtkwDIO-niipUv9oTf9Y5vExj1Q',
    detailedDays: [
      {
        day: 1,
        title: 'Arrival & Cultural Triangle Gateway',
        description: 'Airport arrival transfer in private air-conditioned vehicle. Travel into the dry zone foliage to Dambulla Cave Temple before dusk, arriving at an eco-luxury pavilion.',
        activities: ['CMB VIP Meet & Greet', 'Dambulla Golden Rock Cave Temples', 'Sunset dinner over lotus lake'],
        stayType: 'Heritance Kandalama Forest Suite'
      },
      {
        day: 2,
        title: 'The Sky Citadel & The Hill Capital',
        description: 'Dawn ascent of Sigiriya Fortress to beat the heat and crowds. Afternoon transfer through Matale spice gardens into the cool misty bowl of Kandy.',
        activities: ['Early 6:30 AM Sigiriya Ascent', 'Matale Royal Spice Garden Visit', 'Kandy Lake Sunset Stroll & Temple of the Tooth'],
        elevation: '349m -> 500m',
        stayType: 'The Kandy House Luxury Manor'
      },
      {
        day: 3,
        title: 'Royal Botanical & Departure',
        description: 'Morning walk beneath giant Java fig trees at Peradeniya Royal Botanic Gardens, artisanal Ceylon gem cutting showcase, and smooth highway return to Colombo / Airport.',
        activities: ['Peradeniya Orchid Pavilions', 'Artisanal Ceylon Blue Sapphire Studio', 'Chauffeured Highway Express to CMB'],
        stayType: 'Departure Transfer'
      }
    ]
  },
  {
    id: 'pkg-5days',
    title: 'Cultural & Scenic Sri Lanka',
    durationDays: 5,
    badge: '5 Days • Popular Escape',
    highlightRoute: 'Sigiriya • Kandy • Nuwara Eliya • Ella Highland Rail',
    description: 'The definitive journey through ancient kingdoms, misty emerald Ceylon tea plantations, and the world-famous hill train ride.',
    keyFeatures: [
      'Scenic first-class highland observation rail pass Kandy to Ella',
      'Private artisanal tea tasting & factory walkthrough at historic estate',
      'Dawn trek to Pidurangala or Little Adam’s Peak',
      'Chauffeured colonial vehicle with local English/German/French guide'
    ],
    basePriceUSD: 960,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAinRpQgrDijfZlSOAN-gpNwPDe_Uywn_gVL-uSp5sGfRmjU9U6kcYggPFfk7dh9sVDBpqEWJRu2qRP-_Lb8u5F6TjXxT_WixHt4BlxC4NQQ7pjRtV9DYop_hmPs2UmGGnvfeNe1HeYO01vF_uXd-aa1Z5_poSTbZQNPIMVG5Xf9xH7lqlMRw6ZFmHrMJgcEDE78QL6kDcmnkGYIwnuwlAdzUcepuQK5r6cfMraVshr5hEtb6ScApokGQ',
    detailedDays: [
      {
        day: 1,
        title: 'Sigiriya & The Kingdom of Kassapa',
        description: 'Airport welcome to central Sigiriya. Explore ancient hydraulic water gardens and climb the massive monolith citadel.',
        activities: ['Private highway transfer', 'Sigiriya Lion Rock Citadel climb', 'Ayurvedic herbal massage'],
        stayType: 'Aliya Resort & Spa'
      },
      {
        day: 2,
        title: 'Matale Spice & Sacred City of Kandy',
        description: 'Traverse lush valleys with stops at ancient rock temples. Evening private witness of the puja offering at Temple of the Sacred Tooth Relic.',
        activities: ['Dambulla cave frescoes', 'Organic spice garden infusion lunch', 'Sacred Tooth ceremony'],
        elevation: '500m',
        stayType: 'Kings Pavilion Kandy'
      },
      {
        day: 3,
        title: 'Ascent to Little England (Nuwara Eliya)',
        description: 'Climb through dramatic serpentine mountain passes flanked by cascading waterfalls and endless tea carpets into cool-climate Nuwara Eliya.',
        activities: ['Ramboda Falls viewpoint', 'Pedro Estate tea plucking & tasting', 'Colonial Grand Hotel high tea'],
        elevation: '1,868m',
        stayType: 'Heritance Tea Factory Nuwara Eliya'
      },
      {
        day: 4,
        title: 'The Blue Train to Ella & Nine Arch Bridge',
        description: 'Board Sri Lanka’s legendary blue highland train through cloud forests. Walk to the Nine Arch Viaduct as locomotives pass below.',
        activities: ['Scenic First Class hill train ride', 'Nine Arch Bridge photography', 'Ella Rock / Little Adam’s Peak sunset'],
        elevation: '1,041m',
        stayType: '98 Acres Resort & Luxury Spa'
      },
      {
        day: 5,
        title: 'Ravana Falls & Southern Coast or Airport',
        description: 'Descend the breathtaking Ella Gap past roaring Ravana Falls toward the coastal lowlands or express back to Colombo.',
        activities: ['Ravana Waterfall stop', 'Fresh coconut & roadside local fruit tasting', 'Private return transfer'],
        stayType: 'Departure / Extension'
      }
    ]
  },
  {
    id: 'pkg-7days',
    title: 'Complete Sri Lanka Experience',
    durationDays: 7,
    badge: '7 Days • Highly Recommended',
    highlightRoute: 'Sigiriya • Kandy • Ella • Yala Safari • Mirissa & Galle',
    description: 'The island’s full spectrum: ancient rock fortress, serene highlands, leopard wildlife safari, and relaxing southern beaches.',
    keyFeatures: [
      'Private dawn 4x4 leopard game drive with naturalist tracker in Yala',
      'Sunset walking tour along Dutch Galle ramparts with resident historian',
      'First-class tea country train journey across colonial viaducts',
      'Secluded luxury boutique stays blending heritage and nature'
    ],
    basePriceUSD: 1450,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_8n75lj8OGglKdhcKGKfTbLf4FMGv1-ALUNMzyqRKFGohksAnERYptT6cAqVtRZtlxEJ83wAHxKeQRFuvEbtKCZVckSe-FmnHdKeRogNi38B8TON9mDlYpDbgVxuyUCNBv780DLFdh4Ig9-aPXVuCuUWBDxVDtBk-MZVAKWM_ODM9bZW6jv_2J4fIsH7YFdEg_VzEyHkyqVzjTKCUeWf0gEDC-irB8OFQ6rdhIp5pww9AVdN_RbHldg',
    detailedDays: [
      {
        day: 1,
        title: 'Cultural Triangle & Sigiriya Fortress',
        description: 'Private transfer from airport into the emerald heartland. Afternoon exploration of the iconic Lion Rock citadel.',
        activities: ['Scenic rural drive', 'Sigiriya UNESCO climb', 'Rooftop cocktail under stars'],
        stayType: 'Water Garden Sigiriya'
      },
      {
        day: 2,
        title: 'Pidurangala Sunrise & Kandy Hills',
        description: 'Optional dawn climb of Pidurangala for epic Sigiriya panoramic photography. Transfer south to the hill capital.',
        activities: ['Pidurangala 360° viewpoint', 'Temple of the Tooth Relic', 'Kandy traditional drumming'],
        elevation: '500m',
        stayType: 'Elephant Stables Kandy'
      },
      {
        day: 3,
        title: 'Tea Ridges to Nuwara Eliya & Ella',
        description: 'Travel into the high cloud forests. Inspect artisanal single-estate Ceylon tea gardens and take the scenic train to Ella.',
        activities: ['Artisanal tea factory walkthrough', 'Highland railway crossing', 'Ella evening culinary tasting'],
        elevation: '1,041m',
        stayType: '98 Acres Resort Ella'
      },
      {
        day: 4,
        title: 'Nine Arch Bridge to Yala Leopard Sanctuary',
        description: 'Morning walk to the stone viaduct in misty morning light. Descend from highlands down to Yala national park scrubland.',
        activities: ['Nine Arch Viaduct trek', 'Ella Gap canyon overlook', 'Evening sundowners at Yala border'],
        stayType: 'Cinnamon Wild Yala / Wild Coast Lodge'
      },
      {
        day: 5,
        title: 'Dawn Safari & Southern Coastline',
        description: 'Early 5:30 AM private game drive tracking Sri Lankan leopards, sloth bears, and Asian tuskers. Afternoon transfer to Mirissa beach.',
        activities: ['Private customized safari jeep', 'Leopard & bird tracking', 'Arrival at turquoise ocean retreat'],
        stayType: 'Lantern Boutique Hotel Mirissa'
      },
      {
        day: 6,
        title: 'Mirissa Blue Whales & Historic Galle Fort',
        description: 'Optional dawn eco-responsible whale watching expedition. Afternoon guided walk inside the 17th-century UNESCO Dutch fort.',
        activities: ['Pelagic ocean safari (seasonal)', 'Galle Fort cobblestone boutiques', 'Lighthouse sunset drinks'],
        stayType: 'Fort Bazaar Galle'
      },
      {
        day: 7,
        title: 'Bentota Turtle Sanctuaries & Departure',
        description: 'Coastal expressway drive back toward Colombo. Visit community turtle conservation hatchery and airport send-off.',
        activities: ['Kosgoda marine turtle sanctuary', 'Colombo architectural drive', 'Airport VIP lounge transfer'],
        stayType: 'Departure'
      }
    ]
  },
  {
    id: 'pkg-10days',
    title: 'Ultimate Sri Lanka Adventure',
    durationDays: 10,
    badge: '10 Days • The Grand Voyage',
    highlightRoute: 'Negombo • Sigiriya • Polonnaruwa • Kandy • Ella • Yala • Weligama • Colombo',
    description: 'The uncompromising grand circle itinerary with luxury boutique heritage bungalows, surfing lessons, and culinary masterclasses.',
    keyFeatures: [
      'Comprehensive heritage, cloud forest & coastal expedition',
      'Included professional drone pilot / photographer on highlight days',
      'Private dawn safari in Yala + elephant gathering in Minneriya',
      'Surf coaching or catamaran private sunset sail in Weligama'
    ],
    basePriceUSD: 2150,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbyrqNUdlmP37KD8PbwfPPvc4gPjKtrGrLzWis0TjV2ymfK8r68MDYuf9OxI7mnzmD8cGYYRSQ0_CZzfQBNfvKgBNatsrLHqTyVnS-cA0LjBfH74FPyfIL5wXE9hNpcOJP3M7hJ3Aa3-qFcoEB32FnHHC08gA4nWqlLDyq8F0qmuuiXr4XKgXadGX5w8KHccePNbUzPs9SHa7D7KzDXMX8kHHCuaTzxipQKmnazj_a8-DHr3ckzSkXQ',
    detailedDays: [
      {
        day: 1,
        title: 'Coastal Gateway Negombo',
        description: 'Unwind from long international flights with ocean breezes and fresh coconut water.',
        activities: ['Private luxury airport pickup', 'Lagoon boat ride', 'Seafood dining by the waves'],
        stayType: 'Jetwing Beach Negombo'
      },
      {
        day: 2,
        title: 'Dambulla & Sigiriya Heritage',
        description: 'Scenic interior drive into ancient kingdoms. Climb Sigiriya under golden afternoon sun.',
        activities: ['Dambulla Golden Caves', 'Sigiriya Lion Citadel climb', 'Champagne terrace overlook'],
        stayType: 'Water Garden Sigiriya'
      },
      {
        day: 3,
        title: 'Polonnaruwa Ancient Ruins & Minneriya Elephants',
        description: 'Bicycle through the 12th-century stone capital, followed by an afternoon jeep safari watching wild elephant herds.',
        activities: ['Polonnaruwa bicycle tour', 'Gal Vihara Buddha statues', 'Minneriya wild elephant safari'],
        stayType: 'Water Garden Sigiriya'
      },
      {
        day: 4,
        title: 'Sacred Kandy & Knuckles Foothills',
        description: 'Journey to the hill capital with scenic stopovers at spice gardens and serene mountain viewpoints.',
        activities: ['Temple of the Tooth Relic', 'Royal Botanic Gardens', 'Traditional Kandyan music'],
        stayType: 'Santani Wellness Resort'
      },
      {
        day: 5,
        title: 'Highlands & Ceylon Tea Estates',
        description: 'Climb into Nuwara Eliya. Private tea tasting session and high tea on colonial manicured lawns.',
        activities: ['Single-estate tea factory walk', 'Ramboda waterfalls', 'Colonial high tea experience'],
        stayType: 'Ceylon Tea Trails Norwood Bungalow'
      },
      {
        day: 6,
        title: 'The Iconic Blue Rail to Ella',
        description: 'First class train journey through misty ravines. Sunset hike at Little Adam’s Peak.',
        activities: ['Observation carriage train ride', 'Nine Arch Bridge photography', 'Ella culinary class'],
        stayType: '98 Acres Resort Ella'
      },
      {
        day: 7,
        title: 'Ravana Falls to Yala National Park',
        description: 'Travel from mountain cloud cover down to wild savannah and coastal scrub.',
        activities: ['Ravana waterfall walk', 'Buduruwagala carved rock statues', 'Sundowner safari briefing'],
        stayType: 'Wild Coast Tented Lodge'
      },
      {
        day: 8,
        title: 'Yala Leopard Safari & Southern Coast',
        description: 'Full dawn game drive in search of leopards, bears, and crocodiles, before relaxing on southern shores.',
        activities: ['Private naturalist 4x4 game drive', 'Drive to Weligama / Mirissa bay', 'Sunset cocktails on the beach'],
        stayType: 'Cape Weligama Luxury Resort'
      },
      {
        day: 9,
        title: 'Galle Fort Ramparts & Marine Safari',
        description: 'Private historic walking tour of Dutch Galle Fort, artisan shopping, and seaside dinner.',
        activities: ['Galle Fort historian walk', 'Artisanal spice and gem shopping', 'Private dinner by the lighthouse'],
        stayType: 'Amangalla Galle Fort'
      },
      {
        day: 10,
        title: 'Colombo Architecture & Departure',
        description: 'Geoffrey Bawa architectural city tour in Colombo before private chauffeur transfer to airport.',
        activities: ['Bawa architecture studio', 'Ministry of Crab celebration lunch', 'Airport VIP drop-off'],
        stayType: 'Departure Transfer'
      }
    ]
  }
];

export const SANCTUARIES: Sanctuary[] = [
  {
    id: 'sanc-tea-trails',
    name: 'Ceylon Tea Trails',
    region: 'Hatton, Central Highlands',
    category: 'Tea Estate',
    tagline: 'Colonial Splendor Amongst Verdant Ceylon Ridges',
    pricePerNightUSD: 720,
    elevation: '1,250m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAinRpQgrDijfZlSOAN-gpNwPDe_Uywn_gVL-uSp5sGfRmjU9U6kcYggPFfk7dh9sVDBpqEWJRu2qRP-_Lb8u5F6TjXxT_WixHt4BlxC4NQQ7pjRtV9DYop_hmPs2UmGGnvfeNe1HeYO01vF_uXd-aa1Z5_poSTbZQNPIMVG5Xf9xH7lqlMRw6ZFmHrMJgcEDE78QL6kDcmnkGYIwnuwlAdzUcepuQK5r6cfMraVshr5hEtb6ScApokGQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAinRpQgrDijfZlSOAN-gpNwPDe_Uywn_gVL-uSp5sGfRmjU9U6kcYggPFfk7dh9sVDBpqEWJRu2qRP-_Lb8u5F6TjXxT_WixHt4BlxC4NQQ7pjRtV9DYop_hmPs2UmGGnvfeNe1HeYO01vF_uXd-aa1Z5_poSTbZQNPIMVG5Xf9xH7lqlMRw6ZFmHrMJgcEDE78QL6kDcmnkGYIwnuwlAdzUcepuQK5r6cfMraVshr5hEtb6ScApokGQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCMB6xujrBVTE9xMiwTJzsHrpvfy6_vhsgkOoGko8mwl5RP0_2Yw8GDR3jYdxmNenKep-iuaojq5SvOReNZzaWXQ5jMpiJPMyAGkhVQJUEEFoO1mwYVZuxgFd38v9L4iqHcbV5aAVocKXUYLhCL12kNzmAH423b_fmW7pc7cxryO3XNB5TKrudYG9abnA6rQxw3OJnQgpZAouzWm4S7UYcAVQSUEWFqF_dfPWw3LrXQMdHhbZOOogvQPA'
    ],
    description: 'The world’s first tea bungalow resort. Five restored historic colonial planter residences perched above Castlereagh Reservoir, connected by walking trails through working tea estates.',
    amenities: ['Dedicated Private Butler', 'Infinity Swimming Pool', 'Clay Tennis Courts', 'Estate Hiking Trails', 'All-Inclusive Gourmet Dining'],
    highlights: ['Bed tea served at sunrise', 'Single-origin tea pairings', 'Helipad access']
  },
  {
    id: 'sanc-wild-coast',
    name: 'Wild Coast Tented Lodge',
    region: 'Yala National Park',
    category: 'Wildlife Camp',
    tagline: 'Where Raw Leopard Jungle Meets The Indian Ocean',
    pricePerNightUSD: 850,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_8n75lj8OGglKdhcKGKfTbLf4FMGv1-ALUNMzyqRKFGohksAnERYptT6cAqVtRZtlxEJ83wAHxKeQRFuvEbtKCZVckSe-FmnHdKeRogNi38B8TON9mDlYpDbgVxuyUCNBv780DLFdh4Ig9-aPXVuCuUWBDxVDtBk-MZVAKWM_ODM9bZW6jv_2J4fIsH7YFdEg_VzEyHkyqVzjTKCUeWf0gEDC-irB8OFQ6rdhIp5pww9AVdN_RbHldg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_8n75lj8OGglKdhcKGKfTbLf4FMGv1-ALUNMzyqRKFGohksAnERYptT6cAqVtRZtlxEJ83wAHxKeQRFuvEbtKCZVckSe-FmnHdKeRogNi38B8TON9mDlYpDbgVxuyUCNBv780DLFdh4Ig9-aPXVuCuUWBDxVDtBk-MZVAKWM_ODM9bZW6jv_2J4fIsH7YFdEg_VzEyHkyqVzjTKCUeWf0gEDC-irB8OFQ6rdhIp5pww9AVdN_RbHldg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVafTJCst3h7b2Qg_YG7jl2Y9iaibOAtsw7mlFFNoIBJfi4WGLVcdKhCHTJfMv94JlDHuKueNt4rH7hHNCIgjufG-RuMtSbFmWRwhpSJUlDmEDI4vFuZzbs7ieKzIcn4aZPR-XeipQ5XgU72qDVMjqH0lv_TDqAz_LCz4nEuyx7JnN0jnVxNPdDTtpKbmQeC57uUqRrMOQELr40uqjMIahIlIShO094VS1DzzIy37pw6s1fcIzXMsNA'
    ],
    description: 'Spectacular arched cocoon tents mirroring the boulder formations of Yala. Set right on the wild southern beach where elephants and leopards occasionally roam along the dunes.',
    amenities: ['Private Plunge Pools', 'Curated Safari Drives', 'Open-air Bamboo Dome Bar', 'Wilderness Spa', 'Guided Dune Walks'],
    highlights: ['Private naturalist trackers', 'Zero plastic footprint', 'Night jungle sounds']
  },
  {
    id: 'sanc-cape-weligama',
    name: 'Cape Weligama',
    region: 'Weligama Headland, Southern Coast',
    category: 'Coastal Villa',
    tagline: 'Cliffside Panorama Suspended 40m Above Ocean Swells',
    pricePerNightUSD: 680,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbyrqNUdlmP37KD8PbwfPPvc4gPjKtrGrLzWis0TjV2ymfK8r68MDYuf9OxI7mnzmD8cGYYRSQ0_CZzfQBNfvKgBNatsrLHqTyVnS-cA0LjBfH74FPyfIL5wXE9hNpcOJP3M7hJ3Aa3-qFcoEB32FnHHC08gA4nWqlLDyq8F0qmuuiXr4XKgXadGX5w8KHccePNbUzPs9SHa7D7KzDXMX8kHHCuaTzxipQKmnazj_a8-DHr3ckzSkXQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCbyrqNUdlmP37KD8PbwfPPvc4gPjKtrGrLzWis0TjV2ymfK8r68MDYuf9OxI7mnzmD8cGYYRSQ0_CZzfQBNfvKgBNatsrLHqTyVnS-cA0LjBfH74FPyfIL5wXE9hNpcOJP3M7hJ3Aa3-qFcoEB32FnHHC08gA4nWqlLDyq8F0qmuuiXr4XKgXadGX5w8KHccePNbUzPs9SHa7D7KzDXMX8kHHCuaTzxipQKmnazj_a8-DHr3ckzSkXQ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbxez9KP7aUPDc13BNgQQKs08PQDn_AlX3sGUKbPqicRx5G6AILu0ABUfXfV3R9XaDHyUP08Nyg1gz8I1t2qOMHcCnrASriTVceBRXX1ARVEd1KdhEWIrexCAtjOKJ4qVVnKQvw98ADPtlOBoy5KMCuq9BZwmSHq76EOlzpxNpxvegLa6xhD66jDevITEUpqv0eWZ_LaEUfGmvaiU8SV4WI-VZnZ8h7hylZjbhtL_3gsZ_hI-k-y2Gaw'
    ],
    description: 'Designed by celebrated architect Lek Bunnag. Generous pavilions with private garden terraces, perched on headlands overlooking the turquoise Indian Ocean.',
    amenities: ['60m Crescent Cliffside Pool', 'Private Butler Service', 'Surf & Dive School', 'Cliff-edge Dining', 'Wine Cellar'],
    highlights: ['Panoramic ocean sunsets', 'Direct beach cove descent', 'World-class surf access']
  },
  {
    id: 'sanc-water-garden',
    name: 'Water Garden Sigiriya',
    region: 'Sigiriya Cultural Sanctuary',
    category: 'Wellness Resort',
    tagline: 'Hydraulic Elegance Framed Against Sigiriya Rock',
    pricePerNightUSD: 520,
    elevation: '180m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQWqb9lLs5wfWAWfNvSeaNXtF0M8xxOM8c59xrGmuHR79mB2TMYHiTmESCK9UuoQUw7yC_37oxCTBHwVSjle_m35qtBAQDDrb_Is8z_3jrkx8PPE2Gn-GWK0BtY-Nduz1WPe-S9FBpFB18MSJP9xuO5jX59EN3AOkQZAJL9bRDMPCbhtSuXUigi9GotCknpeCowfCk8cv_UfPr9f8zPNKMGTRabco-2c9FXLM9scgNX1jSVeMjRiv8ew',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQWqb9lLs5wfWAWfNvSeaNXtF0M8xxOM8c59xrGmuHR79mB2TMYHiTmESCK9UuoQUw7yC_37oxCTBHwVSjle_m35qtBAQDDrb_Is8z_3jrkx8PPE2Gn-GWK0BtY-Nduz1WPe-S9FBpFB18MSJP9xuO5jX59EN3AOkQZAJL9bRDMPCbhtSuXUigi9GotCknpeCowfCk8cv_UfPr9f8zPNKMGTRabco-2c9FXLM9scgNX1jSVeMjRiv8ew',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC9j-4sJ1dm5tNyR7HzSeT6-hLaGSeCz7wYdZDFVuFU2VHkGZ6yEo38T74TpZp541c4jnmrccGj6madf0rLW4zHPf78BN-UX16Vj05Yl8tOPtOuYuckrE_71qE24N2SW3FxPV9UVWn3xWApizYbANe_WlGVGl4n-V_fu8eSMK1IolsAi5bW4W3gDfsl6KuzHMDu26wefHKqUiWwgEQSFPjjrr6_KOnKtkwDIO-niipUv9oTf9Y5vExj1Q'
    ],
    description: 'Surrounded by winding lakes, lotus ponds, and ancient waterway architecture with direct, uninterrupted vistas of the majestic Lion Rock citadel.',
    amenities: ['Private Villa Plunge Pools', 'Helicopter Transfer Pad', 'Ayurvedic Spa Sanctuary', 'Outdoor Lotus Dining', 'Bicycle Estate Cruisers'],
    highlights: ['Unobstructed Sigiriya view', 'Peacock dawn wakeups', 'Historic water garden design']
  }
];

export const EXPEDITIONS: Expedition[] = [
  {
    id: 'exp-knuckles',
    title: 'Knuckles Mountain Cloud Forest Trek',
    subtitle: 'Misty Valleys, Endemic Flora & Waterfalls',
    region: 'Knuckles Mountain Range',
    difficulty: 'Challenging',
    duration: 'Full Day / Overnight',
    elevation: '1,863m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMB6xujrBVTE9xMiwTJzsHrpvfy6_vhsgkOoGko8mwl5RP0_2Yw8GDR3jYdxmNenKep-iuaojq5SvOReNZzaWXQ5jMpiJPMyAGkhVQJUEEFoO1mwYVZuxgFd38v9L4iqHcbV5aAVocKXUYLhCL12kNzmAH423b_fmW7pc7cxryO3XNB5TKrudYG9abnA6rQxw3OJnQgpZAouzWm4S7UYcAVQSUEWFqF_dfPWw3LrXQMdHhbZOOogvQPA',
    description: 'Hike deep into UNESCO World Heritage cloud forests. Cross crystal-clear mountain streams, visit isolated hamlets like Meemure, and scale dramatic escarpments.',
    highlights: ['Secret highland streams', 'Birdwatching endemic species', 'Remote village hospitality', 'Wild cardamom forests'],
    season: 'Year-round (Best Nov - April)'
  },
  {
    id: 'exp-diyanluma',
    title: 'Diyaluma Upper Plunge Pools',
    subtitle: 'Natural Infinity Pools on Cliff Edge',
    region: 'Koslanda Highlands',
    difficulty: 'Moderate',
    duration: '4-5 Hours',
    elevation: '680m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAinRpQgrDijfZlSOAN-gpNwPDe_Uywn_gVL-uSp5sGfRmjU9U6kcYggPFfk7dh9sVDBpqEWJRu2qRP-_Lb8u5F6TjXxT_WixHt4BlxC4NQQ7pjRtV9DYop_hmPs2UmGGnvfeNe1HeYO01vF_uXd-aa1Z5_poSTbZQNPIMVG5Xf9xH7lqlMRw6ZFmHrMJgcEDE78QL6kDcmnkGYIwnuwlAdzUcepuQK5r6cfMraVshr5hEtb6ScApokGQ',
    description: 'Trek through high lemon-grass hills to reach Sri Lanka’s second tallest waterfall, bathing in terraced natural granite pools overlooking the southern plains.',
    highlights: ['Natural rocky plunge pools', '220m cliffside panorama', 'Secret canyon jump spots', 'Guided by local hill scout'],
    season: 'Best Jan - September'
  },
  {
    id: 'exp-yala-leopard',
    title: 'Dawn Leopard & Sloth Bear Tracking',
    subtitle: 'Apex Predator Safari with Expert Naturalist',
    region: 'Yala National Park Block 1 & 5',
    difficulty: 'Gentle',
    duration: '6 Hours (Dawn / Dusk)',
    elevation: 'Sea Level to 30m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVafTJCst3h7b2Qg_YG7jl2Y9iaibOAtsw7mlFFNoIBJfi4WGLVcdKhCHTJfMv94JlDHuKueNt4rH7hHNCIgjufG-RuMtSbFmWRwhpSJUlDmEDI4vFuZzbs7ieKzIcn4aZPR-XeipQ5XgU72qDVMjqH0lv_TDqAz_LCz4nEuyx7JnN0jnVxNPdDTtpKbmQeC57uUqRrMOQELr40uqjMIahIlIShO094VS1DzzIy37pw6s1fcIzXMsNA',
    description: 'World’s dense population of wild leopards. Accompanied by a dedicated wildlife photographer/naturalist in customized silent-suspension 4x4.',
    highlights: ['Highest leopard density', 'Wild Asian elephant encounters', 'Over 215 bird species', 'Artisanal safari bush breakfast'],
    season: 'Year-round'
  },
  {
    id: 'exp-ritigala',
    title: 'Ritigala Monastic Forest Sanctuary',
    subtitle: 'Ruined Monasteries in Deep Primary Jungle',
    region: 'North Central Forest Reserve',
    difficulty: 'Moderate',
    duration: '3 Hours',
    elevation: '766m',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQZKyM0CZTxbSfWUpFWM-r7G4dgkhhCRoDCqlCkMjdXZNscxAdFpOWBFQ0AFuTmgZyVvfnghRO091Q7EAr9OuyeYh9HEZ4Vlc72qDX172zkmePjqhF29rqdWf4DgEweydSoXw7iOV3F24tTTn8v2bjVl8I9S5Sv7bX6jLvClkzOHF5cydrSy48tyQO7lqCGW2P-zGttyTxgiJJ7ua34wnsxgu4yNS6ojiOna8hYUC-6L5cbGAKlMdRBg',
    description: 'An ancient, overgrown monastic hospital and meditative sanctuary hidden high within an isolated ecological microclimate surrounded by medicinal herbs.',
    highlights: ['Ancient granite stone bridges', 'Strictly preserved herbal forest', 'Extreme quiet & spiritual aura', 'No crowds or tour buses'],
    season: 'Year-round'
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Golden Mirissa Sunset Bay',
    location: 'Mirissa, Southern Coast',
    category: 'beaches',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbxez9KP7aUPDc13BNgQQKs08PQDn_AlX3sGUKbPqicRx5G6AILu0ABUfXfV3R9XaDHyUP08Nyg1gz8I1t2qOMHcCnrASriTVceBRXX1ARVEd1KdhEWIrexCAtjOKJ4qVVnKQvw98ADPtlOBoy5KMCuq9BZwmSHq76EOlzpxNpxvegLa6xhD66jDevITEUpqv0eWZ_LaEUfGmvaiU8SV4WI-VZnZ8h7hylZjbhtL_3gsZ_hI-k-y2Gaw',
    alt: 'Tropical turquoise bay in Mirissa Sri Lanka with golden sand and coconut palm tree bending toward calm ocean waves at sunset.',
    cameraInfo: 'Sony A7IV • 24-70mm GM • f/2.8'
  },
  {
    id: 'gal-2',
    title: 'Highland Tea Estate Mist at Dawn',
    location: 'Haputale & Nuwara Eliya',
    category: 'mountains',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMB6xujrBVTE9xMiwTJzsHrpvfy6_vhsgkOoGko8mwl5RP0_2Yw8GDR3jYdxmNenKep-iuaojq5SvOReNZzaWXQ5jMpiJPMyAGkhVQJUEEFoO1mwYVZuxgFd38v9L4iqHcbV5aAVocKXUYLhCL12kNzmAH423b_fmW7pc7cxryO3XNB5TKrudYG9abnA6rQxw3OJnQgpZAouzWm4S7UYcAVQSUEWFqF_dfPWw3LrXQMdHhbZOOogvQPA',
    alt: 'Haputale tea estate viewpoint at dawn with morning mountain mist weaving between rows of bright Ceylon tea bushes in Sri Lanka.',
    cameraInfo: 'Leica Q2 • 28mm Summilux • f/1.7'
  },
  {
    id: 'gal-3',
    title: 'Udawalawe Elephant Herd',
    location: 'Udawalawe National Park',
    category: 'wildlife',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCucy3k1qBzkrWFpprZXLndbQBxDx565_0NJBwxiSMGLNsZOS186Q3jQTBfa_Kveajv6uV9IsxJI0PSASDdGUUu6LbYyoAW06JaRXpEmQwEwjUzbZgLnv6YggVeIQnycYIXGfPUa1v1nHwXg7jx_DXFBC3W0cwSQELsqfohxfQL-JzTmYEVTWpZ2AVV1ILm2gpOl9tGbMKgx_yYmMka3qqIqA1GVlLuEizXeNNWuthGfC_sdYwrdHJCYg',
    alt: 'Herd of wild Asian elephants with calf drinking water at Udawalawe national park reservoir in Sri Lanka during tranquil evening dusk.',
    cameraInfo: 'Canon R5 • 100-500mm RF • f/5.6'
  },
  {
    id: 'gal-4',
    title: 'Dambulla Sacred Cave Sanctuary',
    location: 'Central Province',
    category: 'culture',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQZKyM0CZTxbSfWUpFWM-r7G4dgkhhCRoDCqlCkMjdXZNscxAdFpOWBFQ0AFuTmgZyVvfnghRO091Q7EAr9OuyeYh9HEZ4Vlc72qDX172zkmePjqhF29rqdWf4DgEweydSoXw7iOV3F24tTTn8v2bjVl8I9S5Sv7bX6jLvClkzOHF5cydrSy48tyQO7lqCGW2P-zGttyTxgiJJ7ua34wnsxgu4yNS6ojiOna8hYUC-6L5cbGAKlMdRBg',
    alt: 'Monk in bright saffron robes walking gently through ancient stone corridors of Dambulla Cave Temple in Sri Lanka with golden Buddha statues.',
    cameraInfo: 'Fujifilm GFX 100S • 45mm • f/2.8'
  },
  {
    id: 'gal-5',
    title: 'Nine Arch Viaduct Canopy Aerial',
    location: 'Ella Mountain Pass',
    category: 'drone',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU2HZf9bAYFKdJuyErS4RRFQwg3Yjrphzm7nPddwc2Y_McYxndswAfL6rgpQOxDa-Xsqv2XyNrAgeY-FLkjLoArsq6IjxWjMa89ADUyGmu3lBN0lTqXLk3tBzaEmFh5GPQdeQ0jyPNhb7iGXl-ASqEnOhrGL1xV2PgaJ3aVEsOPOgEx7sFi75IqFVPwBGQXEndeBnZRa13uM11ReReEwdNnJRT-be0DzerVsXXm2osldMD6-eCcIhg-A',
    alt: 'Cinematic aerial top-down drone photograph of Nine Arch Bridge surrounded by infinite misty jungle foliage in Sri Lanka.',
    cameraInfo: 'DJI Mavic 3 Cine • Apple ProRes 422 HQ'
  },
  {
    id: 'gal-6',
    title: 'Twilight Stilt Fishermen',
    location: 'Koggala, Southern Coast',
    category: 'beaches',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG5vAkU3azpA562cV3t4PBnOygeriNlOv8h8TeyI8c3dT9zdZyAd6seSp3QjnzJlblB_x-CshGhbAGRuqsOK0U0ky5eXlIC0l_8WtCvMZsA57RwqL4VoRSOx3T0SZ0giwCtLofoEuMu2GiuNxjStLNF19HrDkSJ3YitFRdBuQs17I54aHWw4kwr1uoV2u3-NqVCnKSOnaAPcr2FHRtsJB4wiFIi7kqsU-JK8Pscf7hsiT1ZRn_NY5_sw',
    alt: 'Traditional Sri Lankan stilt fishermen silhouette against a glowing orange and purple sunset on southern coast of Sri Lanka.',
    cameraInfo: 'Sony A1 • 70-200mm GM II • f/4.0'
  },
  {
    id: 'gal-7',
    title: 'Sigiriya Rock Fortress Terraces',
    location: 'Sigiriya Cultural Triangle',
    category: 'culture',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQWqb9lLs5wfWAWfNvSeaNXtF0M8xxOM8c59xrGmuHR79mB2TMYHiTmESCK9UuoQUw7yC_37oxCTBHwVSjle_m35qtBAQDDrb_Is8z_3jrkx8PPE2Gn-GWK0BtY-Nduz1WPe-S9FBpFB18MSJP9xuO5jX59EN3AOkQZAJL9bRDMPCbhtSuXUigi9GotCknpeCowfCk8cv_UfPr9f8zPNKMGTRabco-2c9FXLM9scgNX1jSVeMjRiv8ew',
    alt: 'Cinematic aerial panoramic view of Sigiriya Lion Rock at sunrise emerging from deep emerald mist and jungle canopy in Sri Lanka.',
    cameraInfo: 'Hasselblad X2D 100C • 38mm'
  },
  {
    id: 'gal-8',
    title: 'Southern Surf Headland & Outrigger',
    location: 'Mirissa Coastal Reef',
    category: 'drone',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbLPYPIuoOY_mr9biowzq72veHfMTBAStAHnWXPIfUSJ_iizm-6mmTmGKkPHCIsJSxBCtgrn59FHUGzrYCTmi1uBEpn3QwgOvxuq6IowUnQksc9h3gyHYXDInVG4IkvdOOL5E9Xu7v5nFO-FaS59ixqF3gtvQ4Z5SSXgTqPhLNgjhvj4P7O7HN720qJZV8M5wDdPMEltn1LMO2zbswQXSTh33x855WdOXB4iYwCDuCvtc3EHcoRUH5yQ',
    alt: 'High altitude drone overhead shot looking straight down onto turquoise coral reef and golden surf coastline.',
    cameraInfo: 'DJI Inspire 3 • Zenmuse X9-8K Air'
  }
];

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: 'vid-train',
    tag: 'Highland Rail Chronicle',
    title: 'The Iconic Kandy to Ella Express',
    duration: '03:42',
    description: 'Traversing cliffside loops, stone tunnels, and high-altitude tea plantations in the clouds with our cinematic 4K camera setup.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCObWcfdZCJNED7H_hTxskBSQkhjplKv0Gzpgn26lEMn_zjjijFDHhFLV0GFVowN_7CUCSFr4gotknRGCF_gnL7CJI7A_t-TTKjtoVNjxqJWdV07V4mRWeZiXjnykbNUQfn5i_8-GfOlqHKhWgJ1BjfkYQRbA6FE2YHNsMM92kAJJ5XYlHyiHAAvr2CeYPCkqZRtHJpZjNrXGwDr1R2KCCbxujb6H873TtJTvKFuvB8kW10HK3A38aqpw',
    accentColor: '#f9bb60'
  },
  {
    id: 'vid-leopard',
    tag: 'Wildlife Docu-Short',
    title: 'Wild Ceylon Leopards',
    duration: '04:15',
    description: 'Tracking Sri Lanka’s apex predator through dense coastal jungle thickets at dawn in Yala National Park.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUVafTJCst3h7b2Qg_YG7jl2Y9iaibOAtsw7mlFFNoIBJfi4WGLVcdKhCHTJfMv94JlDHuKueNt4rH7hHNCIgjufG-RuMtSbFmWRwhpSJUlDmEDI4vFuZzbs7ieKzIcn4aZPR-XeipQ5XgU72qDVMjqH0lv_TDqAz_LCz4nEuyx7JnN0jnVxNPdDTtpKbmQeC57uUqRrMOQELr40uqjMIahIlIShO094VS1DzzIy37pw6s1fcIzXMsNA',
    accentColor: '#a0d1c1'
  },
  {
    id: 'vid-cinema-service',
    tag: 'Unknown Studio Exclusive',
    title: 'Your Island Journey as a 4K Movie',
    duration: '02:50',
    description: 'Behind the lens of our private travel documentary crew documenting intimate romantic & family memories in Ceylon.',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBw2B4R42v_7KgW_A969XHk4KwhLhoedjCrOEC-Y73uu92c4isz1M_h62GzNv7nuEyjcAxI1bR5myzywsJCPE-7Kb862eUobZ0q1vFwkzjeN-A-Lb-1W7yYSsbKShLa68KjdQyOc0GlQkYfFTzkS2iBGu39DxTQ90cm4A19O0-dinHA0kgOrSl2rEGv20901L6fHpu-6lRDTtvT2MH_q3_58ib4wmD-RGvE9CWnecDJ6QYPschUznbJDQ',
    accentColor: '#abcec2'
  }
];

export const TRAVEL_TIPS = [
  {
    title: 'Electronic Travel Authorization (ETA Visa)',
    desc: 'International visitors must obtain an official online tourist ETA before arrival. Quick processing in 24-48 hours. Our concierge assists with compliance documentation.'
  },
  {
    title: 'Best Times to Visit',
    desc: 'Sri Lanka enjoys dual monsoon seasons: December to April is ideal for West & South Coast and Highlands. May to September shines across the East Coast (Trincomalee, Arugam Bay, Pasikudah).'
  },
  {
    title: 'Private Chauffeur Protocols',
    desc: 'All Unknown Travels journeys include licensed English-speaking chauffeur-guides with full insurance, clean air-conditioned hybrid cruisers or executive vans, and local SIM cards.'
  },
  {
    title: 'Drone Permits & Flight Regulations',
    desc: 'Aerial filming is strictly regulated by the Civil Aviation Authority of Sri Lanka (CAA) & Department of Wildlife Conservation (DWC). Unknown Studio secures all required commercial flight permits.'
  }
];
