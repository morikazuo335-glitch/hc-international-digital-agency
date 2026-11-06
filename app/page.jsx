"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Plus, Minus, Check, ShoppingBag, MonitorSmartphone, Workflow, Code2, Handshake, Smartphone, Store } from "lucide-react";

const services = [
  { n:"01", icon:MonitorSmartphone, title:"Website design & development", tag:"WEBFLOW · FRAMER · BUSINESS WEBSITES", desc:"A professional website that explains what you do, earns trust quickly and turns the right visitors into enquiries.", detail:"Business websites · Webflow builds · Framer builds · Landing pages · Website redesigns · Responsive development" },
  { n:"02", icon:ShoppingBag, title:"Shopify & e-commerce", tag:"SHOPIFY STORES · ONLINE SALES", desc:"A clear, conversion-minded online store that makes it easier for customers to discover products, understand the offer and buy.", detail:"Shopify store setup · Store design · Product and collection structure · Product pages · Store improvements · Customer journey optimisation" },
  { n:"03", icon:Store, title:"Social commerce", tag:"TIKTOK SHOP · INSTAGRAM SHOP · FACEBOOK SHOP", desc:"Turn your social channels into organised shopping destinations. Help customers move from product discovery to a confident purchase.", detail:"TikTok Shop setup · Facebook Shop setup · Instagram Shop setup · Product catalogue organisation · Product tagging · Shop optimisation and social-selling journeys" },
  { n:"04", icon:Workflow, title:"Business automation & AI systems", tag:"ENQUIRY RESPONSE · FOLLOW-UP · WORKFLOW AUTOMATION", desc:"Reduce missed enquiries and repetitive admin with practical systems that respond, organise and follow up while your team focuses on customers.", detail:"Lead capture · Automated first responses · Enquiry routing · Follow-up workflows · CRM updates · AI-assisted business processes" },
  { n:"05", icon:Smartphone, title:"Mobile app experiences", tag:"MOBILE PRODUCT DESIGN · APP DEVELOPMENT", desc:"Plan and create useful mobile experiences around a real user need, with a clear flow from first screen to key action.", detail:"Mobile product planning · App interface design · User flows · Prototypes · Mobile application development" },
  { n:"06", icon:Handshake, title:"White-label digital delivery", tag:"AGENCY PARTNERSHIPS · BEHIND-THE-SCENES EXECUTION", desc:"Need a reliable delivery partner? We help agencies fulfil client projects under their own brand without carrying every specialist in-house.", detail:"White-label website builds · Shopify and commerce delivery · Design and development support · Project overflow · Agreed behind-the-scenes collaboration" }
];

const projects = [
  { id:"01", category:"Websites", name:"Business website experience", type:"Website design direction", image:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", label:"A polished digital home for a service business" },
  { id:"02", category:"E-commerce", name:"Shopify storefront", type:"E-commerce design direction", image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=85", label:"Product discovery, detail and purchase" },
  { id:"03", category:"Social commerce", name:"Social shopping journey", type:"Social commerce direction", image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85", label:"A product-led path from content to shop" },
  { id:"04", category:"Automation", name:"Enquiry workflow system", type:"Business automation direction", image:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85", label:"A clearer view of incoming opportunities" },
  { id:"05", category:"Mobile", name:"Mobile product interface", type:"Mobile experience direction", image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=1200&q=85", label:"A focused experience designed for mobile" }
];

const faqs = [
  ["Which services can I hire HC International for?","You can engage us for website design and development, Shopify and e-commerce, TikTok Shop, Instagram Shop and Facebook Shop setup, business automation and AI workflows, mobile app experiences, or white-label delivery for your agency."],
  ["Can I hire you for just one service?","Yes. You can start with one clearly defined need, such as a Shopify store, a business website, a TikTok Shop setup or an enquiry follow-up workflow. We will scope the work around that outcome."],
  ["How does white-label delivery work?","Your agency keeps the client relationship and presents the agreed work under your brand. We handle the delivery tasks defined in our partnership scope, with clear milestones and communication."],
  ["Do you work with international clients?","Yes. We are open to working with businesses, founders and agencies internationally. Project scope, communication and delivery milestones are agreed before work begins."],
  ["What happens after I enquire?","Tell us what you need, the platform involved and what a successful result looks like. We review the brief, clarify anything essential and respond with the most practical next step."]
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
    <div className="announcement"><span className="live-dot"/> DIGITAL SERVICES FOR BUSINESSES & AGENCIES <span className="announcement-sep">—</span> INTERNATIONAL PROJECTS</div>
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="HC International home"><span className="brand-mark">HC</span><span className="brand-name">INTERNATIONAL<small>DIGITAL AGENCY</small></span></a>
      <nav className={menuOpen?"nav-links open":"nav-links"}>
        {["Services","Who we help","Work","Partnership","Contact"].map((x)=><a key={x} href={x==="Who we help"?"#clients":"#"+x.toLowerCase()} onClick={closeMenu}>{x}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Discuss your project <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="home">
      <div className="hero-grain"/>
      <div className="hero-orbit orbit-one"/><div className="hero-orbit orbit-two"/>
      <div className="hero-copy">
        <div className="eyebrow"><span/> WE MAKE DIGITAL WORK WORK HARDER</div>
        <h1>Build better.<br/><em>Sell smarter.</em><br/>Move forward<span className="gold-dot">.</span></h1>
        <div className="hero-bottom"><p>Websites, online stores, social commerce and business automation — built to help your business attract, serve and convert customers.</p><a className="round-link" href="#services" aria-label="Explore our services"><ArrowDown/></a></div>
        <div className="hero-index"><span>HC / DIGITAL</span><span>WEBSITE — COMMERCE — AUTOMATION</span></div>
      </div>
      <div className="hero-visual">
        <div className="hero-image-frame"><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1500&q=90" alt="E-commerce checkout and payment experience on a digital device"/><div className="image-shade"/></div>
        <div className="hero-stamp"><span>HC</span><small>DESIGN<br/>BUILD<br/>GROW</small></div>
        <div className="vertical-note">PRACTICAL DIGITAL SOLUTIONS. CLEAR DELIVERY.</div>
        <div className="hero-caption"><span>01</span><span>FROM CUSTOMER DISCOVERY TO DELIVERY</span></div>
      </div>
      <a className="scroll-cue" href="#services"><span/> EXPLORE OUR SERVICES</a>
    </section>

    <section className="manifesto section-pad" id="clients">
      <div className="section-kicker"><span>01</span> / WHO WE HELP</div>
      <div className="manifesto-content"><p className="overline">DIGITAL SUPPORT WITH A CLEAR PURPOSE</p><h2>For businesses<br/>that need to <em>grow.</em><br/>For agencies that<br/>need to <span className="outline-text">deliver.</span></h2><div className="manifesto-foot"><p>We work with business owners who need a stronger online presence or smoother customer journey, and agencies that need dependable digital production behind their own brand.</p><a className="text-link" href="#contact">Tell us what you need <ArrowUpRight size={16}/></a></div></div>
      <div className="manifesto-side"><div className="orbit-art"><div className="orbit-ring r1"/><div className="orbit-ring r2"/><div className="orbit-core">HC<span>✳</span></div><i className="orbit-node n1"/><i className="orbit-node n2"/></div><span className="side-caption">BUSINESSES / FOUNDERS / AGENCIES</span></div>
    </section>

    <section className="services section-pad" id="services">
      <div className="section-heading"><div><div className="section-kicker"><span>02</span> / WHAT WE DO</div><h2>Specific skills.<br/><em>Useful outcomes.</em></h2></div><p>Choose the service you need. We define the scope around your platform, your customers and the result you want to achieve.</p></div>
      <div className="service-list">{services.map((s,i)=>{const Icon=s.icon;return <article className={"service-row "+(activeService===i?"expanded":"")} key={s.n}><button className="service-trigger" onClick={()=>setActiveService(activeService===i?null:i)} aria-expanded={activeService===i}><span className="service-num">{s.n}</span><span className="service-main"><small>{s.tag}</small><strong>{s.title}</strong></span><span className="service-desc">{s.desc}</span><span className="service-plus">{activeService===i?<Minus/>:<Plus/>}</span></button>{activeService===i&&<div className="service-detail"><span>DELIVERABLES</span><p>{s.detail}</p><a href="#contact">Enquire about this service <ArrowUpRight size={15}/></a></div>}</article>})}</div>
    </section>

    <section className="image-break"><img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=2000&q=90" alt="Customer browsing products in a retail environment"/><div className="image-break-overlay"><span>BETTER CUSTOMER EXPERIENCES START WITH BETTER SYSTEMS</span><p>Make it easy<br/>to <em>discover.</em><br/>Simple to buy.</p><span className="break-bottom">HC INTERNATIONAL — DIGITAL AGENCY</span></div></section>

    <section className="work section-pad" id="work">
      <div className="section-heading"><div><div className="section-kicker"><span>03</span> / SERVICE CONCEPTS</div><h2>See the kind<br/>of work we <em>build.</em></h2></div><p>Examples of the visual direction and digital deliverables behind our services. Each concept is illustrative, not a claimed client result.</p></div>
      <div className="filter-bar">{["All","Websites","E-commerce","Social commerce","Automation","Mobile"].map(f=><button key={f} className={activeFilter===f?"filter active":"filter"} onClick={()=>setActiveFilter(f)}>{f}<span>{f==="All"?String(projects.length).padStart(2,"0"):String(projects.filter(p=>p.category===f).length).padStart(2,"0")}</span></button>)}</div>
      <div className="project-grid">{filtered.map(p=><article className="project-card" key={p.id}><a href="#contact" className="project-image"><img src={p.image} alt={p.label}/><span className="project-open"><ArrowUpRight/></span><span className="project-count">{p.id} / {String(projects.length).padStart(2,"0")}</span></a><div className="project-info"><div><span>{p.category.toUpperCase()} / {p.type.toUpperCase()}</span><h3>{p.name}</h3></div><p>{p.label}</p></div></article>)}</div>
      <p className="concept-note">ILLUSTRATIVE SERVICE CONCEPTS — NOT CLIENT CASE STUDIES OR CLAIMED RESULTS.</p>
    </section>

    <section className="partnership" id="partnership">
      <div className="partner-image"><img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=90" alt="Professional creative team workspace"/><div className="partner-image-tag">A DELIVERY PARTNER FOR YOUR AGENCY.</div></div>
      <div className="partner-copy"><div className="section-kicker"><span>04</span> / FOR AGENCIES</div><p className="overline">WHITE-LABEL DIGITAL DELIVERY</p><h2>Your client.<br/><em>Your brand.</em></h2><p className="partner-lead">When your agency wins work but needs extra delivery capacity, we can support the project behind the scenes. You lead the client relationship. We deliver the agreed digital work under your brand.</p><div className="partner-points"><span><Check/> Website and Shopify project delivery</span><span><Check/> Flexible design and development support</span><span><Check/> Clear scope, milestones and communication</span></div><a className="button-gold" href="#contact">Discuss a partnership <ArrowUpRight size={16}/></a></div>
    </section>

    <section className="process section-pad">
      <div className="section-heading"><div><div className="section-kicker"><span>05</span> / HOW IT WORKS</div><h2>From brief<br/>to <em>delivery.</em></h2></div><p>A straightforward process that keeps expectations clear and the work moving.</p></div>
      <div className="process-grid">{[["01","Brief","Tell us your goal, platform, audience and what needs to be delivered."],["02","Scope","We confirm the deliverables, timeline, responsibilities and next steps."],["03","Build","We design, configure or develop the agreed solution and share progress."],["04","Handover","We review the work, make agreed refinements and hand over the deliverables."]].map(p=><div className="process-step" key={p[0]}><span>{p[0]}</span><div className="step-line"/><h3>{p[1]}</h3><p>{p[2]}</p></div>)}</div>
    </section>

    <section className="faq section-pad" id="about">
      <div className="faq-intro"><div className="section-kicker"><span>06</span> / QUESTIONS</div><h2>Before we<br/><em>get started.</em></h2><p>Need clarity on a service or partnership? Start here, then send us your brief.</p><a className="text-link" href="#contact">Talk about your project <ArrowUpRight size={16}/></a></div>
      <div className="faq-list">{faqs.map((f,i)=><div className="faq-item" key={f[0]}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{f[0]}</span>{openFaq===i?<Minus/>:<Plus/>}</button>{openFaq===i&&<p>{f[1]}</p>}</div>)}</div>
    </section>

    <section className="contact section-pad" id="contact"><div className="contact-top"><div className="section-kicker"><span>07</span> / PROJECT ENQUIRY</div><span className="contact-note">TELL US WHAT YOU NEED BUILT.</span></div><h2>What are you<br/><em>looking to achieve?</em></h2><div className="contact-bottom"><p>Tell us which service you need, what platform you use and what outcome matters most. We will review your brief and discuss the next step.</p><a className="contact-mail" href="mailto:hello@hcinternational.digital">hello@hcinternational.digital <ArrowUpRight/></a></div><form className="contact-form" onSubmit={(e)=>{e.preventDefault();setSent(true);}}><input aria-label="Your name" placeholder="YOUR NAME" required/><input aria-label="Your email" type="email" placeholder="WORK EMAIL" required/><select aria-label="Service needed" defaultValue="" required><option value="" disabled>WHICH SERVICE DO YOU NEED?</option><option>Website design / Webflow / Framer</option><option>Shopify / E-commerce</option><option>TikTok Shop / Instagram Shop / Facebook Shop</option><option>Business automation / AI workflows</option><option>Mobile app experience</option><option>White-label agency partnership</option><option>More than one service</option></select><input aria-label="Website or business name" placeholder="BUSINESS / WEBSITE (OPTIONAL)"/><textarea aria-label="Project details" placeholder="WHAT ARE YOU TRYING TO ACHIEVE? INCLUDE YOUR PLATFORM, REQUIREMENTS AND TIMELINE..." rows="4"/><button className="button-gold" type="submit">{sent?"Enquiry details prepared":"Send project enquiry"} <ArrowUpRight size={16}/></button><small>{sent?"This demo form does not send your details. Please email hello@hcinternational.digital with your brief.":"Demo form only — submissions are not transmitted or stored yet. Email us directly to send your brief."}</small></form></section>

    <footer><div className="footer-top"><a className="brand footer-brand" href="#home"><span className="brand-mark">HC</span><span className="brand-name">INTERNATIONAL<small>DIGITAL AGENCY</small></span></a><p>Websites. Commerce.<br/><em>Automation. Delivery.</em></p><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={15}/></a></div><div className="footer-bottom"><span>© 2026 HC INTERNATIONAL DIGITAL AGENCY</span><span>WEB · SOCIAL COMMERCE · AUTOMATION · WHITE-LABEL</span><a href="mailto:hello@hcinternational.digital">LET'S TALK ↗</a></div></footer>
  </main>;
}
