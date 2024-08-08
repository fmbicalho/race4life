function render() {
    const container = document.querySelector('#container');
    container.innerHTML = ''; // Clear previous elements.

    const header = document.createElement('div');
    header.className = 'form-header';

    const h1 = document.createElement('h1');
    h1.textContent = 'Mental Health Self-Assessment Form';
    h1.style = `color: #A4283C; margin-top: 30px; font-size: 40px`;
    header.appendChild(h1);

    const p = document.createElement('p');
    p.textContent =
        'This form is intended to help you reflect on your current mental health status. Please note that this is not a diagnostic tool and should not replace professional advice.';
    header.appendChild(p);
    container.appendChild(header);

    const form = document.createElement('form');
    form.id = 'questioner-form';
    form.className = 'styled-form';

    const surveyHeader = document.createElement('h2');
    surveyHeader.textContent = 'Survey:';
    surveyHeader.className = 'survey-header';
    form.appendChild(surveyHeader);

    const questions = [
        {
            question: 'How have you been feeling overall in the past two weeks?',
            options: [
                { value: 1, label: 'Very Good' },
                { value: 2, label: 'Good' },
                { value: 3, label: 'Neutral' },
                { value: 4, label: 'Poor' },
                { value: 5, label: 'Very Poor' }
            ]
        },
        {
            question: 'How often have you felt anxious or worried in the past two weeks?',
            options: [
                { value: 1, label: 'Not at all' },
                { value: 2, label: 'A few days' },
                { value: 3, label: 'More than half days' },
                { value: 4, label: 'Nearly every day' }
            ]
        },
        {
            question: 'How often have you felt down, depressed, or hopeless in the past two weeks?',
            options: [
                { value: 1, label: 'Not at all' },
                { value: 2, label: 'A few days' },
                { value: 3, label: 'More than half days' },
                { value: 4, label: 'Nearly every day' }
            ]
        },
        {
            question: 'Have you experienced any of the following symptoms recently?',
            options: [
                { value: 1, label: 'Trouble sleeping or sleeping too much' },
                { value: 2, label: 'Changes in appetite or weight' },
                { value: 3, label: 'Loss of interest or pleasure in activities' },
                { value: 4, label: 'Difficulty concentrating or making decisions' },
                { value: 5, label: 'Feeling tired or having little energy' },
                {
                    value: 6,
                    label: 'Feeling bad about yourself or that you are a failure'
                }
            ]
        },
        {
            question:
                'Have you had thoughts that you would be better off dead or of hurting yourself in any way?',
            options: [
                { value: 1, label: 'Not at all' },
                { value: 2, label: 'A few days' },
                { value: 3, label: 'More than half days' },
                { value: 4, label: 'Nearly every day' }
            ]
        },
        {
            question: 'Do you have someone to talk to about your feelings and concerns?',
            options: [
                { value: 1, label: 'Yes' },
                { value: 2, label: 'No' }
            ]
        },
        {
            question: 'Would you like to be contacted by a mental health professional?',
            options: [
                { value: 1, label: 'Yes' },
                { value: 2, label: 'No' }
            ]
        }
    ];

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const h3 = document.createElement('h3');
        h3.textContent = question.question;
        h3.className = 'question-title';
        questionDiv.appendChild(h3);

        question.options.forEach(option => {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('options');

            const input = document.createElement('input');
            input.type = 'radio';
            input.id = `q${index + 1}-opt${option.value}`;
            input.name = `q${index + 1}`;
            input.value = option.value;
            input.className = 'option-input';

            const label = document.createElement('label');
            label.htmlFor = input.id;
            label.textContent = option.label;
            label.className = 'option-label';

            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            questionDiv.appendChild(optionDiv);
        });

        form.appendChild(questionDiv);
    });

    const button = document.createElement('button');
    button.type = 'reset';
    button.classList.add('form-button');
    button.textContent = 'Submit';

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'myModal';
    document.body.appendChild(modal);

    button.addEventListener('click', function () {
        // Capturando os valores dos inputs
        const formData = {};
        let allAnswered = true;

        questions.forEach((question, index) => {
            const selectedOption = document.querySelector(`input[name="q${index + 1}"]:checked`);
            if (selectedOption) {
                formData[`question${index + 1}`] = selectedOption.value;
            } else {
                allAnswered = false;
            }
        });

        // Validação dos campos
        if (!allAnswered) {
            alert('Please answer all the questions before submitting.');
            return;
        }

        // Exibindo os dados no console para verificação
        console.log('Form Data:', formData);

        // Determinar a mensagem do modal com base na resposta da última pergunta
        const contactResponse = formData['question7'];
        let modalMessage = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <img class="modal-title" src="../../pics/logo.png" style="width:120px;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p>Thank you for completing the self-assessment.</p>
    `;

    // Analisar respostas críticas
    if (formData['question5'] === '4') {
        modalMessage += `<p>Your responses indicate that you might be experiencing severe distress. We strongly recommend reaching out to a mental health professional immediately.</p>`;
    }

    if (formData['question7'] === '1') {
        modalMessage += `<p>We appreciate your willingness to be contacted by a mental health professional. We will reach out to you soon.</p>`;
    } else {
        modalMessage += `<p>Please remember this is not a diagnostic tool. If you have any concerns, consider reaching out to a mental health professional.</p>`;
    }

    modalMessage += `
                </div>
            </div>
        </div>
    `;

        // Atualizar o conteúdo do modal
        modal.innerHTML = modalMessage;

        // Exibir o modal após validação
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.classList.add('modal-open');

        // Armazenando os dados no localStorage (opcional)
        localStorage.setItem('mentalHealthAssessmentData', JSON.stringify(formData));
    });

    // Evento para fechar o modal
    modal.addEventListener('click', function (event) {
        if (event.target.classList.contains('close') || event.target.classList.contains('modal')) {
            modal.classList.remove('show');
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });

    form.appendChild(button);
    container.appendChild(form);
    document.body.appendChild(container);
}

export default { render };