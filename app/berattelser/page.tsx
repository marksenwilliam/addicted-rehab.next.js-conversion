"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll, { StaggerContainer, StaggerItem } from "@/components/AnimateOnScroll";

export default function BerattelerPage() {
    return (
        <>
            {/* Hero Section */}
            <header className="pt-32 pb-20 bg-brand-section-bg relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <AnimateOnScroll animation="fadeUp">
                        <span className="font-bold text-xs tracking-widest text-brand-orange uppercase mb-4 block">
                            Inspiration
                        </span>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeUp" delay={0.1}>
                        <h1 className="font-serif text-5xl md:text-7xl text-brand-header-text mb-8 leading-tight">
                            Tidigare klienter <span className="marker-highlight px-2">berättar</span>
                        </h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll animation="fadeUp" delay={0.2}>
                        <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed max-w-2xl mx-auto">
                            Läs verkliga berättelser från människor som tagit steget mot ett nytt liv. Deras ord kan ge
                            hopp och inspiration på din egen resa.
                        </p>
                    </AnimateOnScroll>
                </div>
            </header>

            {/* Featured Stories */}
            <section className="py-24 bg-brand-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <StaggerContainer className="grid md:grid-cols-2 gap-12" staggerDelay={0.15}>
                        {/* Robert's Story */}
                        <StaggerItem>
                            <div className="bg-brand-section-bg border-2 border-brand-navy sketchy-box p-8 shadow-sketch h-full hover-card">
                                <div className="mb-6">
                                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-1">
                                        Utvalda berättelser
                                    </span>
                                </div>
                                <h3 className="font-serif text-3xl text-brand-header-text mb-4">&quot;Robert&quot;</h3>
                                <p className="text-brand-gray mb-6 leading-relaxed">
                                    &quot;Innan jag kom ner till Spanien kändes livet som om det hade låst sig. Jag vaknade med
                                    ångest nästan varje dag... Idag är livet nästan oigenkännligt.&quot;
                                </p>
                                <Link
                                    href="/berattelser/robert"
                                    className="text-brand-orange font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2"
                                >
                                    Läs hela berättelsen
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </StaggerItem>

                        {/* Samir's Story */}
                        <StaggerItem>
                            <div className="bg-brand-section-bg border-2 border-brand-navy sketchy-box p-8 shadow-sketch h-full hover-card">
                                <div className="mb-6">
                                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-1">
                                        Utvalda berättelser
                                    </span>
                                </div>
                                <h3 className="font-serif text-3xl text-brand-header-text mb-4">&quot;Samir&quot;</h3>
                                <p className="text-brand-gray mb-6 leading-relaxed">
                                    &quot;Innan jag kom till behandlingen i Spanien levde jag ett liv som kändes allt mer ohållbart. Jag kämpade med ångest, stress och utmattning...
                                    Idag har jag verktyg som fungerar i vardagen.&quot;
                                </p>
                                <Link
                                    href="/berattelser/samir"
                                    className="text-brand-orange font-bold uppercase tracking-widest hover:underline inline-flex items-center gap-2"
                                >
                                    Läs hela berättelsen
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Additional Reviews */}
            <section className="py-24 bg-brand-section-bg border-y-2 border-brand-navy/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="font-serif text-4xl text-brand-header-text mb-12 text-center">Fler röster</h2>
                    </AnimateOnScroll>

                    <StaggerContainer className="space-y-8" staggerDelay={0.1}>
                        {/* Madelene */}
                        <StaggerItem>
                            <div className="bg-brand-white p-8 border-l-4 border-brand-orange hover-lift">
                                <div className="font-serif text-xl italic text-brand-gray mb-4 space-y-4">
                                    <p>
                                        &quot;Alkoholen hade tagit över mitt liv. Jag hade kommit till den punkten där jag blev tvungen att göra ett val – ta hjälp och bli nykter eller förlora allt. Det var en av de svåraste men viktigaste beslut jag någonsin tagit.
                                    </p>
                                    <p>
                                        Idag har jag varit nykter i 11 år. Jag har ett bra liv och många av de verktyg jag fick i behandlingen använder jag fortfarande dagligen. Resan har faktiskt tagit mig så långt att jag själv utbildat mig till alkohol- och drogterapeut och nu jobbar inom yrket, vilket känns otroligt meningsfullt.
                                    </p>
                                    <p>
                                        Att jobba med Arne och Jan nere i Spanien var en trygg upplevelse som förändrade mitt liv. Jag fick möjlighet att arbeta med flera livsområden samtidigt, lära mig förstå mina känslor och beteenden på djupet. För första gången kände jag en genuin känsla av hopp – att jag verkligen skulle klara att göra en förändring, inte bara när det gällde alkoholen utan i hela mitt liv.
                                    </p>
                                    <p>
                                        Det som gjorde behandlingen så kraftfull var att den individuella behandlingen är så mycket mer än bara terapisessioner. Det är samtalet under fikat, i bilen, på stranden – det är en vardag i förändringsarbete där allt blir en del av läkningsprocessen.
                                    </p>
                                    <p>
                                        Jag skulle absolut rekommendera andra som söker behandling att vända sig till Arne och Jan. Det finns så mycket kunskap hos dem och en genuin vilja att hjälpa människor att göra en verklig förändring.&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-navy rounded-full flex items-center justify-center text-brand-orange font-bold">
                                        M
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-navy block">&quot;Madelene&quot;</span>
                                        <span className="text-xs text-brand-gray uppercase tracking-widest">Tidigare klient</span>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>

                        {/* Peter */}
                        <StaggerItem>
                            <div className="bg-brand-white p-8 border-l-4 border-brand-navy hover-lift">
                                <div className="font-serif text-xl italic text-brand-gray mb-4 space-y-4">
                                    <p>
                                        &quot;Innan jag kom till behandlingen i Spanien tjänade jag väldigt bra med pengar som konsult, men drack alkohol nästan varje dag. Jag spenderade pengarna dumdristigt – skickade ungefär 1 miljon svenska kronor till en kvinna när jag var full, plus andra dumheter.
                                    </p>
                                    <p>
                                        Idag har jag fortfarande skulder kvar, men har fokus på mitt liv och tålamod. Pengar är inte allt. Jag är lugnare och har mer förtröstan. Är 51 år och har rutor på magen.
                                    </p>
                                    <p>
                                        Att jobba med Arne var en speciell upplevelse. Jag önskar att kunna säga att han var skitjobbig, vilket han är – men också rak, ärlig och sann. Vi pratade om andra saker än alkohol, och den här gubben säger rätt saker. Åtminstone för mig funkade det. Han backar inte för någon som vill leva ett bättre liv.
                                    </p>
                                    <p>
                                        Jag hade provat gruppmöten tidigare, men att åka iväg till Spanien, ha lite semester, gymma, sola och jobba med 12-stegsprogrammet i lugn och ro funkade för mig. Min familj och flickvän såg skillnad efter bara några dagar. Ingen press från Arne, bara rätt budskap – resten är upp till mig.
                                    </p>
                                    <p>
                                        Jag skulle absolut rekommendera Arne till andra. För den som dricker för mycket alkohol och sabbar sitt liv är han rätt person. En gammal sjöbuse som är smartare än han ser ut, och som gjort alla mina misstag.&quot;
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-brand-navy font-bold">
                                        P
                                    </div>
                                    <div>
                                        <span className="font-bold text-brand-navy block">&quot;Peter&quot;</span>
                                        <span className="text-xs text-brand-gray uppercase tracking-widest">Tidigare klient</span>
                                    </div>
                                </div>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-24 pb-0 bg-brand-navy text-brand-cream text-center">
                <AnimateOnScroll animation="fadeUp">
                    <div className="container mx-auto px-6 max-w-3xl pb-24">
                        <h2 className="font-serif text-4xl md:text-5xl mb-6">Din berättelse kan börja idag</h2>
                        <p className="text-xl text-brand-cream/80 mb-12">
                            Vi finns här för att hjälpa dig ta det första steget mot ett nytt liv.
                        </p>
                        <Link
                            href="#contact"
                            className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-orange px-10 py-5 font-bold text-lg uppercase tracking-widest hover:bg-brand-cream transition-colors shadow-sketch inline-block"
                        >
                            Kontakta oss idag
                        </Link>
                    </div>
                </AnimateOnScroll>
            </section>
        </>
    );
}
