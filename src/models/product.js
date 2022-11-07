const products = [
    {
        id:1,
        name:'Need for speed heat',
        value:9.99,
        consoleType:'PS4',
        discount:25,
        imageUri:'/images/games/need_for_speed_heat.jpg',
        section: 'none',
        tag: '/product/'
    },
    {
        id:2,
        name:'Dota 2',
        value:2.99,
        consoleType:'PS5',
        discount:20,
        imageUri:'/images/games/dota-2.jpg',
        section: 'none',
        tag: '/product/'
    },
    {
        id:3,
        name:'Forza horizon 5',
        value:4567,
        consoleType:'XBOX ONE',
        discount:15,
        imageUri:'/images/games/forza-horizon-5.jpg',
        section: 'none',
        tag: '/product/'
    },
    {
        id:4,
        name:'Terraria',
        value:11.98,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/terraria.jpg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:5,
        name:'Cyberpunk 2077',
        value:9.99,
        consoleType:'XBOX',
        discount:15,
        imageUri:'/images/main-cards/cyberpunk.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:6,
        name:'Fortnite - Season 4',
        value:3.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/fortnite.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:7,
        name:'PlayStation Card',
        value:9.99,
        consoleType:'PS5',
        discount:15,
        imageUri:'/images/main-cards/playstation-store.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:8,
        name:'ARK Survival Evolved',
        value:7.49,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/ark-survival.jpeg',
        section: 'recommended',
        tag: '/product/'
    },
    {
        id:9,
        name:'Counter Strike',
        value:3.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/cs-anthology.jpg',
        section: 'recommended',
        tag: '/product/'
    },
    {
        id:10,
        name:'Doom Eternal - Deluxe',
        value:3.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/doom-eternal.jpeg',
        section: 'recommended',
        tag: '/product/'
    },
    {
        id:11,
        name:'COD - Infinite Warfare',
        value:3.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/cod-infinite.jpg',
        section: 'recommended',
        tag: '/product/'
    },
    {
        id:12,
        name:'Captain Tsubasa',
        value:5.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/captain-tsubasa.jpeg',
        section: 'offer',
        tag: '/product/'
    },
    {
        id:13,
        name:'Dragon Ball Z Kakarot',
        value:3.99,
        consoleType:'XBOX',
        discount:15,
        imageUri:'/images/main-cards/dbz-kakarot.jpeg',
        section: 'offer',
        tag: '/product/'
    },
    {
        id:14,
        name:'FIFA 23',
        value:19.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/fifa23.jpg',
        section: 'offer',
        tag: '/product/'
    },
    {
        id:15,
        name:'Monster Hunter World',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/mhw.jpeg',
        section: 'offer',
        tag: '/product/'
    },
    {
        id:16,
        name:'Crash Bandicoot Trilogy',
        value:6.99,
        consoleType:'XBOX',
        discount:15,
        imageUri:'/images/main-cards/crashbandicoot.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:17,
        name:'Days Gone',
        value:6.99,
        consoleType:'PS5',
        discount:15,
        imageUri:'/images/main-cards/daysgone.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:18,
        name:'Devil May Cry 5',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/devilmaycry5.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:19,
        name:'Devil May Cry HD Collection',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/devilmaycryHD.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:20,
        name:'Duke Nukem Forever',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/mhw.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:21,
        name:'God of War',
        value:6.99,
        consoleType:'PS5',
        discount:15,
        imageUri:'/images/main-cards/godofwar.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:22,
        name:'Monster Hunter World',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/mhw.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:23,
        name:'GTA V',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/gtaV.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:24,
        name:'Hollow Knight',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/hollowknight.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:25,
        name:'Visage',
        value:6.99,
        consoleType:'PC',
        discount:15,
        imageUri:'/images/main-cards/visage.jpeg',
        section: 'sellers',
        tag: '/product/'
    },
    {
        id:26,
        name:'Sonic Frontiers',
        value:6.99,
        consoleType:'XBOX',
        discount:15,
        imageUri:'/images/main-cards/sonic.jpeg',
        section: 'recommended',
        tag: '/product/'
    }
 
]
  
  module.exports = products;