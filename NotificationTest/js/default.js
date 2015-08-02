// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	var testToast = function () {
	    var notifications = Windows.UI.Notifications;
	    var template = notifications.ToastTemplateType.toastText02;
	    var toastXml = notifications.ToastNotificationManager.getTemplateContent(template);
	    var toastTextElements = toastXml.getElementsByTagName("text");
	    toastTextElements[0].appendChild(toastXml.createTextNode("Hello World!"));
	    toastXml.selectSingleNode("/toast").setAttribute("launch", '{"type":"toast","param1":"12345","param2":"67890"}');
	    var toast = new notifications.ToastNotification(toastXml);
	    var toastNotifier = notifications.ToastNotificationManager.createToastNotifier();
	    toastNotifier.show(toast);
	}

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}
			args.setPromise(WinJS.UI.processAll());
		}

        setInterval(testToast, 4000)
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	app.start();
})();
