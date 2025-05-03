const mongoose = require("mongoose")
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "shradha",
    to: "aman",
    msg: "send me your live location",
    created_at:new Date(),
},
{
    from: "rohit",
    to: "virat",
    msg: "kings of the ground",
    created_at:new Date(),
},
{
    from: "anushka",
    to: "advait",
    msg: " bff in their life ",
    created_at:new Date(),
},
{
    from: "asawari",
    to: "soham",
    msg: "lovely couple in maharashtra",
    created_at:new Date(),
},
];

Chat.insertMany(allChats);
