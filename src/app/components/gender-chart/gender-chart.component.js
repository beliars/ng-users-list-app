import GenderChartController from './gender-chart.controller';
import './gender-chart.component.scss';

export const GenderChartComponent = {
  template: require('./gender-chart.component.html'),    
  controller: GenderChartController,
  bindings: {
    usersGender: '<',
    onClose: '&'
  }
};