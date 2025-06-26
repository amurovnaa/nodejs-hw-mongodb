import createHttpError from 'http-errors';
import {
  deleteContact,
  getContactById,
  getContacts,
  postContact,
  updateContact,
} from '../services/contacts.js';
<<<<<<< hw5-auth
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;
  const contacts = await getContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId,
  });
  if (contacts.data.length === 0) {
    throw createHttpError(404, 'Contacts not found');
  }
=======
<<<<<<< hw5-auth
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const userId = req.user._id;
  const contacts = await getContacts({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId,
  });
  if (contacts.data.length === 0) {
    throw createHttpError(404, 'Contacts not found');
  }
=======

export const getContactsController = async (req, res) => {
  const contacts = await getContacts();

>>>>>>> main
>>>>>>> main
  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const contact = await getContactById(contactId, userId);
=======
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const contact = await getContactById(contactId, userId);
=======
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
>>>>>>> main
>>>>>>> main

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
export const postContactController = async (req, res) => {
<<<<<<< hw5-auth
  const userId = req.user._id;
  const contact = await postContact({ ...req.body, userId });

=======
<<<<<<< hw5-auth
  const userId = req.user._id;
  const contact = await postContact({ ...req.body, userId });
=======
  const contact = await postContact(req.body);
>>>>>>> main
>>>>>>> main
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact',
    data: contact,
  });
};
export const patchContactController = async (req, res, next) => {
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body, userId);
=======
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body, userId);
=======
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body);
>>>>>>> main
>>>>>>> main

  if (!result) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result.contact,
  });
};

export const deleteContactController = async (req, res, next) => {
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const contact = await deleteContact(contactId, userId);
=======
<<<<<<< hw5-auth
  const userId = req.user._id;
  const { contactId } = req.params;
  const contact = await deleteContact(contactId, userId);
=======
  const { contactId } = req.params;
  const contact = await deleteContact(contactId);
>>>>>>> main
>>>>>>> main

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.status(204).send();
};
