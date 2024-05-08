// **************WITH DUMMY DATA*******************
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

export type OptionTypedbs = OptionTypedb[];
// **************END WITH DB DATA*******************

export type SelectFieldProps = {
  title?: string;
  name: string;
  options: OptionType[];
  register: any;
};
