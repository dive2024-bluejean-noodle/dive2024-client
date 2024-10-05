"use client";

import { TStudentStatus } from "@/type/user";
import { useState } from "react";
import { postSignupUser } from "@/service/user";
import { useRouter } from "next/navigation";

export default function SignupRegisterPage({
  searchParams,
}: {
  searchParams: { status: TStudentStatus };
}) {
  const studentStatus = searchParams.status || "none";
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    local: null,
    id_photo: null,
    is_active: true,
    language: studentStatus === "international" ? "English" : "Korean",
    nationality: studentStatus === "international" ? "USA" : "Korea",
    visa_number: studentStatus === "international" ? "" : "000000000",
    mento: studentStatus !== "international",
    age: 0,
    sex: "Male", // 기본값
  });

  return (
    <main className={"text-white font-bold p-24 text-18"}>
      <UserForm formData={formData} setFormData={setFormData} />
    </main>
  );
}

function UserForm({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: any;
}) {
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // @ts-ignore
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await postSignupUser(formData);
    if (res.data.result) {
      alert("Success Signup");
      router.push("?step=login");
    } else {
      alert(res.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex h-[calc(100vh-48px)] flex-col gap-y-8 overflow-y-auto text-white">
      <div className="flex space-x-8">
        <div className="w-1/2">
          <label htmlFor="first_name" className="block ">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="last_name" className="block ">
            Last Name
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="username" className="block ">
          Nickname
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block ">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block ">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="language" className="block ">
          Language
        </label>
        <select
          name="language"
          id="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required>
          <option value="Korean">Korean</option>
          <option value="English">English</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>

      <div>
        <label htmlFor="nationality" className="block ">
          Nationality
        </label>
        <input
          type="text"
          name="nationality"
          id="nationality"
          value={formData.nationality}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="visa_number" className="block ">
          Visa Number
        </label>
        <input
          type="text"
          name="visa_number"
          id="visa_number"
          value={formData.visa_number}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="age" className="block ">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16"
          required
        />
      </div>

      <div>
        <label htmlFor="sex" className=" ">
          Sex
        </label>
        <select
          name="sex"
          id="sex"
          value={formData.sex}
          onChange={handleChange}
          className="w-full px-8 py-2  rounded-8 focus:outline-none text-black text-16">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button
        type="submit"
        className={`w-full rounded-8 flex items-center justify-center text-48 text-white font-hsan-tokki mt-auto`}>
        Submit
      </button>
    </form>
  );
}
