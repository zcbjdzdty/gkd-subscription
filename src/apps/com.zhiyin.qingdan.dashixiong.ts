import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zhiyin.qingdan.dashixiong',
  name: '大师兄影视',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      desc: '点击关闭',
      rules: [
        {
          key: 0,
          name: '快手广告-1',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          quickFind: true,
          matches:
            '@ImageView <n ViewGroup -2 ViewGroup > ViewGroup > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12843281',
        },
        {
          key: 1,
          name: '快手广告-2',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches: '@ImageView[clickable=true] <3 * -2 * >2 [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/13521143',
        },
        {
          key: 2,
          name: '快手广告-3',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches: ['[text="广告"]', '[text="跳过"]'],
          snapshotUrls: 'https://i.gkd.li/i/13521140',
        },
        {
          key: 3,
          name: '腾讯广告-1',
          activityIds: [
            'com.zhiyin.qingdan.dashixiong.MainActivity',
            'com.qq.e.ads.ADActivity',
          ],
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>3] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: [
            'https://i.gkd.li/i/12843282',
            'https://i.gkd.li/i/12843345',
            'https://i.gkd.li/i/12843333',
            'https://i.gkd.li/i/13400656',
          ],
        },
        {
          key: 5,
          name: '字节广告',
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          quickFind: true,
          matches: '@Image < View +n View > View > View > [text="广告"]',
          snapshotUrls: 'https://i.gkd.li/i/12843323',
        },
        {
          key: 6,
          activityIds: 'com.sigmob.sdk.base.common.TransparentAdActivity',
          matches: '[id="close_btn"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13887500',
        },
      ],
    },
    {
      key: 10,
      name: '通知提示-公告弹窗',
      desc: '点击[我知道了]',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[desc^="必读通告"] +n [desc="我知道了"]',
      snapshotUrls: 'https://i.gkd.li/i/12843280',
    },
    {
      key: 11,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          quickFind: true,
          activityIds: 'com.zhiyin.qingdan.dashixiong.MainActivity',
          matches:
            'WebView[text="快手"] >3 View[childCount=5] >2 @TextView[clickable=true][text=""] <<n [vid="ksad_container"]',
          exampleUrls:
            'https://m.gkd.li/57941037/122d8544-ccdd-42df-8618-f98f4433ee50',
          snapshotUrls: 'https://i.gkd.li/i/15371800',
        },
      ],
    },
  ],
});
