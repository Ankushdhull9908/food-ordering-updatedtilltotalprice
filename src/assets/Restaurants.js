
export const restaurants = [
    {
      id: 1,
      name: "Burger King",
      cuisine: "Fast Food",
      rating: 4.3,
      Distance: null,
      location: {
        latitude: 28.5223,
        longitude: 77.2074, 
        city: "Delhi",
        address: "Select Citywalk Mall, Saket, New Delhi 110017"
      },
      image: 'https://www.livelaw.in/h-upload/2024/08/19/1500x900_556384-burger-king.webp',
      menu: [101, 102]
    },
    {
      id: 2,
      name: "Domino's Pizza",
      cuisine: "Italian",
      rating: 4.5,
      Distance: null,
      location: {
        city: "Delhi",
        address: "PVR Anupam Complex, Saket, New Delhi 110017",
        latitude: 28.5247,
        longitude: 77.2091
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEHNLvP9KyxkRdqMAuPI8qs1M2f9YS4nWyQ&s',
      menu: [201, 202]
    },
    {
      id: 3,
      name: "Haldiram's",
      cuisine: "Indian",
      rating: 4.7,
      Distance: null,
      location: {
        city: "Delhi",
        address: "DLF Avenue Mall, Saket, New Delhi 110017",
        latitude: 28.5249,
        longitude: 77.2063
      },
      image: 'https://lifebeyondnumbers.b-cdn.net/wp-content/uploads/2023/12/haldiramji.jpg',
      menu: [301, 302]
    },
    {
      id: 4,
      name: "KFC",
      cuisine: "Fast Food",
      rating: 4.1,
      Distance: null,
      location: {
        city: "Delhi",
        address: "Select Citywalk Mall, Saket, New Delhi 110017",
        latitude: 28.5225,
        longitude: 77.2080
      },
      image: 'https://b.zmtcdn.com/data/pictures/4/2700044/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*',
      menu: [401, 402]
    },
    {
      id: 5,
      name: "Bikanervala",
      cuisine: "Indian",
      rating: 4.6,
      Distance: null,
      location: {
        city: "Delhi",
        address: "Malviya Nagar, New Delhi 110017",
        latitude: 28.5356,
        longitude: 77.1982
      },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Lgz-3cIO4m5y3oYU5nvRs7W0U3HqkEAQGA&s',
      menu: [501, 502]
    },
    {
      id: 6,
      name: "Saravana Bhavan",
      cuisine: "South Indian",
      rating: 4.8,
      Distance: null,
      location: {
        city: "Delhi",
        address: "Nehru Place, New Delhi 110019",
        latitude: 28.5485,
        longitude: 77.2512
      },
      image: 'https://res.cloudinary.com/the-infatuation/image/upload/v1704815499/NYC_Saravana_Bhavan_NoahDevereaux_02_x7cyyy.jpg',
      menu: [601, 602]
    },
    {
      id: 7,
      name: "McDonald's",
      cuisine: "Fast Food",
      rating: 4.2,
      Distance: null,
      location: {
        city: "Delhi",
        address: "Saket Community Centre, New Delhi 110017",
        latitude: 28.5262,
        longitude: 77.1884
      },
      image: 'https://content.jdmagicbox.com/v2/comp/mumbai/i8/022pxx22.xx22.141201144028.g7i8/catalogue/mcdonald-s-andheri-east-mumbai-fast-food-01jqspvjqp.jpg',
      menu: [701, 702]
    },
    {
      id: 8,
      name: "Subway",
      cuisine: "Fast Food",
      rating: 4.0,
      Distance: null,
      location: {
        city: "Delhi",
        address: "PVR Saket, New Delhi 110017",
        latitude: 28.5242,
        longitude: 77.2043
      },
      image: 'https://c.ndtvimg.com/2021-07/mor1i2ho_sub-sandwich_625x300_27_July_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      menu: [801, 802]
    },
    {
      id: 9,
      name: "Pizza Hut",
      cuisine: "Italian",
      rating: 4.4,
      Distance: null,
      location: {
        city: "Delhi",
        address: "Lado Sarai, Saket, New Delhi 110030",
        latitude: 28.5187,
        longitude: 77.1915
      },
      image: 'https://b.zmtcdn.com/data/pictures/chains/5/19047495/fdf5e5079a0352d872204dad39bc0f08.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      menu: [901, 902]
    },/*
    {
      id: 10,
      name: "Barbeque Nation",
      cuisine: "Indian",
      rating: 4.6,
      deliveryTime: "20 mins",
      location: {
        city: "Delhi",
        address: "DLF Place Mall, Saket, New Delhi 110017",
        latitude: 28.5239,
        longitude: 77.2068
      },
      image: barbequee,
      menu: [1001, 1002]
    },
    {
      id: 11,
      name: "Chaayos",
      cuisine: "Beverages",
      rating: 4.5,
      deliveryTime: "7 mins",
      location: {
        city: "Delhi",
        address: "Saket Metro Station, New Delhi 110017",
        latitude: 28.5211,
        longitude: 77.1976
      },
      image: chaayos,
      menu: [1101, 1102]
    },
    {
      id: 12,
      name: "Cafe Coffee Day",
      cuisine: "Beverages",
      rating: 4.3,
      deliveryTime: "12 mins",
      location: {
        city: "Delhi",
        address: "Saket District Centre, New Delhi 110017",
        latitude: 28.5265,
        longitude: 77.1939
      },
      image: coffeeday,
      menu: [1201, 1202]
    },
    {
      id: 13,
      name: "Spice Mantra",
      cuisine: "North Indian",
      rating: 4.4,
      deliveryTime: "15 mins",
      location: {
        city: "Delhi",
        address: "Mehrauli-Gurgaon Road, New Delhi 110030",
        latitude: 28.5154,
        longitude: 77.1896
      },
      image: spicemantra,
      menu: [1301, 1302]
    },
    {
      id: 14,
      name: "Royal Tadka",
      cuisine: "North Indian",
      rating: 4.6,
      deliveryTime: "10 mins",
      location: {
        city: "Delhi",
        address: "Panchsheel Park, New Delhi 110017",
        latitude: 28.5374,
        longitude: 77.2060
      },
      image: Royaltadka,
      menu: [1401, 1402]
    },
    {
      id: 15,
      name: "Saffron Leaf",
      cuisine: "Mughlai",
      rating: 4.5,
      deliveryTime: "17 mins",
      location: {
        city: "Delhi",
        address: "Greater Kailash, New Delhi 110048",
        latitude: 28.5521,
        longitude: 77.2347
      },
      image: safron,
      menu: [1501, 1502]
    },

    {
        id: 16,
        name: "Curry Junction",
        cuisine: "South Indian",
        rating: 4.3,
        deliveryTime: "20 mins",
        image: curry,
        location: {
          city: "Bahadurgarh",
          address: "Sector 9, Bahadurgarh 124507",
          latitude: 28.6921,
          longitude: 76.9205
        },
        menu: [1601, 1602]
      },
      {
        id: 17,
        name: "Tandoori Nights",
        cuisine: "North Indian",
        rating: 4.7,
        deliveryTime: "40 mins",
        image: tandoorinights,
        location: {
          city: "Bahadurgarh",
          address: "Delhi-Rohtak Road, Bahadurgarh 124507",
          latitude: 28.6935,
          longitude: 76.9250
        },
        menu: [1701, 1702]
      },*/
      {
        id: 18,
        name: "Chai Chaska",
        cuisine: "Street Food",
        rating: 4.2,
        deliveryTime: "15 mins",
        image: 'https://cff2.earth.com/uploads/2024/02/08140346/drinking-tea_every-day_delays-aging_mint-tea_1m.jpg',
        location: {
          city: "Bahadurgarh",
          address: "Huda Market, Bahadurgarh 124507",
          latitude: 28.6929,
          longitude: 76.9272
        },
        menu: [1801, 1802]
      },
      {
        id: 19,
        name: "Biryani Blues",
        cuisine: "Hyderabadi",
        rating: 4.6,
        deliveryTime: "30 mins",
        image: 'https://www.apnachef.com/wp-content/uploads/2023/12/chicken-biryani-50-people-wide.jpg',
        location: {
          city: "Bahadurgarh",
          address: "Sadar Bazaar, Bahadurgarh 124507",
          latitude: 28.6950,
          longitude: 76.9308
        },
        menu: [1901, 1902]
      },
      {
        id: 20,
        name: "Desi Dhaba",
        cuisine: "Punjabi",
        rating: 4.5,
        deliveryTime: "25 mins",
        image: 'https://media.istockphoto.com/id/1266579516/photo/indian-traditional-thali-food-dal-makhani-served-with-chapati-papad-kadai-paneer-or-lemon-on.jpg?s=612x612&w=0&k=20&c=_OYAXix_rJeoEgOxyPc-k6wZtZ_-cbcdO_05257zjno=',
        location: {
          city: "Bahadurgarh",
          address: "Jhajjar Road, Bahadurgarh 124507",
          latitude: 28.6915,
          longitude: 76.9158
        },
        menu: [2001, 2002]
      },
      {
        id: 21,
        name: "Rasoi Ghar",
        cuisine: "Gujarati",
        rating: 4.3,
        deliveryTime: "20 mins",
        image: 'https://content.jdmagicbox.com/comp/ahmedabad/m4/079pxx79.xx79.210617222842.i5m4/catalogue/rasoi-ghar-restaurant-ranip-ahmedabad-restaurants-548bkkbkvt.jpg',
        location: {
          city: "Bahadurgarh",
          address: "Main Market, Bahadurgarh 124507",
          latitude: 28.6943,
          longitude: 76.9234
        },
        menu: [2101, 2102]
      },
      {
        id: 22,
        name: "Kathi Junction",
        cuisine: "Bengali",
        rating: 4.4,
        deliveryTime: "30 mins",
        image: 'https://files.yappe.in/place/full/kathi-junction-dine-in-restaurant-9305874.webp',
        location: {
          city: "Bahadurgarh",
          address: "Tikri Border, Bahadurgarh 124507",
          latitude: 28.7012,
          longitude: 76.9345
        },
        menu: [2201, 2202]
      },/*
      {
        id: 23,
        name: "Masala Magic",
        cuisine: "Indian Fusion",
        rating: 4.6,
        deliveryTime: "35 mins",
        image: masalamagic,
        location: {
          city: "Bahadurgarh",
          address: "Sector 6, Bahadurgarh 124507",
          latitude: 28.6980,
          longitude: 76.9185
        },
        menu: [2301, 2302]
      },
      {
        id: 24,
        name: "Ghar Ka Khana",
        cuisine: "Home-style Indian",
        rating: 4.8,
        deliveryTime: "40 mins",
        image: gharkadhaba,
        location: {
          city: "Bahadurgarh",
          address: "Bus Stand Road, Bahadurgarh 124507",
          latitude: 28.6905,
          longitude: 76.9218
        },
        menu:[2401, 2402] 
      }*/
  ];
  
  export default restaurants;
  