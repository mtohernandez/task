import { AuditLog } from "@prisma/client";
import { format } from "date-fns";

import { generateLogMessage } from "@/lib/generate-log-message";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  data: AuditLog;
}

export const ActivityItem = ({
  data
}: Props) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} alt="user image" />
        <AvatarFallback>{data.userName[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground"> 
          <span className="font-semibold lowercase text-neutral-700 mr-2">
            {data.userName}
          </span>
          {generateLogMessage(data)}
        </p>
        <p className="text-xs text-muted-foreground">
          {
            format(new Date(data.createdAt), "MMM dd, yyyy 'at' hh:mm a")
          }
        </p>
      </div>
    </li>
  )
} 