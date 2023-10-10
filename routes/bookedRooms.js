import  Express  from "express";

const bookedRoute = Express.Router()

export const bookedRooms = [];


bookedRoute.get('/',(req,res)=>{
    res.send(bookedRooms)
});


bookedRoute.post('/',(req,res)=>{
    let newRoom = req.body
    bookedRooms.push(newRoom)
    res.send(bookedRooms)
})

export default bookedRoute