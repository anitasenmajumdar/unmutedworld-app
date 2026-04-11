import { useState } from "react";

// ─────────────────────────────────────────────────────────────
// 🔑  UPDATE THESE LINKS WHEN YOUR GRAPHY COURSES ARE LIVE
//     How to find your Graphy checkout URL:
//     1. Login to anitasenmajumdar0255.graphy.com
//     2. Go to Courses → click the course → Share / Checkout Link
//     3. Paste the URL below replacing the existing link
// ─────────────────────────────────────────────────────────────
const CHECKOUT = {
  sots:  "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69b9409c8628f55a52cf6735/p2?callback_url=/courses/69b9409c8628f55a52cf6735",
  swc:   "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69ba45a4de1761b559526e2c/p1?callback_url=/courses/69ba45a4de1761b559526e2c",
  fti:   "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69b9410f3b29f6cc22fdf36c/p2?callback_url=/courses/69b9410f3b29f6cc22fdf36c",
  ryv:   "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69b94275618e60675a920ade/p2?callback_url=/courses/69b94275618e60675a920ade",
  first: "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69b941488df3a126661d02a7/p2?callback_url=/courses/69b941488df3a126661d02a7",
  wc:    "https://anitasenmajumdar0255.graphy.com/t/p/checkout/V4/course/69b942a39313475ea98f37ee/p2?callback_url=/courses/69b942a39313475ea98f37ee",
};

const WA   = "https://wa.me/917899960145?text=Hello%20Anita!%20%F0%9F%8C%B8%0A%0AI%20came%20across%20UnmutedWorld%20and%20would%20love%20to%20have%20a%20free%20Discovery%20Call%20with%20you.%0A%0AI%20am%20available%20between%208%20AM%20%E2%80%93%2010%20PM%20IST.%20Please%20let%20me%20know%20a%20convenient%20slot!%20%F0%9F%99%8F%0A%0AThank%20you%20%F0%9F%92%9B";
const TOPMATE = "https://topmate.io/anita_sen_majumdar/2030528";
const STORE   = "https://anitasenmajumdar0255.graphy.com/products";
const COURSES = "https://anitasenmajumdar0255.graphy.com/courses";
const EMAIL   = "hello@unmutedworld.com";

const C = {
  navy:"#0d1b3e", navyMid:"#1a2f5e",
  rose:"#c4607a", roseSoft:"#e8b4c0",
  gold:"#f0c96e", offWhite:"#fdf8f5",
  muted:"rgba(13,27,62,0.45)",
};

// ── Shared components ───────────────────────────────────────

function Btn({ children, href, onClick, v="primary", sm=false, full=false }) {
  const base = {
    display:"inline-flex", alignItems:"center", justifyContent:"center", gap:"0.35rem",
    borderRadius:"3rem", fontWeight:700, cursor:"pointer", textDecoration:"none",
    border:"none", fontFamily:"'DM Sans',sans-serif", transition:"all 0.22s",
    fontSize: sm ? "0.73rem" : "0.84rem",
    padding: sm ? "0.42rem 1rem" : "0.72rem 1.6rem",
    width: full ? "100%" : undefined,
  };
  const vars = {
    primary:  { background:`linear-gradient(135deg,${C.rose},#d4879a)`, color:"#fff", boxShadow:"0 4px 16px rgba(196,96,122,0.35)" },
    gold:     { background:`linear-gradient(135deg,${C.gold},#e0c070)`, color:C.navy, boxShadow:"0 4px 16px rgba(240,201,110,0.35)" },
    green:    { background:"#25D366", color:"#fff", boxShadow:"0 4px 16px rgba(37,211,102,0.3)" },
    outline:  { background:"transparent", color:C.rose, border:`1.5px solid ${C.rose}` },
    navy:     { background:C.navyMid, color:"#fff" },
    ghost:    { background:"rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.7)", border:"1px solid rgba(255,255,255,0.2)" },
  };
  const s = { ...base, ...vars[v] };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={s}>{children}</a>
    : <button style={s} onClick={onClick}>{children}</button>;
}

function Tag({ label, color="#c4607a" }) {
  return (
    <span style={{ background:color+"22", color, border:`1px solid ${color}44`,
      fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase",
      padding:"0.18rem 0.55rem", borderRadius:"2rem" }}>
      {label}
    </span>
  );
}

function Card({ children, style={}, onClick }) {
  return (
    <div onClick={onClick} style={{
      background:"#fff", borderRadius:"1.1rem",
      boxShadow:"0 2px 18px rgba(13,27,62,0.07)",
      border:"1px solid rgba(196,96,122,0.08)", ...style,
    }}>
      {children}
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }) {
  return (
    <div style={{ textAlign:"center", marginBottom:"1.1rem" }}>
      <div style={{ fontSize:"0.62rem", letterSpacing:"0.18em", textTransform:"uppercase",
        color:C.rose, fontWeight:700, marginBottom:"0.3rem" }}>✦ {eyebrow}</div>
      <div style={{ fontFamily:"Georgia,serif", fontSize:"1.25rem", color:C.navy,
        lineHeight:1.25, marginBottom: sub ? "0.35rem" : 0 }}
        dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <div style={{ fontSize:"0.77rem", color:C.muted, lineHeight:1.55 }}>{sub}</div>}
    </div>
  );
}

// ── Nav ─────────────────────────────────────────────────────

const TABS = [
  { id:"home",       icon:"🏠", label:"Home"       },
  { id:"courses",    icon:"🎓", label:"Courses"     },
  { id:"ebooks",     icon:"📚", label:"eBooks"      },
  { id:"membership", icon:"🌺", label:"Members"     },
  { id:"coaches",    icon:"👩‍💼", label:"Coaches"     },
  { id:"contact",    icon:"📞", label:"Contact"     },
];

function TopNav({ tab, setTab }) {
  return (
    <div style={{ position:"sticky", top:0, zIndex:200,
      background:"rgba(13,27,62,0.97)", backdropFilter:"blur(14px)",
      borderBottom:"1px solid rgba(232,180,192,0.12)" }}>
      {/* Logo row */}
      <div style={{ display:"flex", alignItems:"center", gap:"0.55rem", padding:"0.8rem 1rem 0.2rem" }}>
        <span style={{ fontSize:"1.25rem" }}>🎤</span>
        <div>
          <div style={{ color:"#fff", fontSize:"0.95rem", fontWeight:700,
            fontFamily:"Georgia,serif", letterSpacing:"0.04em" }}>
            Unmuted<em style={{ color:C.roseSoft, fontStyle:"italic" }}>World</em>
          </div>
          <div style={{ color:"rgba(255,255,255,0.3)", fontSize:"0.5rem",
            letterSpacing:"0.18em", textTransform:"uppercase" }}>
            Find Your Voice · Live Powerfully
          </div>
        </div>
      </div>
      {/* Tab row */}
      <div style={{ display:"flex", overflowX:"auto", scrollbarWidth:"none" }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex:"0 0 auto", background:"transparent", border:"none", cursor:"pointer",
            padding:"0.45rem 0.7rem",
            color: tab===t.id ? C.roseSoft : "rgba(255,255,255,0.45)",
            fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase",
            borderBottom: tab===t.id ? `2px solid ${C.roseSoft}` : "2px solid transparent",
            transition:"all 0.2s", display:"flex", flexDirection:"column",
            alignItems:"center", gap:"2px", fontFamily:"'DM Sans',sans-serif",
          }}>
            <span style={{ fontSize:"0.95rem" }}>{t.icon}</span>{t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── HOME ────────────────────────────────────────────────────

function HomeTab({ setTab }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background:`linear-gradient(150deg,${C.navy} 0%,#1a0a2e 55%,${C.navyMid} 100%)`,
        padding:"2.5rem 1.4rem 3rem", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:-50, right:-50, width:180, height:180, borderRadius:"50%",
          background:"radial-gradient(circle,rgba(232,180,192,0.14) 0%,transparent 70%)" }} />
        <div style={{ position:"relative" }}>
          <div style={{ display:"inline-block", background:"rgba(232,180,192,0.15)",
            border:"1px solid rgba(232,180,192,0.28)", borderRadius:"2rem",
            padding:"0.28rem 0.9rem", fontSize:"0.65rem", letterSpacing:"0.16em",
            textTransform:"uppercase", color:C.roseSoft, marginBottom:"0.9rem" }}>
            ✦ CBT Coaching · Communication · Confidence
          </div>
          <h1 style={{ fontFamily:"Georgia,serif", fontSize:"clamp(1.75rem,5.5vw,2.6rem)",
            fontWeight:300, color:"#fff", lineHeight:1.15, margin:"0 0 0.7rem" }}>
            Find Your Voice.<br/>
            <em style={{ color:C.roseSoft, fontStyle:"italic" }}>Live Powerfully.</em>
          </h1>
          <p style={{ color:"rgba(255,255,255,0.57)", fontSize:"0.88rem", lineHeight:1.7,
            margin:"0 0 1.7rem", maxWidth:360, marginLeft:"auto", marginRight:"auto" }}>
            Coaching for non-native professionals who freeze in meetings — and midlife women
            navigating menopause with CBT tools.
          </p>
          <div style={{ display:"flex", gap:"0.65rem", justifyContent:"center", flexWrap:"wrap" }}>
            <Btn href={WA} v="primary">📅 Book Free Call</Btn>
            <Btn onClick={() => setTab("courses")} v="ghost">Explore Courses</Btn>
          </div>
          <div style={{ marginTop:"1.3rem", display:"flex", justifyContent:"center", gap:"1.4rem", flexWrap:"wrap" }}>
            {["Free 30-min call","No obligation","Online via Zoom"].map(t => (
              <div key={t} style={{ color:"rgba(255,255,255,0.38)", fontSize:"0.68rem",
                display:"flex", alignItems:"center", gap:"0.28rem" }}>
                <span style={{ color:C.roseSoft }}>✓</span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience cards */}
      <div style={{ padding:"1.3rem 1rem 0.5rem" }}>
        <SectionHead eyebrow="Who We Help" title="Two audiences. <em style='color:#c4607a'>One mission.</em>" />
        <div style={{ display:"flex", flexDirection:"column", gap:"0.65rem" }}>
          {[
            { icon:"🎙️", title:"For Non-Native Professionals",
              desc:"Stop freezing in meetings. Respond with clarity and confidence — on the spot.", id:"pro", accent:"#1255a1" },
            { icon:"🌸", title:"For Midlife Women",
              desc:"Navigate menopause, rebuild your identity, and reclaim your voice with CBT.", id:"women", accent:C.rose },
          ].map(a => (
            <Card key={a.id} style={{ padding:"1.1rem", cursor:"pointer" }} onClick={() => setTab("courses")}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:"0.8rem" }}>
                <div style={{ width:42, height:42, borderRadius:"50%", background:a.accent+"18",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"1.25rem", flexShrink:0 }}>{a.icon}</div>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:700, fontSize:"0.88rem", color:C.navy, marginBottom:"0.25rem" }}>{a.title}</div>
                  <div style={{ fontSize:"0.77rem", color:C.muted, lineHeight:1.5 }}>{a.desc}</div>
                </div>
                <span style={{ color:C.rose, fontSize:"1rem", flexShrink:0, marginTop:2 }}>→</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick-links grid */}
      <div style={{ padding:"1rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.65rem" }}>
        {[
          { icon:"🎓", label:"All Courses",    sub:"6 programmes",   tab:"courses",    bg:"#f5f0ff" },
          { icon:"📚", label:"Browse eBooks",  sub:"Instant download", tab:"ebooks",   bg:"#fff5f8" },
          { icon:"🌺", label:"Membership",     sub:"From ₹999/mo",    tab:"membership",bg:"#fff8f0" },
          { icon:"📅", label:"Quick Connect",  sub:"15 min · Free",   href:TOPMATE,    bg:"#f0f8ff" },
        ].map(item => (
          <Card key={item.label} style={{ padding:"0.95rem", cursor:"pointer", background:item.bg, textAlign:"center" }}
            onClick={() => item.href ? window.open(item.href,"_blank") : setTab(item.tab)}>
            <div style={{ fontSize:"1.4rem", marginBottom:"0.25rem" }}>{item.icon}</div>
            <div style={{ fontWeight:700, fontSize:"0.78rem", color:C.navy }}>{item.label}</div>
            <div style={{ fontSize:"0.65rem", color:C.muted, marginTop:"0.1rem" }}>{item.sub}</div>
          </Card>
        ))}
      </div>

      {/* Trust strip */}
      <div style={{ background:C.navy, padding:"1.1rem 1rem", textAlign:"center" }}>
        <div style={{ color:"rgba(255,255,255,0.35)", fontSize:"0.6rem", letterSpacing:"0.14em",
          textTransform:"uppercase", marginBottom:"0.7rem" }}>Why UnmutedWorld</div>
        <div style={{ display:"flex", justifyContent:"center", gap:"1.3rem", flexWrap:"wrap" }}>
          {["CBT-based approach","Online & worldwide","Two expert coaches","Free discovery call"].map(t => (
            <div key={t} style={{ color:"rgba(255,255,255,0.62)", fontSize:"0.7rem",
              display:"flex", alignItems:"center", gap:"0.28rem" }}>
              <span style={{ color:C.gold }}>✦</span>{t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── COURSES ─────────────────────────────────────────────────

const PROGRAMMES = [
  { id:"sots",  audience:"pro",   icon:"🎙️", title:"Speak On The Spot",      subtitle:"12-Week Signature",   tag:"Most Popular",  tagColor:C.rose,    price:"₹29,999", duration:"12 weeks · Zoom",
    desc:"Master responding instantly in any work situation — meetings, Q&As, client calls — without hesitation or scripts.",
    outcomes:["Respond to any question without freezing","Hold the room with calm confidence","Ditch filler words forever","Lead high-stakes conversations"] },
  { id:"swc",   audience:"pro",   icon:"🌱", title:"Speak With Confidence",   subtitle:"6-Week Starter",      tag:"Best Value",    tagColor:"#1255a1", price:"₹14,999", duration:"6 weeks · Zoom",
    desc:"The perfect starting point for non-native professionals who want real confidence in English-language work environments.",
    outcomes:["Stop second-guessing grammar mid-sentence","Sound natural and fluent in meetings","Handle pressure questions calmly","Build a solid foundation"] },
  { id:"fti",   audience:"pro",   icon:"⚡", title:"Fast Track Intensive",    subtitle:"4-Week Programme",    tag:"Quick Results", tagColor:"#c4a050", price:"₹19,999", duration:"4 weeks · Daily",
    desc:"For professionals with an urgent deadline — a presentation, promotion or important meeting. Concentrated, high-impact coaching.",
    outcomes:["Immediate measurable improvement","Custom plan for your situation","Daily exercises + live practice","Direct feedback every session"] },
  { id:"ryv",   audience:"women", icon:"🌺", title:"Reclaim Your Voice",      subtitle:"10-Week Programme",   tag:"Transformative",tagColor:C.rose,    price:"₹29,999", duration:"10 weeks · Zoom",
    desc:"A deeply personal CBT journey for midlife women navigating menopause, identity shifts, and the desire to feel like themselves again.",
    outcomes:["Regulate anxiety & mood swings with CBT","Navigate brain fog with real strategies","Rebuild your confidence and identity","Communicate boundaries clearly"] },
  { id:"first", audience:"women", icon:"🌱", title:"First Steps",             subtitle:"6-Week Programme",    tag:"Gentle Start",  tagColor:"#6b8e6b", price:"₹14,999", duration:"6 weeks · Zoom",
    desc:"A warm, accessible introduction to CBT tools for women just beginning to understand what they're experiencing in midlife.",
    outcomes:["Understand what's happening in your body & mind","Simple CBT tools to use daily","A safe judgment-free space to be heard","Foundations for deeper coaching"] },
  { id:"wc",    audience:"women", icon:"👯", title:"Women's Circle",          subtitle:"Group Programme",      tag:"Community",     tagColor:"#9b6b9b", price:"₹12,999", duration:"8 weeks · Group",
    desc:"A small-group programme where midlife women support each other through shared experiences, guided by Anita's CBT expertise.",
    outcomes:["You are not alone — and you will feel it","Peer accountability & warm connection","Structured CBT sessions with group energy","Ongoing WhatsApp community"] },
];

function CoursesTab() {
  const [audience, setAudience] = useState("all");
  const [open, setOpen] = useState(null);
  const filtered = audience === "all" ? PROGRAMMES : PROGRAMMES.filter(p => p.audience === audience);

  return (
    <div style={{ padding:"1rem" }}>
      <SectionHead eyebrow="Coaching Programmes" title="Find your <em style='color:#c4607a'>perfect fit</em>"
        sub="All programmes delivered online via Zoom · Worldwide" />

      {/* Filter */}
      <div style={{ display:"flex", background:"#f0ecf8", borderRadius:"3rem",
        padding:"0.22rem", marginBottom:"1rem" }}>
        {[{id:"all",l:"All"},{id:"pro",l:"🎙️ Professionals"},{id:"women",l:"🌸 Women"}].map(a => (
          <button key={a.id} onClick={() => setAudience(a.id)} style={{
            flex:1, background:audience===a.id ? C.rose : "transparent",
            color:audience===a.id ? "#fff" : C.muted,
            border:"none", borderRadius:"3rem", padding:"0.42rem 0.4rem",
            fontSize:"0.7rem", fontWeight:600, cursor:"pointer", transition:"all 0.2s",
            fontFamily:"'DM Sans',sans-serif" }}>
            {a.l}
          </button>
        ))}
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:"0.7rem" }}>
        {filtered.map(p => (
          <Card key={p.id} style={{ overflow:"hidden" }}>
            {/* Summary row — tap to expand */}
            <div style={{ padding:"1.05rem", cursor:"pointer" }}
              onClick={() => setOpen(open===p.id ? null : p.id)}>
              <div style={{ display:"flex", gap:"0.7rem", alignItems:"flex-start" }}>
                <span style={{ fontSize:"1.45rem", flexShrink:0 }}>{p.icon}</span>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem", alignItems:"center", marginBottom:"0.2rem" }}>
                    <span style={{ fontWeight:700, fontSize:"0.88rem", color:C.navy }}>{p.title}</span>
                    <Tag label={p.tag} color={p.tagColor} />
                  </div>
                  <div style={{ fontSize:"0.7rem", color:C.rose, fontWeight:600, marginBottom:"0.25rem" }}>{p.subtitle}</div>
                  <div style={{ fontSize:"0.76rem", color:C.muted, lineHeight:1.5 }}>{p.desc}</div>
                </div>
                <span style={{ color:C.muted, fontSize:"0.75rem", flexShrink:0, paddingTop:2 }}>
                  {open===p.id ? "▲" : "▼"}
                </span>
              </div>
              {/* Price + duration */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"0.7rem" }}>
                <span style={{ fontWeight:700, fontSize:"1rem", color:C.rose }}>{p.price}</span>
                <span style={{ fontSize:"0.67rem", color:C.muted }}>{p.duration}</span>
              </div>
            </div>

            {/* Expanded detail */}
            {open === p.id && (
              <div style={{ borderTop:"1px solid rgba(196,96,122,0.1)", padding:"1rem 1.05rem",
                background:"#fdf8f5" }}>
                <div style={{ fontSize:"0.72rem", fontWeight:700, color:C.navy,
                  marginBottom:"0.5rem", letterSpacing:"0.05em" }}>WHAT YOU WILL ACHIEVE</div>
                <ul style={{ margin:"0 0 1rem", padding:0, listStyle:"none",
                  display:"flex", flexDirection:"column", gap:"0.38rem" }}>
                  {p.outcomes.map((o,i) => (
                    <li key={i} style={{ display:"flex", gap:"0.45rem",
                      fontSize:"0.78rem", color:C.navy, lineHeight:1.45 }}>
                      <span style={{ color:C.rose, flexShrink:0 }}>✓</span>{o}
                    </li>
                  ))}
                </ul>

                {/* ── REGISTER BUTTON ── */}
                <div style={{ background:`linear-gradient(135deg,${C.gold}22,${C.gold}11)`,
                  border:`1.5px solid ${C.gold}66`, borderRadius:"0.9rem",
                  padding:"0.9rem", marginBottom:"0.75rem", textAlign:"center" }}>
                  <div style={{ fontSize:"0.7rem", color:C.navy, fontWeight:600, marginBottom:"0.55rem" }}>
                    Ready to start your journey?
                  </div>
                  <Btn href={CHECKOUT[p.id]} v="gold" full>
                    ✅ Register Now — {p.price}
                  </Btn>
                  <div style={{ fontSize:"0.62rem", color:C.muted, marginTop:"0.45rem", lineHeight:1.5 }}>
                    Secure checkout via Razorpay · EMI available · 7-day refund policy
                  </div>
                </div>

                {/* Secondary CTA */}
                <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap" }}>
                  <Btn href={WA} v="primary" sm>📲 Ask a question first</Btn>
                  <Btn href={COURSES} v="outline" sm>View all courses</Btn>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div style={{ marginTop:"1.1rem", background:C.navy, borderRadius:"1.1rem",
        padding:"1.3rem", textAlign:"center" }}>
        <div style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.78rem", marginBottom:"0.7rem" }}>
          Not sure which programme is right for you?
        </div>
        <Btn href={WA} v="primary">📅 Book Your Free 30-Min Discovery Call</Btn>
        <div style={{ marginTop:"0.45rem", fontSize:"0.65rem", color:"rgba(255,255,255,0.28)" }}>
          Available 8 AM – 10 PM IST · Completely free · No obligation
        </div>
      </div>
    </div>
  );
}

// ── EBOOKS ──────────────────────────────────────────────────

const EBOOKS = [
  { icon:"🎙️", title:"PREP Formula Guide",        for:"Professionals", desc:"The complete framework for answering any question confidently on the spot.", tag:"Bestseller" },
  { icon:"⚡",  title:"On-The-Spot Confidence",    for:"Professionals", desc:"Instant strategies to stop freezing and start responding with power.", tag:"Quick Win" },
  { icon:"🌺", title:"CBT for Menopause",          for:"Women",         desc:"Evidence-based CBT tools to navigate hormonal brain changes with calm.", tag:"Bestseller" },
  { icon:"🌙", title:"Sleep & Brain Fog Guide",    for:"Women",         desc:"Practical techniques to improve sleep and clear the menopause fog.", tag:"Must-Read" },
  { icon:"💬", title:"Emotional Regulation Toolkit",for:"Women",        desc:"A step-by-step workbook for managing big emotions during midlife.", tag:"Workbook" },
  { icon:"🏢", title:"Corporate Communication",    for:"Professionals", desc:"Master boardroom presence, executive communication and negotiation.", tag:"Advanced" },
];

function EbooksTab() {
  const [filter, setFilter] = useState("all");
  const shown = filter==="all" ? EBOOKS : EBOOKS.filter(e => e.for===filter);
  return (
    <div style={{ padding:"1rem" }}>
      <SectionHead eyebrow="Digital Store" title="eBooks &amp; <em style='color:#c4607a'>Resources</em>"
        sub="The most enriching first step — instant download" />
      <div style={{ display:"flex", background:"#f0ecf8", borderRadius:"3rem",
        padding:"0.22rem", marginBottom:"1rem" }}>
        {[{id:"all",l:"All"},{id:"Professionals",l:"🎙️ Professionals"},{id:"Women",l:"🌸 Women"}].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            flex:1, background:filter===f.id ? C.rose : "transparent",
            color:filter===f.id ? "#fff" : C.muted, border:"none", borderRadius:"3rem",
            padding:"0.42rem 0.4rem", fontSize:"0.7rem", fontWeight:600,
            cursor:"pointer", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}>
            {f.l}
          </button>
        ))}
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.65rem", marginBottom:"1.1rem" }}>
        {shown.map((e,i) => (
          <Card key={i} style={{ padding:"0.95rem", display:"flex", flexDirection:"column", gap:"0.4rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <span style={{ fontSize:"1.5rem" }}>{e.icon}</span>
              <Tag label={e.tag} color={e.for==="Women" ? C.rose : "#1255a1"} />
            </div>
            <div style={{ fontWeight:700, fontSize:"0.8rem", color:C.navy, lineHeight:1.3 }}>{e.title}</div>
            <div style={{ fontSize:"0.7rem", color:C.muted, lineHeight:1.5, flex:1 }}>{e.desc}</div>
            <div style={{ fontSize:"0.6rem", color:e.for==="Women" ? C.rose : "#1255a1",
              fontWeight:600, textTransform:"uppercase", letterSpacing:"0.08em" }}>For {e.for}</div>
          </Card>
        ))}
      </div>
      <div style={{ textAlign:"center" }}>
        <Btn href={STORE} v="primary">🛍️ Browse &amp; Buy — Digital Store</Btn>
        <div style={{ fontSize:"0.67rem", color:C.muted, marginTop:"0.5rem" }}>
          Instant download · Secure via Razorpay · Accessibly priced
        </div>
      </div>
    </div>
  );
}

// ── MEMBERSHIP ──────────────────────────────────────────────

const TIERS = [
  { tier:"Silver", icon:"🥈", title:"Voice Seeker", price:"₹999",  annual:"₹9,590",  color:"#9ba8b8",
    features:["Private WhatsApp community","1 live group Q&A/month with Anita","Monthly resource drop","10% off all eBooks","Peer accountability check-ins","Welcome kit + Mindset Guide"] },
  { tier:"Gold",   icon:"🥇", title:"Voice Builder", price:"₹1,999",annual:"₹19,190", color:C.gold, popular:true,
    features:["Everything in Silver","2 live group coaching sessions/month","Monthly masterclass (live + recorded)","Weekly CBT journal prompts","15% off all eBooks","Priority WhatsApp support (48hr)","Early access to new launches","Member Spotlight celebrations"] },
  { tier:"Diamond",icon:"💎", title:"Voice Leader",  price:"₹3,499",annual:"₹33,590", color:"#b8a0d8",
    features:["Everything in Gold","Quarterly 1:1 with Anita (30 min)","Full masterclass archive access","Personalised CBT progress tracking","20% off all eBooks & courses","VIP WhatsApp — direct line to Anita","Annual Diamond Retreat invite","Diamond Certificate after 6 months"] },
];

function MembershipTab() {
  const [billing, setBilling] = useState("monthly");
  return (
    <div style={{ padding:"1rem" }}>
      <SectionHead eyebrow="Membership" title="Your ongoing <em style='color:#c4607a'>home</em> for growth"
        sub="Warm community · Live coaching · Real transformation" />
      <div style={{ display:"flex", background:"#f0ecf8", borderRadius:"3rem",
        padding:"0.22rem", marginBottom:"1.1rem", maxWidth:270, margin:"0 auto 1.1rem" }}>
        {[{id:"monthly",l:"Monthly"},{id:"annual",l:"Annual"}].map(b => (
          <button key={b.id} onClick={() => setBilling(b.id)} style={{
            flex:1, background:billing===b.id ? C.navy : "transparent",
            color:billing===b.id ? "#fff" : C.muted, border:"none", borderRadius:"3rem",
            padding:"0.48rem 0.6rem", fontSize:"0.72rem", fontWeight:600,
            cursor:"pointer", transition:"all 0.2s", fontFamily:"'DM Sans',sans-serif" }}>
            {b.id==="annual"
              ? <span>Annual <span style={{ background:C.gold, color:C.navy, fontSize:"0.52rem",
                  padding:"0.08rem 0.38rem", borderRadius:"1rem", fontWeight:800 }}>Save 20%</span></span>
              : b.l}
          </button>
        ))}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:"0.85rem" }}>
        {TIERS.map(m => (
          <Card key={m.tier} style={{ overflow:"hidden",
            border: m.popular ? `2px solid ${C.gold}` : undefined }}>
            {m.popular && (
              <div style={{ background:`linear-gradient(135deg,${C.gold},#e0c070)`,
                color:C.navy, fontSize:"0.62rem", fontWeight:800,
                letterSpacing:"0.12em", textTransform:"uppercase",
                textAlign:"center", padding:"0.28rem" }}>⭐ Most Popular</div>
            )}
            <div style={{ padding:"1.15rem" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"0.55rem", marginBottom:"0.7rem" }}>
                <span style={{ fontSize:"1.75rem" }}>{m.icon}</span>
                <div style={{ flex:1 }}>
                  <div style={{ fontSize:"0.62rem", fontWeight:700, letterSpacing:"0.14em",
                    textTransform:"uppercase", color:m.color, marginBottom:"1px" }}>{m.tier}</div>
                  <div style={{ fontFamily:"Georgia,serif", fontSize:"1.05rem",
                    fontWeight:600, color:C.navy }}>{m.title}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontWeight:700, fontSize:"1.25rem", color:m.color }}>
                    {billing==="monthly" ? m.price : m.annual}
                  </div>
                  <div style={{ fontSize:"0.6rem", color:C.muted }}>
                    {billing==="monthly" ? "/month" : "/year"}
                  </div>
                </div>
              </div>
              <ul style={{ margin:"0 0 1rem", padding:0, listStyle:"none",
                display:"flex", flexDirection:"column", gap:"0.36rem" }}>
                {m.features.map((f,i) => (
                  <li key={i} style={{ display:"flex", gap:"0.42rem",
                    fontSize:"0.76rem", color:C.navy, lineHeight:1.45 }}>
                    <span style={{ width:15, height:15, borderRadius:"50%",
                      background:m.color+"25", color:m.color,
                      display:"inline-flex", alignItems:"center", justifyContent:"center",
                      fontSize:"0.52rem", fontWeight:700, flexShrink:0, marginTop:"1px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Btn href={WA} v={m.popular ? "gold" : "outline"} full>
                {m.popular ? `Join ${m.tier} →` : `Get Started →`}
              </Btn>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ marginTop:"0.85rem", textAlign:"center", fontSize:"0.68rem",
        color:C.muted, lineHeight:1.6 }}>
        Billed via Razorpay in INR · Cancel anytime · Questions?{" "}
        <a href={`mailto:${EMAIL}`} style={{ color:C.rose, fontWeight:600 }}>{EMAIL}</a>
      </div>
    </div>
  );
}

// ── COACHES ─────────────────────────────────────────────────

function CoachesTab() {
  return (
    <div style={{ padding:"1rem" }}>
      <SectionHead eyebrow="Your Coaches" title="Two coaches. <em style='color:#c4607a'>One partnership.</em>"
        sub='"She rewires your mind. He commands the room. Together — they transform you."' />
      {[
        { emoji:"🌸", badge:"CBT Coach · Co-Founder", badgeColor:C.rose,
          name:"Anita Sen Majumdar",
          title:"Communication Coach · CBT Menopause Specialist",
          bio:"Anita brings the inside work — the CBT tools, the mindset rewiring, and the emotional intelligence that turns freezing into fluency and hormonal chaos into calm confidence. She coaches both professionals and midlife women.",
          tags:["CBT coaching","Menopause navigation","Emotional regulation","Impromptu speaking","Non-native professionals"],
          tagColor:C.rose, borderColor:C.roseSoft, bg:"#fdf5f7" },
        { emoji:"🎤", badge:"Speaking Coach · Co-Founder", badgeColor:"#1255a1",
          name:"Arindam Sen",
          title:"Impromptu Speaking · Body Language · Executive Presence",
          bio:"Arindam brings the outside work — the presence, the power, the performance side of speaking that makes people stop and listen. A specialist in impromptu communication and body language, he helps professionals own every room they walk into.",
          tags:["Impromptu speaking","Body language","Stage presence","Public speaking","Corporate coaching"],
          tagColor:"#1255a1", borderColor:"#7ec8f0", bg:"#f0f8ff" },
      ].map(coach => (
        <Card key={coach.name} style={{ padding:"1.15rem", marginBottom:"0.8rem", background:coach.bg }}>
          <div style={{ display:"flex", gap:"0.9rem", alignItems:"flex-start" }}>
            <div style={{ width:58, height:58, borderRadius:"50%", flexShrink:0,
              background:`linear-gradient(135deg,${coach.borderColor}55,${coach.borderColor}22)`,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"1.7rem", border:`2px solid ${coach.borderColor}` }}>{coach.emoji}</div>
            <div style={{ flex:1 }}>
              <div style={{ display:"inline-block", background:coach.badgeColor+"18",
                color:coach.badgeColor, fontSize:"0.58rem", fontWeight:700,
                letterSpacing:"0.1em", textTransform:"uppercase",
                padding:"0.13rem 0.55rem", borderRadius:"2rem", marginBottom:"0.3rem" }}>
                {coach.badge}
              </div>
              <div style={{ fontFamily:"Georgia,serif", fontSize:"1.05rem",
                fontWeight:600, color:C.navy }}>{coach.name}</div>
              <div style={{ fontSize:"0.7rem", color:C.muted }}>{coach.title}</div>
            </div>
          </div>
          <p style={{ fontSize:"0.78rem", lineHeight:1.65, color:C.navy,
            margin:"0.75rem 0 0.75rem", fontStyle:"italic",
            borderLeft:`3px solid ${coach.borderColor}`, paddingLeft:"0.7rem" }}>
            {coach.bio}
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem" }}>
            {coach.tags.map(t => (
              <div key={t} style={{ background:coach.tagColor+"12", color:coach.tagColor,
                fontSize:"0.63rem", padding:"0.18rem 0.52rem",
                borderRadius:"2rem", border:`1px solid ${coach.tagColor}33` }}>{t}</div>
            ))}
          </div>
        </Card>
      ))}
      <Card style={{ padding:"1.2rem", background:C.navy, textAlign:"center" }}>
        <div style={{ fontFamily:"Georgia,serif", fontSize:"0.95rem", fontStyle:"italic",
          color:"rgba(255,255,255,0.83)", lineHeight:1.7, marginBottom:"0.55rem" }}>
          "Between us, we cover every part of your voice — inside and out.
          Mind and presence. Confidence and command."
        </div>
        <div style={{ fontSize:"0.68rem", color:"rgba(255,255,255,0.38)", letterSpacing:"0.08em" }}>
          — Anita &amp; Arindam Sen, Co-Founders, UnmutedWorld
        </div>
      </Card>
      <div style={{ marginTop:"1rem", textAlign:"center" }}>
        <Btn href={WA} v="primary">📅 Book a Free Discovery Call</Btn>
      </div>
    </div>
  );
}

// ── CONTACT ─────────────────────────────────────────────────

function ContactTab() {
  return (
    <div style={{ padding:"1rem" }}>
      <SectionHead eyebrow="Get In Touch" title="Reach Anita, <em style='color:#c4607a'>your way</em>"
        sub="No pressure · No pitch · Just a warm conversation" />
      <div style={{ display:"flex", flexDirection:"column", gap:"0.65rem", marginBottom:"1.1rem" }}>
        {[
          { icon:"📲", label:"WhatsApp — Book a Discovery Call", sub:"+91 78999 60145 · 8 AM – 10 PM IST", href:WA,      color:"#25D366", bg:"#f0fff5" },
          { icon:"📅", label:"Topmate — Quick 15-min Connect",   sub:"Free · No agenda · Book instantly",   href:TOPMATE, color:C.rose,    bg:"#fff5f8" },
          { icon:"🎓", label:"Browse All Courses",               sub:"6 programmes on Graphy",              href:COURSES, color:"#1255a1", bg:"#f0f5ff" },
          { icon:"📚", label:"Digital Store",                    sub:"eBooks · Instant download",           href:STORE,   color:"#6b45a0", bg:"#f5f0ff" },
          { icon:"📧", label:"Email Anita",                      sub:EMAIL,                                 href:`mailto:${EMAIL}`, color:C.navy, bg:"#f8f8ff" },
        ].map(item => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration:"none" }}>
            <Card style={{ padding:"0.95rem", background:item.bg,
              display:"flex", alignItems:"center", gap:"0.85rem" }}>
              <div style={{ width:42, height:42, borderRadius:"50%", background:item.color+"18",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"1.25rem", flexShrink:0 }}>{item.icon}</div>
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:"0.85rem", color:C.navy }}>{item.label}</div>
                <div style={{ fontSize:"0.71rem", color:C.muted }}>{item.sub}</div>
              </div>
              <span style={{ color:item.color, fontSize:"1rem" }}>→</span>
            </Card>
          </a>
        ))}
      </div>

      <div style={{ background:`linear-gradient(135deg,${C.navy},#1a0a2e)`,
        borderRadius:"1.1rem", padding:"1.4rem", textAlign:"center" }}>
        <div style={{ fontSize:"1.4rem", marginBottom:"0.45rem" }}>🌟</div>
        <div style={{ fontFamily:"Georgia,serif", fontSize:"1.05rem",
          color:"#fff", marginBottom:"0.35rem" }}>Free Discovery Call</div>
        <div style={{ fontSize:"0.76rem", color:"rgba(255,255,255,0.5)",
          lineHeight:1.6, marginBottom:"0.95rem" }}>
          30 minutes · Completely free · No obligation<br/>
          Anita listens to where you are and honestly tells you what fits
        </div>
        <Btn href={WA} v="primary">📲 Book via WhatsApp</Btn>
        <div style={{ margin:"0.55rem 0 0" }}>
          <Btn href={TOPMATE} v="ghost" sm>📅 Or book 15 min on Topmate</Btn>
        </div>
      </div>

      <div style={{ marginTop:"1rem", fontSize:"0.63rem", color:C.muted,
        textAlign:"center", lineHeight:1.7 }}>
        UnmutedWorld is operated by Anita Sen Majumdar<br/>
        Bengaluru, Karnataka, India<br/>
        <a href={`mailto:${EMAIL}`} style={{ color:C.rose }}>{EMAIL}</a>
      </div>
    </div>
  );
}

// ── UMA CHATBOT ─────────────────────────────────────────────

const UMA_KB = [
  { triggers:["hi","hello","hey","namaste","start"],
    bot:"Hello! I am **Uma**, your personal guide at UnmutedWorld 🌸\n\nI can help you with courses, eBooks, membership, booking a Discovery Call, or reaching Anita directly.\n\nWhat brings you here today?",
    chips:["I am a Professional","I am a Midlife Woman","About Membership","Browse eBooks","Book a Discovery Call"] },
  { triggers:["professional","speak","speaking","english","meetings","freeze","non-native","communication","impromptu"],
    bot:"You are in the right place! 🎙️\n\n**Programmes for non-native professionals:**\n• Speak On The Spot — 12 weeks\n• Speak With Confidence — 6 weeks\n• Fast Track Intensive — 4 weeks\n\n📚 Start with an eBook — the perfect first step!\n\nWould you like to book a free Discovery Call with Anita?",
    chips:["Browse eBooks","All Courses","Book a Discovery Call","About Membership"] },
  { triggers:["menopause","perimenopause","midlife","women","woman","hormones","brain fog","anxiety","cbt","mood","identity","sleep"],
    bot:"You are absolutely not alone, and you are in the right place 🌺\n\n**CBT coaching for midlife women:**\n• Anxiety and mood regulation\n• Brain fog and sleep strategies\n• Rebuilding identity and confidence\n\n**Programmes:**\n• Reclaim Your Voice — 10 weeks\n• First Steps — 6 weeks\n• Women's Circle — Group\n\nStart with our Menopause eBook series!",
    chips:["Browse eBooks","All Courses","Book a Discovery Call","About Membership"] },
  { triggers:["ebook","ebooks","digital","store","download","guide","pdf","resource"],
    bot:"📚 Our eBooks are the most enriching first step!\n\n**For Professionals:** PREP Formula Series, On-The-Spot Guides\n**For Women:** CBT Menopause Series, Emotional Regulation Guides\n\nInstant download — accessibly priced!",
    chips:["Browse Digital Store","All Courses","Book a Discovery Call"] },
  { triggers:["course","courses","programme","programmes","enrol","all courses"],
    bot:"🎓 Our full course catalogue:\n\n**For Professionals:**\n• Speak On The Spot — 12 wks\n• Speak With Confidence — 6 wks\n• Fast Track Intensive — 4 wks\n\n**For Women:**\n• Reclaim Your Voice — 10 wks\n• First Steps — 6 wks\n• Women's Circle — Group\n\nNot sure which fits? Book a free Discovery Call!",
    chips:["Book a Discovery Call","Browse eBooks","About Membership"] },
  { triggers:["membership","member","silver","gold","diamond","community","ongoing"],
    bot:"🌺 **UnmutedWorld Membership** — your ongoing home for growth!\n\n🥈 **Silver — Voice Seeker:** ₹999/month\nCommunity + 1 monthly group Q&A\n\n🥇 **Gold — Voice Builder:** ₹1,999/month\n2 coaching sessions + masterclass + 15% off eBooks\n\n💎 **Diamond — Voice Leader:** ₹3,499/month\nQuarterly 1:1 with Anita + VIP WhatsApp + retreat invite\n\nQuestions? WhatsApp Anita anytime!",
    chips:["Book a Discovery Call","Browse eBooks","Contact Anita"] },
  { triggers:["discovery","free call","book a call","book call","schedule","appointment","consultation"],
    bot:"🌟 A Discovery Call is the warmest place to start!\n\n✅ 30 minutes — completely free\n✅ No pressure, no obligation\n✅ Anita listens to exactly where you are\n✅ She will honestly tell you what fits\n\n📅 Available 8 AM – 10 PM IST",
    chips:["WhatsApp to Book","Contact Anita","About Membership"] },
  { triggers:["contact","reach","email","phone","whatsapp","get in touch"],
    bot:"Reach Anita in whatever way feels most comfortable! 💛\n\n📲 WhatsApp: +91 78999 60145\n📧 hello@unmutedworld.com\n📅 Quick 15-min connect on Topmate\n\nShe responds within 24 hours, warmly and personally 🌸",
    chips:["WhatsApp to Book","Book on Topmate","Browse eBooks"] },
  { triggers:["price","pricing","cost","fee","how much","rupee","inr","payment"],
    bot:"💰 Pricing overview:\n\n**eBooks:** Browse the Digital Store\n\n**Membership:**\nSilver ₹999/mo | Gold ₹1,999/mo | Diamond ₹3,499/mo\n\n**1:1 Coaching:**\n• Speak With Confidence — ₹14,999\n• Speak On The Spot — ₹29,999\n• Fast Track — ₹19,999\n• First Steps — ₹14,999\n• Reclaim Your Voice — ₹29,999\n• Women's Circle — ₹12,999/person\n\nPayment plans available — discuss on your free call!",
    chips:["Book a Discovery Call","Browse eBooks","About Membership"] },
  { triggers:["refund","cancel","money back","return"],
    bot:"📋 UnmutedWorld Refund Policy:\n\n📚 eBooks: Non-refundable once downloaded\n🎓 Courses & Membership: 7-day refund if under 20% accessed\n🌿 1:1 Coaching: Full refund before first session\n\nAnita always tries to resolve things warmly first!\n📧 hello@unmutedworld.com",
    chips:["Contact Anita","Browse eBooks","Book a Discovery Call"] },
  { triggers:["not receiving","no email","confirmation","no confirmation"],
    bot:"📬 No confirmation email after purchase?\n\n1️⃣ Check your **Spam / Promotions** folder\n2️⃣ Wait 5–10 minutes — sometimes delayed\n3️⃣ Check the email you used for payment\n\nStill nothing? Contact Anita directly!",
    chips:["WhatsApp to Book","Contact Anita"] },
  { triggers:["cannot access","can't access","access problem","login","log in"],
    bot:"🔑 Can't access your course?\n\n1️⃣ Go to anitasenmajumdar0255.graphy.com\n2️⃣ Click **Login** at the top right\n3️⃣ Use the **same email** you paid with\n4️⃣ Click **Forgot Password** if needed\n\nStill stuck? WhatsApp Anita: +91 78999 60145",
    chips:["WhatsApp to Book","Contact Anita"] },
  { triggers:["zoom","session link","meeting link"],
    bot:"💻 Zoom session link?\n\nAnita sends the Zoom link **24 hours before** your session via email and WhatsApp.\n\nNot received it? Message her directly:\n📲 +91 78999 60145",
    chips:["WhatsApp to Book","Contact Anita"] },
  { triggers:["reschedule","cancel session","change session","postpone"],
    bot:"📅 Need to reschedule?\n\nNo problem at all! Please give Anita **at least 24 hours notice**.\n\nWhatsApp her directly:\n📲 +91 78999 60145",
    chips:["WhatsApp to Book","Contact Anita"] },
  { triggers:["thank","thanks","great","awesome","wonderful","amazing"],
    bot:"You are so welcome! 🌸 Your voice matters and you deserve all the support.\n\nIs there anything else I can help you with?",
    chips:["Browse eBooks","About Membership","Book a Discovery Call"] },
];

function UmaChat({ onClose }) {
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [chips, setChips] = useState(["I am a Professional","I am a Midlife Woman","Browse eBooks","Book a Discovery Call","Help & Support"]);
  const [started, setStarted] = useState(false);
  const msgRef = useState(null);
  const bottomRef = useState(null);

  const addMsg = (text, role, newChips) => {
    setMsgs(prev => [...prev, { text, role, id: Date.now() + Math.random() }]);
    if (newChips !== undefined) setChips(newChips);
    setTimeout(() => {
      const el = document.getElementById("uma-msgs-app");
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  };

  const processInput = (text) => {
    const lower = text.toLowerCase();

    // Special chip actions
    if (lower.includes("whatsapp to book")) {
      window.open(WA, "_blank");
      addMsg("Opening WhatsApp to connect with Anita! 📲", "bot", ["Browse eBooks","All Courses","About Membership"]);
      return;
    }
    if (lower.includes("browse digital store")) {
      window.open(STORE, "_blank");
      addMsg("Opening the Digital Store! 📚", "bot", ["All Courses","Book a Discovery Call"]);
      return;
    }
    if (lower.includes("book on topmate")) {
      window.open(TOPMATE, "_blank");
      addMsg("Opening Topmate for a quick 15-min connect! 📅", "bot", ["Browse eBooks","About Membership"]);
      return;
    }

    // Find matching KB entry
    const match = UMA_KB.find(k => k.triggers.some(t => lower.includes(t)));

    if (match) {
      setTimeout(() => {
        addMsg(match.bot, "bot", match.chips);
      }, 500);
    } else {
      setTimeout(() => {
        addMsg("Great question! Let me connect you directly with Anita 🌸\n\n📲 WhatsApp: +91 78999 60145\n📧 hello@unmutedworld.com\n\nOr browse the app for courses and eBooks!", "bot",
          ["WhatsApp to Book","Browse eBooks","All Courses","About Membership"]);
      }, 500);
    }
  };

  const handleSend = (text) => {
    const t = text || input.trim();
    if (!t) return;
    setInput("");
    addMsg(t, "user");
    setChips([]);
    processInput(t);
  };

  // Welcome message on open
  useState(() => {
    if (!started) {
      setStarted(true);
      setTimeout(() => {
        addMsg("Hello! I am **Uma** 🌸\n\nYour personal guide at UnmutedWorld. I am here to help you find the right course, book a call with Anita, or answer any questions.\n\nWhat brings you here today?", "bot",
          ["I am a Professional","I am a Midlife Woman","Browse eBooks","Book a Discovery Call","Help & Support"]);
      }, 300);
    }
  }, []);

  const renderText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <div style={{
      position:"fixed", bottom:80, right:16, zIndex:999,
      width: Math.min(360, window.innerWidth - 32),
      height:480, display:"flex", flexDirection:"column",
      background:"#fff", borderRadius:"1.2rem",
      boxShadow:"0 8px 40px rgba(13,27,62,0.22)",
      border:"1px solid rgba(196,96,122,0.2)", overflow:"hidden",
      fontFamily:"'DM Sans',sans-serif",
    }}>
      {/* Header */}
      <div style={{ background:`linear-gradient(135deg,${C.navy},#1a0a2e)`,
        padding:"0.85rem 1rem", display:"flex", alignItems:"center", gap:"0.7rem" }}>
        <div style={{ width:38, height:38, borderRadius:"50%",
          background:"linear-gradient(135deg,#c4607a,#e8b4c0)",
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:"1.2rem", flexShrink:0 }}>🌸</div>
        <div style={{ flex:1 }}>
          <div style={{ color:"#fff", fontWeight:700, fontSize:"0.9rem" }}>Uma</div>
          <div style={{ color:"rgba(255,255,255,0.5)", fontSize:"0.65rem" }}>
            UnmutedWorld Guide · Always here 🌿
          </div>
        </div>
        <button onClick={onClose} style={{ background:"none", border:"none",
          color:"rgba(255,255,255,0.5)", fontSize:"1.2rem", cursor:"pointer",
          padding:"0.2rem 0.4rem", lineHeight:1 }}>✕</button>
      </div>

      {/* Messages */}
      <div id="uma-msgs-app" style={{ flex:1, overflowY:"auto", padding:"0.85rem",
        display:"flex", flexDirection:"column", gap:"0.6rem", scrollbarWidth:"none" }}>
        {msgs.map(m => (
          <div key={m.id} style={{
            display:"flex", flexDirection: m.role==="user" ? "row-reverse" : "row",
            alignItems:"flex-end", gap:"0.4rem",
          }}>
            {m.role === "bot" && (
              <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0,
                background:"linear-gradient(135deg,#c4607a,#e8b4c0)",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"0.8rem" }}>🌸</div>
            )}
            <div style={{
              maxWidth:"82%",
              background: m.role==="user"
                ? `linear-gradient(135deg,${C.rose},#d4879a)`
                : "#f8f4f9",
              color: m.role==="user" ? "#fff" : C.navy,
              padding:"0.6rem 0.85rem", borderRadius:"1rem",
              borderBottomRightRadius: m.role==="user" ? "0.2rem" : "1rem",
              borderBottomLeftRadius: m.role==="bot" ? "0.2rem" : "1rem",
              fontSize:"0.78rem", lineHeight:1.55,
            }} dangerouslySetInnerHTML={{ __html: renderText(m.text) }} />
          </div>
        ))}
      </div>

      {/* Chips */}
      {chips.length > 0 && (
        <div style={{ padding:"0.4rem 0.7rem", display:"flex", flexWrap:"wrap",
          gap:"0.35rem", borderTop:"1px solid rgba(196,96,122,0.1)" }}>
          {chips.map(c => (
            <button key={c} onClick={() => handleSend(c)} style={{
              background:"rgba(196,96,122,0.1)", color:C.rose,
              border:`1px solid rgba(196,96,122,0.25)`, borderRadius:"2rem",
              padding:"0.28rem 0.7rem", fontSize:"0.68rem", fontWeight:600,
              cursor:"pointer", fontFamily:"'DM Sans',sans-serif",
            }}>{c}</button>
          ))}
        </div>
      )}

      {/* Input */}
      <div style={{ padding:"0.6rem 0.7rem", borderTop:"1px solid rgba(196,96,122,0.1)",
        display:"flex", gap:"0.4rem" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==="Enter" && handleSend()}
          placeholder="Type a message..."
          style={{ flex:1, border:"1px solid rgba(196,96,122,0.25)",
            borderRadius:"2rem", padding:"0.5rem 0.85rem",
            fontSize:"0.78rem", outline:"none", fontFamily:"'DM Sans',sans-serif",
            color:C.navy, background:"#fdf8f5" }}
        />
        <button onClick={() => handleSend()} style={{
          background:`linear-gradient(135deg,${C.rose},#d4879a)`,
          color:"#fff", border:"none", borderRadius:"50%",
          width:36, height:36, fontSize:"1rem", cursor:"pointer",
          display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
        }}>→</button>
      </div>
    </div>
  );
}

// ── ROOT ────────────────────────────────────────────────────

export default function App() {
  const [tab, setTab] = useState("home");
  const [umaOpen, setUmaOpen] = useState(false);

  const TAB_MAP = {
    home: <HomeTab setTab={setTab} />,
    courses: <CoursesTab />,
    ebooks: <EbooksTab />,
    membership: <MembershipTab />,
    coaches: <CoachesTab />,
    contact: <ContactTab />,
  };

  return (
    <div style={{ fontFamily:"'DM Sans',sans-serif", background:C.offWhite,
      minHeight:"100vh", color:C.navy, overflowX:"hidden" }}>
      <TopNav tab={tab} setTab={setTab} />
      <div style={{ maxWidth:480, margin:"0 auto" }}>
        {TAB_MAP[tab]}
      </div>

      {/* Uma Chat Window */}
      {umaOpen && <UmaChat onClose={() => setUmaOpen(false)} />}

      {/* Uma Launcher Button */}
      <button onClick={() => setUmaOpen(!umaOpen)} style={{
        position:"fixed", bottom:80, right:16, zIndex:1000,
        width:56, height:56, borderRadius:"50%",
        background:`linear-gradient(135deg,${C.rose},#d4879a)`,
        border:"3px solid #fff", cursor:"pointer",
        boxShadow:"0 4px 20px rgba(196,96,122,0.5)",
        display:"flex", alignItems:"center", justifyContent:"center",
        fontSize:"1.5rem", transition:"all 0.22s",
      }}>
        {umaOpen ? "✕" : "🌸"}
      </button>

      {/* Uma greeting bubble */}
      {!umaOpen && (
        <div onClick={() => setUmaOpen(true)} style={{
          position:"fixed", bottom:148, right:16, zIndex:999,
          background:"#fff", borderRadius:"1rem 1rem 0.2rem 1rem",
          padding:"0.55rem 0.85rem", cursor:"pointer",
          boxShadow:"0 4px 16px rgba(13,27,62,0.15)",
          border:"1px solid rgba(196,96,122,0.2)",
          fontSize:"0.72rem", color:C.navy, maxWidth:180,
          fontFamily:"'DM Sans',sans-serif",
          animation:"uma-bounce 2s ease-in-out infinite",
        }}>
          <style>{`@keyframes uma-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
          <strong style={{ color:C.rose }}>Hi! I'm Uma 🌸</strong><br/>
          Ask me anything about UnmutedWorld!
        </div>
      )}

      {/* Sticky bottom bar */}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, zIndex:200,
        background:"rgba(13,27,62,0.97)", backdropFilter:"blur(14px)",
        borderTop:"1px solid rgba(232,180,192,0.12)", padding:"0.6rem 1rem" }}>
        <div style={{ display:"flex", gap:"0.55rem", maxWidth:480, margin:"0 auto" }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            flex:1, background:"#25D366", color:"#fff", textAlign:"center",
            padding:"0.62rem", borderRadius:"0.65rem", fontWeight:700,
            fontSize:"0.75rem", textDecoration:"none",
            display:"flex", alignItems:"center", justifyContent:"center", gap:"0.3rem" }}>
            📲 Free Call
          </a>
          <a href={COURSES} target="_blank" rel="noopener noreferrer" style={{
            flex:1, background:C.rose, color:"#fff", textAlign:"center",
            padding:"0.62rem", borderRadius:"0.65rem", fontWeight:700,
            fontSize:"0.75rem", textDecoration:"none",
            display:"flex", alignItems:"center", justifyContent:"center", gap:"0.3rem" }}>
            🎓 All Courses
          </a>
          <a href={STORE} target="_blank" rel="noopener noreferrer" style={{
            flex:1, background:C.navyMid, color:"#fff", textAlign:"center",
            padding:"0.62rem", borderRadius:"0.65rem", fontWeight:700,
            fontSize:"0.75rem", textDecoration:"none",
            display:"flex", alignItems:"center", justifyContent:"center", gap:"0.3rem" }}>
            📚 eBooks
          </a>
        </div>
      </div>
      <div style={{ height:68 }} />
    </div>
  );
}
