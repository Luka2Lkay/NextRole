"use client";

import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { useActionState } from "react";
import { use } from "react";

import {
  updateApplication,
  type ApplicationFormState,
} from "@/app/actions/applications";
import { applications } from "@/lib/data/applications";

interface Props {
  params: Promise<{ id: string }>;
}

const initialState: ApplicationFormState = { error: null };

export default function EditApplicationPage({ params }: Props) {
  const { id } = use(params);
  const application = applications.find((item) => item.id === id);
  const updateAction = updateApplication.bind(null, id);
  const [state, formAction, isPending] = useActionState(
    updateAction,
    initialState,
  );

  if (!application) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-xl font-bold text-green-950">Application not found</h1>
          <Link
            href="/dashboard/applications"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-800"
          >
            <ArrowLeft size={17} />
            Back to applications
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-w-0 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href={`/dashboard/applications/${id}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-green-900"
        >
          <ArrowLeft size={17} />
          Back to application
        </Link>

        <form action={formAction} className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-950 sm:text-3xl">Edit Application</h1>
            <p className="mt-2 text-sm text-stone-500">Update this application&apos;s details.</p>
          </div>

          {state.error && (
            <div role="alert" className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {state.error}
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field label="Company" name="company" defaultValue={application.company} required />
            <Field label="Position" name="position" defaultValue={application.position} required />
            <Field label="Location" name="location" defaultValue={application.location} />
            <Field label="Salary" name="salary" defaultValue={application.salary} />
            <Field label="Job URL" name="jobUrl" defaultValue={application.jobUrl} type="url" />
            <Field label="Date Applied" name="appliedAt" defaultValue={application.appliedAt} type="date" />

            <div>
              <label htmlFor="employmentType" className="mb-2 block text-sm font-medium text-green-950">Employment Type</label>
              <select id="employmentType" name="employmentType" defaultValue="FULL_TIME" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm">
                <option value="FULL_TIME">Full-time</option>
                <option value="PART_TIME">Part-time</option>
                <option value="CONTRACT">Contract</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="TEMPORARY">Temporary</option>
                <option value="FREELANCE">Freelance</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="mb-2 block text-sm font-medium text-green-950">Application Status</label>
              <select id="status" name="status" defaultValue={application.status} className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm">
                <option value="SAVED">Saved</option>
                <option value="APPLIED">Applied</option>
                <option value="INTERVIEW">Interview</option>
                <option value="OFFER">Offer</option>
                <option value="REJECTED">Rejected</option>
                <option value="WITHDRAWN">Withdrawn</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="source" className="mb-2 block text-sm font-medium text-green-950">Application Source</label>
              <select id="source" name="source" defaultValue="OTHER" className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm">
                <option value="OTHER">Other</option>
                <option value="LINKEDIN">LinkedIn</option>
                <option value="INDEED">Indeed</option>
                <option value="COMPANY_WEBSITE">Company Website</option>
                <option value="REFERRAL">Referral</option>
                <option value="CAREERS24">Careers24</option>
                <option value="PNET">PNet</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="notes" className="mb-2 block text-sm font-medium text-green-950">Notes</label>
              <textarea id="notes" name="notes" rows={5} defaultValue={application.notes} className="w-full resize-y rounded-lg border border-stone-300 px-4 py-3 text-sm" />
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-stone-100 pt-6 sm:flex-row sm:justify-end">
            <Link href={`/dashboard/applications/${id}`} className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700">
              Cancel
            </Link>
            <button type="submit" disabled={isPending} className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-950 px-5 py-3 text-sm font-semibold text-lime-300 disabled:opacity-60">
              <Save size={17} />
              {isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  defaultValue: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-green-950">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm outline-none focus:border-green-700 focus:ring-2 focus:ring-green-100"
      />
    </div>
  );
}
