import { Metadata } from "next";
import FAQSection from "@/components/FAQAccordion";

export const metadata: Metadata = {
    title: "Vanliga Frågor | Addicted Rehab",
    description: "Svar på vanliga frågor om vår behandling, boende och det praktiska upplägget i Spanien.",
};

export default function FAQPage() {
    return (
        <>
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <div>
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            FAQ
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                            Vanliga frågor <br />
                            <span className="marker-highlight px-2 transform -rotate-1 inline-block">& svar</span>
                        </h1>
                        <p className="text-xl text-brand-gray leading-relaxed max-w-3xl">
                            Här samlar vi svaren på de vanligaste funderingarna kring vår behandling, trygghet och hur allt fungerar praktiskt.
                        </p>
                    </div>
                </div>
            </header>

            <FAQSection />
        </>
    );
}
