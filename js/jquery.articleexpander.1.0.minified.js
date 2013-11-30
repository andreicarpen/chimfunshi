/*
 * JQuery Article Expander Plugin v1.0 (2010 08 29)
 * http://xhva.net/work/jqae
 *
 * Copyright 2010 Andrew Stibbard at http://xhva.net   (xhva.net@gmail.com)
 * This plugin is dual licensed under the MIT and GPL licenses.
 *
 * Questions? Improvements? Your feedback is welcome. If you use this in a
 * project, I'd love to hear about it! Cheers!
*/
(function($){$.fn.articleExpander=function(settings){var config=$.extend({},$.fn.articleExpander.defaults,settings);this.each(function(){var el=this;$(this).find(config.contentSelector).append("<div class='jQAEContent'></div>").append("<button class='jQAEMore'>"+config.expandText+"</button>").each(function(){var c=$(this).find("> *").slice(1,-2);var d=$(this).find(".jQAEContent");d.css('display','none').append(c)}).find("> :first-child, .jQAEMore").css('display','inline').end().end().find((config.headingClickable?config.headingSelector+", ":"")+(config.contentClickable?config.contentSelector+", ":"")+".jQAEMore").css('cursor',config.cursor).click(function(event){event.stopPropagation();var more=$(this).parent().find(".jQAEMore")[0];var op=$(more).text()==$("<div/>").html(config.expandText).text();$(more).html(op?config.collapseText:config.expandText);if(op)$(el).find(config.contentSelector+" > :first-child, .jQAEMore").css('display','block');$(this).parent().find(".jQAEContent").stop(true,true).animate({opacity:'toggle',height:'toggle'},config.speedInMilliseconds,"swing",function(){if(!op)$(el).find(config.contentSelector+" > :first-child, .jQAEMore").css('display','inline')})})});return this};$.fn.articleExpander.defaults={expandText:"&darr; Expand article",collapseText:"&uarr; Collapse article",headingSelector:"> :first-child",contentSelector:"> div",headingClickable:true,contentClickable:false,speedInMilliseconds:200,cursor:'pointer'}})(jQuery);