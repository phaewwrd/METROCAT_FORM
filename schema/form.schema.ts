import { z } from 'zod';


export const saTisformSchema = z.object({
  service: z.array(z.string()).optional(),
  email: z.string().min(1),
  phone: z.string().min(10),
  date: z.coerce.date(),
  gender: z.string(),
  hobby: z.array(z.string()).optional(),
  uploadFile: z.string().optional(),
  suggest: z.string().optional(),
  moresuggest: z.array(z.string()).optional(),
  details: z.string().optional(),
});


export const personalFormSchema = z.object({
  name: z.string().min(1).min(3),
  email: z.string().min(1),
  phone: z.string().min(10),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  hobby: z.array(z.string()).optional(),
  uploadFile: z.string().optional(),
  bio: z.string().optional(),
    details: z.string().optional(),

});