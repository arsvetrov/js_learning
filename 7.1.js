var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

const re = /[\w\.]+@(gmail\.com|yahoo\.com)/gm;

var emailsList = arr.map(function (key) {
    if (key.email.match(re)) {
        return key.email;
    };
});
