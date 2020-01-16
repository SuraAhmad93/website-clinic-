$(document).ready(function()
{"use strict";var header=$('.header');var ctrl=new ScrollMagic.Controller();setHeader();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});initMenu();initHomeSlider();initDatePicker();initSelect();initMilestones();function setHeader()
{if($(window).scrollTop()>91)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
function initMenu()
{var hamb=$('.hamburger');var menu=$('.menu');var menuOverlay=$('.menu_overlay');var menuClose=$('.menu_close_container');hamb.on('click',function()
{menu.toggleClass('active');menuOverlay.toggleClass('active');});menuOverlay.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});menuClose.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});}
function initHomeSlider()
{if($('.home_slider').length)
{var homeSlider=$('.home_slider');homeSlider.owlCarousel({items:1,autoplay:true,loop:true,nav:false,smartSpeed:1200,mouseDrag:false,dotsContainer:'home_slider_custom_dots'});if($('.home_slider_custom_dot').length)
{$('.home_slider_custom_dot').on('click',function()
{$('.home_slider_custom_dot').removeClass('active');$(this).addClass('active');homeSlider.trigger('to.owl.carousel',[$(this).index(),300]);});}
homeSlider.on('changed.owl.carousel',function(event)
{$('.home_slider_custom_dot').removeClass('active');$('.home_slider_custom_dots li').eq(event.page.index).addClass('active');});}}
function initDatePicker()
{var dp=$('#datepicker');dp.datepicker();}
function initSelect()
{if($('.intro_select').length)
{var select=$('.intro_select');select.each(function()
{var selected=$(this);selected.change(function()
{selected.addClass('selected');});});}}
function initMilestones()
{if($('.milestone_counter').length)
{var milestoneItems=$('.milestone_counter');milestoneItems.each(function(i)
{var ele=$(this);var endValue=ele.data('end-value');var eleValue=ele.text();var signBefore="";var signAfter="";if(ele.attr('data-sign-before'))
{signBefore=ele.attr('data-sign-before');}
if(ele.attr('data-sign-after'))
{signAfter=ele.attr('data-sign-after');}
var milestoneScene=new ScrollMagic.Scene({triggerElement:this,triggerHook:'onEnter',reverse:false}).on('start',function()
{var counter={value:eleValue};var counterTween=TweenMax.to(counter,4,{value:endValue,roundProps:"value",ease:Circ.easeOut,onUpdate:function()
{document.getElementsByClassName('milestone_counter')[i].innerHTML=signBefore+counter.value+signAfter;}});}).addTo(ctrl);});}}});