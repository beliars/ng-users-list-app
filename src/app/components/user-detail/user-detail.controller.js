import { UserListService } from '../../services/user-list.service';

export default class UserDetailController{  
   
    constructor(UserListService) {    
        "ngInject";
        this.userListService = UserListService;
    }

    $onInit() {
        // this.userListService.getUser().then(user => {
        //     console.log(user.data.results);
        //     this.users = user.data.results;
        // });
    }
}
