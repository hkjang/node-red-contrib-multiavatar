node-red-contrib-multiavatar
================

Node-RED node for multiavatar



## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-multiavatar, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-multiavatar

## wrapper multiavatar 
Default API limits for unauthenticated users are 10 calls per minute.
- https://api.multiavatar.com/


## Sample Flow
```json
[{"id":"b4b02551.a0cf38","type":"multiavatar","z":"d73d0463.ce8308","name":"","avatarId":"Binx Bond","x":310,"y":260,"wires":[["f97ecf54.9fc1a","4d2c9d6b.918ad4"]]},{"id":"34b69a04.aea036","type":"inject","z":"d73d0463.ce8308","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":150,"y":260,"wires":[["b4b02551.a0cf38"]]},{"id":"f97ecf54.9fc1a","type":"debug","z":"d73d0463.ce8308","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":480,"y":300,"wires":[]},{"id":"37546da4.6c45b2","type":"file","z":"d73d0463.ce8308","name":"","filename":"avatar.svg","appendNewline":true,"createDir":false,"overwriteFile":"true","encoding":"none","x":620,"y":260,"wires":[["20bec4f8.2fb75c"]]},{"id":"4d2c9d6b.918ad4","type":"function","z":"d73d0463.ce8308","name":"","func":"msg.payload = msg.payload.data\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":470,"y":260,"wires":[["37546da4.6c45b2"]]},{"id":"20bec4f8.2fb75c","type":"debug","z":"d73d0463.ce8308","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":780,"y":260,"wires":[]}]
```
