import express from "express";
import { rooms } from "./rooms.js";
import { bookedRooms } from "./bookedRooms.js";

const availableRoute = express.Router();

availableRoute.get("/", (req, res) => {
    let result = []
    for(let i = 0;i<rooms.length;i++){
        let flag = false
        for(let j = 0;j<bookedRooms.length;j++){
          if(rooms[i].roomNo === bookedRooms[j].roomNo){
            flag = true
            break;
          }
        }
        if(!flag){
          result.push(rooms[i])
        }
    }
    res.send(result);
});

export default availableRoute;