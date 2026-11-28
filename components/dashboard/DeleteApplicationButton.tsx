"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";

import { deleteApplication } from "@/app/actions/applications";

interface Props {
  applicationId: string;
  applicationName: string;
}

export default function DeleteApplicationButton({
  applicationId,
  applicationName,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (!window.confirm(`Delete ${applicationName}? This action cannot be undone.`)) {
      return;
    }

    startTransition(() => {
      deleteApplication(applicationId);
    });
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      aria-label={`Delete ${applicationName}`}
      title="Delete application"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stone-200 bg-white text-red-500 shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Trash2 size={16} />
    </button>
  );
}
