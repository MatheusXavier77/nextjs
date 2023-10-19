import styles from "./connectionlist.module.css"
import { ConnectionData } from "./connection-data"
import React, { useState } from "react";

export const ConectionList = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleDivClick = (index: any) => {
        if (clickedIndex === index) {
            setClickedIndex(null);
        } else {
            setClickedIndex(index);
        }
    };

    return (
        <div className={styles.list_container}>
            {ConnectionData.map((item, index) => (
                <div
                    className={`${styles.connection_container} ${
                        clickedIndex === index ? styles.clicked : ""
                    }`}
                    key={index}
                    onClick={() => handleDivClick(index)}
                >
                    <div className={styles.icon_wrapper}>
                        {React.createElement(item.icon, {
                            className: styles.icon,
                            style:{color: clickedIndex === index ? "#1856d2" : "black"},
                        })}
                    </div>
                    <p style={{ color: clickedIndex === index ? "#1856d2" : "black" }}>
                        {item.text}
                    </p>
                </div>
            ))}
        </div>
    )
}