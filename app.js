
/**
 * Service worker registration
 */
if ('OneSignalSDKWorker.js' in navigator) {
    window.addEventListener('load', function() {

        /**
         * You can call register() every time a page loads without concern;
         * the browser will figure out if the service worker is already registered or not and handle it accordingly.
         */
        navigator.serviceWorker.register('./OneSignalSDKWorker.js', {scope : "./"} ).then(function(registration) {
            
            // everything is ok
            console.log('ServiceWorker registrato con successo, scope: ', registration.scope);

        }, function(err) {
            // an error occurred
            console.log('ServiceWorker registration failed: ', err);
        });


        // Global flag to detect standalone display mode
        window.IS_STANDALONE = window.matchMedia('(display-mode: standalone)').matches;

    });
}
