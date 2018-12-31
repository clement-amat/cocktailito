import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { DetailComponent } from './detail/detail';
@NgModule({
	declarations: [ListComponent,
    DetailComponent],
	imports: [],
	exports: [ListComponent,
    DetailComponent]
})
export class ComponentsModule {}
