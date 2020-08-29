import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getContacts,
  createContact,
  editContact,
  updateContact,
  deleteContact,
} from "../controllers/contacts.ts";

const router = new Router({
  prefix: "/api",
});

router
  .get("/contacts", getContacts)
  .get("/edit/:contactid", editContact)
  .post("/create", createContact)
  .patch("/update/:contactId", updateContact)
  .delete("/delete/:contactId", deleteContact);

export default router;
