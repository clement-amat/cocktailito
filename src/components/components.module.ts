import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { DetailComponent } from './detail/detail';
import { SearchPage } from '../pages/search/search';
@NgModule({
	declarations: [
        ListComponent,
        DetailComponent,
        SearchPage
    ],
	imports: [],
	exports: [
        ListComponent,
        DetailComponent,
        SearchPage
    ]
})
export class ComponentsModule {}
