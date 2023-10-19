import { useState } from "react"
import { IoTerminalSharp } from "react-icons/io5"
import { FileInput } from "../components/inputs/file-input/FIleInput"
import styles from "./picscarousel.module.css"

interface PicsCarouselProps {
    items?: any[]
}

export const PicsCarousel = ({...props}: PicsCarouselProps) => {
    const [step, setStep] = useState(1)

    return (
        <div className={styles.container}>
            <FileInput/>
        </div>
    )
}
