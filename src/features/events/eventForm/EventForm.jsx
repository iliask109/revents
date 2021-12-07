import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({ setFromOpen }) {
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="Enter title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Descripation" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="City" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          onClick={() => setFromOpen(false)}
          type="submit"
          floated="right"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
