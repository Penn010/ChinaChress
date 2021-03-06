// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

import {chressCard} from '../lib/defineGame';
import Chress from '../lib/CardChress'

import gm from "../gm"

@ccclass
export default class bxiang extends Chress {

    private id: number = chressCard.Prime;  //象 黑 

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }
    getload():number[][]{
        let temp = []
        cc.log(gm.qipanNode)
        if (this.positiony-1 >=0 && this.positionx -1 >= 0  ){
            cc.log("棋子位置检查 -1 -1",this.positiony,this.positionx )
            cc.log(gm.qipanNode[this.positionx-1][this.positiony-1])
            if (gm.qipanNode[this.positionx-1][this.positiony-1] == null){
                temp.push([this.positionx -2,this.positiony-2])
            }
        }
        if (this.positiony-1 >=0 && this.positionx +1  <= 4 ){
            cc.log("棋子位置检查 -1 +1",this.positiony,this.positionx)
            cc.log(gm.qipanNode[this.positionx+1][this.positiony -1])
            if (gm.qipanNode[this.positionx+1][this.positiony-1] == null){
                temp.push([this.positionx +2,this.positiony-2])
            }
        }

        if (this.positiony+1 <= 8 && this.positionx +1  <= 4 ){
            cc.log("棋子位置检查 +1 +1",this.positiony,this.positionx )
            cc.log(gm.qipanNode[this.positionx+1][this.positiony +1])
            if (gm.qipanNode[this.positionx+1][this.positiony+1] == null){
                temp.push([this.positionx +2,this.positiony+2])
            }
        }
        if (this.positiony+1 <= 8 && this.positionx -1  >= 0 ){
            cc.log("棋子位置检查 +1 -1",this.positiony,this.positionx)
            cc.log(gm.qipanNode[this.positionx+1][this.positiony -1])
            if (gm.qipanNode[this.positionx+1][this.positiony-1] == null){
                temp.push([this.positionx -2,this.positiony+2])
            }
        }
        
        return temp
    }
    // update (dt) {}
}
