// import styles from "./index.module.scss";
import { useNavigate } from "react-router";
import { FormEvent, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { getUser, login, logout } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/components/Spinner";
import { NavLink } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { MdKey, MdVisibilityOff, MdVisibility } from "react-icons/md";
import img2 from "./../../images/shopping-bag_7610669.png";

const LoginPage = () => {
  const { user, token, isLoading } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user === null && token) {
      const userId = localStorage.getItem("user");
      dispatch(getUser(Number(userId)));
    }
  }, [token, user, dispatch]);

  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await dispatch(login({ email, password }));
    if (user && token) {
      navigate("/");
      console.log(user);
    }
  };

  const logoutHandler = async () => {
    await dispatch(logout());
    navigate("/");
  };

  if (isLoading) return <Spinner />;

  return (
    <section className="mt-28 py-10 px-4">
      <div className={`py-20 ${styles.maincomponent}`}>
        <div className="shadow-lg rounded-xl max-w-2xl bg-white mx-auto lg:p-12 lg:py-20 md:p-12 md:py-20 p-6 py-10">
          <div className="flex items-center justify-center">
            <img className="w-20 me-3" src={img2} alt="Flowy" />
            <span className="text-5xl font-bold">Flowy</span>
          </div>
          <div className="text-4xl font-bold text-center pt-10">Login Into Account</div>
          <div className="text-center font-semibold pt-3 text-2xl text-gray-600">Use your credentials to access your account.</div>
          <form onSubmit={formSubmitHandler}>
            <div className="form-group mt-8">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <span className="text-gray-500 sm:text-sm">
                    <SiGmail className="text-xl" />
                  </span>
                </div>
                <input
                  type="email"
                  name="loginEmail"
                  id="loginEmail"
                  className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-5">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                  <span className="text-gray-500 sm:text-sm">
                    <MdKey className="text-2xl" />
                  </span>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="loginPassword"
                  id="loginPassword"
                  className="block w-full bg-[--main-color] text-xl rounded-full border-0 py-4 ps-14 text-gray-900 font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="Enter Your Password"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-5 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <MdVisibility className="text-2xl" /> : <MdVisibilityOff className="text-2xl" />}
                </span>
              </div>
            </div>
            <div className="text-end pt-4">
              <NavLink
                to="/forgot-password"
                className="hover:text-gray-500"
              >
                Forgot Password?
              </NavLink>
            </div>
            <div className="CTA text-center pt-5 ">
                    <input
                      className="py-3 px-16 rounded-full font-semibold hover:bg-white border-2 border-black hover:text-black bg-black text-white hover:cursor-pointer"
                      type="submit"
                      value={isLoading ? "Loading..." : "Login"}
                      disabled={isLoading}
                    />
                    <div className=" pt-10 flex justify-center">
                      Don't have an account?&nbsp;
                      <NavLink to={`/register`}
                        className="hover:cursor-pointer hover:text-gray-500"
                      >
                        Register Here
                      </NavLink>
                    </div>
                  </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
