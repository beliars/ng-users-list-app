import angular from 'angular';

import { UserListComponent } from './app/components/user-list/user-list.component';
import { UserListService } from './app/services/user-list.service';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('users-app', ['ui.router'])
  .config(routesConfig)
  .component('userList', UserListComponent)
  .service('UserListService', UserListService);
