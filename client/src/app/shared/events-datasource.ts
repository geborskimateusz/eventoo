import { EventModel } from './event.model';
import { MusicGenres } from './music-genres.model';

export const EVENTS_DATASOURCE: EventModel[] = [

    //DANCE, 5 EVENS
    {
        id: '1',
        title: 'Little Big',
        description: 'Little Big is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/87b/9a9f97e2-9ddd-4bfd-a60c-41b57378a87b_907141_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '2',
        title: 'Hooverphonic',
        description: 'Hooverphonic is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/5f3/8b5b2a73-02bb-4fbd-8803-60b6edf145f3_999431_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '3',
        title: 'The Amazons ',
        description: 'The Amazons is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/48c/48e09fdd-2262-4676-a325-69ef720f848c_1042031_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '4',
        title: 'When Saints Go Machine',
        description: 'When Saints Go Machine is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/52e/9140f4ce-0050-4a28-bfdc-bada7d31052e_1035331_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '5',
        title: 'Mayday',
        description: 'Mayday is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/abf/b12d555a-b2d5-47c5-8f38-e343c8a5cabf_1064581_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },


    //POP, 7 events

    {
        id: '6',
        title: 'Combichrist',
        description: 'Combichrist is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/3b2/ed999a0b-3e0c-4d46-8f3f-1b5a4a28d3b2_981701_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '7',
        title: 'Thirty Seconds To Mars',
        description: 'Thirty Seconds To Mars is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/409/a9f801d4-a416-4f48-9d21-9447754af409_901911_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '8',
        title: 'Kortez',
        description: 'Kortez is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f86/7da0dc19-e6f2-458b-8657-1e8bdbe3df86_1032611_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Main Pump House',
            address: 'aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój',
            lat: '49.416929',
            lon: '20.957205'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '9',
        title: 'The Australian Pink Floyd Show',
        description: 'The Australian Pink Floyd Show is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/4c7/91da3f65-2957-4e43-8015-a81656f044c7_569321_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '10',
        title: 'Bullet for My Valentine',
        description: 'Bullet for My Valentine is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/12e/aadd82f7-7967-4647-bcd4-6b03ed2c512e_1026881_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Square. Students club',
            address: 'Stanisława Skarżyńskiego 1, 31-866 Kraków',
            lat: '50.083866',
            lon: '19.996131'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '11',
        title: 'Little Steven & the Disciples of Soul',
        description: 'Little Steven & the Disciples of Soul is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f09/f9665de7-5a87-418a-a959-30ee4e64cf09_1027341_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '12',
        title: 'Yeasayer',
        description: 'Yeasayer is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/294/596b5922-817d-4f1e-b352-cd3562846294_1035521_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '13',
        title: 'Caspian ',
        description: 'Caspian is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/0f6/e9dd2953-3585-4bdc-827e-f166b08f50f6_1047081_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '14',
        title: 'Cavetown',
        description: 'Cavetown is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/3da/26055e39-8d5b-464f-a06c-7d2f73a8b3da_981971_CUSTOM.jpg',
        genre: MusicGenres.DANCE,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '15',
        title: 'Hozier',
        description: 'Hozier is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/29d/ad4a9706-10b6-425a-ad6a-60053a24929d_1065781_CUSTOM.jpg',
        genre: MusicGenres.POP,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },


    //JAZZ 12 Events

    {
        id: '16',
        title: 'JBBO + Stanley Breckenridge (USA)',
        description: 'JBBO + Stanley Breckenridge (USA) is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '17',
        title: 'Joachim Mencel Artisena',
        description: 'Joachim Mencel Artisena is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '18',
        title: ' Boba Jazz Band',
        description: 'Boba Jazz Band is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '19',
        title: 'Beth Hart',
        description: 'Beth Hart is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/7ab/415e3b83-9d9c-4048-8c61-d43cfafe87ab_984601_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '20',
        title: 'KOMEDA AHEAD - Oleś Brothers & Christopher Dell',
        description: 'KOMEDA AHEAD - Oleś Brothers & Christopher Dell is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '21',
        title: 'Krzysztof Ścierański Solo',
        description: 'Krzysztof Ścierański Solo is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '22',
        title: 'Kajetan Galas & Małgorzata Zuber Quartet',
        description: 'Kajetan Galas & Małgorzata Zuber Quartet is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/89c/e0274625-c434-4f97-9d09-e8c8f593289c_1009351_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '23',
        title: 'Finał INTL Jazz Platform / P.Damasiewicz Power of the Horns',
        description: 'Finał INTL Jazz Platform / P.Damasiewicz Power of the Horns is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f28/639cbfd0-7aed-45ac-9046-20386b652f28_719501_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Main Pump House',
            address: 'aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój',
            lat: '49.416929',
            lon: '20.957205'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '24',
        title: 'Grażyna Auguścik & Paulinho Garcia (Brazylia)',
        description: 'Grażyna Auguścik & Paulinho Garcia (Brazylia) is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f28/639cbfd0-7aed-45ac-9046-20386b652f28_719501_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '25',
        title: 'Madeleine Peyroux',
        description: 'Madeleine Peyroux is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/d7b/2dc3fcc8-d77f-46fe-b355-6bc26473bd7b_907661_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Square. Students club',
            address: 'Stanisława Skarżyńskiego 1, 31-866 Kraków',
            lat: '50.083866',
            lon: '19.996131'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '26',
        title: 'Ladies Jazz Festival: Angelique Kidjo',
        description: 'Ladies Jazz Festival: Angelique Kidjo is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/565/10be9548-0758-4705-b311-376c22cb9565_1031211_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '27',
        title: 'Ladies Jazz Festival: Nouvelle Vague',
        description: 'Ladies Jazz Festival: Nouvelle Vague is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f28/639cbfd0-7aed-45ac-9046-20386b652f28_719501_CUSTOM.jpg',
        genre: MusicGenres.JAZZ,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    //HIP HOP
    {
        id: '28',
        title: 'Kali',
        description: 'Kali is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/d8c/d1e1685d-87ba-40ce-9893-d17fe5d20d8c_1086751_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '29',
        title: 'Oleszyce Rap Festiwal',
        description: 'Oleszyce Rap Festiwal is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/724/1344d317-46ec-4c82-905a-a7c8256f3724_1098011_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '30',
        title: 'Blackbear',
        description: 'Blackbear is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/209/751fcab1-3f78-4ca2-b7c9-b4554d84a209_1031321_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '31',
        title: 'Little Simz',
        description: 'Little Simz is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/7e6/25828e14-a989-4282-946c-8a460df2e7e6_1026461_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '32',
        title: 'Hilltop Hoods',
        description: 'Hilltop Hoods is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/1b6/637d0cfd-f399-41be-8767-a0ab065a81b6_767811_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '33',
        title: 'SCARLXRD',
        description: 'SCARLXRD is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/190/da90ed68-1aa6-4dfa-80bc-efee2373f190_1081041_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '34',
        title: 'Injury Reserve',
        description: 'Injury Reserve is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/bbf/72e61ea0-3412-4c43-a589-643b63137bbf_1075971_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '35',
        title: 'Paris',
        description: 'Paris is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/e30/23eec530-731e-4657-9ab4-71b8cb5b4e30_917581_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '36',
        title: '102 BOYZ',
        description: '102 BOYZ is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/71c/ca3a2ef2-ab3e-4924-a3ee-a7d30bab171c_1012261_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Main Pump House',
            address: 'aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój',
            lat: '49.416929',
            lon: '20.957205'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '37',
        title: 'An Orchestral Rendition of Dr. Dre: 2001',
        description: 'An Orchestral Rendition of Dr. Dre: 2001 is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/b4f/d62e36b3-1b64-4c9a-91d1-262485b4ab4f_1050921_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '38',
        title: 'Crazy Town',
        description: 'Crazy Town is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/17a/3be17b2f-6e3c-4738-887e-3a02acabf17a_1034191_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Square. Students club',
            address: 'Stanisława Skarżyńskiego 1, 31-866 Kraków',
            lat: '50.083866',
            lon: '19.996131'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '39',
        title: 'Encore',
        description: 'Encore is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/cft1/201306/25/260170.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '40',
        title: 'Das Efx',
        description: 'Das Efx is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/055/7d3bc2c8-fbd1-4963-8888-4636a01b0055_1079271_CUSTOM.jpg',
        genre: MusicGenres.HIP_HOP,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },


    //ROCK
    {
        id: '41',
        title: 'Duff McKagan',
        description: 'Duff McKagan is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/9c2/7e1184b5-bdaf-45d7-b567-c48d93dfe9c2_1031311_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '42',
        title: 'The Faim',
        description: 'The Faim is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/a8d/6e6a6e56-79c1-420b-9868-b26747af1a8d_1051891_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '43',
        title: 'We Were Promised Jetpacks',
        description: 'We Were Promised Jetpacks is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/82e/34c50893-4ae5-4802-a543-d7760901b82e_1068891_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '44',
        title: 'Pile',
        description: 'Pile is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/94d/01cfadbd-e989-4c4c-a5e1-c8a011c6b94d_1062361_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '45',
        title: 'Chromatics',
        description: 'Chromatics is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/736/04d5dc3e-175e-4c48-adfc-9926b874f736_1046641_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '46',
        title: 'New Model Army',
        description: 'New Model Army is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/25e/a1396e5a-d5d3-4d84-9717-390ba97b825e_1053161_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '47',
        title: 'Nick Murphy',
        description: 'Nick Murphy is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/3dc/1c5d6e30-ddc3-4b0e-bb27-46a38d7b63dc_995001_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Main Pump House',
            address: 'aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój',
            lat: '49.416929',
            lon: '20.957205'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '48',
        title: 'The Rasmus',
        description: 'The Rasmus is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/0b7/0fd4f6ef-28df-4c57-a927-1eaae479b0b7_956041_CUSTOM.jpg',
        genre: MusicGenres.ROCK,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    


    //METAL
    {
        id: '49',
        title: 'Soulfly',
        description: 'Soulfly is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/fa2/7e15f481-344e-43aa-8c0c-e2b27a1dafa2_1105051_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '50',
        title: 'Windhand',
        description: 'Windhand is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/ec7/c72060e2-5e94-4587-b37d-130ef05c9ec7_1014401_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '51',
        title: 'Of Mice & Men',
        description: 'Of Mice & Men is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/232/3b5a2e0d-a41c-4731-a324-5fb6399cd232_993811_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '52',
        title: 'Decapitated',
        description: 'Decapitated is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/454/007f0e25-819d-4546-89ad-deb81f618454_932071_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '53',
        title: 'Metallica',
        description: 'Metallica is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/21f/5ea9a6d7-cf3b-4e49-85a7-4a05f4f1121f_847541_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '54',
        title: 'Bury Tomorrow',
        description: 'Bury Tomorrow is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/030/8619c0f1-5038-4f08-9bb9-77b8597bb030_659561_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '55',
        title: 'The Gathering',
        description: 'The Gathering is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/565/1d04a996-c038-497c-8da2-a05e32027565_1055311_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '56',
        title: 'Airbourne',
        description: 'Airbourne is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/33d/cc4311a7-f3bb-40d0-b72c-313b6ae2a33d_982091_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Main Pump House',
            address: 'aleja Nowotarskiego 9/4, 33-380 Krynica-Zdrój',
            lat: '49.416929',
            lon: '20.957205'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '57',
        title: 'Behemoth',
        description: 'Behemoth is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/147/a43868a2-9b33-4407-a0a6-38dec9584147_1084351_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '58',
        title: 'Nile',
        description: 'Nile is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/c30/b48aedc4-0f9f-4eb6-9468-897b426f8c30_1097931_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Square. Students club',
            address: 'Stanisława Skarżyńskiego 1, 31-866 Kraków',
            lat: '50.083866',
            lon: '19.996131'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '59',
        title: 'Machine Head',
        description: 'Machine Head is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/e3f/2f845bb1-fcb0-4bef-ab56-2640b3768e3f_1009231_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '60',
        title: 'Aborted',
        description: 'Aborted is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/b70/2c3c84da-7f7a-459d-82b9-4a1c8143eb70_1058721_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '61',
        title: 'Percival ',
        description: 'Percival is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/fd3/52c97783-22a1-4f68-a64b-b2f52f27dfd3_1074981_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '62',
        title: 'The Exploited',
        description: 'The Exploited is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/360/af96577a-edbf-475f-88a1-34b163bab360_618511_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '63',
        title: 'Volbeat',
        description: 'Volbeat is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/651/80f31203-b932-4563-acf5-a246623c5651_1054901_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '64',
        title: 'Skillet',
        description: 'Skillet is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/bb5/50e7a0c1-07cc-4649-81b3-8b865899dbb5_1052241_CUSTOM.jpg',
        genre: MusicGenres.METAL,
        location: {
            name: 'B17 Club',
            address: 'Poznań - 5.10, Klub B17',
            lat: '52.397406',
            lon: '16.859026'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    //FOLK

    {
        id: '65',
        title: 'Goran Bregovic',
        description: 'Goran Bregovic is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/b5e/58b10861-cac1-48a8-8dfc-1cf72cdffb5e_1056321_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'Concert Center A2',
            address: 'Góralska 5, 53-610 Wrocław',
            lat: '51.108696',
            lon: '17.001780'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '66',
        title: 'Festiwal Pannonica',
        description: 'Festiwal Pannonica is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/4e0/b6d90142-57d6-4a4c-a36d-11d9e6f8e4e0_1056341_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'Praga Centrum',
            address: 'Szwedzka 2/4, 05-077 Warszawa',
            lat: '52.261763',
            lon: '21.049344'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '67',
        title: 'Brit Floyd',
        description: 'Brit Floyd is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/1d7/c4b008e9-c77b-4f2d-803f-56c6358bc1d7_1079981_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'LAB Night CLub',
            address: 'Grochowe Łąki 5, 61-752 Poznań',
            lat: '52.412699',
            lon: '16.937017'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '68',
        title: 'Roo Panes',
        description: 'Roo Panes is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/8a3/7963fd85-628f-4d8c-b17f-50229a4d18a3_995151_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'Spodek',
            address: 'al. Korfantego 35, 40-005 Katowice',
            lat: '50.266113',
            lon: '19.025303'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '69',
        title: 'Jade Bird',
        description: 'Jade Bird is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/f87/995cc760-6cb8-4336-b480-36d74fc23f87_1045531_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'Proxima',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '52.212646',
            lon: '20.987218'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

    {
        id: '70',
        title: 'Home Free',
        description: 'Home Free is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
        date: new Date(),
        img: 'https://s1.ticketm.net/img/tat/dam/a/667/86176b14-67dd-4e29-8664-ac05bfd09667_1050911_CUSTOM.jpg',
        genre: MusicGenres.FOLK,
        location: {
            name: 'Dolina Charlotty',
            address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
            lat: '54.524616',
            lon: '16.952392'
        },
        tickets: {
            VIP: {
                price: 450,
                total: 20,
                inStock: 15
            },
            goldenCircleEarlyEntrance: {
                price: 250,
                total: 20,
                inStock: 15
            },
            goldenCircleRegular: {
                price: 270,
                total: 20,
                inStock: 15
            },
            generalAdmission: {
                price: 130,
                total: 20,
                inStock: 15
            },
            stands: {
                price: 50,
                total: 20,
                inStock: 15
            }
        }
    },

   //REGGAE

   {
    id: '71',
    title: 'Indios Bravos',
    description: 'Indios Bravos is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    date: new Date(),
    img: 'https://s1.ticketm.net/img/tat/dam/a/b4f/42e35e96-24f7-404a-9003-ce1ff60f7b4f_1025061_CUSTOM.jpg',
    genre: MusicGenres.REGGAE,
    location: {
        name: 'Concert Center A2',
        address: 'Góralska 5, 53-610 Wrocław',
        lat: '51.108696',
        lon: '17.001780'
    },
    tickets: {
        VIP: {
            price: 450,
            total: 20,
            inStock: 15
        },
        goldenCircleEarlyEntrance: {
            price: 250,
            total: 20,
            inStock: 15
        },
        goldenCircleRegular: {
            price: 270,
            total: 20,
            inStock: 15
        },
        generalAdmission: {
            price: 130,
            total: 20,
            inStock: 15
        },
        stands: {
            price: 50,
            total: 20,
            inStock: 15
        }
    }
},

{
    id: '72',
    title: 'Bednarek',
    description: 'Bednarek is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    date: new Date(),
    img: 'https://s1.ticketm.net/img/tat/dam/a/ca1/3c58cd85-4e50-4c0b-8619-8e513521fca1_959181_CUSTOM.jpg',
    genre: MusicGenres.REGGAE,
    location: {
        name: 'Praga Centrum',
        address: 'Szwedzka 2/4, 05-077 Warszawa',
        lat: '52.261763',
        lon: '21.049344'
    },
    tickets: {
        VIP: {
            price: 450,
            total: 20,
            inStock: 15
        },
        goldenCircleEarlyEntrance: {
            price: 250,
            total: 20,
            inStock: 15
        },
        goldenCircleRegular: {
            price: 270,
            total: 20,
            inStock: 15
        },
        generalAdmission: {
            price: 130,
            total: 20,
            inStock: 15
        },
        stands: {
            price: 50,
            total: 20,
            inStock: 15
        }
    }
},


{
    id: '73',
    title: 'Xavier Rudd',
    description: 'Xavier Rudd is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    date: new Date(),
    img: 'https://s1.ticketm.net/img/tat/dam/a/221/ffeaf3a5-ca62-4fe0-8d59-dca954350221_955651_CUSTOM.jpg',
    genre: MusicGenres.REGGAE,
    location: {
        name: 'Spodek',
        address: 'al. Korfantego 35, 40-005 Katowice',
        lat: '50.266113',
        lon: '19.025303'
    },
    tickets: {
        VIP: {
            price: 450,
            total: 20,
            inStock: 15
        },
        goldenCircleEarlyEntrance: {
            price: 250,
            total: 20,
            inStock: 15
        },
        goldenCircleRegular: {
            price: 270,
            total: 20,
            inStock: 15
        },
        generalAdmission: {
            price: 130,
            total: 20,
            inStock: 15
        },
        stands: {
            price: 50,
            total: 20,
            inStock: 15
        }
    }
},

// SOUL
{
    id: '74',
    title: 'Jade Bird',
    description: 'Jade Bird is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    date: new Date(),
    img: 'https://s1.ticketm.net/img/tat/dam/a/f87/995cc760-6cb8-4336-b480-36d74fc23f87_1045531_CUSTOM.jpg',
    genre: MusicGenres.SOUL,
    location: {
        name: 'Proxima',
        address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
        lat: '52.212646',
        lon: '20.987218'
    },
    tickets: {
        VIP: {
            price: 450,
            total: 20,
            inStock: 15
        },
        goldenCircleEarlyEntrance: {
            price: 250,
            total: 20,
            inStock: 15
        },
        goldenCircleRegular: {
            price: 270,
            total: 20,
            inStock: 15
        },
        generalAdmission: {
            price: 130,
            total: 20,
            inStock: 15
        },
        stands: {
            price: 50,
            total: 20,
            inStock: 15
        }
    }
},

{
    id: '70',
    title: 'Home Free',
    description: 'Home Free is lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
    date: new Date(),
    img: 'https://s1.ticketm.net/img/tat/dam/a/667/86176b14-67dd-4e29-8664-ac05bfd09667_1050911_CUSTOM.jpg',
    genre: MusicGenres.FOLK,
    location: {
        name: 'Dolina Charlotty',
        address: 'Żwirki i Wigury 99A, 02-089 Warszawa',
        lat: '54.524616',
        lon: '16.952392'
    },
    tickets: {
        VIP: {
            price: 450,
            total: 20,
            inStock: 15
        },
        goldenCircleEarlyEntrance: {
            price: 250,
            total: 20,
            inStock: 15
        },
        goldenCircleRegular: {
            price: 270,
            total: 20,
            inStock: 15
        },
        generalAdmission: {
            price: 130,
            total: 20,
            inStock: 15
        },
        stands: {
            price: 50,
            total: 20,
            inStock: 15
        }
    }
},
]