import type ApiApplicantAddress from "./ApiApplicantAddress.interface";

export default interface ApiApplicantCompany {
  address: ApiApplicantAddress;
  department: string;
  name: string;
  title: string;
}
