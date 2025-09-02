'use client';
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Label } from "../../components/ui/Label";
import { Textarea } from "../../components/ui/Textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
}

interface FormState {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "+91 6352225604",
  email = "dhrupal.kagathara@gmail.com",
}: Contact2Props) => {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [K in keyof FormState]?: boolean }>({});
  const [shake, setShake] = useState<{ [K in keyof FormState]?: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [popupType, setPopupType] = useState<"success" | "error" | null>(null);

  // Simple validation
  const validate = (values: FormState): FormErrors => {
    const err: FormErrors = {};
    if (!values.firstname.trim()) err.firstname = "First name is required";
    if (!values.lastname.trim()) err.lastname = "Last name is required";
    if (!values.email.trim()) err.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) err.email = "Invalid email";
    if (!values.subject.trim()) err.subject = "Subject is required";
    if (!values.message.trim()) err.message = "Message is required";
    return err;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors(validate({ ...form, [id]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({
      firstname: true,
      lastname: true,
      email: true,
      subject: true,
      message: true,
    });

    const shakeFields: { [K in keyof FormState]?: boolean } = {};
    Object.keys(validationErrors).forEach((key) => {
      shakeFields[key as keyof FormState] = true;
      setTimeout(() => {
        setShake((prev) => ({ ...prev, [key]: false }));
      }, 400);
    });
    setShake(shakeFields);

    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",  // replace with EmailJS Service ID
          "YOUR_TEMPLATE_ID", // replace with EmailJS Template ID
          {
            firstname: form.firstname,
            lastname: form.lastname,
            email: form.email,
            subject: form.subject,
            message: form.message,
          },
          "YOUR_PUBLIC_KEY"   // replace with EmailJS Public Key
        );

        setPopupType("success");
        setPopupMessage("✅ Thank you! Your message has been sent successfully.");

        setForm({ firstname: "", lastname: "", email: "", subject: "", message: "" });
        setTouched({});
        setErrors({});
      } catch (error) {
        setPopupType("error");
        setPopupMessage("❌ Something went wrong. Please try again later.");
        console.error("EmailJS error:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getInputClass = (field: keyof FormState) =>
    `transition-all duration-150 ${errors[field] && touched[field] ? "border-red-500" : "border-gray-300"} ${shake[field] ? "animate-shake" : ""}`;

  return (
    <section className="py-32 relative">
      {/* Popup */}
      {popupMessage && (
        <div className="fixed inset-0 bg-black/50 text-black flex items-center justify-center z-50">
          <div className={`bg-white rounded-lg shadow-lg p-6 max-w-sm text-center ${popupType === "success" ? "border-t-4 border-green-500" : "border-t-4 border-red-500"}`}>
            <p className="mb-4">{popupMessage}</p>
            <Button variant="secondary" className="border-2" onClick={() => setPopupMessage(null)}>Close</Button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form
            className="w-[90vw] sm:w-full mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10 "
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={form.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("firstname")}
                  aria-invalid={!!errors.firstname}
                  aria-describedby="firstname-error"
                />
                {errors.firstname && touched.firstname && (
                  <span id="firstname-error" className="text-red-500 text-xs animate-fade-in">
                    {errors.firstname}
                  </span>
                )}
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={form.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("lastname")}
                  aria-invalid={!!errors.lastname}
                  aria-describedby="lastname-error"
                />
                {errors.lastname && touched.lastname && (
                  <span id="lastname-error" className="text-red-500 text-xs animate-fade-in">
                    {errors.lastname}
                  </span>
                )}
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("email")}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
              />
              {errors.email && touched.email && (
                <span id="email-error" className="text-red-500 text-xs animate-fade-in">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("subject")}
                aria-invalid={!!errors.subject}
                aria-describedby="subject-error"
              />
              {errors.subject && touched.subject && (
                <span id="subject-error" className="text-red-500 text-xs animate-fade-in">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("message")}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
              />
              {errors.message && touched.message && (
                <span id="message-error" className="text-red-500 text-xs animate-fade-in">
                  {errors.message}
                </span>
              )}
            </div>
            <Button className="w-full mx-auto border-2" variant="secondary" type="submit">
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
      {/* Micro animation styles */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-8px); }
            40% { transform: translateX(8px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
            100% { transform: translateX(0); }
          }
          .animate-shake {
            animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.3s ease;
          }
        `}
      </style>
    </section>
  );
};