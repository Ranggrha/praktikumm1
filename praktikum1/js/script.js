// Animate portfolio and testimonial cards on scroll
function animateOnScroll() {
	const revealEls = document.querySelectorAll('.portfolio-item, .testimonial-card');
	const windowHeight = window.innerHeight;
	revealEls.forEach(el => {
		const rect = el.getBoundingClientRect();
		if (rect.top < windowHeight - 60) {
			el.classList.add('visible');
		}
	});
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);
window.addEventListener('resize', animateOnScroll);


// Portfolio data (customize as needed)
const portfolioData = [
	{
		title: "Brand Identity for Coffee Shop",
		description: "Created a full branding suite including logo, packaging, and social media for a local coffee shop.",
		link: "https://www.behance.net/yourproject1"
	},
	{
		title: "3D Product Visualization",
		description: "Modeled and rendered photorealistic 3D visuals for a tech startup's new product line.",
		link: "https://www.artstation.com/yourproject2"
	},
	{
		title: "Music Festival Poster Series",
		description: "Designed a vibrant poster series for an international music festival, blending illustration and typography.",
		link: "https://www.instagram.com/yourproject3"
	}
];

// Testimonials data
const testimonials = [
	{
		text: "Rangga's creativity and attention to detail brought our brand to life. Highly recommended!",
		author: "Sarah, Coffee Shop Owner"
	},
	{
		text: "The 3D visuals exceeded our expectations and helped us launch with confidence.",
		author: "Dimas, Tech Startup CEO"
	},
	{
		text: "Professional, fast, and always delivers stunning results.",
		author: "Lina, Event Organizer"
	}
];

// Smooth scroll for nav links
document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.navbar a').forEach(link => {
		link.addEventListener('click', function(e) {
			const href = this.getAttribute('href');
			if (href.startsWith('#')) {
				e.preventDefault();
				document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
			}
		});
	});
});

function showMessage() {
	alert("Thanks For Visiting My Portofolio");
}


function renderPortfolio() {
	const container = document.getElementById('portfolio-list');
	container.innerHTML = '';
	portfolioData.forEach(item => {
		const div = document.createElement('div');
		div.className = 'portfolio-item';
		div.innerHTML = `
			<h3>${item.title}</h3>
			<p>${item.description}</p>
			<a href="${item.link}" target="_blank">View Project</a>
		`;
		container.appendChild(div);
	});
}

function renderTestimonials() {
	const container = document.getElementById('testimonial-cards');
	if (!container) return;
	container.innerHTML = '';
	testimonials.forEach(t => {
		const card = document.createElement('div');
		card.className = 'testimonial-card';
		card.innerHTML = `
			<p>"${t.text}"</p>
			<div class="author">- ${t.author}</div>
		`;
		container.appendChild(card);
	});
}

// Contact form handler
document.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			form.reset();
			document.getElementById('contact-success').style.display = 'block';
			setTimeout(() => {
				document.getElementById('contact-success').style.display = 'none';
			}, 3500);
		});
	}
});

// Animate hero on load
window.addEventListener('DOMContentLoaded', () => {
	const hero = document.querySelector('.hero');
	if (hero) {
		hero.style.opacity = 0;
		hero.style.transform = 'translateY(40px)';
		setTimeout(() => {
			hero.style.transition = 'all 0.8s cubic-bezier(.77,0,.18,1)';
			hero.style.opacity = 1;
			hero.style.transform = 'translateY(0)';
		}, 200);
	}
	renderPortfolio();
	renderTestimonials();
});

