$(function(){
	$("nav").find("a").click(function(){
		let target = $(this).data("target");
		let _offset = $("." + target).offset().top;
		console.log(_offset);
		$("html,body").animate({
			scrollTop:_offset,
		})
		return false;
		$("nav ul").hide();
	})
	$(".goTop, .home").click(function(){
		$("html, body").animate({
			scrollTop: 0,
		})
		return false;
	})
	$(".goTop").hide();
	$(window).scroll(function(){
		var scrollHeight = $(window).scrollTop();
		if(scrollHeight > 600){
			$(".goTop").fadeIn();
			$("nav").addClass("nav-black");
		}else{		
			$(".goTop").fadeOut();
			$("nav").removeClass("nav-black");
		}
	})
	$('.slider').slick({
		autoplay: true,
	})
	$('.last-col').slick({
		autoplay:true,
		dots: true,
		infinite: false,
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		responsive: [
		  {
		    breakpoint: 960,
		    settings: {
		      slidesToShow: 3,
		      slidesToScroll: 3,
		    }
		  },
		  {
		    breakpoint: 650,
	    	settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1
		    }
		  },		
		  {
		    breakpoint: 480,
	    	settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		    }
		  },					
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
		});

	$(".hamburger").click(function(){
		$(this).toggleClass("hamburger-x");
		$(this).next().slideToggle();
	})
	$(window).resize(function(){
		let w = $(window).width();
		if(w > 885){
			$(".hamburger").next().show();
		}
		else{
			$(".hamburger").next().hide();
			$(".hamburger").removeClass("hamburger-x");
		}
	})
})