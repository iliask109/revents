import React, { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

function App() {
  const [formOpen, setFromOpen] = useState(false);

  return (
    <Fragment>
      <NavBar setFromOpen={setFromOpen} />
      <Container className="main" />
      <EventDashboard formOpen={formOpen} setFromOpen={setFromOpen} />
    </Fragment>
  );
}

export default App;
