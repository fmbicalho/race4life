import careView from '../view/careView.js';
import careService from '../service/careService.js';

export async function init() {
    try {
        careView.render( await careService.getServices());

    } catch (error) {
        console.error(error);
    }
}

export default { init };