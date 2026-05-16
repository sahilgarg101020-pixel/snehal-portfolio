// WireC — Full portfolio component
// Sections: Nav · Hero · Work Index (peek + drawer carousel)
//          · Ads (scattered polaroids, modal) · About · Experience/Resume · Toolbox · Contact footer

const PROJECTS = [
  {
    id:"matrika", name:"Matrika", kind:"End-to-end brand", year:"2025", role:"Founder",
    blurb:"Matrika is an antenatal nutrition supplement in dissolvable powder form that blends into everyday Indian meals like dal, curry, and chapati. Unlike tablets, gummies, or liquids, it delivers key micronutrients through food itself, turning any meal into a clinically complete one for mother and baby.",
    tags:["Startup","Product Ideation","Women's Health","Pitch Deck","Nutraceuticals"],
    hero:"assets/Projects/Matrika/hero.png",
    slidesImgs:[
      "assets/Projects/Matrika/slide-01.png",
      "assets/Projects/Matrika/slide-02.png",
      "assets/Projects/Matrika/slide-03.png",
    ],
  },
  {
    id:"inkcraft", name:"InkCraft Communications", kind:"PR & Influencer Marketing Internship", year:"2024", role:"Influencer Marketing & PR Intern",
    blurb:"InkCraft Communications is a Goa-based 360-degree PR and brand solutions agency with clients spanning healthcare, F&B, hospitality, and lifestyle. Over two months, I handled influencer outreach and campaign execution for clients like Cafe Lilliput, and secured media coverage for Dr. Aisshwarya in publications including Moneycontrol and Spiceroute Magazine. I also built the agency's credentials deck during my final weeks.",
    tags:["PR","Influencer Marketing","Media Outreach","Agency","Internship"],
    hero:"assets/Projects/Inkcraft/hero.png",
    slidesImgs:[
      "assets/Projects/Inkcraft/slide-01.png",
      "assets/Projects/Inkcraft/slide-02.png",
      "assets/Projects/Inkcraft/slide-03.png",
    ],
  },
  {
    id:"flipkart", name:"Flipkart Reimagined", kind:"Independent Campaign Strategy", year:"2024", role:"Brand Strategist & Marketer",
    blurb:"A self-initiated campaign strategy that reimagines Flipkart's marketing around a single big idea: \"Har Mood Mein Flipkart.\" The concept positions Flipkart as an emotion-first brand rooted in everyday Indian life, spanning print, OOH, digital, video, and social formats. Every creative execution was conceptualized and designed independently.",
    tags:["Campaign Strategy","Brand Strategy","Integrated Marketing","Creative Direction","FMCG/E-Commerce"],
    hero:"assets/Projects/Flipkart/hero.png",
    slidesImgs:[
      "assets/Projects/Flipkart/slide-01.png",
      "assets/Projects/Flipkart/slide-02.png",
      "assets/Projects/Flipkart/slide-03.png",
      "assets/Projects/Flipkart/slide-04.png",
    ],
  },
  {
    id:"memotag", name:"MemoTag", kind:"Founder's Office Internship", year:"2024", role:"Founder's Office Intern · Social Media",
    blurb:"Memotag is a dementia-care startup where I worked directly with the founders across brand communication, social media, and sales. I managed content for LinkedIn, Instagram, and WhatsApp, built carousels and static posts around dementia awareness, and contributed to sales collaterals and stakeholder meetings with partnered medical professionals.",
    tags:["Social Media","Content Strategy","Healthcare","Founder's Office","Brand Communication"],
    hero:"assets/Projects/Memotag/hero.png",
    slidesImgs:[
      "assets/Projects/Memotag/slide-01.png",
      "assets/Projects/Memotag/slide-02.png",
    ],
  },
  {
    id:"agentr", name:"AgentR (Vibencode)", kind:"Social Media & PR Marketing Internship", year:"2026", role:"Social Media & PR Marketing Intern",
    blurb:"AgentR (by Vibencode) is an AI hiring intelligence platform that reasons over every resume using career trajectory analysis instead of ATS keyword matching — trusted by teams at Google, Morgan Stanley, and PitchBook. I lead content end-to-end: LinkedIn carousels and static posts, long-form explainers that educate hiring teams on what AgentR actually does, and pitch decks and marketing collateral that sharpen the brand's positioning for partners and clients.",
    tags:["Content Strategy","Social Media","Brand Collateral","Customer Education","B2B SaaS","Internship"],
    hero:"assets/Projects/AgentR/hero.png",
    slidesImgs:[
      "assets/Projects/AgentR/slide-01.png",
      "assets/Projects/AgentR/slide-02.png",
    ],
  },
];

// Polaroid layout: w/h are the photo area; the polaroid frame adds bottom caption space.
const ADS = [
  { id:"cello",   label:"Cello Butterflow · Mr. Lamba Naam",                img:"assets/Ads/Cello butterflow.jpg",
    take:"The ad perfectly captures the satisfying smoothness of a gel pen on paper, something every student relates to, and combines it with humor so naturally that it makes the whole concept instantly memorable." },
  { id:"fevicol", label:"Fevicol · 1959 A Love Story",                      img:"assets/Ads/Fevicol.webp",
    take:"I loved how we can see generations unfold and the society's evolution when it comes to marriage through the pov of a furniture piece — and the music is just cherry on cake." },
  { id:"glucon",  label:"Glucon D",                                          img:"assets/Ads/Glucon D.jpg",
    take:"This ad is absolutely timeless, turns the exhausting Indian summer into such a funny yet painfully relatable visual, which is exactly why people still remember, share, and connect with it even today." },
  { id:"airtel",  label:"Airtel · Har Ek Friend",                           img:"assets/Ads/Har ek friend.webp",
    take:"This ad became bigger than just a commercial by creating a relatable and flexible friendship template that people turned into endless memes and personal versions, making the tagline and jingle truly timeless." },
  { id:"mptourism", label:"Madhya Pradesh Tourism · Hindustan Ka Dil Dekha", img:"assets/Ads/Madhya Pradesh Tourism.png",
    take:"The ad took a minimal yet visually striking approach instead of a typical tourism showcase, using seamless expressions, transitions, and editing so beautifully that it still feels memorable and emotionally special even years later." },
  { id:"coke",    label:"Coke · Umeedon Wali Dhoop",                         img:"assets/Ads/Umeedo wali dhoop.jpg",
    take:"What I love is that this ad goes beyond selling a product and instead delivers such a timeless message of hope and resilience that it stayed relevant enough to be recreated during the pandemic, proving how deeply Coca Cola understands human emotion." },
];

const EXPERIENCE = [
  { year:"2026 — Now", role:"Social Media & PR Marketing Intern", org:"Vibencode",
    notes:"Driving LinkedIn growth and earned media coverage for an AI-powered hiring platform." },
  { year:"2026", role:"PR & Influencer Marketing Intern", org:"Inkcraft Communications",
    notes:"Running media outreach and influencer campaigns across lifestyle, beauty, and F&B brands." },
  { year:"2024 — 2025", role:"Founder's Office Intern", org:"Memotag",
    notes:"Owning social media and cross-functional ops for a Shark Tank–featured dementia care voice AI." },
];

const LEADERSHIP = [
  { year:"2021 — 2024", role:"Vice President, Operations", org:"AIESEC in Ludhiana",
    notes:"Led GTM campaigns that drove a 40% lift in qualified leads and scaled bilateral partnerships across 10+ countries." },
];

const HIGHLIGHTS = [
  { text:"500K+ influencer reach across 30+ collaborations", org:"Inkcraft, 2026" },
  { text:"Weekly content + cross-functional ops for a Shark Tank–featured dementia care voice AI", org:"Memotag, 2024–25" },
];

const EDUCATION = [
  { year:"2015 — 2019", role:"B.Des, Communication Design", org:"Srishti Institute · Bangalore" },
];

function Nav() {
  const [active, setActive] = React.useState("work");
  React.useEffect(() => {
    const ids = ["work","ads","about","resume","contact"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const link = (id, label) => (
    <li onClick={()=>document.getElementById(id)?.scrollIntoView({ behavior:"smooth", block:"start" })}
        className={active===id?"active":""}
        style={{ cursor:"pointer" }}>{label}</li>
  );
  return (
    <nav className="wf-nav" style={{ padding: "16px 0", position:"sticky", top:0, background:"rgba(255,255,255,.85)", backdropFilter:"blur(10px)", zIndex: 20 }}>
      <div className="wf-nav-logo" style={{ fontStyle:"normal" }}>Snehal Ralhan</div>
      <ul className="wf-nav-links">
        {link("work","Work")}
        {link("ads","Ads")}
        {link("about","About")}
        {link("resume","Résumé")}
        {link("contact","Contact")}
      </ul>
    </nav>
  );
}

function Hero({ tweaks }) {
  const t = tweaks || {};
  return (
    <section className="hero-section" style={{ padding: "110px 0 80px", position: "relative", overflow:"visible", display:"grid", gridTemplateColumns:"1.3fr 1fr", gap: 60, alignItems:"center" }}>

      <div style={{ position:"relative", zIndex:1, maxWidth: 720 }}>
        <div className="wf-eyebrow" style={{ marginBottom: 28 }}>SNEHAL <span className="spark">✱</span> PR &amp; MARKETING <span className="spark">✱</span> BANGALORE</div>
        <h1 className="serif" style={{ fontSize: t.headlineSize || 72, margin: 0, lineHeight: 1.05, fontWeight: 400, letterSpacing:"-.022em" }}>
          Brand <em style={{ fontWeight: 400, color: "var(--rust)" }}>stories</em>,<br/>
          told with intent.
        </h1>
        <p style={{ maxWidth: 560, marginTop: 38, fontSize: 18, lineHeight: 1.55, color: "var(--ink-soft)" }}>
          Press pitches, LinkedIn carousels, pitch decks that put brands into the rooms they want to be in.
        </p>
        <div style={{ display:"flex", gap:10, marginTop: 32 }}>
          <a href="#work" className="wf-chip" style={{ textDecoration:"none", color:"inherit" }}>See the work <span className="spark">↓</span></a>
          <a href="#contact" className="wf-chip" style={{ background:"var(--ink)", color:"var(--paper)", borderColor:"var(--ink)", textDecoration:"none" }}>Get in touch →</a>
        </div>
      </div>
      <div className="hero-photo" style={{ position:"relative", zIndex:1 }}>
        <img src="assets/people/hero-dither.png" alt="Snehal Ralhan"
          style={{ width:"100%", height:"auto", display:"block", borderRadius: 6, boxShadow:"var(--shadow-card)" }} />
      </div>
    </section>
  );
}

function WorkIndex({ onOpen }) {
  const [hov, setHov] = React.useState(0);
  const swatches = ["#efede8","#e7e4dc","#dedbd1","#d6d2c8","#cecabf","#c6c1b5"];
  return (
    <section id="work" className="wf-section">
      <div className="wf-section-head">
        <h2>Index of Work</h2>
        <span className="wf-caption">hover → peek &nbsp;·&nbsp; click → case study</span>
      </div>
      <div style={{ position: "relative" }}>
        <div style={{ borderTop: "1px solid var(--ink)" }}>
          {PROJECTS.map((p, i) => (
            <div key={p.id}
              className="work-row"
              onMouseEnter={() => setHov(i)}
              onClick={() => onOpen(i)}
              style={{
                display:"grid", gridTemplateColumns:"50px 1fr auto", alignItems:"center", gap: 20,
                padding: "22px 4px", borderBottom: "1px solid var(--line)",
                cursor:"pointer", color: hov===i? "var(--ink)":"var(--ink-mute)",
                transition:"color .2s, padding-left .25s",
                paddingLeft: hov===i? 12 : 4,
              }}>
              <span className="mono" style={{ fontSize: 11, color:"var(--ink-mute)" }}>0{i+1}</span>
              <span className="serif work-name" style={{
                fontSize: 32, fontStyle: "normal", fontWeight: hov===i?500:400,
                letterSpacing:"-.018em", lineHeight: 1.1,
                transition:"font-weight .2s",
              }}>
                {p.name}
              </span>
              <span className="mono" style={{ fontSize: 10, letterSpacing:".14em", color:"var(--ink-mute)" }}>{p.kind.toUpperCase()} — {p.year} →</span>
            </div>
          ))}
        </div>
        {/* peek panel */}
        <div className="peek-panel" style={{
          position:"absolute", top: hov*78 + 8, right: -10, width: 240,
          background:"var(--paper)",
          padding: 12,
          border: "1px solid var(--ink)",
          transition:"top .25s cubic-bezier(.2,.8,.2,1)", pointerEvents:"none",
          borderRadius: 2,
        }}>
          <div style={{ aspectRatio:"4/3", marginBottom: 10, background: swatches[hov%swatches.length], borderRadius:3, position:"relative", overflow:"hidden" }}>
            {PROJECTS[hov].hero ? (
              <img src={PROJECTS[hov].hero} alt={PROJECTS[hov].name}
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
            ) : (
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,.85)", fontFamily:"Geist Mono, monospace", fontSize:10, letterSpacing:".18em" }}>COMING SOON</div>
            )}
          </div>
          <div style={{ display:"flex", justifyContent:"space-between" }}>
            <span className="wf-caption">{PROJECTS[hov].kind.toUpperCase()} · {PROJECTS[hov].year}</span>
            <span className="mono" style={{ fontSize: 10, letterSpacing:".14em", textTransform:"uppercase", color:"var(--rust)" }}>peek →</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Drawer({ index, onClose, onPrev, onNext }) {
  const [slide, setSlide] = React.useState(0);
  const p = index !== null ? PROJECTS[index] : null;
  React.useEffect(() => { setSlide(0); }, [index]);
  const slideCount = p ? Math.max(1, (p.slidesImgs?.length || 0)) : 0;
  React.useEffect(() => {
    if (index === null) return;
    const k = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setSlide(s => Math.max(0, s-1));
      if (e.key === "ArrowRight") setSlide(s => Math.min(slideCount-1, s+1));
    };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, [index, p, slideCount]);

  if (index === null) return null;
  const swatches = ["#efede8","#e7e4dc","#dedbd1","#d6d2c8","#cecabf","#c6c1b5"];
  const accent = swatches[index % swatches.length];

  return (
    <div onClick={onClose} style={{
      position:"fixed", inset:0, background:"rgba(29,28,24,.55)", backdropFilter:"blur(10px)",
      zIndex: 100, display:"flex", justifyContent:"center", alignItems:"flex-start",
      padding: "40px 24px", overflowY:"auto",
    }}>
      <div onClick={(e)=>e.stopPropagation()} style={{ position:"relative", width:"min(900px, 100%)" }}>
        {/* close pill (outside the stamp so it's not clipped by the mask) */}
        <div style={{ display:"flex", gap:8, justifyContent:"flex-end", marginBottom: 14 }}>
          <button onClick={onPrev} className="wf-chip" style={{ cursor:"pointer" }}>← prev</button>
          <button onClick={onNext} className="wf-chip" style={{ cursor:"pointer" }}>next →</button>
          <button onClick={onClose} className="wf-chip" style={{ cursor:"pointer", background:"var(--ink)", color:"var(--paper)", borderColor:"var(--ink)" }}>close ✕</button>
        </div>

        {/* the stamp */}
        <div className="stamp" style={{ padding: "40px 44px 48px" }}>
          <div className="drawer-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1.1fr", gap: 40, alignItems:"start" }}>
            <div>
              {/* hero image area */}
              <div style={{
                aspectRatio: "4/3", borderRadius: 6, position:"relative", overflow:"hidden",
                background: "var(--paper)",
                boxShadow:"var(--shadow-soft)",
                border: "1px solid var(--line-soft)",
              }}>
                {(p.slidesImgs && p.slidesImgs.length > 0) ? (
                  <img src={p.slidesImgs[slide]} alt={`${p.name} — slide ${slide+1}`}
                    style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
                ) : p.hero ? (
                  <img src={p.hero} alt={p.name}
                    style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
                ) : (
                  <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,.85)", fontFamily:"Geist Mono, monospace", fontSize:11, letterSpacing:".2em" }}>COMING SOON</div>
                )}
                {p.slidesImgs && p.slidesImgs.length > 0 && (
                  <div className="mono" style={{ position:"absolute", top: 14, right: 14, fontSize: 10, letterSpacing:".2em", color:"rgba(255,255,255,.95)", background:"rgba(0,0,0,.35)", padding:"4px 8px", borderRadius:3 }}>
                    {String(slide+1).padStart(2,'0')}/{String(p.slidesImgs.length).padStart(2,'0')}
                  </div>
                )}
              </div>
              {p.slidesImgs && p.slidesImgs.length > 1 && (
                <div style={{ display:"grid", gridTemplateColumns:`repeat(${p.slidesImgs.length}, 1fr)`, gap: 8, marginTop: 14 }}>
                  {p.slidesImgs.map((src,i)=>(
                    <div key={i} onClick={()=>setSlide(i)}
                      style={{
                        aspectRatio:"4/3", cursor:"pointer",
                        opacity: slide===i?1:.55,
                        borderRadius: 3, transition:"opacity .15s",
                        overflow:"hidden",
                        background:"var(--paper)",
                        border: slide===i ? "1.5px solid var(--ink)" : "1px solid var(--line-soft)",
                      }}>
                      <img src={src} alt="" style={{ width:"100%", height:"100%", objectFit:"contain", display:"block" }} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={{ paddingTop: 8 }}>
              <div className="wf-caption" style={{ marginBottom: 14 }}>{p.kind.toUpperCase()} <span className="spark">✱</span> {p.year}</div>
              <h3 className="serif drawer-name" style={{ fontSize: 32, margin:"0 0 6px", lineHeight:1.1, fontWeight: 500, fontStyle:"normal", letterSpacing:"-.018em", overflowWrap:"anywhere", hyphens:"auto" }}>{p.name}</h3>
              <div style={{ fontSize: 14, fontWeight: 400, color: "var(--ink-mute)", marginBottom: 20, fontFamily:"Geist Mono, monospace", letterSpacing:".06em" }}>{p.role}</div>
              <p style={{ fontSize: 15, lineHeight: 1.6, color:"var(--ink-soft)", margin: 0 }}>{p.blurb}</p>
              <div style={{ display:"flex", gap:6, flexWrap:"wrap", marginTop:20 }}>
                {p.tags.map(t => <div key={t} className="wf-chip">{t}</div>)}
              </div>

              <div style={{ marginTop: 32, display:"grid", gridTemplateColumns:"auto 1fr", gap:"10px 20px", alignItems:"baseline" }}>
                <div className="wf-caption">ROLE</div><div className="serif" style={{ fontSize:14 }}>{p.role}</div>
                <div className="wf-caption">YEAR</div><div className="serif" style={{ fontSize:14 }}>{p.year}</div>
                <div className="wf-caption">SCOPE</div><div className="serif" style={{ fontSize:14 }}>{p.tags.slice(0,3).join(", ")}</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function Polaroids({ title, caption, items, onPick }) {
  const photoColors = ["#efede8","#e7e4dc","#dedbd1","#d6d2c8","#cecabf","#c6c1b5"];
  return (
    <div>
      <div className="wf-section-head" style={{ marginBottom: 48 }}>
        <h2>{title}</h2>
        <span className="wf-caption">{caption}</span>
      </div>
      <div className="polaroid-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 32,
      }}>
        {items.map((o, i) => (
          <div key={o.id} onClick={()=>onPick(i)} className="polaroid lift"
            style={{ cursor:"pointer" }}>
            <div className="photo" style={{ width:"100%", aspectRatio:"4/3", background: photoColors[i % photoColors.length], borderRadius: 2, overflow:"hidden" }}>
              {o.img && (
                <img src={o.img} alt={o.label}
                  style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              )}
            </div>
            <div className="caption">{o.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Modal({ item, onClose, label="Detail" }) {
  if (!item) return null;
  return (
    <div onClick={onClose} style={{
      position:"fixed", inset:0, background:"rgba(29,28,24,.55)", backdropFilter:"blur(10px)",
      zIndex: 90, display:"flex", alignItems:"center", justifyContent:"center", padding:20,
    }}>
      <div onClick={(e)=>e.stopPropagation()} className="polaroid" style={{
        width:"min(560px, 92vw)", padding: "18px 18px 0", position:"relative",
      }}>
        <button onClick={onClose} style={{ position:"absolute", top:12, right:14, border:"none", background:"transparent", fontSize:20, cursor:"pointer", color:"var(--ink-soft)", zIndex:2 }}>✕</button>
        <div className="photo" style={{ aspectRatio:"4/3", background:"var(--sage)", borderRadius: 2, position:"relative", overflow:"hidden" }}>
          {item.img ? (
            <img src={item.img} alt={item.label}
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          ) : (
            <div className="mono" style={{ position:"absolute", left: 18, bottom: 14, fontSize: 11, letterSpacing:".14em", textTransform:"uppercase", color:"rgba(255,255,255,.95)", lineHeight: 1 }}>{item.label}</div>
          )}
        </div>
        <div style={{ padding: "22px 8px 26px" }}>
          <div className="wf-caption" style={{ marginBottom: 10 }}>{label.toUpperCase()}{item.kind?` · ${item.kind.toUpperCase()}`:""}</div>
          <p className="serif" style={{ fontSize: 17, lineHeight: 1.5, color:"#2c2920", margin:0, fontWeight: 400 }}>{item.label}</p>
          <p style={{ fontSize: 14, lineHeight: 1.6, color:"var(--ink-soft)", marginTop: 12, marginBottom: 0 }}>{item.blurb || item.take}</p>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="wf-section">
      <div className="wf-section-head"><h2>About</h2></div>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems:"start" }}>
        <div style={{ position:"relative" }}>
          <div style={{ aspectRatio:"4/5", background: "var(--sage)", borderRadius: 6, position:"relative", overflow:"hidden", boxShadow:"var(--shadow-card)", transform:"rotate(-2deg)" }}>
            <img src="assets/people/about.jpg" alt="Snehal Ralhan"
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          </div>
          <div className="sticky" style={{ bottom: -30, right: -30, transform:"rotate(7deg)", width: 140, fontSize: 18 }}>
            says hi <span className="spark">✱</span>
          </div>
        </div>
        <div style={{ maxWidth: 640, paddingTop: 8 }}>
          <p className="serif" style={{ fontSize: 22, lineHeight: 1.4, marginTop: 0, fontWeight: 400, letterSpacing:"-.005em" }}>
            I&apos;m Snehal — PR and marketing, two years deep. I work the gap between brands and the people writing about them, mostly for consumer and healthtech companies. Recently wrapped my MBA, and right now I&apos;m running social and PR for Vibencode, an AI hiring platform.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color:"var(--ink-soft)", marginTop: 28 }}>
            Before this, Inkcraft Communications and Memotag. One taught me how the press cycle actually moves; the other taught me what a founder&apos;s calendar looks like at 11 PM.
          </p>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginTop:24 }}>
            {["Bangalore, IN","~2 yrs experience","Open to full-time"].map(t =>
              <div key={t} className="wf-chip">{t}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  const renderRow = (e, i, isFirst) => (
    <div key={i} style={{ display:"grid", gridTemplateColumns:"140px 1fr", gap:20, padding:"18px 0", borderTop: isFirst?"1px solid var(--ink)":"1px solid var(--line)" }}>
      <div className="mono" style={{ fontSize: 12, color:"var(--ink-mute)" }}>{e.year}</div>
      <div>
        <div className="serif" style={{ fontSize: 17, lineHeight:1.2, fontWeight:500 }}>{e.role}</div>
        <div className="wf-caption" style={{ marginTop:4 }}>{e.org.toUpperCase()}</div>
        <div style={{ fontSize: 14, color:"var(--ink-soft)", marginTop:8, lineHeight:1.5 }}>{e.notes}</div>
      </div>
    </div>
  );

  return (
    <section id="resume" className="wf-section">
      <div className="wf-section-head">
        <h2>Résumé</h2>
        <span className="wf-caption">experience · leadership · highlights</span>
      </div>
      <div className="resume-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 60 }}>
        <div>
          <div className="wf-caption" style={{ marginBottom: 20 }}>EXPERIENCE</div>
          {EXPERIENCE.map((e, i) => renderRow(e, i, i===0))}
          <div style={{ borderTop:"1px solid var(--line)", height:1 }} />
        </div>

        <div>
          <div className="wf-caption" style={{ marginBottom: 20 }}>LEADERSHIP</div>
          {LEADERSHIP.map((e, i) => renderRow(e, i, i===0))}
          <div style={{ borderTop:"1px solid var(--line)", height:1 }} />

          <div className="wf-caption" style={{ margin:"40px 0 20px" }}>HIGHLIGHTS</div>
          <ul style={{ listStyle:"none", margin:0, padding:0, borderTop:"1px solid var(--ink)" }}>
            {HIGHLIGHTS.map((h, i) => (
              <li key={i} style={{ padding:"18px 0", borderBottom:"1px solid var(--line)" }}>
                <div className="serif" style={{ fontSize: 15, lineHeight:1.45, color:"var(--ink)", fontWeight:400 }}>{h.text}</div>
                <div className="wf-caption" style={{ marginTop:6 }}>{h.org.toUpperCase()}</div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 32, display:"flex", gap:10, flexWrap:"wrap" }}>
            <a href="https://docs.google.com/document/d/13Sx0SelEiL9HbeBrWddufwynTccRgcts/edit?usp=sharing&ouid=110028352139456504685&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="wf-chip" style={{ background:"var(--ink)", color:"#fff", borderColor:"var(--ink)", textDecoration:"none" }}>View resume ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Toolbox() {
  const tools = [
    { name:"Jira",            slug:"jira" },
    { name:"Asana",           slug:"asana" },
    { name:"Trello",          slug:"trello" },
    { name:"G-Suite",         src:"assets/tools/google-slides.svg" },
    { name:"Filmora",         src:"assets/tools/filmora.svg" },
    { name:"Microsoft Excel", src:"assets/tools/excel.png" },
    { name:"Miro",            slug:"miro" },
    { name:"Framer",          slug:"framer" },
    { name:"Notion",          slug:"notion" },
    { name:"Figma",           slug:"figma" },
  ];
  return (
    <section className="wf-section">
      <div className="wf-section-head"><h2>Toolbox</h2><span className="wf-caption">tools I reach for, in order</span></div>
      <div className="toolbox-grid" style={{
        display:"grid",
        gridTemplateColumns:"repeat(5, 1fr)",
        gap: 16,
      }}>
        {tools.map(t => (
          <div key={t.name} style={{
            display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",
            gap: 14, padding: "28px 14px",
            background: "var(--paper)",
            border: "1px solid var(--line-soft)",
            borderRadius: 6,
            boxShadow: "var(--shadow-soft)",
          }}>
            <img
              src={t.src || `https://cdn.simpleicons.org/${t.slug}`}
              alt={`${t.name} logo`}
              style={{ width: 40, height: 40, objectFit:"contain" }}
              onError={(e)=>{ e.currentTarget.style.display='none'; }}
            />
            <div className="mono" style={{ fontSize: 11, letterSpacing:".08em", textAlign:"center", color:"var(--ink-soft)" }}>{t.name}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32, display:"flex", flexWrap:"wrap", gap: 8 }}>
        {["Influencer Marketing","PR & Media Outreach","LinkedIn Strategy","Content Strategy","Brand Collateral","Stakeholder Management"].map(t =>
          <div key={t} className="wf-chip">{t}</div>)}
      </div>
    </section>
  );
}

const IconLinkedIn = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13 19.79 19.79 0 0 1 1.08 4.4 2 2 0 0 1 3.05 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
  </svg>
);
const IconResume = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);

function Footer() {
  const links = [
    { label:"LinkedIn",  value:"snehal-ralhan",     href:"https://www.linkedin.com/in/snehal-ralhan/", Icon: IconLinkedIn },
    { label:"Email",     value:"snehal.ralh@gmail.com",  href:"mailto:snehal.ralh@gmail.com",          Icon: IconEmail   },
    { label:"Phone",     value:"+91 98765 43210",   href:"tel:+919876543210",                          Icon: IconPhone   },
    { label:"Résumé",    value:"View on Google Docs", href:"https://docs.google.com/document/d/13Sx0SelEiL9HbeBrWddufwynTccRgcts/edit?usp=sharing&ouid=110028352139456504685&rtpof=true&sd=true", Icon: IconResume  },
  ];
  return (
    <footer id="contact" style={{ borderTop:"1px solid var(--ink)", paddingTop:80, paddingBottom:80, marginTop:40 }}>
      <div className="footer-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"start" }}>
        <div>
          <h2 className="serif" style={{ fontSize:48, fontWeight:400, letterSpacing:"-.02em", lineHeight:1, margin:0 }}>Contact.</h2>
          <p style={{ marginTop:24, fontSize:16, color:"var(--ink-soft)", lineHeight:1.65, maxWidth:320 }}>
            Open to identity, packaging and editorial projects.<br/>Currently between studios.
          </p>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          {links.map(({ label, value, href, Icon }, i) => (
            <a key={i} href={href} style={{
              display:"flex", alignItems:"center", gap:18,
              padding:"22px 0", borderBottom:"1px solid var(--line)",
              textDecoration:"none", color:"inherit",
              transition:"color .15s",
            }}>
              <span style={{ color:"var(--ink-mute)", flexShrink:0 }}><Icon /></span>
              <div>
                <div className="mono" style={{ fontSize:10, letterSpacing:".14em", color:"var(--ink-mute)" }}>{label.toUpperCase()}</div>
                <div className="serif" style={{ fontSize:20, marginTop:3, fontWeight:400 }}>{value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#6c6e54",
  "paper": "#ffffff",
  "highlight": "#f5e16c",
  "headlineSize": 72,
  "showHeroObjects": true,
  "showStickyOnDrawer": true,
  "showAvailability": true,
  "heroLine1": "Makes",
  "heroEm": "brands",
  "heroLine2": "that feel like",
  "heroHighlight": "things",
  "heroLine3": "you keep."
}/*EDITMODE-END*/;

function WireC() {
  const [drawer, setDrawer] = React.useState(null);
  const [adSel, setAdSel] = React.useState(null);
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks live by overriding CSS vars + a few inline pieces
  React.useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--sage', t.accent);
    r.setProperty('--sage-deep', t.accent);
    r.setProperty('--bg', t.paper);
    r.setProperty('--mustard', t.highlight);
    document.documentElement.dataset.heroSize = t.headlineSize;
    document.documentElement.dataset.showHero = t.showHeroObjects ? '1' : '0';
    document.documentElement.dataset.showSticky = t.showStickyOnDrawer ? '1' : '0';
    document.documentElement.dataset.showAvail = t.showAvailability ? '1' : '0';
  }, [t]);

  return (
    <div className="wf-page" data-tweaks="1">
      <style>{`
        [data-show-hero="0"] .hero-objects{display:none!important}
        [data-show-sticky="0"] .drawer-sticky{display:none!important}
        [data-show-avail="0"] .nav-availability{display:none!important}
      `}</style>
      <Nav />
      <Hero tweaks={t} />
      <WorkIndex onOpen={setDrawer} />

      <section id="ads" className="wf-section">
        <Polaroids title="Ads I Love" caption="click any polaroid → my one-liner take"
          items={ADS} onPick={setAdSel} minHeight={580} />
      </section>

      <About />
      <Resume />
      <Toolbox />
      <Footer />

      <Drawer
        index={drawer}
        onClose={()=>setDrawer(null)}
        onPrev={()=>setDrawer(d => (d - 1 + PROJECTS.length) % PROJECTS.length)}
        onNext={()=>setDrawer(d => (d + 1) % PROJECTS.length)}
      />
      <Modal item={adSel!==null?ADS[adSel]:null} onClose={()=>setAdSel(null)} label="Ad" />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette" />
        <TweakColor label="Accent"   value={t.accent}    onChange={(v)=>setTweak('accent', v)} />
        <TweakColor label="Paper bg" value={t.paper}     onChange={(v)=>setTweak('paper', v)} />
        <TweakColor label="Highlight" value={t.highlight} onChange={(v)=>setTweak('highlight', v)} />

        <TweakSection label="Hero copy" />
        <TweakText label="Line 1"     value={t.heroLine1}     onChange={(v)=>setTweak('heroLine1', v)} />
        <TweakText label="Italic word" value={t.heroEm}        onChange={(v)=>setTweak('heroEm', v)} />
        <TweakText label="Line 2"     value={t.heroLine2}     onChange={(v)=>setTweak('heroLine2', v)} />
        <TweakText label="Highlighted" value={t.heroHighlight} onChange={(v)=>setTweak('heroHighlight', v)} />
        <TweakText label="Line 3"     value={t.heroLine3}     onChange={(v)=>setTweak('heroLine3', v)} />
        <TweakSlider label="Headline size" value={t.headlineSize} min={64} max={160} step={2} unit="px"
                     onChange={(v)=>setTweak('headlineSize', v)} />

        <TweakSection label="Display" />
        <TweakToggle label="Hero scatter objects" value={t.showHeroObjects} onChange={(v)=>setTweak('showHeroObjects', v)} />
        <TweakToggle label="Drawer sticky note"   value={t.showStickyOnDrawer} onChange={(v)=>setTweak('showStickyOnDrawer', v)} />
        <TweakToggle label="Nav availability chip" value={t.showAvailability} onChange={(v)=>setTweak('showAvailability', v)} />
      </TweaksPanel>
    </div>
  );
}

window.WireC = WireC;
