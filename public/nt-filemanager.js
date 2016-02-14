(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nt-filemanager"] = factory();
	else
		root["nt-filemanager"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);

	Synthetic.createComponent({
		name: "nt-filemanager",
		engine: "angular"
	}, function($component, $init, $setup, $proto) {

		/*
		INCLUDE EVIL ICON LOADER. IT's MIT. HERE IT IS:

		Copyright (c) 2014 Alexander Madyankin <alexander@madyankin.name>, Roman Shamin

		MIT License

		Permission is hereby granted, free of charge, to any person obtaining
		a copy of this software and associated documentation files (the
		"Software"), to deal in the Software without restriction, including
		without limitation the rights to use, copy, modify, merge, publish,
		distribute, sublicense, and/or sell copies of the Software, and to
		permit persons to whom the Software is furnished to do so, subject to
		the following conditions:

		The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
		LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
		OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
		WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
		*/
		angular.element(document.body).ready(function() {
			var ssvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");http://www.w3.org/2000/svg
			ssvg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
			ssvg.setAttribute('id', 'ei-sprite');

			document.body.appendChild(ssvg);
			ssvg.style.display = 'none';
			ssvg.innerHTML+='<symbol id="ei-share-apple-icon" viewBox="0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id="ei-camera-icon" viewBox="0 0 50 50"><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><circle cx="35" cy="18" r="1"></circle><path d="M12 12h4v1h-4z"></path><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"></path></symbol><symbol id="sm-checked" viewBox="-150 -152 800 800"><polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/></symbol><symbol id="sm-delete-icon" viewBox="-150 -152 800 800"><path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/></symbol><symbol id="sm-add-folder-icon" viewBox="-150 -152 800 800"><path d="M444.955,31.782H333.208c-17.576,0-37.758,8.931-47.165,31.782c0,0-4.132,29.145-31.782,31.782 H31.782C14.239,95.347,0,109.077,0,126.621v286.551c0,17.544,14.239,31.783,31.782,31.783h413.172 c17.544,0,31.782-14.239,31.782-31.783V63.565C476.737,46.021,462.499,31.782,444.955,31.782z M444.955,126.621v286.551H31.782 V127.13H254.26l3.051-0.159c29.812-2.829,48.246-23.71,56.732-45.163c8.263-20.722,22.661-18.243,22.661-18.243h108.251V126.621 z"/><path d="M317.825,254.26H254.26v-63.565c0-8.772-7.151-15.891-15.891-15.891 c-8.772,0-15.891,7.119-15.891,15.891v63.565h-63.565c-8.772,0-15.891,7.151-15.891,15.891s7.119,15.891,15.891,15.891h63.565 v63.565c0,8.74,7.119,15.891,15.891,15.891c8.74,0,15.891-7.151,15.891-15.891v-63.565h63.565 c8.74,0,15.891-7.151,15.891-15.891S326.565,254.26,317.825,254.26z"/></symbol><symbol id="ei-navicon-icon" viewBox="0 0 50 50"><path d="M10 12h30v4H10z"></path><path d="M10 22h30v4H10z"></path><path d="M10 32h30v4H10z"></path></symbol><symbol id="sm-folder" viewBox="-150 -152 560 560"><path d="M273.081,101.378c-3.3-4.651-8.86-7.319-15.255-7.319h-24.34v-26.47c0-10.201-8.299-18.5-18.5-18.5 h-85.322c-3.63,0-9.295-2.876-11.436-5.806l-6.386-8.735c-4.982-6.814-15.104-11.954-23.546-11.954H58.731 c-9.293,0-18.639,6.608-21.738,15.372l-2.033,5.752c-0.958,2.71-4.721,5.371-7.596,5.371H18.5c-10.201,0-18.5,8.299-18.5,18.5 v167.07c0,0.885,0.161,1.73,0.443,2.519c0.152,3.306,1.18,6.424,3.053,9.064c3.3,4.652,8.86,7.319,15.255,7.319h188.486 c11.395,0,23.27-8.424,27.035-19.179l40.677-116.188C277.061,112.159,276.381,106.03,273.081,101.378z M18.5,64.089h8.864 c9.295,0,18.64-6.608,21.738-15.372l2.032-5.75c0.959-2.711,4.722-5.372,7.597-5.372h29.564c3.63,0,9.295,2.876,11.437,5.806 l6.386,8.734c4.982,6.815,15.104,11.954,23.546,11.954h85.322c1.898,0,3.5,1.603,3.5,3.5v26.47H69.34 c-11.395,0-23.27,8.424-27.035,19.179L15,191.231V67.589C15,65.692,16.603,64.089,18.5,64.089z M260.791,113.238l-40.677,116.188 c-1.674,4.781-7.812,9.135-12.877,9.135H18.751c-1.448,0-2.577-0.373-3.02-0.998c-0.443-0.625-0.423-1.814,0.056-3.181 l40.677-116.188c1.674-4.781,7.812-9.135,12.877-9.135h188.486c1.448,0,2.577,0.373,3.021,0.998 C261.29,110.682,261.27,111.871,260.791,113.238z"/></symbol>';
		});

		$setup({
			type: 'post', // post only for now
			url: 'testServer.json', // url of server script
			theme: {
				accent: '#FFC56C'
			},
			requests: {
				upload: {
					data:  {
						type: "'upload'",
						content: {
							location: 'seance.location'
						}
					}
				},
				contents: {
					data: {
						type: "'contents'",
						content: {
	                        location: 'seance.location'
	                    }
					}
				},
				remove: {
					data: {
						type: "'delete'",
						content: {
							location: 'seance.location',
		                    files: 'seance.selectedItems.files',
		                    folders: 'seance.selectedItems.folders'
						}
					}
				},
				reattach: {
					data: {
						type: "'reattach'",
						content: '%content'
					}
				},
				// Request to create a new folder
				addFolder: {
					data: {
						type: "'addFolder'",
						content: {
							location: 'seance.location',
	                    	name: 'seance.dirname'
						}
					}
				}

			},
			receiver: false
		});

		$init(function($element, $self, $config) {
			$config(['connector', 'receiver'], function(connector, receiver, location) {
				
				$($element).ntFileManager({
					connector: connector,
					receiver: receiver,
					location: location
				}, $self);
			});
			
		});	
	}); 

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!
	 * jQuery Form Plugin
	 * version: 3.32.0-2013.04.09
	 * @requires jQuery v1.5 or later
	 * Copyright (c) 2013 M. Alsup
	 * Examples and documentation at: http://malsup.com/jquery/form/
	 * Project repository: https://github.com/malsup/form
	 * Dual licensed under the MIT and GPL licenses.
	 * https://github.com/malsup/form#copyright-and-license
	 */
	/*global ActiveXObject */
	;(function($) {
	"use strict";

	/*
	    Usage Note:
	    -----------
	    Do not use both ajaxSubmit and ajaxForm on the same form.  These
	    functions are mutually exclusive.  Use ajaxSubmit if you want
	    to bind your own submit handler to the form.  For example,

	    $(document).ready(function() {
	        $('#myForm').on('submit', function(e) {
	            e.preventDefault(); // <-- important
	            $(this).ajaxSubmit({
	                target: '#output'
	            });
	        });
	    });

	    Use ajaxForm when you want the plugin to manage all the event binding
	    for you.  For example,

	    $(document).ready(function() {
	        $('#myForm').ajaxForm({
	            target: '#output'
	        });
	    });

	    You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
	    form does not have to exist when you invoke ajaxForm:

	    $('#myForm').ajaxForm({
	        delegation: true,
	        target: '#output'
	    });

	    When using ajaxForm, the ajaxSubmit function will be invoked for you
	    at the appropriate time.
	*/

	/**
	 * Feature detection
	 */
	var feature = {};
	feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
	feature.formdata = window.FormData !== undefined;

	var hasProp = !!$.fn.prop;

	// attr2 uses prop when it can but checks the return type for
	// an expected string.  this accounts for the case where a form 
	// contains inputs with names like "action" or "method"; in those
	// cases "prop" returns the element
	$.fn.attr2 = function() {
	    if ( ! hasProp )
	        return this.attr.apply(this, arguments);
	    var val = this.prop.apply(this, arguments);
	    if ( ( val && val.jquery ) || typeof val === 'string' )
	        return val;
	    return this.attr.apply(this, arguments);
	};

	/**
	 * ajaxSubmit() provides a mechanism for immediately submitting
	 * an HTML form using AJAX.
	 */
	$.fn.ajaxSubmit = function(options) {
	    /*jshint scripturl:true */

	    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
	    if (!this.length) {
	        log('ajaxSubmit: skipping submit process - no element selected');
	        return this;
	    }

	    var method, action, url, $form = this;

	    if (typeof options == 'function') {
	        options = { success: options };
	    }

	    method = this.attr2('method');
	    action = this.attr2('action');

	    url = (typeof action === 'string') ? $.trim(action) : '';
	    url = url || window.location.href || '';
	    if (url) {
	        // clean url (don't include hash vaue)
	        url = (url.match(/^([^#]+)/)||[])[1];
	    }

	    options = $.extend(true, {
	        url:  url,
	        success: $.ajaxSettings.success,
	        type: method || 'GET',
	        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
	    }, options);

	    // hook for manipulating the form data before it is extracted;
	    // convenient for use with rich editors like tinyMCE or FCKEditor
	    var veto = {};
	    this.trigger('form-pre-serialize', [this, options, veto]);
	    if (veto.veto) {
	        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
	        return this;
	    }

	    // provide opportunity to alter form data before it is serialized
	    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
	        log('ajaxSubmit: submit aborted via beforeSerialize callback');
	        return this;
	    }

	    var traditional = options.traditional;
	    if ( traditional === undefined ) {
	        traditional = $.ajaxSettings.traditional;
	    }

	    var elements = [];
	    var qx, a = this.formToArray(options.semantic, elements);
	    if (options.data) {
	        options.extraData = options.data;
	        qx = $.param(options.data, traditional);
	    }

	    // give pre-submit callback an opportunity to abort the submit
	    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
	        log('ajaxSubmit: submit aborted via beforeSubmit callback');
	        return this;
	    }

	    // fire vetoable 'validate' event
	    this.trigger('form-submit-validate', [a, this, options, veto]);
	    if (veto.veto) {
	        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
	        return this;
	    }

	    var q = $.param(a, traditional);
	    if (qx) {
	        q = ( q ? (q + '&' + qx) : qx );
	    }
	    if (options.type.toUpperCase() == 'GET') {
	        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
	        options.data = null;  // data is null for 'get'
	    }
	    else {
	        options.data = q; // data is the query string for 'post'
	    }

	    var callbacks = [];
	    if (options.resetForm) {
	        callbacks.push(function() { $form.resetForm(); });
	    }
	    if (options.clearForm) {
	        callbacks.push(function() { $form.clearForm(options.includeHidden); });
	    }

	    // perform a load on the target only if dataType is not provided
	    if (!options.dataType && options.target) {
	        var oldSuccess = options.success || function(){};
	        callbacks.push(function(data) {
	            var fn = options.replaceTarget ? 'replaceWith' : 'html';
	            $(options.target)[fn](data).each(oldSuccess, arguments);
	        });
	    }
	    else if (options.success) {
	        callbacks.push(options.success);
	    }

	    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
	        var context = options.context || this ;    // jQuery 1.4+ supports scope context
	        for (var i=0, max=callbacks.length; i < max; i++) {
	            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
	        }
	    };

	    // are there files to upload?

	    // [value] (issue #113), also see comment:
	    // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
	    var fileInputs = $('input[type=file]:enabled[value!=""]', this);

	    var hasFileInputs = fileInputs.length > 0;
	    var mp = 'multipart/form-data';
	    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

	    var fileAPI = feature.fileapi && feature.formdata;
	    log("fileAPI :" + fileAPI);
	    var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

	    var jqxhr;

	    // options.iframe allows user to force iframe mode
	    // 06-NOV-09: now defaulting to iframe mode if file input is detected
	    if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
	        // hack to fix Safari hang (thanks to Tim Molendijk for this)
	        // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
	        if (options.closeKeepAlive) {
	            $.get(options.closeKeepAlive, function() {
	                jqxhr = fileUploadIframe(a);
	            });
	        }
	        else {
	            jqxhr = fileUploadIframe(a);
	        }
	    }
	    else if ((hasFileInputs || multipart) && fileAPI) {
	        jqxhr = fileUploadXhr(a);
	    }
	    else {
	        jqxhr = $.ajax(options);
	    }

	    $form.removeData('jqxhr').data('jqxhr', jqxhr);

	    // clear element array
	    for (var k=0; k < elements.length; k++)
	        elements[k] = null;

	    // fire 'notify' event
	    this.trigger('form-submit-notify', [this, options]);
	    return this;

	    // utility fn for deep serialization
	    function deepSerialize(extraData){
	        var serialized = $.param(extraData).split('&');
	        var len = serialized.length;
	        var result = [];
	        var i, part;
	        for (i=0; i < len; i++) {
	            // #252; undo param space replacement
	            serialized[i] = serialized[i].replace(/\+/g,' ');
	            part = serialized[i].split('=');
	            // #278; use array instead of object storage, favoring array serializations
	            result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
	        }
	        return result;
	    }

	     // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
	    function fileUploadXhr(a) {
	        var formdata = new FormData();

	        for (var i=0; i < a.length; i++) {
	            formdata.append(a[i].name, a[i].value);
	        }

	        if (options.extraData) {
	            var serializedData = deepSerialize(options.extraData);
	            for (i=0; i < serializedData.length; i++)
	                if (serializedData[i])
	                    formdata.append(serializedData[i][0], serializedData[i][1]);
	        }

	        options.data = null;

	        var s = $.extend(true, {}, $.ajaxSettings, options, {
	            contentType: false,
	            processData: false,
	            cache: false,
	            type: method || 'POST'
	        });

	        if (options.uploadProgress) {
	            // workaround because jqXHR does not expose upload property
	            s.xhr = function() {
	                var xhr = jQuery.ajaxSettings.xhr();
	                if (xhr.upload) {
	                    xhr.upload.addEventListener('progress', function(event) {
	                        var percent = 0;
	                        var position = event.loaded || event.position; /*event.position is deprecated*/
	                        var total = event.total;
	                        if (event.lengthComputable) {
	                            percent = Math.ceil(position / total * 100);
	                        }
	                        options.uploadProgress(event, position, total, percent);
	                    }, false);
	                }
	                return xhr;
	            };
	        }

	        s.data = null;
	            var beforeSend = s.beforeSend;
	            s.beforeSend = function(xhr, o) {
	                o.data = formdata;
	                if(beforeSend)
	                    beforeSend.call(this, xhr, o);
	        };
	        return $.ajax(s);
	    }

	    // private function for handling file uploads (hat tip to YAHOO!)
	    function fileUploadIframe(a) {
	        var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
	        var deferred = $.Deferred();

	        if (a) {
	            // ensure that every serialized input is still enabled
	            for (i=0; i < elements.length; i++) {
	                el = $(elements[i]);
	                if ( hasProp )
	                    el.prop('disabled', false);
	                else
	                    el.removeAttr('disabled');
	            }
	        }

	        s = $.extend(true, {}, $.ajaxSettings, options);
	        s.context = s.context || s;
	        id = 'jqFormIO' + (new Date().getTime());
	        if (s.iframeTarget) {
	            $io = $(s.iframeTarget);
	            n = $io.attr2('name');
	            if (!n)
	                 $io.attr2('name', id);
	            else
	                id = n;
	        }
	        else {
	            $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
	            $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
	        }
	        io = $io[0];


	        xhr = { // mock object
	            aborted: 0,
	            responseText: null,
	            responseXML: null,
	            status: 0,
	            statusText: 'n/a',
	            getAllResponseHeaders: function() {},
	            getResponseHeader: function() {},
	            setRequestHeader: function() {},
	            abort: function(status) {
	                var e = (status === 'timeout' ? 'timeout' : 'aborted');
	                log('aborting upload... ' + e);
	                this.aborted = 1;

	                try { // #214, #257
	                    if (io.contentWindow.document.execCommand) {
	                        io.contentWindow.document.execCommand('Stop');
	                    }
	                }
	                catch(ignore) {}

	                $io.attr('src', s.iframeSrc); // abort op in progress
	                xhr.error = e;
	                if (s.error)
	                    s.error.call(s.context, xhr, e, status);
	                if (g)
	                    $.event.trigger("ajaxError", [xhr, s, e]);
	                if (s.complete)
	                    s.complete.call(s.context, xhr, e);
	            }
	        };

	        g = s.global;
	        // trigger ajax global events so that activity/block indicators work like normal
	        if (g && 0 === $.active++) {
	            $.event.trigger("ajaxStart");
	        }
	        if (g) {
	            $.event.trigger("ajaxSend", [xhr, s]);
	        }

	        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
	            if (s.global) {
	                $.active--;
	            }
	            deferred.reject();
	            return deferred;
	        }
	        if (xhr.aborted) {
	            deferred.reject();
	            return deferred;
	        }

	        // add submitting element to data if we know it
	        sub = form.clk;
	        if (sub) {
	            n = sub.name;
	            if (n && !sub.disabled) {
	                s.extraData = s.extraData || {};
	                s.extraData[n] = sub.value;
	                if (sub.type == "image") {
	                    s.extraData[n+'.x'] = form.clk_x;
	                    s.extraData[n+'.y'] = form.clk_y;
	                }
	            }
	        }

	        var CLIENT_TIMEOUT_ABORT = 1;
	        var SERVER_ABORT = 2;
	                
	        function getDoc(frame) {
	            /* it looks like contentWindow or contentDocument do not
	             * carry the protocol property in ie8, when running under ssl
	             * frame.document is the only valid response document, since
	             * the protocol is know but not on the other two objects. strange?
	             * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
	             */
	            
	            var doc = null;
	            
	            // IE8 cascading access check
	            try {
	                if (frame.contentWindow) {
	                    doc = frame.contentWindow.document;
	                }
	            } catch(err) {
	                // IE8 access denied under ssl & missing protocol
	                log('cannot get iframe.contentWindow document: ' + err);
	            }

	            if (doc) { // successful getting content
	                return doc;
	            }

	            try { // simply checking may throw in ie8 under ssl or mismatched protocol
	                doc = frame.contentDocument ? frame.contentDocument : frame.document;
	            } catch(err) {
	                // last attempt
	                log('cannot get iframe.contentDocument: ' + err);
	                doc = frame.document;
	            }
	            return doc;
	        }

	        // Rails CSRF hack (thanks to Yvan Barthelemy)
	        var csrf_token = $('meta[name=csrf-token]').attr('content');
	        var csrf_param = $('meta[name=csrf-param]').attr('content');
	        if (csrf_param && csrf_token) {
	            s.extraData = s.extraData || {};
	            s.extraData[csrf_param] = csrf_token;
	        }

	        // take a breath so that pending repaints get some cpu time before the upload starts
	        function doSubmit() {
	            // make sure form attrs are set
	            var t = $form.attr2('target'), a = $form.attr2('action');

	            // update form attrs in IE friendly way
	            form.setAttribute('target',id);
	            if (!method) {
	                form.setAttribute('method', 'POST');
	            }
	            if (a != s.url) {
	                form.setAttribute('action', s.url);
	            }

	            // ie borks in some cases when setting encoding
	            if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
	                $form.attr({
	                    encoding: 'multipart/form-data',
	                    enctype:  'multipart/form-data'
	                });
	            }

	            // support timout
	            if (s.timeout) {
	                timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
	            }

	            // look for server aborts
	            function checkState() {
	                try {
	                    var state = getDoc(io).readyState;
	                    log('state = ' + state);
	                    if (state && state.toLowerCase() == 'uninitialized')
	                        setTimeout(checkState,50);
	                }
	                catch(e) {
	                    log('Server abort: ' , e, ' (', e.name, ')');
	                    cb(SERVER_ABORT);
	                    if (timeoutHandle)
	                        clearTimeout(timeoutHandle);
	                    timeoutHandle = undefined;
	                }
	            }

	            // add "extra" data to form if provided in options
	            var extraInputs = [];
	            try {
	                if (s.extraData) {
	                    for (var n in s.extraData) {
	                        if (s.extraData.hasOwnProperty(n)) {
	                           // if using the $.param format that allows for multiple values with the same name
	                           if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
	                               extraInputs.push(
	                               $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
	                                   .appendTo(form)[0]);
	                           } else {
	                               extraInputs.push(
	                               $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
	                                   .appendTo(form)[0]);
	                           }
	                        }
	                    }
	                }

	                if (!s.iframeTarget) {
	                    // add iframe to doc and submit the form
	                    $io.appendTo('body');
	                    if (io.attachEvent)
	                        io.attachEvent('onload', cb);
	                    else
	                        io.addEventListener('load', cb, false);
	                }
	                setTimeout(checkState,15);

	                try {
	                    form.submit();
	                } catch(err) {
	                    // just in case form has element with name/id of 'submit'
	                    var submitFn = document.createElement('form').submit;
	                    submitFn.apply(form);
	                }
	            }
	            finally {
	                // reset attrs and remove "extra" input elements
	                form.setAttribute('action',a);
	                if(t) {
	                    form.setAttribute('target', t);
	                } else {
	                    $form.removeAttr('target');
	                }
	                $(extraInputs).remove();
	            }
	        }

	        if (s.forceSync) {
	            doSubmit();
	        }
	        else {
	            setTimeout(doSubmit, 10); // this lets dom updates render
	        }

	        var data, doc, domCheckCount = 50, callbackProcessed;

	        function cb(e) {
	            if (xhr.aborted || callbackProcessed) {
	                return;
	            }
	            
	            doc = getDoc(io);
	            if(!doc) {
	                log('cannot access response document');
	                e = SERVER_ABORT;
	            }
	            if (e === CLIENT_TIMEOUT_ABORT && xhr) {
	                xhr.abort('timeout');
	                deferred.reject(xhr, 'timeout');
	                return;
	            }
	            else if (e == SERVER_ABORT && xhr) {
	                xhr.abort('server abort');
	                deferred.reject(xhr, 'error', 'server abort');
	                return;
	            }

	            if (!doc || doc.location.href == s.iframeSrc) {
	                // response not received yet
	                if (!timedOut)
	                    return;
	            }
	            if (io.detachEvent)
	                io.detachEvent('onload', cb);
	            else
	                io.removeEventListener('load', cb, false);

	            var status = 'success', errMsg;
	            try {
	                if (timedOut) {
	                    throw 'timeout';
	                }

	                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
	                log('isXml='+isXml);
	                if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
	                    if (--domCheckCount) {
	                        // in some browsers (Opera) the iframe DOM is not always traversable when
	                        // the onload callback fires, so we loop a bit to accommodate
	                        log('requeing onLoad callback, DOM not available');
	                        setTimeout(cb, 250);
	                        return;
	                    }
	                    // let this fall through because server response could be an empty document
	                    //log('Could not access iframe DOM after mutiple tries.');
	                    //throw 'DOMException: not available';
	                }

	                //log('response detected');
	                var docRoot = doc.body ? doc.body : doc.documentElement;
	                xhr.responseText = docRoot ? docRoot.innerHTML : null;
	                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
	                if (isXml)
	                    s.dataType = 'xml';
	                xhr.getResponseHeader = function(header){
	                    var headers = {'content-type': s.dataType};
	                    return headers[header];
	                };
	                // support for XHR 'status' & 'statusText' emulation :
	                if (docRoot) {
	                    xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
	                    xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
	                }

	                var dt = (s.dataType || '').toLowerCase();
	                var scr = /(json|script|text)/.test(dt);
	                if (scr || s.textarea) {
	                    // see if user embedded response in textarea
	                    var ta = doc.getElementsByTagName('textarea')[0];
	                    if (ta) {
	                        xhr.responseText = ta.value;
	                        // support for XHR 'status' & 'statusText' emulation :
	                        xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
	                        xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
	                    }
	                    else if (scr) {
	                        // account for browsers injecting pre around json response
	                        var pre = doc.getElementsByTagName('pre')[0];
	                        var b = doc.getElementsByTagName('body')[0];
	                        if (pre) {
	                            xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
	                        }
	                        else if (b) {
	                            xhr.responseText = b.textContent ? b.textContent : b.innerText;
	                        }
	                    }
	                }
	                else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
	                    xhr.responseXML = toXml(xhr.responseText);
	                }

	                try {
	                    data = httpData(xhr, dt, s);
	                }
	                catch (err) {
	                    status = 'parsererror';
	                    xhr.error = errMsg = (err || status);
	                }
	            }
	            catch (err) {
	                log('error caught: ',err);
	                status = 'error';
	                xhr.error = errMsg = (err || status);
	            }

	            if (xhr.aborted) {
	                log('upload aborted');
	                status = null;
	            }

	            if (xhr.status) { // we've set xhr.status
	                status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
	            }

	            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
	            if (status === 'success') {
	                if (s.success)
	                    s.success.call(s.context, data, 'success', xhr);
	                deferred.resolve(xhr.responseText, 'success', xhr);
	                if (g)
	                    $.event.trigger("ajaxSuccess", [xhr, s]);
	            }
	            else if (status) {
	                if (errMsg === undefined)
	                    errMsg = xhr.statusText;
	                if (s.error)
	                    s.error.call(s.context, xhr, status, errMsg);
	                deferred.reject(xhr, 'error', errMsg);
	                if (g)
	                    $.event.trigger("ajaxError", [xhr, s, errMsg]);
	            }

	            if (g)
	                $.event.trigger("ajaxComplete", [xhr, s]);

	            if (g && ! --$.active) {
	                $.event.trigger("ajaxStop");
	            }

	            if (s.complete)
	                s.complete.call(s.context, xhr, status);

	            callbackProcessed = true;
	            if (s.timeout)
	                clearTimeout(timeoutHandle);

	            // clean up
	            setTimeout(function() {
	                if (!s.iframeTarget)
	                    $io.remove();
	                xhr.responseXML = null;
	            }, 100);
	        }

	        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
	            if (window.ActiveXObject) {
	                doc = new ActiveXObject('Microsoft.XMLDOM');
	                doc.async = 'false';
	                doc.loadXML(s);
	            }
	            else {
	                doc = (new DOMParser()).parseFromString(s, 'text/xml');
	            }
	            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
	        };
	        var parseJSON = $.parseJSON || function(s) {
	            /*jslint evil:true */
	            return window['eval']('(' + s + ')');
	        };

	        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

	            var ct = xhr.getResponseHeader('content-type') || '',
	                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
	                data = xml ? xhr.responseXML : xhr.responseText;

	            if (xml && data.documentElement.nodeName === 'parsererror') {
	                if ($.error)
	                    $.error('parsererror');
	            }
	            if (s && s.dataFilter) {
	                data = s.dataFilter(data, type);
	            }
	            if (typeof data === 'string') {
	                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
	                    data = parseJSON(data);
	                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
	                    $.globalEval(data);
	                }
	            }
	            return data;
	        };

	        return deferred;
	    }
	};

	/**
	 * ajaxForm() provides a mechanism for fully automating form submission.
	 *
	 * The advantages of using this method instead of ajaxSubmit() are:
	 *
	 * 1: This method will include coordinates for <input type="image" /> elements (if the element
	 *    is used to submit the form).
	 * 2. This method will include the submit element's name/value data (for the element that was
	 *    used to submit the form).
	 * 3. This method binds the submit() method to the form for you.
	 *
	 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
	 * passes the options argument along after properly binding events for submit elements and
	 * the form itself.
	 */
	$.fn.ajaxForm = function(options) {
	    options = options || {};
	    options.delegation = options.delegation && $.isFunction($.fn.on);

	    // in jQuery 1.3+ we can fix mistakes with the ready state
	    if (!options.delegation && this.length === 0) {
	        var o = { s: this.selector, c: this.context };
	        if (!$.isReady && o.s) {
	            log('DOM not ready, queuing ajaxForm');
	            $(function() {
	                $(o.s,o.c).ajaxForm(options);
	            });
	            return this;
	        }
	        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
	        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
	        return this;
	    }

	    if ( options.delegation ) {
	        $(document)
	            .off('submit.form-plugin', this.selector, doAjaxSubmit)
	            .off('click.form-plugin', this.selector, captureSubmittingElement)
	            .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
	            .on('click.form-plugin', this.selector, options, captureSubmittingElement);
	        return this;
	    }

	    return this.ajaxFormUnbind()
	        .bind('submit.form-plugin', options, doAjaxSubmit)
	        .bind('click.form-plugin', options, captureSubmittingElement);
	};

	// private event handlers
	function doAjaxSubmit(e) {
	    /*jshint validthis:true */
	    var options = e.data;
	    if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
	        e.preventDefault();
	        $(this).ajaxSubmit(options);
	    }
	}

	function captureSubmittingElement(e) {
	    /*jshint validthis:true */
	    var target = e.target;
	    var $el = $(target);
	    if (!($el.is("[type=submit],[type=image]"))) {
	        // is this a child element of the submit el?  (ex: a span within a button)
	        var t = $el.closest('[type=submit]');
	        if (t.length === 0) {
	            return;
	        }
	        target = t[0];
	    }
	    var form = this;
	    form.clk = target;
	    if (target.type == 'image') {
	        if (e.offsetX !== undefined) {
	            form.clk_x = e.offsetX;
	            form.clk_y = e.offsetY;
	        } else if (typeof $.fn.offset == 'function') {
	            var offset = $el.offset();
	            form.clk_x = e.pageX - offset.left;
	            form.clk_y = e.pageY - offset.top;
	        } else {
	            form.clk_x = e.pageX - target.offsetLeft;
	            form.clk_y = e.pageY - target.offsetTop;
	        }
	    }
	    // clear form vars
	    setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
	}


	// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
	$.fn.ajaxFormUnbind = function() {
	    return this.unbind('submit.form-plugin click.form-plugin');
	};

	/**
	 * formToArray() gathers form element data into an array of objects that can
	 * be passed to any of the following ajax functions: $.get, $.post, or load.
	 * Each object in the array has both a 'name' and 'value' property.  An example of
	 * an array for a simple login form might be:
	 *
	 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
	 *
	 * It is this array that is passed to pre-submit callback functions provided to the
	 * ajaxSubmit() and ajaxForm() methods.
	 */
	$.fn.formToArray = function(semantic, elements) {
	    var a = [];
	    if (this.length === 0) {
	        return a;
	    }

	    var form = this[0];
	    var els = semantic ? form.getElementsByTagName('*') : form.elements;
	    if (!els) {
	        return a;
	    }

	    var i,j,n,v,el,max,jmax;
	    for(i=0, max=els.length; i < max; i++) {
	        el = els[i];
	        n = el.name;
	        if (!n || el.disabled) {
	            continue;
	        }

	        if (semantic && form.clk && el.type == "image") {
	            // handle image inputs on the fly when semantic == true
	            if(form.clk == el) {
	                a.push({name: n, value: $(el).val(), type: el.type });
	                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
	            }
	            continue;
	        }

	        v = $.fieldValue(el, true);
	        if (v && v.constructor == Array) {
	            if (elements)
	                elements.push(el);
	            for(j=0, jmax=v.length; j < jmax; j++) {
	                a.push({name: n, value: v[j]});
	            }
	        }
	        else if (feature.fileapi && el.type == 'file') {
	            if (elements)
	                elements.push(el);
	            var files = el.files;
	            if (files.length) {
	                for (j=0; j < files.length; j++) {
	                    a.push({name: n, value: files[j], type: el.type});
	                }
	            }
	            else {
	                // #180
	                a.push({ name: n, value: '', type: el.type });
	            }
	        }
	        else if (v !== null && typeof v != 'undefined') {
	            if (elements)
	                elements.push(el);
	            a.push({name: n, value: v, type: el.type, required: el.required});
	        }
	    }

	    if (!semantic && form.clk) {
	        // input type=='image' are not found in elements array! handle it here
	        var $input = $(form.clk), input = $input[0];
	        n = input.name;
	        if (n && !input.disabled && input.type == 'image') {
	            a.push({name: n, value: $input.val()});
	            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
	        }
	    }
	    return a;
	};

	/**
	 * Serializes form data into a 'submittable' string. This method will return a string
	 * in the format: name1=value1&amp;name2=value2
	 */
	$.fn.formSerialize = function(semantic) {
	    //hand off to jQuery.param for proper encoding
	    return $.param(this.formToArray(semantic));
	};

	/**
	 * Serializes all field elements in the jQuery object into a query string.
	 * This method will return a string in the format: name1=value1&amp;name2=value2
	 */
	$.fn.fieldSerialize = function(successful) {
	    var a = [];
	    this.each(function() {
	        var n = this.name;
	        if (!n) {
	            return;
	        }
	        var v = $.fieldValue(this, successful);
	        if (v && v.constructor == Array) {
	            for (var i=0,max=v.length; i < max; i++) {
	                a.push({name: n, value: v[i]});
	            }
	        }
	        else if (v !== null && typeof v != 'undefined') {
	            a.push({name: this.name, value: v});
	        }
	    });
	    //hand off to jQuery.param for proper encoding
	    return $.param(a);
	};

	/**
	 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
	 *
	 *  <form><div class="fieldset">
	 *      <input name="A" type="text" />
	 *      <input name="A" type="text" />
	 *      <input name="B" type="checkbox" value="B1" />
	 *      <input name="B" type="checkbox" value="B2"/>
	 *      <input name="C" type="radio" value="C1" />
	 *      <input name="C" type="radio" value="C2" />
	 *  </div></form>
	 *
	 *  var v = $('input[type=text]').fieldValue();
	 *  // if no values are entered into the text inputs
	 *  v == ['','']
	 *  // if values entered into the text inputs are 'foo' and 'bar'
	 *  v == ['foo','bar']
	 *
	 *  var v = $('input[type=checkbox]').fieldValue();
	 *  // if neither checkbox is checked
	 *  v === undefined
	 *  // if both checkboxes are checked
	 *  v == ['B1', 'B2']
	 *
	 *  var v = $('input[type=radio]').fieldValue();
	 *  // if neither radio is checked
	 *  v === undefined
	 *  // if first radio is checked
	 *  v == ['C1']
	 *
	 * The successful argument controls whether or not the field element must be 'successful'
	 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
	 * The default value of the successful argument is true.  If this value is false the value(s)
	 * for each element is returned.
	 *
	 * Note: This method *always* returns an array.  If no valid value can be determined the
	 *    array will be empty, otherwise it will contain one or more values.
	 */
	$.fn.fieldValue = function(successful) {
	    for (var val=[], i=0, max=this.length; i < max; i++) {
	        var el = this[i];
	        var v = $.fieldValue(el, successful);
	        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
	            continue;
	        }
	        if (v.constructor == Array)
	            $.merge(val, v);
	        else
	            val.push(v);
	    }
	    return val;
	};

	/**
	 * Returns the value of the field element.
	 */
	$.fieldValue = function(el, successful) {
	    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
	    if (successful === undefined) {
	        successful = true;
	    }

	    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
	        (t == 'checkbox' || t == 'radio') && !el.checked ||
	        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
	        tag == 'select' && el.selectedIndex == -1)) {
	            return null;
	    }

	    if (tag == 'select') {
	        var index = el.selectedIndex;
	        if (index < 0) {
	            return null;
	        }
	        var a = [], ops = el.options;
	        var one = (t == 'select-one');
	        var max = (one ? index+1 : ops.length);
	        for(var i=(one ? index : 0); i < max; i++) {
	            var op = ops[i];
	            if (op.selected) {
	                var v = op.value;
	                if (!v) { // extra pain for IE...
	                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
	                }
	                if (one) {
	                    return v;
	                }
	                a.push(v);
	            }
	        }
	        return a;
	    }
	    return $(el).val();
	};

	/**
	 * Clears the form data.  Takes the following actions on the form's input fields:
	 *  - input text fields will have their 'value' property set to the empty string
	 *  - select elements will have their 'selectedIndex' property set to -1
	 *  - checkbox and radio inputs will have their 'checked' property set to false
	 *  - inputs of type submit, button, reset, and hidden will *not* be effected
	 *  - button elements will *not* be effected
	 */
	$.fn.clearForm = function(includeHidden) {
	    return this.each(function() {
	        $('input,select,textarea', this).clearFields(includeHidden);
	    });
	};

	/**
	 * Clears the selected form elements.
	 */
	$.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
	    var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
	    return this.each(function() {
	        var t = this.type, tag = this.tagName.toLowerCase();
	        if (re.test(t) || tag == 'textarea') {
	            this.value = '';
	        }
	        else if (t == 'checkbox' || t == 'radio') {
	            this.checked = false;
	        }
	        else if (tag == 'select') {
	            this.selectedIndex = -1;
	        }
			else if (t == "file") {
				if (/MSIE/.test(navigator.userAgent)) {
					$(this).replaceWith($(this).clone(true));
				} else {
					$(this).val('');
				}
			}
	        else if (includeHidden) {
	            // includeHidden can be the value true, or it can be a selector string
	            // indicating a special test; for example:
	            //  $('#myForm').clearForm('.special:hidden')
	            // the above would clean hidden inputs that have the class of 'special'
	            if ( (includeHidden === true && /hidden/.test(t)) ||
	                 (typeof includeHidden == 'string' && $(this).is(includeHidden)) )
	                this.value = '';
	        }
	    });
	};

	/**
	 * Resets the form data.  Causes all form elements to be reset to their original value.
	 */
	$.fn.resetForm = function() {
	    return this.each(function() {
	        // guard against an input with the name of 'reset'
	        // note that IE reports the reset function as an 'object'
	        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
	            this.reset();
	        }
	    });
	};

	/**
	 * Enables or disables any matching elements.
	 */
	$.fn.enable = function(b) {
	    if (b === undefined) {
	        b = true;
	    }
	    return this.each(function() {
	        this.disabled = !b;
	    });
	};

	/**
	 * Checks/unchecks any matching checkboxes or radio buttons and
	 * selects/deselects and matching option elements.
	 */
	$.fn.selected = function(select) {
	    if (select === undefined) {
	        select = true;
	    }
	    return this.each(function() {
	        var t = this.type;
	        if (t == 'checkbox' || t == 'radio') {
	            this.checked = select;
	        }
	        else if (this.tagName.toLowerCase() == 'option') {
	            var $sel = $(this).parent('select');
	            if (select && $sel[0] && $sel[0].type == 'select-one') {
	                // deselect all other options
	                $sel.find('option').selected(false);
	            }
	            this.selected = select;
	        }
	    });
	};

	// expose debug var
	$.fn.ajaxSubmit.debug = false;

	// helper fn for console logging
	function log() {
	    if (!$.fn.ajaxSubmit.debug)
	        return;
	    var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
	    if (window.console && window.console.log) {
	        
	    }
	    else if (window.opera && window.opera.postError) {
	        window.opera.postError(msg);
	    }
	}

	})(jQuery);

	;(function($) {
		

		var uploadFileOnClick = function(element, config) {
			this.enablearea = false;
	        this.widget = config.widget;
	        this.component = config.widget.component;
	        this.configuratedRequest = null;

	        var self = this;

	        


			this.build = function() {
				var that = this;
				
				// init config
				this.config = $.extend({
					onSuccess : function() {
						
					},
					onError : function() {
						
					},
					beforeSubmit : function() {
						
					}
				}, (config || {}));
				
				this.wrappers = {
					element: element
				};

	            this.component.$fetch(['$config.url','$config.type','$config.requests.upload'], function(url, type, uploadCfg) {
	                // Mix default request with user request
	                
	                var parsedUserRequest = self.widget.parseUserRequest(uploadCfg);
	                that.configuratedRequest = $.extend({
	                    url: url,
	                    type: type,
	                    dataType: 'json',
	                    data: {}
	                }, parsedUserRequest);

	                that.wrappers.hform = $('<form />');
	                $(that.wrappers.hform).attr({
	                    'method': that.configuratedRequest.type,
	                    'action': that.configuratedRequest.url,
	                    'enctype': 'multipart/form-data'
	                });

	                $(that.wrappers.hform).css({
	                    'position': 'absolute'
	                });
	                
	                that.wrappers.fileinput = $('<input />', {
	                    'type': 'file',
	                    'name': 'files'
	                }).appendTo(that.wrappers.hform).change(function() {
	                    $(that.wrappers.hform).submit();
	                    return false;
	                }).css({
	                    'position': 'absolute',
	                    'z-index': 9999999,
	                    'display': 'block',
	                    'opacity': 0
	                });
	                
	                //
	                that.fileinputseld = $(that.wrappers.fileinput)[0];
	            });
			};
			
			this.binds = function() {
				var that = this;
				$(document).bind('mousemove', function(e) {
					if (typeof(that.enablearea) != false) {
						var enablearea = that.enablearea;
						var x = e.pageX;
						var y = e.pageY;
						
						if (
							(x>=enablearea.startx) &&
							(y>=enablearea.starty) &&
							(x<=enablearea.endx) &&
							(y<=enablearea.endy)
						) {
							$(that.wrappers.fileinput).css({
							   left:  x-168,
							   top:   y-3
							});
						} else {
							$(that.wrappers.fileinput).css({
							   left:  '-9999px',
							   top:   '-9999px'
							});
						};
					} else {
						$(that.wrappers.fileinput).css({
						   left:  '-9999px',
						   top:   '-9999px'
						});
					};
				});
					
				$(this.wrappers.element).click(function() {
					$(that.wrappers.fileinput).click();
					return false;
				})
				.bind('mouseenter', function(e) {
					var offset = $(this).offset();
					
					that.enablearea = {
						startx : offset.left,
						starty : offset.top,
						endx : offset.left+$(this).width()+parseInt($(this).css("paddingLeft"))+parseInt($(this).css("paddingRight")),
						endy : offset.top+$(this).height()
					};
						
				});

				var widget = this;

	            this.component.$run(function($config) {
	                $config(['url','type','requests.upload'], function(url, type, uploadCfg) {
	                    // Mix default request with user request
	                    
	                    var parsedUserRequest = self.widget.parseUserRequest(uploadCfg);
	                    var request = $.extend({
	                        url: url,
	                        type: type,
	                        dataType: 'json',
	                        data: {},
	                        success: function(response) 
	                        {
	                            
	                            $(that.wrappers.element).attr("disabled", false).css({
	                                'opacity': 1
	                            });
	                            
	                            that.config.onSuccess(response);
	                        },
	                        error: function(response) 
	                        {
	                            console.error(response.responseText);
	                            
	                            that.config.onError(response);
	                            
	                            $(that.wrappers.element).attr("disabled", false).css({
	                                'opacity': 1
	                            });
	                        },
	                        beforeSubmit: function(formData, jqForm, options) 
	                        {   
	                            
	                            var reconfig = self.widget.parseUserRequest(uploadCfg);

	                            options.extraData = reconfig.data;
	                            
	                            //that.config.beforeSubmit.call(that, formData, jqForm, options);
	                        
	                            $(that.wrappers.element).attr("disabled", true).css({
	                                'opacity': 0.5
	                            });
	                        }
	                    }, parsedUserRequest);

	                    $(that.wrappers.hform).ajaxForm(request);
	                });
	            });
				
			};
			
			this.build();
			this.binds();
		};

	    var FNPROTO = {
	        init : function() {
	            this.seance.location = this.options.location;
	            this.seance.selectedItems = {
	                files: [],
	                folders: []
	            };
	            this.build();
	            this.refresh();
	        },
	        /*
	        Parse each propertie in object for scope variable
	        */
	        parseUserRequest : function(object) {
	            var copy = {}, collectionNames = [], collectionExprs = [];
	            for (var prop in object) {
	                if (object.hasOwnProperty(prop)) {
	                    if (typeof object[prop] ===  "string") {
	                        collectionNames.push(prop);
	                        collectionExprs.push(object[prop]);
	                    } else if (typeof object[prop] === "object") {
	                        copy[prop] = this.parseUserRequest(object[prop]);
	                    } else {
	                        copy[prop] = object[prop];
	                    }
	                }
	            }

	            if (collectionExprs.length>0) {
	                this.$fetch(collectionExprs, function() {
	                    
	                    var results = Array.prototype.slice.apply(arguments);
	                    for (var i = 0;i<results.length;++i) {
	                        copy[collectionNames[i]] = results[i];
	                    }
	                });
	            }

	            return copy;
	        },
	        request : function(data, success, error) {
	            var widget = this;
	            var data = data || {};
	            var success = success || false;

	            this.component.$fetch(['$config.url','$config.type'], function(url, type) {

	                // Mix default request with user request
	                
	                var parsedUserRequest = widget.parseUserRequest(data);
	                var request = $.extend({
	                    url: url,
	                    type: type,
	                    dataType: 'json',
	                    data: {}
	                }, parsedUserRequest);

	                // Add functions
	                // Success callback
	                request.success = function(res) {
	                    if (res) { 
	                        if (res.type==='contents' && res.content) {
	                            ;("function"==typeof success) && (success.call(widget, res.content, res.type)); 
	                        } else {
	                            if (res.errorMsg) widget.alert(res.errorMsg);
	                        }
	                    }
	                    else { widget.throwError('INVALID_SERVER_RESPONSE'); }
	                };
	                // Error callback
	                request.error = function(r) {
	                    console.error('Server response error: ', r.responseText);
	                };

	                $.ajax(request);
	            });
	            
	        },
	        alert : function(msg) {
	            alert(msg);
	        },
	        refresh : function() {
	            var widget = this;
	            this.component.$fetch(['$config.requests.contents'], function(refreshCfg) {

	                widget.request(refreshCfg, function(content, type) {
	                    
	                    if (type==='contents') {
	                        widget.data = content; 
	                    } else {
	                        widget.data = {};
	                    }

	                    widget.updateView();

	                    
	                }, function(r) {
	                    console.error('Server response error: ', r.responseText);
	                });
	            });
	            
	            // Set location
	            this.redrawLocation();
	            
	        },
	        build : function() {
	            var widget = this;
	            // Topbar
	            this.wrappers.header = $(this.wrapper)
	            .put($('<div />', {
	                "class": "nt-filemanager-header"
	            }));
	            // Create main area
	            this.buildLocation();
	            this.buildControls();   
	            
	            this.buildArea();
	        },
	        buildControls : function() {
	            var widget = this;
	            // Create controls
	            var addCaption = 'Добавить изображение с '+(navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? 'моего Mac`а' : 'компьютера');
	            // New folder area
	            this.wrappers.addArea = $(this.wrappers.header)
	            .put($("<div />", {
	                "class": "add-area"
	            }))
	            /*
	            .put($("<div />", {
	                "class": "add-area-section add-area-section-box pointable"
	            }))
	            .tie(function() {
	                $(this).put($('<figure />', {
	                    "class": ""
	                }))
	                .html('<div class="icon icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sm-add-folder-icon"></use></svg></div><figcaption><span class="capitalized">Новая папка</span></figcaption>')
	                
	                
	            })
	            .click(function() {
	                widget.createFolder();
	                return false;
	            })

	            // Use it
	            */
	            .put($("<div />", {
	                "class": "add-area-section add-area-section-box pointable"
	            }))
	            .tie(function() {
	                $(this).put($('<figure />', {
	                    "class": "are-box-standalone"
	                }))
	                .html('<div class="icon icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sm-checked"></use></svg></div>');
	                 widget.bindUploadFile(this);

	                 var element = this;
	                 widget.$fetch(['+seance.selectedItems.files.length>0'], function(isSrc) {
	                    $(element)[isSrc ? 'show' : 'hide']();
	                 });
	            })
	            // Delete
	            .and($("<div />", {
	                "class": "add-area-section add-area-section-box pointable"
	            }))
	            .tie(function() {
	                $(this).put($('<figure />', {
	                    "class": "are-box-standalone"
	                }))
	                .html('<div class="icon icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sm-delete-icon"></use></svg></div>')
	                
	                var element = this;
	                
	                widget.$fetch(['+this.seance.mode', '+seance.selectedItems.files.length||seance.selectedItems.folders.length'], function(mode, isSelected) {
	                    
	                    $(element)[mode=='select'&&isSelected ? 'show' : 'hide']();
	                });

	                $(this).click(function() {
	                    widget.deleteDialog();
	                    return false;
	                })
	            })
	            // Ditails
	            .and($("<div />", {
	                "class": "add-area-section add-area-section-wide"
	            }))
	            .tie(function() {
	                var element = this;
	                widget.wrappers.dialog = $(this).put($('<figure />', {
	                    "class": ""
	                }))
	                .put($('<figcaption />'))
	                .put($('<span />'))
	                .tie(function() {

	                    widget.wrappers.ditailsText = $(this).put('<i />')
	                    .html('File info');

	                    

	                    /*$(this).put($('<button />', {
	                        "type": "button"
	                    })).html('yes').click(function() {
	                        if ("function"===typeof widget.dialogData.yes) widget.dialogData.yes();
	                    });*/

	                    widget.$fetch(['+seance.selectedItems.files.length===1&&seance.selectedItems.folders.length===0'], function(isSrc) {
	                        
	                        $(element)[isSrc ? 'show' : 'hide']();
	                        $(widget.wrappers.ditailsText).html('File: <b>'+widget.seance.selectedItems.files[0]+'</b>');
	                        //element[mode=='dialog'?'addClass':'removeClass']("active");
	                     });
	                });
	            })
	            // Add area
	            .and($("<div />", {
	                "class": "add-area-section pointable add-area-section-buttoned add-area-mobile-compactable"
	            }))
	            .tie(function() {
	                $(this).put($('<figure />', {
	                    "class": ""
	                }))
	                .html('<div class="icon icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ei-camera-icon"></use></svg></div>')
	                .put($("<figcaption />"))
	                .put($("<span />", {
	                    "class": "capitalized"
	                }))
	                .html(addCaption)
	                .tie(function() {
	                    // Enable/disable text
	                    var element = this;
	                    widget.$fetch(["+!(seance.selectedItems.files.length||seance.selectedItems.folders.length)"], function(enabled) {
	                        $(element)[enabled ? 'show' : 'hide']();
	                    });
	                });
	                 widget.bindUploadFile(this);

	                 var element = this;
	                 widget.$fetch('+this.seance.mode=="preview"', 
	                    function(isSelected) {
	                    $(element)[isSelected ? 'show' : 'hide']();
	                 });
	            })
	            
	            // Info table
	            .and($("<div />", {
	                "class": "add-area-section"
	            }))
	            .tie(function() {
	                var span = $(this).put($('<figure />', {
	                    "class": ""
	                }))
	                .put($('<figcaption />'))
	                .put($('<span />'));

	                 var element = this;
	                 widget.$fetch(['+seance.mode=="select"&&(seance.selectedItems.files.length!=1||seance.selectedItems.folders.length>0)', '+seance.selectedItems.files.length','+seance.selectedItems.folders.length'], function(allowed, filesCount, foldersCount) {
	                    
	                    $(element)[allowed ? 'show' : 'hide']();
	                    $(span).html(
	                        foldersCount||filesCount ?
	                        'Selected <b>'+(foldersCount ? foldersCount+'</b> folders' : '</b>')+(filesCount ? (foldersCount ? ' and <b>' : '<b>')+filesCount+'</b> files' : '')
	                        : 'Select items'
	                    );
	                 });


	            })
	            
	            // Dealog
	            .and($("<div />", {
	                "class": "add-area-section"
	            }))
	            .tie(function() {
	                var element = this;
	                widget.wrappers.dialog = $(this).put($('<figure />', {
	                    "class": ""
	                }))
	                .put($('<figcaption />'))
	                .put($('<span />'))
	                .tie(function() {

	                    widget.wrappers.dialogText = $(this).put('<i />');

	                    widget.wrappers.dialogCancel = $(this).put($('<button />', {
	                        "type": "button"
	                    })).html('cancel').click(function() {
	                        if ("function"===typeof widget.dialogData.no) widget.dialogData.no();
	                    });

	                    $(this).put($('<button />', {
	                        "type": "button"
	                    })).html('yes').click(function() {
	                        if ("function"===typeof widget.dialogData.yes) widget.dialogData.yes();
	                    });

	                    widget.$fetch(['+this.seance.mode'], function(mode) {
	                        
	                        $(element)[mode=='dialog' ? 'show' : 'hide']();
	                        //element[mode=='dialog'?'addClass':'removeClass']("active");
	                     });
	                });
	            })
	            
	            .and($("<div />", {
	                "class": "add-area-section add-area-section-box pointable"
	            }))
	            .tie(function() {
	                $(this).put($('<figure />', {
	                    "class": "are-box-standalone"
	                }))
	                .html('<div class="icon icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ei-navicon-icon"></use></svg></div>')
	                

	                var element = this;

	                widget.$fetch('+seance.mode=="select"', function(isSelect) {
	                    
	                    element[isSelect?'addClass':'removeClass']("active");

	                });
	            })
	            .click(function() {
	                widget.toogleSelectMode();
	                return false;
	            });
	        },
	        buildLocation : function() {
	            var widget = this;
	            this.wrappers.loc = $(this.wrappers.header)
	            .put($("<div />", {
	                "class": "location"
	            }))
	            .put($('<div />'))
	            .tie(function() {
	                widget.wrappers.location = this;
	                widget.$fetch(['+seance.location'], function(location) {
	                    
	                    $(widget.wrappers.location).empty();
	                    var rootName = 'images';
	                    if ("string"===typeof location) {
	                        if (location.indexOf(location.length-1)=='/') location.substr(0,-1);
	                        var loca = location.split('/').filter(function(val) {
	                            return val!=='';
	                        });

	                        loca.unshift('');
	                        
	                        loca.forEach(function(folder, i) {
	                            
	                            $(widget.wrappers.location).put($('<figure />'))
	                            .condition(i===loca.length-1, function() {
	                                $(this).addClass('current');
	                                return this;
	                            })
	                            .put($('<figcaption />'))
	                            .html(i===0 ? rootName : (folder!='' ? folder : 'empty'))
	                            .and($('<i />'))
	                            .and($('<figcaption />'))
	                            .html(i===0 ? rootName : (folder!='' ? folder : 'empty'))
	                            .click(function() {
	                                widget.changeLocation(loca.slice(1, i+1).join('/'));
	                                return false;
	                            });
	                        });

	                        $(widget.wrappers.location).put($('<figure />', {
	                            "class": "nt-filemanager-location-addIcon"
	                        }))
	                        .click(function() {
	                            widget.createFolder();
	                        })
	                        .put($('<div />'))
	                        .and($('<div />'))
	                        .and($('<figcaption />'))
	                        .html('Add new folder');
	                    }
	                    
	                });
	            });
	        },
	        buildArea : function() {
	            var widget = this;
	            // Build area self
	            this.wrappers.area = $(this.wrapper)
	            .put($('<div />', {
	                "class": "nt-filemanager-body"
	            }))
	            .put($("<ul />", {
	                "class": "filesArea"
	            }))
	            .tie(function() {

	                widget.$fetch(['+seance.mode=="dialog"'], function(isDialog) {

	                    $(widget.wrappers.area)[isDialog ? 'addClass' : 'removeClass']('danger');
	                });
	            });
	        },
	        updateView : function() {
	            var widget = this;
	            // Create folders
	            $(this.wrappers.area)
	            .empty()
	            .tie(function() {
	                
	                // Draw folders
	                $.each(widget.data.folders, function() {
	                    $(widget.wrappers.area)
	                    .put($('<li />', {
	                        "class": "folder",
	                        "rel": this.name
	                    }))
	                    .click(function() {
	                        widget.click($(this));
	                        return false;
	                    })
	                        .put($("<div />", {
	                            "class": "thumb",
	                        }))
	                        .tie(function() {
	                            $(this).put($("<div />"))
	                            .html('<i></i><i></i><i></i>');
	                        })
	                        .and($("<div />", {
	                            "class": "subscribe"
	                        }))
	                        .html(this.name);                          
	                });
	                // Draw files
	                $.each(widget.data.files, function() {
	                    var file = this;
	                    
	                    $(widget.wrappers.area)
	                    .put($('<li />', {
	                        "class": "file image",
	                        "rel": this.name,
	                        "origin": this.origin
	                    }))
	                    .click(function() {
	                        widget.click($(this));
	                        return false;
	                    })
	                        .put($("<div />", {
	                            "class": "thumb"
	                        }))
	                        .click(function() {
	                            widget.previewClick($(this).parent());
	                            return false;
	                        })
	                        .tie(function() {
	                            $(this).put($("<img />", {
	                                "alt": file.name,
	                                "src": file.thumb
	                            }));
	                        })
	                        .and($("<div />", {
	                            "class": "subscribe"
	                        }))
	                        .html(this.name)
	                        
	                });
	                widget.postRender();
	            });
	            
	        },
	        dialog: function(message) {
	            var widget = this;
	            return new Promise(function(resolve, reject) {
	                $(widget.wrappers.dialogText).html(message);
	                $(widget.wrappers.dialogCancel).focus();
	                widget.dialogData.yes = resolve;
	                widget.dialogData.no = function() {
	                    widget.seance.mode = 'select';
	                    widget.$digest();
	                };
	                widget.seance.mode = 'dialog';
	                widget.$digest();
	            });
	        },
	        sendback : function(rel) {
	            if (rel)
	            this.options.receiver({
	                files: [this.getCurrentLocation()+rel],
	                folders: []
	            }); 
	            else {
	                this.options.receiver(this.seance.selectedItems);
	            }
	            this.close();
	            return false;
	        },
	        redrawLocation : function() {
	            this.$digest();
	        },
	        postRender : function() {
	            var widget = this;
	            $(this.wrappers.area).find('div.thumb>img').each(function() {
	                widget.calcThumbSize(this);
	            });
	        },
	        calcThumbSize : function(img) {
	            var img = img;
	            
	            $(img).fitimage({
	                width:110,
	                height:110
	            });
	            
	        },
	        previewClick : function(el) {
	            var widget = this;
	            switch (this.seance.mode) {
	                case 'select':
	                    this.select(el);
	                break;
	                case 'preview':
	                    if ($(el).hasClass('folder')) {
	                        // open folder
	                        widget.appendLocation($(el).attr("rel"));                       
	                    } else {
	                        this.preview(el);
	                    };
	                break;
	            }
	            
	        },
	        click : function(el) {
	            var widget = this;
	            switch(this.seance.mode) {
	                case 'select':
	                    this.select(el);
	                break;
	                case 'preview':
	                    if ($(el).hasClass('folder')) {

	                        // open folder
	                        widget.appendLocation($(el).attr("rel"));                       
	                    }
	                break;
	            }
	        },
	        reset: function() {
	            this.disableSelectionMode();
	            this.resetSelection();
	        },
	        resetSelection: function() {
	            this.seance.selectedItems = {
	                files: [],
	                folders: []
	            };

	            $(this.wrappers.area).find('li.selected').removeClass('selected');
	            this.$digest();
	        },
	        /*
	        Preview file
	        */
	        preview : function(el) {
	            var plugin = this;
	            
	            this.select(el, this.seance.mode==='preview' ? 1 : false);
	        },
	        changeLocation : function(loc) {
	           
	            this.reset();
	            var loc = loc.split('\\').join('/');
	            
	            if (loc.indexOf(0)=='/') loc = loc.substr(1);
	            if (loc.length==1 && loc.substring(-1)=='/') loc = loc.substr(0,-1);
	            
	            if (loc.substring(-1)!=='/') loc += '/';
	            this.seance.location = loc;
	            
	            this.refresh();
	        },
	        appendLocation : function(loc) {

	            this.reset();
	            var loc = loc.split('\\').join('/');

	            if (/^[^\/]+/.test(loc)) {
	                if (loc.indexOf(0)=='/') loc = loc.substr(1);
	                if (loc.length==1 && loc.substring(-1)=='/') loc = loc.substr(0,-1);
	                
	                if (this.seance.location.substring(-1)!=='/') this.seance.location += '/';
	                this.seance.location += loc;
	                
	                this.refresh();
	            }
	        },
	        disableSelectionMode : function() {
	            this.seance.mode = 'preview';
	            $(this.wrappers.area).find('li.selected').removeClass('selected');
	            
	            this.seance.selectedItems = {
	                'folders': [],
	                'files': []
	            };
	            this.recheckSituation();
	        },
	        enableSelectionMode : function() {

	            this.seance.mode = 'select';
	            
	            this.recheckSituation();

	        },
	        toogleSelectMode : function() {
	            if (this.seance.mode == 'select') {
	                this.disableSelectionMode();
	            } else {
	                this.enableSelectionMode();
	            }
	            this.$digest();
	        },
	        select : function(el, totalLimit) {
	            var startStatus = $(el).hasClass('selected');
	            $(el).toggleClass('selected');
	            if ("number"===typeof totalLimit) {
	                
	                var selected = $(this.wrappers.area).find('li.selected');
	                if (selected.length>totalLimit) {
	                    if (!startStatus) var selected = selected.not(el);
	                    selected.slice(0, 1).removeClass("selected");
	                }
	            }
	            

	            this.recheckSituation();
	        },
	        deleteDialog : function() {
	            var message;

	            if (this.seance.selectedItems.folders.length&&this.seance.selectedItems.files.length) {
	                message = 'Are you sure to remove '+this.seance.selectedItems.files.length+' files and '+this.seance.selectedItems.folders.length+' folders with all files inside?';
	            } else if (this.seance.selectedItems.folders.length) {
	                message = 'Are you sure to remove '+this.seance.selectedItems.folders.length+' folders with all files inside?'
	            } else if (this.seance.selectedItems.files.length) {
	                message = 'Are you sure to remove '+this.seance.selectedItems.files.length+' files?'
	            };
	            this.dialog(message, function() {
	                this.deleteSelected();
	                this.disableSelectionMode();
	            }.bind(this), function() {

	            });
	        },
	        deleteSelected : function() {
	            var widget = this;
	            this.component.$fetch(['$config.requests.remove'], function(removeCfg) {
	                widget.request(removeCfg, function() {
	                    widget.refresh();
	                });
	            });
	        },
	        createFolder : function() {
	            var widget = this;
	            this.reset();
	            if (this.seance.dirname = prompt("Укажите имя для новой директории")) {

	                this.component.$fetch(['$config.requests.addFolder'], function(addFolderCfg) {
	                    
	                    widget.request(addFolderCfg, function() {
	                        widget.refresh();
	                    });
	                });
	            }
	        },
	        bindUploadFile : function(el) {
	            var widget = this;
	            new uploadFileOnClick($(el), {
	                widget: this,
	                onSuccess: function(response) {
	                    widget.refresh();
	                }
	            });
	        },
	        recheckSituation : function() {
	            var widget = this;
	            /* Смотрим на выеделенные элементы */
	            this.seance.selectedItems = {
	                'folders': [],
	                'files': []
	            };
	            var cloc = this.getCurrentLocation();

	            $(this.wrappers.area).find('li.selected').each(function() {
	                if ($(this).hasClass("folder"))
	                widget.seance.selectedItems.folders.push(cloc+'/'+$(this).attr("rel"));
	                else
	                widget.seance.selectedItems.files.push(cloc+'/'+$(this).attr("rel"));
	            });
	            
	            
	            this.$digest();
	        },
	        goTop : function() {
	            this.reset();
	            if (this.seance.location=='/') return false;
	            var aloc = this.seance.location.split('/');

	            while (aloc[aloc.length-1]=='' && aloc.length>0) {
	                aloc.pop();
	                console.log('aloc', aloc);
	            }
	            aloc.pop();
	            var loc = aloc.length==0 ? '/' : aloc.join('/');
	            if (loc=='') loc = '/';
	            this.seance.location = loc;
	            this.refresh();
	        },
	        getCurrentLocation : function() {
	            var loc = this.seance.location;
	            if (loc.substr(0,1)==='/') loc = loc.substr(1);
	            if (loc.substr(-1)==='/') loc = loc.substr(0,-1);
	            if (loc.length===1&&loc[0]==='/') loc = '';
	            return loc;
	        }
	    }

		var FN = function(parent, wrapper, options) {
	        window.debug = this;
			this.wrapper = wrapper;
	        this.component = parent;
	        this.dialogData = {
	            yes: function() {},
	            no: function() {}
	        }
			var options = options || {};

			// main data
			this.data = {
				files: [],
				folders: []
			}
			// options
			this.options = $.extend({
				isRoot: true,
				connector: '',
				location: '/',
				receiver: false
			}, options || {});
			// wrappers
			this.wrappers = {
				area: null
			};

			// 
			this.seance = {
				mode: 'preview',
	            dirname: false,
	            location: false
			}

			this.init();
		}

	    FN.prototype = FNPROTO;
	    FN.prototype.constructor = FN;

		$.fn.ntFileManager = $.fn.ntFileManager = function(data, component) {
			

			
			return $(this).each(function() {
	            
	            component.$newScope(FN, [this, data]);
			});
		};

	})(jQuery);

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;