// Javascript that is inline. Should be used for anything that needs to be immediate
import jquery from 'jquery';
window.$ = jquery;

import share from './modules/share.js';
import confetti from './modules/confetti.js';

share.init();
confetti.init();
