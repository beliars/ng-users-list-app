import { UserListService } from '../../services/user-list.service';

export default class UserListController {  
   
    constructor(UserListService, $state) {    
        "ngInject";
        this.$state = $state;
        this.heading = 'NgUsersListApp';
        this.userListService = UserListService;
        this.choose = false;
        this.chosenUser = false;
        this.showGender = false;
        this.usersGender = {
            male: 0,
            female: 0
        };
    }

    $onInit() {
        this.userListService.getUsers().then(user => {
            console.log(user.data.results);
            this.users = user.data.results;
        });
    }

    chooseUser(user) {
        
        if (!this.choose && !this.chosenUser) {
            this.choose = true;
            this.chosenUser = user;
        }

        else if (this.choose && this.chosenUser !== user) {
            this.choose = true;
            this.chosenUser = user;
        }

        else {
            this.choose = false;
            this.chosenUser = false;
        }
    }

    showChart() {
        this.showGender = !this.showGender;
        let count = 0;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].gender.indexOf('male') == 0) {
                count++;
            }
        }
        this.usersGender.male = (count / this.users.length) * 100;
        this.usersGender.female = 100 - this.usersGender.male;
    }

    closeModal() {
        this.showGender = false;
    }

    asd() {
        this.$state.go('detail', {id: 1});
    }
}
