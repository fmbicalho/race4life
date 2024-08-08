function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements

    const header = document.createElement('div');
    header.className = 'form-header';

    const h1 = document.createElement('h1');
    h1.textContent = 'Be our Volunteer! Make the difference!';
    h1.className = 'text-center';
    h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
    container.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Offer your time and expertise to support our initiatives. \n Together, we can race towards a brighter, healthier future for all Olympic athletes.';
    p.className = 'text-center';
    header.appendChild(p);
    container.appendChild(header);

    const form = document.createElement('form');
    form.id = 'join-form';
    form.className = 'styled-form';

    const fields = [
        {
            label: 'Name:',
            type: 'text',
            id: 'userName',
            name: 'userName',
            required: true,
            minlength: 1
        },
        {
            label: 'Email:',
            type: 'email',
            id: 'email',
            name: 'email',
            required: true
        },
        {
            label: 'Phone Number:',
            type: 'tel',
            id: 'phone',
            name: 'phone',
            required: true,
            minlength: 9,
            maxlength: 11 // Assuming you want to allow up to 11 digits
        }
    ];

    fields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'field-container';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.className = 'form-label';
        label.textContent = field.label;

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;
        input.required = field.required;
        input.minlength = field.minlength;
        input.maxlength = field.maxlength;
        input.className = 'form-input';

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        form.appendChild(fieldContainer);
    });

    const button = document.createElement('button');
    button.type = 'button'; // Change to button to handle click event manually
    button.className = 'form-button';
    button.style = "margin-top: 24px";
    button.textContent = 'Send';

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'myModal';
    document.body.appendChild(modal);

    button.addEventListener('click', function () {
        // Capturar os valores dos inputs
        const userName = document.querySelector('#userName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;

        // Verificação de campos obrigatórios
        if (!userName || !email || !phone) {
            alert('Please fill out all the fields.');
            return;
        }

        // Verificação de email válido
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Verificação de telefone válido
        const phonePattern = /^\d{9,11}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number with 9 to 11 digits.');
            return;
        }

        // Exibindo os dados no console para verificação
        const formData = {
            userName,
            email,
            phone
        };
        console.log('Form Data:', formData);

        // Atualizar o conteúdo do modal
        const modalMessage = `
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <img class="modal-title" src="../../pics/logo.png" style="width:120px;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Thank you for volunteering!</p>
                    <p>We'll contact you as soon as possible!</p>
                </div>
                </div>
            </div>
        `;
        modal.innerHTML = modalMessage;

        // Adicionando o event listener ao botão de fechar após o conteúdo do modal ser atualizado
        const closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function () {
            modal.classList.remove('show');
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
            window.location.href = '/';
        });

        // Exibir o modal após validação
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Armazenando os dados no localStorage (opcional)
        localStorage.setItem('volunteerFormData', JSON.stringify(formData));

        const footer = document.createElement("footer");
        const footerHtml = ``
    });

    form.appendChild(button);
    container.appendChild(form);
    document.body.appendChild(container);
}

export default { render };
