import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import * as moment from 'moment';
import 'bootstrap/dist/js/bootstrap.min';
import '../stylesheets/users/custom';
import 'propellerkit/dist/js/propeller.min.js';
import 'owl.carousel/dist/owl.carousel.min';
require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')
require('packs/users/layouts/header')
require('packs/users/easing')
require('packs/users/move-top')
require('packs/users/scroll')
require('packs/users/scroll-effect')
