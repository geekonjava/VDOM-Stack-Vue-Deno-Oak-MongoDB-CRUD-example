import DB from "./db.ts";

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

class ContactClass {
  constructor() {}
  contactCollection = DB.collection("contacts");
  getContact = async () => {
    return await this.contactCollection.find({});
  };

  editContact = async (contactId: string) => {
    return await this.contactCollection.findOne({
      _id: { $oid: contactId },
    });
  };

  createContact = async (inputContactDetails: Contact) => {
    const firstName = inputContactDetails.firstName;
    const lastName = inputContactDetails.lastName;
    const email = inputContactDetails.email;
    const phone = inputContactDetails.phone;

    const createContact = await this.contactCollection.insertOne({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    });
    return console.log("Contact has been created");
  };

  updateContact = async (contactId: string, changeData: Contact) => {
    const { matchedCount, modifiedCount, userId } = await this.contactCollection
      .updateOne(
        { _id: { $oid: contactId } },
        { $set: changeData },
      );
    return matchedCount !== 0 ? true : false;
  };

  deleteContact = async (contactId: string) => {
    const isContactDeleted = await this.contactCollection.deleteOne({
      _id: { $oid: contactId },
    });
    return isContactDeleted ? true : false;
  };
}

export default ContactClass;
