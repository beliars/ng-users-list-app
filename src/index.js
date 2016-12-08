import angular from 'angular';

import { UserListComponent } from './app/components/user-list/user-list.component';
import { UserDetailComponent } from './app/components/user-detail/user-detail.component';
import { UserListService } from './app/services/user-list.service';
import 'angular-ui-router';
import 'highcharts-ng';
import routesConfig from './routes';

import './index.scss';

angular
  .module('users-app', ['ui.router', 'highcharts-ng'])
  .config(routesConfig)
  .component('userList', UserListComponent)
  .component('userDetail', UserDetailComponent)
  .service('UserListService', UserListService);
