export default class GenderChartController {  
   
    constructor() {    
        "ngInject";
        this.colors = ["rgb(82,130,199)","rgb(220,104,80)"];
        this.labels = ['Male', 'Female'];
        this.data = [this.usersGender.male, this.usersGender.female];
    }
}
