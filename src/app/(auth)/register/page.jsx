import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[#2d2b42] py-20 px-8 text-center rounded-xl">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
