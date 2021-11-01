'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
    {"nombre":"Frannie Milvarnie","correo":"fmilvarnie0@trellian.com","clave":bcrypt.hashSync("medlclmc", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "administrador", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Nowell Davidofski","correo":"ndavidofski1@aol.com","clave":bcrypt.hashSync("kyddcxwd", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Bearnard Niess","correo":"bniess2@twitter.com","clave":bcrypt.hashSync("otqmtxfc", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Frannie Ishaki","correo":"fishaki3@mapquest.com","clave":bcrypt.hashSync("wrmaotuq", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Goldina Peaple","correo":"gpeaple4@nsw.gov.au","clave":bcrypt.hashSync("ybtuzxsh", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Cassey Le Frank","correo":"cle5@icq.com","clave":bcrypt.hashSync("qmzpgikl", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Cristobal McKinstry","correo":"cmckinstry6@goodreads.com","clave":bcrypt.hashSync("remjhrpn", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Laural Remmers","correo":"lremmers7@unblog.fr","clave":bcrypt.hashSync("zajwsukz", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Riobard Cape","correo":"rcape8@oracle.com","clave":bcrypt.hashSync("ebstvjru", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Abelard Simonutti","correo":"asimonutti9@mlb.com","clave":bcrypt.hashSync("oeyglqbw", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Janice Wile","correo":"jwilea@geocities.jp","clave":bcrypt.hashSync("iyiabfsr", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Costa Kelston","correo":"ckelstonb@nature.com","clave":bcrypt.hashSync("hwpvxnks", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Poul Lautie","correo":"plautiec@ucoz.com","clave":bcrypt.hashSync("xpfehreb", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Bevin Spedding","correo":"bspeddingd@europa.eu","clave":bcrypt.hashSync("zwxpvbbu", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Mireielle Perfitt","correo":"mperfitte@bizjournals.com","clave":bcrypt.hashSync("vyergxdg", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Raina Bontine","correo":"rbontinef@census.gov","clave":bcrypt.hashSync("heaxwvqx", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Benedetta Rickarsey","correo":"brickarseyg@youku.com","clave":bcrypt.hashSync("umumhbgt", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Albie Ygou","correo":"aygouh@aol.com","clave":bcrypt.hashSync("gfoomzkt", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Allegra Riedel","correo":"ariedeli@pen.io","clave":bcrypt.hashSync("zsoxgner", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Karolina Kerrod","correo":"kkerrodj@issuu.com","clave":bcrypt.hashSync("aphxtgiz", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Ramon Lewtey","correo":"rlewteyk@paginegialle.it","clave":bcrypt.hashSync("vzkungmn", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Issiah Weatherhead","correo":"iweatherheadl@time.com","clave":bcrypt.hashSync("erlggonq", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Ira Kybird","correo":"ikybirdm@privacy.gov.au","clave":bcrypt.hashSync("pcjxegny", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Barrett Moors","correo":"bmoorsn@pcworld.com","clave":bcrypt.hashSync("ckstjaoh", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Broderick Kenion","correo":"bkeniono@newsvine.com","clave":bcrypt.hashSync("egvwxaem", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Uriel Meconi","correo":"umeconip@wufoo.com","clave":bcrypt.hashSync("vzaoydwx", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Evangelia Tavner","correo":"etavnerq@addthis.com","clave":bcrypt.hashSync("wdqoztet", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Celie Tunnah","correo":"ctunnahr@usatoday.com","clave":bcrypt.hashSync("mpbmhgyr", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Allin Massard","correo":"amassards@vistaprint.com","clave":bcrypt.hashSync("upkugpiz", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Conney Donovin","correo":"cdonovint@indiatimes.com","clave":bcrypt.hashSync("wjuyxxxs", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Jsandye Dingsdale","correo":"jdingsdaleu@canalblog.com","clave":bcrypt.hashSync("tyrdvcph", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Koenraad Eccott","correo":"keccottv@gravatar.com","clave":bcrypt.hashSync("ilmmbrfe", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Yettie Valentine","correo":"yvalentinew@github.com","clave":bcrypt.hashSync("fezfajzj", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Evaleen Faircloth","correo":"efairclothx@irs.gov","clave":bcrypt.hashSync("rosgsqai", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Kellen Woolens","correo":"kwoolensy@tinyurl.com","clave":bcrypt.hashSync("cmtivyxu", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Silvester Kenneway","correo":"skennewayz@newsvine.com","clave":bcrypt.hashSync("qportswh", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Boris Marciskewski","correo":"bmarciskewski10@lulu.com","clave":bcrypt.hashSync("hnrjvvdk", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Mohandas Rainy","correo":"mrainy11@yelp.com","clave":bcrypt.hashSync("iwzcvsty", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Oliy McGuirk","correo":"omcguirk12@prlog.org","clave":bcrypt.hashSync("umxcmxrr", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Kanya Kinneir","correo":"kkinneir13@dailymotion.com","clave":bcrypt.hashSync("smmztcbi", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Bone Bake","correo":"bbake14@census.gov","clave":bcrypt.hashSync("cwoxsprq", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Ezra Towse","correo":"etowse15@blogspot.com","clave":bcrypt.hashSync("fkpgkyxs", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Hill Sleaford","correo":"hsleaford16@zimbio.com","clave":bcrypt.hashSync("fsvnxmxk", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Randee Rentcome","correo":"rrentcome17@yahoo.co.jp","clave":bcrypt.hashSync("nxhuwppt", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Margette Gapper","correo":"mgapper18@dropbox.com","clave":bcrypt.hashSync("jemayneu", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Tawnya Grzegorzewski","correo":"tgrzegorzewski19@hud.gov","clave":bcrypt.hashSync("tgizxoaw", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Shirley Maidlow","correo":"smaidlow1a@flickr.com","clave":bcrypt.hashSync("gdhfpupr", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Xenia Figures","correo":"xfigures1b@icq.com","clave":bcrypt.hashSync("liipdrku", Number.parseInt(authConfig.rounds)),"ciudad":"Valencia", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Ferdy Domoney","correo":"fdomoney1c@joomla.org","clave":bcrypt.hashSync("wyhwuwnp", Number.parseInt(authConfig.rounds)),"ciudad":"Getafe", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"},
    {"nombre":"Talia Yarnall","correo":"tyarnall1d@icio.us","clave":bcrypt.hashSync("edjxoeak", Number.parseInt(authConfig.rounds)),"ciudad":"Albacete", "rol": "usuario", "createdAt":"2021-10-27","updatedAt":"2021-10-27"}
  ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
