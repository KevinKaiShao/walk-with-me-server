
export default {
    host: 'wss://mr2hd0llj3vw9d.messaging.solace.cloud:8443',
    username: 'solace-cloud-client',
    password: 'knkrdekvrls7jnlptrbu88ru2k',
    clientId: 'myUniqueClientId',
    keepalive: 10,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 10000,
    will: {
        topic: 'exampletopic',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    rejectUnauthorized: false
};