import { GzmTitleClass } from '../../atoms';
import { GzmIconClass } from '../../atoms/gzm-icon/gzm-icon.class';

/**
 * Represents a class for the GzmVideoIconTitle component.
 */
export class GzmVideoIconTitleClass {
  /**
   * Indicates whether the component is visible or not.
   */
  visible = true;

  /**
   * Represents the icon for the component.
   */
  icon = new GzmIconClass();

  /**
   * Represents the title for the component.
   */
  title = new GzmTitleClass();
}
