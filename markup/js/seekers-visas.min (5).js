$(document).ready(function(){$(".partner-slider").slick({infinite:!0,slidesToShow:6,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',responsive:[{breakpoint:1280,settings:{slidesToShow:5,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}},{breakpoint:767,settings:{slidesToShow:3,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}}]}),$(".partner-item").matchHeight({byRow:!1}),$(window).width()>=1024&&($(".visa-item .text h6").matchHeight({byRow:!1}),$(".visa-item .text p").matchHeight({byRow:!1}));var a=$(".renouncement-slider");a.on("init",function(a,b){$(".renouncement_count").html(parseInt(b.currentSlide+1)+"<span> / "+b.slideCount+"</span>")}),a.on("afterChange",function(a,b,c){$(".renouncement_count").html(parseInt(b.currentSlide+1)+"<span> / "+b.slideCount+"</span>")}),a.slick({arrows:!0,infinite:!0,slidesToShow:4,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>',responsive:[{breakpoint:1280,settings:{slidesToShow:3,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,nextArrow:'<button class="slick-arrow next"><i class="icon-right-arrow1"></i></button>',prevArrow:'<button class="slick-arrow prev"><i class="icon-right-arrow1"></i></button>'}}]}),$(window).width()>=1280&&a.slick("unslick"),$(".renouncement-item").matchHeight({byRow:!0}),$(".renouncement-items").matchHeight({byRow:!0})});