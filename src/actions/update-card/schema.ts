import { z } from "zod";

export const UpdateCardSchema = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        required_error: "Description  is required",
        invalid_type_error: "Description  is required",
      })
      .min(3, {
        message: "Description is too short",
      })
  ),
  title: z.optional(
    z
      .string({
        required_error: "Title is required",
        invalid_type_error: "Title is required",
      })
      .min(3, {
        message: "Title must be at least 3 characters",
      })
  ),
  id: z.string(),
});
