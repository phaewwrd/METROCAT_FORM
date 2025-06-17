"use client";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { personalFormSchema } from "@/schema/form.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar as CalendarIcon, LockKeyhole, FileText, PencilLine } from "lucide-react";

type PersonalFormValues = z.infer<typeof personalFormSchema>;

export default function PersonalForm() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const hdlIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const form = useForm<PersonalFormValues>({
    resolver: zodResolver(personalFormSchema),
    defaultValues: {
      dateOfBirth: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof personalFormSchema>) {
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

  return (
    <div className="grid grid-cols-1 gap-10 m-10 mt-70 justify-center place-items-center">
      <div className="flex flex-col w-1/2  bg-gray-100 p-10 rounded-md shadow-2xl">
        <h1 className="text-3xl font-bold text-center">
          แบบฟอร์มขอข้อมูลทั่วไป
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 m-5  mt-10 items-center ">
        <div className="my-custom-form">
         <PencilLine size={30} />
          <h1 className="text-md font-semibold">วัตถุประสงค์ของแบบฟอร์ม </h1>
          <p className="text-sm">
            แบบฟอร์มนี้จัดทำขึ้นเพื่อใช้ในการเก็บรวบรวมข้อมูลพื้นฐานของผู้ใช้
            เช่น ชื่อ เบอร์ติดต่อ อีเมล หรือข้อมูลที่เกี่ยวข้อง
            โดยมีเป้าหมายเพื่อให้สามารถติดต่อกลับได้อย่างสะดวกและเหมาะสม{" "}
          </p>
        </div>
        <div className="my-custom-form">
          <FileText size={30} />
          <h1 className="text-md font-semibold">การนำข้อมูลไปใช้</h1>
          <p className="text-sm">
            ข้อมูลที่ได้รับจะถูกนำไปใช้สำหรับการวิเคราะห์เบื้องต้น เช่น
            ความสนใจของผู้ใช้ กลุ่มเป้าหมาย หรือความต้องการเฉพาะ
            เพื่อพัฒนาหรือปรับปรุงบริการให้ตรงจุดมากยิ่งขึ้น{" "}
          </p>
        </div>
        <div className="group my-custom-form">
          <LockKeyhole size={30} className="group-hover:text-white"/>
          <h1 className="text-md font-semibold">การรักษาความลับของข้อมูล</h1>
          <p className="text-sm">
            ข้อมูลทั้งหมดที่ผู้ใช้กรอกจะถูกเก็บไว้อย่างปลอดภัย
            และจะไม่ถูกเผยแพร่หรือส่งต่อให้บุคคลภายนอกโดยไม่ได้รับความยินยอม
            ข้อมูลจะถูกใช้เฉพาะในกรอบวัตถุประสงค์ที่ระบุไว้เท่านั้น{" "}
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        {" "}
        แบบฟอร์มนี้จัดทำขึ้นเพื่อรวบรวมข้อมูลพื้นฐานที่จำเป็นในการติดต่อสื่อสาร
        รวมถึงใช้เป็นข้อมูลเบื้องต้นสำหรับการวิเคราะห์หรือให้บริการที่ตรงตามความต้องการของผู้ใช้งาน
        โดยข้อมูลที่ให้จะถูกเก็บรักษาอย่างปลอดภัยและใช้เพื่อวัตถุประสงค์ที่ระบุไว้เท่านั้น
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10 rounded-2xl border border-gray-200 shadow-lg p-8 bg-white dark:bg-gray-700 dark:border-gray-800"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="ชื่อ-นามสกุล *" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="อีเมล *" type="text" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="เบอร์โทรศัพท์ *" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
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
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    className="flex flex-col space-y-1"
                  >
                    {[
                      ["Male", "male"],
                      ["Female", "female"],
                      ["Other", "other"],
                    ].map((option, index) => (
                      <FormItem
                        className="flex items-center space-x-3 space-y-0"
                        key={index}
                      >
                        <FormControl>
                          <RadioGroupItem value={option[1]} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {option[0]}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="hobby"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2 rounded-md border p-4">
                <FormLabel className="text-base">Hobbies & Interests</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-4">
                    {[
                      "กีฬา",
                      "ดนตรี",
                      "ศิลปะ",
                      "อ่านหนังสือ",
                      "ท่องเที่ยว",
                      "เกม",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option}
                          checked={field.value?.includes(option)}
                          onCheckedChange={(checked) => {
                            const updated = checked
                              ? [...(field.value || []), option]
                              : field.value?.filter((v) => v !== option);
                            field.onChange(updated);
                          }}
                        />
                        <label
                          htmlFor={option}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="uploadFile"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Upload File</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    type="file"
                    // onValueChange={setFiles}
                    // dropzoneOptions={dropZoneConfig}
                    className="relative bg-background rounded-lg p-2"
                  ></Input>
                </FormControl>
                <FormDescription>Select a file to upload.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="ประวัติส่วนตัว / อธิบายเพิ่มเติม"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

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

          <Button type="submit" className="w-1/2">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
