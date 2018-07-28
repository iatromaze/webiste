$( document ).ready(function() {

    $('#nav1').hide();
    // $("#mmu").animate({
    // 	Top: "20%",
    // }, {
    //   queue: false,
    //   duration: 15000
    // })
    // .animate({ borderRightWidth: "0px" }, 500 ,
    // 		function () {
    // 			$("#mmu").fadeOut(500,function(){
    //         $("#mmu").fadeOut(function(){
    //           $('#maindiv').removeAttr( "hidden" );
    //           $('#maindiv').fadeIn();
    //         });
    			
    // 			});
    // 		});

    	$("#onebtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#particles-js").offset().top
		    }, 1000);
		});

		$("#twobtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#whyus").offset().top
		    }, 1000);
		});


		$("#fourbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#Reviews").offset().top
		    }, 1000);
		});


		$("#sixbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#team").offset().top
		    }, 1000);
		});

		$("#sevenbtn").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#more").offset().top
		    }, 1000);
		});

		$("#onebtn2").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#particles-js").offset().top
		    }, 1000);
		});

		$("#twobtn2").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#whyus").offset().top
		    }, 1000);
		});


		$("#fourbtn2").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#Reviews").offset().top
		    }, 1000);
		});


		$("#sixbtn2").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#team").offset().top
		    }, 1000);
		});

		$("#sevenbtn2").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#more").offset().top
		    }, 1000);
		});

		$(window).scroll(function() {
		   var hT = $('#particles-js').offset().top,
		       hH = $('#particles-js').outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		       //console.log(wS)
		   if (wS > 30){
		       $('#nav2').hide()
		       $('#nav1').fadeIn()
		   }
		   if (wS < 30){

		       $('#nav1').hide();
		       $('#nav2').fadeIn();
		       
		   }
		});
});