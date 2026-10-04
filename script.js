/**
 * NOIRÉ HAUTE COUTURE - COMPLETE E-COMMERCE INTERACTIVE ENGINE
 * Pure Vanilla JavaScript ES6
 */

/* ==========================================================================
   1. PRODUCTS DATASET (16 HANDCRAFTED ATELIER GARMENTS)
   ========================================================================== */
const ATELIER_PRODUCTS = [
    {
        id: 'n-01',
        name: 'Sculpted Double-Breasted Wool Overcoat',
        category: 'jackets',
        gender: 'men',
        price: 44500,
        originalPrice: 52000,
        discount: '15% OFF',
        isNew: true,
        isSale: true,
        rating: 4.9,
        reviewCount: 24,
        colors: [
            { name: 'Obsidian Black', hex: '#121212' },
            { name: 'Charcoal Grey', hex: '#3a3836' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Hand-tailored double-breasted overcoat cut from heavy Italian virgin wool with floating canvas construction and hand-carved horn buttons.',
        details: ['100% Italian Virgin Wool', 'Cupro Bemberg Full Lining', 'Hand-stitched peak lapels', 'Crafted in Milan, Italy'],
        care: 'Specialist dry clean only. Store in breathable garment cover.',
        delivery: 'Complimentary Express Air Delivery within 3–5 business days.',
        reviews: [
            { author: 'Vikram R.', rating: 5, date: '1 week ago', title: 'Flawless Drape & Weight', comment: 'The wool has an incredible hand-feel and structural drape. Worth every rupee.' },
            { author: 'Julian M.', rating: 5, date: '3 weeks ago', title: 'Masterpiece Outerwear', comment: 'Peak Milanese tailoring. Fits like bespoke right out of the atelier cover.' }
        ]
    },
    {
        id: 'n-02',
        name: 'Asymmetric Draped Silk Evening Gown',
        category: 'dresses',
        gender: 'women',
        price: 52000,
        originalPrice: 65000,
        discount: '20% OFF',
        isNew: true,
        isSale: true,
        rating: 5.0,
        reviewCount: 31,
        colors: [
            { name: 'Midnight Onyx', hex: '#0e0e0e' },
            { name: 'Champagne Ivory', hex: '#f0ece1' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Fluid bias-cut evening gown fashioned from heavyweight Mulberry silk organza, featuring an asymmetric neckline and trailing floor train.',
        details: ['100% Heavyweight Mulberry Silk', 'Bias-cut architectural drape', 'Invisible side zipper closure', 'Handcrafted in Paris'],
        care: 'Delicate dry clean only. Do not wash or steam directly.',
        delivery: 'Complimentary White-Glove Courier Delivery within 3 business days.',
        reviews: [
            { author: 'Sophia L.', rating: 5, date: '2 days ago', title: 'Breathtaking Gala Dress', comment: 'Received endless compliments. The silk flows with every step effortlessly.' }
        ]
    },
    {
        id: 'n-03',
        name: 'Structured Atelier Nappa Leather Trench',
        category: 'jackets',
        gender: 'women',
        price: 68000,
        originalPrice: null,
        discount: null,
        isNew: false,
        isSale: false,
        rating: 4.8,
        reviewCount: 19,
        colors: [
            { name: 'Obsidian Black', hex: '#121212' },
            { name: 'Deep Espresso', hex: '#2b1e16' }
        ],
        sizes: ['S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Sculpted trench coat crafted from butter-soft Italian lambskin nappa leather. Features broad lapels and a self-tying waist belt.',
        details: ['100% Italian Lambskin Nappa Leather', 'Silk-blend jacquard lining', 'Double-breasted storm flap', 'Made in Florence, Italy'],
        care: 'Specialist leather clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: [
            { author: 'Aanya K.', rating: 5, date: '1 month ago', title: 'Exceptional Leather Quality', comment: 'Unbelievably soft leather with sharp architectural shoulders.' }
        ]
    },
    {
        id: 'n-04',
        name: 'Minimalist Italian Cashmere Turtleneck Knit',
        category: 'tops',
        gender: 'men',
        price: 24500,
        originalPrice: null,
        discount: null,
        isNew: false,
        isSale: false,
        rating: 4.9,
        reviewCount: 42,
        colors: [
            { name: 'Sandstone Beige', hex: '#c5bcaf' },
            { name: 'Obsidian Black', hex: '#121212' },
            { name: 'Heather Charcoal', hex: '#4a4845' }
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        images: [
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Pure 12-gauge 2-ply Mongolian cashmere turtleneck knit, engineered for ultra-lightweight thermal warmth and supreme comfort.',
        details: ['100% Grade-A Mongolian Cashmere', 'Seamless 3D knit construction', 'Ribbed cuffs and hem', 'Spun in Biella, Italy'],
        care: 'Hand wash cold with wool detergent or dry clean.',
        delivery: 'Complimentary Express Delivery within 3–5 business days.',
        reviews: [
            { author: 'Rohan M.', rating: 5, date: '2 weeks ago', title: 'Pure Luxury Feel', comment: 'Incredibly soft against the skin. Fits true to size.' }
        ]
    },
    {
        id: 'n-05',
        name: 'Architectural Pleated Wool Midi Skirt',
        category: 'trousers',
        gender: 'women',
        price: 28000,
        originalPrice: 32000,
        discount: '12% OFF',
        isNew: false,
        isSale: true,
        rating: 4.7,
        reviewCount: 15,
        colors: [
            { name: 'Charcoal Wool', hex: '#3a3836' },
            { name: 'Ivory Cream', hex: '#f4ede4' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Sharp knife-pleated midi skirt woven from tropical weight virgin wool. Structured high-rise waist with concealed zip.',
        details: ['100% Fine Virgin Wool', 'Permanent heat-set knife pleats', 'Concealed side zipper', 'Crafted in Milan'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-06',
        name: 'Tailored Charcoal Oversized Blazer',
        category: 'jackets',
        gender: 'men',
        price: 36000,
        originalPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviewCount: 28,
        colors: [
            { name: 'Charcoal Grey', hex: '#3a3836' },
            { name: 'Obsidian Black', hex: '#121212' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Relaxed oversized blazer cut with strong padded shoulders, welt chest pocket, and dual rear vents in premium worsted wool.',
        details: ['Worsted Italian Wool Blend', 'Full canvas chest piece', 'Structured shoulders', 'Made in Italy'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-07',
        name: 'Hand-Crafted Calfskin Atelier Bucket Bag',
        category: 'accessories',
        gender: 'women',
        price: 32500,
        originalPrice: 38000,
        discount: '14% OFF',
        isNew: true,
        isSale: true,
        rating: 5.0,
        reviewCount: 36,
        colors: [
            { name: 'Saddle Tan', hex: '#8a5229' },
            { name: 'Obsidian Black', hex: '#121212' }
        ],
        sizes: ['ONE SIZE'],
        images: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Sculptural bucket handbag handcrafted from full-grain Italian calfskin leather with suede lining and palladium hardware.',
        details: ['100% Full-grain Calfskin Leather', 'Suede interior lining', 'Detachable shoulder strap', 'Crafted in Venice, Italy'],
        care: 'Treat with natural leather conditioner.',
        delivery: 'Complimentary Express Delivery.',
        reviews: [
            { author: 'Meera P.', rating: 5, date: '4 days ago', title: 'Exquisite Leather Craft', comment: 'Holds all daily essentials with absolute elegance.' }
        ]
    },
    {
        id: 'n-08',
        name: 'Monochrome Belted Silk Robe Coat',
        category: 'dresses',
        gender: 'women',
        price: 48000,
        originalPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviewCount: 22,
        colors: [
            { name: 'Monochrome Black/Ivory', hex: '#121212' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Floor-length kimono robe coat tailored in heavy double-faced silk satin with contrasting lapel borders and sash belt.',
        details: ['100% Double-faced Silk Satin', 'Contrast satin piping', 'Includes wide sash belt', 'Paris Atelier Limited Run'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-09',
        name: 'Deconstructed Poplin Atelier Shirt',
        category: 'shirts',
        gender: 'men',
        price: 18500,
        originalPrice: null,
        discount: null,
        isNew: false,
        isSale: false,
        rating: 4.7,
        reviewCount: 14,
        colors: [
            { name: 'Crisp White', hex: '#ffffff' },
            { name: 'Sky Azure', hex: '#d0e1f9' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Architectural poplin shirt tailored from 120s 2-ply Egyptian cotton featuring a concealed placket and point collar.',
        details: ['100% Egyptian Giza Cotton', 'Mother-of-pearl buttons', 'French seams', 'Made in Italy'],
        care: 'Machine wash 30°C or dry clean.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-10',
        name: 'Pleated Straight-Leg Atelier Trousers',
        category: 'trousers',
        gender: 'men',
        price: 26000,
        originalPrice: 30000,
        discount: '13% OFF',
        isNew: false,
        isSale: true,
        rating: 4.8,
        reviewCount: 18,
        colors: [
            { name: 'Obsidian Black', hex: '#121212' },
            { name: 'Warm Taupe', hex: '#8c8278' }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        images: [
            'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Single-pleated dress trousers in high-twist wool woollen gabardine with side waist adjusters and unfinished hem.',
        details: ['100% High-twist Wool Gabardine', 'Side waist adjusters', 'Horn buttons', 'Tailored in Milan'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-11',
        name: 'Raw Japanese Selvedge Denim Jeans',
        category: 'jeans',
        gender: 'men',
        price: 22000,
        originalPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviewCount: 27,
        colors: [
            { name: 'Deep Indigo Selvedge', hex: '#1a2332' }
        ],
        sizes: ['30', '32', '34', '36'],
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop'
        ],
        description: '14.5oz unwashed raw Japanese denim jeans woven on vintage shuttle looms in Okayama, Japan.',
        details: ['100% Okayama Cotton Selvedge Denim', 'Custom copper hardware', 'Red selvedge ID line', 'Crafted in Japan'],
        care: 'Soak cold inside out. Hang dry.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-12',
        name: 'Hand-Finished Nappa Leather Mule Shoes',
        category: 'shoes',
        gender: 'women',
        price: 34000,
        originalPrice: 40000,
        discount: '15% OFF',
        isNew: true,
        isSale: true,
        rating: 5.0,
        reviewCount: 38,
        colors: [
            { name: 'Obsidian Black', hex: '#121212' },
            { name: 'Warm Cream', hex: '#f5f0eb' }
        ],
        sizes: ['36', '37', '38', '39', '40'],
        images: [
            'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Pointed-toe leather mules with a hand-sculpted kitten heel, lined in padded kidskin for evening comfort.',
        details: ['100% Soft Italian Kid Nappa', 'Leather sole & stacked heel', 'Heel height: 50mm', 'Made in Milan'],
        care: 'Store in dust bag. Clean with soft cloth.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-13',
        name: 'Sculpted Minimalist Silk Cami Top',
        category: 'tops',
        gender: 'women',
        price: 16500,
        originalPrice: null,
        discount: null,
        isNew: false,
        isSale: false,
        rating: 4.8,
        reviewCount: 20,
        colors: [
            { name: 'Ivory Silk', hex: '#f7f4ed' },
            { name: 'Obsidian Black', hex: '#121212' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Delicate bias-cut silk camisole top featuring ultra-fine spaghetti straps and a subtle V-neckline.',
        details: ['100% Silk Charmeuse', 'Adjustable shoulder straps', 'Double-lined bust', 'Paris Atelier'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-14',
        name: 'High-Waisted Wide-Leg Atelier Jeans',
        category: 'jeans',
        gender: 'women',
        price: 21000,
        originalPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        rating: 4.9,
        reviewCount: 25,
        colors: [
            { name: 'Washed Indigo', hex: '#3a506b' },
            { name: 'Ecru Denim', hex: '#f0ece1' }
        ],
        sizes: ['25', '26', '27', '28', '29', '30'],
        images: [
            'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'High-rise wide-leg jeans tailored in organic Italian cotton denim with a pressed front crease line.',
        details: ['100% Organic Italian Cotton', 'High-waisted fit', 'Wide leg silhouette', 'Made in Italy'],
        care: 'Wash inside out cold.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-15',
        name: 'Italian Leather Oxford Dress Shoes',
        category: 'shoes',
        gender: 'men',
        price: 38500,
        originalPrice: 45000,
        discount: '14% OFF',
        isNew: false,
        isSale: true,
        rating: 5.0,
        reviewCount: 30,
        colors: [
            { name: 'Polished Black', hex: '#121212' },
            { name: 'Burnished Walnut', hex: '#4a2e1b' }
        ],
        sizes: ['40', '41', '42', '43', '44'],
        images: [
            'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Classic closed-lace Oxford dress shoes handcrafted using traditional Goodyear welt construction.',
        details: ['100% Calfskin Leather', 'Goodyear welted leather sole', 'Hand-rubbed patina finish', 'Made in Northampton, UK'],
        care: 'Polish with natural shoe cream.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    },
    {
        id: 'n-16',
        name: 'Silk Organza Oversized Women Shirt',
        category: 'shirts',
        gender: 'women',
        price: 24000,
        originalPrice: null,
        discount: null,
        isNew: true,
        isSale: false,
        rating: 4.8,
        reviewCount: 16,
        colors: [
            { name: 'Sheer Onyx', hex: '#1c1b1a' },
            { name: 'Opal White', hex: '#f7f7f7' }
        ],
        sizes: ['XS', 'S', 'M', 'L'],
        images: [
            'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop'
        ],
        description: 'Semi-sheer oversized button-up shirt crafted from crisp silk organza with elongated french cuffs.',
        details: ['100% Silk Organza', 'Mother-of-pearl buttons', 'Elongated cuffs', 'Paris Atelier'],
        care: 'Dry clean only.',
        delivery: 'Complimentary Express Delivery.',
        reviews: []
    }
];


/* ==========================================================================
   2. STATE MANAGER & PERSISTENCE (LOCAL STORAGE)
   ========================================================================== */
const AppState = {
    cart: JSON.parse(localStorage.getItem('noire_cart') || '[]'),
    wishlist: new Set(JSON.parse(localStorage.getItem('noire_wishlist') || '[]')),
    orders: JSON.parse(localStorage.getItem('noire_orders') || '[]'),
    appliedPromo: null,
    
    // Filter State
    filters: {
        gender: 'all',
        category: 'all',
        sort: 'recommended'
    },

    saveCart() {
        localStorage.setItem('noire_cart', JSON.stringify(this.cart));
        updateCartBadge();
        renderCartDrawer();
    },

    saveWishlist() {
        localStorage.setItem('noire_wishlist', JSON.stringify(Array.from(this.wishlist)));
        updateWishlistBadge();
    },

    saveOrders() {
        localStorage.setItem('noire_orders', JSON.stringify(this.orders));
        renderOrdersList();
    }
};


/* ==========================================================================
   3. DOM INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initHeroCarousel();
    initCatalog();
    initPDPModal();
    initCartDrawer();
    initCheckoutFlow();
    initAccountAndOrders();
    initSearchModal();
    initSizeGuideModal();
    initReviewModal();
    initNavbarScroll();
    initNavFilterTriggers();
    
    // Initial Badge Updates
    updateCartBadge();
    updateWishlistBadge();
});


/* ==========================================================================
   4. HERO CAROUSEL CONTROLLER
   ========================================================================== */
function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator-dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const heroCarousel = document.getElementById('hero-carousel');

    if (!slides.length) return;

    let currentSlide = 0;
    let autoPlayTimer = null;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove('active'));
        indicators.forEach(d => d.classList.remove('active'));

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
    }

    function nextSlide() { goToSlide(currentSlide + 1); }
    function prevSlide() { goToSlide(currentSlide - 1); }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayTimer = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        if (autoPlayTimer) clearInterval(autoPlayTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });

    indicators.forEach((dot, idx) => {
        dot.addEventListener('click', () => { goToSlide(idx); startAutoPlay(); });
    });

    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', stopAutoPlay);
        heroCarousel.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
}


/* ==========================================================================
   5. PRODUCT CATALOG ENGINE (RENDER, FILTER, SORT)
   ========================================================================== */
function initCatalog() {
    const productGrid = document.getElementById('product-grid');
    const genderTabs = document.querySelectorAll('.filter-tab');
    const categorySelect = document.getElementById('category-select');
    const sortSelect = document.getElementById('sort-select');
    const resetBtn = document.getElementById('reset-filters-btn');

    if (!productGrid) return;

    function getFilteredProducts() {
        let items = [...ATELIER_PRODUCTS];

        // 1. Gender / Tag Filter
        const g = AppState.filters.gender;
        if (g === 'women') {
            items = items.filter(p => p.gender === 'women');
        } else if (g === 'men') {
            items = items.filter(p => p.gender === 'men');
        } else if (g === 'new-arrivals') {
            items = items.filter(p => p.isNew);
        } else if (g === 'sale') {
            items = items.filter(p => p.isSale);
        }

        // 2. Category Filter
        const c = AppState.filters.category;
        if (c !== 'all') {
            items = items.filter(p => p.category === c);
        }

        // 3. Sorting
        const s = AppState.filters.sort;
        if (s === 'newest') {
            items.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        } else if (s === 'price-low') {
            items.sort((a, b) => a.price - b.price);
        } else if (s === 'price-high') {
            items.sort((a, b) => b.price - a.price);
        } else if (s === 'rating') {
            items.sort((a, b) => b.rating - a.rating);
        }

        return items;
    }

    function renderGrid() {
        const filtered = getFilteredProducts();
        productGrid.innerHTML = '';

        const resultsCountEl = document.getElementById('results-count');
        if (resultsCountEl) {
            resultsCountEl.textContent = `Showing ${filtered.length} Atelier Garments`;
        }

        if (filtered.length === 0) {
            productGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
                    <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 0.5rem;">No matching garments found</h3>
                    <p style="color: var(--text-secondary);">Try clearing your active filters or selecting another category.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.setAttribute('data-product-id', p.id);

            const isLiked = AppState.wishlist.has(p.id);

            card.innerHTML = `
                <div class="product-img-wrapper" onclick="openPDP('${p.id}')">
                    <img src="${p.images[0]}" alt="${p.name}" class="product-img" loading="lazy">
                    <div class="product-badges">
                        ${p.isNew ? '<span class="badge-tag badge-new">NEW</span>' : ''}
                        ${p.isSale ? `<span class="badge-tag badge-sale">${p.discount || 'SALE'}</span>` : ''}
                    </div>
                    <button class="wishlist-toggle-btn ${isLiked ? 'liked' : ''}" 
                            aria-label="Wishlist" 
                            onclick="event.stopPropagation(); toggleWishlist('${p.id}')">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <div class="quick-view-overlay-btn" onclick="event.stopPropagation(); openPDP('${p.id}')">
                        QUICK VIEW
                    </div>
                </div>

                <div class="product-info">
                    <span class="product-category">${p.gender.toUpperCase()} • ${p.category.toUpperCase()}</span>
                    <h3 class="product-title" onclick="openPDP('${p.id}')">${p.name}</h3>
                    
                    <div class="product-rating-row">
                        <span>★ ${p.rating.toFixed(1)}</span>
                        <span class="review-count-text">(${p.reviewCount})</span>
                    </div>

                    <div class="product-price-row">
                        <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
                        ${p.originalPrice ? `<span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                    </div>

                    <div class="product-card-actions">
                        <button class="btn btn-dark btn-block" onclick="quickAddCart('${p.id}')">
                            ADD TO BAG
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // Gender Tabs Event Listeners
    genderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            genderTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            AppState.filters.gender = tab.getAttribute('data-gender');
            renderGrid();
        });
    });

    // Select Listeners
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            AppState.filters.category = e.target.value;
            renderGrid();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            AppState.filters.sort = e.target.value;
            renderGrid();
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            AppState.filters.gender = 'all';
            AppState.filters.category = 'all';
            AppState.filters.sort = 'recommended';
            
            genderTabs.forEach(t => t.classList.remove('active'));
            if (genderTabs[0]) genderTabs[0].classList.add('active');
            if (categorySelect) categorySelect.value = 'all';
            if (sortSelect) sortSelect.value = 'recommended';
            
            renderGrid();
        });
    }

    renderGrid();
}

window.triggerCatalogFilter = function(filterKey) {
    const tab = document.querySelector(`.filter-tab[data-gender="${filterKey}"]`);
    if (tab) tab.click();
};


/* ==========================================================================
   6. WISHLIST MANAGEMENT
   ========================================================================== */
window.toggleWishlist = function(productId) {
    if (AppState.wishlist.has(productId)) {
        AppState.wishlist.delete(productId);
        showToast('Item removed from Wishlist');
    } else {
        AppState.wishlist.add(productId);
        showToast('Item saved to your Wishlist ❤️');
    }

    AppState.saveWishlist();
    
    // Update active icon on cards
    document.querySelectorAll(`.product-card[data-product-id="${productId}"] .wishlist-toggle-btn`)
        .forEach(btn => btn.classList.toggle('liked', AppState.wishlist.has(productId)));
};

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-count');
    if (badge) {
        badge.textContent = AppState.wishlist.size;
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 300);
    }
}


/* ==========================================================================
   7. PRODUCT DETAIL PAGE (PDP) MODAL & GALLERY
   ========================================================================== */
function initPDPModal() {
    const modal = document.getElementById('pdp-modal');
    const closeBtn = document.getElementById('pdp-close-btn');
    const backdrop = document.getElementById('pdp-backdrop');

    if (closeBtn) closeBtn.addEventListener('click', closePDP);
    if (backdrop) backdrop.addEventListener('click', closePDP);
}

window.openPDP = function(productId) {
    const product = ATELIER_PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('pdp-modal');
    const container = document.getElementById('pdp-layout-container');

    let selectedColor = product.colors[0]?.name || 'Standard';
    let selectedSize = product.sizes[0] || 'M';
    let qty = 1;

    const isLiked = AppState.wishlist.has(product.id);

    container.innerHTML = `
        <!-- Gallery -->
        <div class="pdp-gallery">
            <div class="pdp-main-img-box">
                <img src="${product.images[0]}" alt="${product.name}" id="pdp-main-img" class="pdp-main-img">
            </div>
            <div class="pdp-thumbnails">
                ${product.images.map((img, idx) => `
                    <img src="${img}" alt="Thumbnail ${idx}" class="pdp-thumb ${idx === 0 ? 'active' : ''}" 
                         onclick="switchPDPImage('${img}', this)">
                `).join('')}
            </div>
        </div>

        <!-- Details -->
        <div class="pdp-details-column">
            <span class="pdp-category-tag">${product.gender.toUpperCase()} • ${product.category.toUpperCase()}</span>
            <h1 class="pdp-title">${product.name}</h1>

            <div class="pdp-ratings-row">
                <span class="pdp-stars">★★★★★ ${product.rating.toFixed(1)}</span>
                <span class="pdp-reviews-link" onclick="scrollToPDPReviews()">(${product.reviewCount} Reviews)</span>
            </div>

            <div class="pdp-price-row">
                <span class="pdp-price">₹${product.price.toLocaleString('en-IN')}</span>
                ${product.originalPrice ? `<span class="pdp-original-price">₹${product.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                ${product.discount ? `<span class="pdp-discount-badge">${product.discount}</span>` : ''}
            </div>

            <!-- Color Swatches -->
            <div class="pdp-option-group">
                <div class="pdp-option-label">Color: <span id="selected-color-name">${selectedColor}</span></div>
                <div class="color-swatch-list">
                    ${product.colors.map((c, idx) => `
                        <div class="swatch-item ${idx === 0 ? 'active' : ''}" onclick="selectPDPColor('${c.name}', this)">
                            <span class="color-dot" style="background-color: ${c.hex}"></span>
                            <span>${c.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Size Selector -->
            <div class="pdp-option-group">
                <div class="pdp-option-label">
                    <span>Select Size</span>
                    <span class="pdp-size-guide-btn" onclick="openSizeGuide()">Size Guide & Measurements</span>
                </div>
                <div class="size-pill-list">
                    ${product.sizes.map((s, idx) => `
                        <div class="size-pill ${idx === 0 ? 'active' : ''}" onclick="selectPDPSize('${s}', this)">${s}</div>
                    `).join('')}
                </div>
            </div>

            <!-- Quantity & CTAs -->
            <div class="pdp-quantity-row">
                <div class="qty-control">
                    <button class="qty-btn" onclick="changePDPQty(-1)">-</button>
                    <input type="text" id="pdp-qty-input" value="1" readonly class="qty-input">
                    <button class="qty-btn" onclick="changePDPQty(1)">+</button>
                </div>

                <div class="pdp-action-buttons" style="flex: 1;">
                    <button class="btn btn-dark pdp-add-bag-btn" id="pdp-add-bag-trigger">
                        ADD TO BAG
                    </button>
                    <button class="btn btn-gold pdp-buy-now-btn" id="pdp-buy-now-trigger">
                        BUY NOW
                    </button>
                    <button class="pdp-wishlist-btn ${isLiked ? 'liked' : ''}" id="pdp-wishlist-trigger">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- PIN Code Checker -->
            <div class="pdp-pincode-box">
                <span class="pincode-label">DELIVERY AVAILABILITY CHECKER</span>
                <div class="pincode-input-row">
                    <input type="text" id="pincode-input" placeholder="Enter 6-digit PIN code (e.g. 400001)">
                    <button class="btn-secondary-sm" onclick="checkDeliveryPin()">Check</button>
                </div>
                <div id="pincode-msg" class="pincode-result-text"></div>
            </div>

            <!-- Accordion Information Tabs -->
            <div class="pdp-accordions">
                <div class="accordion-item active">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Fabrics & Artisanal Details</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        <p>${product.description}</p>
                        <ul style="margin-top: 0.5rem; padding-left: 1.2rem;">
                            ${product.details.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Preservation & Garment Care</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        <p>${product.care}</p>
                    </div>
                </div>

                <div class="accordion-item">
                    <div class="accordion-header" onclick="toggleAccordion(this)">
                        <span>Complimentary Shipping & Returns</span>
                        <span class="accordion-icon">▼</span>
                    </div>
                    <div class="accordion-content">
                        <p>${product.delivery}</p>
                        <p style="margin-top: 0.4rem;">Enjoy 14-day complimentary home collection returns for all un-altered garments.</p>
                    </div>
                </div>
            </div>

            <!-- Reviews Breakdown -->
            <div class="pdp-reviews-section" id="pdp-reviews-anchor">
                <div class="reviews-header-row">
                    <h3>ATELIER REVIEWS (${product.reviews.length})</h3>
                    <button class="btn-secondary-sm" onclick="openReviewModal('${product.id}')">Write a Review</button>
                </div>

                <div class="reviews-list">
                    ${product.reviews.length ? product.reviews.map(r => `
                        <div class="review-item">
                            <div class="review-meta">
                                <span class="review-author">${r.author} • <span style="color:var(--accent-gold);">★ ${r.rating}</span></span>
                                <span class="review-date">${r.date}</span>
                            </div>
                            <h4 class="review-title-text">${r.title}</h4>
                            <p class="review-body">${r.comment}</p>
                        </div>
                    `).join('') : '<p style="color:var(--text-muted);">No reviews written yet. Be the first to review this garment.</p>'}
                </div>
            </div>

        </div>
    `;

    // Bind Event Listeners on rendered elements
    document.getElementById('pdp-add-bag-trigger').addEventListener('click', () => {
        addToCart(product.id, selectedSize, selectedColor, qty);
        closePDP();
        openCart();
    });

    document.getElementById('pdp-buy-now-trigger').addEventListener('click', () => {
        addToCart(product.id, selectedSize, selectedColor, qty);
        closePDP();
        openCheckout();
    });

    document.getElementById('pdp-wishlist-trigger').addEventListener('click', () => {
        toggleWishlist(product.id);
        const btn = document.getElementById('pdp-wishlist-trigger');
        btn.classList.toggle('liked', AppState.wishlist.has(product.id));
    });

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

window.closePDP = function() {
    const modal = document.getElementById('pdp-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

window.switchPDPImage = function(imgUrl, thumbEl) {
    document.getElementById('pdp-main-img').src = imgUrl;
    document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
};

window.selectPDPColor = function(colorName, el) {
    document.querySelectorAll('.color-swatch-list .swatch-item').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('selected-color-name').textContent = colorName;
};

window.selectPDPSize = function(sizeVal, el) {
    document.querySelectorAll('.size-pill-list .size-pill').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
};

window.changePDPQty = function(delta) {
    const input = document.getElementById('pdp-qty-input');
    let val = parseInt(input.value) + delta;
    if (val < 1) val = 1;
    input.value = val;
};

window.toggleAccordion = function(headerEl) {
    const item = headerEl.parentElement;
    item.classList.toggle('active');
};

window.checkDeliveryPin = function() {
    const input = document.getElementById('pincode-input');
    const msg = document.getElementById('pincode-msg');
    const val = input.value.trim();

    if (/^\d{6}$/.test(val)) {
        msg.textContent = `✓ Delivery available to ${val}. Estimated arrival in 3–5 business days via Express Air.`;
        msg.style.color = 'var(--success-green)';
    } else {
        msg.textContent = 'Please enter a valid 6-digit Indian PIN Code.';
        msg.style.color = 'var(--heart-red)';
    }
};

window.scrollToPDPReviews = function() {
    const anchor = document.getElementById('pdp-reviews-anchor');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth' });
};


/* ==========================================================================
   8. SHOPPING BAG / CART DRAWER CONTROLLER
   ========================================================================== */
function initCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const bagBtn = document.getElementById('bag-btn');
    const closeBtn = document.getElementById('cart-close-btn');
    const backdrop = document.getElementById('cart-backdrop');
    const checkoutBtn = document.getElementById('cart-checkout-btn');
    const applyPromoBtn = document.getElementById('apply-promo-btn');

    if (bagBtn) bagBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (backdrop) backdrop.addEventListener('click', closeCart);

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            closeCart();
            openCheckout();
        });
    }

    if (applyPromoBtn) {
        applyPromoBtn.addEventListener('click', () => {
            const input = document.getElementById('promo-input');
            const msg = document.getElementById('promo-msg');
            const code = input.value.trim().toUpperCase();

            if (code === 'NOIRE10') {
                AppState.appliedPromo = 0.10; // 10% off
                msg.textContent = '✓ Promo Code NOIRE10 Applied (10% Discount)!';
                msg.className = 'promo-msg success';
            } else {
                AppState.appliedPromo = null;
                msg.textContent = 'Invalid promo code. Try NOIRE10.';
                msg.className = 'promo-msg error';
            }
            renderCartDrawer();
        });
    }
}

window.openCart = function() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.add('active');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
};

window.closeCart = function() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.remove('active');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

window.quickAddCart = function(productId) {
    const product = ATELIER_PRODUCTS.find(p => p.id === productId);
    if (product) {
        addToCart(productId, product.sizes[0] || 'M', product.colors[0]?.name || 'Standard', 1);
        showToast(`Added ${product.name} to Shopping Bag`);
    }
};

function addToCart(productId, size, color, quantity) {
    const existingIndex = AppState.cart.findIndex(
        item => item.id === productId && item.size === size && item.color === color
    );

    if (existingIndex > -1) {
        AppState.cart[existingIndex].quantity += quantity;
    } else {
        AppState.cart.push({
            id: productId,
            size,
            color,
            quantity
        });
    }
    AppState.saveCart();
}

function updateCartBadge() {
    const badge = document.getElementById('bag-count');
    if (badge) {
        const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
        badge.classList.add('pulse');
        setTimeout(() => badge.classList.remove('pulse'), 300);
    }
}

function renderCartDrawer() {
    const container = document.getElementById('cart-items-container');
    const drawerCount = document.getElementById('cart-drawer-count');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('discount-row');
    const discountEl = document.getElementById('cart-discount');
    const shippingEl = document.getElementById('cart-shipping');
    const totalEl = document.getElementById('cart-total');
    const shippingBannerText = document.getElementById('shipping-banner-text');
    const shippingProgressFill = document.getElementById('shipping-progress-fill');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    if (!container) return;

    const totalQty = AppState.cart.reduce((sum, i) => sum + i.quantity, 0);
    if (drawerCount) drawerCount.textContent = `(${totalQty})`;

    if (AppState.cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 1rem;">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" style="color:var(--text-muted); margin-bottom: 1rem;">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                </svg>
                <h4 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 0.5rem;">Your Bag is Empty</h4>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.5rem;">Explore our Autumn/Winter '26 capsule collection.</p>
                <button class="btn btn-dark" onclick="closeCart(); location.href='#featured-products';">Explore Collections</button>
            </div>
        `;

        subtotalEl.textContent = '₹0';
        shippingEl.textContent = '₹0';
        totalEl.textContent = '₹0';
        if (discountRow) discountRow.style.display = 'none';
        if (checkoutBtn) checkoutBtn.disabled = true;
        if (shippingProgressFill) shippingProgressFill.style.width = '0%';
        if (shippingBannerText) shippingBannerText.textContent = 'Add ₹15,000 for Complimentary Express Shipping.';
        return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;

    let subtotal = 0;
    container.innerHTML = '';

    AppState.cart.forEach((item, idx) => {
        const product = ATELIER_PRODUCTS.find(p => p.id === item.id);
        if (!product) return;

        const itemSubtotal = product.price * item.quantity;
        subtotal += itemSubtotal;

        const card = document.createElement('div');
        card.className = 'cart-item-card';
        card.innerHTML = `
            <img src="${product.images[0]}" alt="${product.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div>
                    <h4 class="cart-item-name">${product.name}</h4>
                    <div class="cart-item-meta">Size: ${item.size} • Color: ${item.color}</div>
                    <div class="cart-item-price">₹${product.price.toLocaleString('en-IN')}</div>
                </div>
                
                <div class="cart-item-actions">
                    <div class="cart-qty-mini">
                        <button onclick="updateCartQty(${idx}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateCartQty(${idx}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove-btn" onclick="removeCartItem(${idx})">Remove</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Shipping calculations (Free over ₹15,000, else ₹750)
    const freeShippingThreshold = 15000;
    const isFreeShipping = subtotal >= freeShippingThreshold;
    const shippingCost = isFreeShipping ? 0 : 750;

    if (shippingBannerText && shippingProgressFill) {
        if (isFreeShipping) {
            shippingBannerText.textContent = '✓ You unlocked Complimentary Express Shipping!';
            shippingProgressFill.style.width = '100%';
        } else {
            const needed = freeShippingThreshold - subtotal;
            const pct = Math.min(100, (subtotal / freeShippingThreshold) * 100);
            shippingBannerText.textContent = `Add ₹${needed.toLocaleString('en-IN')} more for Complimentary Express Shipping.`;
            shippingProgressFill.style.width = `${pct}%`;
        }
    }

    // Promo calculations
    let discountAmount = 0;
    if (AppState.appliedPromo) {
        discountAmount = Math.round(subtotal * AppState.appliedPromo);
        if (discountRow) discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
    } else {
        if (discountRow) discountRow.style.display = 'none';
    }

    const finalTotal = subtotal - discountAmount + shippingCost;

    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    shippingEl.textContent = isFreeShipping ? 'FREE' : `₹${shippingCost.toLocaleString('en-IN')}`;
    totalEl.textContent = `₹${finalTotal.toLocaleString('en-IN')}`;
}

window.updateCartQty = function(index, delta) {
    if (AppState.cart[index]) {
        AppState.cart[index].quantity += delta;
        if (AppState.cart[index].quantity <= 0) {
            AppState.cart.splice(index, 1);
        }
        AppState.saveCart();
    }
};

window.removeCartItem = function(index) {
    if (AppState.cart[index]) {
        AppState.cart.splice(index, 1);
        AppState.saveCart();
        showToast('Item removed from Shopping Bag');
    }
};


/* ==========================================================================
   9. CHECKOUT PIPELINE & ORDER CONFIRMATION
   ========================================================================== */
function initCheckoutFlow() {
    const modal = document.getElementById('checkout-modal');
    const closeBtn = document.getElementById('checkout-close-btn');
    const backdrop = document.getElementById('checkout-backdrop');
    const form = document.getElementById('checkout-form');
    const paymentRadios = document.querySelectorAll('input[name="payment-method"]');
    const confirmModal = document.getElementById('confirmation-modal');
    const viewOrdersBtn = document.getElementById('view-my-orders-btn');
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
    if (backdrop) backdrop.addEventListener('click', closeCheckout);

    // Payment Radio Switcher
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const val = e.target.value;
            document.getElementById('payment-upi-box').style.display = val === 'upi' ? 'block' : 'none';
            document.getElementById('payment-card-box').style.display = val === 'card' ? 'block' : 'none';
            document.getElementById('payment-cod-box').style.display = val === 'cod' ? 'block' : 'none';
        });
    });

    // Form Submission
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (AppState.cart.length === 0) {
                alert('Your bag is empty!');
                return;
            }

            const name = document.getElementById('checkout-name').value.trim();
            const email = document.getElementById('checkout-email').value.trim();
            const phone = document.getElementById('checkout-phone').value.trim();
            const address = document.getElementById('checkout-address').value.trim();
            const city = document.getElementById('checkout-city').value.trim();
            const state = document.getElementById('checkout-state').value.trim();
            const pincode = document.getElementById('checkout-pincode').value.trim();

            if (!name || !email || !phone || !address || !city || !pincode) {
                alert('Please complete all required shipping fields.');
                return;
            }

            // Create Demo Order
            const orderId = '#NOIRE-2026-' + Math.floor(1000 + Math.random() * 9000);
            const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            let subtotal = 0;
            const orderItems = AppState.cart.map(item => {
                const p = ATELIER_PRODUCTS.find(prod => prod.id === item.id);
                const cost = p ? p.price * item.quantity : 0;
                subtotal += cost;
                return {
                    name: p ? p.name : 'Garment',
                    size: item.size,
                    color: item.color,
                    quantity: item.quantity,
                    price: p ? p.price : 0,
                    img: p ? p.images[0] : ''
                };
            });

            const discount = AppState.appliedPromo ? Math.round(subtotal * AppState.appliedPromo) : 0;
            const shipping = subtotal >= 15000 ? 0 : 750;
            const total = subtotal - discount + shipping;

            const newOrder = {
                orderId,
                date: dateStr,
                items: orderItems,
                total,
                status: 'Order Confirmed',
                shippingAddress: `${name}, ${address}, ${city}, ${state} - ${pincode}`
            };

            AppState.orders.unshift(newOrder);
            AppState.saveOrders();

            // Clear Cart
            AppState.cart = [];
            AppState.appliedPromo = null;
            AppState.saveCart();

            closeCheckout();

            // Render Confirmation Modal
            document.getElementById('confirm-order-id').textContent = orderId;
            document.getElementById('confirm-total-amount').textContent = `₹${total.toLocaleString('en-IN')}`;
            document.getElementById('confirm-address-text').textContent = newOrder.shippingAddress;
            
            confirmModal.classList.add('active');
            confirmModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        });
    }

    if (viewOrdersBtn) {
        viewOrdersBtn.addEventListener('click', () => {
            confirmModal.classList.remove('active');
            openAccount('orders');
        });
    }

    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            confirmModal.classList.remove('active');
            document.body.style.overflow = '';
            location.href = '#featured-products';
        });
    }
}

window.openCheckout = function() {
    if (AppState.cart.length === 0) {
        showToast('Your Shopping Bag is empty!');
        return;
    }

    const modal = document.getElementById('checkout-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    renderCheckoutSummary();
};

window.closeCheckout = function() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

function renderCheckoutSummary() {
    const container = document.getElementById('checkout-items-preview');
    const subtotalEl = document.getElementById('checkout-subtotal');
    const discountRow = document.getElementById('checkout-discount-row');
    const discountEl = document.getElementById('checkout-discount');
    const shippingEl = document.getElementById('checkout-shipping');
    const totalEl = document.getElementById('checkout-total');

    if (!container) return;

    let subtotal = 0;
    container.innerHTML = '';

    AppState.cart.forEach(item => {
        const p = ATELIER_PRODUCTS.find(prod => prod.id === item.id);
        if (!p) return;
        const itemTotal = p.price * item.quantity;
        subtotal += itemTotal;

        const row = document.createElement('div');
        row.className = 'preview-item-row';
        row.innerHTML = `
            <span>${p.name} (x${item.quantity}) - ${item.size}</span>
            <strong>₹${itemTotal.toLocaleString('en-IN')}</strong>
        `;
        container.appendChild(row);
    });

    const discountAmount = AppState.appliedPromo ? Math.round(subtotal * AppState.appliedPromo) : 0;
    const isFreeShipping = subtotal >= 15000;
    const shippingCost = isFreeShipping ? 0 : 750;
    const grandTotal = subtotal - discountAmount + shippingCost;

    if (discountRow) {
        discountRow.style.display = discountAmount > 0 ? 'flex' : 'none';
        if (discountEl) discountEl.textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
    }

    subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    shippingEl.textContent = isFreeShipping ? 'FREE' : `₹${shippingCost.toLocaleString('en-IN')}`;
    totalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}


/* ==========================================================================
   10. ACCOUNT & MY ORDERS TRACKER SYSTEM
   ========================================================================== */
function initAccountAndOrders() {
    const modal = document.getElementById('account-modal');
    const accountBtn = document.getElementById('account-btn');
    const footerTrigger = document.getElementById('footer-account-trigger');
    const closeBtn = document.getElementById('account-close-btn');
    const backdrop = document.getElementById('account-backdrop');
    const tabs = document.querySelectorAll('.account-tab');

    if (accountBtn) accountBtn.addEventListener('click', () => openAccount('orders'));
    if (footerTrigger) footerTrigger.addEventListener('click', () => openAccount('orders'));
    if (closeBtn) closeBtn.addEventListener('click', closeAccount);
    if (backdrop) backdrop.addEventListener('click', closeAccount);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            document.querySelectorAll('.account-tab-content').forEach(c => c.classList.remove('active'));
            const activeContent = document.getElementById(`tab-${target}`);
            if (activeContent) activeContent.classList.add('active');

            if (target === 'wishlist') renderWishlistGrid();
        });
    });
}

window.openAccount = function(activeTab = 'orders') {
    const modal = document.getElementById('account-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    renderOrdersList();
    renderWishlistGrid();

    const tabBtn = document.querySelector(`.account-tab[data-tab="${activeTab}"]`);
    if (tabBtn) tabBtn.click();
};

window.closeAccount = function() {
    const modal = document.getElementById('account-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

function renderOrdersList() {
    const container = document.getElementById('orders-list-container');
    const countBadge = document.getElementById('orders-tab-count');
    if (!container) return;

    if (countBadge) countBadge.textContent = AppState.orders.length;

    if (AppState.orders.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 1rem;">
                <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem;">No Orders Placed Yet</h4>
                <p style="color: var(--text-secondary);">When you place demo orders, they will appear here with live tracking updates.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '';

    AppState.orders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-history-card';
        card.innerHTML = `
            <div class="order-card-header">
                <div>
                    <span class="order-id-code">${order.orderId}</span>
                    <div style="font-size: 0.8rem; color: var(--text-muted);">Placed on ${order.date}</div>
                </div>
                <div style="font-size: 1.1rem; font-weight: 700;">₹${order.total.toLocaleString('en-IN')}</div>
            </div>

            <div class="order-tracker-bar">
                <div class="tracker-step completed">
                    <div class="tracker-dot">✓</div>
                    <span class="tracker-label">Confirmed</span>
                </div>
                <div class="tracker-step active">
                    <div class="tracker-dot">●</div>
                    <span class="tracker-label">Processing</span>
                </div>
                <div class="tracker-step">
                    <div class="tracker-dot">3</div>
                    <span class="tracker-label">Shipped</span>
                </div>
                <div class="tracker-step">
                    <div class="tracker-dot">4</div>
                    <span class="tracker-label">Out for Delivery</span>
                </div>
                <div class="tracker-step">
                    <div class="tracker-dot">5</div>
                    <span class="tracker-label">Delivered</span>
                </div>
            </div>

            <div style="font-size: 0.88rem; margin-top: 1.5rem;">
                <strong>Items (${order.items.length}):</strong>
                <ul style="margin-top: 0.5rem; padding-left: 1.2rem; color: var(--text-secondary);">
                    ${order.items.map(i => `<li>${i.name} (Size: ${i.size}, Qty: ${i.quantity}) - ₹${(i.price * i.quantity).toLocaleString('en-IN')}</li>`).join('')}
                </ul>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderWishlistGrid() {
    const container = document.getElementById('wishlist-grid-container');
    const countBadge = document.getElementById('wishlist-tab-count');
    if (!container) return;

    if (countBadge) countBadge.textContent = AppState.wishlist.size;

    const wishlistArray = Array.from(AppState.wishlist);

    if (wishlistArray.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 1rem;">
                <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem;">Your Wishlist is Empty</h4>
                <p style="color: var(--text-secondary);">Click the heart icon on any garment to save it here for later.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = '<div class="product-grid" style="grid-template-columns: repeat(3, 1fr);"></div>';
    const grid = container.querySelector('.product-grid');

    wishlistArray.forEach(id => {
        const p = ATELIER_PRODUCTS.find(item => item.id === id);
        if (!p) return;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper" onclick="closeAccount(); openPDP('${p.id}')">
                <img src="${p.images[0]}" alt="${p.name}" class="product-img">
            </div>
            <div class="product-info">
                <h4 class="product-title" onclick="closeAccount(); openPDP('${p.id}')">${p.name}</h4>
                <div class="product-price" style="margin-bottom: 0.8rem;">₹${p.price.toLocaleString('en-IN')}</div>
                <button class="btn btn-dark btn-block" onclick="quickAddCart('${p.id}')">MOVE TO BAG</button>
            </div>
        `;
        grid.appendChild(card);
    });
}


/* ==========================================================================
   11. AUXILIARY MODALS (SIZE GUIDE, REVIEWS, SEARCH, TOASTS)
   ========================================================================== */
function initSizeGuideModal() {
    const modal = document.getElementById('size-guide-modal');
    const footerTrigger = document.getElementById('footer-size-guide-trigger');
    const closeBtn = document.getElementById('size-guide-close-btn');
    const backdrop = document.getElementById('size-guide-backdrop');

    if (footerTrigger) footerTrigger.addEventListener('click', openSizeGuide);
    if (closeBtn) closeBtn.addEventListener('click', closeSizeGuide);
    if (backdrop) backdrop.addEventListener('click', closeSizeGuide);
}

window.openSizeGuide = function() {
    const modal = document.getElementById('size-guide-modal');
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

window.closeSizeGuide = function() {
    const modal = document.getElementById('size-guide-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

function initReviewModal() {
    const modal = document.getElementById('review-modal');
    const closeBtn = document.getElementById('review-close-btn');
    const backdrop = document.getElementById('review-backdrop');
    const form = document.getElementById('add-review-form');
    const stars = document.querySelectorAll('#star-rating-input span');

    let activeRating = 5;

    stars.forEach(s => {
        s.addEventListener('click', () => {
            activeRating = parseInt(s.getAttribute('data-rating'));
            stars.forEach((st, idx) => {
                st.classList.toggle('active', idx < activeRating);
            });
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeReviewModal);
    if (backdrop) backdrop.addEventListener('click', closeReviewModal);

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const pId = form.getAttribute('data-product-id');
            const author = document.getElementById('rev-author').value.trim();
            const title = document.getElementById('rev-title').value.trim();
            const comment = document.getElementById('rev-comment').value.trim();

            const product = ATELIER_PRODUCTS.find(p => p.id === pId);
            if (product) {
                product.reviews.unshift({
                    author,
                    rating: activeRating,
                    date: 'Just now',
                    title,
                    comment
                });
                product.reviewCount += 1;
                showToast('Thank you! Your atelier review has been published.');
                closeReviewModal();
                openPDP(pId);
            }
        });
    }
}

window.openReviewModal = function(productId) {
    const modal = document.getElementById('review-modal');
    const form = document.getElementById('add-review-form');
    if (form) form.setAttribute('data-product-id', productId);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
};

window.closeReviewModal = function() {
    const modal = document.getElementById('review-modal');
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

function initSearchModal() {
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchCloseBtn = document.getElementById('search-close-btn');
    const searchBackdrop = document.getElementById('search-backdrop');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    function openSearch() {
        searchModal.classList.add('active');
        searchModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (searchInput) setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearch() {
        searchModal.classList.remove('active');
        searchModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (searchInput) searchInput.value = '';
        if (searchResults) searchResults.innerHTML = '';
    }

    if (searchBtn) searchBtn.addEventListener('click', openSearch);
    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
    if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal.classList.contains('active')) closeSearch();
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            openSearch();
        }
    });

    if (searchInput && searchResults) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';

            if (!query) return;

            const matches = ATELIER_PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.category.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query)
            );

            if (matches.length === 0) {
                searchResults.innerHTML = '<p style="padding: 1.5rem; color: var(--text-muted); font-size: 0.9rem;">No matching garments found in the Atelier.</p>';
                return;
            }

            matches.forEach(item => {
                const row = document.createElement('div');
                row.className = 'search-item-result';
                row.innerHTML = `
                    <img src="${item.images[0]}" alt="${item.name}" class="search-item-img">
                    <div>
                        <div class="search-item-title">${item.name}</div>
                        <div class="search-item-price">${item.gender.toUpperCase()} • ${item.category.toUpperCase()} • ₹${item.price.toLocaleString('en-IN')}</div>
                    </div>
                `;
                row.addEventListener('click', () => {
                    closeSearch();
                    openPDP(item.id);
                });
                searchResults.appendChild(row);
            });
        });
    }
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-message';
    toast.innerHTML = `<span>❖</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}


/* ==========================================================================
   12. SCROLL & NAV LINKS EVENT LISTENERS
   ========================================================================== */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initNavFilterTriggers() {
    const filterLinks = document.querySelectorAll('[data-filter-link]');
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const filterKey = link.getAttribute('data-filter-link');
            triggerCatalogFilter(filterKey);
        });
    });
}
