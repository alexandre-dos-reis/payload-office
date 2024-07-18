/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    modules: Module;
    contacts: Contact;
    users: User;
    media: Media;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: string;
  };
  globals: {};
  locale: null;
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "modules".
 */
export interface Module {
  id: string;
  pictures?: (string | Media)[] | null;
  onSale?: boolean | null;
  Manufacturer:
    | '2hp'
    | 'ACL'
    | 'ALM Busy Circuits'
    | 'Cwejman'
    | 'Derr Man mit der Maschine'
    | 'Doepfer'
    | 'Frap Tools'
    | 'Happy Nerding'
    | 'LPZW.modules'
    | 'Ieaskul F. Mobenthey'
    | 'Instruo'
    | 'Intellijel'
    | 'Joranalogue Audio Design'
    | 'Mutable Instruments'
    | 'Make Noise'
    | 'Mannequins'
    | 'MDR'
    | 'Monome'
    | 'Nw2s'
    | 'Orthogonal Devices'
    | 'Rabid Elephant'
    | 'Steady State Fate'
    | 'Strymon'
    | 'Submodular'
    | 'Verbos Electronics'
    | 'Xaox Devices';
  name: string;
  firstOwner?: boolean | null;
  boxIncluded?: boolean | null;
  price: number;
  condition?: ('like new' | 'good' | 'used' | 'few scratches' | 'bad') | null;
  rackRash?: boolean | null;
  isSold?: boolean | null;
  comments?: string | null;
  ShipTo?: string | null;
  trackingNumber?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contacts".
 */
export interface Contact {
  id: string;
  name: string;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}