function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements

    const header = document.createElement('div');
    header.className = 'form-header';

    const h1 = document.createElement('h1');
    h1.textContent = 'Help a Friend';
    h1.className = 'text-center';
    h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
    container.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Help a friend in need.';
    p.className = 'text-center';
    container.appendChild(p);

    const form = document.createElement('form');
    form.id = 'friend-form';
    form.className = 'styled-form';

    const fields = [
        {
            label: 'Friend name:',
            type: 'text',
            id: 'friendName',
            name: 'friendName',
            required: true
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
            type: 'number',
            id: 'phone',
            name: 'phone',
            required: true,
            minlength: 9,
            maxlength: 9
        },
        {
            label: 'Message:',
            type: 'textarea',
            id: 'message',
            name: 'message',
            rows: 5,
            cols: 30,
            required: true
        }
    ];

    fields.forEach(field => {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'field-container';

        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        label.className = 'form-label';

        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = field.rows;
            input.cols = field.cols;
        } else {
            input = document.createElement('input');
            input.type = field.type;
        }
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
    button.type = 'button';
    button.className = 'form-button';
    button.textContent = 'Send';

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'myModal';
    modal.innerHTML = `
<div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <img class="modal-title" src="../../pics/logo.png" style="width:120px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Thank you for your contact!</p>
        <p>We'll contact your friend as soon as possible!</p>
      </div>
    </div>
  </div>
`;
    document.body.appendChild(modal);

    button.addEventListener('click', function () {
        // Capturando os valores dos inputs
        const friendName = document.querySelector('#friendName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#message').value;

        // Validação dos campos
        if (!friendName || !email || !phone || !message) {
            alert('All fields are required!');
            return;
        }
        // Validação do email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        // Acessando os valores após validação
        const formData = {
            friendName,
            email,
            phone,
            message
        };

        // Exibindo os dados no console para verificação
        console.log('Form Data:', formData);

        // Armazenando os dados no localStorage (opcional)
        localStorage.setItem('friendFormData', JSON.stringify(formData));

        // Exibindo o modal após validação
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');
    });

    const closeButton = modal.querySelector('.close');
    closeButton.addEventListener('click', function () {
        modal.classList.remove('show');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        window.location.href = '/';
    });

    form.appendChild(button);
    container.appendChild(form);
    document.body.appendChild(container);
}

export default { render };
