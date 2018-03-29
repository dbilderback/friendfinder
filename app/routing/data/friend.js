var friendsArray = [
    {
        "name":"Bob Jones",
        "sex":"Male",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name":"Frank Smith",
        "sex":"Male",
        "photo":"",
        "scores":[
            2,
            3,
            3,
            3,
            2,
            5,
            4,
            1,
            2,
            5
        ]
    },
    {
        "name":"Jennifer Lawrence",
        "sex":"Female",
        "photo":"",
        "scores":[
            5,
            1,
            5,
            5,
            5,
            1,
            3,
            5,
            3,
            1
        ]
    },
    {
        "name":"Charlize Theron",
        "sex":"Female",
        "photo":"",
        "scores":[
            1,
            4,
            1,
            1,
            4,
            5,
            3,
            1,
            2,
            5
        ]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;