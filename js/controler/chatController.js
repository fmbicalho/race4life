import chatView from '../view/chatView.js';

export async function init() {
    try {
        chatView.render();

    } catch (error) {
        console.error(error);
    }
}

export default { init };