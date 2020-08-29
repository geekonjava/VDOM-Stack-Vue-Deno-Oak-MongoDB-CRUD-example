import Contact from '../models/contact.ts';

const ContactClass = new Contact;

export const getContacts = async({response}: {response: any})=>{
    response.body = ContactClass.getContact;
}

export const createContact = async ({request, response}: {request: any, response: any})=>{
    const requestBody = await request.body({
        contentTypes: {
            text: ["application/ld+json"]
        }
    });

    const contacts = requestBody.value;
    const firstname = contacts.firstname;
    const lastname = contacts.lastname;
    const email = contacts.email;
    const phone = contacts.phone;

    ContactClass.createContact({
        firstName: firstname,
        lastName: lastname,
        email: email,
        phone: phone
    });
    request.body = "Contact has been created.";
};

export const editContact: any = async(response: any) =>{
    try{
        let contactId: string = response.params.contactid;
        const data: any = await ContactClass.editContact(contactId);

        if(data){
            response.response.body = data;
            response.response.status = 200;
        }
    }
    catch(e){
        response.response.body = null;
        response.response.status = 500;
    }
}

export const updateContact = async({request, response, params}: {request: any, response: any, params: any})=>{
    const contactId = await params.contactId;
    const requestBody = await request.body({
        contentTypes: {
            text: ["application/ld+json"]
        }
    });
    const contact = requestBody.value;
    const updateContact = await ContactClass.updateContact(contactId, contact);
    if(updateContact == true){
        response.status = 200;
        response.body = {
            msg: "Contact has been updated"
        }
    }
    else{
        response.status = 404;
        response.body = {
            msg: "Contact not found";
        }
    }
}

export const deleteContact = async({request, response, params} : {request: any, response: any, params: any})=>{
    const contactId = await params.contactId;
    const deleteContact = await ContactClass.deleteContact(contactId);
    if(deleteContact){
        response.status = 200;
        response.body = { msg: "Contact has been deleted"}
    }
    else{
        response.status = 404;
        response.body = { msg: "Contact not found"}
    }
}