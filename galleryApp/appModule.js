var app = angular.module("galleryApp", []);

app.controller("galleryCtrl", function($scope) {
	$scope.firstName = "Kat";
	$scope.lastName = "Timm";
});


app.directive("galleryDirective", function() {
	return {
		restrict: "E",
		templateUrl: "app/gallery.html"
	};
});

app.directive("sidebarDirective", function() {
	return {
		restrict: "E",
		templateUrl: "app/sidebar.html"
	};
});
