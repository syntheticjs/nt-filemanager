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
			ssvg.innerHTML+='<symbol id="ei-share-apple-icon" viewBox="0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id="ei-arrow-down-icon" viewBox="0 0 50 50"><path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path><path d="M25 34.4l-9.7-9.7 1.4-1.4 8.3 8.3 8.3-8.3 1.4 1.4z"></path><path d="M24 16h2v17h-2z"></path></symbol>';
		});

		$setup({
			connector: 'specify/this/url',
			receiver: false
		});

		$init(function($element, $self, $config) {
			$config(['connector', 'receiver'], function(connector, receiver) {
				$($element).ntFileManager({
					connector: connector,
					receiver: receiver
				});
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
		

		var uploadFileOnClick = function(element, loctarget, config) {
			this.enablearea = false;
			this.loctarget = loctarget;
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
				
				// ñîçäàåì ñêðûòíóþ ôîðìó
				this.wrappers.hform = $('<form />');
				$(this.wrappers.hform).attr({
					'method': 'post',
					'action': this.config.connector,
					'enctype': 'multipart/form-data'
				});
				$(this.wrappers.hform).css({
					'position': 'absolute'
				})
				
				/*, {
					'method': 'post',
					'action': window.$elbora.settings['AJAX_CONNECTOR'],
					'enctype': 'multipart/form-data'
				}).appendTo($('body'))
				.;*/
				
				// 
				/*var hidden = $('<input />', {
					'type': 'hidden',
					'name': 'modifer',
					'value': api.parent.settings.photoUploadModifer
				}).appendTo(this.wrappers.hform);*/
				
				//
				this.wrappers.fileinput = $('<input />', {
					'type': 'file',
					'name': 'files'
				}).appendTo(this.wrappers.hform).change(function() {
					$(that.wrappers.hform).submit();
					return false;
				}).css({
					'position': 'absolute',
					'z-index': 9999999,
					'display': 'block',
					'opacity': 0
				});
				
				//
				this.fileinputseld = $(this.wrappers.fileinput)[0];
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
				
				$(this.wrappers.hform).ajaxForm(
				{
						type: 'post',
						url: this.config.connector,
						data: {
							mode: 'addfile',
							location: '/'
						},
						dataType: 'json',
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
							options.extraData = {
								mode: 'addfile',
								location: loctarget()
							};
							console.log(options.extraData);
							that.config.beforeSubmit.call(that, formData, jqForm, options);
						
							$(that.wrappers.element).attr("disabled", true).css({
								'opacity': 0.5
							});
						}
				});
			};
			
			this.build();
			this.binds();
		};


		var FN = function(wrapper, options) {

			this.wrapper = wrapper;
			var options = options || {};
			// Initial
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
				// Phenotype
				this.phenotype = {
					controls: {
						use: {
							'icon': 'use',
							'trigger': 'use',
							'hidden': true,
							"title": "Использовать",
							'click': function() {
								if ("function"==typeof this.options.receiver) this.options.receiver(this.seance.selectedItems); 
							}
						},
						addfile: {
							'icon': 'add',
							'trigger': 'add',
							'title': 'Создать',
							'init': function(el) {
								this.bindUploadFile(el);
							}
						},
						addfolder: {
							'icon': 'addfolder',
							'trigger': 'addfolder',
							'title': 'Создать директорию',
							'click': function() {
								this.createFolder();
								return false;
							}
						},
						select: {
							'icon': 'list',
							'trigger': 'modeSelect',
							'click': function() {
								this.toogleSelectMode();
								return false;
							},
							'title': 'Выбрать'
						},
						del: {
							'icon': 'delete',
							'hidden': true,
							'trigger': 'delete',
							'title': 'Удалить выбранное',
							'click': function() {
								this.deleteDialog();
								return false;
							}
						}
					}
				};
				// 
				this.seance = {
					mode: 'preview'
				}
			// Init
			this.init = function() {
				this.seance.location = this.options.location;
				this.build();
				this.refresh();
			}
			// request
			this.request = function(data, success) {
				var widget = this;
				if (!this.options.connector) return;
				var data = data || {};
				var success = success || false;
				$.ajax({
					url: this.options.connector,
					data: $.extend({
						location: this.seance.location
					}, data),
					type: "POST",
					dataType: 'json',
					success: function(res) {
						
						if (res) { 
							if (!res.success) {
								if (res.errorMsg) widget.alert(res.errorMsg);
							} else
							("function"==typeof success) && (success.call(widget, res)); }
						else { this.throwError('INVALID_SERVER_RESPONSE'); }
					},
					error: function(r) {
						console.error('Server response error: ', r.responseText);
					}
				});
			}
			// Local alert
			this.alert = function(msg) {
				alert(msg);
			}
			// Refresh
			this.refresh = function() {
	            console.log('refresh');
				var widget = this;
				$.ajax({
					url: this.options.connector,
					data: {
						location: this.seance.location
					},
					type: "POST",
					dataType: 'json',
					success: function(res) {
						if (res) { widget.data = res; widget.updateView(); }
						else { this.throwError('INVALID_SERVER_RESPONSE'); }
					},
					error: function(r) {
						console.error('Server response error: ', r.responseText);
					}
				});
				// Set location
				this.redrawLocation();
				
			}
			// Build
			this.build = function() {
				var widget = this;
				// Create main area
				this.buildLocation();
				this.buildControls();	
				
				this.buildArea();		

				
			}
			// Build controls
			this.buildControls = function() {
				var widget = this;
				// Create controls
				
				this.wrappers.controls = $(this.wrapper)
				.put($("<div />", {
					"class": "controls"
				}));
				
				// Build buttons
				$(this.wrappers.controls)
					.put($("<ul />"))
					.tie(function() {
						var ul = this;
						var crButton = function(ctrl) {
							$(ul)
								.put($('<li />', {
									"class": ctrl.hidden ? "hidden" : "",
									"data-trigger": ctrl.trigger
								}))
									.put($('<a />', {
										'class': "elbora-vcl-themes-metro-icon elbora-vcl-themes-metro-icon32x32 elbora-vcl-themes-metro-icon32x32-"+ctrl.icon,
										'title': ctrl.title || ''
									}))
									.tie(function() {
										if ("function"==typeof ctrl.click) $(this).click(function() {
											ctrl.click.call(widget, this);
											return false;
										});
										else 
										$(this).click(function() {
											
											return false;
										});

										if ("function"==typeof ctrl.init) ctrl.init.call(widget, this);
									});
						};

						$.each(widget.phenotype.controls, function() {
							crButton(this);
						});

					});
			}
			// Build location
			this.buildLocation = function() {
				var widget = this;
				this.wrappers.area = $(this.wrapper)
				.put($("<div />", {
					"class": "location"
				}));

				$(this.wrappers.area)
				.put($("<table />"))
				.ramp($("<tbody />"),$("<tr />"))
					.put($('<td />', {
						"class": "backurl"
					}))
					.tie(function() {
						widget.wrappers.backurl = this;
						$(this)
						.put($("<a />", {
							"class": "goback-icon"
						}))
						.click(function() {
							widget.goTop();
							return false;
						});
					})
					.and($("<td />", {
						"class": "input"
					}))
						.put($("<div />"))
						.put($("<div />"))
						.put($("<div />"))
						.tie(function() {
							widget.wrappers.location = this;
						})
						.html(this.seance.location);
			}
			// Build area
			this.buildArea = function() {
				var widget = this;
				// Build area self
				this.wrappers.area = $(this.wrapper)
				.put($("<ul />", {
					"class": "filesArea"
				}));
				
			}
			// update view
			this.updateView = function() {
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
								$(this).put($("<a />", {
									"class": "elbora-vcl-themes-metro-icon elbora-vcl-themes-metro-icon32x32"
								}))
									.put($("<div />", {
										"class": "elbora-vcl-themes-metro-icon-filetype elbora-vcl-themes-metro-icon-filetype-folder"
									}));
							})
							.and($("<div />", {
								"class": "subscribe"
							}))
							.html(this.title);							
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
							.html(this.title)
							.and($('<div />',  {
								"class": "acceptit"
							}))
							.tie(function() {
								$(this)
								.put($('<symbol />', {
									"class": "icons__plate",
									"title": "Use it"
								}))
								.html('<div class="icon icon--ei-share-apple icon--m"><svg class="icon__cnt"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ei-share-apple-icon"></use></svg></div>')
								.click(function() {
									debugger;
									if ("function"==typeof widget.options.receiver && widget.seance.mode!=='select') {
										widget.sendback(file.name); 
									}
								});
							});
										
					});
					widget.postRender();
				});
				
			}
			this.sendback = function(rel) {
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
			}
			this.redrawLocation = function() {
				$(this.wrappers.location).html(this.seance.location);
				if (this.seance.location!='/') $(this.wrappers.backurl).show();
				else $(this.wrappers.backUrl).hide();
			}
			this.postRender = function() {
				var widget = this;
				$(this.wrappers.area).find('div.thumb>img').each(function() {
					widget.calcThumbSize(this);
				});
			}
			/* Auto fit image to wrapper */
			this.calcThumbSize = function(img) {
				var img = img;
				
				$(img).fitimage({
					width:110,
					height:110
				});
				
			};

			this.click = function(el) {
				var widget = this;
				switch(this.seance.mode) {
					case 'select':
						this.select(el);
					break;
					/*case 'preview':
						if ($(el).hasClass('folder')) {

							// open folder
							widget.appendLocation($(el).attr("rel"));						
						} else {
							this.preview(el);
						};
					break;*/
				}
			};

			this.previewClick = function(el) {
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
				
			};

	        this.preview = function(el) {
	            var plugin = this;
	            var el = el;
	            $("body").component("overlay", {
	                "panel": {
	                    "class": "brahma-visualpack-filemanager-modal"
	                },
	                "overlay": {
	                    "class": "brahma-visualpack-filemanager-overlay"
	                },
	                "effect": {
	                    "type": "hang"
	                },
	                outsideClose: true,
	                escapeClose: false,
	                freezeDocument: false
	            }).html(function(element) {
	                var overlay = this;
	                var element = element;
	                $(element)
	                .put($('<div />'))
	                .tie(function() {
	                    $(this).put($('<img />', {
	                        "class": "preview",
	                        "src": $(el).attr("origin")
	                    }))
	                })
	                .and($('<span />', {
	                    "class": "close elbora-vcl-themes-metro-icon32x32 elbora-vcl-themes-bold-icon32x32-close",
	                    "trigger": "close-overlay"
	                })).click(function() { overlay.close(); return false})
	                .and($('<ul />'))
	                .put($('<li />'))
	                .tie(function() {
	                   if ("function"==typeof plugin.options.receiver) $(this).put($('<button />')).html('Использовать')
	                    .click(function() {
	                       plugin.sendback();
	                       overlay.close();
	                    });
	                });
	                   
	            }).show();
	        }

			this.appendLocation = function(loc) {
				var loc = loc.split('\\').join('/');

				if (/^[^\/]+/.test(loc)) {
					if (loc.indexOf(0)=='/') loc = loc.substr(1);
					if (loc.length==1 && loc.substring(-1)=='/') loc = loc.substr(0,-1);
					
					if (this.seance.location.substring(-1)!=='/') this.seance.location += '/';
					this.seance.location += loc;
					
					this.refresh();
				}
			}

			/* SELECT MODE */

			this.disableSelectionMode = function() {
				this.seance.mode = 'preview';
				$(this.wrappers.area).find('li.selected').removeClass('selected');
				$(this.wrappers.controls).find('li[data-trigger=modeSelect]').removeClass('selected');
				this.seance.selectedItems = {
					'folders': [],
					'files': []
				};
				this.recheckSituation();
			};
			
			this.enableSelectionMode = function() {

				this.seance.mode = 'select';
				$(this.wrappers.controls).find('li[data-trigger=modeSelect]').addClass('selected');
				this.recheckSituation();

			};

			this.toogleSelectMode  = function() {
				if (this.seance.mode == 'select') {
					this.disableSelectionMode();
				} else {
					this.enableSelectionMode();
				}
			}

			this.select = function(el) {
				$(el).toggleClass('selected');
				this.recheckSituation();
			};

			/* Диалог перед удалением */
			this.deleteDialog = function() {
				if (confirm("Удалить выбранные файлы?")) {
					this.deleteSelected();
					this.disableSelectionMode();
				}
			}
			/* Удаление */
			this.deleteSelected = function() {
				var widget = this;
				if ("function"==typeof this.options.onDelete) {
					this.options.onDelete.call(this, this.seance.selectedItems);
				}
				this.request({
					mode: 'delete',
					location: this.seance.location,
					files: this.seance.selectedItems.files,
					folders: this.seance.selectedItems.folders
				}, function() {
					widget.refresh();
				});
			}

			/* Создание директории */
			this.createFolder = function() {
				var widget = this;
				var dirname;
				if (dirname = prompt("Укажите имя для новой директории")) {
					if ("function"==typeof this.options.onDelete) {
						this.options.onMakeDir.call(this, dirname);
					}
					if (typeof this.options.connector!="undefined" && this.options.connector) {
						this.request({
							mode: 'addfolder',
							location: this.seance.location,
							foldername: dirname
						}, function() {
							widget.refresh();
						});
					}
				}
			}

			/* Накладываем на кнопку возможность выбора файла */
			this.bindUploadFile = function(el) {
				var widget = this;
				new uploadFileOnClick($(el), function() {

					return widget.seance.location;
				}, {
					connector: this.options.connector,
					onSuccess: function(response) {
						widget.refresh();
					}
				});
			}

			/* Переход на уровень выше */
			this.goTop = function() {
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
			}

			/* Пересматривает ситуацию активных элементов */
			this.recheckSituation = function() {
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
	            console.log(widget.seance.selectedItems);
				/* Определяем показывать ли кнопку delete */
				if (this.seance.selectedItems.folders.length>0 || this.seance.selectedItems.files.length>0) {
					$(this.wrappers.controls).find('li[data-trigger=use]').removeClass("hidden");
					$(this.wrappers.controls).find('li[data-trigger=delete]').removeClass("hidden");
				} else {
					$(this.wrappers.controls).find('li[data-trigger=use]').addClass("hidden");
					$(this.wrappers.controls).find('li[data-trigger=delete]').addClass("hidden");
				}
			}	
			/* Возврвщает текущую локацию файл без первого слеша */
			this.getCurrentLocation = function() {
				var loc = this.seance.location;
				if (loc.substr(0,1)==='/') loc = loc.substr(1);
				if (loc.substr(-1)==='/') loc = loc.substr(0,-1);
	            if (loc.length===1&&loc[0]==='/') loc = '';
				return loc;
			}

			this.init();
		}

		$.fn.ntFileManager = $.fn.ntFileManager = function(data) {
			
			var data = data;
			return $(this).each(function() {
				new FN(this, data);
			});
		};

	})(jQuery);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./nt-filemanager.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./nt-filemanager.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "nt-filemanager {\n\tposition: relative;\n\tbackground-color: rgba(37, 37, 37, 0.01);\n    display: block;\n}\n\nnt-filemanager ul.filesArea {\n\toverflow: hidden;\n\tdisplay:table;\n\tlist-style: none;\n\tpadding: 0px;\n\tmargin:0 0 5px 0;\n\tborder-radius: 6px;\n\tbackground: none;\n\tclear:both;\n}\n\nnt-filemanager ul.filesArea li {\n\tpadding: 24px 24px;\n\theight: 162px;\n\tfloat: left;\n\tmargin: 0 1px 1px 1px;\n}\n\nnt-filemanager ul.filesArea li.file {\n\tbackground-color: rgba(234, 229, 219, 0);\n\t-webkit-transition: background 0.45s ease;\n\ttransition:background 0.45s ease;\n}\n\nnt-filemanager ul.filesArea li.file:hover {\n\tbackground-color:rgba(224, 216, 201, 0.19)\n}\n\n\nnt-filemanager ul.filesArea li.folder {\n\tbackground-color: rgba(255, 255, 255, 0.03);\n}\n\nnt-filemanager ul.filesArea li > div.thumb {\n\twidth:110px;\n\theight:110px;\n\ttext-align:center;\n\tmargin:0 auto;\n\tcursor:pointer;\n}\n\nnt-filemanager ul.filesArea li.image > div.thumb {\n\tbackground-color: #8A8A8A;\n}\n\nnt-filemanager ul.filesArea li.image > div.thumb > img {\n\tdisplay:none;\n}\n\n\nnt-filemanager ul.filesArea li .acceptit {\n\t-webkit-transform-origin:50% 50%;\n\t        transform-origin:50% 50%;\n\t-webkit-transition: opacity 0.3s ease, -webkit-transform 0.5s ease;\n\ttransition: opacity 0.3s ease, -webkit-transform 0.5s ease;\n\ttransition: transform 0.5s ease, opacity 0.3s ease;\n\ttransition:transform 0.5s ease, opacity 0.3s ease, -webkit-transform 0.5s ease;\n\t\n\topacity:0;\n\n\tmargin: 0 auto;\n    border-radius: 16px;\n    border: 1px rgba(234, 204, 170, 0.69) solid;\n    cursor: pointer;\n    display: block;\n    position: absolute;\n    bottom: 10px;\n    left: 50%;\n    -webkit-transform: translateX(-50%) scale(0.3);\n            transform: translateX(-50%) scale(0.3);\n    width: 32px;\n    height: 32px;\n    cursor:pointer;\n}\n\n\nnt-filemanager ul.filesArea li .acceptit >symbol {\n\tcursor:pointer;\n}\n\n\nnt-filemanager ul.filesArea li .acceptit >symbol >div {\n\twidth: 80%;\n\theight: 80%;\n\tcursor: pointer;\n\tmargin-left: 10%;\n\tmargin-top: 10%;\n}\n\n\nnt-filemanager ul.filesArea li .acceptit >symbol >div >svg {\n\twidth: 100%;\n\theight: 100%;\n\tfill: #FF0D0D;\n\tcursor:pointer;\n}\n\nnt-filemanager ul.filesArea li {\n\tposition:relative;\n}\n\nnt-filemanager ul.filesArea li.selected {\n\tbackground-color:#D0CB00;\n}\n\nnt-filemanager ul.filesArea li.selected:hover {\n\tbackground-color:#B5B105;\n}\n\nnt-filemanager ul.filesArea li.selected img {\n\topacity:0.75;\n\tfilter:alpha(opacity=75);\n}\n\nnt-filemanager ul.filesArea li.selected div.subscribe {\n\tcolor:white;\n\tfont-weight: 100;\n}\n\nnt-filemanager ul.filesArea li.selected.image > div.thumb {\n\n\t/*box-shadow:         1px 4px 17px 4px rgba(0, 0, 0, 0.39);*/\n\tbackground-color:#000000;\n}\n\nnt-filemanager ul.filesArea li:hover .acceptit {\n\topacity:1;\n\t-webkit-transform: translateX(-50%) scale(1);\n\ttransform: translateX(-50%) scale(1);\n}\n\nnt-filemanager ul.filesArea li div.subscribe {\n\tfont-size: 11px;\n\tcolor: #131212;\n\tfont-weight: normal;\n\tmargin: 10px auto 0 auto;\n\theight:20px;\n\tline-height: 14px;\n\theight: 14px;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\twidth: 120px;\n\ttext-align:center;\n\tfont-weight: 100;\n\tfont-family: Arial;\n}\n\n\nnt-filemanager div.location {\n\tdisplay:table;\n\toverflow: hidden;\n\theight:34px;\n\twidth:100%;\n\tposition: relative;\n}\n\nnt-filemanager div.location > table {\n\tpadding:0px;\n\twidth:100%;\n\tborder-spacing: 0;\n\tborder-collapse: collapse;\n}\n\nnt-filemanager div.location > table:after {\n}\n\nnt-filemanager div.location > table td.backurl {\n\tdisplay:none;\n\twidth:34px;\n\theight:100%;\n\tvertical-align: middle;\n}\n\nnt-filemanager div.location > table td.backurl a.goback-icon {\n\tbackground:url(" + __webpack_require__(5) + ") center center no-repeat transparent;\n\twidth:100%;\n\theight:23px;\n\tdisplay:inline-block;\n\tcursor:pointer;\n}\n\nnt-filemanager div.location td.input {\n\tdisplay:table;\n\tfont-size:14px;\n\tcolor:#505057;\n\theight:100%;\n\twidth:100%;\n\t\n}\n\nnt-filemanager div.location td.input > div {\n\tpadding:6px 0;\n\tborder:1px rgba(255, 13, 13, 0.16) solid;\n}\n\nnt-filemanager div.location td.input > div > div {\n\tborder-radius: 3px;\n}\n\nnt-filemanager div.location td.input > div > div > div {\n\tpadding:0 12px;\n}\n\nnt-filemanager div.controls {\n\tpadding: 1px 0;\n\tmargin-bottom: 3px;\n\tborder-radius: 6px;\n\tfloat:left;\n\t\n}\n\nnt-filemanager div.controls ul {\n\tlist-style:none;\n\tmargin:0px;\n\tpadding:0px;\n}\n\nnt-filemanager div.controls ul:after {\n\tcontent: \"\";\n\tdisplay:block;\n\twidth:100%;\n\tclear:both;\n}\n\nnt-filemanager div.controls ul li {\n\tfloat:left;\n\tbackground-color:rgba(37, 37, 37, 0.01);\n\tmargin:0 3px 0 0;\n}\n\nnt-filemanager div.controls ul li.selected {\n\tbackground-color:#FF0D0D;\n}\n\nnt-filemanager-modal {\n\tbackground-color:rgba(5,5,5,1);\n\tborder-radius: 12px;\n\tpadding:12px;\n\tbox-shadow:         0px 10px 24px -5px rgba(50, 50, 50, 0.75);\n\twidth:600px;\n}\n\nnt-filemanager-overlay {\n\tbackground-color:rgba(0,0,0,0.6);\n}\n\nnt-filemanager-modal > div {\n\tpadding:10px !important;\n}\n\nnt-filemanager-modal > div img.preview {\n\twidth:580px;\n}\n\nnt-filemanager-modal > div > div {\n\tposition:relative;\n}\n\nnt-filemanager-modal span.close {\n\tposition:absolute;\n\ttop:-30px;\n\tright:-30px;\n}\n\n/* Metro icons */\na.elbora-vcl-themes-metro-icon {\n\tbackground-position:center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size:60%;\n}\n\na.elbora-vcl-themes-metro-icon > img.glow { display:none; }\na.elbora-vcl-themes-metro-icon > img.default { display:block; }\n\n.elbora-vcl-themes-metro-icon32x32 {\n\ttext-decoration:none;\n\twidth:32px;\n\theight:32px;\n\tdisplay:block;\n}\n\n.elbora-vcl-themes-metro-icon32x32-add {\n\tbackground-image:url(" + __webpack_require__(6) + ");\n}\n\n.elbora-vcl-themes-metro-icon32x32-addfolder {\n\tbackground-image:url(" + __webpack_require__(7) + ");\n}\n\n.elbora-vcl-themes-metro-icon32x32-list {\n\tbackground-image:url(" + __webpack_require__(8) + ");\n}\n\n.elbora-vcl-themes-metro-icon32x32-delete {\n\tbackground-image:url(" + __webpack_require__(9) + ");\n}\n\n.elbora-vcl-themes-metro-icon32x32-use {\n\tbackground-image:url(" + __webpack_require__(10) + ");\n}\n\n.elbora-vcl-themes-bold-icon32x32-close {\n\tbackground-image:url(" + __webpack_require__(11) + ");\n\t-webkit-transition: -webkit-transform 0.35s ease;\n\ttransition: -webkit-transform 0.35s ease;\n\ttransition: transform 0.35s ease;\n\ttransition:transform 0.35s ease, -webkit-transform 0.35s ease;\n\t-webkit-transform:scale(0.7);\n\t        transform:scale(0.7);\n}\n.elbora-vcl-themes-bold-icon32x32-close:hover {\n\t-webkit-transform:scale(1);\n\t        transform:scale(1);\n}\n\n.elbora-vcl-themes-metro-icon-filetype {\n\twidth:110px;\n\theight:110px;\n\tdisplay:inline-block;\n\tbackground-position:center center;\n\tbackground-repeat: no-repeat;\n}\n\n.elbora-vcl-themes-metro-icon-filetype-folder {\n\tbackground-image:url(" + __webpack_require__(12) + ");\n}", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c5e7f50976b061083c49616504a77c04.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c521ab41d0a8cb74e4fac53100ab6101.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e8a3e0db0119837cf3bc999b7512eb4d.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c20b15db4b17b07c14ad06e077f37543.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "9ffaa3c3b207aa22780a8a1ca990bdb5.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b18c9593c47c62947144fba8fc1f811.png";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "c21c7707b49fac7653e67d8d28dd0109.png";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f69eef3e1a500b93f5044c1a877ec22a.png";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;