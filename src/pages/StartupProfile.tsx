
import { MainNav } from "@/components/MainNav";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStartupData } from "@/components/startup-profile/StartupData";
import { StartupHeader } from "@/components/startup-profile/StartupHeader";
import { OverviewTab } from "@/components/startup-profile/OverviewTab";
import { TeamTab } from "@/components/startup-profile/TeamTab";
import { FinancialsTab } from "@/components/startup-profile/FinancialsTab";
import { DocumentsTab } from "@/components/startup-profile/DocumentsTab";
import { StartupSidebar } from "@/components/startup-profile/StartupSidebar";

const StartupProfile = () => {
  // Use our data utility to get startup data
  const startup = getStartupData();

  return (
    <div className="min-h-screen flex flex-col">
      <MainNav />
      <main className="flex-1 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Main profile content */}
            <div className="flex-1 space-y-6">
              <StartupHeader startup={startup} />

              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="team">Team</TabsTrigger>
                  <TabsTrigger value="financials">Financials</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <OverviewTab startup={startup} />
                </TabsContent>
                
                <TabsContent value="team" className="space-y-4">
                  <TeamTab startup={startup} />
                </TabsContent>
                
                <TabsContent value="financials" className="space-y-4">
                  <FinancialsTab startup={startup} />
                </TabsContent>
                
                <TabsContent value="documents" className="space-y-4">
                  <DocumentsTab />
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right sidebar */}
            <StartupSidebar startup={startup} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StartupProfile;