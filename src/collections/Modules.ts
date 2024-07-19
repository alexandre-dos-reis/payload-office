import type { CollectionConfig } from 'payload'

export const Modules: CollectionConfig = {
  slug: 'modules',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Infos',
          fields: [
            {
              name: 'status',
              type: 'select',
              options: ['isSold', 'onSale'],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'manufacturer',
                  type: 'select',
                  admin: {
                    width: '50%',
                  },
                  required: true,
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
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'pictures',
              type: 'relationship',
              hasMany: true,
              relationTo: 'media',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'firstOwner',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'boxIncluded',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'rackRash',
                  type: 'checkbox',
                  defaultValue: false,
                  admin: {
                    width: '33%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'price',
                  label: 'Price in euros',
                  type: 'number',
                  required: true,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'condition',
                  type: 'select',
                  options: ['like new', 'good', 'used', 'few scratches', 'bad'],
                  defaultValue: 'used',
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'comments',
              type: 'textarea',
            },
          ],
        },
        {
          label: 'Buyer',
          fields: [
            {
              name: 'ShipTo',
              type: 'textarea',
            },
            {
              name: 'trackingNumber',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
