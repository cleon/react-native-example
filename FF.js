import LDClient from "launchdarkly-react-native-client-sdk";

const FF = (() => {
    let ldClient = null;

    function client() {
        if (!ldClient) {
            console.log('Initializing ldClient...');
            const sdk = { mobileKey: '<YOUR MOBILE KEY>' };
            const user = { key: '<YOUR USER KEY>' };
            (() => {
                ldClient = new LDClient();
                ldClient
                    .isOffline()
                    .then((offline) => {
                        if (offline) {
                            console.log('ldClient is OFFLINE');
                            ldClient
                                .configure(sdk, user)
                                .then(() => {
                                    console.log('ldClient is now configured');
                                    ldClient
                                        .isInitialized()
                                        .then((inited) => {
                                            console.log('ldClient.isInitialized() =', inited);
                                        })
                                })
                                .catch((e) => {
                                    console.log('ldClient.configure threw an Exception:', e);
                                    throw e;
                                });
                        } else { console.log('ldClient is ONLINE'); }
                    })
                    .catch((e) => {
                        console.error('Error in ldClient:', e);
                        ldClient.close();
                        ldClient = null;
                    });
            })();
        }
        return ldClient;
    }

    function close() {
        if (ldClient) { ldClient.close(); }
    }

    return {
        connect: () => {
            client();
        },
        stringFlagValue: async (flagKey, fallback) => {
            return await client().stringVariation(flagKey, fallback);
        },
        booleanFlagValue: async (flagKey, fallback) => {
            return await client().boolVariation(flagKey, fallback);
        },
        disconnect: () => {
            close();
        }
    }
})();

export default FF;