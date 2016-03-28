import { Component } from "angular2/core";
import { RouteConfig, ROUTER_DIRECTIVES } from "angular2/router";

import { Page1 } from "./Page1/Page1.component";
import { Page2 } from "./Page2/Page2.component";

@Component({
    selector: "main-window",
    template:   `
                    <div>
                        <a [routerLink]="['Page1']">Page1</a>
                        <a [routerLink]="['Page2']">Page2</a>
                    </div>
                    <router-outlet></router-outlet>
                `,
    directives: [ROUTER_DIRECTIVES]
})

//  路由配置
@RouteConfig([
    { path: "/page1", name: "Page1", component: Page1, useAsDefault: true },
    { path:"/page2", name: "Page2", component: Page2 }
])

export class MainWindow {
}