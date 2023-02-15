export type Iletter = { [key: string]: string }
export type Iletters = Iletter[];

export type IPopularSonnikName = string;
export type IPopularSonnikNames = string[];

export type ISonnik = {
  _id: string,
  letter: string,
  letterAlias: string,
  name: string,
  nameAlias: string,
  sonnikName: string,
  sonnikNameAlias: string,
  desc: string[]
}

export type ISonniks = ISonnik[];

export interface IWord {
  "_id": string,
  "nameAlias": string,
  "count": number
}

export type IWords = IWord[];