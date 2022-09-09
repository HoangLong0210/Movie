import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import * as yup from "yup";

const WithPhone = () => {
  return (
    <div className="w-[500px] min-h-[100vh-56px] flex justify-center ml-[-16px] mb-[-80px] relative">
      <div className="bg-[#202451] rounded flex p-10 w-full flex-col justify-center items-center absolute top-[200px] left-[800px]">
        <h1 className="text-3xl text-white mb-2">RESET MẬT KHẨU</h1>
        <Formik
          initialValues={{
            username: "",
          }}
          validationSchema={yup.object({
            username: yup
              .string()
              .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, {
                message: "Số điện thoại không đúng định dạng",
              })
              .required("Vui lòng nhập số điện thoại"),
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
                id="username"
                name="username"
                type="text"
                placeholder="Nhập thông tin đăng nhập..."
                label="Tên đăng nhập"
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

export default WithPhone;
