import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  MediaItemType1,
  MediaItemType2,
  MediaItemType3,
  MediaItemType4,
} from '../../domain/models/media';
import { MediaRepository } from '../../domain/repositories/media.repository';

@Injectable({
  providedIn: 'root',
})
export class MediaRepositoryImpl implements MediaRepository {
  getMediaData(): Observable<{
    type1: MediaItemType1;
    type2: MediaItemType2[];
    type3: MediaItemType3[];
    type4: MediaItemType4[];
  }> {
    const MEDIA_DATA: {
      type1: MediaItemType1;
      type2: MediaItemType2[];
      type3: MediaItemType3[];
      type4: MediaItemType4[];
    } = {
      type1: {
        mainFeatureItem: {
          title:
            'Elon Musk has been getting Trumpier. A direct line to Trump may be next',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2023-09-13t153204z-1901271325-rc2l73as3mpu-rtrmadp-3-usa-ai-congress.JPG?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2023-09-13t153204z-1901271325-rc2l73as3mpu-rtrmadp-3-usa-ai-congress.JPG?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2023-09-13t153204z-1901271325-rc2l73as3mpu-rtrmadp-3-usa-ai-congress.JPG?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2023-09-13t153204z-1901271325-rc2l73as3mpu-rtrmadp-3-usa-ai-congress.JPG?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/2023-09-13t153204z-1901271325-rc2l73as3mpu-rtrmadp-3-usa-ai-congress.JPG?c=16x9&q=h_438,w_780,c_fill',
          },
          relatedLinks: [
            {
              title:
                'Elon Musk once mocked China’s BYD. Now it’s running circles around Tesla',
              url: 'https://www.cnn.com/2021/05/16/middle',
              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1987112177.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1987112177.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1987112177.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1987112177.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1987112177.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
            {
              title:
                'What we know about the Americans arrested for bringing ammo to Turks and Caicos',
              url: 'https://www.cnn.com/2021/05/16/middle',
              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-29t085652z-1531931999-rc2kd7agexa6-rtrmadp-3-china-autos-batteries.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-29t085652z-1531931999-rc2kd7agexa6-rtrmadp-3-china-autos-batteries.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-29t085652z-1531931999-rc2kd7agexa6-rtrmadp-3-china-autos-batteries.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-29t085652z-1531931999-rc2kd7agexa6-rtrmadp-3-china-autos-batteries.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-29t085652z-1531931999-rc2kd7agexa6-rtrmadp-3-china-autos-batteries.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
            {
              title:
                '‘It’s putting patients’ lives in danger’: Nurses say ransomware attack is stressing hospital operations',
              url: 'https://www.cnn.com/2021/05/16/middle',

              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366754065-20240529144852256.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366754065-20240529144852256.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366754065-20240529144852256.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366754065-20240529144852256.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1366754065-20240529144852256.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
            {
              title:
                'Prisoners are using VR to prepare them for life after release',
              url: 'https://www.cnn.com/2021/05/16/middle',

              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/prison-vr-thumb-03.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/prison-vr-thumb-03.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/prison-vr-thumb-03.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/prison-vr-thumb-03.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/prison-vr-thumb-03.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
            {
              title:
                'Samsung union calls first ever strike after pay negotiations stall',
              url: 'https://www.cnn.com/2021/05/16/middle',

              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-24t084507z-2078047998-rc2tw7aq4xyz-rtrmadp-3-samsung-elec-union.JPG?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-24t084507z-2078047998-rc2tw7aq4xyz-rtrmadp-3-samsung-elec-union.JPG?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-24t084507z-2078047998-rc2tw7aq4xyz-rtrmadp-3-samsung-elec-union.JPG?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-24t084507z-2078047998-rc2tw7aq4xyz-rtrmadp-3-samsung-elec-union.JPG?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-24t084507z-2078047998-rc2tw7aq4xyz-rtrmadp-3-samsung-elec-union.JPG?c=16x9&q=h_438,w_780,c_fill',
              },
            },

            {
              title:
                'Apple slashed iPhone prices in China. Sales are bouncing back',
              url: 'https://www.cnn.com/2021/05/16/middle',

              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1695021100.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1695021100.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1695021100.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1695021100.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1695021100.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
            {
              title:
                'OpenAI’s Sam Altman vows to give away most of his wealth through the Giving Pledge',
              url: 'https://www.cnn.com/2021/05/16/middle',

              sources: [
                {
                  height: 438,
                  width: 780,
                  type: 'large',
                  media: '(min-width: 1280px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153474303.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 438,
                  width: 780,
                  type: 'medium',
                  media: '(min-width: 960px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153474303.jpg?c=16x9&q=h_438,w_780,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'small',
                  media: '(min-width: 480px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153474303.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
                {
                  height: 270,
                  width: 480,
                  type: 'xSmall',
                  media: '(max-width: 479px)',
                  img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153474303.jpg?c=16x9&q=h_270,w_480,c_fill',
                },
              ],
              defaultSource: {
                height: 438,
                width: 780,
                type: 'default',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2153474303.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
            },
          ],
        },

        secondFeatureItems: [
          {
            title:
              'US sues to split up Ticketmaster and Live Nation in a groundbreaking monopoly lawsuit',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147879158.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147879158.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147879158.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147879158.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2147879158.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
          },

          {
            title:
              'Elon Musk has been getting Trumpier. A direct line to Trump may be next',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258654322.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258654322.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258654322.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258654322.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258654322.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
          },

          {
            title: 'What the major Ticketmaster lawsuit means for you',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/1521300-0001-r.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/1521300-0001-r.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/1521300-0001-r.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/1521300-0001-r.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/1521300-0001-r.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
          },
        ],

        thirdFeatureItems: [
          {
            title:
              'US government’s proposal to boost EV sales is challenging but not impossible',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
          },

          {
            title: 'Microsoft thinks it found a way to make PCs relevant again',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-01t084616z-2009033034-rc2fh7akbk4p-rtrmadp-3-microsoft-thailand.JPG?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-01t084616z-2009033034-rc2fh7akbk4p-rtrmadp-3-microsoft-thailand.JPG?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-01t084616z-2009033034-rc2fh7akbk4p-rtrmadp-3-microsoft-thailand.JPG?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-01t084616z-2009033034-rc2fh7akbk4p-rtrmadp-3-microsoft-thailand.JPG?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2024-05-01t084616z-2009033034-rc2fh7akbk4p-rtrmadp-3-microsoft-thailand.JPG?c=16x9&q=h_438,w_780,c_fill',
            },
          },

          {
            title:
              'Scarlett Johansson lawyers up over ChatGPT voice that ‘shocked and angered’ her',
            description:
              'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
            image:
              'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
            sources: [
              {
                height: 438,
                width: 780,
                type: 'large',
                media: '(min-width: 1280px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258543820.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 438,
                width: 780,
                type: 'medium',
                media: '(min-width: 960px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258543820.jpg?c=16x9&q=h_438,w_780,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'small',
                media: '(min-width: 480px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258543820.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
              {
                height: 270,
                width: 480,
                type: 'xSmall',
                media: '(max-width: 479px)',
                img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258543820.jpg?c=16x9&q=h_270,w_480,c_fill',
              },
            ],
            defaultSource: {
              height: 438,
              width: 780,
              type: 'default',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1258543820.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
          },
        ],
      },
      type2: [
        {
          title: 'How Gaza’s hospitals became battlegrounds',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          video:
            'https://media.cnn.com/api/v1/loops/stellar/prod/al-quds-hp-2.mp4?c=original',
        },
        {
          title: 'How the climate crisis fuels gender inequality',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          video:
            'https://media.cnn.com/api/v1/loops/stellar/prod/desktop-231203-asequals.mp4?c=original',
        },
      ],
      type3: [
        {
          title:
            'How to protect yourself from iPhone thieves locking you out of your own device',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          link: 'https://edition.cnn.com/2023/04/23/tech/iphone-thief-recovery-key/index.html',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230421161026-iphone-thieves-recovery-key-restricted.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230421161026-iphone-thieves-recovery-key-restricted.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230421161026-iphone-thieves-recovery-key-restricted.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230421161026-iphone-thieves-recovery-key-restricted.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/230421161026-iphone-thieves-recovery-key-restricted.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },

        {
          title:
            'US government’s proposal to boost EV sales is challenging but not impossible',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          link: 'https://edition.cnn.com/2023/04/23/tech/iphone-thief-recovery-key/index.html',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/220714163144-embargoed-01-gm-chevy-blazer-suv.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },

        {
          title:
            'FBI warns consumers not to use public phone charging stations',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          link: 'https://edition.cnn.com/2023/04/12/tech/fbi-public-charging-port-warning/index.html',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230412084133-usb-airport-charging-station-stock.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230412084133-usb-airport-charging-station-stock.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230412084133-usb-airport-charging-station-stock.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230412084133-usb-airport-charging-station-stock.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/230412084133-usb-airport-charging-station-stock.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },

        {
          title: 'Video shows Israeli tanks moving further into Rafah',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          link: 'https://edition.cnn.com/videos/business/2023/04/07/nasa-hubble-telescope-black-hole-foreman-cprog-nc-vpx.cnn',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230409130534-berman-sidner-bolduan-thumb-vpx.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230409130534-berman-sidner-bolduan-thumb-vpx.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230409130534-berman-sidner-bolduan-thumb-vpx.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/230409130534-berman-sidner-bolduan-thumb-vpx.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/230409130534-berman-sidner-bolduan-thumb-vpx.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },
      ],
      type4: [
        {
          title:
            'Take home the newest tech with Best Buy’s coupons',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2018-rebrand-blog-logo-lead-art.jpeg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2018-rebrand-blog-logo-lead-art.jpeg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2018-rebrand-blog-logo-lead-art.jpeg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/2018-rebrand-blog-logo-lead-art.jpeg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/2018-rebrand-blog-logo-lead-art.jpeg?c=16x9&q=h_438,w_780,c_fill',
          },
        },
        {
          title: 'Score Verizon’s best offers and stay connected for less',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/images.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/images.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/images.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/images.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/images.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },
        {
          title: 'Upgrade your digital experience with Samsung’s latest offers',
          description:
            'The Business News Network (BNN) is a Canadian English language specialty channel owned by Bell Media. It broadcasts programming related to business and financial news and analysis. The channel is headquartered at 299 Queen Street West in Downtown Toronto.',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/BNN_Logo_2017.png/220px-BNN_Logo_2017.png',
          sources: [
            {
              height: 438,
              width: 780,
              type: 'large',
              media: '(min-width: 1280px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/download-20240311190652072.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 438,
              width: 780,
              type: 'medium',
              media: '(min-width: 960px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/download-20240311190652072.jpg?c=16x9&q=h_438,w_780,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'small',
              media: '(min-width: 480px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/download-20240311190652072.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
            {
              height: 270,
              width: 480,
              type: 'xSmall',
              media: '(max-width: 479px)',
              img: 'https://media.cnn.com/api/v1/images/stellar/prod/download-20240311190652072.jpg?c=16x9&q=h_270,w_480,c_fill',
            },
          ],
          defaultSource: {
            height: 438,
            width: 780,
            type: 'default',
            media: '(min-width: 1280px)',
            img: 'https://media.cnn.com/api/v1/images/stellar/prod/download-20240311190652072.jpg?c=16x9&q=h_438,w_780,c_fill',
          },
        },
      ],
    };
    return of(MEDIA_DATA);
  }
}
