export interface Hotel {
  id?: string;
  name: string;
  address: string;
  phone: number;
  email: string;
  website: string;
  description: string;
  image: string;
  logo: {
    logoname: string;
    logodescription: string;
  };
  icon: {
    iconname: string;
    icondescription: string;
  };
}
