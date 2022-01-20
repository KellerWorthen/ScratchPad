class Gamepad { //In both instances, Gamepad will be the name in both instances
}
Scratch.extensions.register(new Gamepad());
class Gamepad {
    getInfo() {
        return {
            "id": "Gamepad",
            "name": "Gamepad",
            "blocks": [{
                    "opcode": "substringy",
                    "blockType": "reporter",
                    "text": "letters [num1] through [num2] of [string]",
                    "arguments": {
                        "num1": {
                            "type": "number",
                            "defaultValue": "2"
                        },
                        "num2": {
                            "type": "number",
                            "defaultValue": "5"
                        },
                        "string": {
                            "type": "string",
                            "defaultValue": "hello world"
                        }
                    }
                },
            }],
        "menus": { //we will get back to this in a later tutorial
        }
    };
    substringy({num1, num2, string}) {
        return string.substring(num1 - 1, num2);
    };
}
