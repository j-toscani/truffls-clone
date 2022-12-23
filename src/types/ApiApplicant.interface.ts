import type ApiApplicantBank from "./ApiApplicantBank.interface";
import type ApiApplicantAddress from "./ApiApplicantAddress.interface";
import type ApiApplicantCompany from "./ApiApplicantCompany.interafce";

export default interface ApiApplicant {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: {
    color: string;
    type: string;
  };
  domain: string;
  ip: string;
  address: ApiApplicantAddress;
  macAddress: string;
  university: string;
  bank: ApiApplicantBank;
  company: ApiApplicantCompany;
  ein: string;
  ssn: string;
  userAgent: string;
}
