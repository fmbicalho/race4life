const services = [
    {
        title: 'Test for Help',
        picture: '/pics/care/test.png',
        text: 'This online tool helps identify potential signs of depression and suicide risk. It provides a self-assessment to offer insights into your emotional state. Please note, this tool is not a diagnosis and should not replace professional help.',
        route: '/checkup'
    },
    {
        title: 'Schedule an appointment',
        picture: '/pics/care/schedule.jpeg',
        text: 'Book therapy appointments easily. Find a psychologist and schedule sessions that fit your schedule.',
        route: '/appointement'
    },
    {
        title: 'Talk with a professional',
        picture: '/pics/care/chat.png',
        text: 'Connect instantly with a mental health professional. Our live chat platform offers immediate support for individuals experiencing urgent emotional distress.',
        route: '/chat'
    },
    {
        title: 'Help a Friend',
        picture: '/pics/care/note.jpeg',
        text: 'Send a quick, confidential message asking for help.',
        route: '/help-friend'
    }
];

async function getService(index) {
    return services[index];
}

async function getServices() {
    return services;
}

export default { getService, getServices };
