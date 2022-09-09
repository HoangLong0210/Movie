import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import * as yup from "yup";

const WithEmail = () => {
  return (
    <div className="w-[500px] min-h-[100vh-56px] flex justify-center ml-[-16px] mb-[-80px] relative">
      <div className="bg-[#202451] rounded flex p-10 w-full flex-col justify-center items-center absolute top-[200px] left-[800px]">
        <h1 className="text-3xl text-white mb-2">RESET MẬT KHẨU</h1>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={yup.object({
            email: yup
              .string()
              .email("Vui lòng nhập địa chỉ email hợp lệ")
              .required("Vui lòng nhập email"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="max-w-[300px] mx-auto my-10"
              autoComplete="off"
            >
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Nhập email..."
                label="Email"
              ></Input>
              <button className="w-full p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary">
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin "></div>
                ) : (
                  "GỬI MÃ OTP"
                )}
              </button>
            </form>
          )}
        </Formik>
        <h2 className="text-2xl text-white mb-2">OTP:</h2>
        <input className="p-2 text-black transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500 w-[300px]"></input>
        <button className="w-[300px] p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary">
          Xác nhận OTP
        </button>
      </div>
    </div>
  );
};

export default WithEmail;
