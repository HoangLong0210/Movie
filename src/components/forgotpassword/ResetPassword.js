import { Formik } from "formik";
import React from "react";
import Input from "../input/Input";
import * as yup from "yup";

const ResetPassword = () => {
  return (
    <div className="w-[500px] min-h-[100vh-56px] flex justify-center ml-[-16px] mb-[-80px] relative">
      <div className="bg-[#202451] rounded flex p-10 w-full flex-col justify-center items-center absolute top-[200px] left-[800px]">
        <h1 className="text-3xl text-white mb-2 ">RESET MẬT KHẨU</h1>
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={yup.object({
            password: yup
              .string()
              .min(8, "Mật khẩu ít nhất 8 kí tự")
              .max(50, "Mật khẩu không được dài quá 50 ký tự")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                {
                  message:
                    "Bạn phải có ít nhất 1 ký tự đặc biệt, 1 ký tự in hoa, 1 ký tự thường, 1 số trong mật khẩu",
                }
              )
              .required("Vui lòng nhập mật khẩu"),
            confirmPassword: yup
              .string()
              .required("Vui lòng nhập xác nhận mật khẩu")
              .oneOf([yup.ref("password"), null], "Mật khẩu mới không trùng"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
                id="password"
                name="password"
                type="password"
                placeholder="Nhập mật khẩu..."
                label="Mật khẩu"
              ></Input>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Nhập xác nhận mật khẩu"
                label="Xác nhận mật khẩu"
              ></Input>
              <button className="w-full p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary">
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin "></div>
                ) : (
                  "XÁC NHẬN"
                )}
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
