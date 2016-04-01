var app = angular.module("galleryApp", []);

app.controller("galleryCtrl", function($scope) {
	$scope.firstName = "Kat";
	$scope.lastName = "Timm";
	$scope.images = ["assets/images/a.jpg", "assets/images/b.jpg", "assets/images/c.jpg", "assets/images/d.jpg"];
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

app.directive("headerDirective", function() {
	return {
		restrict: "E",
		templateUrl: "app/header.html"
	};
});

app.directive("topnavDirective", function() {
	return {
		restrict: "E",
		templateUrl: "app/topnav.html"
	};
});
