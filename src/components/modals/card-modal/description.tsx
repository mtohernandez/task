import { toast } from "sonner";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { ElementRef, useRef, useState } from "react";
import { AlignLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import { CardWithList } from "@/types";
import { updateCard } from "@/actions/update-card";
import { useAction } from "@/hooks/use-action";

import { Skeleton } from "@/components/ui/skeleton";
import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";

interface Props {
  data: CardWithList;
}

export const Description = ({ data }: Props) => {
  const queryClient = useQueryClient();
  const params = useParams();
  const [isEditing, setIsEditing] = useState(false);

  const textareaRef = useRef<ElementRef<"textarea">>(null);
  const formRef = useRef<ElementRef<"form">>(null);

  const { execute, fieldErrors } = useAction(updateCard, {
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["card", data.id],
      });

      queryClient.invalidateQueries({
        queryKey: ["card-logs", data.id],
      });
      
      toast.success(`Card ${data.title} updated!`);
      disableEditing();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    }
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const onSubmit = (formData: FormData) => {
    const description = formData.get("description") as string;
    const boardId = params.boardId as string;

    execute({
      id: data.id,
      description,
      boardId,
    });
  };

  return (
    <div className="flex flex-col items-start w-full">
      <div className="flex gap-x-3">
        <AlignLeft className="h-5 w-5 mt-0.5 text-neutral-700" />
        <div className="w-full">
          <p className="font-semibold text-neutral-700 mb-2">Description</p>
        </div>
      </div>
      {isEditing ? (
        <form ref={formRef} action={onSubmit} className="space-y-2 w-full">
          <FormTextarea
            ref={textareaRef}
            id="description"
            className="w-full min-h-[72px]"
            placeholder="Add a more detailed description..."
            defaultValue={data.description || undefined}
            errors={fieldErrors}
          />

          <div className="flex items-center gap-x-2">
            <FormSubmit className="flex">Save</FormSubmit>
            <Button
              type="button"
              onClick={disableEditing}
              size="sm"
              variant="ghost"
            >
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <div
          onClick={enableEditing}
          role="button"
          className="min-h-[72px] bg-neutral-200 text-sm font-medium py-3 px-3.5 rounded-md w-full"
        >
          {data.description || "Add a more detailed description..."}
        </div>
      )}
    </div>
  );
};

Description.Skeleton = function SkeletonDescription() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-[78px] bg-neutral-200" />
      </div>
    </div>
  );
};
