"use client"

import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";
import { useActionState } from "react";
import { createApplication, type ApplicationFormState } from "@/app/actions/applications";

const initialState: ApplicationFormState = { error: null }

function NewApplicationPage() {

    const [state, formAction, isPending] = useActionState(createApplication, initialState);

    return (
        <main className="min-w-0 bg-stone-50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-3xl">
                <Link
                    href="/dashboard/applications"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-stone-500 transition hover:text-green-900"
                >
                    <ArrowLeft size={17} />
                    Back to applications
                </Link>

                <div className="rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                            New Application
                        </h1>

                        <p className="mt-2 text-sm text-stone-500 sm:text-base">
                            Add a new job application to your tracker.
                        </p>
                    </div>

                    <form action={formAction} className="space-y-6">
                        {state.error && (
                            <div
                                role="alert"
                                className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            >
                                {state.error}
                            </div>
                        )}
                        <div>
                            <h2 className="mb-4 text-base font-semibold text-green-950">
                                Job Information
                            </h2>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-green-950">
                                        Company <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="company"
                                        name="company"
                                        type="text"
                                        placeholder="e.g. Capitec Bank"
                                        required
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="position" className="mb-2 block text-sm font-medium text-green-950">
                                        Position <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="position"
                                        name="position"
                                        type="text"
                                        placeholder="e.g. Software Engineer"
                                        required
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="mb-2 block text-sm font-medium text-green-950">
                                        Location
                                    </label>
                                    <input
                                        id="location"
                                        name="location"
                                        type="text"
                                        placeholder="e.g. Cape Town, Remote"
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="employmentType" className="mb-2 block text-sm font-medium text-green-950">
                                        Employment Type
                                    </label>
                                    <select
                                        id="employmentType"
                                        name="employmentType"
                                        defaultValue="FULL_TIME"
                                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    >
                                        <option value="FULL_TIME">Full-time</option>
                                        <option value="PART_TIME">Part-time</option>
                                        <option value="CONTRACT">Contract</option>
                                        <option value="INTERNSHIP">Internship</option>
                                        <option value="TEMPORARY">Temporary</option>
                                        <option value="FREELANCE">Freelance</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="salary" className="mb-2 block text-sm font-medium text-green-950">
                                        Salary
                                    </label>
                                    <input
                                        id="salary"
                                        name="salary"
                                        type="text"
                                        placeholder="e.g. R25,000 - R35,000 per month"
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="jobUrl" className="mb-2 block text-sm font-medium text-green-950">
                                        Job URL
                                    </label>
                                    <input
                                        id="jobUrl"
                                        name="jobUrl"
                                        type="url"
                                        placeholder="https://..."
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-stone-100 pt-6">
                            <h2 className="mb-4 text-base font-semibold text-green-950">
                                Application Tracking
                            </h2>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="status" className="mb-2 block text-sm font-medium text-green-950">
                                        Application Status
                                    </label>
                                    <select
                                        id="status"
                                        name="status"
                                        defaultValue="SAVED"
                                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    >
                                        <option value="SAVED">Saved</option>
                                        <option value="APPLIED">Applied</option>
                                        <option value="INTERVIEW">Interview</option>
                                        <option value="OFFER">Offer</option>
                                        <option value="REJECTED">Rejected</option>
                                        <option value="WITHDRAWN">Withdrawn</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="appliedAt" className="mb-2 block text-sm font-medium text-green-950">
                                        Date Applied
                                    </label>
                                    <input
                                        id="appliedAt"
                                        name="appliedAt"
                                        type="date"
                                        className="w-full rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    />
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="source" className="mb-2 block text-sm font-medium text-green-950">
                                        Application Source
                                    </label>
                                    <select
                                        id="source"
                                        name="source"
                                        defaultValue="OTHER"
                                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                    >
                                        <option value="OTHER">Other</option>
                                        <option value="LINKEDIN">LinkedIn</option>
                                        <option value="INDEED">Indeed</option>
                                        <option value="COMPANY_WEBSITE">Company Website</option>
                                        <option value="REFERRAL">Referral</option>
                                        <option value="CAREERS24">Careers24</option>
                                        <option value="PNET">PNet</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-stone-100 pt-6">
                            <h2 className="mb-4 text-base font-semibold text-green-950">
                                Additional Information
                            </h2>

                            <div>
                                <label htmlFor="notes" className="mb-2 block text-sm font-medium text-green-950">
                                    Notes
                                </label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    rows={5}
                                    placeholder="Add notes about this application..."
                                    className="w-full resize-y rounded-lg border border-stone-300 px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-green-700 focus:ring-2 focus:ring-green-100"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-3 border-t border-stone-100 pt-6 sm:flex-row sm:justify-end">
                            <Link
                                href="/dashboard/applications"
                                className="inline-flex w-full items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100 sm:w-auto"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-950 px-5 py-3 text-sm font-semibold text-lime-300 transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                            >
                                <Plus size={17} />
                                {isPending ? "Saving..." : "Add Application"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default NewApplicationPage;
