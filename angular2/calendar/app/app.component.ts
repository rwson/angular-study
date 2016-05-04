/**
 *  app组件
 */

import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<div class="datetimepicker" style="left: 512px; z-index: 1010;">
    <div class="datetimepicker-days" style="display: block;">
        <table class=" table-condensed">
            <thead>
            <tr>
                <th class="prev" style="visibility: visible;"><i class="glyphicon icon-arrow-left"></i></th>
                <th colspan="5" class="switch">{{year}} - {{month}}</th>
                <th class="next" style="visibility: visible;"><i class="glyphicon icon-arrow-right"></i></th>
            </tr>
            <tr>
                <th class="dow">Mo</th>
                <th class="dow">Tu</th>
                <th class="dow">We</th>
                <th class="dow">Th</th>
                <th class="dow">Fr</th>
                <th class="dow">Sa</th>
                <th class="dow">Su</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="day old">27</td>
                    <td class="day old">28</td>
                    <td class="day old">29</td>
                    <td class="day old">30</td>
                    <td class="day old">31</td>
                    <td class="day">1</td>
                    <td class="day">2</td>
                </tr>
                <tr>
                    <td class="day">3</td>
                    <td class="day">4</td>
                    <td class="day">5</td>
                    <td class="day">6</td>
                    <td class="day">7</td>
                    <td class="day">8</td>
                    <td class="day">9</td>
                </tr>
                <tr>
                    <td class="day">10</td>
                    <td class="day">11</td>
                    <td class="day">12</td>
                    <td class="day">13</td>
                    <td class="day">14</td>
                    <td class="day">15</td>
                    <td class="day active">16</td>
                </tr>
                <tr>
                    <td class="day">17</td>
                    <td class="day">18</td>
                    <td class="day">19</td>
                    <td class="day">20</td>
                    <td class="day">21</td>
                    <td class="day">22</td>
                    <td class="day">23</td>
                </tr>
                <tr>
                    <td class="day">24</td>
                    <td class="day">25</td>
                    <td class="day">26</td>
                    <td class="day">27</td>
                    <td class="day">28</td>
                    <td class="day">29</td>
                    <td class="day">30</td>
                </tr>
                <tr>
                    <td class="day new">1</td>
                    <td class="day new">2</td>
                    <td class="day new">3</td>
                    <td class="day new">4</td>
                    <td class="day new">5</td>
                    <td class="day new">6</td>
                    <td class="day new">7</td>
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
    <div class="datetimepicker-months" style="display: none;">
        <table class="table-condensed">
            <thead>
                <tr>
                    <th class="prev" style="visibility: visible;"><i class="glyphicon icon-arrow-left"></i></th>
                    <th colspan="5" class="switch">1979</th>
                    <th class="next" style="visibility: visible;"><i class="glyphicon icon-arrow-right"></i></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colspan="7"><span class="month">Jan</span><span class="month">Feb</span><span
                            class="month">Mar</span><span class="month">Apr</span><span class="month">May</span><span
                            class="month">Jun</span><span class="month">Jul</span><span class="month">Aug</span><span
                            class="month active">Sep</span><span class="month">Oct</span><span class="month">Nov</span><span
                            class="month">Dec</span></td>
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
    <div class="datetimepicker-years" style="display: none;">
        <table class="table-condensed">
            <thead>
                <tr>
                    <th class="prev" style="visibility: visible;"><i class="glyphicon icon-arrow-left"></i></th>
                    <th colspan="5" class="switch">1970-1979</th>
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

    date;                //  日期对象
    year;                //  年份
    month;               //  月份
    day;                 //  多少号
    daysArr;             //  一年中所有月份天数的数组
    days;                //  当前月一共多少天
    marginLeft;          //  距离左边的距离,星期几的效果
    curState;            //  当前选择面板,根据这个来显示层级("date":日,"month":月,"year":年)

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
        let date;
        if (type == "month") {
            this.month -= 1 < 1 ? () => {
                this.month = 12;
                this.year -= 1;
            } : this.month;
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
     * @param num   传入的值
     */
    next(type:String = "month", num:any):void {
        let date;
        if (type == "month") {
            this.month += 1 > 12 ? () => {
                this.month = 1;
                this.year += 1;
            } : this.month;
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
    dateGenerator(date:Date):void {
        this.date = date || new Date();
        this.year = this.date.getFullYear();
        this.month = this.date.getMonth() + 1;
        this.day = this.date.getDate();
        this.daysArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((this.year % 4 == 0 && this.year % 100 != 0) || (this.year % 400 == 0)) {
            this.daysArr[1] = 29;
        }
        this.days = [];
        for (let i = 1, days = this.daysArr[this.month - 1]; i <= days; i++) {
            this.days.push(i);
        }
    }

}
