'use client'

import { useState } from "react"
import { CardTheme } from "../card-theme/CardTheme"
import styles from './cardpage.module.css'
import { LocationList } from "../location-list/LocationList"
import { ConectionList } from "../conection-list/ConectionList"
import { Steps } from "../steps/Steps"
import { AdressForm } from "../adress-form/AdressForm"
import { InputButton } from "../inputs/input-button/inputButton"
import { DynamicButton } from "../dynamic-button/DynamicButton"
import { MdOutlineNavigateNext } from "react-icons/md";
import { PicsCarousel } from "@/app/pics-carousel/PicsCarousel"


export const CardsPage = () => {
    const [hosped, setHosped] = useState(0);
    const [bed, setBed] = useState(0);
    const [bathroom, setBathroom] = useState(0);
    const [description, setDescription] = useState("");
    const [step, setStep] = useState(1)

    const handleDescriptionChange = (e: any) => {
        const inputText = e.target.value;
        if (inputText.length <= 1000) {
            setDescription(inputText);
        }
    };



    const setNewStep = (newStep: number) => {
        setStep(newStep);
    };

    return (

        <main className={styles.main}>
            <div>
                <Steps step={step}/>
            </div>
            <div className={styles.content}>
                <CardTheme
                    className={styles.card1}
                    title={step == 1 ?
                        "Qual opção descreve melhor seu espaço?" :
                        "Informe o que seu espaço tem que oferecer"
                    }
                >
                    {step == 1 ? <LocationList/> : <ConectionList />}
                </CardTheme>
                <CardTheme
                    title={step == 1 ?
                        "Adicione fotos do seu local" :
                        "Confirme seu endereço"

                    }
                    subtitle={step == 1 ?
                        "Adicione pelo menos 5 fotos" :
                        "Endereço é compartilhado após a confirmação da reserva"
                    }
                >
                    {step == 1? (
                        <div className={styles.adress_container}>
                            <AdressForm />
                            <DynamicButton
                                title="Confirmar"
                            />
                        </div>
                    ) : (
                        <PicsCarousel/>
                    )}
                </CardTheme>
                <CardTheme
                    className={styles.card2}
                    title={step == 1 ?
                        "Compartilhe os detalhes do seu espaço" :
                        "Adicione uma descrição para o seu espaço"
                    }
                    subtitle={step == 1 ?
                        "" :
                        "Descreva detalhadamente o seu espaço"
                    }
                >
                    {step == 1 ?(
                        <>
                            <div className={styles.details_adrress}>
                                <div className={styles.detail_line}>
                                    <p>Hóspedes</p>
                                    <InputButton
                                        onClickAdd={() => setHosped(hosped + 1)}
                                        value={hosped}
                                        onClickRemove={() => setHosped(hosped - 1)} />
                                </div>

                                <div className={styles.detail_line}>
                                    <p>Camas</p>
                                    <InputButton
                                        onClickAdd={() => setBed(bed + 1)}
                                        value={bed}
                                        onClickRemove={() => setBed(bed - 1)} />
                                </div>

                                <div className={styles.detail_line}>
                                    <p>Banheiros</p>
                                    <InputButton
                                        onClickAdd={() => setBathroom(bathroom + 1)}
                                        value={bathroom}
                                        onClickRemove={() => setBathroom(bathroom - 1)} />
                                </div>

                                <div className={styles.detail_line}>
                                    <p>Outro</p>
                                </div>
                            </div>
                            <div className={styles.button_location}>
                                <DynamicButton
                                    onClick={() => setNewStep(step + 1)}
                                    title="Pŕoximo"
                                    icon={MdOutlineNavigateNext}
                                />
                            </div>
                        </>
                        ) : (
                            <div className={styles.details_adrress}>
                                <div className={styles.text_container}>
                                    <textarea
                                        cols={10}
                                        value={description}
                                        onChange={handleDescriptionChange}
                                    />
                                    <div className={styles.label_container}>
                                        <p>
                                            {description.length}/1000 caracteres
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.button_location}>
                                    <DynamicButton
                                        onClick={() => setNewStep(step + 1)}
                                        title="Pŕoximo"
                                        icon={MdOutlineNavigateNext}
                                    />
                                </div>
                            </div>
                        )
                    }
                </CardTheme>
            </div>
        </main>
    )
}