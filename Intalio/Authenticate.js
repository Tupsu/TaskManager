function authenticate(username, password) {
    var tokenServiceUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/axis2/services/TokenService?wsdl";
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
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: getToken,
		contentType: "text/xml; charset=\"utf-8\""
	});
}

// Called when sending of soap message is complete
function getToken(xmlHttpRequest, status) {
	var token;
	
	if (status = "success") {
		token = $(xmlHttpRequest.responseText)
	.find('tokenws\\:token').text();
	// Store token in hidden input element
	localStorage.setItem('token', token);
	//$('#token').val(token);
	//getAvailableTasks(token, "ACTIVITY", "T._state = TaskState.READY");
	}
}
