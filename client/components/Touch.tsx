"use client";
import { useRef, useState } from "react";
import { z } from "zod";
import LabelInput from "./LabelInput";
import { LuLoader2 } from "react-icons/lu";
import toast, { Toaster } from "react-hot-toast";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  companyName: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().min(1, "Message is required"),
});

export default function Touch() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState<String>("");
  const [loading,setLoading]=useState<Boolean>(false);
  const [submitted, setSubmitted] = useState<Boolean>(false);

  // Create a ref to the top of the component
  const topRef = useRef<HTMLDivElement>(null);


  // Function to handle changes to form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error message when user starts editing
    setError("");
  };

  const handleMailSent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data using Zod schema
    const result = schema.safeParse(formState);

    if (!result.success) {
      // If validation fails, set the topmost error message
      const topError = result.error.errors[0]?.message || "Validation error";
      setError(topError);
      return;
    }
    setError("");
    setSubmitted(true);
    toast.success("Your Email has been Received!!");

     // Scroll to the top of the page
     if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset form fields or perform other actions as needed
    setFormState({
      firstName: "",
      lastName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="bg-white px-6 py-12 sm:py-12 lg:px-8">
      <div ref={topRef} className="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Let's Talk
        </h1>
        <p className="mt-3 text-gray-600 text-md">
          Product to Sell? Feature request? Suggestion? or maybe you'd like to
          be our critic! Here's a form just for that.
        </p>
      </div>
      <form className="mx-auto mt-12 max-w-xl sm:mt-12">
      {submitted && <div className="text-balck my-6 text-green-700 text-center">Email Received! We will get back to you soon.</div>}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <LabelInput
              name="firstName"
              label="First name"
              type="text"
              placeholder="Your First Name"
              onChange={handleChange}
              value={formState.firstName}
            />
          </div>
          <div>
            <LabelInput
              name="lastName"
              label="Last name"
              type="text"
              placeholder="Your Last Name"
              onChange={handleChange}
              value={formState.lastName}
            />
          </div>
          <div className="sm:col-span-2">
            <LabelInput
              name="companyName"
              label="Company (optional)"
              type="text"
              placeholder="Your Company Name"
              onChange={handleChange}
              value={formState.companyName}
            />
          </div>
          <div className="sm:col-span-2">
            <LabelInput
              name="email"
              label="Email"
              type="email"
              placeholder="Your Email Address"
              onChange={handleChange}
              value={formState.email}
            />
          </div>
          <div className="sm:col-span-2">
            <LabelInput
              name="phone"
              label="Phone Number"
              type="tel"
              placeholder="Your Phone Number (10 Digit)"
              onChange={handleChange}
              value={formState.phone}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                onChange={handleChange}
                rows={4}
                placeholder="Share your thoughts..."
                className="block w-full rounded-md outline-none border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-gray-600 sm:text-sm sm:leading-6"
                value={formState.message}
              />
            </div>
          </div>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}
        <div className="mt-10">
          <button
            onClick={handleMailSent}
            className={`bg-indigo-600 hover:bg-indigo-800 rounded-md text-white py-2 w-full inline-flex items-center justify-center ${loading ? "cursor-not-allowed" : ""}`}>
            {!loading ? "Submit" : <LuLoader2 size={20} className="animate-spin rotate-180" />}
          </button>
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}