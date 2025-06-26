import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
<<<<<<< hw5-auth
=======
    },
    email: {
      type: String,
      required: false,
>>>>>>> main
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true },
);

export const Contacts = model('contacts', contactsSchema);
