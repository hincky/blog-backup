(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{481:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"date"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[s._v("#")]),s._v(" date")]),s._v(" "),t("p",[s._v("显示或设置系统时间与日期")]),s._v(" "),t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[s._v("#")]),s._v(" 概要")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("+FORMAT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--utc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("--universal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MMDDhhmm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("YY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(".ss"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("h2",{attrs:{id:"主要用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主要用途"}},[s._v("#")]),s._v(" 主要用途")]),s._v(" "),t("ul",[t("li",[s._v("转换时间到选定的格式，默认为当前。")]),s._v(" "),t("li",[s._v("设置系统时间。")])]),s._v(" "),t("h2",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),t("p",[s._v("format：输出的时间格式。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("format可用的转义序列如下：\n\n%%      百分号\n%a      当地缩写的工作日名称（例如，Sun）\n%A      当地完整的工作日名称（例如，Sunday）\n%b      当地缩写的月份名称（例如，Jan）\n%B      当地完整的月份名称（例如，January）\n%c      当地的日期和时间（例如，Thu Mar  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":05:25 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2005")]),s._v("）\n%C      世纪，和%Y类似，但是省略后两位（例如，20）\n%d      一月中的一天（例如，01）\n%D      日期，等价于%m/%d/%y\n%e      一月中的一天，格式使用空格填充，等价于%_d\n%F      完整的日期；等价于%+4Y-%m-%d\n%g      ISO标准计数周的年份的最后两位数字\n%G      ISO标准计数周的年份，通常只对%V有用\n%h      等价于%b\n%H      小时，范围（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("）\n%I      小时，范围（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("）\n%j      一年中的一天，范围（001"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("366")]),s._v("）\n%k      小时，使用空格填充，范围（0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v("），等价于%_H\n%l      小时，使用空格填充，范围（1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("），等价于%_I\n%m      月，范围（01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("）\n%M      分钟，范围（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v("）\n%n      换行符\n%N      纳秒，范围（000000000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("000000000）\n%p      用于表示当地的AM或PM，如果未知则为空白\n%P      类似于%p，但用小写表示\n%q      季度，范围（1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("）\n%r      当地以12小时表示的时钟时间（例如，11:11:04 PM）\n%R      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("小时每分钟；等价于%H:%M\n%s      自协调世界时1970年01月01日00时00分以来的秒数\n%S      秒数，范围（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("）\n%t      水平制表符\n%T      时间；等价于%H:%M:%S\n%u      一周中的一天（1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("），1代表星期一\n%U      一年中的第几周，周日作为一周的起始（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("）\n%V      ISO标准计数周，该方法将周一作为一周的起始（01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("）\n%w      一周中的一天（0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("），0代表星期天\n%W      一年中的第几周，周一作为一周的起始（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("）\n%x      当地的日期表示（例如，12/31/99）\n%X      当地的时间表示（例如，23:13:48）\n%y      年份后两位数字，范围（00"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("）\n%Y      年份\n%z      +hhmm格式的数值化时区格式（例如，-0400）\n%:z     +hh:mm格式的数值化时区格式（例如，-04:00）\n%::z    +hh:mm:ss格式的数值化时区格式（例如，-04:00:00）\n%:::z   数值化时区格式，相比上一个格式增加"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("':'")]),s._v("以显示必要的精度（例如，-04，+05:30）\n%Z      时区缩写（如EDT）\n\n默认情况下，日期用零填充数字字段；以下可选的符号可以跟在"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v("后面:\n\n-      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("连字符"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 不要填充相应的字段。\n_      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("下划线"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 使用空格填充相应的字段。\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("数字0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 使用数字0填充相应的字段。\n+      用数字0填充，未来年份大于4位数字则在前面加上"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'+'")]),s._v("号。\n^      允许的情况下使用大写。\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#      允许的情况下将默认的大写转换为小写，默认的小写转换为大写。")]),s._v("\n\n在任何标志之后都有一个可选的字段宽度，如小数；然后是一个可选的修饰符，在可用的情况下，使用E来使用当地语言环境的替代表示，\n使用O来使用当地语言环境的替代数字符号。\n")])])]),t("h2",{attrs:{id:"选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选项"}},[s._v("#")]),s._v(" 选项")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("长选项与短选项等价\n\n-d, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--date")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STRING          解析字符串并按照指定格式输出，字符串不能是"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'now'")]),s._v("。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--debug")]),s._v("                    注释已解析的日期，并将有疑问的用法发送到标准错误。\n-f, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--file")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("DATEFILE        类似于--date"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 一次从DATEFILE处理一行。\n-I"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FMT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(", --iso-8601"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FMT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  按照ISO "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8601")]),s._v("格式输出，FMT可以为"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("默认"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hours'")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'minutes'")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seconds'")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ns'")]),s._v("。\n                           例如：2006-08-14T02:34:56-06:00\n-R, --rfc-email            按照RFC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5322")]),s._v("格式输出，例如: Mon, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(" Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2006")]),s._v(" 02:34:56 "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-0600")]),s._v("\n--rfc-3339"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FMT             按照RFC "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3339")]),s._v("格式输出，FMT可以为"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'date'")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'seconds'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ns'")]),s._v("中的一个，\n                           例如：2006-08-14 02:34:56-06:00\n-r, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reference")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("FILE       显示文件的上次修改时间。\n-s, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--set")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("STRING           根据字符串设置系统时间。\n-u, --utc, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--universal")]),s._v("     显示或设置世界协调时"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UTC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("                     显示帮助信息并退出。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("                  显示版本信息并退出。\n")])])]),t("h2",{attrs:{id:"返回值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[s._v("#")]),s._v(" 返回值")]),s._v(" "),t("p",[s._v("返回状态为成功除非给出了非法选项或非法参数。")]),s._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式化输出：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v("-12-07\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出昨天日期：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1 day ago"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v("-11-19\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2秒后输出：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2 second"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M.%S"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2012")]),s._v("-11-20 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":21.31\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 传说中的 1234567890 秒：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1970-01-01 1234567890 seconds"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M:%S"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d@1234567890 +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%F %T"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v("-02-13 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("23")]),s._v(":02:30\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间格式转换：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2009-12-12"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y/%m/%d %H:%M.%S"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v("/12/12 00:00.00\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# apache格式转换：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Dec 5, 2009 12:00:37 AM"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M.%S"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2009")]),s._v("-12-05 00:00.37\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 格式转换后时间游走：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Dec 5, 2009 12:00:37 AM 2 year ago"')]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y-%m-%d %H:%M.%S"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2007")]),s._v("-12-05 00:00.37\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间加减操作：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示年月日")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+1 day"')]),s._v(" +%Y%m%d       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示前一天的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1 day"')]),s._v(" +%Y%m%d       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示后一天的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1 month"')]),s._v(" +%Y%m%d     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示上一月的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+1 month"')]),s._v(" +%Y%m%d     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示下一月的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1 year"')]),s._v(" +%Y%m%d      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示前一年的日期")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+1 year"')]),s._v(" +%Y%m%d      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示下一年的日期")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定时间：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置当前时间，只有root权限才能设置，其他只能查看")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20120523")]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置成20120523，这样会把具体时间设置成00:00:00")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" 01:01:01                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置具体时间，不会对日期做更改")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01:01:01 2012-05-23"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样可以设置全部时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"01:01:01 20120523"')]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样可以设置全部时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2012-05-23 01:01:01"')]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样可以设置全部时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20120523 01:01:01"')]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样可以设置全部时间")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有时需要检查一组命令花费的时间：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("start")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\nnmap wangchujiang.com "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v(" /dev/null\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("end")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%s"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("difference")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v(" end "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" start "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示执行时间")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$difference")]),s._v(" seconds.\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当你考虑输出带有时间的字符串时，例如（Current time: 2019/05/19）：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通常使用的方法：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Current time: '),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%Y/%m/%d"')]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 另一种方法：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("suffix")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Current time:'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意如果换成单引号就不能替换变量了。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${suffix}")]),s._v(' %Y/%m/%d"')]),s._v("\n")])])]),t("h3",{attrs:{id:"注意"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[s._v("#")]),s._v(" 注意")]),s._v(" "),t("ol",[t("li",[s._v("该命令是"),t("code",[s._v("GNU coreutils")]),s._v("包中的命令，相关的帮助信息请查看"),t("code",[s._v("man -s 1 date")]),s._v("或"),t("code",[s._v("info coreutils 'date invocation'")]),s._v("。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);