// Brand data
const brands = [
    {
        id: 1,
        name: 'Premium Home',
        description: 'Luxury home goods and furnishings',
        category: 'home',
        color: 'from-blue-500 to-blue-600',
    },
    {
        id: 2,
        name: 'Tech Essentials',
        description: 'Cutting-edge technology products',
        category: 'tech',
        color: 'from-purple-500 to-purple-600',
    },
    {
        id: 3,
        name: 'Fashion Forward',
        description: 'Trendsetting apparel and accessories',
        category: 'fashion',
        color: 'from-pink-500 to-pink-600',
    },
    {
        id: 4,
        name: 'Outdoor Adventure',
        description: 'Gear for the great outdoors',
        category: 'outdoor',
        color: 'from-green-500 to-green-600',
    },
    {
        id: 5,
        name: 'Wellness & Health',
        description: 'Products for a healthier lifestyle',
        category: 'wellness',
        color: 'from-orange-500 to-orange-600',
    },
    {
        id: 6,
        name: 'Gourmet Kitchen',
        description: 'Premium kitchenware and culinary tools',
        category: 'kitchen',
        color: 'from-red-500 to-red-600',
    },
];

// Color mapping for gradients - using blue and red accents
const colorMap = {
    'from-blue-500 to-blue-600': 'linear-gradient(135deg, #0066cc, #004499)',
    'from-purple-500 to-purple-600': 'linear-gradient(135deg, #0066cc, #004499)',
    'from-pink-500 to-pink-600': 'linear-gradient(135deg, #cc0000, #990000)',
    'from-green-500 to-green-600': 'linear-gradient(135deg, #0066cc, #004499)',
    'from-orange-500 to-orange-600': 'linear-gradient(135deg, #cc0000, #990000)',
    'from-red-500 to-red-600': 'linear-gradient(135deg, #cc0000, #990000)',
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Render brands
    renderBrands('all');
    
    // Setup category filter
    setupCategoryFilter();
    
    // Setup mobile menu
    setupMobileMenu();
});

// Render brands
function renderBrands(category) {
    const brandsGrid = document.getElementById('brandsGrid');
    const filteredBrands = category === 'all' 
        ? brands 
        : brands.filter(brand => brand.category === category);
    
    brandsGrid.innerHTML = filteredBrands.map(brand => `
        <div class="brand-card">
            <div class="brand-card-gradient" style="background: ${colorMap[brand.color]};"></div>
            <div class="brand-card-content">
                <h3 class="brand-name">${brand.name}</h3>
                <p class="brand-description">${brand.description}</p>
                <a href="#" class="brand-link">
                    Explore Brand
                    <span class="brand-link-arrow">→</span>
                </a>
            </div>
        </div>
    `).join('');
}

// Setup category filter
function setupCategoryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get category and filter brands
            const category = button.getAttribute('data-category');
            renderBrands(category);
        });
    });
}

// Setup mobile menu
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileMenuToggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinksList = navLinks.querySelectorAll('.nav-link');
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
            });
        });
    }
}

