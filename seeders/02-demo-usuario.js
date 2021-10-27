'use strict';

const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        "nombre": "Celinka Glandon",
        "correo": "cglandon0@behance.net",
        "clave": bcrypt.hashSync("wux0RbuX", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Federica Salt",
        "correo": "fsalt1@cyberchimps.com",
        "clave": bcrypt.hashSync("lRFsgGHs", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Sofia Vannoni",
        "correo": "svannoni2@ucoz.ru",
        "clave": bcrypt.hashSync("8I5qLSXf", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Holly-anne Wainer",
        "correo": "hwainer3@mysql.com",
        "clave": bcrypt.hashSync("oHsfhnc5", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Iona Klimkov",
        "correo": "iklimkov4@yellowpages.com",
        "clave": bcrypt.hashSync("5cAa9DCN", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Dick Heninghem",
        "correo": "dheninghem5@shareasale.com",
        "clave": bcrypt.hashSync("KYNNe7SX", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Jonell Fortman",
        "correo": "jfortman6@arizona.edu",
        "clave": bcrypt.hashSync("ev86BXpF", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Lee Welbelove",
        "correo": "lwelbelove7@walmart.com",
        "clave": bcrypt.hashSync("TZbBqcvy", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Aida Boulds",
        "correo": "aboulds8@gov.uk",
        "clave": bcrypt.hashSync("6w0crUoz", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Husein Kleinerman",
        "correo": "hkleinerman9@123-reg.co.uk",
        "clave": bcrypt.hashSync("rsWNmkX0", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Sherry Mc Menamin",
        "correo": "smca@yandex.ru",
        "clave": bcrypt.hashSync("3yM1IQdk", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Maure Marlow",
        "correo": "mmarlowb@ca.gov",
        "clave": bcrypt.hashSync("AaFm1vj8", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Hobey Proudman",
        "correo": "hproudmanc@nasa.gov",
        "clave": bcrypt.hashSync("BTY5sVAt", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Marlyn Dohr",
        "correo": "mdohrd@irs.gov",
        "clave": bcrypt.hashSync("Je3yeGqO", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Renell McRavey",
        "correo": "rmcraveye@upenn.edu",
        "clave": bcrypt.hashSync("OIx7wuyE", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Em Manwaring",
        "correo": "emanwaringf@comcast.net",
        "clave": bcrypt.hashSync("T2xaaRzD", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Kiri Gilkison",
        "correo": "kgilkisong@exblog.jp",
        "clave": bcrypt.hashSync("ScV93I17", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Benedikt McGeown",
        "correo": "bmcgeownh@instagram.com",
        "clave": bcrypt.hashSync("VJ9uNcn6", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Harmonia Leyband",
        "correo": "hleybandi@hugedomains.com",
        "clave": bcrypt.hashSync("7S31yYIc", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Merilee Seak",
        "correo": "mseakj@altervista.org",
        "clave": bcrypt.hashSync("3B4IHTZ3", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Georgeanne Leivers",
        "correo": "gleiversk@alexa.com",
        "clave": bcrypt.hashSync("lGfHhxwi", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Griselda Inkles",
        "correo": "ginklesl@icq.com",
        "clave": bcrypt.hashSync("7codsuOD", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Loralee Maling",
        "correo": "lmalingm@cbsnews.com",
        "clave": bcrypt.hashSync("88U6qV0P", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Karna Schout",
        "correo": "kschoutn@unesco.org",
        "clave": bcrypt.hashSync("TOC4vAAY", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Jereme Chasemore",
        "correo": "jchasemoreo@wikispaces.com",
        "clave": bcrypt.hashSync("EDAzaezL", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Freddi Manterfield",
        "correo": "fmanterfieldp@artisteer.com",
        "clave": bcrypt.hashSync("CQVPNahI", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Mariya Baunton",
        "correo": "mbauntonq@deviantart.com",
        "clave": bcrypt.hashSync("9T6cdO1F", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Charla McPhillimey",
        "correo": "cmcphillimeyr@desdev.cn",
        "clave": bcrypt.hashSync("fk8rc9gU", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Dylan Boam",
        "correo": "dboams@cdbaby.com",
        "clave": bcrypt.hashSync("Auo9nxm2", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Ellery Haulkham",
        "correo": "ehaulkhamt@blogs.com",
        "clave": bcrypt.hashSync("hZGjpdGV", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Garvey Maxsted",
        "correo": "gmaxstedu@cmu.edu",
        "clave": bcrypt.hashSync("7coX7vu8", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Maria McTurlough",
        "correo": "mmcturloughv@weebly.com",
        "clave": bcrypt.hashSync("ojxK3vgp", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Daffy Spurritt",
        "correo": "dspurrittw@hugedomains.com",
        "clave": bcrypt.hashSync("ge9a54JI", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Seamus Stower",
        "correo": "sstowerx@geocities.com",
        "clave": bcrypt.hashSync("SFypiHV4", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Selie Garrow",
        "correo": "sgarrowy@delicious.com",
        "clave": bcrypt.hashSync("KKrpEVLr", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Nahum Eveque",
        "correo": "nevequez@ucla.edu",
        "clave": bcrypt.hashSync("VQvVMDO7", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Royall Cullip",
        "correo": "rcullip10@cbslocal.com",
        "clave": bcrypt.hashSync("WoSNQxL5", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Jesselyn Vigurs",
        "correo": "jvigurs11@hubpages.com",
        "clave": bcrypt.hashSync("AvdDWuPK", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Anett Winslett",
        "correo": "awinslett12@washingtonpost.com",
        "clave": bcrypt.hashSync("V0Ss2QEU", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Othella Laux",
        "correo": "olaux13@aol.com",
        "clave": bcrypt.hashSync("NViMz4HV", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Carlye Christoffels",
        "correo": "cchristoffels14@1688.com",
        "clave": bcrypt.hashSync("bpiVURPJ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Betteanne Meace",
        "correo": "bmeace15@so-net.ne.jp",
        "clave": bcrypt.hashSync("tNWiUxNA", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Kari Glawsop",
        "correo": "kglawsop16@yahoo.co.jp",
        "clave": bcrypt.hashSync("36d5B7gr", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Millicent Chainey",
        "correo": "mchainey17@people.com.cn",
        "clave": bcrypt.hashSync("7ujUbaYJ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Terrye Thow",
        "correo": "tthow18@devhub.com",
        "clave": bcrypt.hashSync("VoWQZ6Zs", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Clive Meriel",
        "correo": "cmeriel19@nifty.com",
        "clave": bcrypt.hashSync("wuvdVjmw", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Kellsie Cranham",
        "correo": "kcranham1a@squidoo.com",
        "clave": bcrypt.hashSync("obFYO0Bs", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Baily Bortolozzi",
        "correo": "bbortolozzi1b@usgs.gov",
        "clave": bcrypt.hashSync("TL1zHunx", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Stanley MacArte",
        "correo": "smacarte1c@google.ru",
        "clave": bcrypt.hashSync("zRs19Zty", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Scotti Michal",
        "correo": "smichal1d@unesco.org",
        "clave": bcrypt.hashSync("sTvRXjok", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Dolli Caswill",
        "correo": "dcaswill1e@vinaora.com",
        "clave": bcrypt.hashSync("rHHqj5Cv", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Cathe Pfeuffer",
        "correo": "cpfeuffer1f@flavors.me",
        "clave": bcrypt.hashSync("CFMMu4GF", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Randi Fetters",
        "correo": "rfetters1g@weibo.com",
        "clave": bcrypt.hashSync("pOzjYwx1", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Jilly Hudspith",
        "correo": "jhudspith1h@hhs.gov",
        "clave": bcrypt.hashSync("yebzLBQf", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Cam Chew",
        "correo": "cchew1i@theatlantic.com",
        "clave": bcrypt.hashSync("A5Mv9RDq", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Cairistiona Restieaux",
        "correo": "crestieaux1j@about.me",
        "clave": bcrypt.hashSync("p6MjDcWC", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Berna Giddens",
        "correo": "bgiddens1k@rambler.ru",
        "clave": bcrypt.hashSync("N4rSq4NH", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Bel Custy",
        "correo": "bcusty1l@unblog.fr",
        "clave": bcrypt.hashSync("XsCHumSu", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Gaultiero Sloam",
        "correo": "gsloam1m@dailymail.co.uk",
        "clave": bcrypt.hashSync("h6weqSwJ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Clevie Gallier",
        "correo": "cgallier1n@miibeian.gov.cn",
        "clave": bcrypt.hashSync("1iPRey0d", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Berny Kordovani",
        "correo": "bkordovani1o@bbb.org",
        "clave": bcrypt.hashSync("LTE78h94", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Loralyn Heyns",
        "correo": "lheyns1p@opera.com",
        "clave": bcrypt.hashSync("gFocYPL7", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Rahal Venny",
        "correo": "rvenny1q@squarespace.com",
        "clave": bcrypt.hashSync("B9MfrwTQ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Beilul Pauler",
        "correo": "bpauler1r@hao123.com",
        "clave": bcrypt.hashSync("O3R7t7xx", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Madlen Claeskens",
        "correo": "mclaeskens1s@dropbox.com",
        "clave": bcrypt.hashSync("quVuOMx3", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Port Naris",
        "correo": "pnaris1t@ustream.tv",
        "clave": bcrypt.hashSync("NTLVnwOP", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Maible Meeus",
        "correo": "mmeeus1u@comsenz.com",
        "clave": bcrypt.hashSync("F6xISI0Q", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Cyril Avis",
        "correo": "cavis1v@addtoany.com",
        "clave": bcrypt.hashSync("3WOwRj1q", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Anthony Whines",
        "correo": "awhines1w@exblog.jp",
        "clave": bcrypt.hashSync("YO6OnqEl", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Bernadene Morales",
        "correo": "bmorales1x@imageshack.us",
        "clave": bcrypt.hashSync("nNEP4ltN", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Roger Iddy",
        "correo": "riddy1y@infoseek.co.jp",
        "clave": bcrypt.hashSync("WsCkZHwi", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Doe Harm",
        "correo": "dharm1z@economist.com",
        "clave": bcrypt.hashSync("NLVdzRuL", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Viviyan Errichelli",
        "correo": "verrichelli20@deliciousdays.com",
        "clave": bcrypt.hashSync("3nmDZ7Tt", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Ulrike Lambersen",
        "correo": "ulambersen21@sourceforge.net",
        "clave": bcrypt.hashSync("9JpCKfii", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Ferris Gunderson",
        "correo": "fgunderson22@telegraph.co.uk",
        "clave": bcrypt.hashSync("HwJ2rGj1", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Upton Deguara",
        "correo": "udeguara23@w3.org",
        "clave": bcrypt.hashSync("lajfuyNL", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Sybyl Radke",
        "correo": "sradke24@de.vu",
        "clave": bcrypt.hashSync("VE6SvFtM", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Emmett Adicot",
        "correo": "eadicot25@timesonline.co.uk",
        "clave": bcrypt.hashSync("KqsILWvA", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Robinetta Trowle",
        "correo": "rtrowle26@booking.com",
        "clave": bcrypt.hashSync("IAQ1K0s1", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Danni Klassmann",
        "correo": "dklassmann27@mtv.com",
        "clave": bcrypt.hashSync("CtXmhqLS", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Stanislaus March",
        "correo": "smarch28@simplemachines.org",
        "clave": bcrypt.hashSync("N3Zy2B0H", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Darlleen Gwatkins",
        "correo": "dgwatkins29@yolasite.com",
        "clave": bcrypt.hashSync("8Nk8GkLR", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Hoebart Fortnam",
        "correo": "hfortnam2a@businesswire.com",
        "clave": bcrypt.hashSync("ylUqopwR", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Emanuel O'Cleary",
        "correo": "eocleary2b@github.io",
        "clave": bcrypt.hashSync("Yd0Lmcdy", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Carmella Akaster",
        "correo": "cakaster2c@bloglines.com",
        "clave": bcrypt.hashSync("Ewz7YbC6", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Constantine Burtenshaw",
        "correo": "cburtenshaw2d@phpbb.com",
        "clave": bcrypt.hashSync("IvKWFks2", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Aharon McEttigen",
        "correo": "amcettigen2e@bandcamp.com",
        "clave": bcrypt.hashSync("JO1Vxhsq", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Gene Antyukhin",
        "correo": "gantyukhin2f@ucoz.com",
        "clave": bcrypt.hashSync("E3jMusw9", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Tye Robiot",
        "correo": "trobiot2g@ovh.net",
        "clave": bcrypt.hashSync("a1uetcit", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Obed Shreeves",
        "correo": "oshreeves2h@columbia.edu",
        "clave": bcrypt.hashSync("V2hcJTVH", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Burgess Tissiman",
        "correo": "btissiman2i@noaa.gov",
        "clave": bcrypt.hashSync("yVF4h047", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Annie Melarkey",
        "correo": "amelarkey2j@businesswire.com",
        "clave": bcrypt.hashSync("JOQvxsUQ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Weston Bessent",
        "correo": "wbessent2k@google.co.jp",
        "clave": bcrypt.hashSync("Czo67nKT", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Justinn Blight",
        "correo": "jblight2l@w3.org",
        "clave": bcrypt.hashSync("ObW9zooe", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Jethro Matysiak",
        "correo": "jmatysiak2m@dyndns.org",
        "clave": bcrypt.hashSync("PFCz3DhQ", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Bryant Casero",
        "correo": "bcasero2n@netvibes.com",
        "clave": bcrypt.hashSync("7pgLSLsq", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Shalom Grime",
        "correo": "sgrime2o@blogs.com",
        "clave": bcrypt.hashSync("VcsINRLN", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Rachel Laidlow",
        "correo": "rlaidlow2p@bravesites.com",
        "clave": bcrypt.hashSync("QkvNVmIf", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Bat Baugham",
        "correo": "bbaugham2q@walmart.com",
        "clave": bcrypt.hashSync("IPmuiW1y", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }, {
        "nombre": "Tybi Salzberger",
        "correo": "tsalzberger2r@cbsnews.com",
        "clave": bcrypt.hashSync("IidO9Tjj", Number.parseInt(authConfig.rounds)),
        "createdAt": "2021/10/27",
        "updatedAt": "2021/10/27"
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
