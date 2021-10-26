'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkInsert('ingredients', [{
      id: 1,
      nombre: "Pavo cristatus"
    }, {
      id: 2,
      nombre: "Bucephala clangula"
    }, {
      id: 3,
      nombre: "Thamnolaea cinnmomeiventris"
    }, {
      id: 4,
      nombre: "Tadorna tadorna"
    }, {
      id: 5,
      nombre: "unavailable"
    }, {
      id: 6,
      nombre: "Ramphastos tucanus"
    }, {
      id: 7,
      nombre: "Pteropus rufus"
    }, {
      id: 8,
      nombre: "Phacochoerus aethiopus"
    }, {
      id: 9,
      nombre: "Crotalus cerastes"
    }, {
      id: 10,
      nombre: "Anas punctata"
    }, {
      id: 11,
      nombre: "Tachybaptus ruficollis"
    }, {
      id: 12,
      nombre: "Larus novaehollandiae"
    }, {
      id: 13,
      nombre: "Ursus americanus"
    }, {
      id: 14,
      nombre: "Lorythaixoides concolor"
    }, {
      id: 15,
      nombre: "Spermophilus armatus"
    }, {
      id: 16,
      nombre: "Anhinga rufa"
    }, {
      id: 17,
      nombre: "Lama pacos"
    }, {
      id: 18,
      nombre: "Semnopithecus entellus"
    }, {
      id: 19,
      nombre: "Pavo cristatus"
    }, {
      id: 20,
      nombre: "Haematopus ater"
    }, {
      id: 21,
      nombre: "Petaurus breviceps"
    }, {
      id: 22,
      nombre: "Equus burchelli"
    }, {
      id: 23,
      nombre: "Ninox superciliaris"
    }, {
      id: 24,
      nombre: "Gyps bengalensis"
    }, {
      id: 25,
      nombre: "Francolinus leucoscepus"
    }, {
      id: 26,
      nombre: "Larus fuliginosus"
    }, {
      id: 27,
      nombre: "Falco peregrinus"
    }, {
      id: 28,
      nombre: "Leipoa ocellata"
    }, {
      id: 29,
      nombre: "Meles meles"
    }, {
      id: 30,
      nombre: "Ara chloroptera"
    }, {
      id: 31,
      nombre: "Gymnorhina tibicen"
    }, {
      id: 32,
      nombre: "Pelecanus conspicillatus"
    }, {
      id: 33,
      nombre: "Ratufa indica"
    }, {
      id: 34,
      nombre: "Climacteris melanura"
    }, {
      id: 35,
      nombre: "Loris tardigratus"
    }, {
      id: 36,
      nombre: "Coluber constrictor foxii"
    }, {
      id: 37,
      nombre: "Ceratotherium simum"
    }, {
      id: 38,
      nombre: "Felis serval"
    }, {
      id: 39,
      nombre: "Platalea leucordia"
    }, {
      id: 40,
      nombre: "Cordylus giganteus"
    }, {
      id: 41,
      nombre: "Grus canadensis"
    }, {
      id: 42,
      nombre: "Psophia viridis"
    }, {
      id: 43,
      nombre: "Cordylus giganteus"
    }, {
      id: 44,
      nombre: "Psophia viridis"
    }, {
      id: 45,
      nombre: "Amphibolurus barbatus"
    }, {
      id: 46,
      nombre: "Drymarchon corias couperi"
    }, {
      id: 47,
      nombre: "Ardea golieth"
    }, {
      id: 48,
      nombre: "Lybius torquatus"
    }, {
      id: 49,
      nombre: "Porphyrio porphyrio"
    }, {
      id: 50,
      nombre: "Crocuta crocuta"
    }, {
      id: 51,
      nombre: "Himantopus himantopus"
    }, {
      id: 52,
      nombre: "Pelecans onocratalus"
    }, {
      id: 53,
      nombre: "Lorythaixoides concolor"
    }, {
      id: 54,
      nombre: "Phascogale calura"
    }, {
      id: 55,
      nombre: "Antidorcas marsupialis"
    }, {
      id: 56,
      nombre: "Neotis denhami"
    }, {
      id: 57,
      nombre: "Chlidonias leucopterus"
    }, {
      id: 58,
      nombre: "Felis caracal"
    }, {
      id: 59,
      nombre: "Centrocercus urophasianus"
    }, {
      id: 60,
      nombre: "Felis wiedi or Leopardus weidi"
    }, {
      id: 61,
      nombre: "Ninox superciliaris"
    }, {
      id: 62,
      nombre: "Tursiops truncatus"
    }, {
      id: 63,
      nombre: "Amazona sp."
    }, {
      id: 64,
      nombre: "Aonyx cinerea"
    }, {
      id: 65,
      nombre: "Crotalus adamanteus"
    }, {
      id: 66,
      nombre: "Sula dactylatra"
    }, {
      id: 67,
      nombre: "Megaderma spasma"
    }, {
      id: 68,
      nombre: "Spermophilus richardsonii"
    }, {
      id: 69,
      nombre: "Dicrostonyx groenlandicus"
    }, {
      id: 70,
      nombre: "Tachyglossus aculeatus"
    }, {
      id: 71,
      nombre: "Tringa glareola"
    }, {
      id: 72,
      nombre: "Dendrocitta vagabunda"
    }, {
      id: 73,
      nombre: "Damaliscus lunatus"
    }, {
      id: 74,
      nombre: "Pavo cristatus"
    }, {
      id: 75,
      nombre: "Pycnonotus barbatus"
    }, {
      id: 76,
      nombre: "Hystrix cristata"
    }, {
      id: 77,
      nombre: "Plocepasser mahali"
    }, {
      id: 78,
      nombre: "Dicrostonyx groenlandicus"
    }, {
      id: 79,
      nombre: "Paraxerus cepapi"
    }, {
      id: 80,
      nombre: "Gopherus agassizii"
    }, {
      id: 81,
      nombre: "Terathopius ecaudatus"
    }, {
      id: 82,
      nombre: "Heloderma horridum"
    }, {
      id: 83,
      nombre: "Vicugna vicugna"
    }, {
      id: 84,
      nombre: "Dasyprocta leporina"
    }, {
      id: 85,
      nombre: "Ephipplorhynchus senegalensis"
    }, {
      id: 86,
      nombre: "Madoqua kirkii"
    }, {
      id: 87,
      nombre: "unavailable"
    }, {
      id: 88,
      nombre: "Neophron percnopterus"
    }, {
      id: 89,
      nombre: "Heloderma horridum"
    }, {
      id: 90,
      nombre: "Globicephala melas"
    }, {
      id: 91,
      nombre: "Odocoileus hemionus"
    }, {
      id: 92,
      nombre: "Chelodina longicollis"
    }, {
      id: 93,
      nombre: "Macropus agilis"
    }, {
      id: 94,
      nombre: "Pelecans onocratalus"
    }, {
      id: 95,
      nombre: "Connochaetus taurinus"
    }, {
      id: 96,
      nombre: "Choloepus hoffmani"
    }, {
      id: 97,
      nombre: "Cercopithecus aethiops"
    }, {
      id: 98,
      nombre: "Capra ibex"
    }, {
      id: 99,
      nombre: "Larus dominicanus"
    }, {
      id: 100,
      nombre: "Pycnonotus barbatus"
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('ingredients', null, {});
  }
};
