export class ChartModalDirective {

    constructor() {
        this.restrict = 'A';       
    }
    
// Directive link function
    link(scope, elem, attr) {
		console.log('Directive link function');
    }
}
