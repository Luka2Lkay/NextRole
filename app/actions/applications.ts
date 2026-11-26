"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { db } from "@/prisma/db";
import { applicationSchema } from "@/lib/validations/application";

export type ApplicationFormState = {
  error: string | null;
};

export async function createApplication(
  _prevState: ApplicationFormState,
  formData: FormData,
): Promise<ApplicationFormState> {
  const rawData = {
    company: formData.get("company"),
    position: formData.get("position"),
    location: formData.get("location") || "",
    employmentType: formData.get("employmentType") || "FULL_TIME",
    salary: formData.get("salary") || "",
    jobUrl: formData.get("jobUrl") || "",
    status: formData.get("status") || "SAVED",
    appliedAt: formData.get("appliedAt") || "",
    source: formData.get("source") || "OTHER",
    notes: formData.get("notes") || "",
  };

  const validation = applicationSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      error:
        validation.error.issues[0]?.message ?? "Please check your form fields.",
    };
  }

  const data = validation.data;

  console.log(data);

  try {
    await db.orm.public.Application.create({
      company: data.company,
      position: data.position,
      location: data.location || null,
      employmentType: data.employmentType,
      salary: data.salary || null,
      jobUrl: data.jobUrl || null,
      status: data.status,
      appliedAt: data.appliedAt
        ? new Date(`${data.appliedAt}T00:00:00.000Z`)
        : null,
      source: data.source,
      notes: data.notes || null,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error("Failed to create application:", error);

    return {
      error:
        "Something went wrong while saving your application. Please try again.",
    };
  }

  revalidatePath("/dashboard");
  revalidatePath("/dashboard/applications");

  redirect("/dashboard/applications");
}
