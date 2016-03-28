import { MainWindow } from './app.components';
import { bootstrap } from 'angular2/platform/browser';
import { provide } from "angular2/core";
import { 
		ROUTER_DIRECTIVES,
		ROUTER_PROVIDERS,
		RouteConfig,
		Location,
		LocationStrategy,
		HashLocationStrategy
	} from 'angular2/router';

//	在Angular2中,默认是pushState的路由,加上{useClass: HashLocationStrategy}可以用hash
bootstrap(MainWindow, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy })
]);