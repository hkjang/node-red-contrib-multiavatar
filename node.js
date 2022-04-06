const axios = require('axios');
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);

        var node = this;
        this.name = n.name;
        for (var key in n) {
            node[key] = n[key] || "";
        }

        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            try{
                node.error(node.avatarId);
                axios('https://api.multiavatar.com/' + JSON.stringify(node.avatarId))
                    .then(svg => {
                        node.error('Image', svg);
                        msg.payload = svg;
                        node.send(msg);
                    })
            }catch (e){
                node.error(e);
            }
        });
    }
    RED.nodes.registerType("multiavatar", FunctionNode, {});
};

