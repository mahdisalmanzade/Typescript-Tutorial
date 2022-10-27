"use strict";
let employeee = {
    id: 1,
    name: "Mahdi",
    retire: (date) => {
        console.log(date);
    },
    greeting: (message) => {
        console.log(message);
        return message;
    },
};
employeee.name = "Anson";
employeee.retire(new Date());
employeee.greeting("Bla Bla Bla!");
//# sourceMappingURL=objects.js.map