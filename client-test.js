var path = require('path');
var webpack = require("webpack"),
color = require('color'),
config = require('./webpack.config.js');

config.output.path = path.join(__dirname, 'public');

// returns a Compiler instance
var compiler = webpack(config);
var go = function() {

	compiler.run(function(err, stats) {
	    if (err) {
	    	console.log('ERR: ');
	    } else {
	    	console.log('REBUILD OK');
	    }
	});
}
// or
compiler.watch({ // watch options:
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
    // pass a number to set the polling interval
}, function(err, stats) {
    console.log('REWATCH');
    go();
});

var http = require("http"),
url = require("url"),
fs = require('fs'),
path = require('path'),
here = process.cwd() + '/public',
extTypes = { 
		"3gp"   : "video/3gpp"
		, "a"     : "application/octet-stream"
		, "ai"    : "application/postscript"
		, "aif"   : "audio/x-aiff"
		, "aiff"  : "audio/x-aiff"
		, "asc"   : "application/pgp-signature"
		, "asf"   : "video/x-ms-asf"
		, "asm"   : "text/x-asm"
		, "asx"   : "video/x-ms-asf"
		, "atom"  : "application/atom+xml"
		, "au"    : "audio/basic"
		, "avi"   : "video/x-msvideo"
		, "bat"   : "application/x-msdownload"
		, "bin"   : "application/octet-stream"
		, "bmp"   : "image/bmp"
		, "bz2"   : "application/x-bzip2"
		, "c"     : "text/x-c"
		, "cab"   : "application/vnd.ms-cab-compressed"
		, "cc"    : "text/x-c"
		, "chm"   : "application/vnd.ms-htmlhelp"
		, "class"   : "application/octet-stream"
		, "com"   : "application/x-msdownload"
		, "conf"  : "text/plain"
		, "cpp"   : "text/x-c"
		, "crt"   : "application/x-x509-ca-cert"
		, "css"   : "text/css"
		, "csv"   : "text/csv"
		, "cxx"   : "text/x-c"
		, "deb"   : "application/x-debian-package"
		, "der"   : "application/x-x509-ca-cert"
		, "diff"  : "text/x-diff"
		, "djv"   : "image/vnd.djvu"
		, "djvu"  : "image/vnd.djvu"
		, "dll"   : "application/x-msdownload"
		, "dmg"   : "application/octet-stream"
		, "doc"   : "application/msword"
		, "dot"   : "application/msword"
		, "dtd"   : "application/xml-dtd"
		, "dvi"   : "application/x-dvi"
		, "ear"   : "application/java-archive"
		, "eml"   : "message/rfc822"
		, "eps"   : "application/postscript"
		, "exe"   : "application/x-msdownload"
		, "f"     : "text/x-fortran"
		, "f77"   : "text/x-fortran"
		, "f90"   : "text/x-fortran"
		, "flv"   : "video/x-flv"
		, "for"   : "text/x-fortran"
		, "gem"   : "application/octet-stream"
		, "gemspec" : "text/x-script.ruby"
		, "gif"   : "image/gif"
		, "gz"    : "application/x-gzip"
		, "h"     : "text/x-c"
		, "hh"    : "text/x-c"
		, "htm"   : "text/html"
		, "html"  : "text/html"
		, "ico"   : "image/vnd.microsoft.icon"
		, "ics"   : "text/calendar"
		, "ifb"   : "text/calendar"
		, "iso"   : "application/octet-stream"
		, "jar"   : "application/java-archive"
		, "java"  : "text/x-java-source"
		, "jnlp"  : "application/x-java-jnlp-file"
		, "jpeg"  : "image/jpeg"
		, "jpg"   : "image/jpeg"
		, "js"    : "application/javascript"
		, "json"  : "application/json"
		, "log"   : "text/plain"
		, "m3u"   : "audio/x-mpegurl"
		, "m4v"   : "video/mp4"
		, "man"   : "text/troff"
		, "mathml"  : "application/mathml+xml"
		, "mbox"  : "application/mbox"
		, "mdoc"  : "text/troff"
		, "me"    : "text/troff"
		, "mid"   : "audio/midi"
		, "midi"  : "audio/midi"
		, "mime"  : "message/rfc822"
		, "mml"   : "application/mathml+xml"
		, "mng"   : "video/x-mng"
		, "mov"   : "video/quicktime"
		, "mp3"   : "audio/mpeg"
		, "mp4"   : "video/mp4"
		, "mp4v"  : "video/mp4"
		, "mpeg"  : "video/mpeg"
		, "mpg"   : "video/mpeg"
		, "ms"    : "text/troff"
		, "msi"   : "application/x-msdownload"
		, "odp"   : "application/vnd.oasis.opendocument.presentation"
		, "ods"   : "application/vnd.oasis.opendocument.spreadsheet"
		, "odt"   : "application/vnd.oasis.opendocument.text"
		, "ogg"   : "application/ogg"
		, "p"     : "text/x-pascal"
		, "pas"   : "text/x-pascal"
		, "pbm"   : "image/x-portable-bitmap"
		, "pdf"   : "application/pdf"
		, "pem"   : "application/x-x509-ca-cert"
		, "pgm"   : "image/x-portable-graymap"
		, "pgp"   : "application/pgp-encrypted"
		, "pkg"   : "application/octet-stream"
		, "pl"    : "text/x-script.perl"
		, "pm"    : "text/x-script.perl-module"
		, "png"   : "image/png"
		, "pnm"   : "image/x-portable-anymap"
		, "ppm"   : "image/x-portable-pixmap"
		, "pps"   : "application/vnd.ms-powerpoint"
		, "ppt"   : "application/vnd.ms-powerpoint"
		, "ps"    : "application/postscript"
		, "psd"   : "image/vnd.adobe.photoshop"
		, "py"    : "text/x-script.python"
		, "qt"    : "video/quicktime"
		, "ra"    : "audio/x-pn-realaudio"
		, "rake"  : "text/x-script.ruby"
		, "ram"   : "audio/x-pn-realaudio"
		, "rar"   : "application/x-rar-compressed"
		, "rb"    : "text/x-script.ruby"
		, "rdf"   : "application/rdf+xml"
		, "roff"  : "text/troff"
		, "rpm"   : "application/x-redhat-package-manager"
		, "rss"   : "application/rss+xml"
		, "rtf"   : "application/rtf"
		, "ru"    : "text/x-script.ruby"
		, "s"     : "text/x-asm"
		, "sgm"   : "text/sgml"
		, "sgml"  : "text/sgml"
		, "sh"    : "application/x-sh"
		, "sig"   : "application/pgp-signature"
		, "snd"   : "audio/basic"
		, "so"    : "application/octet-stream"
		, "svg"   : "image/svg+xml"
		, "svgz"  : "image/svg+xml"
		, "swf"   : "application/x-shockwave-flash"
		, "t"     : "text/troff"
		, "tar"   : "application/x-tar"
		, "tbz"   : "application/x-bzip-compressed-tar"
		, "tcl"   : "application/x-tcl"
		, "tex"   : "application/x-tex"
		, "texi"  : "application/x-texinfo"
		, "texinfo" : "application/x-texinfo"
		, "text"  : "text/plain"
		, "tif"   : "image/tiff"
		, "tiff"  : "image/tiff"
		, "torrent" : "application/x-bittorrent"
		, "tr"    : "text/troff"
		, "txt"   : "text/plain"
		, "vcf"   : "text/x-vcard"
		, "vcs"   : "text/x-vcalendar"
		, "vrml"  : "model/vrml"
		, "war"   : "application/java-archive"
		, "wav"   : "audio/x-wav"
		, "wma"   : "audio/x-ms-wma"
		, "wmv"   : "video/x-ms-wmv"
		, "wmx"   : "video/x-ms-wmx"
		, "wrl"   : "model/vrml"
		, "wsdl"  : "application/wsdl+xml"
		, "xbm"   : "image/x-xbitmap"
		, "xhtml"   : "application/xhtml+xml"
		, "xls"   : "application/vnd.ms-excel"
		, "xml"   : "application/xml"
		, "xpm"   : "image/x-xpixmap"
		, "xsl"   : "application/xml"
		, "xslt"  : "application/xslt+xml"
		, "yaml"  : "text/yaml"
		, "yml"   : "text/yaml"
		, "zip"   : "application/zip"
},
repeatStr = function(str, times) {
	return (new Array(times)).join(str);
},
displayObject = function(obj, indent) {
	if (indent>10) return '[deeper..]';
	var str = [];
	indent=indent||0;
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			if ("object"===typeof obj[prop]) str.push(repeatStr(' ', indent)+prop+": {\n"+displayObject(obj[prop], indent+1)+repeatStr(' ', indent)+"\n}\n");
			else str.push(repeatStr(' ', indent)+prop+': '+obj[prop]);
		}
	}
	return str.join("\n");
},
dispenser = function(response, status, data) {
	var statusCode,contentType=null;
	switch(status) {
		case 404:
			statusCode=404;
			contentType = 'text/plain';
			content = 'Not found';
		break;
		
		case 200:
			statusCode=200;
			contentType = data['Content-Type']||'text/plain';
			content = data.content||'';
		break;
		case 500:
		default:
			statusCode=500;
			contentType = 'text/plain';
			content = 'Server error';
		break;
	}
	
	 response.writeHead(status, {
	 	"Content-Type": contentType,
	 	"Access-Control-Allow-Origin": "*"
	 });
     response.write(content, 'binary');
	 response.end();
},
lastRecirectedPath = '',
redirect = function(response, pathname) {
	if (lastRecirectedPath===pathname)
	return dispenser(response, 500, {
		content: 'Infinity redirect'
	});
	fs.exists(pathname, function(exists) {
		if (exists) {
			fs.lstat(pathname, function(err, stat) {
				if (err) {
					return dispenser(response, 500, err);
				} else {
					if (stat.isDirectory()) {
						/*
						Trying to get index.html
						*/
						redirect(response, pathname+'index.html');
					} else {
						fs.readFile(pathname, function(err, content) {
							if (err) {
								return dispenser(response, 500, err);
							} else {

								dispenser(response, 200, {
									content: content,
									"Content-Type": extTypes[path.extname(pathname).substr(1).toLowerCase()] || "text/plain"
								});
							}
						});
					}
				}
			});
		} else {
			// 404
			dispenser(response, 404);
		}
	});
},
router = function(request, response) {
	var pathname = here+url.parse(request.url).pathname;
	redirect(response, pathname);
	
},
port=process.argv[2]||7777.
http.createServer(function(request, response) {
 	router(request, response);
}).listen(port, '127.0.0.1');
console.log('Server started at port '+port);
console.log('Visit http://127.0.0.1:'+port+'/ to see your site');
