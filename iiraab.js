
function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

var deviceAgent = navigator.userAgent.toLowerCase();

var isTouchDevice = is_touch_device() || 
(deviceAgent.match(/(iphone|ipod|ipad)/) ||
deviceAgent.match(/(android)/)  || 
deviceAgent.match(/(iemobile)/) || 
deviceAgent.match(/iphone/i) || 
deviceAgent.match(/ipad/i) || 
deviceAgent.match(/ipod/i) || 
deviceAgent.match(/blackberry/i) || 
deviceAgent.match(/bada/i));

if (isTouchDevice || (window.innerHeight > window.innerWidth && window.innerHeight < 664) ) {
         
	  $.alert ({
		title: 'Mobile Device!',
		content: 'Sorry! This page is not compatible with mobiles as yet, please use a P.C with the Chrome Browser to access it.',
		type: 'red',
		btnClass: 'btn-red',
		typeAnimated: true,

	});

    } 




var catcher = $(".lightblue"),
	divCatcher = $("#nounsd"),
	sn = 0,
	butCatcher= $();
	
	
var boxes = $(".drag-el"),
	dropArea = $("#dropArea"),
	overlapThreshold = "5%";

	
//record what type of component it is
var componentType = "";

//a list of all the components user added to canvas 
var componentArray = [];

//component last dragged to canvas 
var selectedComponent = "";

//variables for components found in text
var compoundInText = false;
var mutaliqInText = false;
var sentenceInText = false;
var verbInText = false;
var verbType ="";
var typeOfSubject = "";
var dharfAndMudhafIntext = false;
var dhameerMustatrInText = false;
var mayGoNouns = false;

var assistOn = true;

 	

var buttons = $('#murakabButt, #miscButt, #sentencesButt, #signsButt, #statesButt, #followersButt, #majroorButt, #mansoobButt, #marfooButt, #particlesButt, #nounsButt, #verbsButt');
var words = $("#particlesButt, #nounsButt, #verbsButt");
var roles = $("#followersButt, #majroorButt, #mansoobButt, #marfooButt");
var mutaliqButts = $("#miscButt, #marfooButt");


//$("#nounsd").addClass('lightblue');



function exposeHolder() {
	$('#buttRow').mouseover(function() {
		
	   
		   $(".holder").css({
			   'visibility' : 'visible',
			   'overflow-x' : 'scroll',
			   'overflow-y' : 'visible'
			});
			
			
			butCatcher.trigger("click");
		   
		   
			
		
	});
};

function hideHolder() {
	$('#buttRow').mouseover(function() {
		
	   
		   $(".holder").css({
			   'visibility' : 'hidden',
			   'overflow-x' : 'hidden',
			   'overflow-y' : 'hidden'
			});
			
			
			butCatcher.trigger("click");
		   
	});
};



//this is for the position of rows and holder
$( ".holder" ).position({
	of: '#buttRow',
	my: "right top",
	at: "right bottom", // that means right below the other ;)
	collision: "flip flip"
});

$( ".popup" ).position({
	of: '.holder',
	my: "left top",
	at: "left bottom", // that means right below the other ;)
	collision: "flip flip"
});



$('#murakabButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#murakabButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "murakab";

    if ($('.blue').css('z-index') < '200') {
        $(".blue").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".blue");
    }

    if (!$("#murakabd").hasClass('blue')) {
        $("#murakabd").addClass('blue');
        divCatcher = $("#murakabd");

    }

});

$('#miscButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#miscButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "misc";

    if ($('.red').css('z-index') < '200') {
        $(".red").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".red");
    }

    if (!$("#miscd").hasClass('red')) {
        $("#miscd").addClass('red');
        divCatcher = $("#miscd");
    }
});

$('#sentencesButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#sentencesButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "sentence";

    if ($('.yellow').css('z-index') < '200') {
        $(".yellow").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".yellow");
    }

    if (!$("#sentenced").hasClass('yellow')) {
        $("#sentenced").addClass('yellow');
        divCatcher = $("#sentenced");
    }
});

$('#signsButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#signsButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "sign";
	
    if ($('.black').css('z-index') < '200') {
        $(".black").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".black");
    }

    if (!$("#signsd").hasClass('black')) {
        $("#signsd").addClass('black');
        divCatcher = $("#signsd");
    }
});

$('#statesButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#statesButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "state";

    if ($('.white').css('z-index') < '200') {
        $(".white").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".white");
    }

    if (!$("#statesd").hasClass('white')) {
        $("#statesd").addClass('white');
        divCatcher = $("#statesd");
    }
});

$('#followersButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#followersButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "follower";

    if ($('.orange').css('z-index') < '200') {
        $(".orange").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".orange");
    }

    if (!$("#followersd").hasClass('orange')) {
        $("#followersd").addClass('orange');
        divCatcher = $("#followersd");
    }
});

$('#majroorButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#majroorButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "majroor";

    if ($('.green').css('z-index') < '200') {
        $(".green").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".green");
    }

    if (!$("#majroord").hasClass('green')) {
        $("#majroord").addClass('green');
        divCatcher = $("#majroord");
    }
});

$('#mansoobButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#mansoobButt');
    divCatcher.attr('class', 'col-xs-1');
	componentType = "mansoob";

    if ($('.purple').css('z-index') < '200') {
        $(".purple").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".purple");
    }

    if (!$("#mansoobd").hasClass('purple')) {
        $("#mansoobd").addClass('purple');
        divCatcher = $("#mansoobd");
    }
});

$('#marfooButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#marfooButt');
   divCatcher.attr('class', 'col-xs-1');
   componentType = "marfoo";

    if ($('.brown').css('z-index') < '200') {
        $(".brown").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".brown");
    }

    if (!$("#marfood").hasClass('brown')) {
        $("#marfood").addClass('brown');
        divCatcher = $("#marfood");
    }
});

$('#particlesButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#particlesButt');
    divCatcher.attr('class', 'col-xs-1');

    if ($('.navy').css('z-index') < '200') {
        $(".navy").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".navy");
    }

    if (!$("#particlesd").hasClass('navy')) {
        $("#particlesd").addClass('navy');
        divCatcher = $("#particlesd");
    }
});

$('#nounsButt').click(function() {
	
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#nounsButt');
    divCatcher.attr('class', 'col-xs-1');
	

    if ($('.lightblue').css('z-index') < '200') {
        $(".lightblue").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".lightblue");
    }

    if (!$("#nounsd").hasClass('lightblue')) {
        $("#nounsd").addClass('lightblue');
        divCatcher = $("#nounsd");
    }
});

$('#verbsButt').click(function() {
	
	$(".holder").css('visibility','visible'); 
	butCatcher= $('#verbsButt');
    divCatcher.attr('class', 'col-xs-1');
   

    if ($('.gray').css('z-index') < '200') {
        $(".gray").css("z-index", "200");
        catcher.css("z-index", "1");
        catcher = $(".gray");
    }

    if (!$("#verbsd").hasClass('gray')) {
        $("#verbsd").addClass('gray');
        divCatcher = $("#verbsd");
    }
});



$(".outer").mouseleave(function() {
	  
	  $(".holder").css({
	   'visibility' : 'hidden',
	   'overflow-x' : 'hidden',
	   'overflow-y' : 'hidden'
	});
	  
	  divCatcher.attr('class', 'col-xs-1');
	  
});



function cloneTarget() {

    var $target = $(this.target),
        $parent = $target.parent(),
        $newElement = $target.clone();
		
	TweenLite.set($newElement, {clearProps: "all"});

    $newElement.prependTo($parent);
	
    if (!$target.hasClass("prepended")) {
        $target.prependTo('#cont').css({
            'top': event.pageY -= 30,
            'left': event.pageX -= 30
        });
		
		
		var component = $(this.target).find('span').html();
		//add the selected component to a global variable
		selectedComponent = component;
		//add the selected component to an array
		componentArray.push(component);
		
		//check class of component to see what type of word
		if ($(this.target).find('span').hasClass("noun")) {
			componentType = "noun";
		} else if ($(this.target).find('span').hasClass("verb")) {
			 componentType = "verb";
		} else if ($(this.target).find('span').hasClass("particle")) {
			componentType = "particle";
		}
		
		
		console.log(componentType);
		
		if (assistOn === true) {

		$('#nextBtn').css("visibility","visible");
		$('#previousBtn').css("visibility","visible");
			
		}

		
		
		
        $target.addClass("prepended");

    } else {
        $newElement.remove();
    }

    Draggable.create($newElement, {
        type: "x,y",

        onPress: cloneTarget,
        onDrag: function(e) {
			
            if (this.hitTest(dropArea, overlapThreshold)) {
                $(dropArea).addClass("highlight");
            } else(
                $(dropArea).removeClass("highlight")
            );

        },
        onDragEnd: function() {

            $(this.target).css({
                'z-index': -1
            });
			
			$(this.target).css("text-align", "center");
			
            if (this.hitTest(dropArea, overlapThreshold)) {
				
					var componentToRemove = $.inArray( component, componentArray );
				
					// removes this component from the screen
					$(this.target).remove();
					
					//removes this component from componentArray
					componentArray.splice(componentToRemove,1);
					
					$(dropArea).removeClass("highlight");
            }
        },

    });

	
}

Draggable.create(boxes, {
    type: "x,y",

    onPress: cloneTarget,
    onDrag: function(e) {

        if (this.hitTest(dropArea, overlapThreshold)) {
            $(dropArea).addClass("highlight");
        } else(
            $(dropArea).removeClass("highlight")
        );

    },
    onDragEnd: function() {
		
		$(this.target)
		.css({'z-index': -1}).css("text-align", "center");
		

        if (this.hitTest(dropArea, overlapThreshold)) {

					var component = $(this.target).find('span').html();
					var componentToRemove = $.inArray( component, componentArray );
				
					// removes this component from the screen
					$(this.target).remove();
					
					//removes this component from componentArray
					componentArray.splice(componentToRemove,1);
					
					$(dropArea).removeClass("highlight");
        }
    },
});




/*this is for copy of elements*/


$(".drag-el").click(function(){
	
	
	//this is to add the copied components to the array
		var component = $(this).find('span').html();
		componentArray.push(component);
		
	
	$(this).css({'border-bottom-color': 'green'});
	$(this).clone().prependTo("#cont").css({'z-index': -1, 'border-color': 'transparent'});
		
		
	Draggable.create(".prepended", {type:"x,y",

			onDrag: function(e) {

				if (this.hitTest(dropArea, overlapThreshold)) {
					$(dropArea).addClass("highlight");
					} else(
					$(dropArea).removeClass("highlight")
					);
			},

			onDragEnd: function() {
		
				$(this.target)
				.css({'z-index': -1}).css("text-align", "center");
				
											

				if (this.hitTest(dropArea, overlapThreshold)) {

					var component = $(this.target).find('span').html();
					var componentToRemove = $.inArray( component, componentArray );
				
					// removes this component from the screen
					$(this.target).remove();
					
					//removes this component from componentArray
					componentArray.splice(componentToRemove,1);
					
			
					$(dropArea).removeClass("highlight");
				}
			},

			edgeResistance:0.65, 
			throwProps:true
										
	});
});




$('#okButt').click(function() {
    var fnamew = document.getElementById("fname").value;

    if (fnamew.length > 0) {
	    
	    
        $.ajax({
            method: "POST",
            url: "https://api.rosette.com/rest/v1/tokens",
            data: { content: "北京大学生物系主任办公室内部会议" },
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", "Bearer 414571d0cc196cf34b35900ed828a1a0")
            }, success: function(data){
                alert(data);
                //process the JSON data etc
            }
        });

    	if (assistOn === true){
    		stepZero();
    	}
		$('.mustatir').css( "display", "none");
        $('#modal').fadeOut();
		$('#modal').css( "display", "none");
        document.getElementById("textHolder").innerHTML = fnamew;
        sn = 1;
		
		$('#textHolder').css( "height", "300%")
		$('#textHolder').css( "width", "auto")
		
		
		
		var o = $("#textHolder");
		o.html(o.html().replace(/\([^\)]*?\)/g, '<span class="highlightBrac">$&</span>'));
		
		
    } else {

    }

});


$('input').keypress(function(e) {

    if (event.keyCode == 13) {

        var fnamew = document.getElementById("fname").value;

        if (fnamew.length > 0) {
        	
			if (assistOn === true){
    		stepZero();
    		}

			$('.mustatir').css( "display", "none");
            $('#modal').fadeOut();
			$('#modal').css( "display", "none");
        document.getElementById("textHolder").innerHTML = fnamew;
        sn = 1;
		
		$('#textHolder').css( "height", "300%")
		$('#textHolder').css( "width", "auto")
		
		var o = $("#textHolder");
		o.html(o.html().replace(/\([^\)]*?\)/g, '<span class="highlightBrac">$&</span>'));
		
		
        } else {

        }

    }


});


  
  


window.onbeforeunload = function(evt) {
    if (sn == 1) {
        var message =
            'Did you screenshot your work? If you leave this page your changes will be lost.';
        if (typeof evt == 'undefined') {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
    }
};

 
	  
<!-- begin snippet: js hide: false console: false -->

<!-- language: lang-js -->

    var canvas = new fabric.Canvas('canvas');
    var DIMICON = 15;
    var HideControls = {
                'tl':true,
                'tr':true,
                'bl':true,
                'br':true,
                'ml':false,
                'mt':false,
                'mr':false,
                'mb':false,
                'mtr':false
            };


     var dataImage = [
    	"https://cdn1.iconfinder.com/data/icons/streamline-interface/60/cell-8-10-120.png", /*scale*/
        "https://cdn1.iconfinder.com/data/icons/ui-color/512/Untitled-12-128.png", /*delete*/
        "https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-1/128/sync-16.png", /*rotate*/
        "https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-1/128/write-compose-16.png", /*change text*/
        "https://cdn3.iconfinder.com/data/icons/social-messaging-productivity-1/128/save-16.png" /*save*/
      ];


  


var canvas = new fabric.Canvas('c');


var drawingModeEl = document.getElementById('drawing-mode');
canvas.selection = false;
canvas.isDrawingMode = true;
canvas.renderOnAddRemove = false;

  drawingModeEl.onclick = function() {
    canvas.isDrawingMode = !canvas.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = ' Cancel drawing mode';
			setControlsVisibility(HideControls);
			canvas.selection = true;
			
		
    }
  
  
  
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
	  canvas.selection = false;
	  fabric.Object.prototype.setControlsVisibility(HideControls);
	  
	  

    //********override*****//
    fabric.Object.prototype._drawControl = function(control, ctx, methodName, left, top) {
          if (!this.isControlVisible(control)) {
            return;
          }
    	  var SelectedIconImage = new Image();
          var size = this.cornerSize;
        /*  fabric.isVML() ||*/ this.transparentCorners || ctx.clearRect(left, top, size, size);
    	   switch (control)
                {
                case 'tl':/*delete*/
                  SelectedIconImage.src = dataImage[1];
    			  break;
                case 'tr':/*scale*/
                  SelectedIconImage.src = dataImage[0];	  
    			  break;
                case 'bl':/*scale*/
                 SelectedIconImage.src = dataImage[0];
    			  break;
                case 'br':/*rotate*/
                  SelectedIconImage.src = dataImage[2];
    			  break;
                default:
                  ctx[methodName](left, top, size, size);
                }
                 
                if (control == 'tl' || control == 'tr' || control == 'bl' || control == 'br')
                {
                  try {
                    ctx.drawImage(SelectedIconImage, left, top, DIMICON, DIMICON); 
                  } catch (e) {
    				  ctx[methodName](left, top, size, size);
                  }
                }
        }
     
    //override prorotype _setCornerCursor to change the corner cusrors
    	fabric.Canvas.prototype._setCornerCursor =  function(corner, target) {
    		if (corner === 'mtr' && target.hasRotatingPoint) {
    			this.setCursor(this.rotationCursor);
    			/*ADD*/
    		  }else if(corner == "tr" || corner == "bl" ){
    			  this.setCursor('sw-resize'); 

    		  }else if(corner == "tl" || corner == "br"){
    			  this.setCursor('pointer');  
    		  }			  
    			/*ADD END*/
    		  else {
    			this.setCursor(this.defaultCursor);
    			return false;
    		  }
        };
    	fabric.Canvas.prototype._getActionFromCorner = function(target, corner){
          var action = 'drag';
    	  if (corner){
    		  switch(corner){
    			case 'ml':
    			case 'mr':
    				action = 'scaleX';
    				break;
    			case 'mt':
    			case 'mb':
    				action = 'scaleY';
    				break;
    			case 'mtr':
    				action = 'rotate';
    				break;
    			/**ADD **/	
    			case 'br':
    				action = 'rotate';
    				break;
    			case 'tl'://delete function if mouse down
    				action = 'delete';
    				canvas.remove(canvas.getActiveObject());
    				break;		
    			/**ADD END**/				
    			default:  action = 'scale';
    		  }
    		  return action;
    	  }
        }  
    	
    	fabric.Canvas.prototype._performTransformAction = function(e, transform, pointer) {
          var x = pointer.x,
              y = pointer.y,
              target = transform.target,
              action = transform.action;

          if (action === 'rotate') {
            this._rotateObject(x, y);
            this._fire('rotating', target, e);
          }
          else if (action === 'scale') {
            this._onScale(e, transform, x, y);
            this._fire('scaling', target, e);
          }
          else if (action === 'scaleX') {
            this._scaleObject(x, y, 'x');
            this._fire('scaling', target, e);
          }
          else if (action === 'scaleY') {
            this._scaleObject(x, y, 'y');
            this._fire('scaling', target, e);
          }
    	  /**ADD**/
    	  else if (action === 'delete') {
    		//do nothing, because here function executed when mouse moves
    	  }
    	  /**ADD END**/
    	  else {
            this._translateObject(x, y);
            this._fire('moving', target, e);
            this.setCursor(this.moveCursor);
          }
        }
    //********override END*****//
	
    }
  };

  
  
 
canvas.renderAll();


  
/*this is for the helpButton toggle, to display the help contents for each component*/
$('.helpButton').click(function() { /* if button is clicked */
    if ($('.popup').hasClass("popOpen")) { /* if any element has class "popOpen" */
        $('.popup').removeClass("popOpen"); /* remove that class */
        $(this).next('.popup').addClass("popOpen"); /* then add to the child of this element i.e (.helpButton) the class "popOpen" */
    } else {
        $(this).next('.popup').addClass("popOpen"); /* if no element has class "popOpen" we just go straight to the last step above */
    }
    if (!$('.popup').hasClass("popOpen")) { /* if elements with class "popup" does not have class "popOpen" */
        $('.popup').addClass("popOpen"); /* then add to elements with class "popup" the class "popOpen" */
    }
});
$('.closeBtn').click(function() {
    $('.popup').removeClass('popOpen'); /* if button is clicked remove from elements with class "popup" the class "popOpen" */
	
});
var statuds;
$(document).ready(function(e) {
    $(".imgwrapper").click(function() {
        var img = $(' > img.large', this).attr("src");
        var date = $(' > span.date', this).html();
        var info = $(' > span.info', this).html();
        var a = $(' > a', this).attr("href");
        status = $(this).attr('id');
        $('.popupImgGal img').attr("src", img);
        $('.popupImgGal span.date').html(date);
        $('.popupImgGal span.info').html(info);
        $('.popupImgGal a').attr("href", a);
        popup();
    });
});

function popup() {
    $(".popupbg").fadeToggle("slow");
}
$(document).ready(function(e) {
    $(".close").click(function() {
        $(".popupbg").fadeToggle("slow");
    });
});
  
  
  
  
 /* this was original code to toggle popups
 
  function show_project(theId){
  document.getElementById(theId).style.display = "inline";
}

function hide_project(theId){
  document.getElementById(theId).style.display = "none";
  
  
  
  
  
  
  
  
  
  
  
  
  
}
*/
  
  
  /* this is so the help popup dont affect the scrolling when the close button is clicked*/
  // Create
Draggable.create(".closeBtn", {});

// Kill
Draggable.get(".closeBtn").kill();

 // Create
Draggable.create(".amazeCont", {});

// Kill
Draggable.get(".amazeCont").kill();

Draggable.create("#stepHolder", {});



$('#editButt').on('click',function(){
    
	var rf = $(".outer").addClass('playing');
	var ty = $("#dropArea").addClass('playing');
	var gh = $("#drawing-mode").addClass('playing');
	var ug = $("#copyrightN").addClass('playing');
	var hg = $("#grabButtonsHolder").addClass('playing');
	
	
    window.setTimeout(function(){
        rf.removeClass('playing');
		ty.removeClass('playing');
		gh.removeClass('playing');
		ug.removeClass('playing');
		hg.removeClass('playing');
		
    }, 6000); //<-- Delay in milliseconds
  });
  
  
  $('#saveButt').on('click',function(){
    
	var rf = $(".outer").addClass('playing');
	var ty = $("#dropArea").addClass('playing');
	var gh = $("#drawing-mode").addClass('playing');
	var ug = $("#copyrightN").addClass('playing');
	var hg = $("#grabButtonsHolder").addClass('playing');
	
	
    window.setTimeout(function(){
        rf.removeClass('playing');
		ty.removeClass('playing');
		gh.removeClass('playing');
		ug.removeClass('playing');
		hg.removeClass('playing');
		
    }, 4000); //<-- Delay in milliseconds
  });
  
 


var lineDrawn = false;
var newWord = true;

buttons.css( "opacity", "0.1").prop('disabled', true);


 
 function stepZero() {

 	if (selectedComponent === "") {

		$.alert({
				title: 'Step 1: Indicate to the word. ',
				content: 'Draw a line beneath the first word.',
				theme: 'light',
				type: 'green',
				typeAnimated: true,		
				columnClass: 'medium',
				buttons: {
					OK: {
						text: 'OK',
						btnClass: 'btn-green',
					},
				},

				backgroundDismiss: true
			});

 	} else if (selectedComponent === "مستتر هو" || selectedComponent === "مستتر هي") {

			$.alert({
				title: "The &nbsp;" + typeOfSubject + "&nbsp; could be another word in this sentence.",
				content: "Note: This pronoun will be the&nbsp;" + typeOfSubject + "&nbsp;for this verb if no other word can be it's&nbsp;" + typeOfSubject + "&nbsp;.<br><br><strong> DRAW A LINE BENEATH THE NEXT WORD.</strong> ",
				theme: 'light', 	
				type: 'green',  	
				typeAnimated: true,		
				columnClass: 'large',

				backgroundDismiss: true
			});
			
 	}  else {

		$.alert({
				title: 'Step 1: Indicate to the next word.',
				content: 'Draw a line beneath the next word.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 	
				buttons: {  
	                                OK: { 
	                                    text: 'OK',     
	                                    btnClass: 'btn-green', 
	                                },
	                                cancel: {
	                                    text: 'No more words!',     
	                                    btnClass: 'btn-red', 
	                                    action: function(){
	                                        
	                                        if  (verbFound === true && $.inArray('جملة فعلية', componentArray) === -1){
	 
	                                            goToSentence();
	                                            verbFound = false;
	                                        } else {
	                                            goTowrapup();
	                                        }
	 
	                                     }
	 
	                               	 }           
                			},
				backgroundDismiss: true
			});
 		
 	}

    buttons.css( "opacity", "0.1").prop('disabled', true);
	butCatcher= $('');
	hideHolder();
	newWord = true;
	$('.oneLine').css( "display", "inline-block");
	$('.mustatir').css( "display", "none");
	  
  }; 

 function goTowrapup(){
 
    $.alert({
            title: 'Dont forget to screenshot your work! ',
            content: '',
            theme: 'light',             type: 'green',              typeAnimated: true,     
            columnClass: 'medium',
                          buttons: 
                          {              
                              OK: {       
                                  text: 'OK',                 
                                  btnClass: 'btn-green',              
                                  }, 
                          },
                
            backgroundDismiss: true
        });
        
 
  }


 function goToNouns() {
	
	$('.oneLine').css( "display", "none");
	$('.pronoun').css( "display", "inline-block");
	$('.mustatir-no').css( "display", "none");

	$.alert({
			title: 'What pronoun is on/in the verb? ',
			content: 'From the "nouns" category above. Choose the type of Pronoun associated with this &nbsp;&nbsp;<span class="selectedWordtCss">' + selectedWord.replace('<br>','&nbsp;')  + '</span>&nbsp;.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});
		
	
    buttons.css( "opacity", "0.1").prop('disabled', true);
	$("#nounsButt").css(  "opacity", "1").prop('disabled', false);
	butCatcher= $("#nounsButt");
	exposeHolder();
	newWord = false; 
  }; 
  


  function goToWords() {
  	
	  $.alert({
			title: 'What type of word is this? ',
			content: 'Choose the type of word from the categories above.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});
		
	
	buttons.css( "opacity", "0.1").prop('disabled', true);
	words.css(  "opacity", "1").prop('disabled', false);
	butCatcher = $("#nounsButt");
	exposeHolder();
	newWord = false;
	  
	  
  }; 



canvas.on('mouse:up', function(e) {
    lineDrawn = true;

	if (assistOn === true ) {
		if (verbInText === true && mayGoNouns === true ) {
			verbInText = false;
			goToNouns();
			mayGoNouns = false;

		} else if (lineDrawn === true && newWord === true) {

			goToWords();
		} 
    }
  });
  


  function goToRoles(){
	 $.alert({
			title: "What is it's role in the text? ",
			content: 'Choose the role of the &nbsp;&nbsp;<span class="selectedWordtCss">' + selectedWord.replace('<br>','&nbsp;')  + '</span>&nbsp;&nbsp; from the categories above.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
			backgroundDismiss: true
		});
  	
	  
	buttons.css( "opacity", "0.1").prop('disabled', true);
	roles.css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#marfooButt');
	$('.oneLine').css( "display", "inline-block");
	$('.mustatir').css("display", "none");
	  
	  
  }; 
  

  
  function goToMutaliq(){
	  
	if (selectedComponent === "مضاف إليه" && $.inArray('ظرف', componentArray) != -1) {
		$.alert({
			title:'There is a ظرف and مضاف إليه ! ',
			content: 'Analyze the &nbsp;&nbsp;<span class="selectedWordtCss">ظرف + مضاف إليه</span>&nbsp;&nbsp;into&nbsp;&nbsp;<span class="selectedWordtCss">شبه الجملة</span>&nbsp;&nbsp;and then make it&nbsp;&nbsp;<span class="selectedWordtCss">متعلق</span>&nbsp;.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});

	} else {
		$.alert({
			title:'There is a جر and مجرور ! ',
			content: 'Analyze the&nbsp;&nbsp;<span class="selectedWordtCss">جر و مجرور</span>&nbsp;&nbsp;into&nbsp;&nbsp;<span class="selectedWordtCss">شبه الجملة</span>&nbsp;&nbsp;and then make it&nbsp;&nbsp;<span class="selectedWordtCss">متعلق</span>&nbsp;.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});
		
	}
	
	buttons.css( "opacity", "0.1").prop('disabled', true);
	mutaliqButts.css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#miscButt');
	mutaliqInText = false;
	dharfAndMudhafIntext = false;
	  
  }; 
  
  
  
  function goToStates(){

		$.alert({
			title:"What is it's state? ",
			content: 'Choose the state of the &nbsp;&nbsp;<span class="selectedWordtCss">' + selectedRole.replace('<br>','&nbsp;')  + '</span>&nbsp;.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});

	
	buttons.css( "opacity", "0.1").prop('disabled', true);
	roles.css(  "opacity", "0.1").prop('disabled', true);
	$("#statesButt").css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#statesButt');
	  
	  
  }; 
  
  function goToSigns(){

  	$.alert({
			title:"What is it's sign? ",
			content: 'Choose the sign of &nbsp;&nbsp; <span class="selectedWordtCss">' + selectedComponent.replace('في حالة ال','').replace('<br>','&nbsp;')  + '</span>&nbsp;&nbsp;  on the &nbsp;<span class="selectedWordtCss">' + selectedRole.replace('<br>','&nbsp;') + '</span>&nbsp; .',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});
	
	buttons.css( "opacity", "0.1").prop('disabled', true);
	$("#signsButt").css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#signsButt');
	  
	  
  }; 

  function goToPhrases(){
	  
	if ($.inArray('مضاف إليه', componentArray) != -1) {

		$.alert({
				title:"Complete the Idhafa Construction!",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss">مضاف </span>&nbsp;&nbsp;for the&nbsp;&nbsp;<span class="selectedWordtCss">مضاف إليه</span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});


		
	} else if ($.inArray('صفة', componentArray) != -1) {

		$.alert({
				title:"Complete the Tawseefi Construction!",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss"> موصوف </span>&nbsp;&nbsp;for the&nbsp;&nbsp;<span class="selectedWordtCss">صفة</span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});

	} else if ($.inArray('حال', componentArray) != -1) {

	
		$.alert({
				title:"Which word's condition is being described?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss"> صاحب الحال </span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});

		
	} else if ($.inArray('اسم الإشارة', componentArray) != -1) {

		$.alert({
				title:"Complete the Ihaari Construction?",
				content: 'Indicate which word is the &nbsp;<span class="selectedWordtCss">مشار إليه</span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});

	} else if ($.inArray('معطوف', componentArray) != -1) {

		$.alert({
				title:"معطوف in the  text?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss">معطوف عليه</span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});

		
	} else if ($.inArray('تمييز', componentArray) != -1) {

		$.alert({
				title:"Which word is being clarifies?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss">مميّز</span>&nbsp;.',
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
		});


	} else if ($.inArray('بدل', componentArray) != -1) {

		$.alert({
				title:"Which word is being subtituted?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss">مبدل منه</span>&nbsp;.',  
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});

		
	} else if ($.inArray('توكيد', componentArray) != -1) {

		$.alert({
				title:"Which word is being emphasised?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss">مأكّد</span>&nbsp;.',  
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});


	} else if ($.inArray('مستثنى', componentArray) != -1) {

		$.alert({
				title:"From what is the exception?",
				content: 'Indicate which word is the &nbsp;&nbsp;<span class="selectedWordtCss"> مستثنى منه</span>&nbsp;.', 
				theme: 'light', 			type: 'green',  			typeAnimated: true,		
				columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},

				backgroundDismiss: true
			});
		
	}
	  
	buttons.css(  "opacity", "0.1").prop('disabled', true);
	$("#murakabButt").css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#murakabButt');
	compoundInText = false;
	removeCompoundsFromArray();
	  
	  
  };  
  
  
  function goToSentence(){
		$.alert({
			title:"Sentences! ",
			content: 'Wrap up the sentence/s.',
			theme: 'light', 			type: 'green',  			typeAnimated: true,		
			columnClass: 'medium', 				buttons: { 					OK: { 						text: 'OK', 						btnClass: 'btn-green', 					}, 				},
				
			backgroundDismiss: true
		});

	
	buttons.css(  "opacity", "0.1").prop('disabled', true);
	$("#sentencesButt").css(  "opacity", "1").prop('disabled', false);
	butCatcher= $('#sentencesButt');
	sentenceInText = false;
	newWord = false;
	removeSentencePartsFromArray();
	newWord = false;
	  
  };  
  
  function goVerbPronoun(){

  	var majhool ="فعل مضارع&nbsp;المجهول";
	var naqis ="فعل مضارع&nbsp;الناقص";


	if (selectedWord === naqis  ) {
		
		typeOfSubject = "اسم لفعل الناقص";
	} else if (selectedWord === majhool) {

		typeOfSubject = "نائب فاعل";
	} else {

		typeOfSubject = "فاعل";

	}

	$.alert({
			title:"Find the&nbsp;" + typeOfSubject + "&nbsp; ! ",
			content: "Draw a line from the verb's pronoun.",
			theme: 'light',
			type: 'green', 
			typeAnimated: true, 			
			columnClass: 'medium', 	
			buttons: { 				
				OK: { 			
					text: 'OK', 		
					btnClass: 'btn-green', 	
				}, 			
			},
				
			backgroundDismiss: true
		});

    buttons.css( "opacity", "0.1").prop('disabled', true);
	butCatcher= $('');
	hideHolder();
	newWord = true;
	
	  
  };  
  
  
  function countComponentOnPage(countMe) {
			
		var obj = { };
		
		for (var i = 0, j = componentArray.length; i < j; i++) {
		   if (obj[componentArray[i]]) {
			  obj[componentArray[i]]++;
		   }
		   else {
			  obj[componentArray[i]] = 1;
		   } 
		}

		console.log(obj);

		if (isNaN(obj[countMe])) {

			return 0;
		} else {
		
		return obj[countMe];	

		}

		
  
	}
  
  function removeCompoundsFromArray() {
					componentArray.splice($.inArray( 'اسم الإشارة', componentArray ),1);
					componentArray.splice($.inArray( 'حال', componentArray ),1);
					componentArray.splice($.inArray( 'صفة', componentArray ),1);
					componentArray.splice($.inArray( 'تمييز', componentArray ),1);
					componentArray.splice($.inArray( 'مستثنى', componentArray ),1);
					componentArray.splice($.inArray( 'معطوف', componentArray ),1);
					componentArray.splice($.inArray( 'مضاف إليه', componentArray ),1);
					componentArray.splice($.inArray( 'بدل', componentArray ),1);
					componentArray.splice($.inArray( 'توكيد', componentArray ),1);
				};
  
  function removeSentencePartsFromArray(){
					componentArray.splice($.inArray( 'مبتدأ', componentArray ),1);
					componentArray.splice($.inArray( 'مبتدأ مأخر', componentArray ),1);
					componentArray.splice($.inArray( 'خبر', componentArray ),1);
					componentArray.splice($.inArray( 'خبر محذوف', componentArray ),1);
					componentArray.splice($.inArray( 'سد مسد الخبر', componentArray ),1);
					componentArray.splice($.inArray( 'فعل ماضي', componentArray ),1);
					componentArray.splice($.inArray( 'فعل مضارع', componentArray ),1);
					componentArray.splice($.inArray( 'الناقص', componentArray ),1);
					componentArray.splice($.inArray( 'اسم لفعل الناقص', componentArray ),1);
					componentArray.splice($.inArray( 'خبر لفعل ناقص', componentArray ),1);
					componentArray.splice($.inArray( 'حرف المشبه', componentArray ),1);
					componentArray.splice($.inArray( 'خبر لالمشبه', componentArray ),1);
					componentArray.splice($.inArray( 'اسم لالمشبه', componentArray ),1);
					componentArray.splice($.inArray( 'فعل أمر', componentArray ),1);
					componentArray.splice($.inArray( 'فاعل', componentArray ),1);
					componentArray.splice($.inArray( 'مفعول به', componentArray ),1);
					componentArray.splice($.inArray( 'نائب فاعل', componentArray ),1);
					
				};
  
  var selectedWord = "";
  selectedRole = "";
  
  $('#nextBtn').click(function() {
	
		if (componentType === "noun") {

			if ((selectedComponent === "مستتر هو" || selectedComponent === "مستتر هي") && $('.pronoun').css( "display") === "inline-block") {
				
				stepZero();
			} else {
				selectedWord = selectedComponent;
				goToRoles();
				
			}	

			
		}
		else if (componentType === "verb") {
			
			verbInText = true;
			verbFound = true;

			if ($.inArray("فعل ماضي", componentArray) != -1) {
				
				verbType = "فعل ماضي";

			} else if ($.inArray("فعل مضارع", componentArray) != -1) {

			verbType = "فعل مضارع";

			} else if ($.inArray("فعل أمر", componentArray) != -1 ) {

			verbType = "فعل أمر";

			} else if ($.inArray("فعل المدح", componentArray) != -1 ) {

			verbType = "فعل المدح";

			} else if ($.inArray("فعل الذم", componentArray) != -1 ) {

			verbType = "فعل الذم";

			}



			if (selectedComponent === "الناقص" || selectedComponent === "المجهول" || selectedComponent === "الشرط") {

				selectedWord = verbType + "&nbsp;" + selectedComponent;
				console.log(selectedWord);

			} else {
			
			selectedWord = selectedComponent;

			}


			// if word is a verb it does not take a role, but to continue the flow we will use the same variable
			selectedRole = selectedWord;
			
			if (verbType === "فعل مضارع") {

				goToStates();
			
			} else {
				goVerbPronoun();
				mayGoNouns = true;

			}
			

		}
		else if (componentType === "particle") {
			
			stepZero();
			
			
		}
		else if ((componentType === "marfoo" || componentType === "mansoob" || componentType === "majroor" || componentType === "follower") && 	$('#miscButt').prop('disabled') === true) {
			
			if (selectedComponent === "اسم المجرور" || (selectedComponent === "مضاف إليه" && $.inArray('ظرف', componentArray) != -1)) {
				mutaliqInText = true;	
				
				if (selectedComponent === "مضاف إليه" && $.inArray('ظرف', componentArray) != -1) {
					dharfAndMudhafIntext = true;
					//remove dharf from array
					componentArray.splice($.inArray( 'ظرف', componentArray ),1);
				}
			} 
			
			selectedRole = selectedComponent;
			goToStates();
			
		} else if (componentType === "marfoo" && $('#miscButt').prop('disabled') === false) {
            
	            selectedRole = selectedComponent;
	            $('.oneLine').css( "display", "inline-block");
	            goToSentence();
            
        	} else if (componentType === "state") {
			
			if ($.inArray('اسم الإشارة', componentArray) != -1 ||
				$.inArray('حال', componentArray) != -1 || 
				$.inArray('صفة', componentArray) != -1 || 
				$.inArray('تمييز', componentArray) != -1 || 
				$.inArray('مستثنى', componentArray) != -1 || 
				$.inArray('معطوف', componentArray) != -1 || 
				$.inArray('مضاف إليه', componentArray) != -1 || 
				$.inArray('بدل', componentArray) != -1 ||
				$.inArray('توكيد', componentArray) != -1 ) {
					
				compoundInText = true;
				
				
			}
			
			if ((($.inArray('مبتدأ', componentArray) != -1  || $.inArray('مبتدأ مأخر', componentArray) != -1) && 
				( $.inArray('خبر', componentArray) != -1 || $.inArray('خبر محذوف', componentArray) != -1 ||  $.inArray('سد مسد الخبر', componentArray) != -1 )) ||
				(($.inArray('فعل ماضي', componentArray) != -1 || $.inArray('فعل مضارع', componentArray) != -1 || $.inArray('فعل أمر', componentArray) != -1) && $.inArray('الناقص', componentArray) != -1) &&
				($.inArray('اسم لفعل الناقص', componentArray) != -1 && $.inArray('خبر لفعل ناقص', componentArray) != -1) || 
				($.inArray('حرف المشبه', componentArray) != -1 && $.inArray('خبر لالمشبه', componentArray) != -1 && $.inArray('اسم لالمشبه', componentArray) != -1) ||
				(($.inArray('فعل ماضي', componentArray) != -1 || $.inArray('فعل مضارع', componentArray) != -1 || $.inArray('فعل أمر', componentArray) != -1) && 
				 ($.inArray('فاعل', componentArray) != -1  || $.inArray('نائب فاعل', componentArray) != -1))
				) {
					
				sentenceInText = true;
				
			}
			
			goToSigns();
			


		}
		else if (componentType === "sign") {

		
			if (verbInText === true) {
				goVerbPronoun();
				mayGoNouns = true;
			} 
			else if (mutaliqInText === true) {
				$('.oneLine').css( "display", "none");
				$('.hidden-khabr').css( "display", "inline-block");
				goToMutaliq();

			} 
			else if (compoundInText === true) {
				goToPhrases();
			} 
			else if (sentenceInText === true) {
				goToSentence();
			} 
			else {
				stepZero();
			}
			
		}
		
		else if ((componentType === "misc" || componentType === "marfoo") && mutaliqButts.css(  "opacity", "1").prop('disabled') === false) {
			
			if (compoundInText === true) {
				goToPhrases();
			} 
			else if (sentenceInText === true) {
				goToSentence();
			} 
			else {
				stepZero();
			}

			$('.oneLine').css( "display", "inline-block");
			$('.mustatir').css( "display", "none");
		}

		else if (componentType === "murakab") {
			
			if (sentenceInText === true) {
				goToSentence();
			} 
			else {
				stepZero();
			}
		}
		else if (componentType === "sentence") {
			
			var sentenceCount = 0;
			
			sentenceCount += countComponentOnPage("جملة اسـمـية");
			sentenceCount += countComponentOnPage("جملة فعلية");
			sentenceCount += countComponentOnPage("جملة شرطية");
			
			
			// if 1 sentence || (2 && (harf istinaf || harf masdar || ism mawsool)) || (harf shart && no harf atf) || (harf shart && no haal jazm)
			if (sentenceCount === 1 || (sentenceCount === 2 
									&& ($.inArray('حرف الإستأناف', componentArray) != -1 
									 ||  $.inArray('حرف مصدري', componentArray) != -1 
									 ||  $.inArray('اسم الموصولة', componentArray) != -1
                                     ||  $.inArray('حرف التفسير', componentArray) != -1
									 ||  $.inArray('حرف القسم', componentArray) != -1 
									 ||  $.inArray('حرف العطف', componentArray) != -1
									 || $.inArray('حرف الشرط', componentArray) != -1))) {
				
				stepZero();
				
			
			}
			else {
			
				selectedWord = "sentence/s";
				goToRoles();
			}
		}
		 
        $('#nextBtn').css("visibility","hidden");
	    $('#previousBtn').css("visibility","hidden");

});
  
  

 $('#previousBtn').click(function() {
	
		stepZero();
		$('#nextBtn').css("visibility","hidden");
	    $('#previousBtn').css("visibility","hidden");
		

});
  
  

$('.cancelAssist').click(function() {

	if (assistOn === true) {
		
		
		$('.cancelAssist').html('Click here to turn<br> assistance back on');

			$.alert({
				title: 'Iraab Assist is turned off ',
				content: '',
				theme: 'light',
				type: 'red',
				typeAnimated: true,		
				columnClass: 'medium',
				buttons: {
					OK: {
						text: 'OK',
						btnClass: 'btn-green',
					},
				},

				backgroundDismiss: true
			});


		buttons.css(  "opacity", "1").prop('disabled', false);
		exposeHolder();
		butCatcher= $('#nounsButt');
		assistOn = false;
		
	} else {

		assistOn = true;

		$('.cancelAssist').html('Click here to turn<br> assistance off');
		
		
		
		if(!$('#modal').is(':visible')) {
			

			stepZero();
			$('#nextBtn').css("visibility","hidden");
	   		$('#previousBtn').css("visibility","hidden");
		} else {
			
			$.alert({
				title: 'Iraab Assist is turned on ',
				content: '',
				theme: 'light',
				type: 'green',
				typeAnimated: true,		
				columnClass: 'medium',
				buttons: {
					OK: {
						text: 'OK',
						btnClass: 'btn-green',
					},
				},

				backgroundDismiss: true
			});
		
		}

		
	}
		
});



$('.quranShowBtn').click(function(e) {

	if ($('#quranContents').is(':visible')) {
		
		$('#quranContents').hide();
		$('#quranHolder').hide();
		$('.quranShowBtn').html('Show copy of Quran.');
		
		
		$('.quranShowBtn').css('top','48%');
		$('.quranShowBtn').css('left','34%');
		
		
		
		
	} else {
		
		$('#quranContents').show();
		$('#quranHolder').show();
		e.preventDefault();
		
		// check if it's been loaded before
		  if (!($('#quranContents').data('loaded') || false)){
			// grab portoflio.html and place its contents within #content_2
			$('#quranContents').show().load('http://www.learningmuslim.com/quran-files/contents.htm', function(){
			  // set the flag to say we've already loaded this content
			  $('#quranContents').show().data('loaded',true);
			});
		  }
		  e.preventDefault();

		
		

		$('.quranShowBtn').html('Close Quran.');
		$('.quranShowBtn').css('top','190%');
		$('.quranShowBtn').css('left','16%');
	}
});
