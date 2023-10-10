import Express from "express";
import { bookedRooms } from "./bookedRooms.js";

const roomBookingRoute = Express.Router();

export const BookingRooms = [];

// SampleData for room Booking{
//     "roomNo" : "1",
//     "BookingId":"01",
//     "name":"user1",
//     "date":"21-sep-2023",
//     "startTime": "10.00",
//     "endTime": "12.00"
// }

roomBookingRoute.get("/", (req, res) => {
  res.send("fill the form to book the room");
});



roomBookingRoute.post("/", (req, res) => {
  const newRoom = req.body;
  let roomStatus = [];
  if (bookedRooms.length === 0) {
    roomStatus.push("Room booked successfully");
  } else { 
    for (let i = 0; i < bookedRooms.length; i++) {
      //if same room, but different date, booked successfully
      if (bookedRooms[i].roomNo === newRoom.roomNo) {
        if (bookedRooms[i].date !== newRoom.date) {
          roomStatus = [];
          roomStatus.push("Room booked successfully, different date");
        } else if (
          //if same room and same date, but different time, booked successfully
          (bookedRooms[i].date === newRoom.date) &&
          (bookedRooms[i].startTime !== newRoom.startTime) &&
          (bookedRooms[i].endTime !== newRoom.endTime) &&
          (newRoom.startTime > bookedRooms[i].endTime)
        ) {
          console.log("1", newRoom.startTime, bookedRooms[i].endTime);
          roomStatus = [];
          roomStatus.push("Room booked successfully, Different time");
        } else {
          roomStatus = [];
          roomStatus.push(
            "Already Booked, Please select an another room or another time"
          );
        }
      } else if(bookedRooms[i].roomNo !== newRoom.roomNo){ // if Different room, booked successfully
        roomStatus = [];
        roomStatus.push("Room booked successfully")
      }
      else {
        roomStatus = [];
        roomStatus.push(
          "Already Booked, Please select an another room or another time"
        );
      }
    }
  }
  if (
    roomStatus[0] === "Room booked successfully" ||
    roomStatus[0] === "Room booked successfully, different date" ||
    roomStatus[0] === "Room booked successfully, Different time"
  ) {
    bookedRooms.push(newRoom);
  }
  res.send(roomStatus);
});

export default roomBookingRoute;