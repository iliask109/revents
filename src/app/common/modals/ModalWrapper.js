import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "semantic-ui-react";
import { closeModal } from "./modalReducer";

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    return () => {
      dispatch(closeModal());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size={size}
    >
      {header && <Modal.Header>{header}</Modal.Header>}
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};

export default ModalWrapper;
