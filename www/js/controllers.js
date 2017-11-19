angular.module('starter.controllers', [])

	.controller('ClassCtrl', function($scope, $ionicSlideBoxDelegate,$http,$rootScope,$timeout,$ionicScrollDelegate) {
		 
		 var len;
		$('.tab-item').eq(1).click(function(){
			$('#swiper-container2').hide()
		})
		$('.tab-item').eq(2).click(function(){
			$('#swiper-container2').hide()
		})
		$('.tab-item').eq(0).click(function(){
			$('#swiper-container2').show()
		})
		
		
		$('#scroll').scroll(function(){
			
			if($ionicScrollDelegate.$getByHandle('mainScroll').getScrollPosition().top>190){
				
				
			    
			   $('#swiper-container2').appendTo("body")
				$('#swiper-container2').css({"position":"absolute","top":"0.88rem","left":"0","z-index":"3"})
			}else{
				$("#swiper-container3").before($('#swiper-container2'))
				$('#swiper-container2').css({"position":"relative","top":"0"})
			}
			
			
		})
		
		
		
		
		
			var mySwiper2 = new Swiper('#swiper-container2', {
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			slidesPerView: 5, //可见的数量
			//点击事件
			onTap: function() {
				
				//把mySwiper3跳转到对应点击下标
				mySwiper3.slideTo(mySwiper2.clickedIndex)
			}
		})
				var mySwiper4 = new Swiper('#swiper-container4', {
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			slidesPerView: 5, //可见的数量
			//点击事件
			onTap: function() {
				
				//把mySwiper3跳转到对应点击下标
				mySwiper3.slideTo(mySwiper4.clickedIndex)
			}
		})
			
			
		//
		
		var mySwiper3 = new Swiper('#swiper-container3', {
			autoHeight: true,
			  observer:true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents:true,//修改swiper的父元素时，自动初始化swiper
			//滑动开始的时候触发
			onSlideChangeStart: function(swiper) {
				console.log(swiper.activeIndex)
				if(swiper.activeIndex==0){
					 len = $scope.Chinese.length
				}else if(swiper.activeIndex==1){
					len = $scope.Math.length
				}else if(swiper.activeIndex==2){
					len=$scope.English.length
				}else if(swiper.activeIndex==3){
					len=$scope.physical.length
				}else if(swiper.activeIndex==4){
					len=$scope.chemisty.length
				}else if(swiper.activeIndex==5){
					len=$scope.biology.length
				}else if(swiper.activeIndex==6){
					len=$scope.history.length
				}else if(swiper.activeIndex==7){
					len=$scope.politics.length
				}else if(swiper.activeIndex==8){
					len=$scope.geograply.length
				}
				
				
				 	
		$("#swiper-container3").css("height", len  * 2.88+ "rem")
				
				updateNavPosition()
			},
			

		})
        
		function updateNavPosition() {
			//设置swiper2的激活样式
			$('#swiper-container2 .active-nav').removeClass('active-nav')
			//设置当前mySwiper3的激活下标
			var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');

			console.log(activeNav)
			//假如当前有激活样式的元素没有可见
			if(!activeNav.hasClass('swiper-slide-visible')) {

				//滚动到当前有激活样式的下标
				mySwiper2.slideTo(activeNav.index())

			}
			
			
			
		}
		
		
		function sort_arr(arr){
			var arr_content=[];
			var newarr=[];
			for(var i=0;i<arr.length;i++){
				if((i-1)%2==0){
				 arr_content=[arr[i-1],arr[i]];
				 newarr.push(arr_content)
				}
			}
			newarr.splice(4)
			return newarr;
			
		}
		
		
		
		
	
		var grade_flag = true;
		$('.grade_btn').click(function() {
			if(grade_flag) {
				$('.grade_box').show();
				grade_flag = false;
			} else {
				$('.grade_box').hide();
				grade_flag = true;
			}
		})
		$('.search_icon').click(function() {
			$(this).parent().css("display","none")
			$("#search").css("display","block")
		})

		$('#cancel').click(function() {
			$("#search").css("display","none")
			$("#search_title").css("display","block")
		})
		$scope.Math=[];
		$scope.Chinese=[];
		$scope.English=[];
		$scope.physical=[];
		$scope.biology=[];
		$scope.chemisty=[];
		$scope.geograply=[];
		$scope.history=[];
		$scope.politics=[];
       $rootScope.range = 1
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?"+"rang"+ $rootScope.range ,
			data: {

			}
		}).success(function(result) {
			console.log(result)
         for(var i=0;i<result.list.length;i++){
				if(result.list[i].subject=="语文"){
					$scope.Chinese.push(result.list[i])
				}
				if(result.list[i].subject=="数学"){
					$scope.Math.push(result.list[i])
				}
				if(result.list[i].subject=="英语"){
					$scope.English.push(result.list[i])
				}
				if(result.list[i].subject=="物理"){
					$scope.physical.push(result.list[i])
				}
				if(result.list[i].subject=="化学"){
					$scope.biology.push(result.list[i])
				}
				if(result.list[i].subject=="生物"){
					$scope.chemisty.push(result.list[i])
				}
				if(result.list[i].subject=="地理"){
					$scope.geograply.push(result.list[i])
				}
				if(result.list[i].subject=="历史"){
					$scope.history.push(result.list[i])
				}
				if(result.list[i].subject=="政治"){
					$scope.politics.push(result.list[i])
				}

			}
          $scope.Chinese=sort_arr($scope.Chinese);
          $scope.Math=sort_arr($scope.Math);
          $scope.English=sort_arr($scope.English);
          $scope.physical=sort_arr($scope.physical);
          $scope.biology=sort_arr($scope.biology);
          $scope.chemisty=sort_arr($scope.chemisty);
          $scope.geograply=sort_arr($scope.geograply);
           $scope.history=sort_arr($scope.history);
            $scope.politics=sort_arr($scope.politics);
			console.log($scope.Chinese)
        len = $scope.Chinese.length
		$("#swiper-container3").css("height", len  * 2.88+ "rem")
		})
     
     
	
$scope.govideo=function(id){
	$('#swiper-container2').hide()
	window.location="#/tab/video/"+id
}
window.onhashchange=function(e){
	if(e.newURL.indexOf("#/tab/class")!=-1){
		$('#swiper-container2').show()
	}
	
}
$scope.golist=function(){
	if($('#search_text').val()){
		window.location="#/tab/search/"+$('#search_text').val()
	}
	
	
}

	})

	.controller('TeacherCtrl', function($scope, $http, $rootScope) {
		 
		$scope.gotutorial = function(teacher_id) {

			window.location = "#/tab/list"+"?teacher_id="+teacher_id
		}
          
    $http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Search?funcid=teachers&everyPage=1000",
			data: {

			}

		}).success(function(result) {
			console.log(result)
			

			$scope.data = result.list
			for(var i=0;i<$scope.data.length;i++){
				if($scope.data[i].avaitar==""){
					$scope.data[i].avaitar="img/img1.png"
				}
			}
			
            $("img").one("error", function(e) {
						$(this).attr("src", "img/img1.png");
						$(this).css({
							"width": "100%",
							"height": "100%"
						})
					})
    
		})
     
    
	})

	.controller('MineCtrl', function($scope) {
		$scope.goseen = function() {

			window.location = "#/tab/mine_list"
		}
		$scope.gocollect = function() {

			window.location = "#/tab/mine_list"
		}
		$scope.gobills = function() {

			window.location = "#/tab/bills"
		}

	})

	.controller("ListCtrl", function($scope, $rootScope, $http) {
		$rootScope.range ="rang=1"
		var index=window.location.hash.indexOf("?")
		var search=window.location.hash.substr(index)
		
		if(search.indexOf("teacher_id")!=-1){
			$scope.id=getQueryString("teacher_id",search.substr(1))
		
		   $scope.data = [];
			$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range+"&subject=",
			data: {

			}
		}).success(function(result) {
			
           for(var i=0;i<result.list.length;i++){
            	if(result.list[i].teacher_id==$scope.id){
            		$scope.data.push(result.list[i]);
            	}
            }
			console.log($scope.data)

		})
		}else{
			$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range+"&subject=",
			data: {

			}
		}).success(function(result) {
			console.log(result)

			$scope.data = result.list

		})
		}
		
		$scope.govideo=function(id){
			console.log
	window.location="#/tab/teacher_video/"+id
}
		

	})
	.controller("BillsCtrl", function($scope, $rootScope, $http) {
		$rootScope.range = "rang=1"
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range+"&subject=",
			data: {

			}
		}).success(function(result) {
			console.log(result)

		

		})

	})
	.controller("Mine_listCtrl",function($scope,$http,$rootScope){
		$rootScope.range="rang=1"
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range+"&subject=''",
			data: {

			}
		}).success(function(result) {
			console.log(result)

			$scope.data = result.list

		})
		
	})
	
	.controller("VideoCtrl",function($scope,$ionicPopup,$http,$rootScope,$stateParams,$ionicModal){
		 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
   
  });
 $ionicModal.fromTemplateUrl('templates/modal_second.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_second = modal;
   
  });
      $ionicModal.fromTemplateUrl('templates/modal_third.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_third = modal;
  
  }); 
  window.onhashchange=function(){
  	console.log(1)
  	$scope.modal_third.hide()
  	window.location.reload()
  }
  
  
		$rootScope.range="rang=1";
		$scope.id=$stateParams.id
		console.log($scope.id)
		$scope.myPopup = function() {
				
				document.getElementById("media").pause();
				$ionicPopup.show({
					cssClass: "team-popup",
					template: '<div class="btn_title">下载学果果APP看视频</div>',

					subTitle: '',
					scope: $scope,
					buttons: [{
							text: '<div class="myPopup cancel_color">取消</div>',
							type: "",
						},
						{
							text: '<div class="myPopup confirm_color">确定</div>',
							type: '',
							onTap: function(e) {
                                 window.location.href="http://www.xueguoguo.cn/jump.html"
							}
						},
					]
				});
			}
			$http({
				method: "GET",
				url: "https://www.xueguoguo.cn/wxapi/Course?"+ $rootScope.range+"&subject=" ,
				data: {

				}
			}).success(function(data) {
				console.log(data)
				for(var i = 0; i < data.list.length; i++) {
					if(data.list[i].id == $scope.id) {
						$scope.video_data = data.list[i]
					}
				}
				console.log($scope.video_data)
				$scope.url = $scope.video_data.url
				
				var video_str = '<video id="media"  x-webkit-airplay="true" x5-video-player-type="true"  playsinline webkit-playsinline="true"><source src="' + $scope.url + '" type="video/mp4"> 您的浏览器不支持HTML5视频</video>'
				$('.zy_media').append(video_str)
				if($scope.video_data.price=="0"){
					$("#content_top").hide()
				}
				
				document.body.style.overflow = 'hidden';
				zymedia('video', {

				});
				if(!localStorage.getItem(["time"+$scope.id])){
					 $scope.video={
				 	video_time:0,
				 	video_id:$scope.id
				 }
					
				 localStorage.setItem(["time"+$scope.id],JSON.stringify($scope.video))
				}
				var timeJson=localStorage.getItem(["time"+$scope.id])
				console.log(timeJson)
               document.getElementById("media").currentTime=JSON.parse(timeJson).video_time
				
				
				
				
				
                   
			})
			window.onbeforeunload  =function(){
				alert(1)
				 var time=document.getElementById("media").currentTime;
				 $scope.video={
				 	video_time:time,
				 	video_id:$scope.id
				 }
				 
				 
            	   localStorage.setItem(["time"+$scope.id],JSON.stringify($scope.video));   
			}
			
		
	})
	.controller("Teacher_videoCtrl",function($scope,$ionicPopup,$http,$rootScope,$stateParams,$ionicModal){
		 $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
   
  });
 $ionicModal.fromTemplateUrl('templates/modal_second.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_second = modal;
   
  });
      $ionicModal.fromTemplateUrl('templates/modal_third.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_third = modal;
  
  }); 
  window.onhashchange=function(){
  	window.location.reload()
  }
  
  
		$rootScope.range="rang=1";
		$scope.id=$stateParams.id
		console.log($scope.id)
		$scope.myPopup = function() {
				
				document.getElementById("media").pause();
				$ionicPopup.show({
					cssClass: "team-popup",
					template: '<div class="btn_title">下载学果果APP看视频</div>',

					subTitle: '',
					scope: $scope,
					buttons: [{
							text: '<div class="myPopup cancel_color">取消</div>',
							type: "",
						},
						{
							text: '<div class="myPopup confirm_color">确定</div>',
							type: '',
							onTap: function(e) {
                                 window.location.href="http://www.xueguoguo.cn/jump.html"
							}
						},
					]
				});
			}
			$http({
				method: "GET",
				url: "https://www.xueguoguo.cn/wxapi/Course?"+ $rootScope.range+"&subject=" ,
				data: {

				}
			}).success(function(data) {
				console.log(data)
				for(var i = 0; i < data.list.length; i++) {
					if(data.list[i].id == $scope.id) {
						$scope.video_data = data.list[i]
					}
				}
				console.log($scope.video_data)
				$scope.url = $scope.video_data.url
				
				var video_str = '<video id="media"  x-webkit-airplay="true" x5-video-player-type="true"  playsinline webkit-playsinline="true"><source src="' + $scope.url + '" type="video/mp4"> 您的浏览器不支持HTML5视频</video>'
				$('.zy_media').append(video_str)
				if($scope.video_data.price=="0"){
					$("#content_top").hide()
				}
				
				document.body.style.overflow = 'hidden';
				zymedia('video', {

				});
				if(!localStorage.getItem(["time"+$scope.id])){
					 $scope.video={
				 	video_time:0,
				 	video_id:$scope.id
				 }
					
				 localStorage.setItem(["time"+$scope.id],JSON.stringify($scope.video))
				}
				var timeJson=localStorage.getItem(["time"+$scope.id])
				console.log(timeJson)
               document.getElementById("media").currentTime=JSON.parse(timeJson).video_time
				
				
				
				
				
                   
			})
			window.onbeforeunload  =function(){
				alert(1)
				 var time=document.getElementById("media").currentTime;
				 $scope.video={
				 	video_time:time,
				 	video_id:$scope.id
				 }
				 
				 
            	   localStorage.setItem(["time"+$scope.id],JSON.stringify($scope.video));   
			}
			
		
	})
	.controller("SearchCtrl",function($scope,$stateParams,$http,$rootScope){
		$scope.val=$stateParams.val;
		console.log($scope.val)
		$scope.arr=[];
		
			$http({
				method: "GET",
				url: "https://www.xueguoguo.cn/wxapi/Course?"+ $rootScope.range+"&subject=''",
				data: {

				}
			}).success(function(result){
				console.log(result)
				for(var i=0;i<result.list.length;i++){
					if(result.list[i].brief.indexOf($scope.val)!=-1){
						$scope.arr.push(result.list[i])
					}
					if(result.list[i].grade.indexOf($scope.val)!=-1){
						$scope.arr.push(result.list[i])
					}
						if(result.list[i].subject.indexOf($scope.val)!=-1){
						$scope.arr.push(result.list[i])
					}
						if(result.list[i].tbrief.indexOf($scope.val)!=-1){
						$scope.arr.push(result.list[i])
					}
				   if(result.list[i].title.indexOf($scope.val)!=-1){
						$scope.arr.push(result.list[i])
					}
				}
				$scope.data=$scope.arr.unique1()
				
			})
		
		$scope.govideo=function(id){
			window.location="#/tab/video/"+id
		}
		
		
		
		
	})
	
	

	.directive('hideTabs', function($rootScope) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				scope.$on('$ionicView.beforeEnter', function() {
					scope.$watch(attributes.hideTabs, function(value) {
						$rootScope.hideTabs = value;
					});
				});

				scope.$on('$ionicView.beforeLeave', function() {
					$rootScope.hideTabs = false;
				});
			}
		};
	});

