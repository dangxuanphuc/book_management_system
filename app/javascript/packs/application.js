import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.min';
import '../stylesheets/custom';
import 'propellerkit/dist/js/propeller.min.js';

require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')
require('packs/users/layouts/header')
