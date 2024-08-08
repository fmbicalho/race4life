import appointementView from '../view/appointementFormView.js';

export async function init() {
    try {
        appointementView.render();
    } catch (error) {
        console.error(error);
    }
}

export default { init };
