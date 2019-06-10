(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/code/chressCard/rShuai.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '05da2lArfpIUpsXfueO9/MJ', 'rShuai', __filename);
// code/chressCard/rShuai.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var defineGame_1 = require("../lib/defineGame");
var CardChress_1 = require("../lib/CardChress");
var rShuai = /** @class */ (function (_super) {
    __extends(rShuai, _super);
    function rShuai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = defineGame_1.chressCard.command; //黑 马 
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    rShuai.prototype.start = function () {
    };
    rShuai = __decorate([
        ccclass
    ], rShuai);
    return rShuai;
}(CardChress_1.default));
exports.default = rShuai;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=rShuai.js.map
        