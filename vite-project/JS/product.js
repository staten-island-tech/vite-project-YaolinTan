const lecards = [
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Cleveland Cavaliers",
    year: 2003,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url:
      "https://th.bing.com/th/id/OIP.ZQGzyRdkpy55lt_5xAUlQgHaLE?w=122&h=183&c=7&r=0&o=5&pid=1.7",
    stats: "PPG: 20.9, RPG: 5.5, APG: 5.5, FG%: 43.8%, 3P%: 32.9%, FT%: 75.0%",
    card_brand: "Topps",
    birth_year: 1984,
    teamColors: ["#6A1E1F", "#FFC72C"], // Cleveland Cavaliers colors (maroon & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesle01.html",
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Miami Heat",
    year: 2010,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url:
      "https://th.bing.com/th?id=ODL.92f700265c9645421ab7c70a0b9da235&w=195&h=300&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=23.1",
    stats: "PPG: 26.7, RPG: 6.3, APG: 7.0, FG%: 51.1%, 3P%: 34.0%, FT%: 75.6%",
    card_brand: "Panini",
    birth_year: 1984,
    teamColors: ["#98002E", "#000000"], // Miami Heat colors (red & black)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesle01.html",
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Cleveland Cavaliers",
    year: 2016,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url:
      "https://th.bing.com/th/id/R.c170557a936a4fef610d852adb779db3?rik=D8%2fY40jObq4D5A&riu=http%3a%2f%2fwww4.pictures.zimbio.com%2fgi%2fLeBron%2bJames%2b2016%2bNBA%2bFinals%2bGame%2bSix%2bEb6GXjIwPjXl.jpg&ehk=4FG7kIkGBnMIyu3rITjzqi%2fAKXwn8H2aOEygALPPBI4%3d&risl=&pid=ImgRaw&r=0",
    stats: "PPG: 25.3, RPG: 7.4, APG: 6.8, FG%: 50.7%, 3P%: 34.5%, FT%: 73.6%",
    card_brand: "Upper Deck",
    birth_year: 1984,
    teamColors: ["#6A1E1F", "#FFC72C"], // Cleveland Cavaliers colors (maroon & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesle01.html",
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Los Angeles Lakers",
    year: 2020,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url:
      "https://th.bing.com/th/id/OIP.r6oWsK_UFbRsgB3xHnvtSAAAAA?rs=1&pid=ImgDetMain",
    stats: "PPG: 25.3, RPG: 7.8, APG: 10.2, FG%: 49.7%, 3P%: 34.9%, FT%: 69.4%",
    card_brand: "Donruss",
    birth_year: 1984,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesle01.html",
  },
  {
    name: "LeBron James",
    draft_year: 2003,
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Akron, Ohio",
    high_school: "St. Vincent-St. Mary High School",
    college: "None (NBA)",
    image_url: "https://images.wsj.net/im-762053/?width=1278&size=1",
    stats: "PPG: 24.1, RPG: 8.5, APG: 9.1, FG%: 49.8%, 3P%: 30.0%, FT%: 75.9%",
    card_brand: "Panini",
    birth_year: 1984,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesle01.html",
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url:
      "https://th.bing.com/th/id/OIP.Eqe-E4hgF8N7-GZ1DnLWsAHaFQ?rs=1&pid=ImgDetMain://example.com/images/bronny_2024_card.jpg",
    stats: "PPG: 12.5, RPG: 4.0, APG: 3.0, FG%: 41.2%, 3P%: 35.8%, FT%: 72.0%",
    card_brand: "Topps",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesbr02.html",
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2025,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url:
      "https://th.bing.com/th/id/OIP.6LA8J19HzNYWdtTPsIoSNgHaEK?rs=1&pid=ImgDetMain",
    stats: "PPG: 14.0, RPG: 4.5, APG: 4.2, FG%: 43.5%, 3P%: 36.5%, FT%: 74.0%",
    card_brand: "Upper Deck",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesbr02.html",
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2026,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url:
      "https://athlonsports.com/.image/t_share/MjA3NTc0NDcyMzM1NTY2NTMw/screenshot-2024-07-02-at-33839pm.jpg",
    stats: "PPG: 16.2, RPG: 5.0, APG: 5.5, FG%: 45.3%, 3P%: 38.0%, FT%: 75.0%",
    card_brand: "Donruss",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesbr02.html",
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2027,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url:
      "https://imengine.prod.srp.navigacloud.com/?uuid=33623231-6364-4737-a663-653565633562&type=primary&q=75&width=1024",
    stats: "PPG: 18.1, RPG: 6.3, APG: 6.2, FG%: 46.8%, 3P%: 39.2%, FT%: 76.5%",
    card_brand: "Panini",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesbr02.html",
  },
  {
    name: "Bronny James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2028,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "USC (2024)",
    image_url:
      "https://th.bing.com/th/id/OIP._oT_qVyMjadcQH6NCCzC1AHaFK?w=227&h=180&c=7&r=0&o=5&pid=1.7",
    stats: "PPG: 19.3, RPG: 7.0, APG: 7.5, FG%: 48.0%, 3P%: 40.0%, FT%: 77.5%",
    card_brand: "Topps",
    birth_year: 2004,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link:
      "https://www.basketball-reference.com/players/j/jamesbr02.html",
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2024,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url:
      "https://staticc.sportskeeda.com/editor/2023/02/e8d31-16775797808659-1920.jpg",
    stats: "PPG: 10.8, RPG: 3.2, APG: 2.0, FG%: 41.4%, 3P%: 33.3%, FT%: 70.0%",
    card_brand: "Topps",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link: "https://www.on3.com/db/bryce-james-157726/",
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2025,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url:
      "https://www.gluwee.com/wp-content/uploads/2022/12/Bryce-James-758x421.jpg",
    stats: "PPG: 12.4, RPG: 4.1, APG: 2.5, FG%: 43.2%, 3P%: 35.6%, FT%: 72.3%",
    card_brand: "Upper Deck",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link: "https://www.on3.com/db/bryce-james-157726/",
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2026,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url:
      "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1688561889/wcmeenod5wjayhpbdowb.jpg",
    stats: "PPG: 14.1, RPG: 5.2, APG: 3.0, FG%: 44.5%, 3P%: 36.8%, FT%: 73.0%",
    card_brand: "Donruss",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link: "https://www.on3.com/db/bryce-james-157726/",
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2027,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url:
      "https://people.com/thmb/oKvKkuYjEQKOWfuNi4yNZ2jxvQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(945x199:947x201)/Bryce-James-Hoophall-Classic-011623-38491b18764f49ee9d425aab2ea5a7a9.jpg",
    stats: "PPG: 18.5, RPG: 6.2, APG: 4.5, FG%: 45.3%, 3P%: 37.1%, FT%: 74.5%",
    card_brand: "Panini",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link: "https://www.on3.com/db/bryce-james-157726/",
  },
  {
    name: "Bryce James",
    draft_year: "TBD",
    team: "Los Angeles Lakers",
    year: 2028,
    birthplace: "Cleveland, Ohio",
    high_school: "Sierra Canyon High School",
    college: "TBD",
    image_url:
      "https://lh3.googleusercontent.com/1J-qQe3Dffp77PDxKwK7CO8HS2DkBKOz8f27RY0dd5feeYONCjlPeua1dmJRZETazvxqGH-QKiY4SjOUVkOOzyVR_GxRjbA8PRi7iw9ipRQbKNeubYnU1L1sX-QvgVsbaYgdvwKcDs6CzNr1e51BYJs",
    stats: "PPG: 20.3, RPG: 7.5, APG: 5.0, FG%: 46.5%, 3P%: 38.5%, FT%: 76.0%",
    card_brand: "Topps",
    birth_year: 2006,
    teamColors: ["#552582", "#FDB927"], // Los Angeles Lakers colors (purple & gold)
    reference_link: "https://www.on3.com/db/bryce-james-157726/",
  },
];

export { lecards };
