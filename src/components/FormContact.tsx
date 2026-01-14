import React from 'react';
import '@styles/components/formContact.css';

interface Props {
    typeForm: 'contact' | 'booking';
}

const FormContact: React.FC<Props> = ({ typeForm }) => {


    return (
        <>
            {
                typeForm == 'contact' && (
                    <form action="">
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactName"
                            ><span>*</span> Nombre:
                            </label>
                            <input
                                type="text"
                                name="contactName"
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"
                            ><span>*</span> Correo eléctronico:
                            </label>
                            <input
                                type="text"
                                name="contactEmail"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactNumber"
                            ><span>*</span> Número teléfonico:
                            </label>
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="xxxxxxxxxx"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"
                            ><span>*</span> ¿En qué podemos ayudarte?:
                            </label>
                            <select name="contactType">
                                <option value="general"
                                >Información general</option
                                >
                                <option value="paquete"
                                >Información de algún paquete</option
                                >
                                <option value="sesion"
                                >Consulta de sesión personalizada</option
                                >
                            </select>
                        </div>
                    </form>

                )
            }


            {
                typeForm == 'booking' && (
                    <form action="">
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactName"
                            ><span>*</span> Nombre completo:
                            </label>
                            <input
                                type="text"
                                name="contactName"
                                placeholder="Ingresa tu nombre"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"
                            ><span>*</span> Correo eléctronico:
                            </label>
                            <input
                                type="text"
                                name="contactEmail"
                                placeholder="example@example.com"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactNumber"
                            ><span>*</span> Número teléfonico:
                            </label>
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="xxxxxxxxxx"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"
                            ><span>*</span> ¿En qué podemos ayudarte?:
                            </label>
                            <select name="contactType">
                                <option value="general"
                                >Información general</option
                                >
                                <option value="paquete"
                                >Información de algún paquete</option
                                >
                                <option value="sesion"
                                >Consulta de sesión personalizada</option
                                >
                            </select>
                        </div>
                    </form>

                )
            }
        </>
    );
};

export default FormContact;