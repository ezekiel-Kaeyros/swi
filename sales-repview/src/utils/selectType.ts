export type OptionType = {
  id: number | string;
  name: string;
  extra?: string;
};

export type OptionTypes = OptionType[];
// **************END WITH DUMMY DATA*******************

// **************WITH DB DATA*******************
export type OptionTypedb = {
  _id: number | string;
  name: string;
  extra?: string;
};
