// JavaScript Document
var dengluNode=document.querySelector('.head-denglu1');
var tanchuangNode=document.querySelector('.fixed');
var guanbiNode=document.querySelector('.tc-you');

dengluNode.onclick=function(){
	tanchuangNode.style.top="0px"
};


guanbiNode.onclick=function(){
	tanchuangNode.style.top="-100%"
};
