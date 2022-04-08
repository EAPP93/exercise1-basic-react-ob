import React from 'react';
import { Contact } from '../../models/Contact.Class';
import ContactComponent from '../pure/contact';


const Showcontactandstatus = () => {
    
    const defaultContact = new Contact('Edwing','Picado','empireeapp@gmail.com',false);

    return (
        <div>
            <div>
                Tu Contacto:
            </div>

            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

Showcontactandstatus.propTypes = {

};

export default Showcontactandstatus;
