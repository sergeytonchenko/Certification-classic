// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// global
import jQuery from 'js#/lib/jquery';
// styles
import 'sass#/style.scss';
// scripts
import { demo } from 'js#/modules/demo-module';
import {collectData} from 'js#/modules/data';
import {pageChange} from 'js#/modules/pages';
// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------
function setHeight(card) {
	let a = 0;
	card.each(
		function() {
			let currentHeight = $(this).height();
			if (currentHeight > a) {
				a = currentHeight;
			}
		}
	);
	card.height(a);
}

jQuery(function ($) {
	setHeight($(".card"));
	collectData();
	pageChange();	
});
