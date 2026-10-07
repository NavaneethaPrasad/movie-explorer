import HelpHero from "@/components/help/HelpHero";
import HelpFeatures from "@/components/help/HelpFeatures";
import FAQSection from "@/components/help/FAQSection";
import ContactSection from "@/components/help/ContactSection";

export default function HelpPage() {
  return (
    <main className="space-y-12">
      <HelpHero />

      <HelpFeatures />

      <FAQSection />

      <ContactSection />
    </main>
  );
}