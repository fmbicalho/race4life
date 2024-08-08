import friendFormView from '../view/friendFormView.js';

export async function init() {
    try {
        friendFormView.render();
    } catch (error) {
        console.error(error);
    }
}

export default { init };
