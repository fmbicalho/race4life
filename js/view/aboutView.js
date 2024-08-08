function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements
    
    // Main Section Wrapper
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'section-wrapper';
    sectionWrapper.style = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding: 20px;
    `;

    // About Section
    const aboutSection = document.createElement('div');
    aboutSection.className = 'about-section';
    aboutSection.style = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        gap: 20px;
        padding: 20px;
        position: relative;
    `;
    const aboutText = document.createElement('div');
    aboutText.style = `
        flex: 1;
        padding: 20px;
    `;
    aboutText.innerHTML = `
        <h1 style="color: #A4283C; margin-top: 30px; font-size: 40px">About Us</h1>
        <h4> We understand that the journey to Olympic greatness is paved with intense training,</h4>
        <p> relentless dedication, and extraordinary pressure. \n Behind the medals, records, and cheers, lies a realm often unseen: the mental health challenges faced by elite athletes. \n Our mission is to illuminate this crucial aspect and provide unwavering support to those who strive for excellence on the world stage.</p>
        <a style="padding: 10px 20px; border: 1px solid #A4283C; background: transparent; cursor: pointer;" href="/care-and-support">View our Services</a>
    `;
    const aboutImg = document.createElement('img');
    aboutImg.src = "../pics/aboutus.jpg";
    aboutImg.alt = "About Us Image";
    aboutImg.style = `
        width: 50%;
        height: auto;
        border-radius: 10px;
        position: relative;
    `;
    aboutSection.appendChild(aboutText);
    aboutSection.appendChild(aboutImg);

    // Testimonial Section (overlapping image box)
    const testimonialSection = document.createElement('div');
    testimonialSection.className = 'testimonial-section';
    testimonialSection.style = `
        position: relative;
        width: 100%;
        max-width: 1200px; /* Alinha com a largura máxima do aboutSection */
        margin-top: -80px;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px; /* Mantém algum espaço na borda direita */
    `;
    const testimonialBox = document.createElement('div');
    testimonialBox.style = `
        background: #A4283C;
        color: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 400px;
        position: absolute;
        bottom: -70px;
        right: 10%;
        transform: translateX(50%);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    testimonialBox.innerHTML = `
        <p>"I was at my lowest point when I found this service. Sending that open letter felt like a lifeline. It was incredibly difficult to reach out, but the response I received was immediate and supportive. This tool helped me take the first step towards getting the help I desperately needed."</p>
        <div style="display: flex; align-items: center; margin-top: 10px;">
            <span style="color: #FFD700;">★★★★★</span>
        </div>
    `;
    testimonialSection.appendChild(testimonialBox);
    
    // Vision Section
    const visionSection = document.createElement('div');
    visionSection.className = 'vision-section';
    visionSection.style = `
        width: 100%;
        max-width: 1200px;
        text-align: center;
        margin-top: 50px;
    `;
    const ourVisionTitle = document.createElement('h3');
    ourVisionTitle.innerText = 'Our Vision';
    ourVisionTitle.style = `
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #A4283C;
    `;
    const ourVisionText = document.createElement('p');
    ourVisionText.innerText = 'We envision a world where every Olympic athlete has access to the mental health resources they need, fostering an environment where emotional well-being is as prioritized as physical fitness. We aim to break the stigma surrounding mental health in sports, encouraging open conversations and understanding.';
    ourVisionText.style = `
        font-size: 1rem;
        margin: 0 20px;
    `;
    visionSection.appendChild(ourVisionTitle);
    visionSection.appendChild(ourVisionText);
    
    // Mission Section
    const missionSection = document.createElement('div');
    missionSection.className = 'mission-section';
    missionSection.style = `
        width: 100%;
        max-width: 1200px;
        text-align: center;
        margin-top: 50px;
    `;
    const ourMissionTitle = document.createElement('h3');
    ourMissionTitle.innerText = 'Our Mission';
    ourMissionTitle.style = `
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #A4283C;
    `;
    const ourMissionText = document.createElement('p');
    ourMissionText.innerText = 'Raising Awareness: We shed light on the mental health issues prevalent in the Olympic community through educational content, personal stories, and expert insights. \n Providing Support: Our platform offers a range of resources including counseling services, peer support networks, and self-help tools tailored specifically for athletes. \n Advocating for Change: We work alongside sports organizations to implement policies and programs that prioritize mental health, ensuring athletes receive comprehensive care.';
    ourMissionText.style = `
        font-size: 1rem;
        margin: 0 20px;
    `;
    missionSection.appendChild(ourMissionTitle);
    missionSection.appendChild(ourMissionText);
    
    // Services Section
    const serviceSection = document.createElement('div');
    serviceSection.className = 'service-section';
    serviceSection.style = `
        width: 100%;
        max-width: 1200px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 50px;
    `;
    const ourServicesTitle = document.createElement('h3');
    ourServicesTitle.innerText = 'Our Services';
    ourServicesTitle.style = `
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        color: #A4283C;
    `;
    const ourServicesText = document.createElement('p');
    ourServicesText.innerText = 'Test for Help: This online tool helps identify potential signs of depression and suicide risk. It provides a self-assessment to offer insights into your emotional state. Please note, this tool is not a diagnosis and should not replace professional help. \n Schedule an appointment: Book therapy appointments easily. Find a psychologist and schedule sessions that fit your schedule. \n Talk with a professional: Connect instantly with a mental health professional. Our live chat platform offers immediate support for individuals experiencing urgent emotional distress. \n Help a Friend: Send a quick, confidential message asking for help.';
    ourServicesText.style = `
        font-size: 1rem;
        margin: 0 20px;
    `;
    serviceSection.appendChild(ourServicesTitle);
    serviceSection.appendChild(ourServicesText);
    
    // Append all sections to the container
    sectionWrapper.appendChild(aboutSection);
    sectionWrapper.appendChild(testimonialSection);
    sectionWrapper.appendChild(visionSection);
    sectionWrapper.appendChild(missionSection);
    sectionWrapper.appendChild(serviceSection);
    container.appendChild(sectionWrapper);
}
export default { render };