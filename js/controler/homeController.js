import homeView from '../view/homeView.js';
import homeService from '../service/homeService.js';

export async function init() {
    try {
        const quotes = await homeService.getQuotes();
        console.log(quotes);
        homeView.render(quotes);
  
    } catch (error) {
        console.error(error);
    }

}
