import { z } from "zod";

export const applicationSchema = z.object({
  company: z.string().trim().min(1, { message: "Company name is required" }),
  position: z.string().trim().min(1, { message: "Position is required" }),
  location: z.string().trim().optional(),
  employmentType: z.enum([
    "FULL_TIME",
    "PART_TIME",
    "CONTRACT",
    "INTERNSHIP",
    "TEMPORARY",
    "FREELANCE",
  ]),
  salary: z.string().trim().optional(),
  jobUrl: z
    .union([z.literal(""), z.url("please enter a valid url")])
    .optional(),
  status: z.enum([
    "SAVED",
    "APPLIED",
    "INTERVIEW",
    "OFFER",
    "REJECTED",
    "WITHDRAWN",
  ]),
  appliedAt: z.string().optional(),
  source: z.enum([
    "LINKEDIN",
    "INDEED",
    "COMPANY_WEBSITE",
    "REFERRAL",
    "CAREERS24",
    "PNET",
    "OTHER",
  ]),
  notes: z.string().trim().optional(),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
