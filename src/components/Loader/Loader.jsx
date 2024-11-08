import React from "react";
import styles from "./Loader.module.css";
import { Circles } from "react-loader-spinner";

const Loader = (isLoading) => {
  return (
    <div>
      <div className={styles.loader}>
        <Circles
          height="80"
          width="80"
          color="#f22727"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Loader;
