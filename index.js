import express from "express";
import roomsRoute from "./routes/rooms.js";
import bookedRoute from "./routes/bookedRooms.js";
import availableRoute from "./routes/availableRooms.js";
import roomBookingRoute from "./routes/roomBooking.js";
import customerRoute from "./routes/customer.js";
const app = express();
const port = 5002;

// HAll booking Application
app.get("/", (req, res) => {
  let content = {
    task: "Hall Booking application",
    url: {
      "/rooms": "to get all rooms",
      "/roomBooking": "to book the room",
      "/bookedRooms": "to get all booked rooms",
      "/availableRooms": "to get the available rooms for customers",
      "/customer": "to get the customer details",
    },
    generalDetails:
      "While booking rooms, not allowed the same time in same date and same Room. different time is allowed. And different date in same room is allowed. and different room is allowed",
  };
  res.send(content);
});

// Middleware
app.use(express.json());

app.use("/rooms", roomsRoute);

app.use("/bookedRooms", bookedRoute);

app.use("/availableRooms", availableRoute);

app.use("/roomBooking", roomBookingRoute);

app.use("/customer", customerRoute);

app.listen(port, () => console.log("server is running on ", port));