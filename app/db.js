
const fakeDatabase = {
    users: {
        "a1": {
            name: "John"
        },
        "a2": {
            name: "Don"
        }
    },
    travels: [
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1351',
            name: "Gaiti tour",
            description: "pomidaor",
            img: '',
            userId: "a1"
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1352',
            name: "Bora bora rodeo",
            description: "pomidaor",
            img: '',
            userId: "a2"
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1353',
            name: "Gibraaltar banans",
            description: "pomidaor",
            img: '',
            userId: "a1"
        },
        {
            id: 'e9e9370d-00a2-40c6-8774-12c963df1354',
            name: 'Bonita',
            description: "pomidaor",
            img: '',
            userId: "a2"
        }
    ],
    //key by id travels
    posts: {
        'e9e9370d-00a2-40c6-8774-12c963df1351': [
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1301',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1302',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1303',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
        ],
        'e9e9370d-00a2-40c6-8774-12c963df1352': [
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1304',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1305',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
        ],
        'e9e9370d-00a2-40c6-8774-12c963df1354': [
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1306',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
            {
                id: 'e9e9370d-00a2-40c6-8774-12c963df1307',
                name: "Drink tekila",
                description: "pomidaor",
                img: '',      
            },
        ]
    }
}

export default fakeDatabase;
