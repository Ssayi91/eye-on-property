
        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.querySelector('nav ul');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenuBtn.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>'
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

          // Add subtle animation to process steps
        document.addEventListener('DOMContentLoaded', function() {
            const processSteps = document.querySelectorAll('.process-step');
            
            processSteps.forEach((step, index) => {
                // Add delay based on index for staggered animation
                step.style.animationDelay = `${index * 0.1}s`;
                step.classList.add('fade-in');
            });
        });
         // Add subtle animation to process steps
        document.addEventListener('DOMContentLoaded', function() {
            const processSteps = document.querySelectorAll('.process-step');
            
            processSteps.forEach((step, index) => {
                // Add delay based on index for staggered animation
                step.style.transitionDelay = `${index * 0.05}s`;
                step.style.opacity = '0';
                step.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    step.style.opacity = '1';
                    step.style.transform = 'translateY(0)';
                }, 300);
            });
        });
        
        // FAQ Accordion
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                content.classList.toggle('active');
                header.querySelector('i').classList.toggle('fa-chevron-down');
                header.querySelector('i').classList.toggle('fa-chevron-up');
            });
        });
        
        // FAQ Tabs
        const faqTabs = document.querySelectorAll('.faq-tab');
        
        faqTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs
                faqTabs.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Here you would typically filter FAQs based on category
                // For this example, we're just toggling the active class
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });
  