import { z } from "zod";

const dateSchema = z
  .string()
  .optional()
  .refine((value) => {
    if (!value) return true;

    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

    const date = new Date(`${value}T00:00:00.000Z`);

    return (
      !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
    );
  }, "Please enter a valid application date");

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
  appliedAt: dateSchema,
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
