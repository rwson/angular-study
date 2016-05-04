/**
 *  app组件
 */

import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<div class="datetimepicker" style="left: 512px; z-index: 1010;">
    <div class="datetimepicker-days" [style.display]="curState == 'date' ? 'block' : 'none'">
        <table class=" table-condensed">
            <thead>
                <tr>
                    <th class="prev" style="visibility: visible;" (click)="last('month')"><i class="glyphicon icon-arrow-left"></i></th>
                    <th colspan="5" class="switch" (click)="curState='month'">{{year}} - {{monthName}}</th>
                    <th class="next" style="visibility: visible;" (click)="next('month')"><i class="glyphicon icon-arrow-right"></i></th>
                </tr>
                <tr>
                    <th class="dow">Su</th>
                    <th class="dow">Mo</th>
                    <th class="dow">Tu</th>
                    <th class="dow">We</th>
                    <th class="dow">Th</th>
                    <th class="dow">Fr</th>
                    <th class="dow">Sa</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#item of days;#i = index;">
                    <td *ngFor="#itemIn of item"
                        [ngClass]="{
                            old:itemIn.old,
                            active:itemIn.active,
                            new:itemIn.new}"
                        class="day">{{itemIn.num}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th colspan="7" class="today">Today</th>
                </tr>
                <tr>
                    <th colspan="7" class="clear" style="display: none;">Clear</th>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="datetimepicker-months" [style.display]="curState == 'month' ? 'block' : 'none'">
        <table class="table-condensed">
            <thead>
                <tr>
                    <th class="prev" style="visibility: visible;"><i class="glyphicon icon-arrow-left"></i></th>
                    <th colspan="5" (click)="curState='year'" class="switch">{{monthName}}</th>
                    <th class="next" style="visibility: visible;"><i class="glyphicon icon-arrow-right"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="7">
                       <span class="month" *ngFor="#name of monthNames" (click)="selectMonthOrYear('month',name)">
                            {{name}}
                       </span>
                    </td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th colspan="7" class="today">Today</th>
                </tr>
                <tr>
                    <th colspan="7" class="clear" style="display: none;">Clear</th>
                </tr>
            </tfoot>
        </table>
    </div>
    <div class="datetimepicker-years" [style.display]="curState == 'year' ? 'block' : 'none'">
        <table class="table-condensed">
            <thead>
                <tr>
                    <th class="prev" style="visibility: visible;"><i class="glyphicon icon-arrow-left"></i></th>
                    <th colspan="5" class="switch">{{year}}</th>
                    <th class="next" style="visibility: visible;"><i class="glyphicon icon-arrow-right"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="7"><span class="year old">1969</span><span class="year">1970</span><span
                            class="year">1971</span><span class="year">1972</span><span class="year">1973</span><span
                            class="year">1974</span><span class="year">1975</span><span class="year">1976</span><span
                            class="year">1977</span><span class="year">1978</span><span class="year active">1979</span><span
                            class="year old">1980</span></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
})
export class AppComponent {

    date:Date;                  //  日期对象
    year:Number;                //  年份
    curYear:Number;             //  当前年份
    month:Number;               //  月份
    curMonth:Number;            //  当前月份
    monthNames:Array<String>;   //  月份名称数组
    monthName:String;           //  月份名称
    day:Number;                 //  多少号
    daysArr:Array<Number>;      //  一年中所有月份天数的数组
    days:Array<Array<Object>>;  //  当前月一共多少天
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
     */
    last(type:String = "month"):void {
        let date;
        if (type == "month") {
            this.month = this.month - 1;
            if (this.month < 1) {
                this.month = 12;
                this.year -= 1;
            }
        } else if (type == "year") {
            this.year -= 1;
        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
        date = new Date(`${this.year},${this.month},${this.day}`);
        this.dateGenerator(date);
    }

    /**
     * 下月/下年
     * @param type  选择类型(month:月份,year:年份)
     */
    next(type:String = "month"):void {
        let date;
        if (type == "month") {
            this.month = this.month + 1;
            if (this.month > 12) {
                this.month = 1;
                this.year += 1;
            }
        } else if (type == "year") {
            this.year += 1;
        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
        date = new Date(`${this.year},${this.month},${this.day}`);
        this.dateGenerator(date);
    }

    /**
     * 点击月份选择
     * @param type  选择类型(month:月份,year:年份)
     * @param arg   传入的值
     */
    selectMonthOrYear(type:String = "month", arg:any):void {
        let date;
        if (type == "month") {
            this.monthNames.forEach((name, index) => {
                if (name == arg) {
                    this.month = index + 1;
                }
            });
            this.curState = "date";
        } else if (type == "year") {
            this.year = parseInt(num);
            this.curState = "month";
        } else {
            throw "the argument type is passed an error value which only can be 'year' or 'month'";
        }
        date = new Date(`${this.year},${this.month},${this.day}`);
        console.log(date);
        this.dateGenerator(date);
    }

    /**
     * 生成AppComponent关于日期的相关成员属性
     */
    dateGenerator(date:Date):void {
        let last = 0;       //  上月份
        let next = 0;       //  下月份
        let lLastDay = 0;   //  上月最后一天星期几
        let firstDay = 0;   //  每月第一天对应星期几
        let nFirstDay = 0;  //  下月第一天对应星期几
        let lastDay = 0;    //  每月最后一天对应星期几
        this.date = date || new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.monthName = this.monthNames[this.month - 1];
        if ((this.year % 4 == 0 && this.year % 100 != 0) || (this.year % 400 == 0)) {
            this.daysArr[1] = 29;
        }
        this.days = [];

        //  当前年月同时不存在
        if (!this.curYear && !this.curMonth) {
            this.curYear = this.year;
            this.curMonth = this.month;
        }

        last = this.daysArr[(this.month - 2 < 1) ? 11 : this.month - 2];
        next = this.daysArr[(this.month + 1 > 12) ? 0 : this.month + 1];

        let arrs = [];      //  临时变量
        let len = 0;        //  存储第一层数组的长度

        //  获取几个星期几
        lLastDay = new Date(`${this.year},${this.month - 1},${this.daysArr[this.month - 2]}`).getDay();
        firstDay = new Date(`${this.year},${this.month},1`).getDay();
        nFirstDay = new Date(`${this.year},${this.month + 1},1`).getDay();
        lastDay = new Date(`${this.year},${this.month},${this.daysArr[this.month - 1]}`).getDay();

        //  当前月的第一天是星期天
        if (firstDay == 0) {
            for (let i = 1, days = this.daysArr[this.month - 1]; i <= days; i++) {
                arrs.push({
                    "old": false,
                    "active": i == this.day && this.curYear == this.year && this.curMonth == this.month,
                    "new": false,
                    "num": i
                });
                if (arrs.length == 7 || (i == days && arrs.length <= 7)) {
                    this.days.push(arrs);
                    arrs = [];
                    len += 1;
                }
            }
        } else if (firstDay != 0) {

            //  当前月的第一天不是星期天
            for (let j = last - lLastDay; j <= last; j++) {
                arrs.push({
                    "old": true,
                    "active": false,
                    "new": false,
                    "num": j
                });
            }

            for (let i = 1, days = this.daysArr[this.month - 1]; i <= days; i++) {
                arrs.push({
                    "old": false,
                    "active": i == this.day && this.curYear == this.year && this.curMonth == this.month,
                    "new": false,
                    "num": i
                });
                if (arrs.length == 7 || (i == days && arrs.length <= 7)) {
                    this.days.push(arrs);
                    arrs = [];
                    len += 1;
                }
            }
        }

        //  月份后面的几天
        if (this.days && this.days[len - 1].length < 7) {
            let lastArr = this.days[len - 1];
            for (let k = 1; k <= 7 - nFirstDay; k++) {
                if (lastArr.length < 7) {
                    lastArr.push({
                        "old": false,
                        "active": false,
                        "new": true,
                        "num": k
                    });
                }
            }
            this.days[len - 1] = lastArr;
        }

        console.log(this.days);
    }

}

//<span class="month">Jan</span><span class="month">Feb</span><span
//class="month">Mar</span><span class="month">Apr</span><span class="month">May</span><span
//class="month">Jun</span><span class="month">Jul</span><span class="month">Aug</span><span
//class="month active">Sep</span><span class="month">Oct</span><span class="month">Nov</span><span
//class="month">Dec</span>