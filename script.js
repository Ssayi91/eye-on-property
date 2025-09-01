
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
                const isActive = content.classList.contains('active');
                
                // Close all accordions first
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                
                document.querySelectorAll('.accordion-header i').forEach(icon => {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                });
                
                // If it wasn't active, open it
                if (!isActive) {
                    content.classList.add('active');
                    header.querySelector('i').classList.remove('fa-chevron-down');
                    header.querySelector('i').classList.add('fa-chevron-up');
                }
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
                
                // Get the category to show
                const category = tab.getAttribute('data-category');
                
                // Hide all FAQ categories
                document.querySelectorAll('.faq-category').forEach(item => {
                    item.style.display = 'none';
                });
                
                // Show the selected category
                document.querySelector(`.faq-category[data-category="${category}"]`).style.display = 'block';
                
                // Close all accordions when switching tabs
                document.querySelectorAll('.accordion-content').forEach(item => {
                    item.classList.remove('active');
                });
                
                document.querySelectorAll('.accordion-header i').forEach(icon => {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                });
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
         // Number counting animation
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const value = Math.floor(progress * (end - start) + start);
                element.textContent = value.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Intersection Observer to trigger animation when section is in view
        document.addEventListener('DOMContentLoaded', function() {
            const statNumbers = document.querySelectorAll('.stat-number');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = +entry.target.getAttribute('data-target');
                        animateValue(entry.target, 0, target, 2000);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            statNumbers.forEach(number => {
                observer.observe(number);
            });
        });

         // This script ensures the iframes maintain aspect ratio on resize
        function adjustReelHeights() {
            const reelItems = document.querySelectorAll('.reel-item');
            reelItems.forEach(item => {
                const width = item.offsetWidth;
                item.style.height = width * 1.25 + 'px'; // 5:4 aspect ratio
            });
        }
        
        // Initial adjustment
        window.addEventListener('load', adjustReelHeights);
        
        // Adjust on window resize
        window.addEventListener('resize', adjustReelHeights);
  function sendToWhatsApp(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format the message for WhatsApp
    const whatsappMessage = `New Message from Website Contact Form%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;
    
    // Create WhatsApp URL (using wa.me format)
    const whatsappURL = `https://wa.me/254724926397?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Optional: Reset the form after submission
    event.target.reset();
}