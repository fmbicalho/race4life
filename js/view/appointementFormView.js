function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements

    const h1 = document.createElement('h1');
    h1.textContent = 'Appointment';
    h1.className = 'text-center';
    h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
    container.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Make an appointment with a certified specialist.';
    p.className = 'text-center';
    container.appendChild(p);

    const form = document.createElement('form');
    form.id = 'appointment-form';
    form.className = 'styled-form';

    const fields = [
        {
            label: 'Name',
            type: 'text',
            id: 'userName',
            name: 'userName',
            required: true,
            minlength: 1
        },
        {
            label: 'Email',
            type: 'email',
            id: 'email',
            name: 'email',
            required: true
        },
        {
            label: 'Phone Number',
            type: 'tel',
            id: 'phone',
            name: 'phone',
            required: true,
            minlength: 9,
            maxlength: 9
        },
        {
            label: 'Date',
            type: 'date',
            id: 'date-input',
            name: 'date',
            required: true
        },
        {
            label: 'Time',
            type: 'time',
            id: 'time-input',
            name: 'time',
            required: true
        }
    ];

    fields.forEach(field => {
        const label = document.createElement('label');
        label.className = 'appointment-label';
        label.textContent = field.label;
        label.setAttribute('for', field.id);

        const input = document.createElement('input');
        input.type = field.type;
        input.id = field.id;
        input.name = field.name;
        input.required = field.required;
        input.minlength = field.minlength;
        input.maxlength = field.maxlength;
        input.className = 'appointment-input';

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br'));
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
        <p>We'll confirm your appointment as soon as possible!</p>
      </div>
    </div>
  </div>
`;
    document.body.appendChild(modal);

    button.addEventListener('click', function () {
        // Capturando os valores dos inputs
        const userName = document.querySelector('#userName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const date = document.querySelector('#date-input').value;
        const time = document.querySelector('#time-input').value;

        // Validação dos campos
        if (!userName || !email || !phone || !date || !time) {
            alert('All fields are required!');
            return;
        }

        // Verificação se a data e hora são no futuro
        const selectedDate = new Date(`${date}T${time}`);
        const now = new Date();

        if (selectedDate <= now) {
            alert('Please select a future time for the appointment.');
            return;
        }

            // Verificação do horário (por exemplo, entre 09:00 e 17:00)
            const [hours, minutes] = time.split(':').map(Number);
            if (hours < 9 || hours > 17 || (hours === 17 && minutes > 0)) {
                alert('Please select a time between 09:00 and 17:00.');
                return;
            }

        // Acessando os valores após validação
        const formData = {
            userName,
            email,
            phone,
            date,
            time
        };

        // Exibindo os dados no console para verificação
        console.log('Form Data:', formData);

        // Armazenando os dados no localStorage (opcional)
        localStorage.setItem('appointmentFormData', JSON.stringify(formData));

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
