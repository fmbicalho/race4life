import aboutView from '../view/aboutView.js';

export async function init() {
    try {
        aboutView.render();
  
    } catch (error) {
        console.error(error);
    }
}

export default { init };