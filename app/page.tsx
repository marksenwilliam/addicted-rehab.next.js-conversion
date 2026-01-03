import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <header id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10">
          {/* Left: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-8">
            {/* Hand-drawn label */}
            <div className="relative inline-block mb-2">
              <div className="absolute inset-0 border-2 border-brand-orange sketchy-oval transform -rotate-2"></div>
              <span className="relative block px-5 py-2 text-[10px] font-bold tracking-[0.15em] text-brand-navy uppercase">
                Privat Rehab i Spanien
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium text-brand-navy leading-[1.05] tracking-tight">
              Individuell <br />
              <span className="marker-highlight inline-block px-1 transform -rotate-1">behandling</span> <br />
              för alkoholberoende.
            </h1>

            <p className="text-lg text-brand-gray font-sans font-light leading-relaxed max-w-lg">
              Vi är en svensk behandlingsklinik baserad i{" "}
              <span className="font-bold text-brand-navy border-b-2 border-brand-peach border-dashed">
                La Marina, Spanien
              </span>
              , som erbjuder professionell och helt individuell behandling.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="#contact"
                className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest shadow-sketch hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-3"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                Kontakta Oss
              </Link>
              <Link
                href="#how-we-work"
                className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors"
              >
                Läs mer om behandling
              </Link>
            </div>
          </div>

          {/* Right: Hero Image Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md bg-brand-white border-2 border-brand-navy sketchy-box p-4 shadow-card relative z-10 transform rotate-1 transition-transform hover:rotate-0 duration-500">
              {/* Tape effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-cream/80 border-l border-r border-brand-white/50 backdrop-blur-sm transform -rotate-2 opacity-60 shadow-sm z-20"></div>

              <div className="aspect-[4/3] bg-brand-navy overflow-hidden sketchy-box relative">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Lugnt hav i Spanien"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-brand-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-brand-navy shadow-sm">
                  La Marina, Spanien
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Våra Styrkor Section */}
      <section className="py-24 border-y-2 border-brand-navy/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <div className="inline-block border-2 border-brand-navy px-4 py-1 mb-6 sketchy-box transform -rotate-1">
              <span className="font-bold text-xs tracking-widest text-brand-navy uppercase">Varför välja oss?</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy max-w-3xl mx-auto leading-tight">
              Våra <span className="marker-highlight px-2">styrkor</span> &amp; varför du ska komma ner till oss.
            </h2>
            <p className="mt-6 text-brand-gray font-light max-w-2xl mx-auto text-lg">
              Vi erbjuder en unik kombination av kompetens, miljö och metod.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {/* Prisvärt */}
            <div className="relative text-center group">
              <div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch h-full flex flex-col justify-center">
                <span className="block font-serif text-3xl font-medium text-brand-navy mb-4">Prisvärt</span>
                <p className="font-sans text-sm text-brand-gray leading-relaxed">
                  Betydligt lägre kostnad än i Sverige, utan att kompromissa med kvaliteten.
                </p>
              </div>
            </div>

            {/* Professionellt */}
            <div className="relative text-center group">
              <div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch h-full flex flex-col justify-center">
                <span className="block font-serif text-3xl font-medium text-brand-navy mb-4">Professionellt</span>
                <p className="font-sans text-sm text-brand-gray leading-relaxed">
                  Vi är helt inriktade på alkoholism med ett etiskt och personligt bemötande.
                </p>
              </div>
            </div>

            {/* Trygg Miljö */}
            <div className="relative text-center group">
              <div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch h-full flex flex-col justify-center">
                <span className="block font-serif text-3xl font-medium text-brand-navy mb-4">Trygg Miljö</span>
                <p className="font-sans text-sm text-brand-gray leading-relaxed">
                  Återhämta dig i en harmonisk miljö. Husdjur är välkomna!
                </p>
              </div>
            </div>

            {/* 70-80% */}
            <div className="relative text-center group">
              <div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch h-full flex flex-col justify-center">
                <span className="block font-serif text-2xl md:text-3xl font-medium text-brand-navy mb-4">70-80%</span>
                <p className="font-sans text-sm text-brand-gray leading-relaxed">
                  Så många av våra tidigare klienter lever i dag nyktra och i harmoni – ett resultat av vår kvalitativa och individuellt anpassade behandling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Möt Teamet Section */}
      <section id="individual-treatment" className="py-24 bg-brand-white relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#1f2937 1px, transparent 1px), linear-gradient(90deg, #1f2937 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.03,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <span className="font-bold text-xs tracking-widest text-brand-gray uppercase mb-4 block">
                Möt Teamet
              </span>
              <h2 className="font-serif text-4xl font-medium text-brand-navy mb-6 leading-tight">
                Möt teamet <br />
                <span className="italic text-brand-orange">bakom behandlingen</span>
              </h2>
              <p className="text-brand-gray font-light mb-8 font-sans">
                Här möter du några av Sveriges mest erfarna beroendeterapeuter. Arne Stålberg och Jan Hellberg har vigt sina liv åt att hjälpa andra tillbaka till livet. Med en unik kombination av egen erfarenhet och djup yrkeskunskap skapar de den trygghet som krävs för varaktig förändring.
              </p>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
              {/* Arne */}
              <div className="relative group">
                <div className="aspect-[4/5] bg-brand-cream border-2 border-brand-navy sketchy-box mb-6 overflow-hidden relative transition-all duration-500 shadow-sketch">
                  <Image
                    src="/images/portrait_arne.jpg"
                    alt="Arne Stålberg"
                    fill
                    className="object-cover mix-blend-multiply opacity-90"
                  />
                </div>
                <div className="relative">
                  <span className="absolute -top-10 -left-2 bg-brand-navy text-brand-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest transform -rotate-3">
                    Grundare
                  </span>
                  <h4 className="font-serif text-2xl text-brand-navy">Arne Stålberg</h4>
                  <p className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
                    Diplomerad A-terapeut
                  </p>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    &quot;Arne grundade Addicted Rehab för att ge den hjälp han själv behövde. Som A-terapeut förenar han yrkeskunskap med egen erfarenhet och möter dig med genuin empati – helt utan dömande.&quot;
                  </p>
                </div>
              </div>

              {/* Jan */}
              <div className="relative group">
                <div className="aspect-[4/5] bg-brand-cream border-2 border-brand-navy sketchy-box mb-6 overflow-hidden relative transition-all duration-500 shadow-sketch">
                  <Image
                    src="/images/portrait_jan.jpg"
                    alt="Jan Hellberg"
                    fill
                    className="object-cover mix-blend-multiply opacity-90"
                  />
                </div>
                <div className="relative">
                  <span className="absolute -top-10 -right-2 bg-brand-orange text-brand-navy px-3 py-1 text-[10px] font-bold uppercase tracking-widest transform rotate-2">
                    Arnes tidigare lärare
                  </span>
                  <h4 className="font-serif text-2xl text-brand-navy">Jan Hellberg</h4>
                  <p className="font-sans text-xs font-bold tracking-widest text-brand-orange uppercase mb-3">
                    Erfaren Vägvisare
                  </p>
                  <p className="text-sm text-brand-gray leading-relaxed">
                    &quot;Jan är en erfaren vägvisare som förenar teori med decennier av praktik. Som tidigare lärare för terapeuter ser han människan bakom beroendet och skapar trygga vägar till tillfrisknande.&quot;
                  </p>
                </div>
              </div>

              <div className="text-center mt-12 md:col-span-2">
                <Link
                  href="/om-oss"
                  className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-brand-white transition-colors inline-block transform hover:-rotate-1"
                >
                  Läs mer om oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hur Vi Jobbar Section */}
      <section id="how-we-work" className="py-24 border-t-2 border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="font-bold text-xs tracking-widest text-brand-gray uppercase mb-2 block">Metodik</span>
              <h2 className="font-serif text-4xl font-medium text-brand-navy">Hur vi jobbar</h2>
            </div>
            <Link
              href="#contact"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors"
            >
              <span className="wavy-underline">Kontakta oss för mer info</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Minnesota */}
            <article className="group cursor-pointer">
              <div className="relative aspect-square bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image
                  src="/images/how-minnesota.jpg"
                  alt="Minnesota Modellen"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">
                  Steg 1
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">
                  Grunden
                </span>
                <h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                  Minnesota Modellen
                </h4>
                <p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-3">
                  Vi arbetar enligt Minnesotamodellen, en av världens mest effektiva metoder. Hos oss gör du detta individuellt med stöd av erfarna terapeuter.
                </p>
              </div>
            </article>

            {/* Terapi */}
            <article className="group cursor-pointer">
              <div className="relative aspect-square bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image
                  src="/images/how-therapy.jpg"
                  alt="Individanpassad Terapi"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">
                  Steg 2
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">
                  Samtal
                </span>
                <h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                  Individanpassad Terapi
                </h4>
                <p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-3">
                  Varje dag träffar du din terapeut för att arbeta med tankar och beteenden. Målet är att ge dig verktyg för att hantera stress och sug.
                </p>
              </div>
            </article>

            {/* Egentid */}
            <article className="group cursor-pointer">
              <div className="relative aspect-square bg-brand-navy mb-6 border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image
                  src="/images/how-tasks.jpg"
                  alt="Egentid"
                  fill
                  className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-brand-white border-2 border-brand-navy px-2 py-1 font-bold text-[10px] tracking-widest uppercase">
                  Steg 3
                </div>
              </div>
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest border border-brand-orange rounded-full px-3 py-0.5 inline-block">
                  Reflektion
                </span>
                <h4 className="font-serif text-xl font-medium text-brand-navy leading-tight group-hover:text-brand-orange transition-colors">
                  Egentid &amp; Arbetsuppgifter
                </h4>
                <p className="text-sm text-brand-gray font-light leading-relaxed line-clamp-3">
                  På eftermiddagarna arbetar du med individuella övningar som fördjupar behandlingen. Ingen grupp, ingen press – fullt fokus på dig.
                </p>
              </div>
            </article>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/var-behandling"
              className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors shadow-sketch hover:shadow-sketch-hover inline-block"
            >
              Läs mer om vår behandling
            </Link>
          </div>
        </div>
      </section>

      {/* Robert Berättar Section */}
      <section id="testimonial" className="py-24 bg-brand-cream border-t-2 border-brand-navy/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <span className="font-bold text-xs tracking-widest text-brand-gray uppercase mb-2 block">Berättelser</span>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-navy">&quot;Robert&quot; berättar</h2>
          </div>

          <div className="relative bg-brand-white border-2 border-brand-navy sketchy-box p-8 md:p-12 shadow-card">
            <div className="relative z-10 space-y-6">
              <div>
                <h4 className="font-bold text-brand-navy text-sm uppercase tracking-widest mb-2">
                  Hur såg ditt liv ut innan?
                </h4>
                <p className="font-serif text-xl italic text-brand-gray leading-relaxed">
                  &quot;Innan jag kom ner till Spanien kändes livet som om det hade låst sig. Jag vaknade med ångest nästan varje dag... Alkoholen hade gått från att vara något som &apos;hjälpte mig att slappna av&apos; till något som styrde hela mitt dygn.&quot;
                </p>
              </div>

              <div className="w-full h-px bg-brand-navy/10 border-t border-dashed border-brand-navy/20"></div>

              <div>
                <h4 className="font-bold text-brand-navy text-sm uppercase tracking-widest mb-2">
                  Hur ser ditt liv ut idag?
                </h4>
                <p className="font-serif text-xl italic text-brand-gray leading-relaxed">
                  &quot;Idag är livet nästan oigenkännligt... Jag vaknade klar i huvudet. Jag känner mig stolt över mina dagar istället för att skämmas över kvällarna.&quot;
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end items-center gap-4">
              <div className="text-right">
                <span className="block font-bold text-brand-navy">&quot;Robert&quot;</span>
                <span className="text-xs text-brand-gray tracking-widest uppercase">Tidigare Klient</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/berattelser"
              className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-brand-white transition-colors"
            >
              Läs fler berättelser
            </Link>
            <Link
              href="/berattelser/robert"
              className="sketchy-btn bg-brand-orange text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors shadow-sketch"
            >
              Läs hela Roberts berättelse
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Grid Section */}
      <section className="py-24 bg-brand-white border-t-2 border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-brand-navy">Utforska mer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Nav Card 1 */}
            <Link href="/var-behandling" className="group">
              <div className="relative aspect-[4/3] border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image src="/images/nav-treatment.jpg" alt="Vår Behandling" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-white font-serif text-xl">Vår Behandling</span>
                </div>
              </div>
            </Link>

            {/* Nav Card 2 */}
            <Link href="/om-oss" className="group">
              <div className="relative aspect-[4/3] border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image src="/images/nav-about-us.jpg" alt="Om Oss" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-white font-serif text-xl">Om Oss</span>
                </div>
              </div>
            </Link>

            {/* Nav Card 3 */}
            <Link href="/vad-ar-alkoholism" className="group">
              <div className="relative aspect-[4/3] border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image src="/images/nav-alcoholism.jpg" alt="Vad är alkoholism?" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-white font-serif text-xl">Vad är alkoholism?</span>
                </div>
              </div>
            </Link>

            {/* Nav Card 4 */}
            <Link href="/berattelser" className="group">
              <div className="relative aspect-[4/3] border-2 border-brand-navy sketchy-box overflow-hidden shadow-sketch group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all">
                <Image src="/images/nav-stories.jpg" alt="Berättelser" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-brand-white font-serif text-xl">Berättelser</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
