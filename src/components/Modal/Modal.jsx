import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    backgroundColor: "#d8eb0c", // Колір фону
    borderRadius: "10px", // Закруглені краї
    padding: "20px", // Внутрішні відступи
    width: "400px", // Ширина модального вікна
    maxWidth: "100%", // Адаптивність
  },
});
const StyledDialogTitle = styled(DialogTitle)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "center",
  color: "#333",
});
const StyledDialogActions = styled(DialogActions)({
  justifyContent: "center",
  paddingBottom: "1rem",
  fontSize: "1.5rem",
  color: "#333",
});
const StyledDeleteButton = styled(Button)({
  backgroundColor: "#d32f2f",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#c62828",
  },
  padding: "8px 16px",
  fontWeight: "bold",
});
const StyledCancelButton = styled(Button)({
  backgroundColor: "#0a0af2",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#c62828",
  },
  padding: "8px 16px",
  fontWeight: "bold",
});

const Modal = ({ open, onClose, onConfirm }) => {
  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      aria-labelledby="confirm-dialog"
    >
      <StyledDialogTitle id="confirm-dialog">Delete contact?</StyledDialogTitle>
      <DialogContent>
        <p>Are you shure that you want to delete contact?</p>
      </DialogContent>
      <StyledDialogActions>
        <StyledCancelButton onClick={onClose} color="primary">
          No
        </StyledCancelButton>
        <StyledDeleteButton
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Yes
        </StyledDeleteButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default Modal;
