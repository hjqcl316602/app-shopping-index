const DAY_TIMESTAMP = 60 * 60 * 24 * 1000
const HOUR_TIMESTAMP = 60 * 60 * 1000
const MINUTE_TIMESTAMP = 60 * 1000

// 2.格式化 - 补0
export function pad(value) {
  return ('00' + value).substr(('' + value).length)
}
// 3.
export function format_date(date, format) {
  const map = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    quarter: Math.floor((date.getMonth() + 3) / 3),
    millisecond: date.getMilliseconds()
  };

  for (const key in map) {
    format = format_type(key, format, map[key])
  }

  return format
}

// 4. 得到当天凌晨时间
export function getZero(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return new Date(year + '/' + month + '/' + day + ' 00:00:00')
}

// 5. 得到当前时间戳
export function getNow() {
  return window.performance && window.performance.now ? (window.performance.now() + window.performance.timing.navigationStart) : +new Date()
}

// 6. 得到指定年指定月的天数
export function getMonthDays(month, year) {
  let natureMaxDay = 30;
  if ([1, 3, 5, 7, 8, 10, 12].indexOf(month) > -1) {
    natureMaxDay = 31
  } else {
    if (month === 2) {
      natureMaxDay = !year || (!(year % 400) || (!(year % 4) && year % 100)) ? 29 : 28
    }
  }
  return natureMaxDay
}

// 7. 得到时间格式 2012-12-12 02:02:02  自定义格式
export function format(date,fmt) {
  var o = {
    "M+": date .getMonth() + 1, //月份
    "d+": date .getDate(), //日
    "H+": date .getHours(), //小时
    "m+": date .getMinutes(), //分
    "s+": date .getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date .getMilliseconds() //毫秒
  };
  if ( /(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "" ).substr(4 - RegExp.$1.length));
  for ( var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
};

// 8. 得到时间格式 20170509
export function formatStr(date) {
  var _this = date;
  var year = _this.getFullYear().toString();
  var month =( ( ( _this.getMonth() + 1 )  < 10 ) ?("0"  + ( _this.getMonth() + 1 )  ): _this.getMonth() + 1 ).toString();
  var day = ( ( ( _this.getDate() + 1 )  < 10 ) ?( "0" + ( _this.getDate() + 1 ) ): _this.getDate() + 1 ).toString();
  return year +  month + day;
};

// 9. 得到时间格式 2017年-5月-09日  连接符 自定义
export function formatDesignJoin(date,concat='-'){
  let da = new Date(date);
  let year = da.getFullYear()+'年';
  let month = pad(da.getMonth()+1)+'月';
  let day = pad(da.getDate()) +'日';
  return [year,month,day].join(concat)
}


