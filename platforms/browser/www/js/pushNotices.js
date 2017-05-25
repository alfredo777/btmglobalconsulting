function Main() {
   console.log('Loading push notice ....');
   document.addEventListener("deviceready" , initPushwoosh, true);
   document.addEventListener("push-notification" , notificationReceived);
}

function notificationReceived(event) {
 var message;
  message=event.notification.message;
  _msgbox_confirm("message:"  +  message);
}

function initPushwoosh() {
  console.log('Init Push');
  var pushwoosh = cordova.require("pushwoosh-cordova-plugin.PushNotification");
  alert(string(pushwoosh));
  document.addEventListener('push-notification', function(event) {
    var notification = event.notification;
  });

  pushwoosh.onDeviceReady({appid:"0A370-92088"},
  function initSuccess(status){
    console.log("push token: "  +  status);
  }, 
  function initFail(status){
    console.log("push token: "  +  status);
  } );
  /*
  pushwoosh.registerDevice(
    function initSuccess(status) {
      var pushToken = status.pushToken;
      console.log(pushToken);
      console.log("push token: "  +  status);
    },
    function initFail(status) {
        console.log(JSON.stringify("failed to register "  +  status));
    }
  );*/
}
