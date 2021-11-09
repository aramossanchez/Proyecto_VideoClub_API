'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
    {"correo":"gvella0@typepad.com","clave":bcrypt.hashSync("fohtyuhh", Number.parseInt(authConfig.rounds)),"dni":"13917678T","nombre":"Loïca","apellidos":"Gawen Vella","direccion":"C/ Edgkiobzjom, número 39, 6ºW","ciudad":"Getafe","telefono":"+34-606976823","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"bsyddon1@mac.com","clave":bcrypt.hashSync("pexcedvo", Number.parseInt(authConfig.rounds)),"dni":"96059859L","nombre":"Bérengère","apellidos":"Bryan Syddon","direccion":"C/ Gtijodmxwew, número 52, 6ºV","ciudad":"Valencia","telefono":"+34-610998997","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"nbabinski2@buzzfeed.com","clave":bcrypt.hashSync("cjosytgt", Number.parseInt(authConfig.rounds)),"dni":"72525263R","nombre":"Eléa","apellidos":"Neill Babinski","direccion":"C/ Cxqhxlfonmd, número 29, 4ºF","ciudad":"Valencia","telefono":"+34-694163094","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"ddu3@icq.com","clave":bcrypt.hashSync("ctzpduhy", Number.parseInt(authConfig.rounds)),"dni":"99036689I","nombre":"Illustrée","apellidos":"Dina Du Fray","direccion":"C/ Oxqddleyqiv, número 37, 6ºI","ciudad":"Albacete","telefono":"+34-633709627","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"gmarion4@freewebs.com","clave":bcrypt.hashSync("xlaarkqz", Number.parseInt(authConfig.rounds)),"dni":"88155574K","nombre":"Maïly","apellidos":"Goldina Marion","direccion":"C/ Towcwyvcgja, número 24, 2ºB","ciudad":"Getafe","telefono":"+34-625964554","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"lbrader5@csmonitor.com","clave":bcrypt.hashSync("lyuqmvje", Number.parseInt(authConfig.rounds)),"dni":"90168523I","nombre":"Märta","apellidos":"Liesa Brader","direccion":"C/ Ghoytxlacab, número 52, 5ºX","ciudad":"Albacete","telefono":"+34-641623042","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"ade6@blogspot.com","clave":bcrypt.hashSync("slvmqrsd", Number.parseInt(authConfig.rounds)),"dni":"42941136Y","nombre":"Maïlys","apellidos":"Abba De Winton","direccion":"C/ Bjucslctsmu, número 83, 3ºR","ciudad":"Albacete","telefono":"+34-689288338","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"enorwell7@java.com","clave":bcrypt.hashSync("jtiuyzac", Number.parseInt(authConfig.rounds)),"dni":"03686824K","nombre":"Maï","apellidos":"Elsworth Norwell","direccion":"C/ Kxjmbvwkgbi, número 19, 0ºF","ciudad":"Albacete","telefono":"+34-636322271","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"tshall8@nbcnews.com","clave":bcrypt.hashSync("gubswawg", Number.parseInt(authConfig.rounds)),"dni":"33792556R","nombre":"Séréna","apellidos":"Terri-jo Shall","direccion":"C/ Wvoutesbwkh, número 25, 4ºM","ciudad":"Valencia","telefono":"+34-604635898","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"bjakubovits9@dmoz.org","clave":bcrypt.hashSync("wdaqqedk", Number.parseInt(authConfig.rounds)),"dni":"26176159Z","nombre":"Clémentine","apellidos":"Bartlet Jakubovits","direccion":"C/ Ynmcrmaslwe, número 63, 1ºV","ciudad":"Albacete","telefono":"+34-652667519","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"dgussiea@nbcnews.com","clave":bcrypt.hashSync("bnogtyqw", Number.parseInt(authConfig.rounds)),"dni":"28532835G","nombre":"Vénus","apellidos":"Demetris Gussie","direccion":"C/ Lffygjdgyub, número 39, 5ºA","ciudad":"Getafe","telefono":"+34-662687435","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"iexelbyb@histats.com","clave":bcrypt.hashSync("towwwyuf", Number.parseInt(authConfig.rounds)),"dni":"27867643C","nombre":"Wá","apellidos":"Ilyse Exelby","direccion":"C/ Obaqcmbrazt, número 59, 8ºK","ciudad":"Getafe","telefono":"+34-671084713","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"cblumsomc@tinypic.com","clave":bcrypt.hashSync("usevdjtb", Number.parseInt(authConfig.rounds)),"dni":"25616693C","nombre":"Björn","apellidos":"Cassey Blumsom","direccion":"C/ Qqsxlhjtrrl, número 14, 9ºZ","ciudad":"Albacete","telefono":"+34-638162449","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"mbuscherd@aol.com","clave":bcrypt.hashSync("qbjqoppz", Number.parseInt(authConfig.rounds)),"dni":"78117550A","nombre":"Personnalisée","apellidos":"Myrwyn Buscher","direccion":"C/ Gswzufrjnsj, número 72, 6ºV","ciudad":"Albacete","telefono":"+34-664081210","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"pbowhaye@about.me","clave":bcrypt.hashSync("ctngkdon", Number.parseInt(authConfig.rounds)),"dni":"93657010O","nombre":"Aí","apellidos":"Pen Bowhay","direccion":"C/ Joqptwfhitn, número 97, 4ºI","ciudad":"Albacete","telefono":"+34-615463179","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"ctunniclissef@google.nl","clave":bcrypt.hashSync("yyjueqap", Number.parseInt(authConfig.rounds)),"dni":"02814067W","nombre":"Méline","apellidos":"Celie Tunniclisse","direccion":"C/ Jnrbsssclqi, número 80, 0ºZ","ciudad":"Valencia","telefono":"+34-691954449","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"jgreenacreg@boston.com","clave":bcrypt.hashSync("rwhgkfxt", Number.parseInt(authConfig.rounds)),"dni":"67272336Q","nombre":"Léane","apellidos":"Jameson Greenacre","direccion":"C/ Kpxvmuueqyq, número 79, 6ºZ","ciudad":"Getafe","telefono":"+34-661300822","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"bnittoh@webeden.co.uk","clave":bcrypt.hashSync("rwizkxax", Number.parseInt(authConfig.rounds)),"dni":"35236502U","nombre":"Aí","apellidos":"Birch Nitto","direccion":"C/ Rszxjaqrmhc, número 62, 6ºU","ciudad":"Getafe","telefono":"+34-649942147","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"mgoodingei@msn.com","clave":bcrypt.hashSync("iaalrzjs", Number.parseInt(authConfig.rounds)),"dni":"08142235C","nombre":"Mélodie","apellidos":"Marlo Goodinge","direccion":"C/ Zpwdklrfmwo, número 20, 9ºD","ciudad":"Getafe","telefono":"+34-675551490","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"correo":"nulyetj@yelp.com","clave":bcrypt.hashSync("uahlzoak", Number.parseInt(authConfig.rounds)),"dni":"00256235X","nombre":"Maëly","apellidos":"Nobe Ulyet","direccion":"C/ Zpnwyrcjpda, número 02, 4ºQ","ciudad":"Albacete","telefono":"+34-695158773","rol":"usuario","createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
