"use client";

import { ActivityItem } from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";
import { AuditLog } from "@prisma/client";
import { ActivityIcon } from "lucide-react";

interface Props {
  items: AuditLog[];
}

export const Activity = ({
  items,
}: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex gap-x-3">

      <ActivityIcon className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <p className="font-semibold text-neutral-700 mb-2">
          Activity
        </p>
      </div>
      </div>
        <ol className="mt-2 space-y-4">
          {
            items.map((item) => (
              <ActivityItem key={item.id} data={item} />
            ))
          }
        </ol>
    </div>
  );
};

Activity.Skeleton = function SkeletonActivity() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-[78px] bg-neutral-200" />
      </div>
    </div>
  )
}