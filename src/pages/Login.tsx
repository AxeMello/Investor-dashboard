
import { MainNav } from "@/components/MainNav";
import { LoginForm } from "@/components/AuthForms";
import { Footer } from "@/components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 flex items-center justify-center">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
