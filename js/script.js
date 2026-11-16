/**
 * Abhishek - Developer Portfolio
 * Vanilla JavaScript (ES6+)
 * Performance-focused, accessible, zero third-party framework dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ==========================================================================
  // 1. Navigation & Mobile Drawer
  // ==========================================================================
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Handle header background styling on scroll
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Mobile Menu Controls
  const openMenu = () => {
    menuToggle.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    mobileDrawer.classList.add('active');
    drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    mobileDrawer.classList.remove('active');
    drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMenu);
  }

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close drawer when clicking mobile links
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ==========================================================================
  // 2. Active Navigation Highlight on Scroll (IntersectionObserver)
  // ==========================================================================
  const sections = document.querySelectorAll('section[id]');
  
  const navObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileNavLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, navObserverOptions);

  sections.forEach((section) => navObserver.observe(section));

  // ==========================================================================
  // 3. Scroll Reveal Animations (IntersectionObserver)
  // ==========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach((el) => revealObserver.observe(el));

  // ==========================================================================
  // 4. Hero Typewriter Effect
  // ==========================================================================
  const typewriterElement = document.querySelector('.typed-text');
  if (typewriterElement) {
    const roles = [
      'Computer Science & Engineering Student',
      'Java & OOP Programmer',
      'Data Structures & Algorithms Enthusiast',
      'Software Developer in Training',
      'Web Development Explorer'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    const typeRole = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        typingSpeed = 1800;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400;
      }

      setTimeout(typeRole, typingSpeed);
    };

    // Kick off typing animation
    setTimeout(typeRole, 500);
  }

  // ==========================================================================
  // 5. Hero Code Card Copy Functionality
  // ==========================================================================
  const copyCodeBtn = document.getElementById('copyCodeBtn');
  const codeContent = document.getElementById('heroJavaCode');

  if (copyCodeBtn && codeContent) {
    copyCodeBtn.addEventListener('click', async () => {
      try {
        const textToCopy = codeContent.innerText;
        await navigator.clipboard.writeText(textToCopy);
        
        // Visual confirmation
        copyCodeBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        showToast('Code copied!', 'Java snippet copied to clipboard');

        setTimeout(() => {
          copyCodeBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          `;
        }, 2200);
      } catch (err) {
        showToast('Info', 'Select and copy the code snippet manually.');
      }
    });
  }

  // ==========================================================================
  // 6. Skills Category Filter
  // ==========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // ==========================================================================
  // 7. Interactive Project Details Modal
  // ==========================================================================
  const projectDetails = {
    lostfound: {
      title: 'Smart Campus Lost & Found System',
      badge: 'Java • Swing • JDBC • MySQL',
      description: 'A desktop management application designed to systematically log, search, verify, and resolve misplaced items across university departments, campus libraries, labs, and sports complexes.',
      features: [
        'Secure JDBC database connection handling with prepared SQL statements for robust SQL injection prevention.',
        'Intuitive Graphical User Interface (GUI) engineered using Java Swing components and custom event listeners.',
        'Multi-criteria query search engine allowing students and administrators to filter by item category, campus date, status, and location.',
        'Role-oriented workflow: Admin verification for claimed items, automatic receipt generation, and status audit logging (REPORTED, IN_REVIEW, CLAIMED, RESOLVED).',
        'Relational MySQL schema structured with foreign keys, indexes, and optimized query execution.'
      ],
      tech: ['Java SE', 'Java Swing GUI', 'JDBC API', 'MySQL Database', 'Object-Oriented Design', 'SQL']
    },
    dsa: {
      title: 'Java DSA Journey & Algorithm Repository',
      badge: 'Java • OOP • DSA',
      description: 'A dedicated, organized codebase housing algorithmic implementations and data structures crafted from first principles in pure Java, accompanied by comprehensive time and space complexity evaluations.',
      features: [
        'Handcrafted implementations of Linear Data Structures: Custom Linked Lists, Doubly Linked Lists, Dynamic Arrays, Circular Queues, and Stacks.',
        'Non-Linear Data Structures: Binary Search Trees (BST), AVL self-balancing trees, Heaps, and Graph representation (Adjacency Lists & Matrices).',
        'Core Algorithms: BFS & DFS traversals, Dijkstra\'s Shortest Path, Dynamic Programming paradigms, Divide and Conquer, Greedy algorithms, and sorting benchmarks.',
        'Clean package structure adhering to SOLID principles and OOP encapsulation.',
        'Edge case validation suite and Big-O computational complexity notes for each solved problem.'
      ],
      tech: ['Java 17+', 'Data Structures', 'Algorithms', 'OOP', 'Time/Space Analysis', 'Problem Solving']
    }
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalBadge = document.getElementById('modalBadge');
  const modalDesc = document.getElementById('modalDesc');
  const modalFeatures = document.getElementById('modalFeatures');
  const modalTechTags = document.getElementById('modalTechTags');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  const openProjectModal = (projectId) => {
    const data = projectDetails[projectId];
    if (!data || !modalOverlay) return;

    modalTitle.textContent = data.title;
    modalBadge.textContent = data.badge;
    modalDesc.textContent = data.description;

    // Populate features
    modalFeatures.innerHTML = data.features
      .map(
        (feat) => `
        <li class="modal-feature-item">
          <svg class="feature-check" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>${feat}</span>
        </li>
      `
      )
      .join('');

    // Populate tags
    modalTechTags.innerHTML = data.tech
      .map((t) => `<span class="tech-tag blue">${t}</span>`)
      .join('');

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // ==========================================================================
  // 8. Simulated Contribution Activity Grid Mockup
  // ==========================================================================
  const matrixGrid = document.getElementById('matrixGrid');
  if (matrixGrid) {
    // Generate 112 cells (28 columns x 4 rows) with realistic activity pattern
    const totalCells = 112;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('matrix-cell');

      // Controlled distribution: mostly active CSE coding pattern
      const rand = Math.random();
      if (rand > 0.78) {
        cell.classList.add('cell-4');
      } else if (rand > 0.55) {
        cell.classList.add('cell-3');
      } else if (rand > 0.35) {
        cell.classList.add('cell-2');
      } else if (rand > 0.15) {
        cell.classList.add('cell-1');
      } else {
        cell.classList.add('cell-0');
      }

      fragment.appendChild(cell);
    }
    matrixGrid.appendChild(fragment);
  }

  // ==========================================================================
  // 9. Contact Form Validation & Interactive Feedback
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('senderName');
  const emailInput = document.getElementById('senderEmail');
  const subjectInput = document.getElementById('senderSubject');
  const messageInput = document.getElementById('senderMessage');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
        nameInput.classList.add('error');
        isValid = false;
      } else {
        nameInput.classList.remove('error');
      }

      // Validate Email
      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('error');
        isValid = false;
      } else {
        emailInput.classList.remove('error');
      }

      // Validate Subject
      if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
        subjectInput.classList.add('error');
        isValid = false;
      } else {
        subjectInput.classList.remove('error');
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('error');
        isValid = false;
      } else {
        messageInput.classList.remove('error');
      }

      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;

        // Simulate seamless submission & provide direct mailto link trigger
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;

          showToast('Message Ready!', 'Thank you! Your mail client can now send this directly to Abhishek.');
          
          // Construct mailto link fallback
          const recipient = 'abhishekgoyat458@gmail.com';
          const mailtoSubject = encodeURIComponent(`[Portfolio] ${subjectInput.value.trim()}`);
          const mailtoBody = encodeURIComponent(
            `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
          );
          
          window.location.href = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
          
          contactForm.reset();
        }, 900);
      }
    });

    // Real-time error clearance on input
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            input.classList.remove('error');
          }
        });
      }
    });
  }

  // ==========================================================================
  // 10. Toast Notification System
  // ==========================================================================
  const toast = document.getElementById('toastNotice');
  const toastTitle = document.getElementById('toastTitle');
  const toastDesc = document.getElementById('toastDesc');
  let toastTimeout = null;

  function showToast(title, description) {
    if (!toast) return;

    if (toastTitle) toastTitle.textContent = title;
    if (toastDesc) toastDesc.textContent = description;

    toast.classList.add('show');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  // ==========================================================================
  // 11. Back to Top Button
  // ==========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
