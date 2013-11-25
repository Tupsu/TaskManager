/** 
 	This file is part of TaskManager.

    TaskManager is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    TaskManager is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with TaskManager.  If not, see <http://www.gnu.org/licenses/>.
 **/

/**
 * Receive tasks from Intalio server and update task list UI accordingly.
 * @author Teemu Räsänen
 */
function getAvailableTasks(participantToken, taskType, subQuery) {
    "use strict";
    
	var taskManagementServiceUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + Strings.taskManagementServiceUrl;
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
		type: Strings.type,
		dataType: Strings.dataType,
		data: soapMessage,
		complete: buildTaskList,
		contentType: Strings.contentType
	});
}

// Called when sending of soap message is complete
function buildTaskList(xmlHttpRequest, status) {
	"use strict";
	
	if (status === Strings.success) {
        // Loop trought all task elements in response message
		$(xmlHttpRequest.responseText).find(Strings.soapTaskElement).each(function() {
			var taskId = $(this).find(Strings.soapTaskIdElement).text();
			var taskState = $(this).find(Strings.soapTaskStateElemet).text();
			var type = resolveTaskType($(this).find(Strings.soapTaskTypeElement).text());
			var description = $(this).find(Strings.soapTaskDescriptionElement).text();
			var formUrl = $(this).find(Strings.soapFormUrlElement).text();
			var creationDate = $(this).find(Strings.soapCrtnDtElement).text();
			
			var constructedFormUrl = constructFormUrl(
			    taskId,
			     type,
			      formUrl,
			       localStorage.getItem(Strings.token),
			        Strings.defaultUser, Strings.strFalse);

		    var doRefresh = true;
			appendToTaskList(constructedFormUrl, description, doRefresh);
		});
	}
}

function resolveTaskType(taskType) {
    "use strict";
    
    if (taskType === Strings.activity) {
        return Strings.PATask;
    } else if (taskType === Strings.notification) {
        return Strings.notificationLwrCs;
    }
    return Strings.PIPATask;
}

function constructFormUrl (taskId, type, formUrl, token, user, claimTaskOnOpen) {
    "use strict";
    
	var url = formUrl +
	 "?id=" + taskId +
	  "&type=" + type +
	   "&url=" + formUrl +
	    "&token=" + token +
	     "&user=" + user + 
	     "&claimTaskOnOpen=" + claimTaskOnOpen;
	     
	     return url;
}

function appendToTaskList(url, description, doRefresh) {
    var liStart = "<li>";
    var liEnd = "</li>";
    
    var linkStart = '<a href=\" ';
    var linkEnd = "</a>";
    
    var dataAjax = '\" data-ajax=\"false\">';
    
    $('#taskList').append(liStart +
         linkStart +
          url +
           dataAjax +
            description +
             linkEnd +
              liEnd);
              
    if (doRefresh) {
      // This fixes problem where listview style disappear
      $('.ui-page-active .ui-listview').listview('refresh');
    }
}
