(function() {
    'use strict';
    // TODO add service worker code here
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./service-worker.js')
               .then(function() { console.log('Service Worker Registered'); });
    }



    
    if (!('Notification' in window)){
      console.log('This browser does not support notifications');
      alert(':-(');
      return;
    } else {
      
      Notification.requestPermission(function(status) {
        console.log('Notification permission status: ', status);
        
      }); 
      if (Notification.permission == 'granted') {
        navigator.serviceWorker.getRegistration().then(function(reg) {
          var options = { 
            body: `Quiz Notification`,
            icon: 'images/192x192.png',
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now()+5000,
              primaryKey: 1
            },  
          };
        //  reg.showNotification('Push Notification '+Date.now(), options);
        }); 
      }   
    }  
  })();