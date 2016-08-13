/*
	tooltips v2.0.0
	
	by Todd Motto: http://toddmotto.com
	Latest version: https://github.com/toddmotto/tooltips
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	The tooltips plugin, a simple and lightweight notification banner.
*/
!function (window, $, undefined) {

	'use strict'
	
	// tooltips
	var tooltips = function (elem) {
		this.elem = elem
		this.$elem = $(elem)
		this.jsonConfig = this.$elem.data('tooltip')
	}
	
	// prototype
	tooltips.prototype = {
		init: function () {
			this.config = $.extend({}, this.defaults, this.jsonConfig)
			this.construct().position()
		},
		construct: function () {
			if (this.jsonConfig.tip) {
				this.$elem.before(
					$('<p class="tooltip" style="display: non;">' + this.jsonConfig.tip + '</p>')
				)
			}
			return this
		},
		position: function () {
			if (this.jsonConfig.position) {
				switch (this.jsonConfig.position) {
					case 'top':
						this.$elem.siblings('.tooltip').css({
							'top' : '-20px'
						})
					break
					case 'right':
						//
					break
					case 'bottom':
						//
					break
					case 'left':
						//
					break
				}
			}
			return this
		}
	}
	
	// merge defaults
	tooltips.defaults = tooltips.prototype.defaults
	
	// tooltips plugin logic
	$.fn.tooltips = function () {
	
		return this.each(function () {
			new tooltips(this).init()
		})
	
	}
	
	// global
	window.tooltips = tooltips
	
	// IIDE immediate-invoked-data-expression
	$(function () {
	
		// if the validator is set to initialise
		if($('[data-scope=tooltips]').length) {
		
			// run tooltips based on JSON data
			$('[data-tooltip]').tooltips()
		
		}
		
	})

}(window, jQuery);