import React from "react";
import { Modal, Box, Button, TextField } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalEdit = ({ open, onClose, onSave, initialName, initialNumber }) => {
  const [name, setName] = React.useState(initialName);
  const [number, setNumber] = React.useState(initialNumber);
  React.useEffect(() => {
    setName(initialName);
    setNumber(initialNumber);
  }, [initialName, initialNumber]);
  const handleSave = () => {
    onSave(name, number);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="edit-contact-modal">
      <Box sx={modalStyle}>
        <h3>Edit Contact</h3>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Number"
          fullWidth
          margin="normal"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalEdit;

//   {/* Модальне вікно редагування */
//   {isEditModalOpen && (
//     <Modal
//       open={isEditModalOpen}
//       onClose={() => setIsEditModalOpen(false)}
//       onConfirm={handleSaveEdit}
//     >
//       <div>
//         <h3>Edit Contact</h3>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={editedName}
//           onChange={(e) => setEditedName(e.target.value)}
//         />
//         <label>Number:</label>
//         <input
//           type="text"
//           value={editedNumber}
//           onChange={(e) => setEditedNumber(e.target.value)}
//         />
//       </div>
//     </Modal>
