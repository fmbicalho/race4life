import joinService from '../service/joinService.js';
import joinView from '../view/joinView.js';

export async function init() {
    try {
        joinView.render(joinService.getVolunteer);
    } catch (error) {
        console.error(error);
    }
}

export default { init };
