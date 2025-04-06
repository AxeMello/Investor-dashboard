
import { MainNav } from "@/components/MainNav";
import { RegisterForm } from "@/components/AuthForms";
import { Footer } from "@/components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 flex items-center justify-center">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
};

export default Register;
