import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Input from "../input/Input";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[400px] min-h-[100vh-56px] flex justify-center ml-[-16px] mb-[-80px] relative">
      <div className="bg-[#202451] rounded flex p-10 w-full flex-col justify-center items-center absolute top-60 left-[800px]">
        <h1 className="mb-2 text-3xl text-white ">ĐĂNG NHẬP</h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={yup.object({
            username: yup
              .string()
              .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, {
                message: "Số điện thoại không đúng định dạng",
              })
              .required("Vui lòng nhập số điện thoại"),
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
                id="username"
                name="username"
                type="text"
                placeholder="Nhập thông tin đăng nhập..."
                label="Tên đăng nhập"
              ></Input>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Nhập password..."
                label="Mật khẩu"
              ></Input>
              <button
                className="w-full p-5 mt-5 font-semibold text-white bg-red-500 rounded-lg hover:bg-primary"
                onClick={() => navigate("/")}
              >
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin "></div>
                ) : (
                  "ĐĂNG NHẬP"
                )}
              </button>
            </form>
          )}
        </Formik>
        <div className="w-full mt-[-8px] text-[#8ba0b2] text-sm mb-5 text-right">
          <Link to="/forgotpassword">Quên mật khẩu?</Link>
        </div>
        <div className="text-white">
          Bạn chưa có tài khoản?
          <Link to="/signup" className="ml-1 text-[#18c1f0] font-medium">
            ĐĂNG KÝ NGAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
