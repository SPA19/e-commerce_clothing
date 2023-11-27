import { z } from "zod";

export const createProductSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .optional(),
  ref: z.string({
    required_error: "Ref is required",
  }),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive("Price must be positive")
    .int(),
  size: z.string({
    required_error: "Size is required",
  }).max(3, {
    message: "Maximum length of the size field should not exceed 3 characters.",
  }),
  color: z.string({
    required_error: "Color is required",
  }),
  category: z.string({
    required_error: "Category is required",
  })
});
