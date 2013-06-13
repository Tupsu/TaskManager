function authenticate(username, password, callback) {
    "use strict";
    
    var tokenServiceUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + Strings.tokenServiceUrl;
    var soapMessage =
	'<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\"' +
    ' xmlns:tok=\"http://tempo.intalio.org/security/tokenService/\">' +
   ' <soapenv:Header/>' +
   ' <soapenv:Body>' +
     ' <tok:authenticateUser>' +
        ' <tok:user>' + username + '</tok:user>' +
         ' <tok:password>' + password + '</tok:password>' +
      ' </tok:authenticateUser>' +
   ' </soapenv:Body>' +
' </soapenv:Envelope>';

	$.ajax({
		url: tokenServiceUrl,
		type: Strings.type,
		dataType: Strings.dataType,
		data: soapMessage,
		contentType: Strings.contentType,
		// Request complete, store token
		complete: function(xmlHttpRequest, status) {
		    var token;
    
            if (status === Strings.success) {
            
            // Find token string    
            token = $(xmlHttpRequest.responseText)
            .find(Strings.soapTokenElement).text();
            localStorage.setItem(Strings.token, token);
            callback();
		    }
		}
    });
}