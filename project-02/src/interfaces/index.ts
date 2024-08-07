import { ProductNameTypes } from '../types';

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: ProductNameTypes;
  label: string;
  type: string;
}

export interface IErrorObj {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
