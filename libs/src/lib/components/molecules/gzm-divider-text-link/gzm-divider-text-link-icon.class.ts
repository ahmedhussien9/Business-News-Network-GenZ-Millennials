import {
  GzmDividerClass,
  GzmTextClass,
  GzmLinkClass,
  GzmIconClass,
} from '../../atoms';

/**
 * Represents a class for the GzmDividerTextLinkIcon component.
 */
export class GzmDividerTextLinkIconClass {
  visible = false;
  divider = new GzmDividerClass();
  text = new GzmTextClass();
  link = new GzmLinkClass('');
  icon = new GzmIconClass();

  /**
   * Sets the visibility of the GzmDividerTextLinkIcon component.
   * @param visible - A boolean value indicating the visibility of the component.
   */
  setvisible(visible: boolean): void {
    this.visible = visible;
  }
}
