import { GzmLinkClass } from '../../atoms';
import { GzmVideoClass } from '../../atoms/gzm-video';

/**
 * Represents a class for GzmVideoLink.
 */
export class GzmVideoLinkClass {
  /**
   * The video properties for GzmVideoLink.
   */
  videoProps = new GzmVideoClass();

  /**
   * The link properties for GzmVideoLink.
   */
  linkProps = new GzmLinkClass('');
}
