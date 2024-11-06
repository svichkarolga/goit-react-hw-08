import React from "react";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { Button } from "@mui/material";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true); // Відкриваємо модальне вікно
  };

  const handleConfirmDelete = () => {
    onDelete(id); // Видаляємо контакт
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <RiContactsFill className={styles.icon} />
        {name}
      </p>
      <p className={styles.text}>
        <FaPhone className={styles.icon} />
        {number}
      </p>
      <button className={styles.btn} onClick={handleDeleteClick}>
        Delete
      </button>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Contact;
