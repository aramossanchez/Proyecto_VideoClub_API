'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('peliculas', [
      {
        "titulo": "Samson and Delilah",
        "genero": "Adventure|Drama",
        "actor_principal": "Berkly Povah",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Dagon",
        "genero": "Fantasy|Horror|Mystery|Thriller",
        "actor_principal": "Tate Aishford",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "All the Little Animals",
        "genero": "Drama|Thriller",
        "actor_principal": "Arlette Dykas",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Last Taboo, The",
        "genero": "Documentary",
        "actor_principal": "Ula Maryman",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Kiss the Girls",
        "genero": "Crime|Drama|Mystery|Thriller",
        "actor_principal": "Ulysses Van der Veldt",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Nothing About Robert (Rien sur Robert)",
        "genero": "Comedy|Drama",
        "actor_principal": "Caryl Jouhan",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "On the Beach",
        "genero": "Drama|Sci-Fi",
        "actor_principal": "Gayla Dancey",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Governess, The",
        "genero": "Drama|Romance",
        "actor_principal": "Ginni Bendle",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Rebirth",
        "genero": "Documentary",
        "actor_principal": "Ricard de Vaen",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Village, The",
        "genero": "Drama|Mystery|Thriller",
        "actor_principal": "Korella McDirmid",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Proof of Life",
        "genero": "Drama",
        "actor_principal": "Gustie Oleszkiewicz",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Parent Trap, The",
        "genero": "Children|Comedy|Romance",
        "actor_principal": "Lorens Batters",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "My Favorite Year",
        "genero": "Comedy",
        "actor_principal": "Sauveur Whitaker",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "12 Dates of Christmas",
        "genero": "Children|Comedy|Fantasy|Romance",
        "actor_principal": "Koren Nixon",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Burning Secret",
        "genero": "Drama",
        "actor_principal": "Ossie Harteley",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Bad Boys II",
        "genero": "Action|Comedy|Crime|Thriller",
        "actor_principal": "Em Gremain",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Merlin",
        "genero": "Action|Adventure|Drama|Fantasy|Romance",
        "actor_principal": "Orv Sleany",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Kickboxer 2: The Road Back",
        "genero": "Action|Drama",
        "actor_principal": "Isak Tedahl",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Conspiracy",
        "genero": "Drama|War",
        "actor_principal": "Katharine Youngman",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Shipping News, The",
        "genero": "Drama",
        "actor_principal": "Jami Masselin",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Happy Road",
        "genero": "Comedy",
        "actor_principal": "Alexandre Chawner",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Dawn of the Dead",
        "genero": "Action|Drama|Horror",
        "actor_principal": "Woodman Marzellano",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Darwin Awards, The",
        "genero": "Adventure|Comedy|Romance",
        "actor_principal": "Edithe Speers",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "My Little Pony: Equestria Girls",
        "genero": "Animation|Children|Fantasy",
        "actor_principal": "Alexandros Dhillon",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Thousand Clowns, A",
        "genero": "Comedy|Drama|Romance",
        "actor_principal": "Desdemona Pendall",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Sunnyside",
        "genero": "Comedy",
        "actor_principal": "Maurizia Orfeur",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Real Women Have Curves",
        "genero": "Comedy|Drama",
        "actor_principal": "Levi Mattersey",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Kill the Irishman",
        "genero": "Action|Crime",
        "actor_principal": "Stillmann Fullstone",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Vision (Vision - Aus dem Leben der Hildegard von Bingen)",
        "genero": "Drama",
        "actor_principal": "Loria Roderham",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Johns",
        "genero": "Drama",
        "actor_principal": "Kirbee Bootherstone",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Forced Vengeance",
        "genero": "Action|Adventure",
        "actor_principal": "Tess Oscroft",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Stranger in Town, A",
        "genero": "Drama|Romance",
        "actor_principal": "Tamarra Shucksmith",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Three Comrades",
        "genero": "Drama",
        "actor_principal": "Page Handrok",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Cave of the Golden Rose",
        "genero": "Adventure|Children|Fantasy",
        "actor_principal": "Jayne Davoren",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Rush Hour 2",
        "genero": "Action|Comedy",
        "actor_principal": "Gardy O'Spellissey",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Untraceable",
        "genero": "Crime|Thriller",
        "actor_principal": "Waylon Ossenna",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Superbad",
        "genero": "Comedy",
        "actor_principal": "Clerkclaude Deegin",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Stag",
        "genero": "Action|Thriller",
        "actor_principal": "Porter Klimushev",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Year of the Comet",
        "genero": "Action|Adventure|Comedy|Romance",
        "actor_principal": "Sarita Botfield",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Date with Judy, A",
        "genero": "Comedy|Musical|Romance",
        "actor_principal": "Felita Knappitt",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Nicholas Nickleby",
        "genero": "Drama|Romance",
        "actor_principal": "Gregoire Shimmin",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Doctor Strange",
        "genero": "Action|Animation|Children|Fantasy|Sci-Fi",
        "actor_principal": "Mead Gebb",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Summer Holiday",
        "genero": "Musical|Romance",
        "actor_principal": "Leanor Fisbey",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Happy Time, The",
        "genero": "Comedy",
        "actor_principal": "Tobey Zorn",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Red and the White, The (Csillagosok, katonák)",
        "genero": "Drama|War",
        "actor_principal": "Latrina Dommerque",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Tout ce qui brille",
        "genero": "Comedy|Drama",
        "actor_principal": "Linda Bricknall",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "My Father's Glory (La gloire de mon père)",
        "genero": "Adventure|Drama",
        "actor_principal": "Amelia Bewshire",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Phil Spector",
        "genero": "Drama",
        "actor_principal": "Fidela Cutmare",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Shorts",
        "genero": "Children",
        "actor_principal": "Max Whetson",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Morgan Pålsson - världsreporter",
        "genero": "Action|Comedy",
        "actor_principal": "Aurthur Prentice",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Splinter",
        "genero": "Action|Horror|Thriller",
        "actor_principal": "Stevy Popplestone",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Land Before Time XII: The Great Day of the Flyers",
        "genero": "Animation|Children|Sci-Fi",
        "actor_principal": "Peyter Becke",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Emperor Waltz, The",
        "genero": "Comedy|Musical|Romance",
        "actor_principal": "Wolfy Belfit",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Day, The",
        "genero": "Drama|Sci-Fi|Thriller",
        "actor_principal": "Arlinda Agdahl",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "I Spy",
        "genero": "Action|Adventure|Comedy|Crime",
        "actor_principal": "Shaw Klimkiewich",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Age of Stupid, The",
        "genero": "Documentary",
        "actor_principal": "Terrel Haffenden",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Wattstax",
        "genero": "Documentary|Musical",
        "actor_principal": "Alaric Davids",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Iron Horse, The",
        "genero": "Western",
        "actor_principal": "Pren Penburton",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Blue State",
        "genero": "Comedy",
        "actor_principal": "Quentin Pasticznyk",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Numbskull Emptybrook in the Army (Uuno Turhapuro armeijan leivissä)",
        "genero": "Comedy",
        "actor_principal": "Rasia Varley",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Woman in Black 2: Angel of Death",
        "genero": "Drama|Horror|Thriller",
        "actor_principal": "Avie Shewan",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Star of Midnight",
        "genero": "Comedy|Mystery|Romance",
        "actor_principal": "Maynard Morman",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Elia Kazan: A Director's Journey",
        "genero": "Documentary",
        "actor_principal": "Joana Yashnov",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Travellers and Magicians",
        "genero": "Adventure|Drama",
        "actor_principal": "Marillin Keysel",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Lost Horizon",
        "genero": "Adventure|Drama|Fantasy|Musical|Romance",
        "actor_principal": "Fields Gley",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Legend of Bagger Vance, The",
        "genero": "Drama|Romance",
        "actor_principal": "Shae Rapin",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Destinées, Les (Destinées sentimentales, Les)",
        "genero": "Drama|Romance",
        "actor_principal": "Yorker Wesley",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The D.I.",
        "genero": "Drama",
        "actor_principal": "Worthington Empringham",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Mad Masters, The (Les maîtres fous)",
        "genero": "Documentary",
        "actor_principal": "Griz Berrane",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Skinwalkers",
        "genero": "Horror|Thriller",
        "actor_principal": "Josephine Shafier",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Chorus, The (Hamsarayan)",
        "genero": "Drama",
        "actor_principal": "Donelle Munro",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Aladdin",
        "genero": "Adventure|Animation|Children|Comedy|Musical",
        "actor_principal": "Grange Burnsall",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Pigskin Parade",
        "genero": "Musical",
        "actor_principal": "Thorvald Hailston",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Railway Man, The",
        "genero": "Drama",
        "actor_principal": "Floria Tregaskis",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "China 9, Liberty 37 (Amore, piombo e furore)",
        "genero": "Western",
        "actor_principal": "Lewie Grigoletti",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Search for Santa Paws",
        "genero": "Adventure|Children",
        "actor_principal": "Horst Comi",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "The Emperor's Candlesticks",
        "genero": "Drama|Romance",
        "actor_principal": "Miltie Levene",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Valentin (Valentín)",
        "genero": "Drama",
        "actor_principal": "Charissa Tolchar",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Magic in the Water",
        "genero": "Adventure|Children|Fantasy",
        "actor_principal": "Billy Kingdon",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Funny Games U.S.",
        "genero": "Drama|Thriller",
        "actor_principal": "Clareta Bullon",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Expired",
        "genero": "Comedy|Drama|Romance",
        "actor_principal": "Maddy Porkiss",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Suspect, The (Yong-eui-ja)",
        "genero": "Action|Thriller",
        "actor_principal": "Chico Bolliver",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Lord of the Rings: The Return of the King, The",
        "genero": "Action|Adventure|Drama|Fantasy",
        "actor_principal": "Liesa Deveral",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Chimpanzee",
        "genero": "Documentary",
        "actor_principal": "Fanya Powe",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Sweet Evil (L'enfance du mal)",
        "genero": "Drama",
        "actor_principal": "Kelly Macer",
        "ciudad": "Valencia",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Brazilian Western (Faroeste Caboclo)",
        "genero": "Crime|Drama|Romance",
        "actor_principal": "Marney Abdie",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "I Start Counting",
        "genero": "Thriller",
        "actor_principal": "Corinne Jimmison",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Los Marziano",
        "genero": "Comedy|Drama",
        "actor_principal": "Tuesday Champkins",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Star, The",
        "genero": "Drama",
        "actor_principal": "Johnathon Imlock",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Charlotte's Web",
        "genero": "Animation|Children",
        "actor_principal": "Sheppard Petruskevich",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Brotherhood of Death",
        "genero": "Action|Drama|War",
        "actor_principal": "Austina Echalier",
        "ciudad": "Albacete",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Everyone Else (Alle Anderen)",
        "genero": "Drama|Romance",
        "actor_principal": "Ingrim Gammade",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Superstar: The Karen Carpenter Story",
        "genero": "Drama|Musical",
        "actor_principal": "Morissa Rarity",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "'Twas the Night Before Christmas",
        "genero": "Animation|Children|Fantasy",
        "actor_principal": "Gussy Whyberd",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Divorce",
        "genero": "Drama",
        "actor_principal": "Lucius Youel",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Little Ashes",
        "genero": "Drama",
        "actor_principal": "Paolo O'Cullinane",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Tekkonkinkreet (Tekkon kinkurîto)",
        "genero": "Action|Adventure|Animation|Crime|Fantasy",
        "actor_principal": "Flori Werndley",
        "ciudad": "Albacete",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Borrowers, The",
        "genero": "Adventure|Children|Comedy|Fantasy",
        "actor_principal": "Reine McElvine",
        "ciudad": "Getafe",
        "alquilada": true,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "Cowboy Bebop",
        "genero": "Action|Adventure|Animation|Crime|Sci-Fi",
        "actor_principal": "Greg Casburn",
        "ciudad": "Getafe",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }, {
        "titulo": "King - Jari Litmanen, The (Kuningas Litmanen)",
        "genero": "Documentary",
        "actor_principal": "Jerrylee Mardy",
        "ciudad": "Valencia",
        "alquilada": false,
        "createdAt": "27.10.2021",
        "updatedAt": "27.10.2021"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('peliculas', null, {});

  }
};
