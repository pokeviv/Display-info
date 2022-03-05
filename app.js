let data = [
    {
        name: "Nick",
        age: "25"
    },
    {
        name: "Dennis",
        age: "old"
    },
    {
        name: "Roger",
        age: "27"
    },
    {
        name: "Tai",
        age: "30"
    },
    {
        name: "Matt",
        age: "35"
    },
    {
        name: "Clinton",
        age: "30"
    }
];

const info = document.querySelector("#info");

let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
    
});

info.innerHTML = details.join("\n");