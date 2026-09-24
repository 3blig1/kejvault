const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton?.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('open');
	menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('open');
		menuButton?.setAttribute('aria-expanded', 'false');
	});
});

const timelineItems = [...document.querySelectorAll('.timeline-item')];
const nextStep = document.querySelector('#next-step');
const restartDemo = document.querySelector('#restart-demo');
let currentStep = 2;

function renderDemo(step) {
	currentStep = Math.max(0, Math.min(step, timelineItems.length - 1));
	timelineItems.forEach((item, index) => {
		item.classList.toggle('done', index < currentStep);
		item.classList.toggle('active', index === currentStep);
		item.classList.toggle('pending', index > currentStep);
		item.querySelector('span').textContent = index < currentStep ? '✓' : String(index + 1);
	});
}

nextStep?.addEventListener('click', () => renderDemo(currentStep + 1));
restartDemo?.addEventListener('click', () => renderDemo(2));
timelineItems.forEach((item) => item.addEventListener('click', () => renderDemo(Number(item.dataset.step))));
