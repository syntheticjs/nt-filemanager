require('./massle.js');
require('./nt-filemanager.css');

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
		ssvg.innerHTML+='<symbol id="ei-share-apple-icon" viewBox="0 0 50 50"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"></path><path d="M24 7h2v21h-2z"></path><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"></path></symbol><symbol id="ei-camera-icon" viewBox="0 0 50 50"><path d="M39 38H11c-1.7 0-3-1.3-3-3V17c0-1.7 1.3-3 3-3h6c.2 0 .5-.2.6-.3l1.1-2.2c.4-.8 1.4-1.4 2.3-1.4h8c.9 0 1.9.6 2.3 1.4l1.1 2.2c.1.2.4.3.6.3h6c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3zM11 16c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V17c0-.6-.4-1-1-1h-6c-.9 0-1.9-.6-2.3-1.4l-1.1-2.2c-.1-.2-.4-.4-.6-.4h-8c-.2 0-.5.2-.6.3l-1.1 2.2c-.4.9-1.4 1.5-2.3 1.5h-6z"></path><path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path><circle cx="35" cy="18" r="1"></circle><path d="M12 12h4v1h-4z"></path><path d="M25 21v-1c-2.8 0-5 2.2-5 5h1c0-2.2 1.8-4 4-4z"></path></symbol><symbol id="sm-checked" viewBox="-150 -152 800 800"><polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55"/></symbol><symbol id="sm-delete-icon" viewBox="-150 -152 800 800"><path d="M76.5,408c0,28.05,22.95,51,51,51h204c28.05,0,51-22.95,51-51V102h-306V408z M408,25.5h-89.25L293.25,0h-127.5l-25.5,25.5 H51v51h357V25.5z"/></symbol><symbol id="sm-add-folder-icon" viewBox="-150 -152 800 800"><path d="M444.955,31.782H333.208c-17.576,0-37.758,8.931-47.165,31.782c0,0-4.132,29.145-31.782,31.782 H31.782C14.239,95.347,0,109.077,0,126.621v286.551c0,17.544,14.239,31.783,31.782,31.783h413.172 c17.544,0,31.782-14.239,31.782-31.783V63.565C476.737,46.021,462.499,31.782,444.955,31.782z M444.955,126.621v286.551H31.782 V127.13H254.26l3.051-0.159c29.812-2.829,48.246-23.71,56.732-45.163c8.263-20.722,22.661-18.243,22.661-18.243h108.251V126.621 z"/><path d="M317.825,254.26H254.26v-63.565c0-8.772-7.151-15.891-15.891-15.891 c-8.772,0-15.891,7.119-15.891,15.891v63.565h-63.565c-8.772,0-15.891,7.151-15.891,15.891s7.119,15.891,15.891,15.891h63.565 v63.565c0,8.74,7.119,15.891,15.891,15.891c8.74,0,15.891-7.151,15.891-15.891v-63.565h63.565 c8.74,0,15.891-7.151,15.891-15.891S326.565,254.26,317.825,254.26z"/></symbol><symbol id="ei-navicon-icon" viewBox="0 0 50 50"><path d="M10 12h30v4H10z"></path><path d="M10 22h30v4H10z"></path><path d="M10 32h30v4H10z"></path></symbol>';
	});

	$setup({
		type: 'post', // post only for now
		url: 'testServer.json', // url of server script
		requests: {
			upload: {
				data:  {
					type: "'upload'",
					content: {
						location: 'seance.location'
					}
				}
			},
			refresh: {
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