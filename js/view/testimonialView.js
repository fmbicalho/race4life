const TestimonialRenderer = (() => {

    // Function to create a single testimonial card
    function createCard({ title, text, picture, sport }) {
        const card = document.createElement('div');
        card.className = `card text-white mb-3`;
        card.style = `
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 320px;
            margin-top: 2%;
            gap: 10px;
            justify-content: center;
            background-color: #04247B;
        `;
        card.innerHTML = `
            <img src="${picture}" class="img-fluid rounded-top" id="testimonial-image" alt="${title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h3 class="card-title">${sport}</h3>
                <p class="card-text">${text}</p>
            </div>
        `;
        addCardInteractivity(card);
        return card;
    }

    // Function to add interactivity to the card
    function addCardInteractivity(card) {
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.02)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.6)';
        });
        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
        });
    }

    // Main render function
    function render(testimonials) {
        const container = document.querySelector('#container');
        container.innerHTML = ''; // Clear previous elements
        const testimonialWrapper = document.createElement('div');
        testimonialWrapper.className = 'text-center';
        testimonialWrapper.style = `
            display: flex;
            flex-wrap: wrap;
            margin-top: 2%;
            gap: 55px;
            justify-content: center;
        `;

        const h1 = document.createElement('h1');
        h1.textContent = 'Athletes Testimonials';
        h1.className = 'text-center'
        h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
        container.appendChild(h1);

        testimonials.forEach(testimonial => {
            const card = createCard(testimonial);
            testimonialWrapper.appendChild(card);
        });
        container.appendChild(testimonialWrapper);
    }
    // Expose the render function
    return { render };
})();
export default TestimonialRenderer;














