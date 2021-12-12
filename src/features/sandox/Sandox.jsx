import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../app/common/modals/modalReducer";
import { decrement, increment } from "./textReducer";

export default function Sandox() {
  const dispatch = useDispatch();
  
  const data = useSelector((state) => state.test.data);
  const { loading } = useSelector((state) => state.async);
  return (
    <>
      <h1>Testing 123</h1>
      <h1>The data is : {data} </h1>
      <Button
        name="increment"
        loading={loading}
        onClick={() => dispatch(increment(20))}
        content="Increment"
        color="green"
      ></Button>
      <Button
        name="decrement"
        loading={loading}
        onClick={() => dispatch(decrement(10))}
        content="Decrement"
        color="red"
      ></Button>
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TextModal", modalProps: { data } }))
        }
        content="Open Modal"
        color="teal"
      ></Button>
    </>
  );
}
