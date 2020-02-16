 import React from "react";
 import { RoomConsumer } from "../context";
 import Loading from "./Loading";
 import RoomsFilter from "./RoomsFilter";
 import RoomList from "./RoomList";
 export default function RoomContainer() {
   return (
     <RoomConsumer>
       {value => {
         const { loading, setRoom, sortedRooms,rooms } = value;
         if (loading) {
           return <Loading />;
         }
         return (
           <>
             <RoomsFilter rooms={rooms} />
             <RoomList rooms={sortedRooms} setRoom={setRoom} />
           </>
         );
       }}
     </RoomConsumer>
   );
 }