'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {
        "titulo": "The Brain",
        "genero": "Comedy|Crime",
        "actor_principal": "Emlyn Prosek",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "How to Die in Oregon",
        "genero": "Documentary|Drama",
        "actor_principal": "Rickard Glazyer",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "No Man of Her Own ",
        "genero": "Drama|Film-Noir",
        "actor_principal": "Gwynne Occleshaw",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Wolfen",
        "genero": "Horror",
        "actor_principal": "Renate Brinsden",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Crazy Stone (Fengkuang de shitou)",
        "genero": "Comedy|Crime",
        "actor_principal": "Jolene Comoletti",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Trans",
        "genero": "Drama",
        "actor_principal": "Anissa Bresnen",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Streets of Blood",
        "genero": "Action|Thriller",
        "actor_principal": "Tedman Tevlin",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Deep Water",
        "genero": "Documentary",
        "actor_principal": "Marlin Savin",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Female Convict Scorpion: Jailhouse 41 (Joshuu sasori: Dai-41 zakkyo-bô)",
        "genero": "Crime|Drama|Thriller",
        "actor_principal": "Tani Kinkaid",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "A Connecticut Yankee in King Arthur's Court",
        "genero": "Adventure|Children|Comedy|Fantasy",
        "actor_principal": "Glen Chattington",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Family Honeymoon",
        "genero": "Comedy|Romance",
        "actor_principal": "Alfy Durak",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Desert Saints",
        "genero": "Action|Thriller",
        "actor_principal": "Brady Benettelli",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Toomorrow",
        "genero": "Comedy|Musical|Sci-Fi",
        "actor_principal": "Atlante D'eath",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Things Behind the Sun",
        "genero": "Drama",
        "actor_principal": "Gerhardine Allaker",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Boat That Rocked, The (a.k.a. Pirate Radio)",
        "genero": "Comedy|Drama",
        "actor_principal": "Sabrina Beeden",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Yo Yo (Yoyo)",
        "genero": "Comedy|Drama|Romance",
        "actor_principal": "Lorry MacLaughlin",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Street Fighter, The (Gekitotsu! Satsujin ken)",
        "genero": "Action",
        "actor_principal": "Edlin Wyllcock",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Beneath Hill 60",
        "genero": "Drama|War",
        "actor_principal": "Ernaline Connal",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Jetsons: The Movie",
        "genero": "Animation|Children|Comedy|Musical|Sci-Fi",
        "actor_principal": "Raimondo Lickess",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Valentine",
        "genero": "Horror|Mystery",
        "actor_principal": "Noak Waylett",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Drevo",
        "genero": "Drama",
        "actor_principal": "Shantee Glander",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Samaritan Zatoichi (Zatôichi kenka-daiko) (Zatôichi 19)",
        "genero": "Action|Adventure|Drama",
        "actor_principal": "Konstance Dillamore",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Punksters & Youngsters (Punk - Tauti joka ei tapa)",
        "genero": "Documentary",
        "actor_principal": "Orsa Davinet",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Phone (Pon)",
        "genero": "Drama|Horror|Mystery|Sci-Fi|Thriller",
        "actor_principal": "Val Garrique",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Mr. Nice Guy (Yat goh ho yan)",
        "genero": "Action|Comedy",
        "actor_principal": "Thorn Bothe",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Midnight Movies: From the Margin to the Mainstream",
        "genero": "Documentary",
        "actor_principal": "Lorelei Picopp",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Black Rainbow",
        "genero": "Thriller",
        "actor_principal": "Penn Skittles",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Family Weekend",
        "genero": "Comedy|Drama",
        "actor_principal": "Carline Vedyaev",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Some Body",
        "genero": "Drama",
        "actor_principal": "Dorotea Flack",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Lovers of Hate",
        "genero": "Comedy",
        "actor_principal": "Willette Greep",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Little Nemo: Adventures in Slumberland",
        "genero": "Adventure|Animation|Children|Drama|Fantasy",
        "actor_principal": "Hamish Bolding",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Night of the Zombies (a.k.a. Hell of the Living Dead) (Virus)",
        "genero": "Action|Horror|Thriller",
        "actor_principal": "Bryanty Winnister",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Soloalbum",
        "genero": "Comedy|Romance",
        "actor_principal": "Aurore Keeler",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Ghost of Frankenstein, The",
        "genero": "Horror",
        "actor_principal": "Ephrayim Ivoshin",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "The Fuller Brush Man",
        "genero": "Adventure|Comedy",
        "actor_principal": "Bryna Mordey",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Five Minarets in New York (Act of Vengeance) (Terrorist, The)",
        "genero": "Drama",
        "actor_principal": "Marketa Phippen",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Bubble",
        "genero": "Crime|Drama|Mystery",
        "actor_principal": "Nikos Furmedge",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Candyman 3: Day of the Dead",
        "genero": "Horror",
        "actor_principal": "Roddy Bigglestone",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "L'instant et la patience ",
        "genero": "Documentary",
        "actor_principal": "Emelda Parkinson",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Angélique, marquise des anges",
        "genero": "Adventure|Romance",
        "actor_principal": "Shannon Vallentine",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Bangkok Dangerous",
        "genero": "Action|Crime|Thriller",
        "actor_principal": "Courtney Dyka",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "I've Loved You So Long (Il y a longtemps que je t'aime)",
        "genero": "Drama|Mystery",
        "actor_principal": "Archer Father",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Cat Soup (Nekojiru-so)",
        "genero": "Adventure|Animation|Drama|Horror",
        "actor_principal": "Humfrey Canning",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Where the Road Meets the Sun",
        "genero": "Crime|Drama",
        "actor_principal": "Dannye Corinton",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Andromeda Strain, The",
        "genero": "Mystery|Sci-Fi",
        "actor_principal": "Nerte Mayow",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "American Crime, An",
        "genero": "Crime",
        "actor_principal": "Alicea Duplan",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Odds, The",
        "genero": "Crime|Mystery",
        "actor_principal": "Amalee Brockman",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Whistling in Dixie",
        "genero": "Comedy|Crime|Mystery",
        "actor_principal": "Marlow Turfs",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Fair Game",
        "genero": "Drama|Thriller",
        "actor_principal": "Sven Seakes",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Maid in Sweden",
        "genero": "Drama",
        "actor_principal": "Constancia Drew",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Common Thread, A (a.k.a. Sequins) (Brodeuses)",
        "genero": "Drama|Romance",
        "actor_principal": "Jennilee Bruntjen",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Far from the Madding Crowd",
        "genero": "Drama|Romance",
        "actor_principal": "Grayce Burchmore",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Love Object",
        "genero": "Comedy|Drama|Horror|Romance|Thriller",
        "actor_principal": "Talia Bratt",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Anatomy (Anatomie)",
        "genero": "Horror",
        "actor_principal": "Josee Guyan",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Green Ice",
        "genero": "Adventure|Romance",
        "actor_principal": "Zaccaria Rodbourne",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Leaves of Grass",
        "genero": "Comedy|Crime|Drama|Thriller",
        "actor_principal": "Sheryl Crumbie",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Human Scale, The",
        "genero": "Documentary",
        "actor_principal": "Pippy Bearward",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "French Fried Vacation 3 (Les bronzés 3: amis pour la vie)",
        "genero": "Comedy",
        "actor_principal": "Alley Meneyer",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Belly",
        "genero": "Crime|Drama",
        "actor_principal": "Murdock Jaine",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Living Room of the Nation, The (Kansakunnan olohuone)",
        "genero": "Documentary",
        "actor_principal": "Justen Stukings",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Hey Arnold! The Movie",
        "genero": "Adventure|Animation|Children|Comedy",
        "actor_principal": "Aloin Merkle",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Seeking a Friend for the End of the World",
        "genero": "Comedy|Drama|Romance",
        "actor_principal": "Felicio Chadwick",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Expecting a Miracle",
        "genero": "Drama",
        "actor_principal": "Kaleb Duffree",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Medicine for Melancholy",
        "genero": "Drama|Romance",
        "actor_principal": "Britta Reinmar",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Obama Deception: The Mask Comes Off, The",
        "genero": "Documentary",
        "actor_principal": "Harris Cokayne",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Mulholland Falls",
        "genero": "Crime|Drama|Thriller",
        "actor_principal": "Debby Sibbert",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Stepdaughter, The",
        "genero": "Horror|Thriller",
        "actor_principal": "Orion Guillerman",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Waterloo",
        "genero": "Action|Drama|War",
        "actor_principal": "Cosimo McSperrin",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "War Photographer",
        "genero": "Documentary|War",
        "actor_principal": "Almeta Crosher",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Mission: Impossible - Ghost Protocol",
        "genero": "Action|Adventure|Thriller|IMAX",
        "actor_principal": "Noland Andriessen",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Joyless Street, The (Die freudlose Gasse)",
        "genero": "Drama",
        "actor_principal": "Abdel Goodered",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Passion of Anna, The (Passion, En)",
        "genero": "Drama",
        "actor_principal": "Haskel Parlet",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Mr. Robinson Crusoe",
        "genero": "Adventure|Comedy",
        "actor_principal": "Garey Hayen",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Night Terrors",
        "genero": "Horror",
        "actor_principal": "Emilio Kinrade",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "To Sleep with Anger",
        "genero": "Drama",
        "actor_principal": "Matt Trodden",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Post Mortem",
        "genero": "Drama",
        "actor_principal": "Jim Vassie",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Making the Grade",
        "genero": "Comedy",
        "actor_principal": "Koren Josiah",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "G@me",
        "genero": "Thriller",
        "actor_principal": "Lanny Manhood",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Story of Three Loves, The",
        "genero": "Drama|Musical|Romance",
        "actor_principal": "Koren Schrieves",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Better Living",
        "genero": "Comedy",
        "actor_principal": "Lotte Caldow",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Bio Zombie (Sun faa sau si)",
        "genero": "Comedy|Horror",
        "actor_principal": "Grover Barrington",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Haunt",
        "genero": "Horror|Mystery",
        "actor_principal": "Jo-anne Giorgietto",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Lost World: Jurassic Park, The",
        "genero": "Action|Adventure|Sci-Fi|Thriller",
        "actor_principal": "Kaitlynn Dobrowski",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "I Know What I Saw",
        "genero": "Documentary",
        "actor_principal": "Val Kliner",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "TMNT (Teenage Mutant Ninja Turtles)",
        "genero": "Action|Adventure|Animation|Children|Comedy|Fantasy",
        "actor_principal": "Jacintha Songist",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Mysterious Mr. Moto",
        "genero": "Crime|Drama|Mystery",
        "actor_principal": "Kit Helgass",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Three Comrades",
        "genero": "Drama",
        "actor_principal": "Sondra Tuffin",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "And So It Goes",
        "genero": "Comedy|Drama|Romance",
        "actor_principal": "Ambrose Curnok",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Invincible",
        "genero": "Drama",
        "actor_principal": "Dall Brain",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Agnes of God",
        "genero": "Drama|Mystery",
        "actor_principal": "Ardisj Liddall",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Dirty Shame, A",
        "genero": "Comedy",
        "actor_principal": "Joachim Frantzen",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Rock-A-Doodle",
        "genero": "Adventure|Animation|Children|Musical",
        "actor_principal": "Analiese Bern",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Wieners",
        "genero": "Comedy",
        "actor_principal": "Brittni Gentery",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Jesse Stone: Night Passage",
        "genero": "Crime|Drama|Mystery",
        "actor_principal": "Arlene MacConneely",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "There Will Be Blood",
        "genero": "Drama|Western",
        "actor_principal": "Berrie Bromet",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Furies, The",
        "genero": "Drama|Romance|Western",
        "actor_principal": "Sanderson Radcliffe",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Lawyer Man",
        "genero": "Drama|Romance",
        "actor_principal": "Elna Barbour",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Ong-Bak 2: The Beginning (Ong Bak 2)",
        "genero": "Action",
        "actor_principal": "Nicolis Spriddle",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Sixteen Candles",
        "genero": "Comedy|Romance",
        "actor_principal": "Rosabelle Possel",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "titulo": "Greatest Game Ever Played, The",
        "genero": "Drama",
        "actor_principal": "Corney Leggis",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('peliculas', null, {});

  }
};
