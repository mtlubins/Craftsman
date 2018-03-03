import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BaseHttpService} from './http/base-http.service';
import {CraftsmenResourceService} from './resources/craftsmen-resource.service';

const MAIN_RESOURCES = [
  {
    provide: BaseHttpService, useClass: BaseHttpService
  },
  {
    provide: CraftsmenResourceService, deps: [BaseHttpService],
    useFactory(http: BaseHttpService) {
      return new CraftsmenResourceService(http);
    }
  },
];

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ...MAIN_RESOURCES
  ],
})
export class RestLayerModule {}



