import Image from "next/image";

import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = async () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[500px] bg-[#2d2b42] py-20 px-8 text-center rounded-xl">
        <form action={handleGithubLogin}>
          <button className="w-full bg-[#fff] text-[#000] cursor-pointer font-bold rounded-xl p-2 mb-12 border border-white">
            <div className="flex items-center justify-center gap-5">
              <Image
                src="/github.png"
                alt="github image"
                width={30}
                height={30}
              />
              <span>Login with Github</span>
            </div>
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
