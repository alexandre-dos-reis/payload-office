import type { CollectionConfig } from 'payload'

export const Modules: CollectionConfig = {
  slug: 'modules',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pictures',
      type: 'relationship',
      hasMany: true,
      relationTo: 'media',
    },
    {
      name: 'onSale',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'Manufacturer',
      type: 'select',
      options: [
        '2hp',
        'ACL',
        'ALM Busy Circuits',
        'Cwejman',
        'Derr Man mit der Maschine',
        'Doepfer',
        'Frap Tools',
        'Happy Nerding',
        'LPZW.modules',
        'Ieaskul F. Mobenthey',
        'Instruo',
        'Intellijel',
        'Joranalogue Audio Design',
        'Mutable Instruments',
        'Make Noise',
        'Mannequins',
        'MDR',
        'Monome',
        'Nw2s',
        'Orthogonal Devices',
        'Rabid Elephant',
        'Steady State Fate',
        'Strymon',
        'Submodular',
        'Verbos Electronics',
        'Xaox Devices',
      ],
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'firstOwner',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'boxIncluded',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'condition',
      type: 'select',
      options: ['like new', 'good', 'used', 'few scratches', 'bad'],
      defaultValue: 'used',
    },
    {
      name: 'rackRash',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isSold',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'comments',
      type: 'textarea',
    },
    {
      name: 'ShipTo',
      type: 'textarea',
    },
    {
      name: 'trackingNumber',
      type: 'text',
    },
  ],
}
