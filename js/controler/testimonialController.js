import testimonialService from '../service/testimonialService.js';
import testimonialView from '../view/testimonialView.js';

export async function init() {
    try {
      testimonialView.render( await testimonialService.getTestemonials());

    } catch (error) {
        console.error(error);
    }
}

export default { init };