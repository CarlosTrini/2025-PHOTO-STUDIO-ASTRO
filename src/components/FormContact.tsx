import React, { useEffect, useState } from 'react';
import '@styles/components/formContact.css';
import { regexValidateFn, type ValidationType } from '@helpers/regexValidate';

interface Props {
    formType: 'contact' | 'booking';
}

interface ServicesSelectProps {
    value: string;
    selectValueElement: (valueSelected: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface TextAreaProps {
    value: string;
    handleChangeValue: (valueDetails: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


interface FormInputsValues {
    value: string;
    error: string;
    regex: ValidationType[];
}

type FormInputsState = Record<string, FormInputsValues>;


const formDataInit = {
    contactName: {
        value: '',
        error: '',
        regex: ['notEmptyText']
    },
    contactEmail: {
        value: '',
        error: '',
        regex: ['notEmptyText', 'email']
    },
    contactNumber: {
        value: '',
        error: '',
        regex: ['notEmptyText', 'phone']
    },
    contactTypeSelect: {
        value: 'general',
        error: '',
        regex: ['notEmptyText']
    },
    contactServicesSelect: {
        value: '',
        error: '',
        regex: []
    },
    contactComments: {
        value: '',
        error: '',
        regex: []
    },
} as FormInputsState;



const FormContact: React.FC<Props> = ({ formType }) => {

    const [showServices, setShowServices] = useState(false);

    const [formInputs, setFormInputs] = useState<FormInputsState>(formDataInit);


    const handleChageInput = (input: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormInputs({
            ...formInputs,
            [input.target.name]: {
                ...formInputs[input.target.name],
                error: '',
                value: input.target.value
            }
        } as FormInputsState);
    };


    useEffect(() => {
        console.log('INPUTS ==>', formInputs);
    }, [formInputs]);


    const handleFormSubmit = (formtype: string) => {
        //validar inputs mediante sus regex...
        const inputs = { ...formInputs };
        let isFormValid: FormInputsState = {};
        let foundSomeError = false;

        // TODO: EVALUAR ASÍ O AL CHAGE U BLUR
        for (const prop in inputs) {
            const currentInput = inputs[prop];
            const regex = currentInput.regex;

            if (regex.length > 0) {
                for (let i = 0; i < regex.length; i++) {
                    const validation = regexValidateFn(currentInput.value, regex[i]);
                    // pueden tener 0 o muchos regex... pero si uno no pasa test (false) se aplica un break, para que noevalue más sin necesidad
                    if (!validation.testValue) {
                        currentInput.error = validation.errorMsg;
                        foundSomeError = true;
                        break;
                    }
                }
            }

            isFormValid = { ...isFormValid, [prop]: currentInput };
        }


        // si NO encontró un error, se ejcuta lo sig, para pintar el error correspondiente
        if (!foundSomeError) {
            //no hubo error
            sendForm();
        }

        // Si hubo error


        console.log('A VER... ==>', isFormValid);



    };

    const sendForm = async () => {
        try {

            // mandar a algún lado la data del form
            const data = {
                inputName1: 'value',
                inputName2: 'value',
                inputName3: 'value',
                inputName4: 'value',
                inputName5: 'value',
            };
        } catch (error) {
            console.error('send form contact error ==>', error);
        }
    };


    // COMPONENTES

    const ButtonsForm = () => {
        return (
            <div className='buttons-form'>
                <button className='send-btn-form' type='submit' >Enviar <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#f8f7f2" d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" /></svg></button>
                <button className='cancel-btn-form' type='button' >Cancelar <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#f8f8f2" d="M431.2 476.5L163.5 208.8C141.1 240.2 128 278.6 128 320C128 426 214 512 320 512C361.5 512 399.9 498.9 431.2 476.5zM476.5 431.2C498.9 399.8 512 361.4 512 320C512 214 426 128 320 128C278.5 128 240.1 141.1 208.8 163.5L476.5 431.2zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320z" /></svg></button>
            </div>
        );
    };


    const ServicesSelect: React.FC<ServicesSelectProps> = ({ value, selectValueElement }) => {
        return (
            <div className={`t-input input-contact`}>
                <label htmlFor="contactEmail"><span>*</span> Selección el paquete de tu interés:</label>

                <select name="contactServicesSelect" value={value} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { selectValueElement(e); }}>
                    <option value="wedding">Boda</option>
                    <option value="business">Empresa</option>
                    <option value="maternity">Maternidad</option>
                    <option value="studioSession">Sesión de estudio</option>
                    <option value="outdoorSession">Sesión en exterior</option>
                </select>
            </div>
        );
    };

    return (
        <>
            {
                formType == 'contact' && (
                    <form action="" onSubmit={(e) => { e.preventDefault(); handleFormSubmit('contact'); }}>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactName"
                            ><span>*</span> Nombre:
                            </label>
                            {/* <div className='form-input'> */}
                            <input
                                onChange={handleChageInput}
                                type="text"
                                name="contactName"
                                placeholder="Ingresa tu nombre"
                            />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640"><path fill="#f8f7f2" d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" /></svg> */}
                            {/* </div> */}

                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"
                            ><span>*</span> Correo eléctronico:
                            </label>
                            <input
                                onChange={handleChageInput}

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
                                onChange={handleChageInput}

                                type="text"
                                name="contactNumber"
                                placeholder="xxxxxxxxxx"
                            />
                        </div>
                        <div className={`t-input input-contact`}>
                            <label htmlFor="contactEmail"><span>*</span> ¿En qué podemos ayudarte?:</label>
                            <select name="contactTypeSelect"
                                value={formInputs['contactTypeSelect'].value}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                    setShowServices(e.target.value == 'pack');

                                    handleChageInput(e);
                                }}
                            >
                                <option value="general">Información general</option>
                                <option value="pack">Información de algún paquete</option>
                                <option value="session">Cotizar sesión personalizada</option>
                            </select>
                        </div>
                        {
                            showServices && (
                                <ServicesSelect value={formInputs['contactServicesSelect'].value} selectValueElement={handleChageInput} />
                            )
                        }

                        <TextAreaForm value={formInputs['contactComments'].value} handleChangeValue={handleChageInput} />


                        <ButtonsForm />


                    </form>

                )
            }


            {
                formType == 'booking' && (
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
                                >Información de sesión personalizada</option
                                >
                            </select>
                        </div>
                    </form>

                )
            }
        </>
    );
};


const TextAreaForm: React.FC<TextAreaProps> = ({ value, handleChangeValue }) => {
    return (
        <div className='t-input'>
            <label htmlFor='contactComments' >Comentarios:</label>
            <textarea name='contactComments' className='' onChange={handleChangeValue} value={value} ></textarea>
        </div>
    );
};

export default FormContact;