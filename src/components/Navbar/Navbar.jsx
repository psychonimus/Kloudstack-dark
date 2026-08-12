import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { motion, useAnimate, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const MotionNavLink = motion(NavLink);
const MotionLink = motion(Link);

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services', hasDropdown: true },
  { name: 'Products', to: '/products', hasProductsDropdown: true },
  { name: 'Resources', to: '/resources' },
  { name: 'Contact', to: '/contact' },
];

const PRODUCTS = [
  {
    icon: String.fromCodePoint(0x1F6E1, 0xFE0F),
    name: 'Cyber Security',
    desc: 'AI-powered cyber risk, governance & protection — quantify risk and strengthen insurability.',
    to: '/products/cyber-security',
  },
  {
    icon: String.fromCodePoint(0x1F9E0),
    name: 'AI Solutions',
    desc: 'Intelligent AI governance, compliance automation, and risk management for modern enterprises.',
    to: '/products/ai-solutions',
  },
];

const SERVICES = [
  {
    icon: String.fromCodePoint(0x2601, 0xFE0F),
    name: 'Cloud Infrastructure',
    desc: 'Design & deploy scalable multi-cloud environments on AWS, Azure and GCP.',
    to: '/services/cloud-infrastructure',
  },
  {
    icon: String.fromCodePoint(0x1F512),
    name: 'Cyber Defense & Compliance',
    desc: 'Zero-Trust security, ZTNA, and regulatory frameworks — GDPR, HIPAA, DPDP.',
    to: '/services/cyber-security'
  },
  {
    icon: String.fromCodePoint(0x2699, 0xFE0F),
    name: 'DevOps & Automation',
    desc: 'CI/CD pipelines, GitOps workflows, and infrastructure-as-code at scale.',
  },
  {
    icon: String.fromCodePoint(0x1F4CA),
    name: 'Observability & AIOps',
    desc: 'Unified logging, distributed tracing, and intelligent alerting across your stack.',
  },
  {
    icon: String.fromCodePoint(0x1F91D),
    name: 'Vendor & Cloud Readiness',
    desc: 'Vendor-agnostic advisory eliminating platform lock-in and modernising estates.',
  },
  {
    icon: String.fromCodePoint(0x1F3AF),
    name: 'Business-IT Alignment',
    desc: 'Translating boardroom imperatives into governed, production-ready tech frameworks.',
  },
];

const COLLAPSE_TRIGGER = 150;
const EXPAND_THRESHOLD = 80;

const containerVariants = {
  expanded: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
  collapsed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
};

const logoVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', damping: 16, stiffness: 220 } },
  collapsed: { opacity: 0, x: -18, scale: 0.85, transition: { duration: 0.18 } },
};

const itemVariants = {
  expanded: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', damping: 16 } },
  collapsed: { opacity: 0, x: -14, scale: 0.92, transition: { duration: 0.15 } },
};

const rightVariants = {
  expanded: { opacity: 1, x: 0, transition: { type: 'spring', damping: 18, delay: 0.08 } },
  collapsed: { opacity: 0, x: 18, transition: { duration: 0.15 } },
};

const menuIconVariants = {
  expanded: { opacity: 0, scale: 0.5, transition: { duration: 0.12 } },
  collapsed: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 14, stiffness: 280, delay: 0.2 } },
};

const drawerVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.97, transition: { duration: 0.22, ease: 'easeIn' } },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06 + 0.1, type: 'spring', damping: 18, stiffness: 200 },
  }),
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const getRightX = () => window.innerWidth / 2 - 70;
const isMobile = () => window.innerWidth <= 768;

const Navbar = () => {
  const [scope, animate] = useAnimate();
  const [isExpanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const closeTimer = useRef(null);
  const productsCloseTimer = useRef(null);
  const isAnimating = useRef(false);
  const isExpandedRef = useRef(true);
  const lastScrollY = useRef(0);
  const collapseScrollY = useRef(0);

  useEffect(() => {
    animate(
      scope.current,
      { y: 0, opacity: 1 },
      { type: 'spring', damping: 20, stiffness: 200, delay: 0.25 }
    );
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onResize = () => { if (!isMobile()) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openServices = () => {
    clearTimeout(closeTimer.current);
    setServicesOpen(true);
    setProductsOpen(false);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const openProducts = () => {
    clearTimeout(productsCloseTimer.current);
    setProductsOpen(true);
    setServicesOpen(false);
  };
  const scheduleCloseProducts = () => {
    productsCloseTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  const doCollapse = async () => {
    if (isAnimating.current || isMobile()) return;
    isAnimating.current = true;
    isExpandedRef.current = false;
    setExpanded(false);
    setServicesOpen(false);
    setProductsOpen(false);
    await sleep(160);
    await animate(scope.current, { width: '52px' }, { type: 'spring', damping: 30, stiffness: 320 });
    await animate(scope.current, { x: getRightX() }, { type: 'spring', damping: 22, stiffness: 180 });
    isAnimating.current = false;
  };

  const doExpand = async () => {
    if (isAnimating.current || isMobile()) return;
    isAnimating.current = true;
    await animate(scope.current, { x: 0 }, { type: 'spring', damping: 22, stiffness: 180 });
    isExpandedRef.current = true;
    setExpanded(true);
    await animate(scope.current, { width: 'auto' }, { type: 'spring', damping: 28, stiffness: 300 });
    isAnimating.current = false;
  };

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (isMobile()) return;
    const previous = lastScrollY.current;
    if (isExpandedRef.current && !isAnimating.current && latest > previous && latest > COLLAPSE_TRIGGER) {
      collapseScrollY.current = latest;
      doCollapse();
    } else if (!isExpandedRef.current && !isAnimating.current && latest < previous && collapseScrollY.current - latest > EXPAND_THRESHOLD) {
      doExpand();
    }
    lastScrollY.current = latest;
  });

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="navbar-outer navbar-desktop">
        <motion.nav
          ref={scope}
          className="animated-nav"
          initial={{ y: -80, opacity: 0, width: 'auto' }}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={containerVariants}
          whileHover={!isExpanded ? { scale: 1.08 } : {}}
          whileTap={!isExpanded ? { scale: 0.94 } : {}}
          onClick={() => { if (!isExpanded && !isAnimating.current) doExpand(); }}
          style={{ cursor: isExpanded ? 'default' : 'pointer' }}
        >
          <motion.div className="nav-logo-wrap" variants={logoVariants}>
            <img src="/images/Kloudstack-Logo.svg" alt="KloudStack" className="nav-logo" />
          </motion.div>

          <motion.div className="nav-links-wrap" style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}>
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="nav-services-wrap"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className={`nav-item-link nav-services-trigger${servicesOpen ? ' services-active' : ''}`}
                    aria-expanded={servicesOpen}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                    <span className={`nav-chevron${servicesOpen ? ' rotated' : ''}`}>&#9662;</span>
                  </button>
                </div>
              ) : item.hasProductsDropdown ? (
                <div
                  key={item.name}
                  className="nav-services-wrap"
                  onMouseEnter={openProducts}
                  onMouseLeave={scheduleCloseProducts}
                >
                  <button
                    className={`nav-item-link nav-services-trigger${productsOpen ? ' services-active' : ''}`}
                    aria-expanded={productsOpen}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.name}
                    <span className={`nav-chevron${productsOpen ? ' rotated' : ''}`}>&#9662;</span>
                  </button>
                </div>
              ) : (
                <MotionNavLink
                  key={item.name}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-item-link${isActive ? ' active-link' : ''}`}
                  variants={itemVariants}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.name}
                </MotionNavLink>
              )
            )}
          </motion.div>

          <motion.div className="nav-right-wrap" variants={rightVariants} style={{ pointerEvents: isExpanded ? 'auto' : 'none' }}>
            <div className="social-icons">
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter-x"></i>
            </div>
            <button className="btn-contact">Get in Touch</button>
          </motion.div>

          <motion.div
            className="nav-collapsed-icon"
            variants={menuIconVariants}
            animate={isExpanded ? 'expanded' : 'collapsed'}
          >
            <i className="bi bi-list"></i>
          </motion.div>
        </motion.nav>
      </div>

      {/* SERVICES DROPDOWN PORTAL — rendered at body level to escape transform stacking context */}
      {createPortal(
        <AnimatePresence>
          {servicesOpen && (
            <motion.div
              className="services-dropdown"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={openServices}
              onMouseLeave={scheduleClose}
            >
              <div className="services-dropdown-grid">
                {SERVICES.map((svc, idx) => (
                  <MotionLink
                    key={svc.name}
                    to={svc.to || "/services"}
                    className="svc-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04 + 0.04 }}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className="svc-icon">{svc.icon}</span>
                    <div className="svc-text">
                      <span className="svc-name">{svc.name}</span>
                      <span className="svc-desc">{svc.desc}</span>
                    </div>
                  </MotionLink>
                ))}
              </div>
              <div className="services-dropdown-footer">
                <a href="/services" className="svc-footer-link" onClick={() => setServicesOpen(false)}>
                  View all services &#8594;
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* PRODUCTS DROPDOWN PORTAL */}
      {createPortal(
        <AnimatePresence>
          {productsOpen && (
            <motion.div
              className="services-dropdown products-dropdown"
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={openProducts}
              onMouseLeave={scheduleCloseProducts}
            >
              <div className="products-dropdown-header">
                <span className="products-dropdown-label">Our Products</span>
              </div>
              <div className="products-dropdown-grid">
                {PRODUCTS.map((prd, idx) => (
                  <MotionLink
                    key={prd.name}
                    to={prd.to}
                    className="svc-card prd-card"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06 + 0.04 }}
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className="svc-icon">{prd.icon}</span>
                    <div className="svc-text">
                      <span className="svc-name">{prd.name}</span>
                      <span className="svc-desc">{prd.desc}</span>
                    </div>
                  </MotionLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* MOBILE NAV */}
      <div className="navbar-mobile">
        <div className="mobile-nav-bar">
          <img src="/images/Kloudstack-Logo.svg" alt="KloudStack" className="mobile-nav-logo" />
          <button
            className={`mobile-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="ham-bar bar-top"></span>
            <span className="ham-bar bar-mid"></span>
            <span className="ham-bar bar-bot"></span>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                className="mobile-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMobileOpen(false)}
              />
              <motion.div
                className="mobile-drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <nav className="mobile-drawer-links">
                  {navItems.map((item, i) =>
                    item.hasDropdown ? (
                      <div key={item.name} className="mobile-services-accordion">
                        <button
                          className={`mobile-nav-link mobile-services-trigger${mobileServicesOpen ? ' active-link' : ''}`}
                          onClick={() => setMobileServicesOpen((v) => !v)}
                        >
                          {item.name}
                          <span className={`nav-chevron${mobileServicesOpen ? ' rotated' : ''}`}>&#9662;</span>
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              className="mobile-services-list"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                              style={{ overflow: 'hidden' }}
                            >
                              {SERVICES.map((svc) => (
                                <Link
                                  key={svc.name}
                                  to={svc.to || "/services"}
                                  className="mobile-svc-item"
                                  onClick={() => { setMobileServicesOpen(false); setMobileOpen(false); }}
                                >
                                  <span className="mobile-svc-icon">{svc.icon}</span>
                                  <span className="mobile-svc-name">{svc.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : item.hasProductsDropdown ? (
                      <div key={item.name} className="mobile-services-accordion">
                        <button
                          className={`mobile-nav-link mobile-services-trigger${mobileProductsOpen ? ' active-link' : ''}`}
                          onClick={() => setMobileProductsOpen((v) => !v)}
                        >
                          {item.name}
                          <span className={`nav-chevron${mobileProductsOpen ? ' rotated' : ''}`}>&#9662;</span>
                        </button>
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.div
                              className="mobile-services-list"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                              style={{ overflow: 'hidden' }}
                            >
                              {PRODUCTS.map((prd) => (
                                <Link
                                  key={prd.name}
                                  to={prd.to}
                                  className="mobile-svc-item"
                                  onClick={() => { setMobileProductsOpen(false); setMobileOpen(false); }}
                                >
                                  <span className="mobile-svc-icon">{prd.icon}</span>
                                  <span className="mobile-svc-name">{prd.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <MotionNavLink
                        key={item.name}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) => `mobile-nav-link${isActive ? ' active-link' : ''}`}
                        custom={i}
                        variants={drawerItemVariants}
                        initial="hidden"
                        animate="visible"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </MotionNavLink>
                    )
                  )}
                </nav>

                <div className="mobile-drawer-divider" />

                <motion.div
                  className="mobile-social-icons"
                  custom={navItems.length}
                  variants={drawerItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                </motion.div>

                <motion.button
                  className="btn-contact mobile-cta"
                  custom={navItems.length + 1}
                  variants={drawerItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setMobileOpen(false)}
                >
                  Get in Touch
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
