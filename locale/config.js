// Custom Japanese Moment.js Locales
// Based on: https://github.com/moment/moment/blob/develop/locale/ja.js

moment.locale('ja', {
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  monthsParseExact : true,
  weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
  weekdaysShort: '日曜_月曜_火曜_水曜_木曜_金曜_土曜'.split('_'),
  weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
  weekdaysParseExact : true,
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/MM/DD',
    LL: 'YYYY MMMM D',
    LLL: 'YYYY MMMM D HH:mm',
    LLLL: 'YYYY MMMM D HH:mm dddd'
  },
  calendar : {
    sameDay : '[今日] LT',
    nextDay : '[明日] LT',
    nextWeek : '[来週]dddd LT',
    lastDay : '[昨日] LT',
    lastWeek : '[前週]dddd LT',
    sameElse : 'L'
  },
  relativeTime : {
    future : '%s後',
    past : '%s前',
    s : '数秒',
    m : '1分',
    mm : '%d分',
    h : '1時間',
    hh : '%d時間',
    d : '1日',
    dd : '%d日',
    M : '1ヶ月',
    MM : '%dヶ月',
    y : '1年',
    yy : '%d年'
  },
  ordinalParse: /\d{1,2}(日|)/,
  ordinal: function (number) {
    return number + (number === 1 ? '日' : '');
  },
  week: {
    dow: 0, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});