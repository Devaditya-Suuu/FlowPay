import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function IconBase({ children }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

function ClockIcon() {
  return (
    <IconBase>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  )
}

function ShieldAlertIcon() {
  return (
    <IconBase>
      <path d="M12 22s7-3.5 7-9.5V5l-7-3-7 3v7.5C5 18.5 12 22 12 22Z" />
      <path d="M12 8v5" />
      <path d="M12 16h.01" />
    </IconBase>
  )
}

function CodeIcon() {
  return (
    <IconBase>
      <path d="m8 16-4-4 4-4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </IconBase>
  )
}

function ZapIcon() {
  return (
    <IconBase>
      <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
    </IconBase>
  )
}

function ShieldCheckIcon() {
  return (
    <IconBase>
      <path d="M12 22s7-3.5 7-9.5V5l-7-3-7 3v7.5C5 18.5 12 22 12 22Z" />
      <path d="m9.5 12.5 1.8 1.8 3.7-3.7" />
    </IconBase>
  )
}

function SparklesIcon() {
  return (
    <IconBase>
      <path d="M12 2l1.4 4.4L18 8l-4.6 1.6L12 14l-1.4-4.4L6 8l4.6-1.6L12 2Z" />
      <path d="M19 13l.8 2.2L22 16l-2.2.8L19 19l-.8-2.2L16 16l2.2-.8L19 13Z" />
    </IconBase>
  )
}

function RouteIcon() {
  return (
    <IconBase>
      <path d="M6 6h6a4 4 0 0 1 4 4v4" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <path d="m14 14 4 4" />
    </IconBase>
  )
}

function BracesIcon() {
  return (
    <IconBase>
      <path d="M9 4c-2 0-3 1-3 3v2c0 1-1 2-2 2 1 0 2 1 2 2v2c0 2 1 3 3 3" />
      <path d="M15 4c2 0 3 1 3 3v2c0 1 1 2 2 2-1 0-2 1-2 2v2c0 2-1 3-3 3" />
    </IconBase>
  )
}

function LinkIcon() {
  return (
    <IconBase>
      <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1" />
      <path d="M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
    </IconBase>
  )
}

function BanknoteIcon() {
  return (
    <IconBase>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9h0.01M18 15h0.01" />
    </IconBase>
  )
}

const painPoints = [
  {
    Icon: ClockIcon,
    title: 'Weeks of KYC Delays',
    body: "Uploading business proofs before you've made a single rupee. Waiting weeks for compliance approval.",
  },
  {
    Icon: ShieldAlertIcon,
    title: 'Arbitrary Rejections',
    body: "Being rejected because your product is too new or doesn't fit into outdated risk categories.",
  },
  {
    Icon: CodeIcon,
    title: 'Messy Integration',
    body: 'Wading through legacy documentation just to create a simple checkout session.',
  },
]

const trustSteps = [
  {
    step: 'Step 1',
    title: 'Sign up with Google',
    timer: '00:00',
  },
  {
    step: 'Step 2',
    title: 'Basic UPI identity check',
    timer: '00:02',
  },
  {
    step: 'Step 3',
    title: 'Drop in the API key',
    timer: '00:04',
  },
  {
    step: 'Step 4',
    title: 'Accept real money',
    timer: '00:05',
  },
]

const solutionPoints = [
  {
    Icon: ZapIcon,
    title: 'Live in minutes',
    body: 'No upfront company registration documents needed.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Progressive KYC',
    body: 'Verify as you scale. Your limits grow with your business.',
  },
  {
    Icon: SparklesIcon,
    title: 'No hidden surprises',
    body: 'Clear pricing. No setup fees. No maintenance charges.',
  },
]

const features = [
  {
    Icon: ZapIcon,
    title: 'Instant Onboarding',
    body: 'Live in under 5 minutes without tedious paperwork.',
  },
  {
    Icon: ShieldCheckIcon,
    title: 'Progressive KYC',
    body: 'Verify as you grow, not before you even start.',
  },
  {
    Icon: RouteIcon,
    title: 'Smart Routing',
    body: 'Automatically routes to maximize success rates.',
  },
  {
    Icon: BracesIcon,
    title: 'Developer-First APIs',
    body: 'Clean, documented, works the first time you try it.',
  },
  {
    Icon: LinkIcon,
    title: 'Payment Links',
    body: 'Share a link, get paid. No code required.',
  },
  {
    Icon: BanknoteIcon,
    title: 'Built for India',
    body: 'UPI, cards, wallets, and native support for Indian flows.',
  },
]

const comparisonRows = [
  ['Onboarding Time', '5 minutes', '2–4 weeks'],
  ['KYC Required', 'Progressive (later)', 'Upfront (strict)'],
  ['Developer Experience', 'Modern, simple SDKs', 'Complex legacy APIs'],
  ['Payment Success', 'Smart routing (~92%)', 'Single provider (~80%)'],
  ['Indie-friendly', 'Yes', 'Requires registered company'],
]

const problemValidation = [
  {
    signal: 'Founder interviews',
    detail: '100+ builders said payment setup friction delayed launches more than product bugs.',
  },
  {
    signal: 'Top recurring pain',
    detail: 'Slow onboarding, unclear rejections, and rigid KYC were the most repeated blockers.',
  },
  {
    signal: 'Developer sentiment',
    detail: 'Developers are frustrated with payment gateways in India and want faster, cleaner integration paths.',
  },
]

function App() {
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  async function handleWaitlistSubmit(event) {
    event.preventDefault()
    const formElement = event.currentTarget
    const apiBaseUrl = String(import.meta.env.VITE_API_BASE_URL || '').trim()
    const waitlistEndpoint = apiBaseUrl
      ? `${apiBaseUrl.replace(/\/$/, '')}/api/waitlist`
      : '/api/waitlist'

    const formData = new FormData(formElement)
    const payload = {
      name: String(formData.get('name') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      building: String(formData.get('building') || '').trim(),
    }

    if (!payload.name || !payload.email || !payload.building) {
      setSubmitError(true)
      setSubmitMessage('Please fill out all fields.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(false)
    setSubmitMessage('')

    try {
      const response = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Could not save your request right now.')
      }

      setSubmitMessage('You are on the list. We will reach out soon.')
      formElement.reset()
    } catch (error) {
      setSubmitError(true)
      setSubmitMessage(error.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-shell">
      <nav className="topnav">
        <div className="nav-brand">
          <img className="brand-logo-image" src={logo} alt="FlowPay logo" />
          <span className="nav-logo">FlowPay</span>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="nav-links">
          <a href="#how">How it Works</a>
          <a href="#features">Features</a>
          <a href="#comparison">Compare</a>
        </div>

        <div className="nav-actions">
          <a className="nav-signin" href="#cta">
            Sign In
          </a>
          <a className="btn btn-nav" href="#cta">
            Get Early Access Now
          </a>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#how" onClick={() => setIsMenuOpen(false)}>
            How it Works
          </a>
          <a href="#features" onClick={() => setIsMenuOpen(false)}>
            Features
          </a>
          <a href="#comparison" onClick={() => setIsMenuOpen(false)}>
            Compare
          </a>
          <a className="nav-signin" href="#cta" onClick={() => setIsMenuOpen(false)}>
            Sign In
          </a>
          <a className="btn btn-nav" href="#cta" onClick={() => setIsMenuOpen(false)}>
            Get Early Access Now
          </a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="top" data-reveal>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge badge-soft">
                <span className="badge-dot" aria-hidden="true" />
                Built for Indian MVP Builders
              </div>
              <h1 className="hero-title">Start accepting payments in minutes — without KYC delays.</h1>
              <p className="hero-subtitle">
                Accept payments instantly. No upfront KYC. Clean APIs. Smart routing.
                The developer-first software platform designed for Indian indie hackers and founders.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#cta">
                  Get Early Access Now
                </a>
                <a className="btn btn-secondary" href="#how">
                  See how it works
                </a>
              </div>
              <p className="hero-urgency">Early access limited to first 100 users.</p>
              <div className="hero-trust">
                <div className="avatars" aria-hidden="true">
                  <span>A</span>
                  <span>S</span>
                  <span>P</span>
                  <span>M</span>
                </div>
                <span>Joined by 127+ builders</span>
              </div>
              <p className="hero-security">Secure payments powered by trusted infrastructure.</p>
            </div>

            <div className="hero-panel" aria-label="FlowPay code preview">
              <div className="window-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <span className="window-title">create-payment.ts</span>
              </div>
              <div className="code-card">
                <pre className="code-snippet">{`import { FlowPay } from 'flowpay-node';

const flowpay = new FlowPay('sk_live_123...');

// Create a payment session instantly
const session = await flowpay.payments.create({
  amount: 49900, // ₹499.00
  currency: 'INR',
  receipt: 'hacker@startup.in',
  metadata: { plan: 'pro_mvp' }
});

// Return session URL to redirect user
return session.url;`}</pre>
              </div>
              <div className="payment-toast">
                <div className="toast-check">✓</div>
                <div>
                  <div className="toast-title">Payment Received</div>
                  <div className="toast-value">₹499.00</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section problem section-soft" data-reveal>
          <div className="container">
            <div className="eyebrow center-eyebrow">The Real Situation</div>
            <h2 className="section-title center-title">Building in India is hard. Getting paid shouldn't be.</h2>
            <p className="section-sub center-sub">
              We asked 100+ Indian founders what their biggest launch blocker was. The answer wasn't building the product.
              It was fighting payment gateways.
            </p>
            <div className="card-grid problem-grid">
              {painPoints.map((point) => (
                <article className="info-card problem-card" key={point.title} data-reveal>
                  <span className="info-icon" aria-hidden="true">
                    <point.Icon />
                  </span>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust-section" id="how" data-reveal>
          <div className="container trust-grid">
            <div className="trust-copy">
              <div className="eyebrow">Introducing FlowPay</div>
              <h2 className="section-title left-title">A platform that trusts you first.</h2>
              <p className="section-sub left-sub">
                FlowPay introduces progressive trust. We use standard UPI identity checks to let you start accepting
                payments instantly. Do the heavy KYC paperwork later, when you actually have revenue to justify it.
              </p>

              <div className="trust-list">
                {solutionPoints.map((point) => (
                  <div className="trust-item" key={point.title} data-reveal>
                    <div className="trust-item-icon" aria-hidden="true">
                      <point.Icon />
                    </div>
                    <div>
                      <div className="trust-item-title">{point.title}</div>
                      <div className="trust-item-body">{point.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trust-panel">
              <div className="trust-panel-title">The FlowPay Way</div>
              <div className="timeline">
                {trustSteps.map((step, index) => (
                  <div className="timeline-row" key={step.title} data-reveal>
                    <div className="timeline-track">
                      <span className={`timeline-dot ${index === trustSteps.length - 1 ? 'active' : ''}`} />
                      {index < trustSteps.length - 1 ? <span className="timeline-line" /> : null}
                    </div>
                    <div className="timeline-copy">
                      <div className="timeline-head">
                        <span>{step.step}</span>
                        <span className="timeline-time">{step.timer}</span>
                      </div>
                      <div className={index === trustSteps.length - 1 ? 'timeline-title active' : 'timeline-title'}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section features features-dark" id="features" data-reveal>
          <div className="container">
            <div className="eyebrow center-eyebrow eyebrow-light">Everything you need. Nothing you don't.</div>
            <p className="section-sub center-sub section-sub-light">
              We built FlowPay focusing entirely on developer experience and payment success rates.
            </p>
            <div className="card-grid feature-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.title} data-reveal>
                  <div className="feature-icon" aria-hidden="true">
                    <feature.Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section comparison" id="comparison" data-reveal>
          <div className="container">
            <div className="eyebrow center-eyebrow">How we compare</div>
            <h2 className="section-title center-title">Why indie hackers are switching to FlowPay.</h2>
            <p className="section-sub center-sub">Why indie hackers are switching to FlowPay.</p>
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="highlight">FlowPay</th>
                    <th>Traditional Gateways</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, flowpay, traditional]) => (
                    <tr key={label}>
                      <td>{label}</td>
                      <td className="highlight">{flowpay}</td>
                      <td>{traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section proof" id="proof" data-reveal>
          <div className="container">
            <div className="eyebrow center-eyebrow">Problem Validation</div>
            <h2 className="section-title center-title">Developers are frustrated with payment gateways in India.</h2>
            <p className="section-sub center-sub">
              This is not a marketing assumption. It is a repeated pattern across early-stage founders, freelancers,
              and MVP teams we spoke with.
            </p>

            <div className="card-grid validation-grid">
              {problemValidation.map((item) => (
                <article className="validation-card" key={item.signal} data-reveal>
                  <h3 className="validation-label">{item.signal}</h3>
                  <p className="validation-detail">{item.detail}</p>
                </article>
              ))}
            </div>

            <article className="founder-story" data-reveal>
              <p className="founder-story-eyebrow">Founder Story</p>
              <p className="founder-story-quote">
                “We’ve personally struggled with slow onboarding and payment issues while building projects.
                FlowPay is built to fix that.”
              </p>
            </article>
          </div>
        </section>

        <section className="section cta-final" id="cta" data-reveal>
          <div className="container cta-wrap">
            <div className="cta-banner">Be among the first to try FlowPay</div>
            <p className="section-sub cta-sub">
              Early access is free. Join the waitlist and we'll reach out when your spot is ready.
            </p>
            <form className="waitlist-card" onSubmit={handleWaitlistSubmit}>
              <label>
                Name
                <input name="name" type="text" placeholder="Satoshi Nakamoto" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="founder@startup.com" required />
              </label>
              <label>
                What are you building?
                <input name="building" type="text" placeholder="A SaaS for..." required />
              </label>
              <button className="btn btn-cta" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Claim Your Spot'}
              </button>
              {submitMessage ? (
                <p className={submitError ? 'form-status form-status-error' : 'form-status'}>{submitMessage}</p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img className="brand-logo-image" src={logo} alt="FlowPay logo" />
            <span>FlowPay</span>
          </div>
        </div>
        <div className="footer-center">© 2026 FlowPay. Built for Indian developers.</div>
        <div className="footer-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="mailto:devadityaborah2006@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App