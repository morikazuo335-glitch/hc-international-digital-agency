"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Plus, Minus, Sparkles, Globe2, MoveUpRight, Check, Play } from "lucide-react";

const services = [
  { n:"01", title:"Digital experiences", tag:"STRATEGY · DESIGN · DEVELOPMENT", desc:"Distinctive websites and digital platforms that turn first impressions into lasting brand preference.", detail:"Brand-led websites · Webflow · Framer · Custom development" },
  { n:"02", title:"Commerce & growth", tag:"SHOPIFY · SOCIAL COMMERCE", desc:"Commerce ecosystems built to make discovery effortless and buying feel inevitable.", detail:"Shopify stores · TikTok Shop · Instagram & Facebook Shops" },
  { n:"03", title:"Intelligent operations", tag:"AUTOMATION · AI SYSTEMS", desc:"Thoughtful systems that remove friction, protect opportunities and give teams room to do their best work.", detail:"Lead response · Workflow automation · AI-assisted operations" },
  { n:"04", title:"White-label studio", tag:"YOUR BRAND · OUR DELIVERY", desc:"A discreet production partner for agencies and consultants who need exceptional execution without expanding their team.", detail:"Design & development · Overflow capacity · Partner delivery" },
  { n:"05", title:"Mobile products", tag:"PRODUCT · EXPERIENCE", desc:"Intuitive mobile experiences designed around the people who use them and the outcomes that matter.", detail:"Product design · App experiences · Prototypes" },
  { n:"06", title:"Digital direction", tag:"CONSULTING · CREATIVE DIRECTION", desc:"Clear thinking, confident decisions and a digital roadmap that connects ambition to action.", detail:"Digital strategy · Experience audits · Growth planning" }
];

const projects = [
  { id:"01", category:"Commerce", name:"Maison Élan", type:"Luxury commerce experience", image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85", label:"A considered world of modern luxury" },
  { id:"02", category:"Digital", name:"Forma Atelier", type:"Brand-led digital experience", image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", label:"Spaces made to inspire" },
  { id:"03", category:"Technology", name:"NOVA Systems", type:"Technology & innovation platform", image:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85", label:"Clarity for complex ideas" },
  { id:"04", category:"Digital", name:"Aurelia House", type:"Editorial brand experience", image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85", label:"A quieter kind of statement" }
];

const faqs = [
  ["What does HC International Digital Agency do?","We partner with ambitious businesses, founders and agencies to design and deliver digital experiences, commerce platforms, automation systems and mobile products."],
  ["How does your white-label partnership work?","We work behind the scenes as an extension of your team. You own the client relationship and present the work under your brand; we provide agreed delivery, communication and quality control."],
  ["Do you work with international clients?","Yes. Our approach is built for international collaboration, with clear scopes, async-friendly communication and delivery milestones."],
  ["Can you work with our existing team or platform?","Absolutely. We can complement an in-house team, work alongside your preferred tools, or take ownership of a defined project from start to finish."],
  ["How do we get started?","Send us a short outline of what you are building. We will review the opportunity and come back with sensible next steps." ]
];

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const [activeFilter,setActiveFilter]=useState("All");
  const [openFaq,setOpenFaq]=useState(0);
  const [activeService,setActiveService]=useState(null);
  const [sent,setSent]=useState(false);
  const filtered=activeFilter==="All"?projects:projects.filter(p=>p.category===activeFilter);
  const closeMenu=()=>setMenuOpen(false);
  return <main>
    <div className="announcement"><span className="live-dot"/> INDEPENDENT DIGITAL PARTNER <span className="announcement-sep">—</span> WORKING WORLDWIDE</div>
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="HC International home"><span className="brand-mark">HC</span><span className="brand-name">INTERNATIONAL<small>DIGITAL AGENCY</small></span></a>
      <nav className={menuOpen?"nav-links open":"nav-links"}>
        {["Services","Studio","Work","Partnership","Contact"].map((x)=><a key={x} href={"#"+x.toLowerCase()} onClick={closeMenu}>{x}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-grain"/>
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-copy">
        <div className="eyebrow"><span/> THE DIGITAL PARTNER FOR WHAT'S NEXT</div>
        <h1>Make your<br/><em>next move</em><br/>matter<span className="gold-dot">.</span></h1>
        <div className="hero-bottom"><p>We build considered digital experiences, intelligent systems and enduring partnerships for brands with ambition.</p><a className="round-link" href="#studio" aria-label="Discover our studio"><ArrowDown/></a></div>
        <div className="hero-index"><span>01 / 04</span><span>STRATEGY — DESIGN — TECHNOLOGY</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=90" alt="Sculptural contemporary architecture with warm natural light"/><div className="image-shade"/></div>
        <div className="hero-stamp"><span>HC</span><small>BUILT FOR<br/>WHAT'S NEXT</small></div>
        <div className="vertical-note">INDEPENDENT THINKING. INTERNATIONAL REACH.</div>
        <div className="hero-caption"><span>01</span><span>DESIGNING THE DIGITAL FRONTIER</span></div>
      </div>
      <a className="scroll-cue" href="#studio"><span/> SCROLL TO EXPLORE</a>
    </section>

    <section className="manifesto section-pad" id="studio">
      <div className="section-kicker"><span>01</span> / THE STUDIO</div>
      <div className="manifesto-content"><p className="overline">GOOD WORK CHANGES EVERYTHING</p><h2>We bring <em>ambition</em><br/>into focus — then<br/>make it <span className="outline-text">real.</span></h2><div className="manifesto-foot"><p>HC International is an independent digital agency partnering with founders, businesses and creative teams to turn bold ideas into beautifully executed digital work.</p><a className="text-link" href="#services">Explore what we do <ArrowUpRight size={16}/></a></div></div>
      <div className="manifesto-side"><div className="orbit-art"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><div className="orbit-core">HC<span>✳</span></div><i className="orbit-node n1"/><i className="orbit-node n2"/></div><span className="side-caption">INDEPENDENT BY DESIGN / GLOBAL BY NATURE</span></div>
    </section>

    <section className="services section-pad" id="services">
      <div className="section-heading"><div><div className="section-kicker"><span>02</span> / CAPABILITIES</div><h2>Built around<br/><em>your next.</em></h2></div><p>One connected team. The right expertise at every stage. No unnecessary complexity.</p></div>
      <div className="service-list">{services.map((s,i)=><article className={"service-row "+(activeService===i?"expanded":"")} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(activeService===i?null:i)} aria-expanded={activeService===i}><span className="service-num">{s.n}</span><span className="service-main"><small>{s.tag}</small><strong>{s.title}</strong></span><span className="service-desc">{s.desc}</span><span className="service-plus">{activeService===i?<Minus/>:<Plus/>}</span></button>{activeService===i&&<div className="service-detail"><span>WHAT'S INCLUDED</span><p>{s.detail}</p><a href="#contact">Discuss this service <ArrowUpRight size={15}/></a></div>}</article>)}</div>
    </section>

    <section className="image-break"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=90" alt="Refined architectural interior with natural stone and sculptural furniture"/><div className="image-break-overlay"><span>FORM FOLLOWS POSSIBILITY</span><p>Not more noise.<br/><em>More meaning.</em></p><span className="break-bottom">HC INTERNATIONAL — DIGITAL AGENCY</span></div></section>

    <section className="work section-pad" id="work">
      <div className="section-heading"><div><div className="section-kicker"><span>03</span> / SELECTED WORLDS</div><h2>Work with<br/><em>intention.</em></h2></div><p>Every detail has a role. Every interaction has a reason. Explore the kind of digital worlds we love to create.</p></div>
      <div className="filter-bar">{["All","Digital","Commerce","Technology"].map(f=><button key={f} className={activeFilter===f?"filter active":"filter"} onClick={()=>setActiveFilter(f)}>{f}<span>{f==="All"?"04":String(projects.filter(p=>p.category===f).length).padStart(2,"0")}</span></button>)}</div>
      <div className="project-grid">{filtered.map((p,i)=><article className="project-card" key={p.id}><a href="#contact" className="project-image"><img src={p.image} alt={p.label}/><span className="project-open"><ArrowUpRight/></span><span className="project-count">{p.id} / 04</span></a><div className="project-info"><div><span>{p.category.toUpperCase()} / {p.type.toUpperCase()}</span><h3>{p.name}</h3></div><p>{p.label}</p></div></article>)}</div>
      <p className="concept-note">SELECTED CONCEPT DIRECTIONS — VISUALS ARE ILLUSTRATIVE, NOT CLIENT CASE STUDIES.</p>
    </section>

    <section className="partnership" id="partnership">
      <div className="partner-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90" alt="Elegant collaborative creative studio workspace"/><div className="partner-image-tag">YOUR STUDIO, EXTENDED.</div></div>
      <div className="partner-copy"><div className="section-kicker"><span>04</span> / THE PARTNERSHIP</div><p className="overline">A QUIETER KIND OF SUPERPOWER</p><h2>We build.<br/><em>You deliver.</em></h2><p className="partner-lead">Your clients. Your brand. Your relationship. We become the trusted team behind the scenes — delivering exceptional digital work while you stay focused on growth.</p><div className="partner-points"><span><Check/> Discreet, white-label delivery</span><span><Check/> Flexible project collaboration</span><span><Check/> Consistent quality and communication</span></div><a className="button-gold" href="#contact">Explore partnership <ArrowUpRight size={16}/></a></div>
    </section>

    <section className="process section-pad">
      <div className="section-heading"><div><div className="section-kicker"><span>05</span> / HOW WE WORK</div><h2>Clear thinking.<br/><em>Beautiful doing.</em></h2></div><p>Good partnerships feel effortless. Our process keeps the work focused, transparent and moving forward.</p></div>
      <div className="process-grid">{[["01","Listen","We start with your ambition, audience and the real challenge to solve."],["02","Shape","We define the right direction, scope and experience before we build."],["03","Create","Design and development move together, with thoughtful feedback at every step."],["04","Deliver","We refine, launch and leave you with a confident next chapter."]].map((p)=><div className="process-step" key={p[0]}><span>{p[0]}</span><div className="step-line"/><h3>{p[1]}</h3><p>{p[2]}</p></div>)}</div>
    </section>

    <section className="faq section-pad" id="about">
      <div className="faq-intro"><div className="section-kicker"><span>06</span> / GOOD TO KNOW</div><h2>A few things<br/><em>worth knowing.</em></h2><p>Have a different question? We would be glad to hear from you.</p><a className="text-link" href="#contact">Talk to our team <ArrowUpRight size={16}/></a></div>
      <div className="faq-list">{faqs.map((f,i)=><div className="faq-item" key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{f[0]}</span>{openFaq===i?<Minus/>:<Plus/>}</button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div>
    </section>

    <section className="contact section-pad" id="contact"><div className="contact-top"><div className="section-kicker"><span>07</span> / START A CONVERSATION</div><span className="contact-note">GOOD THINGS START WITH A HELLO.</span></div><h2>Have something<br/><em>in mind?</em></h2><div className="contact-bottom"><p>Tell us where you want to go. We'll help you work out the best way to get there.</p><a className="contact-mail" href="mailto:hello@hcinternational.digital">hello@hcinternational.digital <ArrowUpRight/></a></div><form className="contact-form" onSubmit={(e)=>{e.preventDefault();setSent(true);}}><input aria-label="Your name" placeholder="YOUR NAME" required/><input aria-label="Your email" type="email" placeholder="EMAIL ADDRESS" required/><select aria-label="What do you need?" defaultValue=""><option value="" disabled>WHAT ARE YOU LOOKING FOR?</option><option>Website or digital experience</option><option>Commerce / Shopify</option><option>Automation / AI systems</option><option>White-label partnership</option><option>Mobile product</option><option>Something else</option></select><textarea aria-label="Project details" placeholder="A LITTLE ABOUT YOUR PROJECT..." rows="3"/><button className="button-gold" type="submit">{sent?"Enquiry prepared — email us":"Send project enquiry"} <ArrowUpRight size={16}/></button><small>{sent?"Your details are ready. Please email hello@hcinternational.digital to send your enquiry.":"This demo form does not transmit or store your details."}</small></form></section>

    <footer><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark">HC</span><span className="brand-name">INTERNATIONAL<small>DIGITAL AGENCY</small></span></a><p>Your vision.<br/><em>Our expertise.</em><br/>Your brand.</p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div><div className="footer-bottom"><span>© 2026 HC INTERNATIONAL DIGITAL AGENCY</span><span>INDEPENDENT THINKING. INTERNATIONAL REACH.</span><a href="mailto:hello@hcinternational.digital">LET'S TALK ↗</a></div></footer>
  </main>;
}
