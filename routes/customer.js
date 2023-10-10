import Express from "express";
import { bookedRooms } from "./bookedRooms.js";

const customerRoute = Express.Router();

customerRoute.get("/", (req, res) => {
  const customer = bookedRooms.map((room) => {
    return {
      name: room.name,
      date: room.date,
      startTime: room.startTime,
      endTime: room.endTime
    };
  });
  res.send(customer);
});




export default customerRoute;