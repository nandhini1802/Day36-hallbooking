import express from "express";

const roomsRoute = express.Router();

export let rooms = [
    {   
        roomId : '1',
        roomNo : '1',
        numberOfSeats : "2",
        amenities : ['Ac','Tv','Hanger','Ironing capability','Complementary water','wifi','fridge','coffee maker','rest room with hot and cold water'],
        price : {
            "1 hr":"2K",
            "2 hr":"4K",
            "3 hr":"5K",
            "Half day":"10K",
            "Full day":"15K"
        } 
    },
    {   
        roomId : '2',
        roomNo : '2',
        numberOfSeats : "2",
        amenities : ['Ac','Tv','Hanger','Ironing capability','Complementary water','wifi','fridge','coffee maker','rest room with hot and cold water'],
        price : {
            "1 hr":"2K",
            "2 hr":"4K",
            "3 hr":"5K",
            "Half day":"10K",
            "Full day":"15K"
        } 
    },
    {   
        roomId : '3',
        roomNo : '3',
        numberOfSeats : "2",
        amenities : ['Ac','Tv','Hanger','Ironing capability','Complementary water','wifi','fridge','coffee maker','rest room with hot and cold water'],
        price : {
            "1 hr":"2K",
            "2 hr":"4K",
            "3 hr":"5K",
            "Half day":"10K",
            "Full day":"15K"
        } 
    },
    {   
        roomId : '4',
        roomNo : '4',
        numberOfSeats : "2",
        amenities : ['Ac','Tv','Hanger','Ironing capability','Complementary water','wifi','fridge','coffee maker','rest room with hot and cold water'],
        price : {
            "1 hr":"2K",
            "2 hr":"4K",
            "3 hr":"5K",
            "Half day":"10K",
            "Full day":"15K"
        } 
    },
]

roomsRoute.get('/',(req,res)=>{
    res.send(rooms)
});



export default roomsRoute