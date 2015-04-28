var wooqerDirective=angular.module('wooqerApp.directives',[]);

		wooqerDirective.directive(
				'paginationsummary',
				function() {
					return {
						restrict : 'EA',
						transclude : true,
						scope : {
							page : '=',
							totalItems : '=',
							itemsPerPage : '=',
						},
						template : 'Displaying <strong>{{one()}}-{{two()}}</strong> of <strong>{{three()}}</strong> records',
						link : function($scope, element, attrs, $compile) {
							$scope.one = function() {
								return (parseInt($scope.page) - 1) * parseInt($scope.itemsPerPage)
										+ 1;
							};

							$scope.two = function() {
								var tItems=parseInt($scope.totalItems);
								var itemPPage=parseInt($scope.itemsPerPage);
								var lastOnPage = (parseInt($scope.page) - 1) * parseInt(itemPPage)+itemPPage;
								if (lastOnPage > tItems) {
									lastOnPage = tItems;
								}
								return lastOnPage;
							};
							$scope.three = function() {
								return $scope.totalItems;
							};
						}
					};
				});

		wooqerDirective.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if (event.which === 13) {
                scope.$apply(function() {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
});