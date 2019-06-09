import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    pan: {direction: Hammer.DIRECTION_VERTICAL},
  };
}
