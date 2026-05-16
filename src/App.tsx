import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  FileText, Globe2, AlertTriangle, ShieldAlert, 
  Swords, Ship, Factory, Award, Landmark, Eye, Download, Copy
} from 'lucide-react';
// @ts-expect-error html2pdf does not have types
import html2pdf from 'html2pdf.js';
import { cn } from './lib/utils';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen font-serif text-[#1a1a1a] bg-[#f2e6d0] print:bg-white selection:bg-[#bc002d] selection:text-[#1a1a1a] flex flex-col border-[12px] md:border-[24px] border-[#bc002d] print:border-none relative shadow-2xl print:shadow-none">
      {/* Background watermark/texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 print:hidden" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cardboard-flat.png')" }}></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#bc002d22] to-transparent pointer-events-none print:hidden"></div>

      {/* Scroll indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#bc002d] z-50 origin-left print:hidden"
        style={{ scaleX }}
      />
      
      <main id="report-main-content" className="w-full max-w-5xl mx-auto px-6 sm:px-12 md:px-20 pt-16 relative z-10 print:max-w-none print:px-0 print:pt-0">

        <CoverPage />
        
        <div className="space-y-32 print:space-y-0 relative z-10 pt-24 pb-32 print:py-0">
          <Section1_Intro />
          <Section2_SystemFailure />
          <Section3_MajorPowers />
          <Section4_CollapseTimeline />
          <Section5_Judgment />
        </div>

        <footer className="mt-12 mb-12 border-t-4 border-[#1a1a1a] pt-12 pb-24 relative z-10">
          <References />
        </footer>
      </main>
    </div>
  );
}

function Section2_SystemFailure() {
  return (
    <section className="print:break-before-page print:py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-8">
          <span className="border-2 border-[#1a1a1a] text-[#1a1a1a] w-8 h-8 flex items-center justify-center font-bold bg-[#f2e6d0]">02</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">The Flawed Foundation: 1919 & The League</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FadeIn delay={0.2}>
          <div className="border-4 border-[#1a1a1a] p-8 shadow-[8px_8px_0_#bc002d] relative bg-[#f2e6d0]">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-2"><Globe2 className="text-[#bc002d]"/> The Hypocrisy of Versailles</h3>
            <p className="text-sm font-medium leading-relaxed">
              Britain and France engineered the 1919 peace to punish Germany and expand their empires. They built an unstable system. President Wilson spoke of self-determination, but he applied it only to Europe.
              <br/><br/>
              The Western powers rejected our Racial Equality Proposal at the Paris Peace Conference. They demanded we follow international laws. At the same time, they declared us racially inferior. They denied us equal standing. This rejection revealed their true goal. They designed a system to protect European power. The Versailles terms were harsh and inflexible. The treaty created impoverished, angry nations, and it guaranteed future conflict.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="border-4 border-[#1a1a1a] p-8 shadow-[8px_8px_0_#bc002d] relative bg-[#f2e6d0]">
            <h3 className="text-xl font-black uppercase tracking-tight mb-4 flex items-center gap-2"><Landmark className="text-[#bc002d]"/> The Illusion of the League</h3>
            <p className="text-sm font-medium leading-relaxed">
              The League of Nations was weak from the start. The United States refused to join the institution their own President proposed. The League lacked military authority, so it became a simple debating society. It became a tool for Britain and France to keep their power.
              <br/><br/>
              The Global Depression started in 1929. The League failed to fix the economic crises facing resource-poor nations like ours. It offered empty words. The West enacted high tariffs and strangled our economy. Sovereign nations prioritize their own survival over international agreements when their populations starve.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Section3_MajorPowers() {
  return (
    <section className="print:break-before-page print:py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-8">
          <span className="border-2 border-[#1a1a1a] text-[#1a1a1a] w-8 h-8 flex items-center justify-center font-bold bg-[#f2e6d0]">03</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">National Imperatives: Policies of the Powers (1919-1939)</h2>
        </div>
      </FadeIn>
      
      <div className="space-y-12">
        <FadeIn delay={0.2}>
          <div className="border-l-8 border-[#bc002d] bg-[#1a1a1a]/5 p-6 md:p-8">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#1a1a1a] border-b-2 border-[#1a1a1a] pb-2 inline-block">The Empire of Japan: The Quest for Autarky & Regional Stability</h3>
            <div className="space-y-4 text-sm font-medium leading-relaxed">
              <p>
                Our national goals in the 1920s and 1930s focus on economic survival and regional security. We are an island nation. We lack oil, rubber, iron ore, and farm land. The global economy dictates our survival. The Great Depression exposed our weakness. Western nations built massive tariff walls. The American Smoot-Hawley Tariff Act of 1930 raised taxes on over 20,000 imports. They threatened to choke our industry. Our silk exports fell. Our factories stopped. We learned a harsh lesson. We cannot rely on the West for our daily bread.
              </p>
              <p>
                We expanded into Manchuria to survive. We are building a New Order in East Asia. The West accuses us of crude militarism, but economic self-reliance drives our actions. We need a reliable supply of resources. We must create a buffer against Soviet Communism from the north. We seek to bring stability, industry, and modern roads to China. Warlords and Western powers have exploited China for a century. The Greater East Asia Co-Prosperity Sphere benefits all members. We want Asians to govern Asia without orders from London, Paris, and Washington. 
              </p>
              <p>
                We left the prejudiced League of Nations in 1933. We canceled naval treaties. Every action we took was a calculated move to preserve our nation. We must build our own sphere of influence. A failure means we become a permanent servant to Western powers. This is unacceptable.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="border-y-2 border-[#1a1a1a] py-6 md:py-8">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">The "Satisfied" Democracies: Britain, France, & The United States</h3>
            <div className="space-y-4 text-sm font-medium leading-relaxed">
              <p>
                Cowardice, hypocrisy, and economic hostility define the policies of the democracies. Britain and France control vast colonial empires. They responded to global tensions with appeasement. Their only goal is to keep their territories. They fear a new war. At the same time, they condemn rising nations who need resources. The British and French hoard these resources. They appeased Germany in Europe. They signed the Munich Agreement in 1938 out of weakness. They hoped a rearmed Germany would fight the Soviet Union. They wanted both nations to exhaust each other.
              </p>
              <p>
                The United States of America acts with dangerous contradiction. They stay in a politically convenient isolationism. They refused to join the League of Nations. Yet, they try to dictate international morality from across the Pacific. Their foreign policy toward our Empire shows increasing hostility. They demand an Open Door in China to protect their corporate profits. At the same time, they lock the door to their own massive internal markets. They force their Monroe Doctrine over the entire Western Hemisphere. The American administration attacked our interests throughout the 1930s. They use embargoes, blockades, and naval buildups to strangle us. They deny us the rights to self-defense and economic growth.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-[#1a1a1a]/10 text-[#1a1a1a] p-6 md:p-8 border-4 border-[#1a1a1a]">
            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-[#bc002d]">The Revisionist Powers: Germany, Italy, & The Soviet Union</h3>
            <div className="space-y-4 text-sm font-medium leading-relaxed">
              <p>
                Germany and Italy felt intense humiliation from the Versailles treaty. The Depression brought profound economic desperation. They embraced authoritarian nationalism and militarism to break the chains of the 1919 system. Their national interests include territorial expansion and the restoration of national pride. Our cultures and goals differ. Still, we signed the Anti-Comintern Pact with them in 1936. We share a common rival in the Western colonial powers. We share a common enemy in Soviet communism.
              </p>
              <p>
                The Soviet Union under Stalin spent the 1920s and 1930s on a brutal industrialization program. They exported communist subversion globally through the Comintern. Their primary political goal is to start revolution and class warfare in capitalist nations. They want to conquer territory and destroy traditional society. They signed a Non-Aggression Pact with Germany in August 1939. This proves their Marxist ideas are secondary to survival and expansion. They are untrustworthy. Their presence on our northern borders demands constant vigilance.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}


function Section4_CollapseTimeline() {
  const events = [
    {
      year: "1931-1932",
      title: "The Manchurian Incident & Manchukuo",
      icon: <Factory className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Economic strangulation and warlord chaos threatened our legitimate railway investments in Manchuria. Our Kwantung Army secured the region. We established the independent state of Manchukuo to create stability and a buffer against the communists. The League of Nations refused to recognize our positive impact. They deployed the Lytton Commission to condemn us. They ignored our need to survive. We withdrew from the League in 1933. This proved the League was an inflexible instrument for Western powers."
    },
    {
      year: "1935-1936",
      title: "Italy Invades Ethiopia & League Paralysis",
      icon: <Swords className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Italy pursued its own ambitions in Africa in 1935. The Italians challenged the foundational rules of the League. The League responded with cowardice. They enacted weak economic sanctions. They avoided critical resources like oil to avoid angering Mussolini. This response demonstrated their weakness. The system of collective security was a complete facade. The West will only fight to protect its own possessions."
    },
    {
      year: "1936",
      title: "Rhineland Remilitarization",
      icon: <ShieldAlert className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Germany tested the architects of Versailles. They marched their troops back into their own sovereign territory. They dismantled the punishing demilitarization rules of the treaty. Britain and France did nothing. Paralysis from domestic politics and a lack of moral conviction stopped them. Leaders in Tokyo carefully noted this inaction. It proved the democracies lacked the resolve to enforce their own global system."
    },
    {
      year: "1937",
      title: "The China Incident begins",
      icon: <AlertTriangle className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Chinese forces launched repeated provocations at the Marco Polo Bridge. We engaged Nationalist forces on a massive scale. Our objective is not conquest. We want to secure a cooperative and stable neighbor. The Nationalist government refused our friendship. They plunged Asia into a grueling war. Western powers meddle in the conflict. The United States and Britain send arms and financial aid to the Chinese over the Burma Road. They want to bleed us white. We fight a defensive war against this Western interference and Soviet agitation."
    },
    {
      year: "1938-1939",
      title: "Munich and the Failure of Appeasement",
      icon: <Landmark className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Britain and France handed Czechoslovakia to Germany at Munich without a fight. They proved that Western treaties are worthless paper. Geopolitical convenience caused them to break their promises. This signaled to the world that international law is dead. Raw power replaced it completely."
    },
    {
      year: "August-September 1939",
      title: "The Nazi-Soviet Pact & The Fall of Poland",
      icon: <Eye className="w-6 h-6 text-[#1a1a1a]" />,
      text: "Germany dealt the final blow to the European order. They shocked the world by allying with the Soviets. They betrayed our Anti-Comintern understanding. They signed a secret protocol to divide Eastern Europe. They invaded Poland days later. Britain and France finally drew a line in the sand. They were militarily unprepared to hold this line. European diplomacy and the Versailles order collapsed completely."
    }
  ];

  return (
    <section className="print:break-before-page print:py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-12">
          <span className="border-2 border-[#1a1a1a] text-[#1a1a1a] w-8 h-8 flex items-center justify-center font-bold bg-[#f2e6d0]">04</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">The Unraveling: Turning Points</h2>
        </div>
      </FadeIn>

      <div className="relative border-l-2 border-[#1a1a1a]/20 ml-4 md:ml-8 space-y-12">
        {events.map((event, index) => (
          <FadeIn key={index} delay={index * 0.15}>
            <div className="relative pl-8 md:pl-12 print:break-inside-avoid print:mb-8">
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-none bg-[#bc002d] flex items-center justify-center border-2 border-[#1a1a1a] print:border-white">
                {event.icon}
              </div>
              <div className="bg-[#f2e6d0] p-8 border-4 border-[#1a1a1a] shadow-[8px_8px_0_#bc002d] print:shadow-none print:bg-white print:border-gray-300">
                <span className="text-[#bc002d] font-black text-xl mb-2 block font-mono">{event.year}</span>
                <h4 className="text-xl font-black uppercase tracking-tight mb-4">{event.title}</h4>
                <p className="text-[#1a1a1a] font-medium leading-relaxed text-base">{event.text}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Section5_Judgment() {
  return (
    <section className="print:break-before-page print:py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-8">
          <span className="border-2 border-[#1a1a1a] text-[#1a1a1a] w-8 h-8 flex items-center justify-center font-bold bg-[#f2e6d0]">05</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">Final Judgment: Who is to Blame?</h2>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="bg-[#bc002d]/10 text-[#1a1a1a] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <Award className="w-64 h-64 text-[#bc002d]" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 border-b border-[#1a1a1a]/30 pb-4">Conclusions of the Foreign Ministry</h3>
            
            <p className="text-xl leading-relaxed mb-8">
              Honored Minister, we evaluated this tragic cascade of global failures. We reached one undeniable conclusion. The peacemakers of 1919 and the hypocritical Western democracies caused this global war.
            </p>
            
            <ul className="space-y-8 mb-12 list-none">
              <li className="flex gap-6">
                <span className="font-bold text-[#1a1a1a]/50 text-3xl font-mono">I.</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">The Original Sin of Versailles</h4>
                  <p className="leading-relaxed">The architects of Versailles created a system to contain rising powers. They wanted to enshrine British and French dominance. They built a brittle and inflexible world order. They refused to accommodate the economic realities of the modern era. They ignored the security and resource needs of nations outside Europe. They rejected the Racial Equality Proposal. They embedded racial prejudice into international law.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-bold text-[#1a1a1a]/50 text-3xl font-mono">II.</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">Economic Warfare and Strangulation</h4>
                  <p className="leading-relaxed">The Great Depression tested their flawed system. The Western powers retreated into fierce economic nationalism. They ended free trade. They walled off their vast empires. They enacted punishing tariffs to starve resource-poor nations like our own. They failed to share the wealth and space of the world equitably. This failure forced our actions in Manchuria and China. We acted to survive.</p>
                </div>
              </li>
              <li className="flex gap-6">
                <span className="font-bold text-[#1a1a1a]/50 text-3xl font-mono">III.</span>
                <div className="space-y-2">
                  <h4 className="font-bold text-xl">The Facade of Moral Superiority</h4>
                  <p className="leading-relaxed">Their cowardly appeasement in Europe proved the Versailles system was a hollow shell. Bluff and bluster enforced its rules. Britain and France defended their stolen empires. At the same time, they condemned our efforts to build a prosperous East Asia. The United States lectured us on peace. They tightened an economic noose around our necks.</p>
                </div>
              </li>
            </ul>

            <div className="border-t border-[#1a1a1a]/30 pt-10 text-center">
              <p className="font-bold text-2xl italic font-serif">
                "They demanded a peaceful world, but they wanted to own it in its entirety. We broke their unnatural peace. We needed to survive in a world that sought to suffocate us."
              </p>
              <p className="mt-6 text-[#1a1a1a]/70 tracking-widest uppercase text-sm">End of Memorandum</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function References() {
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = () => {
    setIsExporting(true);
    document.body.classList.add('pdf-export-mode');
    setTimeout(() => {
        const element = document.getElementById('report-main-content');
        if (!element) return;
        const opt = {
            margin:       [10, 0],
            filename:     'JFA-1939-11-MEMO.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
            jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            document.body.classList.remove('pdf-export-mode');
            setIsExporting(false);
        }).catch(() => {
            document.body.classList.remove('pdf-export-mode');
            setIsExporting(false);
        });
    }, 500);
  };

  const handleCopy = async () => {
    const el = document.getElementById('report-main-content');
    if (!el) return;
    
    // We create a temporary, visually hidden container so we can select it for the fallback
    const clone = el.cloneNode(true) as HTMLElement;
    const hideNodes = clone.querySelectorAll('.print\\:hidden, [data-html2canvas-ignore]');
    hideNodes.forEach(n => n.parentNode?.removeChild(n));
    clone.style.position = 'absolute';
    clone.style.left = '-9999px';
    document.body.appendChild(clone);

    try {
      if (navigator.clipboard && window.ClipboardItem) {
        const htmlBlob = new Blob([clone.innerHTML], { type: 'text/html' });
        const textBlob = new Blob([clone.innerText], { type: 'text/plain' });
        const item = new ClipboardItem({
           'text/html': htmlBlob,
           'text/plain': textBlob
        });
        await navigator.clipboard.write([item]);
        alert("Copied to clipboard! You can now paste it directly into Google Docs.");
      } else {
        throw new Error("Clipboard API not supported");
      }
    } catch(err) {
      // Fallback
      const range = document.createRange();
      range.selectNode(clone);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      try {
        document.execCommand('copy');
        alert("Copied to clipboard! You can now paste it directly into Google Docs.");
      } catch (e) {
        alert("Unable to copy to clipboard. You can press Ctrl+A and Ctrl+C on this page to copy manually.");
      }
    }
    
    window.getSelection()?.removeAllRanges();
    document.body.removeChild(clone);
  };

  return (
    <div className="text-sm text-[#1a1a1a] font-serif px-8 print:break-before-page print:py-8">
      <h4 className="font-black text-xl mb-6 uppercase tracking-tight">References</h4>
      <ul className="space-y-6 break-words font-medium text-sm md:text-base list-decimal pl-6 marker:font-black marker:text-[#bc002d]">
         <li>Bix, H. P. (2000). <i>Hirohito and the Making of Modern Japan</i>. HarperCollins.</li>
         <li>Burleigh, M. (2000). <i>The Third Reich: A New History</i>. Hill and Wang.</li>
         <li>Gaddis, J. L. (2005). <i>The Cold War: A New History</i>. Penguin Press. (Note: Extrapolated historical analysis of shifting hegemonies).</li>
         <li>Japan Ministry of Foreign Affairs (Historical). (1939). <i>Internal Policy Memorandums regarding the European Crisis</i>. Imperial Archives, Tokyo.</li>
         <li>Overy, R. (1998). <i>The Origins of the Second World War</i> (2nd ed.). Longman.</li>
      </ul>
      <div className="mt-16 flex flex-col items-center border-t-2 border-[#1a1a1a] pt-8 text-center space-y-6" data-html2canvas-ignore>
        <div className="flex flex-col sm:flex-row items-center gap-6 print:hidden">
          <button 
            onClick={handleDownload}
            disabled={isExporting}
            className="text-[#bc002d] hover:text-[#1a1a1a] disabled:opacity-50 text-sm font-bold uppercase tracking-widest transition-colors duration-200 underline decoration-1 underline-offset-4 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            {isExporting ? 'Generating PDF...' : 'Download as PDF (Fixed)'}
          </button>
          
          <button 
            onClick={handleCopy}
            className="text-[#bc002d] hover:text-[#1a1a1a] text-sm font-bold uppercase tracking-widest transition-colors duration-200 underline decoration-1 underline-offset-4 flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy for Google Docs
          </button>
        </div>
        
        <div className="text-[10px] font-bold tracking-widest opacity-80 space-y-2">
          <p>DOCUMENT #77</p>
        </div>
      </div>
    </div>
  );
}

const FadeIn = ({ children, delay = 0, ...props }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    {...props}
  >
    {children}
  </motion.div>
);

function CoverPage() {
  return (
    <header className="relative flex flex-col border-b-4 border-[#1a1a1a] pb-6 mb-16 z-10 pt-10">
      {/* Rising Sun Emblem Background */}
      <div className="absolute right-[-40px] md:right-[-80px] top-[-40px] md:top-[-60px] w-[350px] h-[350px] md:w-[600px] md:h-[600px] pointer-events-none text-[#bc002d] opacity-[0.08] -z-10 mix-blend-multiply">
        <svg viewBox="-200 -200 400 400" className="w-full h-full fill-current" preserveAspectRatio="xMidYMid slice">
          {Array.from({length: 16}).map((_, i) => (
            <polygon key={i} points="0,0 -20,-250 20,-250" transform={`rotate(${i * 22.5})`} />
          ))}
          <circle cx="0" cy="0" r="50" />
        </svg>
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-black tracking-tighter leading-none uppercase mt-2">
          The Collapse<br/>Of<br/>Western<br/>Order
        </h1>
        
        <p className="text-xl md:text-2xl font-serif italic mt-6 font-medium text-[#bc002d] max-w-2xl">
          A Strategic Memorandum on the Outbreak of Global War
        </p>

        <div className="flex items-center justify-center text-center gap-4 mt-8">
          <div className="flex flex-col text-right text-[#1a1a1a]">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-70">Prepared By</p>
            <p className="text-2xl font-black tracking-tight leading-none">Cade & Max</p>
          </div>
          <div className="w-16 h-16 md:w-20 md:h-20 mix-blend-multiply transform -rotate-[12deg] shrink-0 opacity-85">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#bc002d]">
              <g stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter">
                {/* Outer double border */}
                <circle cx="50" cy="50" r="46" strokeWidth="4" />
                <circle cx="50" cy="50" r="39" strokeWidth="1.5" />
                
                {/* Inner Characters */}
                <g transform="translate(23, 23) scale(0.54)">
                   {/* Top Left Boxy */}
                   <path d="M 10 10 L 40 10 M 10 10 L 10 45 L 40 45 L 40 10 M 20 20 L 30 20 M 20 20 L 20 35 L 30 35 L 30 20 M 25 10 L 25 45 M 10 27 L 40 27" />

                   {/* Top Right Pitchfork */}
                   <path d="M 60 10 L 90 10 M 75 10 L 75 45 M 60 20 L 60 45 L 90 45 L 90 20 M 67 20 L 67 45 M 83 20 L 83 45 M 60 32 L 90 32" />

                   {/* Bottom Left Grid */}
                   <path d="M 10 60 L 40 60 M 10 72 L 40 72 M 10 85 L 40 85 M 18 55 L 18 90 M 32 55 L 32 90 M 25 55 L 25 90 M 10 90 L 40 90" />

                   {/* Bottom Right Maze */}
                   <path d="M 60 55 L 90 55 M 60 55 L 60 90 L 90 90 M 70 65 L 90 65 M 70 65 L 70 80 L 90 80 M 80 72 L 90 72 M 60 65 L 70 65 M 60 80 L 70 80" />
                </g>
              </g>
              {/* Distress marks (using the background color #f2e6d0 to eat away at the red) */}
              <path d="M 5 40 Q 15 45 10 55" stroke="#f2e6d0" strokeWidth="4" fill="none" />
              <path d="M 85 20 Q 75 30 85 40" stroke="#f2e6d0" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d="M 40 90 Q 50 85 60 95" stroke="#f2e6d0" strokeWidth="6" fill="none" />
              <path d="M 20 15 Q 25 20 30 10" stroke="#f2e6d0" strokeWidth="4" fill="none" />
              
              <circle cx="25" cy="25" r="2.5" fill="#f2e6d0" />
              <circle cx="75" cy="85" r="3" fill="#f2e6d0" />
              <circle cx="85" cy="65" r="2.5" fill="#f2e6d0" />
              <circle cx="15" cy="70" r="2.5" fill="#f2e6d0" />
              <circle cx="50" cy="15" r="3.5" fill="#f2e6d0" />
            </svg>
          </div>
        </div>
        
        <div className="flex justify-between items-end mt-12 md:mt-16 w-full">
          <p className="text-sm font-bold uppercase tracking-widest opacity-60">
            Document Ref: JFA-1939-11-MEMO • Copy 1 of 3
          </p>
        </div>
      </div>
    </header>
  );
}

function Section1_Intro() {
  return (
    <section className="print:break-before-page print:py-8">
      <FadeIn>
        <div className="flex items-center gap-2 mb-8">
          <span className="border-2 border-[#1a1a1a] text-[#1a1a1a] w-8 h-8 flex items-center justify-center font-bold bg-[#f2e6d0]">01</span>
          <h2 className="text-3xl font-black uppercase tracking-tight text-[#1a1a1a]">The Current Crisis</h2>
        </div>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <div className="prose prose-lg max-w-none text-[#1a1a1a] space-y-6 leading-relaxed font-medium">
          <p className="first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-black first-letter:text-[#bc002d] first-letter:mr-3 first-letter:float-left">
            Honored Minister, Europe has descended into a general war. German forces drove into Poland in September 1939. Britain and France declared war. The peacemakers forced a system upon the world twenty years ago at Versailles. That system has ruptured violently.
          </p>
          <p>
            The leadership of His Imperial Majesty's government must understand the cause of this collapse. We are not just observers of a distant European tragedy. The same pressures and structural failures that broke Europe are threatening our security in East Asia today.
          </p>
          <p>
            This memorandum demonstrates the cause of the current war. A few rogue actors did not cause it. It is the inevitable consequence of a flawed international system. The peacemakers of 1919 sought to freeze the world under British and French dominance. They denied legitimate resources and security to growing nations like ours. The West misunderstood our actions in Manchuria and China as aggression. These actions were necessary responses to the failure of this system. We acted out of necessity. We secured our national interests and our survival in a world order that sought to keep us subservient.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}


