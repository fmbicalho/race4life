import checkupView from '../view/checkupView.js';

export async function init() {
    try {
        checkupView.render();
    } catch (error) {
        console.error(error);
    }
}

export default { init };
