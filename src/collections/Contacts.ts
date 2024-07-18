import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'textarea',
    },
    {
      name: 'postalCode',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'country',
      type: 'text',
    },
  ],
}
