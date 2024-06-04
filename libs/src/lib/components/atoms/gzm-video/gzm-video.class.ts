/**
 * Represents a class for handling video properties.
 */
export class GzmVideoClass {
  /**
   * The source URL of the video.
   */
  src!: string;

  /**
   * The width of the video in pixels.
   * Default value is 400.
   */
  width = 400;

  /**
   * The height of the video in pixels.
   * Default value is 300.
   */
  height = 300;

  /**
   * Sets the source URL of the video.
   * @param src - The source URL of the video.
   */
  setSrc(src: string) {
    this.src = src;
  }
}
