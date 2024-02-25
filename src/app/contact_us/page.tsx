"use client"
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Textarea } from "@/components/ui/textarea"
 

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const FormSchema = z.object({
  fullName: z.string().min(10,{
    message: "Full Name Required",
  }),
  email: z.string().email("Email required"),
  message:z.string().min(4,{
    message: "Message is required",
  }),
});


function ContactUs() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  })
  console.log("🚀 ~ ContactUs ~ form:", form)

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }
 
  return (
<div className="flex items-center justify-center p-12 mt-10 bg-gray-900">
  <div className="mx-auto w-full max-w-[550px]">
  <h1 className="text-center text-4xl font-extrabold text-white hover:text-blue-400 cursor-pointer mt-10">Contact Us</h1>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-10">
      <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} className="ronded-sm"/>
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
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" typeof={"email"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter your message" typeof={"message"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="text-center text-white bg-slate-400 hover:bg-blue-400 text-1xl">Submit</Button>
    </form>
    </Form>
  </div>
</div>
  )
}

export default ContactUs
