import styles from "./locationlist.module.css";
import { DataLocation } from "./data";
import React, { useState } from "react";

export const LocationList = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleDivClick = (index: any) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    return (
        <div className={styles.location_list_container}>
            {DataLocation.map((item, index) => (
                <div
                    className={`${styles.icon_container} ${
                        clickedIndex === index ? styles.clicked : ""
                    }`}
                    key={index}
                    onClick={() => handleDivClick(index)}
                >
                    <div className={styles.icon_wrapper}>
                        {React.createElement(item.icon, {
                            className: `${styles.icon}`,
                            style:{color: clickedIndex === index ? "#1856d2" : "black"},
                        })}
                    </div>
                    <p style={{ color: clickedIndex === index ? "#1856d2" : "black" }}>
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    );
};
