import React from "react";
import styles from "./Contact.module.css";
import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import Modal from "../Modal/Modal";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDelete(id);
    toast.success("Successfully deleted!");
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
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
