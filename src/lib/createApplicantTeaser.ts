import type { ApiApplicant } from "@/types/ApiApplicant.interface";

export default function createApplicantTeaser(applicant: ApiApplicant) {
  return {
    fullName: `${applicant.firstName} ${applicant.lastName}`,
    jobDescription: applicant.company.title,
    image: applicant.image,
  };
}
