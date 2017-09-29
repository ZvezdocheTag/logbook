import v6 from './img/6.jpg'
import v2 from './img/2.jpg'
import v3 from './img/3.jpg'
import v4 from './img/4.jpg'
import v5 from './img/5.jpg'
import ava1 from './img/ava1.png'
import ava2 from './img/ava2.png'


const fakeDatabase = {
    users: {
        "a1": {
            name: "John",
            avatar: ava1,
        },
        "a2": {
            name: "Don",
            avatar: ava2,
        }
    },
    travels: [
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1351',
            name: "Gaiti tour",
            description: "pomidaor",
            img: v2,
            userId: "a1",
            posts: [
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1301',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v4,
                    coordinate: {
                        'travel-lat-1': 36.976227,
                        'travel-lng-1': 21.579895,
                      }
                },
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1302',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v5,     
                    coordinate: {
                        'travel-lat-1': 36.615528,
                        'travel-lng-1': 22.348938,
                      }
                },
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1303',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v6, 
                    coordinate: {
                        'travel-lat-1': 35.281501,
                        'travel-lng-1': 23.604126,
                      }    
                },
            ]
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1352',
            name: "Bora bora rodeo",
            description: "pomidaor",
            img: v3,
            userId: "a2",
            posts: [
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1304',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v4,
                    coordinate: {
                        'travel-lat-1': 36.976227,
                        'travel-lng-1': 21.579895,
                      }
                },
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1305',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v5,     
                    coordinate: {
                        'travel-lat-1': 36.615528,
                        'travel-lng-1': 22.348938,
                      }
                },
            ]
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1353',
            name: "Gibraaltar banans",
            description: "pomidaor",
            img: v4,
            userId: "a1",
            posts: []
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1354',
            name: 'Bonita',
            description: "pomidaor",
            img: v5,
            userId: "a2",
            posts: [
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1306',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v6,      
                },
                {
                    id: 'e9e9370d-00a2-40c6-8774-12c963df1307',
                    name: "Drink tekila",
                    description: "pomidaor",
                    img: v2,      
                },
            ]
        }
    ],

}

export default fakeDatabase;
