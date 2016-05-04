/**
 *  app组件
 */

import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: '<h1>calendar</h1>'
})
export class AppComponent {

    date:Date;                  //  日期对象
    year:Number;                //  年份
    month:Number;               //  月份
    day:Number;                 //  多少号
    daysArr:Array<Number>;      //  一年中所有月份天数的数组
    days:Array<Number>;         //  当前月一共多少天
    marginLeft:String;          //  距离左边的距离,星期几的效果
    curState:String;            //  当前选择面板,根据这个来显示层级("date":日,"month":月,"year":年)

    /**
     * 类的构造器
     */
    constructor() {
        this.dateGenerator();
        this.curState = "date";
    }

    /**
     * 上月/上年
     * @param type  选择类型(month:月份,year:年份)
     * @param num   传入的值
     */
    last(type:String = "month", num:any):void {
        if (type == "month") {

        } else if (type == "year") {

        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
    }

    /**
     * 下月/下年
     * @param type  选择类型(month:月份,year:年份)
     * @param num   传入的值
     */
    next(type:String = "month", num:any):void {
        if (type == "month") {

        } else if (type == "year") {

        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
    }

    /**
     * 点击月份选择
     * @param type  选择类型(month:月份,year:年份)
     * @param num   传入的值
     */
    selectMonthOrYear(type:String = "month", num:any):void {
        if (type == "month") {
            this.month = parseInt(num);
        } else if (type == "year") {
            this.year = parseInt(num);
        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
    }

    /**
     * 生成AppComponent关于日期的相关成员属性
     */
    dateGenerator():void {
        this.date = new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((this.year % 4 == 0 && this.year % 100 != 0) || (this.year % 400 == 0)) {
            this.daysArr[1] = 29;
        }
        this.days = this.daysArr[this.month];
    }

}
