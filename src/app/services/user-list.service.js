export class UserListService {
  constructor($http) {
    'ngInject;'
    this.$http = $http;
  }
  
  getUsers() {
    return this.$http.get('https://randomuser.me/api/?results=10').success(res => res);
  }
}