import homeView from '../view/homeView.js';
import homeService from '../service/homeService.js';

export async function init() {
    try {
        const quote = await homeService.getQuote();
        homeView.render(quote);
    } catch (error) {
        console.error(error);
    }
}
