
import { MainNav } from "@/components/MainNav";
import { EntrepreneurDashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

const EntrepreneurDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <EntrepreneurDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default EntrepreneurDashboardPage;
