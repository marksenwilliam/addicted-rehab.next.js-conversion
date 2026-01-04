import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Cookiepolicy",
    description: "Läs om hur Addicted Rehab använder cookies på webbplatsen för att förbättra din upplevelse och analysera trafik.",
};

export default function CookiesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-brand-cream">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                        Juridisk information
                    </span>
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-navy mb-6">
                        Cookiepolicy
                    </h1>
                    <p className="text-brand-gray text-lg">
                        Senast uppdaterad: 3 januari 2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-brand-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="prose prose-lg max-w-none text-brand-gray">
                        
                        {/* Section 1 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">1. Vad är cookies?</h2>
                            <p className="leading-relaxed">
                                Cookies är små textfiler som lagras på din dator, surfplatta eller mobiltelefon när du besöker en webbplats. Cookies gör det möjligt för webbplatsen att komma ihåg dina handlingar och preferenser (såsom språk, teckenstorlek och andra visningsinställningar) under en viss tid, så att du inte behöver ange dem på nytt varje gång du återvänder till webbplatsen eller surfar mellan olika sidor.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">2. Varför använder vi cookies?</h2>
                            <p className="leading-relaxed mb-4">Vi använder cookies för att:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Förbättra din användarupplevelse på webbplatsen</li>
                                <li>Komma ihåg dina preferenser och inställningar</li>
                                <li>Analysera hur besökare använder vår webbplats för att kunna förbättra den</li>
                                <li>Säkerställa att webbplatsen fungerar korrekt</li>
                                <li>Lagra ditt samtycke till användning av cookies</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">3. Typer av cookies vi använder</h2>
                            
                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">3.1 Nödvändiga cookies</h3>
                            <p className="leading-relaxed mb-4">
                                Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av i våra system. De sätts vanligtvis endast som svar på åtgärder du utför som utgör en begäran om tjänster, såsom att ställa in dina sekretessinställningar, logga in eller fylla i formulär.
                            </p>
                            <ul className="list-none space-y-1 text-sm bg-brand-cream p-4 rounded-lg">
                                <li><strong>Samtycke krävs:</strong> Nej (tekniskt nödvändiga)</li>
                                <li><strong>Giltighetstid:</strong> Session eller upp till 1 år</li>
                            </ul>

                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">3.2 Funktionella cookies</h3>
                            <p className="leading-relaxed mb-4">
                                Dessa cookies gör det möjligt för webbplatsen att tillhandahålla förbättrad funktionalitet och personalisering. De kan sättas av oss eller av tredjepartsleverantörer vars tjänster vi har lagt till på våra sidor.
                            </p>
                            <ul className="list-none space-y-1 text-sm bg-brand-cream p-4 rounded-lg">
                                <li><strong>Exempel:</strong> Språkpreferenser, cookie-samtycke</li>
                                <li><strong>Samtycke krävs:</strong> Nej</li>
                                <li><strong>Giltighetstid:</strong> Upp till 1 år</li>
                            </ul>

                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">3.3 Analytiska cookies</h3>
                            <p className="leading-relaxed mb-4">
                                Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt. Vi använder Google Analytics för att analysera användningen av vår webbplats.
                            </p>
                            <ul className="list-none space-y-1 text-sm bg-brand-cream p-4 rounded-lg">
                                <li><strong>Tjänst:</strong> Google Analytics</li>
                                <li><strong>Samtycke krävs:</strong> Ja</li>
                                <li><strong>Giltighetstid:</strong> Upp till 2 år</li>
                                <li><strong>Information som samlas in:</strong> Sidvisningar, klick, tid på sidan, geografisk plats (land/stad), webbläsartyp, enhet</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">4. Detaljerad cookie-tabell</h2>
                            <p className="leading-relaxed mb-4">Här är en fullständig lista över de cookies vi använder på vår webbplats:</p>
                            
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm border-collapse border border-brand-navy/20">
                                    <thead className="bg-brand-navy text-brand-cream">
                                        <tr>
                                            <th className="p-3 text-left font-bold">Cookie-namn</th>
                                            <th className="p-3 text-left font-bold">Typ</th>
                                            <th className="p-3 text-left font-bold">Ändamål</th>
                                            <th className="p-3 text-left font-bold">Giltighetstid</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-brand-navy/10">
                                            <td className="p-3">addicted-rehab-cookie-consent</td>
                                            <td className="p-3">Nödvändig</td>
                                            <td className="p-3">Lagrar ditt samtycke till cookie-användning</td>
                                            <td className="p-3">365 dagar</td>
                                        </tr>
                                        <tr className="border-b border-brand-navy/10 bg-brand-cream/50">
                                            <td className="p-3">_ga</td>
                                            <td className="p-3">Analytisk</td>
                                            <td className="p-3">Google Analytics - Används för att skilja användare åt</td>
                                            <td className="p-3">2 år</td>
                                        </tr>
                                        <tr className="border-b border-brand-navy/10">
                                            <td className="p-3">_ga_*</td>
                                            <td className="p-3">Analytisk</td>
                                            <td className="p-3">Google Analytics - Används för att bevara sessionstillstånd</td>
                                            <td className="p-3">2 år</td>
                                        </tr>
                                        <tr className="border-b border-brand-navy/10 bg-brand-cream/50">
                                            <td className="p-3">_gid</td>
                                            <td className="p-3">Analytisk</td>
                                            <td className="p-3">Google Analytics - Används för att skilja användare åt</td>
                                            <td className="p-3">24 timmar</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 5 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">5. Tredjepartscookies</h2>
                            <p className="leading-relaxed mb-4">Vissa cookies sätts av tredjepartstjänster som visas på våra sidor:</p>
                            
                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">Google Analytics</h3>
                            <p className="leading-relaxed mb-4">
                                Vi använder Google Analytics för att analysera hur besökare använder vår webbplats. Google Analytics sätter cookies för att samla in information anonymt och rapportera webbplatstrender utan att identifiera enskilda besökare.
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Läs mer: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Googles integritetspolicy</a></li>
                                <li>Opt-out: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                            </ul>
                        </div>

                        {/* Section 6 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">6. Hur du hanterar cookies</h2>
                            <p className="leading-relaxed mb-4">Du har flera alternativ för att hantera cookies:</p>

                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">6.1 Via vår cookie-banner</h3>
                            <p className="leading-relaxed mb-4">
                                När du besöker vår webbplats för första gången visas en cookie-banner där du kan välja att acceptera eller avvisa icke-nödvändiga cookies. Du kan när som helst ändra dina inställningar genom att rensa dina cookies i webbläsaren och besöka webbplatsen igen.
                            </p>

                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">6.2 Via webbläsarinställningar</h3>
                            <p className="leading-relaxed mb-4">De flesta webbläsare låter dig kontrollera cookies genom inställningarna. Du kan:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Blockera alla cookies</li>
                                <li>Tillåta endast cookies från webbplatser du besöker</li>
                                <li>Radera cookies när du stänger webbläsaren</li>
                                <li>Få en varning innan en cookie lagras</li>
                            </ul>
                            
                            <p className="leading-relaxed mb-4">Instruktioner för olika webbläsare:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Google Chrome</a></li>
                                <li><a href="https://support.mozilla.org/sv/kb/cookies" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Mozilla Firefox</a></li>
                                <li><a href="https://support.apple.com/sv-se/guide/safari" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Safari</a></li>
                                <li><a href="https://support.microsoft.com/sv-se/windows" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Microsoft Edge</a></li>
                            </ul>
                            
                            <div className="bg-brand-orange/10 border-l-4 border-brand-orange p-4 mt-4 rounded-r-lg">
                                <p className="text-sm"><strong>Observera:</strong> Om du blockerar cookies kan vissa delar av webbplatsen sluta fungera korrekt.</p>
                            </div>

                            <h3 className="font-bold text-brand-navy text-xl mt-6 mb-3">6.3 Radera befintliga cookies</h3>
                            <p className="leading-relaxed">
                                Du kan när som helst radera cookies som redan har lagrats på din enhet genom webbläsarens inställningar. Detta tar bort alla cookies från alla webbplatser du har besökt.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">7. Do Not Track (DNT)</h2>
                            <p className="leading-relaxed">
                                Vissa webbläsare har en &quot;Do Not Track&quot;-funktion som skickar en signal till webbplatser som du inte vill bli spårad. Vi respekterar denna inställning och samlar inte in analytiska cookies om DNT är aktiverat.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">8. Ändringar i cookiepolicyn</h2>
                            <p className="leading-relaxed">
                                Vi kan komma att uppdatera denna cookiepolicy från tid till annan för att återspegla ändringar i vår användning av cookies eller av juridiska skäl. Vi rekommenderar att du regelbundet läser igenom denna policy för att hålla dig informerad om hur vi använder cookies.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">9. Mer information om cookies</h2>
                            <p className="leading-relaxed mb-4">Om du vill lära dig mer om cookies och hur de fungerar, besök:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><a href="https://pts.se/sv/bransch/regler/lagar/lag-om-elektronisk-telekommunkation/cookies/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">PTS - Om cookies</a></li>
                                <li><a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/cookies/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">Integritetsskyddsmyndigheten - Cookies</a></li>
                                <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-brand-orange hover:underline">All About Cookies (engelska)</a></li>
                            </ul>
                        </div>

                        {/* Section 10 */}
                        <div className="mb-12">
                            <h2 className="font-serif text-2xl text-brand-navy mb-4">10. Kontakta oss</h2>
                            <p className="leading-relaxed mb-4">
                                Om du har frågor om vår användning av cookies eller denna cookiepolicy, kontakta oss:
                            </p>
                            <div className="bg-brand-cream p-6 rounded-lg">
                                <p className="font-bold text-brand-navy mb-2">Addicted Rehab</p>
                                <p className="mb-1">E-post: <a href="mailto:info@addictedrehab.se" className="text-brand-orange hover:underline">info@addictedrehab.se</a></p>
                                <p>Telefon: <a href="tel:0732520358" className="text-brand-orange hover:underline">073 - 252 03 58</a></p>
                            </div>
                            <p className="mt-4 leading-relaxed">
                                Läs även vår <Link href="/integritetspolicy" className="text-brand-orange hover:underline">integritetspolicy</Link> för mer information om hur vi behandlar personuppgifter.
                            </p>
                        </div>

                        {/* Back to home */}
                        <div className="pt-8 border-t border-brand-navy/10">
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-orange transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                Tillbaka till startsidan
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
