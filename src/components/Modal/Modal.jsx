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
  backgroundColor: "#d32f2f", // Червоний колір для кнопки видалення
  color: "#fff", // Білий текст
  "&:hover": {
    // Стиль при наведенні
    backgroundColor: "#c62828",
  },
  padding: "8px 16px", // Внутрішні відступи
  fontWeight: "bold",
});
const StyledCancelButton = styled(Button)({
  borderColor: "#1976d2", // Синій колір для обведення
  color: "#1976d2", // Синій текст
  "&:hover": {
    // Стиль при наведенні
    borderColor: "#1565c0",
    backgroundColor: "rgba(21, 101, 192, 0.04)", // Легка підсвітка
  },
  padding: "8px 16px",
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
        <StyledDeleteButton onClick={onClose} color="primary">
          No
        </StyledDeleteButton>
        <StyledCancelButton
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Yes
        </StyledCancelButton>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default Modal;
