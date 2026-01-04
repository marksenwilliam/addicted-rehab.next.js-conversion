import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Läs om hur Addicted Rehab hanterar dina personuppgifter och skyddar din integritet enligt GDPR.",
};

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-brand-navy mb-8">
          Integritetspolicy
        </h1>

        <div className="prose prose-lg max-w-none text-brand-navy/80">
          <p className="text-sm text-brand-navy/60 mb-8">
            Senast uppdaterad: {new Date().toLocaleDateString("sv-SE")}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              1. Inledning
            </h2>
            <p>
              Addicted Rehab värnar om din personliga integritet. Denna
              integritetspolicy förklarar hur vi samlar in, använder och skyddar
              dina personuppgifter när du besöker vår webbplats eller använder
              våra tjänster.
            </p>
            <p>
              Vi följer EU:s dataskyddsförordning (GDPR) och svensk
              dataskyddslagstiftning för att säkerställa att dina uppgifter
              hanteras på ett säkert och transparent sätt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              2. Personuppgiftsansvarig
            </h2>
            <p>
              Addicted Rehab är personuppgiftsansvarig för behandlingen av dina
              personuppgifter. Du kan kontakta oss via:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Telefon: 0732-52 03 58</li>
              <li>E-post: info@addicted-rehab.se</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              3. Vilka uppgifter samlar vi in?
            </h2>
            <p>Vi kan samla in följande typer av personuppgifter:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Kontaktuppgifter:</strong> Namn, e-postadress och
                telefonnummer när du fyller i vårt kontaktformulär
              </li>
              <li>
                <strong>Tekniska uppgifter:</strong> IP-adress, webbläsartyp,
                enhetstyp och besökstid via cookies
              </li>
              <li>
                <strong>Kommunikation:</strong> Information du delar med oss via
                e-post eller telefon
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              4. Hur använder vi dina uppgifter?
            </h2>
            <p>Vi använder dina personuppgifter för att:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Svara på dina förfrågningar och ge dig information</li>
              <li>Förbättra vår webbplats och våra tjänster</li>
              <li>Analysera besökstrafik (anonymiserat)</li>
              <li>Uppfylla rättsliga skyldigheter</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              5. Rättslig grund
            </h2>
            <p>Vi behandlar dina personuppgifter baserat på:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Samtycke:</strong> När du skickar ett kontaktformulär
                eller accepterar cookies
              </li>
              <li>
                <strong>Berättigat intresse:</strong> För att förbättra våra
                tjänster och webbplatsens funktionalitet
              </li>
              <li>
                <strong>Rättslig förpliktelse:</strong> När lagen kräver det
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              6. Delning av uppgifter
            </h2>
            <p>
              Vi säljer aldrig dina personuppgifter. Vi kan dela uppgifter med:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Tjänsteleverantörer som hjälper oss driva webbplatsen (t.ex.
                webbhotell)
              </li>
              <li>Myndigheter om lagen kräver det</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              7. Lagring och säkerhet
            </h2>
            <p>
              Vi lagrar dina personuppgifter så länge det är nödvändigt för de
              ändamål de samlades in, eller så länge lagen kräver. Vi använder
              tekniska och organisatoriska säkerhetsåtgärder för att skydda dina
              uppgifter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              8. Dina rättigheter
            </h2>
            <p>Enligt GDPR har du rätt att:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Få tillgång:</strong> Begära information om vilka
                uppgifter vi har om dig
              </li>
              <li>
                <strong>Rätta:</strong> Begära rättelse av felaktiga uppgifter
              </li>
              <li>
                <strong>Radera:</strong> Begära att vi raderar dina uppgifter
              </li>
              <li>
                <strong>Begränsa:</strong> Begära begränsning av behandlingen
              </li>
              <li>
                <strong>Flytta:</strong> Få dina uppgifter i ett maskinläsbart
                format
              </li>
              <li>
                <strong>Invända:</strong> Invända mot viss typ av behandling
              </li>
            </ul>
            <p className="mt-4">
              För att utöva dina rättigheter, kontakta oss på
              info@addicted-rehab.se.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              9. Cookies
            </h2>
            <p>
              Vår webbplats använder cookies för att förbättra din upplevelse.
              Läs mer i vår{" "}
              <Link href="/cookies" className="text-brand-navy underline">
                cookiepolicy
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              10. Ändringar i policyn
            </h2>
            <p>
              Vi kan uppdatera denna integritetspolicy. Väsentliga ändringar
              meddelas på webbplatsen. Vi rekommenderar att du regelbundet
              kontrollerar denna sida.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-brand-navy mb-4">
              11. Klagomål
            </h2>
            <p>
              Om du har klagomål på hur vi hanterar dina personuppgifter kan du
              kontakta Integritetsskyddsmyndigheten (IMY):
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Webbplats:{" "}
                <a
                  href="https://www.imy.se"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-navy underline"
                >
                  www.imy.se
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-navy/20">
          <Link
            href="/"
            className="text-brand-navy hover:underline inline-flex items-center gap-2"
          >
            ← Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}
