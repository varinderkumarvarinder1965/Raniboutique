/* =========================================================
   Rani Tailoring — interactions
   EDIT THE CONFIG BELOW WITH YOUR MOM'S REAL DETAILS.
   ========================================================= */

const CONFIG = {
  studioName: "Rani Tailoring",
  phoneDisplay: "+91 90232 66021",
  whatsappNumber: "919023266021",
};

(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -----------------------------------------------------
     Header: solid on scroll
  ----------------------------------------------------- */
  const header = $("#siteHeader");
  const onScrollHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScrollHeader();
  window.addEventListener("scroll", onScrollHeader, { passive: true });

  /* -----------------------------------------------------
     Mobile navigation
  ----------------------------------------------------- */
  const hamburger = $("#hamburger");
  const nav = $("#primaryNav");

  const closeNav = () => {
    nav.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open menu");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    hamburger.setAttribute("aria-expanded", String(isOpen));
    hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  $$(".nav__link, .nav__cta", nav).forEach((link) =>
    link.addEventListener("click", closeNav)
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) closeNav();
  });

  /* -----------------------------------------------------
     Scroll reveal
  ----------------------------------------------------- */
  const revealEls = $$(".reveal");
  revealEls.forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) el.style.setProperty("--delay", delay + "ms");
  });

  if (prefersReduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

  /* -----------------------------------------------------
     Active nav link while scrolling
  ----------------------------------------------------- */
  const sections = $$("main section[id]");
  const navLinks = $$(".nav__link");

  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((section) => spy.observe(section));
  }

  /* -----------------------------------------------------
     Gallery filters
  ----------------------------------------------------- */
  const chips = $$(".chip");
  const galleryItems = $$(".gallery__item");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const filter = chip.dataset.filter;

      galleryItems.forEach((item) => {
        const match = filter === "all" || item.dataset.category === filter;
        item.classList.toggle("is-hidden", !match);
        if (match) {
          item.classList.remove("is-visible");
          // re-trigger the reveal transition
          void item.offsetWidth;
          item.classList.add("is-visible");
        }
      });
    });
  });

  /* -----------------------------------------------------
     Lightbox
  ----------------------------------------------------- */
  const lightbox = $("#lightbox");
  const lightboxImg = $("#lightboxImg");
  const lightboxCaption = $("#lightboxCaption");
  const lightboxClose = $("#lightboxClose");
  const lightboxPrev = $("#lightboxPrev");
  const lightboxNext = $("#lightboxNext");

  let visibleItems = [];
  let currentIndex = 0;
  let lastFocused = null;

  const collectVisible = () =>
    galleryItems.filter((item) => !item.classList.contains("is-hidden"));

  const renderLightbox = () => {
    const item = visibleItems[currentIndex];
    if (!item) return;
    const img = $("img", item);
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = $(".gallery__overlay span", item).textContent;
  };

  const openLightbox = (index) => {
    visibleItems = collectVisible();
    currentIndex = index;
    lastFocused = document.activeElement;
    renderLightbox();
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => lightbox.classList.add("is-open"));
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
    window.setTimeout(() => {
      lightbox.hidden = true;
      if (lastFocused) lastFocused.focus();
    }, 220);
  };

  const stepLightbox = (dir) => {
    if (!visibleItems.length) return;
    currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
    renderLightbox();
  };

  galleryItems.forEach((item) => {
    const btn = $(".gallery__btn", item);
    btn.addEventListener("click", () => {
      const visible = collectVisible();
      openLightbox(visible.indexOf(item));
    });
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
  });

  /* -----------------------------------------------------
     Testimonials carousel
  ----------------------------------------------------- */
  const quotes = $$(".quote");
  const dotsWrap = $("#quoteDots");
  const prevQuote = $("#prevQuote");
  const nextQuote = $("#nextQuote");
  let quoteIndex = 0;
  let quoteTimer = null;

  quotes.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " is-active" : "");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", "Go to testimonial " + (i + 1));
    dot.addEventListener("click", () => {
      goToQuote(i);
      restartQuotes();
    });
    dotsWrap.appendChild(dot);
  });

  const dots = $$(".dot", dotsWrap);

  function goToQuote(index) {
    quoteIndex = (index + quotes.length) % quotes.length;
    quotes.forEach((q, i) => q.classList.toggle("is-active", i === quoteIndex));
    dots.forEach((d, i) => {
      d.classList.toggle("is-active", i === quoteIndex);
      d.setAttribute("aria-selected", String(i === quoteIndex));
    });
  }

  function startQuotes() {
    if (prefersReduced) return;
    quoteTimer = window.setInterval(() => goToQuote(quoteIndex + 1), 6500);
  }
  function stopQuotes() {
    window.clearInterval(quoteTimer);
    quoteTimer = null;
  }
  function restartQuotes() {
    stopQuotes();
    startQuotes();
  }

  prevQuote.addEventListener("click", () => {
    goToQuote(quoteIndex - 1);
    restartQuotes();
  });
  nextQuote.addEventListener("click", () => {
    goToQuote(quoteIndex + 1);
    restartQuotes();
  });

  const testimonials = $(".testimonials");
  testimonials.addEventListener("mouseenter", stopQuotes);
  testimonials.addEventListener("mouseleave", startQuotes);
  testimonials.addEventListener("focusin", stopQuotes);
  testimonials.addEventListener("focusout", startQuotes);

  goToQuote(0);
  startQuotes();

  /* -----------------------------------------------------
     Contact form
  ----------------------------------------------------- */
  const form = $("#bookingForm");
  const successMsg = $("#formSuccess");

  const fields = {
    name: { el: $("#name"), min: 2, message: "Please enter your name." },
    phone: {
      el: $("#phone"),
      test: (v) => /^[+\d][\d\s-]{7,17}$/.test(v),
      message: "Please enter a valid phone number.",
    },
    service: { el: $("#service"), message: "Please choose a service." },
    message: {
      el: $("#message"),
      min: 5,
      message: "Tell us a little about what you need.",
    },
  };

  const setError = (key, text) => {
    const field = fields[key];
    const wrap = field.el.closest(".field");
    const errorEl = $('[data-error-for="' + key + '"]', form);
    wrap.classList.toggle("has-error", Boolean(text));
    errorEl.textContent = text || "";
    field.el.setAttribute("aria-invalid", text ? "true" : "false");
  };

  const validate = () => {
    let valid = true;
    Object.keys(fields).forEach((key) => {
      const field = fields[key];
      const value = field.el.value.trim();

      if (field.test) {
        if (!field.test(value)) {
          setError(key, field.message);
          valid = false;
        } else {
          setError(key, "");
        }
        return;
      }

      if (value.length < (field.min || 1)) {
        setError(key, field.message);
        valid = false;
      } else {
        setError(key, "");
      }
    });
    return valid;
  };

  Object.keys(fields).forEach((key) => {
    const el = fields[key].el;
    el.addEventListener("input", () => {
      if (el.closest(".field").classList.contains("has-error")) {
        validate();
      }
    });
    el.addEventListener("change", () => {
      if (el.closest(".field").classList.contains("has-error")) {
        validate();
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    successMsg.hidden = true;

    if (!validate()) {
      const firstError = $(".field.has-error input, .field.has-error select, .field.has-error textarea", form);
      if (firstError) firstError.focus();
      return;
    }

    const name = fields.name.el.value.trim();
    const phone = fields.phone.el.value.trim();
    const service = fields.service.el.value;
    const date = $("#date").value;
    const message = fields.message.el.value.trim();

    const lines = [
      "New appointment request — " + CONFIG.studioName,
      "",
      "Name: " + name,
      "Phone: " + phone,
      "Service: " + service,
    ];
    if (date) lines.push("Preferred date: " + date);
    lines.push("", "Details: " + message);

    const waURL =
      "https://wa.me/" +
      CONFIG.whatsappNumber +
      "?text=" +
      encodeURIComponent(lines.join("\n"));

    successMsg.hidden = false;
    form.reset();
    window.open(waURL, "_blank", "noopener");
  });

  /* -----------------------------------------------------
     Back to top
  ----------------------------------------------------- */
  const toTop = $("#toTop");
  window.addEventListener(
    "scroll",
    () => {
      toTop.classList.toggle("is-visible", window.scrollY > 600);
    },
    { passive: true }
  );
  toTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  });

  /* -----------------------------------------------------
     Year
  ----------------------------------------------------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
