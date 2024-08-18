function render(quote) {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements

    const welcomeSection = document.createElement('div');
    welcomeSection.className = 'welcome-section';
    welcomeSection.style = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    `;
    const welcomeText = document.createElement('h3');
    welcomeText.innerHTML = `<h3>Welcome to<img src="./pics/logo I.png" style="max-width: 156px; margin-bottom: 3px;"></h3>`;
    welcomeText.style = `
        color: #04247B;
        text-align: center;
        font-size: 40px;
        margin-top: 30px;
        margin-bottom: 10px;
    `;
    welcomeSection.appendChild(welcomeText);

    const tagline = document.createElement('p');
    tagline.innerText = 'Work is secret, but it´s important!';
    tagline.style = `
        text-align: center;
        font-size: 1.5rem;
        margin-bottom: 40px;
        font-style: italic;
        font-size: 15px;
    `;
    welcomeSection.appendChild(tagline);

    const positiveMsg = document.createElement('div');
    positiveMsg.className = 'msg-section';
    positiveMsg.innerText = quote.text;
    positiveMsg.style = `
        font-size: 1.2rem;
        padding: 20px;
        background-color: rgba(56, 182, 255, 0.1);
        border-left: 4px solid #38B6FF;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        max-width: 60%;
        margin: 20px auto;
        font-style: italic;
        position: relative;
        color: #333;
        text-align: center;
        box-sizing: border-box;
        line-height: 1.5;
    `;

    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    videoContainer.style = `
        text-align: center;
        padding: 50px;
        margin: auto;
        display: block;
    `;
    videoContainer.innerHTML = ` 
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/0Wp6X5B3OCs?autoplay=1&mute=1" 
        title="Race 4 Life Presentation" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe> 
    `;

    const testimonialsCarousel = document.createElement('div');
    testimonialsCarousel.id = 'testimonialCarousel';
    testimonialsCarousel.className = 'carousel slide';
    testimonialsCarousel.setAttribute('data-bs-ride', 'carousel');
    
    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';
    const testimonialsData = [
        {
            name: 'Amanda Beard',
            sport: 'Swimming',
            text: 'I would do interviews and have this happy face and talk about how everything is great and I’m having so much fun, but...',
            photo: '../pics/testimonials/amanda.jpeg'
        },
        {
            name: 'Michael Phelps',
            sport: 'Swimming',
            text: 'Throughout my career, I had a team of people around me that were paying attention to my physical health...',
            photo: '../pics/testimonials/michael.jpeg'
        },
        {
            name: 'Serena Williams',
            sport: 'Tennis',
            text: 'Mental fitness for me is just really learning to shut down. I did this years ago before mental health was a topic among everyone’s mind...',
            photo: '../pics/testimonials/serena.png'
        },
        {
            name: 'Simone Biles',
            sport: 'Artistic Gymnastic',
            text: 'So, to kind of be put at the forefront, it’s like… I’m still going through my own thing...',
            photo: '../pics/testimonials/simone.avif'
        },
        {
            name: 'Missy Franklin',
            sport: 'Swimming',
            text: 'I feel so fortunate because I had so many incredible athletes pave the way for me. I had...',
            photo: '../pics/testimonials/missy.jpeg'
        }
    ];

    testimonialsData.forEach((_, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', '#testimonialCarousel');
        button.setAttribute('data-bs-slide-to', index);
        button.setAttribute('aria-label', `Slide ${index + 1}`);
        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }
        indicators.appendChild(button);
    });

    const carouselInner = document.createElement('div');
    carouselInner.className = 'carousel-inner';

    testimonialsData.forEach((testimonial, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        if (index === 0) {
            item.classList.add('active');
        }
        const testimonialDiv = document.createElement('div');
        testimonialDiv.className = 'testimonial';
        
        const img = document.createElement('img');
        img.src = testimonial.photo;
        img.alt = '';
        img.className = 'testimonial__photo';
        const name = document.createElement('div');
        name.className = 'testimonial__name';
        name.textContent = testimonial.name;
        const sport = document.createElement('div');
        sport.className = 'testimonial__sport';
        sport.textContent = testimonial.sport;
        const text = document.createElement('p');
        text.className = 'testimonial__text';
        text.textContent = testimonial.text;
        testimonialDiv.appendChild(img);
        testimonialDiv.appendChild(name);
        testimonialDiv.appendChild(sport);
        testimonialDiv.appendChild(text);
        item.appendChild(testimonialDiv);

        item.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/testimonial';
        });
        carouselInner.appendChild(item);
    });

    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-control-prev';
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#testimonialCarousel');
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    `;
    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-control-next';
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#testimonialCarousel');
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    `;

    testimonialsCarousel.appendChild(indicators);
    testimonialsCarousel.appendChild(carouselInner);
    testimonialsCarousel.appendChild(prevButton);
    testimonialsCarousel.appendChild(nextButton);

    document.querySelector('.homeview').appendChild(testimonialsCarousel);

    const footer = document.createElement('footer');
    footer.className = 'footer';

    const copyrightParagraph = document.createElement('p');
    copyrightParagraph.className = 'footer__copyright';
    copyrightParagraph.innerHTML = '&copy; Copyright by ';
    const footerLink = document.createElement('a');
    footerLink.className = 'footer__link github-link';
    footerLink.target = '_blank';
    footerLink.href = 'https://github.com/fmbicalho/race4life';
    footerLink.textContent = 'Lumon';
    copyrightParagraph.appendChild(footerLink);
    const additionalText = document.createTextNode('. Find your strength. Find your hope.');
    copyrightParagraph.appendChild(additionalText);
    footer.appendChild(copyrightParagraph);

    const footerLinksDiv = document.createElement('div');
    footerLinksDiv.className = 'footer__links';
    const contactParagraph = document.createElement('p');
    contactParagraph.textContent = 'Contact us: contact@race4life.com';
    footerLinksDiv.appendChild(contactParagraph);
    footer.appendChild(footerLinksDiv);

    const aboutContentDiv = document.createElement('div');
    aboutContentDiv.id = 'about-content';
    aboutContentDiv.style.display = 'none';
    aboutContentDiv.style.marginTop = '20px';
    const aboutTitle = document.createElement('h2');
    aboutTitle.id = 'about-title';
    const aboutDescription = document.createElement('p');
    aboutDescription.id = 'about-description';
    aboutContentDiv.appendChild(aboutTitle);
    aboutContentDiv.appendChild(aboutDescription);
    footer.appendChild(aboutContentDiv);

    const logoContainerDiv = document.createElement('div');
    const logoImg = document.createElement('img');
    logoImg.src = '../pics/olympic.png';
    logoImg.className = 'bottom-logo';
    logoContainerDiv.appendChild(logoImg);
    footer.appendChild(logoContainerDiv);

    container.appendChild(welcomeSection);
    container.appendChild(positiveMsg);
    container.appendChild(videoContainer);
    container.appendChild(testimonialsCarousel);
    container.appendChild(footer);
}

export default { render };
