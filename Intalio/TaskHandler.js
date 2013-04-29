function getAvailableTasks(participantToken, taskType, subQuery) {
	var participantToken = participantToken;
	var taskType = taskType;
	var subQuery = subQuery;
	var taskManagementServiceUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') +"/axis2/services/TaskManagementServices?wsdl";
	
	var soapMessage = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" " +
"xmlns:tas=\"http://www.intalio.com/BPMS/Workflow/TaskManagementServices-20051109/\">" +
"<soapenv:Header/>" +
   "<soapenv:Body>" +
      "<tas:getAvailableTasksRequest>" +
         "<tas:participantToken>" + participantToken + "</tas:participantToken>" +
         "<tas:taskType>" + taskType + "</tas:taskType>" +
         "<tas:subQuery>" + subQuery + "</tas:subQuery>" +
      "</tas:getAvailableTasksRequest>" +
   "</soapenv:Body>" +
"</soapenv:Envelope>";

	$.ajax({
		url: taskManagementServiceUrl,
		type: "POST",
		dataType: "xml",
		data: soapMessage,
		complete: buildTaskList,
		contentType: "text/xml; charset=\"utf-8\""
	});
}

// Called when sending of soap message is complete
function buildTaskList(xmlHttpRequest, status) {
	
	if (status = "success") {
		$(xmlHttpRequest.responseText).find('tms\\:task').each(function() {
			var taskId = $(this).find('tms\\:taskId').text();
			var taskState = $(this).find('tms\\:taskState').text();
			var type = resolveTaskType($(this).find('tms\\:taskType').text());
			var description = $(this).find('tms\\:description').text();
			var formUrl = $(this).find('tms\\:formUrl').text();
			var creationDate = $(this).find('tms\\:creationDate').text();
			
			var constructedFormUrl = constructFormUrl(
			    taskId,
			     type,
			      formUrl,
			       localStorage.getItem('token'),
			        "intalio\\admin", "false");
			        
			$('#taskList').append('<li><a href=\" ' 
			+ constructedFormUrl +
			 '\" data-ajax=\"false\">' +
			  description + '</a></li>');
				// This fixes problem where listview style disappear
				$('.ui-page-active .ui-listview').listview('refresh');
		});
	}
}

function resolveTaskType(taskType) {
    if (taskType == "ACTIVITY") {
        return "PATask";
    } else if (taskType == "NOTIFICATION") {
        return "Notification";
    } else {
        return "PIPATask";
    }
}

function constructFormUrl (taskId, type, formUrl, token, user, claimTaskOnOpen) {
	var url = formUrl +
	 "?id=" + taskId +
	  "&type=" + type +
	   "&url=" + formUrl +
	    "&token=" + token +
	     "&user=" + user + 
	     "&claimTaskOnOpen=" + claimTaskOnOpen;
	     
	     return url;
}
