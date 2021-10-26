'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('recipes', [{
      id: 1,
      nombre: "Rainbow lory",
      descripcion: "Business Development"
    }, {
      id: 2,
      nombre: "Bobcat",
      descripcion: "Legal"
    }, {
      id: 3,
      nombre: "Crested barbet",
      descripcion: "Marketing"
    }, {
      id: 4,
      nombre: "Macaw, green-winged",
      descripcion: "Research and Development"
    }, {
      id: 5,
      nombre: "Ringtail, common",
      descripcion: "Product Management"
    }, {
      id: 6,
      nombre: "Hyrax",
      descripcion: "Human Resources"
    }, {
      id: 7,
      nombre: "Giant girdled lizard",
      descripcion: "Research and Development"
    }, {
      id: 8,
      nombre: "Squirrel, uinta ground",
      descripcion: "Research and Development"
    }, {
      id: 9,
      nombre: "Mountain duck",
      descripcion: "Accounting"
    }, {
      id: 10,
      nombre: "Grizzly bear",
      descripcion: "Human Resources"
    }, {
      id: 11,
      nombre: "Gull, swallow-tail",
      descripcion: "Support"
    }, {
      id: 12,
      nombre: "Frogmouth, tawny",
      descripcion: "Human Resources"
    }, {
      id: 13,
      nombre: "Woodchuck",
      descripcion: "Engineering"
    }, {
      id: 14,
      nombre: "Alligator, american",
      descripcion: "Support"
    }, {
      id: 15,
      nombre: "Insect, stick",
      descripcion: "Human Resources"
    }, {
      id: 16,
      nombre: "White-faced whistling duck",
      descripcion: "Support"
    }, {
      id: 17,
      nombre: "Kelp gull",
      descripcion: "Training"
    }, {
      id: 18,
      nombre: "Snake, green vine",
      descripcion: "Product Management"
    }, {
      id: 19,
      nombre: "Warthog",
      descripcion: "Marketing"
    }, {
      id: 20,
      nombre: "Snake, buttermilk",
      descripcion: "Services"
    }, {
      id: 21,
      nombre: "Wombat, southern hairy-nosed",
      descripcion: "Services"
    }, {
      id: 22,
      nombre: "Paddy heron (unidentified)",
      descripcion: "Legal"
    }, {
      id: 23,
      nombre: "Squirrel, pine",
      descripcion: "Support"
    }, {
      id: 24,
      nombre: "Japanese macaque",
      descripcion: "Marketing"
    }, {
      id: 25,
      nombre: "Lion, mountain",
      descripcion: "Legal"
    }, {
      id: 26,
      nombre: "Bat-eared fox",
      descripcion: "Support"
    }, {
      id: 27,
      nombre: "Black-tailed deer",
      descripcion: "Accounting"
    }, {
      id: 28,
      nombre: "Green-winged macaw",
      descripcion: "Human Resources"
    }, {
      id: 29,
      nombre: "American bighorn sheep",
      descripcion: "Product Management"
    }, {
      id: 30,
      nombre: "Mexican beaded lizard",
      descripcion: "Research and Development"
    }, {
      id: 31,
      nombre: "Kirk's dik dik",
      descripcion: "Research and Development"
    }, {
      id: 32,
      nombre: "Yellow-throated sandgrouse",
      descripcion: "Business Development"
    }, {
      id: 33,
      nombre: "Indian jackal",
      descripcion: "Marketing"
    }, {
      id: 34,
      nombre: "Spur-winged goose",
      descripcion: "Services"
    }, {
      id: 35,
      nombre: "Southern black-backed gull",
      descripcion: "Sales"
    }, {
      id: 36,
      nombre: "American bison",
      descripcion: "Support"
    }, {
      id: 37,
      nombre: "Squirrel glider",
      descripcion: "Business Development"
    }, {
      id: 38,
      nombre: "Bandicoot, short-nosed",
      descripcion: "Product Management"
    }, {
      id: 39,
      nombre: "Two-toed sloth",
      descripcion: "Sales"
    }, {
      id: 40,
      nombre: "Southern lapwing",
      descripcion: "Support"
    }, {
      id: 41,
      nombre: "Fisher",
      descripcion: "Support"
    }, {
      id: 42,
      nombre: "Langur, hanuman",
      descripcion: "Research and Development"
    }, {
      id: 43,
      nombre: "Owl, australian masked",
      descripcion: "Accounting"
    }, {
      id: 44,
      nombre: "Nelson ground squirrel",
      descripcion: "Legal"
    }, {
      id: 45,
      nombre: "African bush squirrel",
      descripcion: "Human Resources"
    }, {
      id: 46,
      nombre: "White-eye, cape",
      descripcion: "Product Management"
    }, {
      id: 47,
      nombre: "Curlew, black",
      descripcion: "Research and Development"
    }, {
      id: 48,
      nombre: "Robin, white-throated",
      descripcion: "Human Resources"
    }, {
      id: 49,
      nombre: "Phascogale, red-tailed",
      descripcion: "Marketing"
    }, {
      id: 50,
      nombre: "Southern right whale",
      descripcion: "Accounting"
    }, {
      id: 51,
      nombre: "Fairy penguin",
      descripcion: "Accounting"
    }, {
      id: 52,
      nombre: "Grey lourie",
      descripcion: "Support"
    }, {
      id: 53,
      nombre: "Squirrel, eastern fox",
      descripcion: "Training"
    }, {
      id: 54,
      nombre: "Eastern grey kangaroo",
      descripcion: "Support"
    }, {
      id: 55,
      nombre: "Cattle egret",
      descripcion: "Services"
    }, {
      id: 56,
      nombre: "Steller sea lion",
      descripcion: "Sales"
    }, {
      id: 57,
      nombre: "White-throated robin",
      descripcion: "Business Development"
    }, {
      id: 58,
      nombre: "Crow, american",
      descripcion: "Services"
    }, {
      id: 59,
      nombre: "Caracal",
      descripcion: "Support"
    }, {
      id: 60,
      nombre: "Cormorant, neotropic",
      descripcion: "Accounting"
    }, {
      id: 61,
      nombre: "Bonnet macaque",
      descripcion: "Accounting"
    }, {
      id: 62,
      nombre: "Black-backed magpie",
      descripcion: "Services"
    }, {
      id: 63,
      nombre: "Cormorant, little",
      descripcion: "Accounting"
    }, {
      id: 64,
      nombre: "Lesser mouse lemur",
      descripcion: "Legal"
    }, {
      id: 65,
      nombre: "Southern boubou",
      descripcion: "Marketing"
    }, {
      id: 66,
      nombre: "Stork, yellow-billed",
      descripcion: "Engineering"
    }, {
      id: 67,
      nombre: "Fowl, helmeted guinea",
      descripcion: "Support"
    }, {
      id: 68,
      nombre: "Columbian rainbow boa",
      descripcion: "Product Management"
    }, {
      id: 69,
      nombre: "Galapagos sea lion",
      descripcion: "Research and Development"
    }, {
      id: 70,
      nombre: "Goose, snow",
      descripcion: "Business Development"
    }, {
      id: 71,
      nombre: "Lizard, frilled",
      descripcion: "Research and Development"
    }, {
      id: 72,
      nombre: "Small-toothed palm civet",
      descripcion: "Services"
    }, {
      id: 73,
      nombre: "White-lipped peccary",
      descripcion: "Marketing"
    }, {
      id: 74,
      nombre: "White-fronted bee-eater",
      descripcion: "Human Resources"
    }, {
      id: 75,
      nombre: "Flicker, campo",
      descripcion: "Research and Development"
    }, {
      id: 76,
      nombre: "Magnificent frigate bird",
      descripcion: "Human Resources"
    }, {
      id: 77,
      nombre: "Mourning collared dove",
      descripcion: "Product Management"
    }, {
      id: 78,
      nombre: "Porcupine, african",
      descripcion: "Business Development"
    }, {
      id: 79,
      nombre: "African pied wagtail",
      descripcion: "Support"
    }, {
      id: 80,
      nombre: "White rhinoceros",
      descripcion: "Legal"
    }, {
      id: 81,
      nombre: "Hornbill, yellow-billed",
      descripcion: "Support"
    }, {
      id: 82,
      nombre: "Robin, white-throated",
      descripcion: "Support"
    }, {
      id: 83,
      nombre: "Greater flamingo",
      descripcion: "Accounting"
    }, {
      id: 84,
      nombre: "Striped hyena",
      descripcion: "Training"
    }, {
      id: 85,
      nombre: "American black bear",
      descripcion: "Engineering"
    }, {
      id: 86,
      nombre: "Barbet, crested",
      descripcion: "Support"
    }, {
      id: 87,
      nombre: "Cobra (unidentified)",
      descripcion: "Sales"
    }, {
      id: 88,
      nombre: "Leadbeateri's ground hornbill",
      descripcion: "Product Management"
    }, {
      id: 89,
      nombre: "Paca",
      descripcion: "Product Management"
    }, {
      id: 90,
      nombre: "Macaque, bonnet",
      descripcion: "Product Management"
    }, {
      id: 91,
      nombre: "Sandhill crane",
      descripcion: "Business Development"
    }, {
      id: 92,
      nombre: "Macaw, red and blue",
      descripcion: "Product Management"
    }, {
      id: 93,
      nombre: "Stick insect",
      descripcion: "Marketing"
    }, {
      id: 94,
      nombre: "Savannah deer",
      descripcion: "Training"
    }, {
      id: 95,
      nombre: "Cape fox",
      descripcion: "Training"
    }, {
      id: 96,
      nombre: "Lynx, african",
      descripcion: "Engineering"
    }, {
      id: 97,
      nombre: "Porcupine, tree",
      descripcion: "Product Management"
    }, {
      id: 98,
      nombre: "Dassie",
      descripcion: "Business Development"
    }, {
      id: 99,
      nombre: "Gull, herring",
      descripcion: "Engineering"
    }, {
      id: 100,
      nombre: "Little grebe",
      descripcion: "Services"
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
