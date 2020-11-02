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
jQuery(function ($) {	
	collectData();
	pageChange();	
});
