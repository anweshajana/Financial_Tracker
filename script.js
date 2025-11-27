// Modal Functions
function openModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            const modalId = modal.id;
            const type = modalId.replace('Modal', '');
            closeModal(type);
        }
    });
});

// Learn More Functions
function handleLearnMore() {
    const learnMoreContainer = document.getElementById('learnMoreContainer');
    learnMoreContainer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLearnMore() {
    const learnMoreContainer = document.getElementById('learnMoreContainer');
    learnMoreContainer.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close Learn More when clicking outside
document.getElementById('learnMoreContainer').addEventListener('click', (e) => {
    if (e.target.id === 'learnMoreContainer') {
        closeLearnMore();
    }
});

// FAQ Toggle
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    element.classList.toggle('active');
    answer.classList.toggle('active');
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Form Handlers
function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    // Simulate authentication and redirect to moneyTracker.html
    setTimeout(() => {
        window.location.href = 'moneyTracker.html';
    }, 500);
}

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Simulate registration
    setTimeout(() => {
        closeModal('signup');
        showToast(`Account created successfully for ${name}!`);
        event.target.reset();
    }, 500);
}

// CTA Button Handlers
function handleGetStarted() {
    openModal('signin');
}

// Add some interactive animations on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.querySelector('header');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            const modalId = modal.id;
            const type = modalId.replace('Modal', '');
            closeModal(type);
        });
        
        if (document.getElementById('learnMoreContainer').classList.contains('active')) {
            closeLearnMore();
        }
    }
});

// Add ripple effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize page with animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
