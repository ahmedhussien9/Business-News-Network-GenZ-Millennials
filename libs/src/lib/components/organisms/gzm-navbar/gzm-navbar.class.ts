import { GzmImageClass } from '../../atoms';

/**
 * Represents the properties of the GzmNavbar class.
 */
export class GzmNavbarPropertiesClass {
  /**
   * The logo properties of the GzmNavbar.
   */
  public logoProps = new GzmImageClass();

  /**
   * Sets the source of the logo image.
   * 
   * @param src - The source URL of the logo image.
   */
  setLogoSrc(src: string): void {
    this.logoProps.setSrc(src);
  }
}
