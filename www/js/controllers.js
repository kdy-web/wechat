angular.module('starter.controllers', [])

	.controller('ClassCtrl', function($scope, $ionicSlideBoxDelegate, $http, $rootScope, $timeout, $ionicScrollDelegate) {
		var needRefresh = sessionStorage.getItem("need-refresh");
    if(needRefresh){
        sessionStorage.removeItem("need-refresh");
        location.reload();
    }
  
    
    
//  var url=encodeURIComponent(window.location.href.split('#')[0]);
//  alert(window.location.href.split('#')[0])
//         
//         var $body = $('body');
//			document.title = '在线课程';
//			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
//			$iframe.on('load', function() {
//				setTimeout(function() {
//					$iframe.off('load').remove();
//				}, 0);
//				
//			}).appendTo($body);
//			$rootScope.range = "range=1"
//		
//		
//		//微信
//		  $http({
//		  	method:"GET",
//		  	url:"https://www.xueguoguo.cn/wxapi/WeChat?funcid=info",
//		  	data:{
//		  		
//		  		
//		  	}
//		  }).success(function(result){
//		  	console.log(result)
//		  })
//		
//		
//		
//	  $http({
//		  	method:"POST",
//		  	url:"https://www.xueguoguo.cn/wxapi/WeChat?funcid=getSign",
//		  	data:{
//		  		url:url
//		  		
//		  	}
//		  }).success(function(result){
//		  	console.log(result);
//		  
//			wx.config({
//				debug: true,
//			    appId:"wxaa6d046f722b05db",
//				timestamp: result.timestamp,
//				nonceStr: result.noncestr,
//				signature:result.signature ,
//				jsApiList: [
//					'onMenuShareTimeline',
//					'onMenuShareAppMessage'
//				  ]
//			});
//			wx.ready(function () {
//				console.log(1)
//				var shareData = {
//					title: '马富天博客_PHP博客_PHP Blog_PHP编程_分享PHP开发经验',	//	标题
//					desc: '马富天博客是个人独立博客专为学习php打造php教程技术,在马富天博客里可以找到你所需要的所有关于php技术解决文章方案,打造一个以技术经验为主题的分享平台!QQ:335134463',	//	描述
//					link: encodeURIComponent(url),	//	分享的URL，必须和当前打开的网页的URL是一样的
//					imgUrl: 'http://www.mafutian.net/logo.jpg'	//	缩略图地址
//				};
//				wx.onMenuShareAppMessage(shareData);
//				wx.onMenuShareTimeline(shareData);
//			});
//			wx.error(function (res) {
//			 console.log(res)
//			});
//		  	
//		  	
//	  })
		  
	
		  
		  
		  


		var mySwiper2 = new Swiper('#swiper-container2', {
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
			watchSlidesProgress: true,
			watchSlidesVisibility: true,
			slidesPerView: 5, //可见的数量
			//点击事件
			onTap: function() {

				//把mySwiper3跳转到对应点击下标
				mySwiper3.slideTo(mySwiper2.clickedIndex)
			}
		})

		var len;
		$('.tab-item').eq(1).click(function() {
			$('#swiper-container2').hide()
		})
		$('.tab-item').eq(2).click(function() {
			$('#swiper-container2').hide()
		})
		$('.tab-item').eq(0).click(function() {
			$('#swiper-container2').show()
		})

		var flag = true;
		$('#scroll').scroll(function() {

			if($ionicScrollDelegate.$getByHandle('mainScroll').getScrollPosition().top > 177) {
             
				if(flag) {
					var str = $('#swiper-container2')
					$('#swiper-container2').remove()
					$(str).appendTo("ion-view")
					$('#swiper-container2').css({
						"position": "absolute",
						"top": "0.88rem",
						"left": "0",
						"z-index": "3"
					})
					flag = false
				}

			} else {
				if(flag == false) {
					
					var str = $('#swiper-container2');
					$('#swiper-container2').remove()
					$("#swiper-container3").before(str)
					$('#swiper-container2').css({
						"position": "relative",
						"top": "0"
					})
					flag = true
				}

			}

		})

		//

		var mySwiper3 = new Swiper('#swiper-container3', {

			calculateHeight : true,
			observer: true, //修改swiper自己或子元素时，自动初始化swiper
			observeParents: true, //修改swiper的父元素时，自动初始化swiper
			//滑动开始的时候触发
			onSlideChangeStart: function(swiper) {
				
			

				updateNavPosition()
			}
		

		})

		function updateNavPosition() {
			//设置swiper2的激活样式
			$('#swiper-container2 .active-nav').removeClass('active-nav')
			//设置当前mySwiper3的激活下标
			var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');

			//假如当前有激活样式的元素没有可见
			if(!activeNav.hasClass('swiper-slide-visible')) {

				//滚动到当前有激活样式的下标
				mySwiper2.slideTo(activeNav.index())

			}

		}

		function sort_arr(arr) {
			var arr_content = [];
			var newarr = [];
			for(var i = 0; i < arr.length; i++) {
				if((i - 1) % 2 == 0) {
					arr_content = [arr[i - 1], arr[i]];
					newarr.push(arr_content)
				}
			}
            newarr.splice(4)
			return newarr;

		}

		var grade_flag = true;
		$('.grade_btn').click(function() {
			if(grade_flag) {
				$("#down").animate({"transform":"rotate(180deg)"},200)
				$('.grade_box').animate({"height":"2.1rem"},200);
				grade_flag = false;
			} else {
				$("#down").animate({"transform":"rotate(0deg)"},200)
				$('.grade_box').animate({"height":"0rem"},200);
				grade_flag = true;
			}
		})
		$('.grade_box li').click(function(e){
		window.event? window.event.returnValue = false : e.preventDefault();
		var html=$(this).html()
		$('.grade_btn span').html(html)
	
		
		})
		
		
		
		$('.search_icon').click(function() {
			$(this).parent().css("display", "none")
			$("#search").css("display", "block")
		})

		$('#cancel').click(function() {
			$("#search").css("display", "none")
			$("#search_title").css("display", "block")
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
		
		$http({
			method: "GET",
				url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(result) {
			
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
          $scope.Chinese=sort_arr($scope.Chinese).reverse();
          $scope.Math=sort_arr($scope.Math).reverse();
          $scope.English=sort_arr($scope.English).reverse();
          $scope.physical=sort_arr($scope.physical).reverse();
          $scope.biology=sort_arr($scope.biology).reverse();
          $scope.chemisty=sort_arr($scope.chemisty).reverse();
          $scope.geograply=sort_arr($scope.geograply).reverse();
           $scope.history=sort_arr($scope.history).reverse();
            $scope.politics=sort_arr($scope.politics).reverse();
		
        len = $scope.Chinese.length
		$("#swiper-container3").css("height", len  * 2.88+ "rem")
		})

		$scope.govideo = function(id) {
		
			window.location = "#/tab/video/" + id
		}
		window.onhashchange = function(e) {
			if(e.newURL.indexOf("#/tab/class") != -1) {
				$('#swiper-container2').show()
			}

		}
		$scope.golist = function() {
			if($('#search_text').val()) {
				window.location = "#/tab/search/" + $('#search_text').val()
			}

		}
		$scope.go_zhou=function(){
				window.location="#/tab/search/"+"周小茗"
		}
		$scope.go_lin=function(){
				window.location="#/tab/search/"+"林政"
		}
		$scope.go_qiu=function(){
				window.location="#/tab/search/"+"丘晓燕"
		}
		
		$scope.gochoice=function(){
			window.location="#/tab/search/"+"go_choice"
		}
		$scope.gohot=function(){
			window.location="#/tab/search/"+"go_hot"
		}

	})

	.controller('TeacherCtrl', function($scope, $http, $rootScope) {
                var $body = $('body');
                $rootScope.range = "range=1"
			document.title = '特级教师';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);



		$scope.gotutorial = function(teacher_id) {

			window.location = "#/tab/list" + "?teacher_id=" + teacher_id
		}

		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Search?funcid=teachers&everyPage=1000",
			data: {

			}

		}).success(function(result) {
             
			$scope.data = result.list.reverse()
			for(var i = 0; i < $scope.data.length; i++) {
				if($scope.data[i].name=="朱庆"){
					$scope.data.splice(i,1)
				}
				if($scope.data[i].name=="罗嘉民"){
					$scope.data.splice(i,1)
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

	.controller('MineCtrl', function($scope,$rootScope) {
		$rootScope.range = "range=1"
		   var $body = $('body');
			document.title = '个人中心';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
		
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
		$rootScope.range = "range=1"
		   var $body = $('body');
			document.title = '特级教师课程';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
		
		var index = window.location.hash.indexOf("?")
		var search = window.location.hash.substr(index)

		if(search.indexOf("teacher_id") != -1) {
			$scope.id = getQueryString("teacher_id", search.substr(1))

			$scope.data = [];
			$http({
				method: "GET",
				url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
				data: {

				}
			}).success(function(result) {

				for(var i = 0; i < result.list.length; i++) {
					if(result.list[i].teacher_id == $scope.id) {
						$scope.data.push(result.list[i]);
					}
				}
				
				   if($scope.data.length==0){
                	$("ion-content").hide();
                	$('.hide_box').show()
                }else{
                	 $scope.data=$scope.data.reverse()
                }
				  
				

			})
		} 

		$scope.govideo = function(id) {
		
			window.location = "#/tab/teacher_video/" + id
		}

	})
	.controller("BillsCtrl", function($scope, $rootScope, $http) {
		$rootScope.range = "range=1"
		   var $body = $('body');
			document.title = '我的账单';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
		
		
		

	})
	.controller("Mine_listCtrl", function($scope, $http, $rootScope) {
		$rootScope.range = "range=1"
		
		
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(result) {
		

			$scope.data = result.list
			if($scope.data.length==0){
				$("ion-content").hide();
				$('.hide_box').show()
			}

		})
		$scope.govideo = function(id) {
			window.location = "#/tab/mine_video/" + id
		}
	})

	.controller("VideoCtrl", function($scope, $ionicPopup, $http, $rootScope, $stateParams, $ionicModal) {
             sessionStorage.setItem("need-refresh", true);  
	$rootScope.range = "range=1"
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
		$scope.$on('$destroy', function() {
			
			$scope.modal_third.hide()

		})

		$scope.id = $stateParams.id
		
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
						onTap: function(e) {

						}
					},
					{
						text: '<div class="myPopup confirm_color">确定</div>',
						type: '',
						onTap: function(e) {
							window.location.href = "http://www.xueguoguo.cn/jump.html"
						}
					},
				]
			});
		}
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(data) {
		
			for(var i = 0; i < data.list.length; i++) {
				if(data.list[i].id == $scope.id) {
					$scope.video_data = data.list[i]
				}
			} 
			  var $body = $('body');
			document.title =$scope.video_data.title ;
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
			
			
			$scope.url = $scope.video_data.url

			var video_str = '<video id="media"  x-webkit-airplay="true" x5-video-player-type="true"  playsinline webkit-playsinline="true"><source src="' + $scope.url + '" type="video/mp4"> 您的浏览器不支持HTML5视频</video>'
			$('.zy_media').append(video_str)

			document.body.style.overflow = 'hidden';
			zymedia('video', {

			});
			if($scope.video_data.price == "0") {
				$("#content_top").hide()

			} else {

				$('.playvideo').on("click", function() {
				
					$scope.myPopup()
				})
			}
			if(!localStorage.getItem(["time" + $scope.id])) {
				$scope.video = {
					video_time: 0,
					video_id: $scope.id
				}

				localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video))
			}
			var timeJson = localStorage.getItem(["time" + $scope.id])
		
			document.getElementById("media").currentTime = JSON.parse(timeJson).video_time

		})
		window.onbeforeunload = function() {
			$scope.modal_third.hide()
			var time = document.getElementById("media").currentTime;
			$scope.video = {
				video_time: time,
				video_id: $scope.id
			}

			localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video));
		}

	})
	.controller("Teacher_videoCtrl", function($scope, $ionicPopup, $http, $rootScope, $stateParams, $ionicModal) {
		$rootScope.range = "range=1"
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
		window.onhashchange = function() {
			window.location.reload()
		}

		
		$scope.id = $stateParams.id
		
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
						onTap: function(e) {

						}
					},
					{
						text: '<div class="myPopup confirm_color">确定</div>',
						type: '',
						onTap: function(e) {
							window.location.href = "http://www.xueguoguo.cn/jump.html"
						}
					},
				]
			});
		}
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(data) {
		
			for(var i = 0; i < data.list.length; i++) {
				if(data.list[i].id == $scope.id) {
					$scope.video_data = data.list[i]
				}
			}
			   var $body = $('body');
			document.title = 	$scope.video_data.title;
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
			
			
			$scope.url = $scope.video_data.url

			var video_str = '<video id="media"  x-webkit-airplay="true" x5-video-player-type="true"  playsinline webkit-playsinline="true"><source src="' + $scope.url + '" type="video/mp4"> 您的浏览器不支持HTML5视频</video>'
			$('.zy_media').append(video_str)

			document.body.style.overflow = 'hidden';
			zymedia('video', {

			});
			if($scope.video_data.price == "0") {
				$("#content_top").hide()

			} else {

				$('.playvideo').on("click", function() {
				
					$scope.myPopup()
				})
			}
			if(!localStorage.getItem(["time" + $scope.id])) {
				$scope.video = {
					video_time: 0,
					video_id: $scope.id
				}

				localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video))
			}
			var timeJson = localStorage.getItem(["time" + $scope.id])
			
			document.getElementById("media").currentTime = JSON.parse(timeJson).video_time

		})
		window.onbeforeunload = function() {
			alert(1)
			var time = document.getElementById("media").currentTime;
			$scope.video = {
				video_time: time,
				video_id: $scope.id
			}

			localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video));
		}

	})
	.controller("SearchCtrl", function($scope, $stateParams, $http, $rootScope) {
			sessionStorage.setItem("need-refresh", true);
		$scope.val = $stateParams.val;
		$rootScope.range = "range=1"
			$scope.arr = [];
		
		if($scope.val=="go_hot"){
			var $body = $('body');
			document.title = '最热课程';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
			$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(result) {
			
			for(var i = 0; i < result.list.length; i++) {
			if(result.list[i].ishot==1){
					$scope.arr.unshift(result.list[i])
				}
			}
			$scope.data = $scope.arr
			

		})
		}else if($scope.val=="go_choice"){
			var $body = $('body');
			document.title = '精选课程';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
			
				$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(result) {
			
			for(var i = 0; i < result.list.length; i++) {
				if(result.list[i].isroll==1){
					$scope.arr.unshift(result.list[i])
				}
			}
			$scope.data = $scope.arr

		})
		}
		
		else{
			var $body = $('body');
			document.title = '在线课程';
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
				$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(result) {
		
			for(var i = 0; i < result.list.length; i++) {
				if(result.list[i].brief.indexOf($scope.val) != -1) {
					$scope.arr.push(result.list[i])
				}
				if(result.list[i].grade.indexOf($scope.val) != -1) {
					$scope.arr.push(result.list[i])
				}
				if(result.list[i].subject.indexOf($scope.val) != -1) {
					$scope.arr.push(result.list[i])
				}
				if(result.list[i].tbrief.indexOf($scope.val) != -1) {
					$scope.arr.push(result.list[i])
				}
				if(result.list[i].title.indexOf($scope.val) != -1) {
					$scope.arr.push(result.list[i])
				}
			}
			if($scope.arr.length==0){
		
				$("ion-content").hide()
				$(".hide_box").show()
			}else{
				$scope.data = $scope.arr.unique1().reverse();
			}
			
			
		
            
		})
		}
		
	

		

		$scope.govideo = function(id) {
			window.location = "#/tab/video/" + id
		}

	}).controller("Mine_videoCtrl", function($scope, $ionicPopup, $http, $rootScope, $stateParams, $ionicModal) {
		$rootScope.range = "range=1"
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

		window.onhashchange = function() {
			window.location.reload()
		}

		
		$scope.id = $stateParams.id
		
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
						onTap: function(e) {

						}
					},
					{
						text: '<div class="myPopup confirm_color">确定</div>',
						type: '',
						onTap: function(e) {
							window.location.href = "http://www.xueguoguo.cn/jump.html"
						}
					},
				]
			});
		}
		$http({
			method: "GET",
			url: "https://www.xueguoguo.cn/wxapi/Course?" + $rootScope.range + "&subject=",
			data: {

			}
		}).success(function(data) {
		
			for(var i = 0; i < data.list.length; i++) {
				if(data.list[i].id == $scope.id) {
					$scope.video_data = data.list[i]
				}
			}
			  var $body = $('body');
			document.title = 	$scope.video_data.title;
			var $iframe = $('<iframe src="/favicon.ico"></iframe>');
			$iframe.on('load', function() {
				setTimeout(function() {
					$iframe.off('load').remove();
				}, 0);
			}).appendTo($body);
			
			$scope.url = $scope.video_data.url

			var video_str = '<video id="media"  x-webkit-airplay="true" x5-video-player-type="true"  playsinline webkit-playsinline="true"><source src="' + $scope.url + '" type="video/mp4"> 您的浏览器不支持HTML5视频</video>'
			$('.zy_media').append(video_str)

			document.body.style.overflow = 'hidden';
			zymedia('video', {

			});
			if($scope.video_data.price == "0") {
				$("#content_top").hide()

			} else {

				$('.playvideo').on("click", function() {
				
					$scope.myPopup()
				})
			}
			if(!localStorage.getItem(["time" + $scope.id])) {
				$scope.video = {
					video_time: 0,
					video_id: $scope.id
				}

				localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video))
			}
			var timeJson = localStorage.getItem(["time" + $scope.id])
			
			document.getElementById("media").currentTime = JSON.parse(timeJson).video_time

		})
		window.onbeforeunload = function() {

			var time = document.getElementById("media").currentTime;
			$scope.video = {
				video_time: time,
				video_id: $scope.id
			}

			localStorage.setItem(["time" + $scope.id], JSON.stringify($scope.video));
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