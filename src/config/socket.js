import constants from "./constants";

const getWsUrl = () => {
  const { protocol } = window.location;

  if (protocol === "http:") {
    return "wss://" + constants.WS_URL;
  } else {
    return "wss://" + constants.WS_URL;
  }
};

// function connect() {
//   return new Promise((resolve, reject) => {
//     const uri = getWsUrl();
//     if (ws && ws.readyState === 1) {
//       return resolve();
//     }
//     ws = new WebSocket(uri);
//     ws.onopen = () => {
//       resolve();
//     };
//     ws.onerror = (err) => {
//       console.log("connect web socket error: ", err);
//       reject(err);
//     };
//     ws.onclose = () => {
//       console.log("websocket closed");
//     };
//     ws.onmessage = handleMessage;
//   });
// }

// function handleMessage(evt) {
//     if (typeof evt.data === 'string') {
//         const msg = JSON.parse(evt.data);
//         const {
//           type,
//           payload,
//         } = msg;

//         return {type, payload}

// }
export default getWsUrl;
