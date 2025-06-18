"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { saTisformSchema } from "@/schema/form.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Select,
} from "@/components/ui/select";

import { Calendar as CalendarIcon, FormInputIcon } from "lucide-react";
import { PlusIcon } from "lucide-react";
import SatisFormDetails from "./satic-details";

type SaTisFormValues = z.infer<typeof saTisformSchema>;

export default function SatisForm() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const form = useForm<SaTisFormValues>({
    resolver: zodResolver(saTisformSchema),
    defaultValues: {
      date: new Date(),
      moresuggest: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "moresuggest" as string,
  });

  function onSubmit(values: z.infer<typeof saTisformSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
      router.push("/");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  const hdlIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-1 gap-10 m-10  justify-center place-items-center">

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full mx-auto py-10 rounded-2xl border border-gray-200 shadow-lg p-8 bg-white dark:bg-gray-700 dark:border-gray-800 "
        >
          <h1 className="text-2xl font-bold text-start">แบบฟอร์มสำรวจความพึงพอใจบริการ</h1>
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating Services</FormLabel>
                <Select
                  value={field.value?.[0] ?? ""}
                  onValueChange={(val) => field.onChange([val])}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="คุณภาพบริการ" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {[
                      ["ดีเยี่ยม", "Excellent"],
                      ["ดี", "Good"],
                      ["ปานกลาง", "Standard"],
                    ].map(([label, value]) => (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-1/2 pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="suggest"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="ข้อเสนอแนะโดยรวม"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormLabel>Suggestions (optional)</FormLabel>
          {fields.map((field, index) => (
            <div className="flex items-center gap-5 " key={field.id}>
              <FormField
                key={field.id}
                name={`moresuggest.${index}`}
                render={({ field }) => (
                  <FormItem className="grow ">
                    <FormLabel>{`#${index + 1}`}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="ข้อเสนอแนะในการปรับปรุง"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="flex-none"
                onClick={() => remove(index)}
                variant="destructive"
                type="button"
              >
                Delete
              </Button>
            </div>
          ))}
          <Button
            type="button"
            variant="outline"
            onClick={() => append("")}
            className="mt-2"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            เพิ่มช่องข้อเสนอแนะ
          </Button>

          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2 rounded-md border p-4">
                <FormLabel onClick={hdlIsOpen} className="cursor-pointer">
                  More Details (Click to expand)
                </FormLabel>
                <FormControl>
                  {isOpen && (
                    <Textarea
                      placeholder="รายละเอียดเพิ่มเติม"
                      className="resize-none"
                      {...field}
                    />
                  )}
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-1/2 text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
