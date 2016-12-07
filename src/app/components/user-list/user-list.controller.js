import { UserListService } from '../../services/user-list.service';

export default class UserListController {  
   
    constructor(UserListService, $state) {    
        "ngInject";
        this.$state = $state;
        this.userListService = UserListService;
    }

    asd() {
        this.$state.go('detail', {id: 1});
    }

    chooseUser(user) {
        console.log(user);
        this.chosenUser = user;
    }

    $onInit() {
        this.test = 'NgUsersListApp';
        this.userListService.getUser().then(user => {
            console.log(user.data.results);
            this.users = user.data.results;
        });
    }
}
