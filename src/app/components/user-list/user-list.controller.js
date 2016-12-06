import { UserListService } from '../../services/user-list.service';

export default class UserListController{  
   
    constructor(UserListService, $state) {    
        "ngInject";
        this.$state = $state;
        this.userListService = UserListService;
    }

    asd() {
        this.$state.go('detail', {id: 1});
    }

    $onInit() {
        this.test = 'Ng-App';
        this.userListService.getUser().then(user => {
            console.log(user);
            this.users = [];
            this.user = {
                'avatar': user.data.results[0].picture.large,
                'firstName': user.data.results[0].name.first,
                'lastName': user.data.results[0].name.last,
                'username': user.data.results[0].login.username,
                'phone': user.data.results[0].phone,
                'location': user.data.results[0].location.city
            };
        });
    }
}
