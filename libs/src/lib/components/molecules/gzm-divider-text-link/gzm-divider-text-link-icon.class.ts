import {
  GzmDividerClass,
  GzmTextClass,
  GzmLinkClass,
  GzmIconClass,
} from '../../atoms';

export class GzmDividerTextLinkIconClass {
  visible = false;
  divider = new GzmDividerClass();
  text = new GzmTextClass();
  link = new GzmLinkClass('');
  icon = new GzmIconClass();

  setvisible(visible: boolean): void {
    this.visible = visible;
  }
}
