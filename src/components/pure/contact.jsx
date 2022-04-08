import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contact.Class';

const ContactComponent = ({contact}) => {

    const [status, setstate] = useState(Contact.status);

    const changeStatus = () =>{
        setstate(status ? false : true)
    }

    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: {contact.lastName}</h2>

            <h3>Email: {contact.email}</h3>
            <h3>Estado: {status ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>

            <div>
                <button onClick={changeStatus}>
                    Cambiar Estado
                </button>
            </div>
        </div>
    );
};

ContactComponent.propTypes = {
    Contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
