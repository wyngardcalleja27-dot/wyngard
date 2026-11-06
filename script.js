/**
 * Minimalist Profile & Warm Lighting Engine
 * Handles warm lighting cycle, smooth cursor halo, copy interactions, and local time.
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 0. Theme Mode Toggle (Dark Mode & Light Mode)
  // ---------------------------------------------------------------------------
  const themeBtn = document.getElementById('themeBtn');
  const themeIcon = document.getElementById('themeIcon');

  const MOON_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  const SUN_ICON = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

  let currentTheme = 'dark'; // Default: dark mode

  try {
    const savedTheme = localStorage.getItem('site_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      currentTheme = savedTheme;
    }
  } catch (err) {}

  function applyTheme(theme) {
    currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'light' ? SUN_ICON : MOON_ICON;
    }
    if (themeBtn) {
      themeBtn.setAttribute('title', theme === 'light' ? 'Theme: Light (Click for Dark)' : 'Theme: Dark (Click for Light)');
    }
    try {
      localStorage.setItem('site_theme', theme);
    } catch (err) {}
  }

  function toggleTheme() {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // Initial theme application
  applyTheme(currentTheme);

  // ---------------------------------------------------------------------------
  // 1. Warm Ambient Light Toggle (On / Off)
  // ---------------------------------------------------------------------------
  const lightBtn = document.getElementById('lightBtn');
  const cursorGlow = document.getElementById('cursorGlow');

  let isWarmthOn = true; // Default: On

  try {
    const savedWarmth = localStorage.getItem('ambient_warmth');
    if (savedWarmth === 'off') {
      isWarmthOn = false;
    } else if (savedWarmth === 'on') {
      isWarmthOn = true;
    }
  } catch (err) {}

  function applyWarmth(state) {
    isWarmthOn = state;
    document.body.setAttribute('data-warmth', state ? 'warm' : 'off');
    if (lightBtn) {
      if (state) {
        lightBtn.classList.add('is-active');
        lightBtn.setAttribute('aria-pressed', 'true');
        lightBtn.setAttribute('title', 'Warm Light: On (Click to turn off)');
      } else {
        lightBtn.classList.remove('is-active');
        lightBtn.setAttribute('aria-pressed', 'false');
        lightBtn.setAttribute('title', 'Warm Light: Off (Click to turn on)');
      }
    }
    try {
      localStorage.setItem('ambient_warmth', state ? 'on' : 'off');
    } catch (err) {}
  }

  function toggleWarmth() {
    applyWarmth(!isWarmthOn);
  }

  if (lightBtn) {
    lightBtn.addEventListener('click', toggleWarmth);
  }

  // Initial warmth application
  applyWarmth(isWarmthOn);

  // ---------------------------------------------------------------------------
  // 2. Solid Warm Orange Mouse Follower & Reactive Element Overlay Engine
  // ---------------------------------------------------------------------------
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 3;
    let currentX = mouseX;
    let currentY = mouseY;
    let isInside = false;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isInside) {
        isInside = true;
        cursorGlow.style.opacity = '';
      }
    });

    document.addEventListener('mouseleave', function () {
      isInside = false;
      cursorGlow.style.opacity = '0';
    });

    function renderCursorGlow() {
      // Smooth linear interpolation (lerp)
      const ease = 0.18;
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;

      cursorGlow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(renderCursorGlow);
    }

    requestAnimationFrame(renderCursorGlow);

    // Dynamic overlay reaction for website elements
    const overlayTargetSelectors = [
      'a',
      'button',
      '.tag',
      '.principle-card',
      '.experience-row',
      '.hero-badge',
      '.contact-box',
      '.brand-monogram',
      '.toggle-btn',
      '.hero-title'
    ].join(', ');

    const targets = document.querySelectorAll(overlayTargetSelectors);
    targets.forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursorGlow.classList.add('cursor-overlay-active');
        el.classList.add('is-overlaid');
      });
      el.addEventListener('mouseleave', function () {
        cursorGlow.classList.remove('cursor-overlay-active');
        el.classList.remove('is-overlaid');
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 3. Interactive 3D Card Observation Engine (Tilt, Parallax & Warm Glare)
  // ---------------------------------------------------------------------------
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const card3dElements = document.querySelectorAll('.card-3d');

    card3dElements.forEach(function (card) {
      // Create and inject the warm reflection glare layer if not present
      if (!card.querySelector('.card-3d-glare')) {
        const glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        glare.setAttribute('aria-hidden', 'true');
        card.appendChild(glare);
      }

      let isHovered = false;

      card.addEventListener('mouseenter', function () {
        isHovered = true;
      });

      card.addEventListener('mousemove', function (e) {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Angle bounds tuned per container type for tactile observation feel
        const isTag = card.classList.contains('tag');
        const isContact = card.classList.contains('contact-box');
        const maxTilt = isTag ? 10 : (isContact ? 6 : 11);
        const liftZ = isTag ? 14 : (isContact ? 22 : 26);

        const rotateX = (((y - centerY) / centerY) * -maxTilt).toFixed(2);
        const rotateY = (((x - centerX) / centerX) * maxTilt).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${liftZ}px) scale3d(1.03, 1.03, 1.03)`;

        // Update warm glare illumination coordinates
        const glareX = ((x / rect.width) * 100).toFixed(1);
        const glareY = ((y / rect.height) * 100).toFixed(1);
        card.style.setProperty('--mouse-x', `${glareX}%`);
        card.style.setProperty('--mouse-y', `${glareY}%`);
      });

      card.addEventListener('mouseleave', function () {
        isHovered = false;
        // Smoothly settle back down
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 4. Email Copy Interaction & Minimal Toast
  // ---------------------------------------------------------------------------
  const copyBtns = [
    document.getElementById('copyEmailBtn'),
    document.getElementById('copyEmailBtnSecondary')
  ].filter(Boolean);

  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  let toastTimer = null;

  function showToast(message) {
    if (!toast) return;
    if (toastText) {
      toastText.textContent = message;
    }
    toast.classList.add('show');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('Email address copied to clipboard');
      }).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    try {
      const tempInput = document.createElement('input');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (successful) {
        showToast('Email address copied to clipboard');
      } else {
        showToast('Address: ' + text);
      }
    } catch (err) {
      showToast('Address: ' + text);
    }
  }

  copyBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'wyngardcalleja27@gmail.com';
      copyToClipboard(email);
    });
  });

  // ---------------------------------------------------------------------------
  // 5. Live Local Clock in Footer
  // ---------------------------------------------------------------------------
  const localTimeDisplay = document.getElementById('localTimeDisplay');

  function updateClock() {
    if (!localTimeDisplay) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Minimalist time format e.g. "20:30:15 LOCAL"
    localTimeDisplay.textContent = `${hours}:${minutes}:${seconds} LOCAL`;
  }

  updateClock();
  setInterval(updateClock, 1000);

})();

