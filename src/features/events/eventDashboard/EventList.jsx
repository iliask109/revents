import React from "react";
import EventListItem from "./EventListItem";

export default function EventList(props) {
  return (
    <>
      {props.events.map((event) => {
        return <EventListItem event={event} key={event.id} />;
      })}
    </>
  );
}
