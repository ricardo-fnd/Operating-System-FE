type LocalizeProps = {
  key: string;
};

type GetCookiesProps = {
  name: string;
};

type SetCookiesProps = {
  value: string | object | ((prev: object | []) => object | []);
  name: string;
  expires?: number;
};

export type { LocalizeProps, SetCookiesProps, GetCookiesProps };
