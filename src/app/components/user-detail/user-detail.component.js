import UserDetailController from './user-detail.controller';
import './user-detail.component.scss';

export const UserDetailComponent = {
  template: require('./user-detail.component.html'),    
  controller: UserDetailController,
  bindings: {
    chosenUser: '<'
  }
};
