$(document).ready(function()
{"use strict";var header=$('.header');var ctrl=new ScrollMagic.Controller();setHeader();$(window).on('resize',function()
{setHeader();setTimeout(function()
{$(window).trigger('resize.px.parallax');},375);});$(document).on('scroll',function()
{setHeader();});initMenu();function setHeader()
{if($(window).scrollTop()>91)
{header.addClass('scrolled');}
else
{header.removeClass('scrolled');}}
function initMenu()
{var hamb=$('.hamburger');var menu=$('.menu');var menuOverlay=$('.menu_overlay');var menuClose=$('.menu_close_container');hamb.on('click',function()
{menu.toggleClass('active');menuOverlay.toggleClass('active');});menuOverlay.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});menuClose.on('click',function()
{menuOverlay.toggleClass('active');menu.toggleClass('active');});}});