var PanelOSAdBlockerClient = {

    PANELOS_CLIENT_CONSTS: {
        MESSAGE_ID: 'PANELOS_MESSAGE',
        GET_ADBLOCKER_STATUS: 'GET_ADBLOCKER_STATUS',
        GET_ADBLOCKER_COUNTERS: 'GET_ADBLOCKER_COUNTERS',
        ENABLE_ADBLOCKER: 'ENABLE_ADBLOCKER',
        DISABLE_ADBLOCKER: 'DISABLE_ADBLOCKER'
    },
    
    PANELOS_CLIENT_ERRORS: {
        UNKNOWN: {code: 0, description: 'error unknown'},
        GET_ADBLOCKER_STATUS: {code: 3, description: 'error get AdBlocker status'},
        GET_ADBLOCKER_COUNTERS: {code: 4, description: 'error get AdBlocker counters'},
        ENABLE_ADBLOCKER: {code: 5, description: 'AdBlocker activation error'},
        DISABLE_ADBLOCKER: {code: 6, description: 'AdBlocker deactivation error'}
    },

    GetMessage: function (type, content) {
        return {
            posdMessageId: this.PANELOS_CLIENT_CONSTS.MESSAGE_ID,
            type: type,
            content: content
        };
    },

    EnableAdBlocker: function(onEnabledCallback, onErrorCallback) {
        chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.ENABLE_ADBLOCKER, ''), (response)=>{
            if (response && response.adBlockerStatus && onEnabledCallback) {
               onEnabledCallback(response.adBlockerStatus);
            } else if (onErrorCallback) {
               onErrorCallback(this.PANELOS_CLIENT_ERRORS.ENABLE_ADBLOCKER);
            }
        });
    },

    DisableAdBlocker: function(onDisabledCallback, onErrorCallback) {
        chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.DISABLE_ADBLOCKER, ''), (response)=>{
            if (response && response.adBlockerStatus && onDisabledCallback) {
               onDisabledCallback(response.adBlockerStatus);
            } else if (onErrorCallback) {
               onErrorCallback(this.PANELOS_CLIENT_ERRORS.DISABLE_ADBLOCKER);
            }
        });
    },

    GetAdBlockerStatus: function(onGetAdBlockerStatusCallback, onErrorCallback) {
        chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.GET_ADBLOCKER_STATUS, ''), (response)=>{
            if (response && response.adBlockerStatus && onGetAdBlockerStatusCallback) {
               onGetAdBlockerStatusCallback(response.adBlockerStatus);
            } else if (onErrorCallback) {
               onErrorCallback(this.PANELOS_CLIENT_ERRORS.GET_ADBLOCKER_STATUS);
            }
        });       
    },

    GetAdBlockerCounters: function(onGetAdBlockerCountersCallback, onErrorCallback) {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{            
            if (tabs && tabs[0] && tabs[0].id) {
                chrome.runtime.sendMessage(this.GetMessage(this.PANELOS_CLIENT_CONSTS.GET_ADBLOCKER_COUNTERS, tabs[0].id), (response)=>{
                    if (response && response.counters && onGetAdBlockerCountersCallback) {
                       onGetAdBlockerCountersCallback(response.counters);
                    } else if (onErrorCallback) {
                       onErrorCallback(this.PANELOS_CLIENT_ERRORS.GET_ADBLOCKER_COUNTERS);
                    }
                });
            }
        });           
    }
}

window.PanelOSClient = PanelOSAdBlockerClient;