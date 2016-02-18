require('./jquery-ajaxform.js');

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
            
            this.buildControls();  
            this.buildLocation(); 
            
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
                 

                 var element = this;
                 widget.$fetch(['+seance.selectedItems.files.length>0 && seance.selectedItems.files.length<=component.$scope.$config.maxEmployCount'], function(isSrc) {
                    $(element)[isSrc ? 'show' : 'hide']();
                 });
            })
            .click(function() {
                widget.sendback();
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
                
                widget.$fetch(['+component.$scope.$config.allowDelete', '+this.seance.mode', '+seance.selectedItems.files.length||seance.selectedItems.folders.length'], function(allowDelete, mode, isSelected) {
                    
                    $(element)[allowDelete&&mode=='preview'&&isSelected ? 'show' : 'hide']();
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

                    widget.$fetch(['+seance.selectedItems.files.length===1&&seance.selectedItems.folders.length===0&&seance.mode!="dialog"', '+seance.selectedItems.files[0]'], function(isSrc, zero) {

                        $(element)[isSrc ? 'show' : 'hide']();
                        $(widget.wrappers.ditailsText).html('File: <b>'+zero+'</b>');
                        //element[mode=='dialog'?'addClass':'removeClass']("active");
                     });
                });
            })
            
            
            // Info table
            .and($("<div />", {
                "class": "add-area-section  add-area-section-wide"
            }))
            .tie(function() {
                var span = $(this).put($('<figure />', {
                    "class": ""
                }))
                .put($('<figcaption />'))
                .put($('<span />'));

                 var element = this;
                 widget.$fetch(['+(seance.selectedItems.files.length>1||seance.selectedItems.folders.length>0)&&seance.mode!="dialog"', '+seance.selectedItems.files.length','+seance.selectedItems.folders.length'], function(allowed, filesCount, foldersCount) {
                    
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
                    widget.$fetch(["+!(seance.selectedItems.files.length>0||seance.selectedItems.folders.length>0)"], function(enabled) {

                        $(element)[enabled ? 'show' : 'hide']();
                    });
                });
                 widget.bindUploadFile(this);

                 var element = this;
                 widget.$fetch("+component.$scope.$config.allowFilesUpload && seance.mode=='preview'", 
                    function(isSelected) {
                    $(element)[isSelected ? 'show' : 'hide']();
                 });
            })
            .tie(function() {
                        
                        var sub = this;
                        widget.component.$injectors[0].$config(['+advancedButtons'], function(advancedButtons) {
                            widget.component.$hitch(function() {
                                var cleanup = function() {}
                                $(sub).parent().find('.add-area-section-adv-button').remove();

                                if ("object"===typeof advancedButtons) {
                                    for (var prop in advancedButtons) {

                                        if (advancedButtons.hasOwnProperty(prop)) {
                                            cleanup = cleanup.inherit(widget.buildTopBarButton(advancedButtons[prop], sub));
                                            
                                        }
                                    }
                                }

                                return cleanup;
                            });
                        });
            });
            
            /*.and($("<div />", {
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
            });*/
        },
        buildTopBarButton: function(config, sublink) {
            var hereElement, widget = this;
            var cleanUp = function() {
                $(hereElement).remove();
            }

            // Item
            hereElement = sublink.and($("<div />", {
                "class": "add-area-section "+(config.className||'')
            }))
            .tie(function() {
                var element = this;
                widget.wrappers.dialog = $(this).put($('<figure />', {
                    "class": ""
                }))
                .put($('<figcaption />'))
                .put($('<span />'))
                .tie(function() {

                    $(this).put('<i />')
                    .html(config.title||'Button');

                    
                    if (config.condition) {
                        var watcher = widget.$fetch([config.condition], function(condition) {
                            
                            $(element)[condition ? 'show' : 'hide']();
                            //element[mode=='dialog'?'addClass':'removeClass']("active");
                         });

                        cleanUp.inherit(function() {
                            watcher.destory();
                        });
                    }

                    
                });
                if (config.click)
                $(this).click(config.click);
            })

            return cleanUp;
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
                widget.$fetch(['+seance.location', '+component.$scope.$config.allowCreateNewFolder'], function(location, allowCreateNewFolder) {
                    
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

                        if (allowCreateNewFolder) $(widget.wrappers.location).put($('<figure />', {
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
            $(this.wrapper)
            .put($('<div />', {
                "class": "nt-filemanager-body"
            }))
            .tie(function() {

                widget.wrappers.area = $(this).put($("<ul />", {
                    "class": "filesArea"
                }))
                .tie(function() {
                    // Danger mode (delete or something else danger!)
                    // Seems like attention. Mark files that can be terminated
                    widget.$fetch(['+seance.mode=="dialog"'], function(isDialog) {

                        $(widget.wrappers.area)[isDialog ? 'addClass' : 'removeClass']('danger');
                    });
                });
                // Disable selection
                $(this).attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);

                // Select by selected area
                var div = $(this).put($('<div />')).css({
                    border: "1px dotted rgb(255, 255, 255)",
                    backgroundColor: "rgba(129, 251, 0, 0.06)",
                    position: "absolute"
                })[0], x1 = 0, y1 = 0, x2 = 0, y2 = 0, offset, map = [], firstMove = true;
                
                var rectangleIntersect = function(a, b)
                {
                  var x = Math.max(a.x, b.x);
                  var num1 = Math.min(a.x + a.width, b.x + b.width);
                  var y = Math.max(a.y, b.y);
                  var num2 = Math.min(a.y + a.height, b.y + b.height);
                  if (num1 >= x && num2 >= y)
                    return true;
                  else
                    return false;
                }

                var here = this,
                calcRect = function(e) {

                    

                    var x3 = Math.min(x1,x2);
                    var x4 = Math.max(x1,x2);
                    var y3 = Math.min(y1,y2);
                    var y4 = Math.max(y1,y2);

                    if (firstMove && ((x4 - x3) > 10 && (y4 - y3) > 10) || (e.target===here)) {
                        if (!e.ctrlKey&&!e.metaKey) widget.resetSelection();
                        
                    }

                    var rect = {
                        x: x3,
                        y: y3,
                        width: x4 - x3,
                        height: y4 - y3
                    };

                    div.style.left = rect.x + 'px';
                    div.style.top = rect.y + 'px';
                    div.style.width = rect.width + 'px';
                    div.style.height = rect.height + 'px';

                    var selected = [];

                    for (var i = 0;i<map.length;++i) {

                        if (rectangleIntersect(map[i][1], rect)) {
                            map[i][0].classList[map[i][2]?'remove':'add']('selected');

                            selected.push(map[i][0]);
                        } else {
                            map[i][0].classList[!map[i][2]?'remove':'add']('selected');
                        }
                    }

                    if (selected.length!=(widget.seance.selectedItems.files.length+widget.seance.selectedItems.folders.length)) {
                        widget.recheckSituation();
                    }

                    
                }

                var mm = function(e) {
                        


                        x2 = e.pageX - offset.left;
                        y2 = e.pageY - offset.top;

                        calcRect(e);
                    };

                
                
                $(this).bind('mousedown', function(e) {
                    
                    if (e.target == here[0] && (!e.ctrlKey&&!e.metaKey)) {

                        widget.resetSelection();
                    }

                    offset = $(here).offset(); 
                    firstMove = true;
                    
                    div.hidden = 0;
                    x1 = e.pageX - offset.left;
                    y1 = e.pageY - offset.top;
                    x2 = e.pageX - offset.left;
                    y2 = e.pageY - offset.top;
                    
                    // Get position and size of each elements in area
                    map = [];
                    $(here).find('>ul>li').each(function() {
                        
                        var el = $(this),
                        pos = $(this).position();

                        map.push([this, {
                            x: pos.left,
                            y: pos.top,
                            width: $(el).width(),
                            height: $(el).height()
                        }, $(this).hasClass('selected')]);
                    });

                    $(here).bind('mousemove', mm);

                    $(window).one('mouseup', function(e) {
                        widget.recheckSituation();
                        $(here).unbind('mousemove', mm);
                        div.hidden = 1;
                        div.style.left = "-99999px";
                        div.style.top = "-99999px";
                    });

                    return false;
                });
            })
            
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
                    .click(function(e) {

                        widget.click($(this), (e.ctrlKey||e.metaKey));
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
                    .click(function(e) {
                        widget.previewClick($(this), (e.ctrlKey||e.metaKey));
                        return false;
                    })
                        .put($("<div />", {
                            "class": "thumb"
                        }))
                        
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
                    widget.seance.mode = 'preview';
                    widget.$digest();
                };
                widget.seance.mode = 'dialog';
                widget.$digest();
            });
        },
        sendback : function() {
            var self = this;
            
            this.component.$injectors[0].$config(['employer'], function(employer) {
                employer.call(self);
            });
            
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
        previewClick : function(el, multipart) {
            var widget = this;
            switch (this.seance.mode) {
                case 'select':
                    this.select(el);
                break;
                case 'preview':
                    if ($(el).hasClass('folder') && !multipart) {
                        // open folder
                        widget.appendLocation($(el).attr("rel"));                       
                    } else {
                        this.preview(el, multipart);
                    };
                break;
            }
            
        },
        click : function(el, multiSelect) {
           
            var widget = this;
            switch(this.seance.mode) {
                case 'select':
                    this.select(el, multiSelect);
                break;
                case 'preview':
                    if ($(el).hasClass('folder')&&!multiSelect) {
                        // open folder
                        widget.appendLocation($(el).attr("rel"));                       
                    } else {
                        this.preview(el, multiSelect);
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
        preview : function(el, multipart) {
            
            var plugin = this;
            
            this.select(el, !multipart&&this.seance.mode==='preview' ? 1 : false);
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
                widget.seance.selectedItems.folders.push($(this).attr("origin"));
                else
                widget.seance.selectedItems.files.push($(this).attr("origin"));
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
			location: '/'
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