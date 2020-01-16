$(document).ready(function()
{"use strict";var header=$('.header');var ctrl=new ScrollMagic.Controller();var map;setHeader();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});initMenu();initSelect();initGoogleMap();function setHeader()
{if($(window).scrollTop()>91)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
function initMenu()
{var hamb=$('.hamburger');var menu=$('.menu');var menuOverlay=$('.menu_overlay');var menuClose=$('.menu_close_container');hamb.on('click',function()
{menu.toggleClass('active');menuOverlay.toggleClass('active');});menuOverlay.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});menuClose.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});}
function initDatePicker()
{var dp=$('#datepicker');dp.datepicker();}
function initSelect()
{if($('.contact_select').length)
{var select=$('.contact_select');select.each(function()
{var selected=$(this);selected.change(function()
{selected.addClass('selected');});});}}
function initGoogleMap()
{var myLatlng=new google.maps.LatLng(34.063685,-118.272936);var mapOptions={center:myLatlng,zoom:14,mapTypeId:google.maps.MapTypeId.ROADMAP,draggable:true,scrollwheel:false,zoomControl:true,zoomControlOptions:{position:google.maps.ControlPosition.RIGHT_CENTER},mapTypeControl:false,scaleControl:false,streetViewControl:false,rotateControl:false,fullscreenControl:true,styles:[{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffeba1"}]}]}
map=new google.maps.Map(document.getElementById('map'),mapOptions);google.maps.event.addDomListener(window,'resize',function()
{setTimeout(function()
{google.maps.event.trigger(map,"resize");map.setCenter(myLatlng);},1400);});}});