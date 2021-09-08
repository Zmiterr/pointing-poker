import React from 'react';

export type CardType = {
  firstName: string;
  lastName: string;
  deliveryType: string | boolean;
  deliveryDate: string;
  checkbox: boolean;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type cardProps = {
  card: CardType;
};

export type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<CardType[]>>;
};
