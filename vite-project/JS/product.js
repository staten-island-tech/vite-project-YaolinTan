const lecards = [
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Cleveland Cavaliers",
    year: 2003,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://example.com/images/lebron_2003_card.jpg",
    stats: "PPG: 20.9, RPG: 5.5, APG: 5.5, FG%: 43.8%, 3P%: 32.9%, FT%: 75.0%",
    card_brand: "Topps",
    birth_year: 1984,
    teamColors: ["#6A1E1F", "#FFC72C"], // Cleveland Cavaliers colors (maroon & gold)
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Miami Heat",
    year: 2010,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://example.com/images/lebron_2010_card.jpg",
    stats: "PPG: 26.7, RPG: 6.3, APG: 7.0, FG%: 51.1%, 3P%: 34.0%, FT%: 75.6%",
    card_brand: "Panini",
    birth_year: 1984,
    teamColors: ["#98002E", "#000000"], // Miami Heat colors (red & black)
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Cleveland Cavaliers",
    year: 2016,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://example.com/images/lebron_2016_card.jpg",
    stats: "PPG: 25.3, RPG: 7.4, APG: 6.8, FG%: 50.7%, 3P%: 34.5%, FT%: 73.6%",
    card_brand: "Upper Deck",
    birth_year: 1984,
    teamColors: ["#6A1E1F", "#FFC72C"], // Cleveland Cavaliers colors (maroon & gold)
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Los Angeles Lakers",
    year: 2020,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://example.com/images/lebron_2020_card.jpg",
    stats: "PPG: 25.3, RPG: 7.8, APG: 10.2, FG%: 49.7%, 3P%: 34.9%, FT%: 69.4%",
    card_brand: "Donruss",
    birth_year: 1984,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://example.com/images/lebron_2024_card.jpg",
    stats: "PPG: 24.1, RPG: 8.5, APG: 9.1, FG%: 49.8%, 3P%: 30.0%, FT%: 75.9%",
    card_brand: "Panini",
    birth_year: 1984,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url: "https://example.com/images/bronny_2024_card.jpg",
    stats: "PPG: 12.5, RPG: 4.0, APG: 3.0, FG%: 41.2%, 3P%: 35.8%, FT%: 72.0%",
    card_brand: "Topps",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2025,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url: "https://example.com/images/bronny_2025_card.jpg",
    stats: "PPG: 14.0, RPG: 4.5, APG: 4.2, FG%: 43.5%, 3P%: 36.5%, FT%: 74.0%",
    card_brand: "Upper Deck",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2026,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url: "https://example.com/images/bronny_2026_card.jpg",
    stats: "PPG: 16.2, RPG: 5.0, APG: 5.5, FG%: 45.3%, 3P%: 38.0%, FT%: 75.0%",
    card_brand: "Donruss",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2027,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url: "https://example.com/images/bronny_2027_card.jpg",
    stats: "PPG: 18.1, RPG: 6.3, APG: 6.2, FG%: 46.8%, 3P%: 39.2%, FT%: 76.5%",
    card_brand: "Panini",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2028,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url: "https://example.com/images/bronny_2028_card.jpg",
    stats: "PPG: 19.3, RPG: 7.0, APG: 7.5, FG%: 48.0%, 3P%: 40.0%, FT%: 77.5%",
    card_brand: "Topps",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url: "https://example.com/images/bryce_2024_card.jpg",
    stats: "PPG: 10.8, RPG: 3.2, APG: 2.0, FG%: 41.4%, 3P%: 33.3%, FT%: 70.0%",
    card_brand: "Topps",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2025,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url: "https://example.com/images/bryce_2025_card.jpg",
    stats: "PPG: 12.4, RPG: 4.1, APG: 2.5, FG%: 43.2%, 3P%: 35.6%, FT%: 72.3%",
    card_brand: "Upper Deck",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2026,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url: "https://example.com/images/bryce_2026_card.jpg",
    stats: "PPG: 14.1, RPG: 5.2, APG: 3.0, FG%: 44.5%, 3P%: 36.8%, FT%: 73.0%",
    card_brand: "Donruss",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2027,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url: "https://example.com/images/bryce_2027_card.jpg",
    stats: "PPG: 18.5, RPG: 6.2, APG: 4.5, FG%: 45.3%, 3P%: 37.1%, FT%: 74.5%",
    card_brand: "Panini",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2028,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url: "https://example.com/images/bryce_2028_new_card.jpg",
    stats: "PPG: 20.3, RPG: 7.5, APG: 5.0, FG%: 46.5%, 3P%: 38.5%, FT%: 76.0%",
    card_brand: "Topps",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
  },
];

export { lecards };
