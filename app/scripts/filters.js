var wooqerFilter=angular.module('wooqerApp.filters',[]);
var wooqerService=angular.module('wooqerApp.filters');

wooqerService.filter('startFrom', function() {
    return function(input, start) {
        if (input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    };
});
