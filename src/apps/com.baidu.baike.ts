import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.baike',
  name: '百度百科',
  groups: [
    {
      key: 10,
      name: '通知提示-请求通知权限弹窗',
      desc: '自动点击"不允许"',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: '[text^="打开推送通知"] +2 [text="不允许"]',
      snapshotUrls: 'https://i.gkd.li/i/12755717',
    },
  ],
});
