import angular from 'angular';

import { UserListComponent } from './app/components/user-list/user-list.component';
import { UserDetailComponent } from './app/components/user-detail/user-detail.component';
import { GenderChartComponent } from './app/components/gender-chart/gender-chart.component';
import { UserListService } from './app/services/user-list.service';
import { ChartModalDirective } from './app/directives/chart-modal.directive';
import 'angular-ui-router';
import 'angular-chart.js';
import routesConfig from './routes';

import './index.scss';

angular
  .module('users-app', ['ui.router', 'chart.js'])
  .config(routesConfig)
  .component('userList', UserListComponent)
  .component('userDetail', UserDetailComponent)
  .component('genderChart', GenderChartComponent)
  .directive('chartModalDirective', () => new ChartModalDirective)
  .service('UserListService', UserListService);

