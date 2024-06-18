import { z } from "zod";

export const CreateCardSchema = z.object({
  title: z.string({
    required_error: "Title is required",
    invalid_type_error: "Title is required",
  }).min(3, {
    message: "Title must be at least 3 characters",
  }),
  boardId: z.string(),
  listId: z.string(),
});