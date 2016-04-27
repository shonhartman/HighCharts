
import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let profile = angular.module('tracker.profile', []);

profile.config(config);
profile.controller('ProfileController', controller);
profile.service('ProfileService', service);

export default profile;
