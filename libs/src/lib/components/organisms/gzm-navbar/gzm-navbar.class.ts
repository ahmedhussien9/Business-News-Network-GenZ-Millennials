import { GzmImageClass } from '../../atoms';

export class GzmNavbarPropertiesClass {
  public logoProps = new GzmImageClass();

  setLogoSrc(src: string): void {
    this.logoProps.setSrc(src);
  }
}
