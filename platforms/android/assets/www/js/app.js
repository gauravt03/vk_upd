// PrixLa Boutique app
angular.module('test_app', ['ui.router', 'ui.bootstrap', 'test_app.controllers', 'ng-virtual-keyboard'])

.run(function() {

	//-- Init
})

.config(['VKI_CONFIG', function(VKI_CONFIG) {
	VKI_CONFIG.position = {
		of: 'body',
		my: 'center top',
		at: 'center bottom'
	};
	VKI_CONFIG.tabNavigation = true;
	VKI_CONFIG.css = {
		container: 'blue-grey darken-1',
		buttonDefault: 'btn waves-effect waves-light',
		buttonAction: 'orange',
		buttonDisabled: 'disabled'
	};
}])


.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/appdownload');
 
	$stateProvider
		.state('app', {
			url:'/app',
			templateUrl: 'templates/menu.html',
			controller: 'AppController'
		})
		.state('app.download', {
			url:'download',
			templateUrl: 'templates/download.html',
			controller: 'DownloadController'
		})
		.state('app.sql', {
			url:'sql',
			templateUrl: 'templates/sql.html',
			controller: 'SqlController'
		});
});
