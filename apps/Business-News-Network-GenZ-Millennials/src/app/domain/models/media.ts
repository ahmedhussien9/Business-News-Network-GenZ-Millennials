import { ISource } from '@bbn/gzm-ui-library';

export interface MediaSource {
  height: number;
  width: number;
  type: string;
  media: string;
  img: string;
}

export interface RelatedLink {
  title: string;
  url: string;
  sources?: MediaSource[];
  defaultSource?: MediaSource;
}

export interface MediaItemType1 {
  mainFeatureItem: MainFeatureItem;
  secondFeatureItems: MainFeatureItem[];
  thirdFeatureItems: MainFeatureItem[];
}

export interface MainFeatureItem {
  title: string;
  description: string;
  image: string;
  sources: MediaSource[];
  defaultSource: MediaSource;
  relatedLinks?: RelatedLink[];
}

export interface MediaItemType2 {
  title: string;
  description: string;
  video: string;
}

export interface MediaItemType3 {
  title: string;
  description: string;
  link?: string;
  image: string;
  sources: MediaSource[];
  defaultSource: MediaSource;
  videoLink?: string;
  videoDuration?: string;
}

export interface MediaItemType4 {
  title: string;
  description: string;
  image: string;
  sources: MediaSource[];
  defaultSource: MediaSource;
}
