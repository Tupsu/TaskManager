function authenticate(username, password) {
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
		complete: setToken,
		contentType: Strings.contentType
	});
}

// Called when sending of soap message is complete
function setToken(xmlHttpRequest, status) {
    "use strict";
    
    var token;
    
	if (status === Strings.success) {
		token = $(xmlHttpRequest.responseText)
	.find(Strings.soapTokenElement).text();
	localStorage.setItem(Strings.token, token);
	}
}