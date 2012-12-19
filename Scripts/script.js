// CMSC 198 Summer 2012
// LAB 2 - Javascript Navigation Bar Solution

var timeout	= 500; // initialize the variable timeout with value of 500
var closetimer	= 0; //initialize the variable closetimer with the value of 0
var menuitem	= 0; //initialize the variable menuitem with the value of 0

// define the function that opens the hidden div layer for the submenus on the nav bar
// open hidden layer
function submenu_open(id)

{	
	  // make sure that other sub menus have closed by ending their transition time 
	 // cancel close timer
	cancelclosetime();
	
	//make sure the div container(s) of submenus have closed 
	// close old layer
	if(menuitem) menuitem.style.visibility = 'hidden';

	// if the div container of the submenu is 'hidden' or closed then show it 
	// get new layer and show it
	menuitem = document.getElementById(id);
	menuitem.style.visibility = 'visible';

} // end function


// Define a function that will close a open or 'hidden' sub menu 
// close showed layer
function close()
{
	if(menuitem) menuitem.style.visibility = 'hidden'; // hide the sub menu
} // end function


//Define a function that will close the timer. This is different than cancel timer because it will initialize the timeout before clearing it.
// go close timer
function closetime()
{
	closetimer = window.setTimeout(close, timeout); // set the timeout to 0
} //end function


// Define the function that determines the timeout rule for the transition of submenus
// cancel close timer
function cancelclosetime()
{
	if(closetimer)
	{
		// let's clear the window of the timer
		window.clearTimeout(closetimer);
		closetimer = null;
	}
} // end function

// close layer when click-out
document.onclick = close; 



///////////////////END LAB 2///////////////////////////


//CMSC 198 - XHTML, CSS, Javascript
 // Instructor: Akilah Jackson
 // LAB 3 - Glossary Page
	  
	  var scrollInt;
	var scrTime, scrSt, scrDist, scrDur, scrInt;
	
	
	
	
	function replaceAnchorLinks()
	{
		var anchors, i, targ, targarr;
	
		if (!document.getElementById)
			return;
		
		// get all anchors
		anchors = document.getElementsByTagName("a");
		
		for (i=0;i<anchors.length;i++)
		{
		
			// check if href links to an anchor on this page
			if ( anchors[i].href.indexOf("#") != -1 && anchors[i].href.indexOf( document.URL ) != -1 )
			{
				// get name of target anchor
				targ = anchors[i].href.substring( anchors[i].href.indexOf("#")+1 );
				
				// find target anchor
				targarr = document.getElementsByName( targ );
				
				if (targarr.length)
				{
					anchors[i].className = (targarr[0].offsetTop < anchors[i].offsetTop) ? "up" : "down";
					anchors[i].id = "__" + targ;	// save target as id with prefix (used in onclick function below)
					anchors[i].onmousedown = function () { scrollToAnchor( this.id.substring( 2 ) ); return false; };
					anchors[i].href = "#";			// rewrite href
				}
			}
			
		}
	}
	
	
	/*
	SCROLL FUNCTIONS
	*/
	
	
	
	
	function scrollPage()
	{
		scrTime += scrInt;
		if (scrTime < scrDur) {
			window.scrollTo( 0, easeInOut(scrTime,scrSt,scrDist,scrDur) );
		}else{
			window.scrollTo( 0, scrSt+scrDist );
			clearInterval(scrollInt);
		}
	}
	
	function scrollToAnchor(aname)
	{
		var anchors, i, ele;
	
		if (!document.getElementById)
			return;
		
		// get anchor
		anchors = document.getElementsByTagName("a");
		for (i=0;i<anchors.length;i++) {
			if (anchors[i].name == aname) {
				ele = anchors[i];
				i = anchors.length;
			}
		}
		
		// set scroll target
		if (window.scrollY)
			scrSt = window.scrollY;
		else if (document.documentElement.scrollTop)
			scrSt = document.documentElement.scrollTop;
		else
			scrSt = document.body.scrollTop;

		
		
		scrDist = ele.offsetTop - scrSt;
		scrDur = 500;
		scrTime = 0;
		scrInt = 10;
		
		// set interval
		clearInterval(scrollInt);
		scrollInt = setInterval( scrollPage, scrInt );
	}
	
	
	
	
	/*
	EASING FUNCTIONS
	*/
	
	function easeInOut(t,b,c,d)
	{
		return c/2 * (1 - Math.cos(Math.PI*t/d)) + b;
	}
	// Lab - Frontpage Slideshow

//////// Everthing in-between this comment and the next needs to be customized to your site/////////////
var numberOfslides = 5;
var pause       = 5000;
var imageWidth  = 500;
var imageHeight = 600;
var dir         = "";
var rotate      = "true";

var getslideimages  = new Array("Images/2800.Pics-National.Geographic.Photo.Of.The.Day.Collection._2001-2009_---SaFTaZeeN-1935.jpg_sailing-ship-670301-lw.jpg",
				"Images/ocean-turtle.jpg",
				"Images/Sailing_013.jpg",
				"Images/dolphin information.JPG",
				"Images/Sailing Sunset.jpg");
var getSiteUrl = new Array(numberOfslides);  
getSiteUrl[0]  =  "http://www.deviantart.com/";
getSiteUrl[1]  =  "http://www.deviantart.com/";
getSiteUrl[2]  =  "http://www.deviantart.com/";
getSiteUrl[3]  =  "http://www.deviantart.com/";
getSiteUrl[4]  =  "http://www.deviantart.com/";
getSiteUrl[5]  =  "http://www.deviantart.com/";   

var pages   = new Array("../index.html","../about.html","../glossary.html","../resources.html");

var slides0 = new Array("0","1","2","3");
var slides1 = new Array("0");
var slides2 = new Array("3","2");
var slides3 = new Array("1","2","3");
var slides4 = new Array("0","2","3");
////////////////////////Nothing below this line need to be modified/////////////////////////////

var counter  = 0;
var nslides = numberOfslides;
var add      = "";
var b = new slideimages();
b.desireslides();

function slideimages()
  {
  this.slideimages  = new Array(nslides);  
  this.Url     = new Array(nslides);                      
  this.slides = slides;
  this.address = address;
  this.desireslides = desireslides;
  this.setslides = setslides;
  }

function slides(tempslideimages,i)
  {    
  this.slideimages[i]     = new Image(imageWidth,imageHeight);                 
  this.slideimages[i].src = dir + tempslideimages;
  }

function address(getUrl,i)
  {this.Url[i] = getUrl;}

function desireslides()
  {
  for (var i = 0; i < numberOfslides; i++)
     {
     var loc    = location.pathname;
     var length = loc.length;
     var start  = loc.lastIndexOf('/') + 1;
     var desirPage = loc.substring(start,length);
     if (desirPage == pages[i])
       {
       eval("nslides = slides" + i +".length");
       for (var j = 0; j < nslides; j++)
          {
          eval("this.slides(getslideimages[slides" + i + "[" + j + "]]," + j + ")");
          eval("this.address(getSiteUrl[slides" + i + "[" + j + "]]," + j + ")");
          }
       return;
       }
     }
  for (var j = 0; j < nslides; j++)
     {
     this.slides(getslideimages[j],j);
     this.address(getSiteUrl[j],j);
     }
  }

function setslides()  
  {
  document.img.src = this.slideimages[counter].src;   
  add = this.Url[counter];
  }

function displayslides()
  {
  if (rotate == "false") {counter = Math.round(Math.random() * (nslides - 1));}
  b.setslides();
  if (rotate == "true")
    {
    counter++;                                 
    if (counter > (nslides - 1)) {counter = 0;}
    setTimeout("displayslides()",pause);
    }  
  }

function goTo() {document.location.href = add;}

function show() {window.status = add;}