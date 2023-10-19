import styles from "./fileinput.module.css"
import { useState } from "react";
import {MdOutlinePhotoLibrary} from "react-icons/md"

export const FileInput = () => {
  const [selectedFiles, setSelectedFiles] = useState<any>([]);

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files);
        setSelectedFiles([...selectedFiles, ...files]);
      };
      const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
      };
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files || []);
        setSelectedFiles([...selectedFiles, ...files]);
      };
    return (
        <div className={styles.file}>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className={styles.container_file}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <MdOutlinePhotoLibrary className={styles.gallery_icon} />
            <p className={styles.title}>Escolha pelo menos 5 fotos</p>
            <p className={styles.subtitle}>Envie fotos a partir do seu dispoditivo</p>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
    )
}