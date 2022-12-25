import type { ApiApplicantAddress } from "./ApiApplicantAddress.interface";

export interface ApiApplicantCompany {
  address: ApiApplicantAddress;
  department: string;
  name: string;
  title: string;
}
