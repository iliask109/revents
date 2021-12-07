import React, { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

function App() {
  const [formOpen, setFromOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFromOpen(true);
  };

  const handleChangeFormOpen = (event) => {
    setSelectedEvent(null);
    setFromOpen(true);
  };

  return (
    <Fragment>
      <NavBar setFromOpen={handleChangeFormOpen} />
      <Container className="main" />
      <EventDashboard
        formOpen={formOpen}
        setFromOpen={setFromOpen}
        selectEvent={handleSelectEvent}
        selectedEvent={selectedEvent}
      />
    </Fragment>
  );
}

export default App;
