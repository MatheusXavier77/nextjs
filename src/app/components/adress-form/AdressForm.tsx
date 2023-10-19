import { FormInput } from "../inputs/form-input/FormInput"
import styles from "./adressform.module.css"

export const AdressForm = () => {
    return (
        <div className={styles.container}>
            <FormInput
                name="country"
                type="text"
                placeholder="País/Região *"
            />
            <FormInput
                name="adress"
                type="text"
                placeholder="Endereço *"
            />
            <FormInput
                name="complement"
                type="text"
                placeholder="Complemento"
            />
            <FormInput
                name="neighbourhood"
                type="text"
                placeholder="Bairro *"
            />
            <div className={styles.city_uf}>
                <FormInput
                    name="city"
                    type="text"
                    placeholder="Cidade *"
                />
                <FormInput
                    name="uf"
                    type="text"
                    placeholder="UF *"
                />
            </div>
        </div>
    )
}
