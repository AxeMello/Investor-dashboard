
import { MainNav } from "@/components/MainNav";
import { InvestorDashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";

const InvestorDashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1">
        <InvestorDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default InvestorDashboardPage;
