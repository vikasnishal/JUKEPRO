	'use strict';

	/**
	 * @ngdoc function
	 * @name wooqerApp.controller
	 */
	var wooqerCtrl=angular.module('wooqerApp.controllers',[]);
	//base controller for the app

	wooqerCtrl.controller('baseCtrl',function($scope,$modal,$timeout,$rootScope,$location,jsonObjects){
		
		$scope.loadingBoot={
			loading:false,
		};
		$scope.data={
			currentPage:1,
			entryLimit:4,
			arrayLength:0,
		}
		$scope.openDataModal=function(data){
			
			var dataInstance=jsonObjects.dataObject;
			dataInstance=JSON.parse(JSON.stringify(data));;
			$rootScope.dataObject={
				dataLocal:dataInstance,
			};
			$scope.loadingBoot.loading=true;
			if($scope.checkDocType(data))
				$timeout(function() {
					$scope.loadingBoot.loading=false;
						var modalInstance = $modal.open({
					templateUrl : 'views/dataPopUp.html',
					controller : modalInstanceCtrl,
					windowClass:'dataModal',
					resolve:{
						returnDetail:function(){
							return $rootScope.dataObject;
						}
					}
				});
					}, 1000);
			
		}
		
		$scope.browseBackButton=function(){
			if($scope.data.currentPage==1)
				return;
			$scope.loadingBoot.loading=true;
			$scope.data.currentPage--;
			$timeout(function() {
				$scope.loadingBoot.loading=false;
				
			}, 1000);
			
		};
		$scope.browseForwardButton=function(){
			if(($scope.data.arrayLength-$scope.data.currentPage*$scope.data.entryLimit)<=0)
				return;
			$scope.loadingBoot.loading=true;
			$scope.data.currentPage++;
			$timeout(function() {
				$scope.loadingBoot.loading=false;
			}, 1000);
		};
		$rootScope.detailInput={
					dataInput:"",
		};
		$scope.checkDocType=function(input){
			if(input.dataLocation.indexOf(".doc")!=-1){
				 if(confirm("This is a word Document \n Click Ok to download your document")==true){
				 	window.open(input.dataLocation,"_self","fullscreen=no,toolbar=yes, width=800, height=600, menubar=yes, status=no,scroll=yes");
				 };
				 $location.url("/documents");
				 $scope.loadingBoot.loading=false;
				return false;
			}
			return true;
		}
		$scope.openSocialPage=function(input){
			$scope.loadingBoot.loading=true;
			$timeout(function() {
			
			if($scope.checkDocType(input)){
				$location.url('/data_details/'+ input.uniqueID);
				$rootScope.detailInput.dataInput=input;
				$scope.loadingBoot.loading=false;
		}
		}, 1000)
		};
		
	});
	//headerCtrl to navigate between different Tabs in header
	wooqerCtrl.controller('headerCtrl',function($scope,$location,$modal,$rootScope,$timeout,$routeParams){
		
		$scope.changeLinkState=function(input){
			$scope.loadingBoot.loading=true;
			$timeout(function() {
				$scope.loadingBoot.loading=false;
				$rootScope.linkState=input;
			}, 1000)
			;
		};
	});
	//controller for the video partial page
	wooqerCtrl.controller('mediaBrowseCtrl',function($scope,$modal,$timeout,$rootScope,jsonObjects){
		$scope.data.currentPage=1;
		$scope.data.entryLimit=4;
		if(window.location.href.indexOf('videos') != -1) {
			$rootScope.linkState='/videos';
			$scope.dataArray=jsonObjects.videoArray;//specify the array that will contain the videos
			;	
			// $scope.data.arrayLength=$scope.videoArray.length
		}
		else if(window.location.href.indexOf('images') != -1) {
			$rootScope.linkState='/images';
			$scope.dataArray=jsonObjects.imageArray;
			// $scope.data.arrayLength=$scope.imageArray.length
		}
		else if (window.location.href.indexOf('documents') != -1) {
			$rootScope.linkState='/documents';
			$scope.dataArray=jsonObjects.documentArray;
			// $scope.data.arrayLength=$scope.documentArray.length;
		}
		$scope.data.arrayLength=$scope.dataArray.length
		$scope.header=$rootScope.linkState.slice(1);
	});
	wooqerCtrl.controller('detailCtrl',function($scope,$modal,$timeout,$rootScope,$routeParams,$location,jsonObjects){
		$scope.detail=$rootScope.detailInput;

		if($rootScope.detailInput.dataInput==""){
			$scope.loadingBoot.loading=true;
			$timeout(function(){
				if(window.location.href.indexOf('vid') != -1){
					for(var dataObject in jsonObjects.videoArray){
						if($routeParams.uniqueID==jsonObjects.videoArray[dataObject].uniqueID)
							{	
								$rootScope.linkState="/videos";
								$scope.detail.dataInput=jsonObjects.videoArray[dataObject];
								break;
							}
					}
		}
		else if(window.location.href.indexOf('img') != -1){
			for(var dataObject in jsonObjects.imageArray){
				if($routeParams.uniqueID==jsonObjects.imageArray[dataObject].uniqueID)
				{
					$rootScope.linkState="/images";
					$scope.detail.dataInput=jsonObjects.imageArray[dataObject];
					$scope.detail.dataType='image';
					break;
				}
			}
		}
		else if(window.location.href.indexOf('doc') != -1){
			for(var dataObject in jsonObjects.documentArray){
				if($routeParams.uniqueID==jsonObjects.documentArray[dataObject].uniqueID)
				{
					$rootScope.linkState="/documents";	
					var data=jsonObjects.documentArray[dataObject]
					if($scope.checkDocType(data)){
				 		$scope.detail.dataInput=jsonObjects.documentArray[dataObject];
						$scope.detail.dataType='document';
						break;
					}
					
				}
			}
		}
		$scope.loadingBoot.loading=false;

		},1000);
		}	
		$scope.commentObject={
			comment:"",
		}
		$scope.comment="";
		$scope.clearText=function(){
			$scope.comment="";
		}
		$scope.submitComment=function(comment){
			var commentObject=JSON.parse(JSON.stringify($scope.commentObject));
			commentObject.comment=comment;
			commentObject.userImage="images/annonymous_user.jpg";
			commentObject.userName="Kevin James" 
			$scope.detail.dataInput.comments.unshift(commentObject);
			$scope.comment="";
		};
		$scope.comments={
			currentPage:1,
			entryLimit:5,
		};
		$scope.showMoreComments=function(){
			$scope.loadingBoot.loading=true;
			$timeout(function(){
				$scope.loadingBoot.loading=false;
				$scope.comments.currentPage++;
			},1000);
		}
		$scope.showLessComments=function(){
			$scope.loadingBoot.loading=true;
			$timeout(function(){
				$scope.loadingBoot.loading=false;
				$scope.comments.currentPage=1;
			},1000);
		}
		$scope.closeDetail=function(){
			$scope.loadingBoot.loading=true;
			$timeout(function(){
				$scope.loadingBoot.loading=false;
			window.history.back();
		 },700);
		}
		
	});
var modalInstanceCtrl=function($scope,$modalInstance,$timeout,$location,returnDetail,jsonObjects){
		$scope.details=returnDetail;
	 $scope.showErrorMessage=false;
	 $scope.showSuccessMessage=false
	 //submit response
	  $scope.submitResponse=function(input){
	  	for( var question in $scope.details.dataLocal.questions){
	  		if($scope.details.dataLocal.questions[question].answer==""){
	  			$scope.showErrorMessage=true;
	  			return;
	  		}

	  	}
	  	$scope.showSuccessMessage=true;
	  	if($scope.details.dataLocal.dataType=='video')
	  				jsonObjects.videoArray.push($scope.details.dataLocal);
	  	else if($scope.details.dataLocal.dataType=='image')
	  				jsonObjects.imageArray.push($scope.details.dataLocal);
	  	else  
	  		jsonObjects.documentArray.push($scope.details.dataLocal);
				
	  	
	  	$timeout(function() {
	  			$modalInstance.close();
			}, 1000);
	 	// 
	 	};
	 	$scope.closeErrorMessage=function(){
	 		$scope.showErrorMessage=false;
	 	};
	 	$scope.closeModal=function(){
	 		$modalInstance.close();
	 	}


	}


