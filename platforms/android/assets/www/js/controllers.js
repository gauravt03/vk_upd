angular.module('test_app.controllers', [])



.controller('AppController', function($scope, $state)
{
	//-- Init de mes boutons
	$scope.statebout_app = {};
	$scope.statebout_app.download = "btn-primary";
	$scope.statebout_app.sql = "btn-primary";

	//-- Init du bouton de la page
	var quelbouton = $state.current.name.split('.')[1];
	$scope.statebout_app[quelbouton] = "btn-success";

	$scope.goNav = function(ouca)
	{

		var quelbouton = $state.current.name.split('.')[1];
		$scope.statebout_app[quelbouton] = "btn-primary";
		$scope.statebout_app[ouca] = "btn-success";

		$state.go('app.'+ouca);

	};
	

})


.controller('DownloadController', function($scope, ngVirtualKeyboardService)
{

	

	$scope.onKeyboardClick = function(id){
		console.log("ouma");
		var keyboard = ngVirtualKeyboardService.getKeyboardById(id);
		if (keyboard) {
			if (keyboard.isOpen) {
				keyboard.close();
			} else {
				keyboard.reveal();
			}
		}
	};

	$scope.formCrea = {};
	$scope.formrecup = {};
	$scope.formCrea.input_number = 123.85;

	$scope.formUpdate = {};
	$scope.formUpdate.input_tva = 0.20;
	$scope.formUpdate.type_prix = "ttc";

	$scope.formrecup.ean = "abcd1234";

	$scope.popKeyboard = function(elem, layout)
	{
		//-- The virtual keyboard will be linked to input id "elem" available via "document.getElementById(elem);"

		console.log("Lets show the virtual keyboard on input: "+elem+" with layout: "+layout);
	};

	$scope.doUpd = function()
	{
		alert("submit done, stock value: " + $scope.formUpdate.input_stock);
		// alert("ok submit, value ttc: " + $scope.formUpdate.input_prix);
	};

	$scope.doRecup = function()
	{
		alert("submit done, value: "+ $scope.formrecup.ean);

		//-- Reset
		$scope.formrecup.ean = "";
		angular.element($('#vki_inputean').val(""));

	};




	// //-- action de reset form
	// $scope.resetit = function(){
	//     $scope.resetForm($scope, 'caisseForm', { 
	//       inputean: 'test' 
	//     }); 
	//   };


	//  $scope.resetForm = function (scope, formName, defaults) {
	//     $('form[name=' + formName + '], form[name=' + formName + '] .ng-dirty').removeClass('ng-dirty').addClass('ng-pristine');
	//     var form = scope[formName];
	//     form.$dirty = false;
	//     form.$pristine = true;
	//     for(var field in form) {
	//       if(form[field].$pristine === false) {
	//         form[field].$pristine = true;
	//       }
	//       if(form[field].$dirty === true) {
	//         form[field].$dirty = false;
	//       }
	//     }
	//     for(var d in defaults) {
	//       scope[d] = defaults[d];
	//     }
	// }
	

})




.controller('SqlController', function($scope, $timeout)
{

	$scope.formCrea = {};
	$scope.formCrea.input_number = 123.85;

	$scope.formUpdate = {};
	$scope.formUpdate.input_tva = 0.20;
	$scope.formUpdate.type_prix = "ttc";



	$scope.popKeyboard = function(elem, layout)
	{
		//-- The virtual keyboard will be linked to input id "elem" available via "document.getElementById(elem);"

		console.log("Lets show the virtual keyboard on input: "+elem+" with layout: "+layout);
	};

	$scope.doUpd = function()
	{
		alert("ok submit");
	};

});







