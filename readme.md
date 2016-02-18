## Usage

Before you start to use this component you should to configure it.
Use synthetic method __createPreset__ to create new preset of component.
```js
Synthetic.getComponent('nt-filemaneger')
.createPreset(function($setup) {
	$setup({
		url: 'here/url/to/server/connector',
		type: 'post',
		requests: {
			// Request to upload file
			upload: {
				data:  {
					type: "'upload'",
					content: {
						location: 'seance.location'
					}
				}
			},
			// Request to get contents of current folder
			refresh: {
				data: {
					type: "'contents'",
					content: {
                        location: 'seance.location'
                    }
				}
			},
			// Request to delete items
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
			// Request to reattach files (not supported yet)
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
		}
	});
});
```

Note that the configuration string values are used as an expressions. For example, if you wanna set up upload name, you should have property `type` to be equal to 'getfiles', but you should write not 'getfiles', but "'gitfiles'" - quote in quote. Because the string is not a direct value, but expression for parsing.
Why? Because you can use expressions to get some system value, like location:
```
	location: 'seance.location'
	// Its equals to 
	location: [[componentData]].seance.location
```

### Server responses
Server responses should be as json with specific structore. Here is mask fot each of possible requests:

#### Contents
Returns folder contents
```json
{
	"type": "contents",
	"content": {
		"files": [
			{
				"name": "filename.extension",
				"origin": "path/to/file",
				"title": "Some title of file",
				"thumb": "images/thumbs/preview.jpg"
			}
		],
		"folders": []
	}
}
```

#### 
