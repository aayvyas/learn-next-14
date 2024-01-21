import { LoginForm } from "./login-form";

export const LoginPage = () => {
  return (
    <main className="backdrop-blur-md backdrop-brightness-150 md:backdrop-filter-none flex flex-row justify-center">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
