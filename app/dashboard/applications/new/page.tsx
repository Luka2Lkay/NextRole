
import Link from "next/link";
import { ArrowLeft, Plus } from "lucide-react";

function NewApplicationPage() {
    return (
        <main className="min-w-0 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto w-full max-w-3xl">
                {/* Back navigation */}
                <Link
                    href="/dashboard/applications"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
                >
                    <ArrowLeft size={17} />
                    Back to applications
                </Link>

                {/* Form container */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                            New Application
                        </h1>

                        <p className="mt-2 text-sm text-slate-500 sm:text-base">
                            Add a new job application to your tracker.
                        </p>
                    </div>

                    <form className="space-y-6">
                        {/* Company and Position */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="company"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Company <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="company"
                                    type="text"
                                    placeholder="e.g. Google"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="position"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Position <span className="text-red-500">*</span>
                                </label>

                                <input
                                    id="position"
                                    type="text"
                                    placeholder="e.g. Software Engineer"
                                    required
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>
                        </div>

                        {/* Location and Job URL */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="location"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Location
                                </label>

                                <input
                                    id="location"
                                    type="text"
                                    placeholder="e.g. Cape Town"
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="jobUrl"
                                    className="mb-2 block text-sm font-medium text-slate-900"
                                >
                                    Job URL
                                </label>

                                <input
                                    id="jobUrl"
                                    type="url"
                                    placeholder="https://..."
                                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>
                        </div>

                        {/* Status */}
                        <div>
                            <label
                                htmlFor="status"
                                className="mb-2 block text-sm font-medium text-slate-900"
                            >
                                Application Status
                            </label>

                            <select
                                id="status"
                                defaultValue="SAVED"
                                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            >
                                <option value="SAVED">Saved</option>
                                <option value="APPLIED">Applied</option>
                                <option value="INTERVIEW">Interview</option>
                                <option value="OFFER">Offer</option>
                                <option value="REJECTED">Rejected</option>
                            </select>
                        </div>

                        {/* Notes */}
                        <div>
                            <label
                                htmlFor="notes"
                                className="mb-2 block text-sm font-medium text-slate-900"
                            >
                                Notes
                            </label>

                            <textarea
                                id="notes"
                                rows={5}
                                placeholder="Add notes about this application..."
                                className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                            />
                        </div>

                        {/* Submit */}
                        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                            <Link
                                href="/dashboard/applications"
                                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                            >
                                Cancel
                            </Link>

                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
                            >
                                <Plus size={17} />
                                Add Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default NewApplicationPage;
