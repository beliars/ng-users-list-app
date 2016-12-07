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
        this.test = 'NgUsersListApp';
        this.userListService.getUser().then(user => {
            console.log(user);
            console.log(user.data.results.length);
            this.users = [];
            for (let i = 0; i < user.data.results.length; i++) {
                let item = {
                'avatarUrl': user.data.results[i].picture.medium,
                'firstName': user.data.results[i].name.first,
                'lastName': user.data.results[i].name.last,
                'username': user.data.results[i].login.username,
                'phone': user.data.results[i].phone,
                'location': user.data.results[i].location.city
                };
                this.users.push(item);
            }
        });
    }
}
