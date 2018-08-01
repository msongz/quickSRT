	//songz meng
	//export srt 
	//v0.01 


	(function es_subtitle(thisObj) {

		var es_str = {
			title: {
				en: "quick export srt",
				cn: "快捷导出字幕"
			},
			version: {
				en: " v0.01",
				cn: " v0.01"
			},
			xport: {
				en: "export",
				cn: "导出"
			},
			refresh: {
				en: "refresh",
				cn: "刷新"
			},
			noLayer: {
				en: "no layer selected",
				cn: "没有选择图层"
			},
			website: {
				en: "https://github.com/msongz",
				cn: "https://github.com/msongz"
			},
			mail: {
				en: "songzmeng@gmail.com",
				cn: "msongz@qq.com"
			},
			time: {
				en: "time",
				cn: "时间"
			},
			content: {
				en: "content",
				cn: "内容"
			},
			helptip: {
				en: "HelpTip",
				cn: "帮助"
			},
			about: {
				en: "About",
				cn: "关于"
			},
			descript: {
				en: "Overview",
				cn: "概述"
			},
			usage: {
				en: "Usage",
				cn: "使用"
			},
			desContent: {
				en: "Copyright (c) 1987-2018 songz meng\\nAll rights reserved.\\ncontact: songzmeng@gmail.com\\n\\nThis script enable AE to export subtilte(.srt) file. Fully test on macOS 10.13.4, AE 15.0\\n\\nMain process is put a marker to the outPoint of each text layer you selected ",
				cn: "Copyright (c) 1987-2018 songz meng\\nAll rights reserved.\\n联系：@微型柠檬\\n\\n这个脚本允许AE导出字幕(.srt)文件. 在 macOS 10.13.4, AE 15.0 上充分测试"
			},
			useContent: {
				en: "1. select some text layers\\n2. run this script or press “refresh” button\\n3. press “export” button and select the location the file you store.\\n#Note:\\n・Hover your mouse on each control will shows a help tip.",
				cn: "1. 选择若干文字层\\n2. 运行这个脚本或者按“刷新”按钮\\n3. 按“导出”按钮选择路径保存你的字幕文件\\n#注意:\\n・鼠标在每个控件上停留都会弹出帮助提示"
			},
			other: {
				en: "other scripts",
				cn: "其他脚本"
			},
			close: {
				en: "close",
				cn: "关闭"
			},
			er2dlayer: {
				en: "please selecte a 2D layer",
				cn: "请选择 2D 图层"
			},
			srtXY: {
				en: "(srt system map maximum Height to 384 and maximum Width to 288)",
				cn: "(srt系统将最大宽高映射为 384 和 288)"
			},
			textOnly: {
				en: "please select text layers only",
				cn: "请只选择文字图层"
			},
			overlap: {
				en: "overlap!\rcheck the highlight layer",
				cn: "重叠！\r请检查选中的图层"
			},
			epHelp: {
				en: "export the list as srt file",
				cn: "将列表导出为srt文件"
			},
			rfHelp: {
				en: "add/read marker of selected layers and send them to the list",
				cn: "添加/读取所选图层的标记，并将内容添加到列表"
			},
			verticalHelp: {
				en: "checked will change {\\an} buttons behavior",
				cn: "勾选后会改变{\\an}按钮的方向"
			},
			vertical: {
				en: "vertical",
				cn: "纵向"
			},
			fadHelp: {
				en: "#fade\rset subtitle fade-in and fade-out\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#淡入淡出\r设置字幕淡入淡出的时间\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			posHelp: {
				en: "#position\rset subtitle to a new position\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#位置\r设定字幕新的位置\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			bordHelp: {
				en: "#stroke\rset stroke width\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#描边\r设置描边宽度\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			metriHelp: {
				en: "#kerning\rset kerning between two words\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#字间距\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			blurHelp: {
				en: "#blur\rset blur level\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#模糊\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			mvHelp: {
				en: "#move(x1,y1,x2,y2,t1,t2)\rset subtitle move from (x1,y1) to (x2,y2) during t2-t1\ractive require {\\an}\rif none of {\\an}, {\\an2} will be added automatically",
				cn: "#位移\r让字幕从(x1,y1)到(x2,y2)运动，历经 t2-t1\r需要{\\an}才生效\r如果没有{\\an}，脚本会自动添加{\\an2}"
			},
			fsHelp: {
				en: "#font size\rselect words in edit text, and click to quote",
				cn: "#字号\r在编辑区域选择文字，然后点击设定字号"
			},
			uuHelp: {
				en: "#underscore\rselect words in edit text, and click to quote",
				cn: "#下划线\r在编辑区域选中文字，然后点击设定下划线"
			},
			sssHelp: {
				en: "#strikethrough\rselect words in edit text, and click to quote",
				cn: "#删除线\r在编辑区域选中文字，然后点击设定删除线"
			},
			iiHelp: {
				en: "#italic\rselect words in edit text, and click to quote",
				cn: "斜体\r在编辑区域选中文字，然后点击设定斜体"
			},
			bbHelp: {
				en: "#bold\rselect words in edit text, and click to quote",
				cn: "粗体\r在编辑区域选中文字，然后点击设定粗体"
			},
			fcHelp: {
				en: "#font color\rselect words in edit text, and click to quote",
				cn: "#字体颜色\r在编辑区域选中文字，然后点击设定颜色"
			},
			infoHelp: {
				en: "about",
				cn: "关于"
			},
			reselHelp: {
				en: "re-select the layers which you refresh last time",
				cn: "重选上次刷新的图层"
			},
			pickposHelp: {
				en: "show the coordinate of selected layer in srt world",
				cn: "显示所选图层在 srt 系统中的坐标"
			},
			killotherHelp: {
				en: "remove all of { } tags of selected items in the list",
				cn: "清空所选项目的所有 { } 标签"
			},
			killtagHelp: {
				en: "remove restrict range of < > tags of selected items in the list",
				cn: "清空所选项目在限制范围内的所有 < > 标签"
			},
			rmmarkHelp: {
				en: "clear the list\rremove srt marker of selected layers",
				cn: "清空列表\r清除选中图层的 srt 标记"
			},
			preciHelp: {
				en: "timecode (00:00:00,000) precision\r1 is best\r10 is better",
				cn: "时间码 (00:00:00,000) 的精确度\r1 最高\r10 也不错"
			},
			linenumHelp: {
				en: "restrict range for < > tags operation\r0 is for all line\r1 is for line 1\r2 is for line 2\rand so on",
				cn: "限制 < > 标签的操作范围\r0 代表全部有效\r1 代表只操作第 1 行\r2 代表只操作第 2 行\r如此类推"
			},
			olcheckHelp: {
				en: "check overlap layers when refresh",
				cn: "刷新时检查重叠图层"
			},
			x1Help: {
				en: "x1",
				cn: "x1"
			},
			x2Help: {
				en: "x2",
				cn: "x2"
			},
			y1Help: {
				en: "y1",
				cn: "y1"
			},
			y2Help: {
				en: "y2",
				cn: "y2"
			},
			moveinHelp: {
				en: "t1",
				cn: "t1"
			},
			moveoutHelp: {
				en: "t2",
				cn: "t2"
			},
			fcvalueHelp: {
				en: "change font color",
				cn: "改变字体颜色"
			},
			bHelp: {
				en: "#bold start\radd \"<b>\" to system clipboard",
				cn: "#粗体开始\r添加 \"<b>\" 到系统剪贴板"
			},
			bsHelp: {
				en: "#bold stop\radd \"</b>\" to system clipboard",
				cn: "#粗体结束\r添加 \"</b>\" 到系统剪贴板"
			},
			iHelp: {
				en: "#italic start\radd \"<i>\" to system clipboard",
				cn: "#斜体开始\r添加 \"<i>\" 到系统剪贴板"
			},
			isHelp: {
				en: "#italic stop\radd \"</i>\" to system clipboard",
				cn: "#斜体结束\r添加 \"</i>\" 到系统剪贴板"
			},
			uHelp: {
				en: "#underscore start\radd \"<u>\" to system clipboard",
				cn: "#下划线开始\r添加 \"<u>\" 到系统剪贴板"
			},
			usHelp: {
				en: "#underscore stop\radd \"</u>\" to system clipboard",
				cn: "#下划线结束\r添加 \"</u>\" 到系统剪贴板"
			},
			sHelp: {
				en: "#strikethrough start\radd \"<s>\" to system clipboard",
				cn: "#删除线开始\r添加 \"<s>\" 到系统剪贴板"
			},
			ssHelp: {
				en: "#strikethrough stop\radd \"</s>\" to system clipboard",
				cn: "#删除线结束\r添加 \"</s>\" 到系统剪贴板"
			},
			blHelp: {
				en: "#bottom left\rplace subtitle to bottom left corner\rwhile {\\pos} added, it will transfer as anchor point at bottom left\rthe existing {\\pos} will be wiped",
				cn: "#左下\r将字幕放置到左下角\r当{\\pos}标签存在时，它会转换为左下角锚点"
			},
			bcHelp: {
				en: "#bottom\rplace subtitle to bottom (default)\rwhile {\\pos} added, it will transfer as anchor point at bottom\rthe existing {\\pos} will be wiped",
				cn: "#底部\r将字幕放置到底部（默认）\r当{\\pos}标签存在时，它会转换为底部锚点\r原有的{\\pos}标签会被清除"
			},
			brHelp: {
				en: "#bottom right\rplace subtitle to bottom right corner\rwhile {\\pos} added, it will transfer as anchor point at bottom right\rthe existing {\\pos} will be wiped",
				cn: "#右下角\r将字幕放置到右下角\r当{\\pos}标签存在时，它会转换为右下角锚点\r原有的{\\pos}标签会被清除"
			},
			mlHelp: {
				en: "#left\rplace subtitle to left\rwhile {\\pos} added, it will transfer as anchor point at left\rthe existing {\\pos} will be wiped",
				cn: "#左侧\r将字幕放置到左侧\r当{\\pos}标签存在时，它会转换为左侧锚点\r原有的{\\pos}标签会被清除"
			},
			mcHelp: {
				en: "#center\rplace subtitle to center\rwhile {\\pos} added, it will transfer as anchor point at center\rthe existing {\\pos} will be wiped",
				cn: "#中央\r将字幕放置到中央\r当{\\pos}标签存在时，它会转换为中心锚点\r原有的{\\pos}标签会被清除"
			},
			mrHelp: {
				en: "#right\rplace subtitle to right\rwhile {\\pos} added, it will transfer as anchor point at right\rthe existing {\\pos} will be wiped",
				cn: "#右侧\r将字幕放置到右侧\r当{\\pos}标签存在时，它会转换为右侧锚点\r原有的{\\pos}标签会被清除"
			},
			ulHelp: {
				en: "#upper left\rplace subtitle to upper left corner\rwhile {\\pos} added, it will transfer as anchor point at upper left\rthe existing {\\pos} will be wiped",
				cn: "#左上角\r将字幕放置到左上角\r当{\\pos}标签存在时，它会转换为左上角锚点\r原有的{\\pos}标签会被清除"
			},
			ucHelp: {
				en: "#top\rplace subtitle to top\rwhile {\\pos} added, it will transfer as anchor point at top\rthe existing {\\pos} will be wiped",
				cn: "#顶部\r将字幕放置到顶部\r当{\\pos}标签存在时，它会转换为顶部锚点\r原有的{\\pos}标签会被清除"
			},
			urHelp: {
				en: "#upper right\rplace subtitle to upper right corner\rwhile {\\pos} existed, it will transfer as anchor point at upper right\rthe existing {\\pos} will be wiped",
				cn: "#右上角\r将字幕放置到右上角\r当{\\pos}标签存在时，它会转换为右上角锚点\r原有的{\\pos}标签会被清除"
			},
			writePermiss: {
				en: "please check the \"Allow Scripts to Write Files and Access Network\"",
				cn: "请勾选\"允许脚本写入文件和访问网络\""
			},
			msHelp: {
				en: "millisecond",
				cn: "毫秒"
			},
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			// posyHelp: {
			// 	en: "",
			// 	cn: ""
			// },
			saveDialog: {
				en: "selecte the location to store your srt file",
				cn: "选择你的字幕文件保存路径"
			}
		};

		for (var i in es_str) "zh_CN" == app.isoLanguage ?
			es_str[i] = es_str[i].cn :
			es_str[i] = es_str[i].en;

		function es_buildUI(thisObj) {
			var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {
				closeOnKey: 'OSCmnd+W',
				resizeable: true
			});

			var testimg = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1E\b\x06\x00\x00\x00?\u00C5~\u009F\x00\x00\x01>IDATH\u0089\u00DDV\u00CBvD!\bK\u00EE\u0099\u00FF\u00FFe\u00BA\u00E8h\x11\x03hg\u00D5f3^\x05\u00C2c@\u0081\u00FF\x0E\x02\u0080\u0099\u00F5\u0082d/\u00E4\u00C4\u00A3M\u0092\x00\u0080\u00D7\u0091\u00F6\x0F\x19\u00DF\u00BF\u00DE\x1A\u0083\u00B8\x01\u00B07\u00C1F\u00DC\x12\x062\x15e\u00DCSN\u00AD\u0087*\u00A5M\n}T]\u00AAif3\u00A5\u008F\u0094\u00C8\u00C9\u0088=\u0085l\u00D6#\u00BD\u009A\u00B0!\u009B03\u009F\x19\u009FF\u00B5^\u008D\f\u00C5\u00A4^\x1B\u0091pr\x1E\x0B\u00FD\u00C5\u0086L\u00E9\rY\u00D8\u00DF\"\u008A\u0098\u0084\u00E2\u00AF\u00BF\x18\u00ECz5\u009C\u00CBt\x02\u00BA-\x16\u00E2\u008C(\u00D4\u009A\u00C3)~\u00E77*M\x07\u008E\x1A?!\x19Ne\u00A1\u00CB\u00FD\u00AC\u0086Ut\u0084n\x0F8\u009D\u00B4\u0096\x19a\x07C\u00DF\u00F09\u00A1\u00EA\u00BD\u0093\u0081\u009EzS\u00E8^\u00D5\u00D0\u00A1\u009C\u0097\x15\x06aU\u00FC\u0088lX_\x11\u009E\u00E2\u00CA\u00B8\u00C2\x03|V/\u00A5_\u00DD4W\x11\u00FE\u00D2\u00B1\u00A5\\O8\u0098\u00B6\u00FD\u0095re}\u008Fn\u00F9\u00AE\u00FA\u00F0\u009A\u00F4\u00E4j\u009B\u0084\u00C9\u00840\u0092G\u00C4\u00D5\u00F0\u00F7P5\u008Cwa\u00FA(:\u009C\u00AD\u00DC>\u0082\u0091\u00B1\u00EC\x1EO\u00D1`\u0094\u0097\u0091n5L\u009E\r\x15\u00E2\\\u00DD\u00C8|@\u00B2-\u00DC+\u00EB\u00E6u\x16\x1D\u00FD\u00B8\u00BF\u00FF&\u00BE\x00Pl\u0099<\x19\u00C1\x7F)\x00\x00\x00\x00IEND\u00AEB`\u0082";
			var tess = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x1C\x00\x00\x00\x1E\b\x06\x00\x00\x00?\u00C5~\u009F\x00\x00\x01\x17IDATH\u0089\u00DD\u0096\u00DB\x0E\u0083@\bD\u0099\u00DA\u00FF\u00FF\u00E2\x1A\u00FA\u00D0\u00A0\x14\x19\u0096]\u00D3\u0097Nb\u00A2\u008Dr\u0096[A\u00E4\u00DF\x05\x11\u0091W\u00EF]\u00ED\x1A\u00DDTq\x01\u00E1\u00F3\u00D3\u00B3i\u00C3`\b\u00CF\"\"\u00D8\u00F4|\u00DC\x01\u00DD\x01e\u00E0\x0E\u00D0\u00C32/u\u00C7i\u00D7 \x06\u008D\u00AABZ\u0085\u00D0\u009F\u00BC\f\u00B5\x1D\u00C0B\u00FA \u00EF1#\b\u00B0/\u00B8\x0F!\u00F34\x03V\u00B0T\u00DExv_\x01cq\u00D8=\u0085\u008D\u00A0#`\x05\x1E*\u00F3\u00A8\x02.A2\u00B1pF\u00E0,X\u00DDu(\x03\u00F9\u00D0v\x1B?\x1E\u00C6\u00C4z\u0093\u00F6!\u00CBa\u00E5\x1DdPHU.\x19p\u00A4K(\u00BB2\u00E0\u00D2\u00C7+\u009A\u00CD\u00A1)\u00FB\x13\u009F\x02\u00D2\u00E4'\u00CA\ng\x1A\u00D8\u00D5\u00ED\x1E]-\u009AR\u00AC%~\x06\u00F4\u008A-\u00E2\u0081\u00ED\x19W)z\u00D7\x19O\u00CBP\x16J\u00EFe\x04\u00C6\u00A2h7x\u00B5\u00C7\\\x00\u00C9\u008A\u00C1\u00F6\u0098\u00EC@\u00876UD/\u00BB+\u0086o\u00EC\u0098\u00DB8%\u0090\r\u00DFM\x15\u00E9\u00BA(R\u00EE\u00A5K\u00C5sg/\u009D\u00AE\u00DC\u00CE\u00D4\u00FFo\u00BD\x01>`\u0086C7\u00B4\u00A5\x10\x00\x00\x00\x00IEND\u00AEB`\u0082";
			var dad = File("/Users/meng/Documents/a.png")
			var mum = File("/Users/meng/Documents/b.png")
			var cimg = File("/Users/meng/Documents/c.png")
			var dimg = File("/Users/meng/Documents/d.png")
			var eimg = File("/Users/meng/Documents/e.png")
			var fimg = File("/Users/meng/Documents/f.png")
			var gimg = File("/Users/meng/Documents/g.png")
			var himg = File("/Users/meng/Documents/h.png")
			var iimg = File("/Users/meng/Documents/i.png")
			var wwmg = File("/Users/meng/Documents/ww.png")
			var qqmg = File("/Users/meng/Documents/qq.png")
			var eemg = File("/Users/meng/Documents/ee.png")
			var aamg = File("/Users/meng/Documents/aa.png")
			var ddmg = File("/Users/meng/Documents/dd.png")
			var ssmg = File("/Users/meng/Documents/ss.png")
			var zzmg = File("/Users/meng/Documents/zz.png")
			var ccmg = File("/Users/meng/Documents/cc.png")
			var xxmg = File("/Users/meng/Documents/xx.png")
			var posmg = File("/Users/meng/Documents/pos.png")
			var fadmg = File("/Users/meng/Documents/fad.png")
			var bordmg = File("/Users/meng/Documents/bord.png")
			var fspmg = File("/Users/meng/Documents/fsp.png")
			var bemg = File("/Users/meng/Documents/be.png")
			var movemg = File("/Users/meng/Documents/move.png")
			var fsmg = File("/Users/meng/Documents/fs.png")
			var fcmg = File("/Users/meng/Documents/fc.png")
				// var wwmg = File("/Users/meng/Documents/ww.png")

			if (pal !== null) {
				var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[690, 460],\
								leftPart:Group{orientation:'column',alignment:['fill','fill'],\
									listArea:ListBox{\
										alignment:['fill','fill'],\
										properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
										showHeaders:true,multiselect:true}\
									},\
									buttonArea:Group{orientation:'row',alignment:['fill','bottom'],\
										info:IconButton{text:'?',alignment:['left','fill'],preferredSize:[28, 28],properties:{style:'toolbutton'}},\
										pickPos:IconButton{text:'☉',alignment:['left','fill'],preferredSize:[28, 28],properties:{style:'toolbutton'},properties:{style:'toolbutton'}},\
										rmMarker:IconButton{text:'⌫',alignment:['left','fill'],preferredSize:[28, 28],properties:{style:'toolbutton'}}\
										preci:EditText{text:'1',characters:'2',alignment:['left','bottom']},\
										olCheck:Checkbox{text:'↹',alignment:['left','bottom']},\
										lineNum:EditText{text:'0',characters:'2',alignment:['right','bottom']},\
										resel:IconButton{text:'↻',alignment:['left','fill'],preferredSize:[28, 28],properties:{style:'toolbutton'}},\
										killTag:IconButton{text:'⌧',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove tags',properties:{style:'toolbutton'}},\
										killOther:IconButton{text:'⒳',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove other',properties:{style:'toolbutton'}},\
									}\
								},\
								rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[0,20,0,0],\
									editText:EditText{\
										text:'',alignment:['fill','fill'],properties:{multiline:true,readonly:false,}\
									},\
									btGroup:Group{orientation:'column',alignment:['fill','bottom'],alignChildren:['fill','top'],\
										bbt:Group{orientation:'row',\
											bButton:IconButton{text:'<b>',alignment:['fill','fill'],properties:{style:'toolbutton'}},\
											bsButton:IconButton{text:'</b>',properties:{style:'toolbutton'}},\
											bbButton:IconButton{text:'<b> </b>',properties:{style:'toolbutton'}}\
										},\
										ibt:Group{orientation:'row',\
											iButton:IconButton{text:'<i>',alignment:['fill','fill'],properties:{style:'toolbutton'}},\
											isButton:IconButton{text:'</i>',properties:{style:'toolbutton'}},\
											iiButton:IconButton{text:'<i>  </i>',properties:{style:'toolbutton'}}\
										},\
										ubt:Group{orientation:'row',\
											uButton:IconButton{text:'<u>',alignment:['fill','fill'],properties:{style:'toolbutton'}},\
											usButton:IconButton{text:'</u>',properties:{style:'toolbutton'}},\
											uuButton:IconButton{text:'<u> </u>',properties:{style:'toolbutton'}}\
										},\
										sbt:Group{orientation:'row',\
											sButton:IconButton{text:'<s>',alignment:['fill','fill'],properties:{style:'toolbutton'}},\
											ssButton:IconButton{text:'</s>',properties:{style:'toolbutton'}},\
											sssButton:IconButton{text:'<s>  </s>',properties:{style:'toolbutton'}}\
										},\
										fbt:Group{orientation:'row',\
											fsButton:IconButton{text:'<font size=20>',properties:{style:'toolbutton'},preferredSize:[120,30]},\
											fsValue:EditText{text:'20',characters:'3'},\
											fcButton:IconButton{text:'<font color=00FF00>',properties:{style:'toolbutton'},preferredSize:[130,30]},\
											fcValue:Button{}\
										},\
										midGroup:Group{orientation:'row',alignment:['fill','fill'],margins:[0,10,0,0],\
											position:Group{orientation:'column',alignment:['left','fill'],\
												upbt:Group{orientation:'row',alignment:['left','top'],\
													ulButton:IconButton{text:'↖',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													ucButton:IconButton{text:'⇡',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													urButton:IconButton{text:'↗',preferredSize:[30,30],properties:{style:'toolbutton'}}\
												},\
												mdbt:Group{orientation:'row',alignment:['left','top'],\
													mlButton:IconButton{text:'⇠',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													mcButton:IconButton{text:'●',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													mrButton:IconButton{text:'⇢',preferredSize:[30,30],properties:{style:'toolbutton'}}\
												},\
												bobt:Group{orientation:'row',alignment:['left','top'],\
													blButton:IconButton{text:'↙',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													bcButton:IconButton{text:'☻',preferredSize:[30,30],properties:{style:'toolbutton'}},\
													brButton:IconButton{text:'↘',preferredSize:[30,30],properties:{style:'toolbutton'}}\
												},\
											},\
											extraPo:Group{orientation:'column',alignment:['fill','fill'],\
												pos:Group{orientation:'row',alignment:['fill','top'],\
													posButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "pos(192,144)}',preferredSize:[120,30],properties:{style:'toolbutton'}},\
													textX:StaticText{text:'x:',alignment:['right','fill']},\
													posX:EditText{text:'192',characters:4},\
													textY:StaticText{text:'y:'},\
													posY:EditText{text:'144',characters:4},\
												},\
												fade:Group{orientation:'row',alignment:['fill','fill'],\
													fadButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fad(300,300)}',preferredSize:[120,30],properties:{style:'toolbutton'}},\
													inText:StaticText{text:'i:',alignment:['right','fill']},\
													fadIn:EditText{text:'300',characters:4},\
													outText:StaticText{text:'o:'},\
													fadOut:EditText{text:'300',characters:4},\
												},\
												other:Group{orientation:'row',alignment:['fill','fill'],\
													bord:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "bord(2)}',preferredSize:[80,30],properties:{style:'toolbutton'}},\
													metri:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fsp(2)}',preferredSize:[60,30],properties:{style:'toolbutton'}},\
													blur:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "be(2)}',preferredSize:[50,30],properties:{style:'toolbutton'}},\
													bfbVal:EditText{text:'2',characters:2,alignment:['fill','center']},\
												},\
											}\
										},\
										fix:Group{orientation:'row',alignment:['fill','fill'],\
												direct:Group{orientation:'row',alignment:['fill','fill'],\
													vertical:Checkbox{text:'" + es_str.vertical + "',alignment:['left','center']},\
												},\
												move:Group{orientation:'row',alignment:['right','fill'],spacing:3,\
													moveButton:IconButton{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "move(...)}',preferredSize:[80,30],properties:{style:'toolbutton'}},\
													x1:EditText{text:'384',characters:3},\
													y1:EditText{text:'144',characters:3},\
													x2:EditText{text:'-50',characters:3},\
													y2:EditText{text:'144',characters:3},\
													moveIn:EditText{text:'0',characters:4},\
													moveOut:EditText{text:'3000',characters:4},\
												},\
										}\
										rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],\
											rfButton:IconButton{text:'" + es_str.refresh + "',alignment:['fill','fill'],properties:{style:'toolbutton'}},\
											epButton:IconButton{text:'" + es_str.xport + "',alignment:['fill','fill'],properties:{style:'toolbutton'}}\
										}\
									}\
								}\
							}";


				var es_help = function () {
					var res = "group {orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'],\
							pnl: Panel {type:'tabbedpanel',\
								aboutTab: Panel { type:'tab', text:'" + es_str.descript + "',\
									aboutEt: EditText { text:'" + es_str.desContent + "', preferredSize:[280,120], properties:{multiline:true}}\
									},\
								usageTab: Panel { type:'tab', text:'" + es_str.usage + "',\
									usageEt: EditText { text:'" + es_str.useContent + "', preferredSize:[280,120], properties:{multiline:true}}\
									}\
							},\
							btns: Group {orientation:'row', alignment:['fill','bottom'],\
								otherScriptsBtn: Button { text:'" + es_str.other + "', alignment:['left','center'] },\
								okBtn: Button { text:'" + es_str.close + "', alignment:['right','center'] }\
							}\
						}";
					var helpWin = new Window("palette", es_str.about);
					helpWin.gr = helpWin.add(res);
					helpWin.gr.btns.otherScriptsBtn.onClick = function () {
						var cmd = "";
						var url = es_str.website;
						if ($.os.indexOf("Win") != -1) {
							if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
								cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url;
							} else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
								cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url;
							} else {
								cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url;
							}
						} else {
							cmd += "open " + url;
						}
						try {
							system.callSystem(cmd);
						} catch (e) {
							alert(e);
						}
					};
					helpWin.gr.btns.okBtn.onClick = function () {
						helpWin.close();
					};
					helpWin.center();
					helpWin.show();
				};
				pal.grp = pal.add(res);
				pal.layout.layout(true);
				pal.grp.minimumSize = pal.grp.size;
				pal.layout.resize();
				pal.onResizing = pal.onResize = function () {
					this.layout.resize();
				};

				var textGreen = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, [0, 1, 0], 1);
				var bgGreen = pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, [0, 1, 0], 1);

				pal.grp.leftPart.listArea.graphics.foregroundColor = textGreen;
				pal.grp.rightPart.btGroup.fbt.fcValue.colorHex = "00FF00";
				pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = bgGreen;

				pal.grp.leftPart.listArea.onChange = function () {
					pal.grp.rightPart.editText.backupSelection = "";
					var i = this.selection[0].index;
					comp.time = comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate;
					pal.grp.rightPart.editText.text = comp.layer(slIndex[i]).property("Marker").valueAtTime(comp.layer(slIndex[i]).outPoint - markerTimeOffset / comp.frameRate, !0).comment.replace(reg, "\r");
				};
				pal.grp.leftPart.buttonArea.info.onClick = function () {
					es_help();
				};
				pal.grp.leftPart.buttonArea.resel.onClick = function () {
					var curComp = app.project.activeItem,
						curSel = curComp.selectedLayers;
					for (var o = 0; o < curSel.length; o++) {
						curSel[o].selected = !1;
					};
					for (var i = 0; i < sl.length; i++) {
						sl[i].selected = !0;
					}
				};
				pal.grp.leftPart.buttonArea.pickPos.onClick = function () {
					var curComp = app.project.activeItem;
					try {
						var curSel = curComp.selectedLayers,
							posX = Math.round(curSel[0].property("transform").property("Position").value[0] / curComp.width * 384),
							posY = Math.round(curSel[0].property("transform").property("Position").value[1] / curComp.height * 288);
					} catch (e) {}
					0 == curSel.length || curSel[0].threeDLayer ?
						alert(es_str.er2dlayer) :
						alert("x:" + posX + " y:" + posY + "\n" + es_str.srtXY);
				};
				pal.grp.leftPart.buttonArea.killOther.onClick = function () {
					triggerMarker(pal, "", "", "", "", ["", "", "", ""], null, null, !1, this.parent.lineNum.text);
				};
				pal.grp.leftPart.buttonArea.killTag.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, this.parent.lineNum.text);
				};
				pal.grp.leftPart.buttonArea.rmMarker.onClick = function () {
					var rsl = comp.selectedLayers;
					pal.grp.leftPart.listArea.removeAll();
					removeESmarker(rsl);
				};
				pal.grp.leftPart.buttonArea.preci.onChange = function () {
					this.text = validNum(this.text, 1, this.text <= 0);
				};
				pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
				};
				pal.grp.rightPart.editText.addEventListener('mouseout', function () {
					this.backupSelection = this.textselection;
				});
				if (-1 != $.os.indexOf("Win")) {
					pal.grp.rightPart.editText.onChange = function () {
						triggerMarker(pal, null, null, null, null, []);
					};
				} else {
					pal.grp.rightPart.editText.onChanging = function () {
						triggerMarker(pal, null, null, null, null, []);
					};
				};

				// pal.addEventListener("keydown", function () {

				// 	try {
				// 		alert(pal.grp.leftPart.listArea.columns.titles)
				// 		// fixList(pal.grp.leftPart.listArea)

				// 		// alert(pal.grp.leftPart.listArea.columns.titles[0]) 
				// 	} catch (e) {
				// 		alert(e)
				// 	}
				// })
				pal.addEventListener("keydown", function (kd) {
					pressed(kd, this)
				})

				pal.grp.rightPart.btGroup.bbt.bButton.onClick = function () {
					runCommand(pal, "b");
				};
				pal.grp.rightPart.btGroup.bbt.bsButton.onClick = function () {
					runCommand(pal, "/b");
				};
				pal.grp.rightPart.btGroup.ibt.iButton.onClick = function () {
					runCommand(pal, "i");
				};
				pal.grp.rightPart.btGroup.ibt.isButton.onClick = function () {
					runCommand(pal, "/i");
				};
				pal.grp.rightPart.btGroup.ubt.uButton.onClick = function () {
					runCommand(pal, "u");
				};
				pal.grp.rightPart.btGroup.ubt.usButton.onClick = function () {
					runCommand(pal, "/u");
				};
				pal.grp.rightPart.btGroup.sbt.sButton.onClick = function () {
					runCommand(pal, "s");
				};
				pal.grp.rightPart.btGroup.sbt.ssButton.onClick = function () {
					runCommand(pal, "/s");
				};
				pal.grp.rightPart.btGroup.bbt.bbButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "b", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.ibt.iiButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "i", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.sbt.sssButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "s", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.ubt.uuButton.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "u", "", !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.fbt.fsButton.onClick = function () {
					var keyString = " size=" + this.parent.fsValue.text;
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text)
				};
				pal.grp.rightPart.btGroup.fbt.fcButton.onClick = function () {
					var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex);
					triggerMarker(pal, null, null, null, null, [], "font", keyString, !1, pal.grp.leftPart.buttonArea.lineNum.text);
				};
				pal.grp.rightPart.btGroup.fbt.fcValue.onDraw = function () {
					this.graphics.rectPath(0, 0, this.size[0], this.size[1]);
					this.graphics.fillPath(this.fillBrush);
				};
				pal.grp.rightPart.btGroup.fbt.fcValue.onClick = function () {
					var origin = this.colorHex;
					var colorString = $.colorPicker();
					this.colorHex = colorString == -1 ? origin : colorString.toString(16).toUpperCase();
					this.parent.fcButton.text = "<font color=" + fixBlueHex(this.colorHex) + ">";
					this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToRgb(this.colorHex));
				};

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an3}", "{\\pos(0,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an1}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an6}", "{\\pos(192,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an2}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an9}", "{\\pos(384,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an3}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an2}", "{\\pos(0,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an4}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an5}", "{\\pos(192,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an5}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an8}", "{\\pos(384,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an6}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an1}", "{\\pos(0,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an7}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an4}", "{\\pos(192,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an8}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
					pal.grp.rightPart.btGroup.fix.direct.vertical.value ?
						triggerMarker(pal, "{\\an7}", "{\\pos(384,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, !1) :
						triggerMarker(pal, "{\\an9}", "", "", null, [], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {
					var px = this.parent.posX.text,
						py = this.parent.posY.text;

					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, [], null, null, !1, null, true);

				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {
					var fIn = this.parent.fadIn.text,
						fOut = this.parent.fadOut.text;
					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", [], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {
					var bordVar = "{\\bord(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [bordVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {
					var fspVar = "{\\fsp(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, fspVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {
					var blurVar = "{\\be(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, , blurVar], null, null, !1, null, true);
				};
				pal.grp.rightPart.btGroup.fix.move.moveButton.onClick = function () {
					var x1 = this.parent.x1.text,
						y1 = this.parent.y1.text,
						x2 = this.parent.x2.text,
						y2 = this.parent.y2.text,
						moveIn = this.parent.moveIn.text,
						moveOut = this.parent.moveOut.text,
						moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}";
					triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, !1, null, true)
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.onChange = function () {
					this.text = validNum(this.text, 2);
					this.parent.bord.text = "{\\bord(" + this.text + ")}";
					this.parent.metri.text = "{\\fsp(" + this.text + ")}";
					this.parent.blur.text = "{\\be(" + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.fbt.fsValue.onChange = function () {
					this.text = validNum(this.text, 20);
					this.parent.fsButton.text = "<font size=" + this.text + ">";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.onChange = function () {
					this.text = validNum(this.text, 384);
					this.parent.posButton.text = "{\\pos(" + this.text + "," + this.parent.posY.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.onChange = function () {
					this.text = validNum(this.text, 288);
					this.parent.posButton.text = "{\\pos(" + this.parent.posX.text + "," + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					this.parent.fadButton.text = "{\\fad(" + this.text + "," + this.parent.fadOut.text + ")}";
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.onChange = function () {
					this.text = validNum(this.text, 300, this.text < 0);
					this.parent.fadButton.text = "{\\fad(" + this.parent.fadIn.text + "," + this.text + ")}";
				};
				pal.grp.rightPart.btGroup.fix.move.x1.onChange = function () {
					this.text = validNum(this.text, 384);
				};
				pal.grp.rightPart.btGroup.fix.move.y1.onChange = function () {
					this.text = validNum(this.text, 144);
				};
				pal.grp.rightPart.btGroup.fix.move.x2.onChange = function () {
					this.text = validNum(this.text, -50);
				};
				pal.grp.rightPart.btGroup.fix.move.y2.onChange = function () {
					this.text = validNum(this.text, -144);
				};
				pal.grp.rightPart.btGroup.fix.move.moveIn.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
				};
				pal.grp.rightPart.btGroup.fix.move.moveOut.onChange = function () {
					this.text = validNum(this.text, 3000, this.text < 0);
				};
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
					pal.grp.rightPart.editText.text = "";
					refreshButton(pal);
					fixList(pal.grp.leftPart.listArea);
				};
				pal.grp.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
					writeSrt(pal.grp.leftPart.listArea.items);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.helpTip = es_str.bordHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.helpTip = es_str.metriHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.helpTip = es_str.blurHelp;
				pal.grp.rightPart.btGroup.fix.direct.vertical.helpTip = es_str.verticalHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.helpTip = es_str.posHelp;
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.helpTip = es_str.srtXY
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.helpTip = es_str.srtXY
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.helpTip = es_str.fadHelp;
				pal.grp.rightPart.btGroup.fix.move.moveButton.helpTip = es_str.mvHelp;
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.helpTip = es_str.rfHelp;
				pal.grp.rightPart.btGroup.rebtGroup.epButton.helpTip = es_str.epHelp;
				pal.grp.rightPart.btGroup.fbt.fcButton.helpTip = es_str.fcHelp;
				pal.grp.rightPart.btGroup.bbt.bbButton.helpTip = es_str.bbHelp;
				pal.grp.rightPart.btGroup.ibt.iiButton.helpTip = es_str.iiHelp;
				pal.grp.rightPart.btGroup.sbt.sssButton.helpTip = es_str.sssHelp;
				pal.grp.rightPart.btGroup.ubt.uuButton.helpTip = es_str.uuHelp;
				pal.grp.rightPart.btGroup.fbt.fsButton.helpTip = es_str.fsHelp;
				pal.grp.rightPart.btGroup.fbt.fcValue.helpTip = es_str.fcvalueHelp;

				pal.grp.leftPart.buttonArea.info.helpTip = es_str.infoHelp;
				pal.grp.leftPart.buttonArea.resel.helpTip = es_str.reselHelp;
				pal.grp.leftPart.buttonArea.pickPos.helpTip = es_str.pickposHelp;
				pal.grp.leftPart.buttonArea.killOther.helpTip = es_str.killotherHelp;
				pal.grp.leftPart.buttonArea.killTag.helpTip = es_str.killtagHelp;
				pal.grp.leftPart.buttonArea.rmMarker.helpTip = es_str.rmmarkHelp;
				pal.grp.leftPart.buttonArea.preci.helpTip = es_str.preciHelp;
				pal.grp.leftPart.buttonArea.lineNum.helpTip = es_str.linenumHelp;
				pal.grp.leftPart.buttonArea.olCheck.helpTip = es_str.olcheckHelp;
				pal.grp.rightPart.btGroup.fix.move.x1.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.y1.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.x2.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.y2.helpTip = es_str.srtXY;
				pal.grp.rightPart.btGroup.fix.move.moveIn.helpTip = es_str.msHelp;
				pal.grp.rightPart.btGroup.fix.move.moveOut.helpTip = es_str.msHelp;
				pal.grp.rightPart.btGroup.bbt.bButton.helpTip = es_str.bHelp;
				pal.grp.rightPart.btGroup.ibt.iButton.helpTip = es_str.iHelp;
				pal.grp.rightPart.btGroup.ubt.uButton.helpTip = es_str.uHelp;
				pal.grp.rightPart.btGroup.sbt.sButton.helpTip = es_str.sHelp;
				pal.grp.rightPart.btGroup.bbt.bsButton.helpTip = es_str.bsHelp;
				pal.grp.rightPart.btGroup.ibt.isButton.helpTip = es_str.isHelp;
				pal.grp.rightPart.btGroup.ubt.usButton.helpTip = es_str.usHelp;
				pal.grp.rightPart.btGroup.sbt.ssButton.helpTip = es_str.ssHelp;

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.helpTip = es_str.blHelp;
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.helpTip = es_str.bcHelp;
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.helpTip = es_str.brHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.helpTip = es_str.mlHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.helpTip = es_str.mcHelp;
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.helpTip = es_str.mrHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.helpTip = es_str.ulHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.helpTip = es_str.ucHelp;
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.helpTip = es_str.urHelp;

				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.helpTip = es_str.msHelp
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.helpTip = es_str.msHelp

				pal.grp.leftPart.buttonArea.pickPos.image = ScriptUI.newImage(dad)
				pal.grp.leftPart.buttonArea.rmMarker.image = ScriptUI.newImage(cimg)
				pal.grp.leftPart.buttonArea.resel.image = ScriptUI.newImage(dimg)
				pal.grp.leftPart.buttonArea.killTag.image = ScriptUI.newImage(eimg)
				pal.grp.leftPart.buttonArea.killOther.image = ScriptUI.newImage(fimg)
				pal.grp.leftPart.buttonArea.info.image = ScriptUI.newImage(gimg)
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.image = ScriptUI.newImage(himg)
				pal.grp.rightPart.btGroup.rebtGroup.epButton.image = ScriptUI.newImage(iimg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.image = ScriptUI.newImage(zzmg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.image = ScriptUI.newImage(ssmg)
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.image = ScriptUI.newImage(ccmg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.image = ScriptUI.newImage(aamg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.image = ScriptUI.newImage(xxmg)
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.image = ScriptUI.newImage(ddmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.image = ScriptUI.newImage(qqmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.image = ScriptUI.newImage(wwmg)
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.image = ScriptUI.newImage(eemg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.image = ScriptUI.newImage(posmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.image = ScriptUI.newImage(fadmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.image = ScriptUI.newImage(bordmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.image = ScriptUI.newImage(fspmg)
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.image = ScriptUI.newImage(bemg)
				pal.grp.rightPart.btGroup.fix.move.moveButton.image = ScriptUI.newImage(movemg)
				pal.grp.rightPart.btGroup.fbt.fsButton.image = ScriptUI.newImage(fsmg)
				pal.grp.rightPart.btGroup.fbt.fcButton.image = ScriptUI.newImage(fcmg)
			}
			return pal;
		}

		function mouseEventHandler() {

			if ($.os.indexOf("Win") != -1) {
				vbs.execute();
				// var cmdcmd ="";
				// cmdcmd += "cmd.exe /c cmd.exe /c \"powershell -Command \"$wshell = New-Object -ComObject wscript.shell;$wshell.SendKeys('^v')\""
				// system.callSystem(cmdcmd);
			} else {
				var cmd = "";
				cmd += "osascript -e \'tell application \"System Events\" to keystroke \"v\" using {command down}\'";
				system.callSystem(cmd);
			}

			this.removeEventListener("mouseout", mouseEventHandler);
		}

		function sortLayers(layers) {
			return layers.sort(function (a, b) {
				return a.inPoint - b.inPoint;
			});
		}

		function checkOverlap(layers) {
			for (var result = !1, a = 1; a < layers.length; a++) layers[a].selected = !0, parseFloat(layers[a].inPoint) < parseFloat(layers[a - 1].outPoint) && (result = !0, layers[a].selected = !1);
			try {
				layers[0].selected = !0;
			} catch (d) {}
			if (result)
				for (a = 0; a < layers.length; a++) layers[a].selected = !layers[a].selected;
			return result;
		}

		function writeSrt(list) {
			var srtFile = File.saveDialog(es_str.saveDialog);
			srtFile.encoding = "utf-8", srtFile.open("w");
			srtFile.write("0\r00:00:00,000 --> 00:00:00,000\rsongzmeng srt export" + "\r\r");
			for (var r = 0; r < list.length; r++) srtFile.write(list[r].text + "\r" + list[r].subItems[0].text + "\r" + list[r].subItems[1].text + "\r\r");
			return srtFile.close(), srtFile;
		}

		function writeFile(fileObj, fileContent, encoding) {
			encoding = encoding || "utf-8";
			fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);

			var parentFolder = fileObj.parent;
			if (!parentFolder.exists && !parentFolder.create())
				throw new Error("Cannot create file in path " + fileObj.fsName);
			fileObj.encoding = encoding;
			fileObj.open("w");
			fileObj.write(fileContent);
			fileObj.close();
			return fileObj;
		}

		function pressed(k, pal) {
			if (k.keyName == "Z" && k.metaKey) {
				// alert(123)
				app.executeCommand(16);
				pal.grp.leftPart.buttonArea.resel.notify("onClick");
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.notify("onClick");
			};
		}

		function checkTextLayer(layers) {
			if (0 != layers.length)
				for (var b = 0; b < layers.length; b++)
					if (!(layers[b] instanceof TextLayer)) return !1;
			return !0;
		}

		function removeESmarker(layers) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < layers.length; i++) {
				if (checkMarker(layers[i])) {
					var markerIndex = layers[i].property("Marker").nearestKeyIndex(layers[i].outPoint - markerTimeOffset / comp.frameRate);
					layers[i].property("Marker").removeKey(markerIndex);
				}
			}
			app.endUndoGroup();
		}

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum, poDef) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {
				var listIndex = pal.grp.leftPart.listArea.selection[i].index,
					esMarker = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true),
					markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null && otherVar.length == 0) ?
					String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) :
					(remove ?
						removeQuote(esMarker.comment, newlineMark, lineNum) :
						quoteText(esMarker.comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.rightPart.editText.backupSelection, key, arg)),
					chapVar = (poVar == null) ? (poDef ? (esMarker.chapter == "" ? "{\\an2}" : esMarker.chapter) : esMarker.chapter) : poVar,
					urlVar = (posVar == null) ? esMarker.url : posVar,
					frameTargetVar = (orientVar == null) ? esMarker.frameTarget : orientVar,
					cuePointNameVar = (fadeVar == null) ? esMarker.cuePointName : fadeVar,
					paramsVar = {};
				paramsVar.bord = (otherVar[0] == null) ?
					(esMarker.getParameters().bord == void 0 ? "" : esMarker.getParameters().bord) :
					otherVar[0];
				paramsVar.fsp = (otherVar[1] == null) ?
					(esMarker.getParameters().fsp == void 0 ? "" : esMarker.getParameters().fsp) :
					otherVar[1];
				paramsVar.be = (otherVar[2] == null) ?
					(esMarker.getParameters().be == void 0 ? "" : esMarker.getParameters().be) :
					otherVar[2];
				paramsVar.move = (otherVar[3] == null) ?
					(esMarker.getParameters().move == void 0 ? "" : esMarker.getParameters().move) :
					otherVar[3];
				var markValue = new MarkerValue(markComment, chapVar, urlVar, frameTargetVar, cuePointNameVar, paramsVar);
				comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, markValue);
				//re assign cause setValueAtTime()
				var esMarker2 = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true);
				pal.grp.leftPart.listArea.selection[i].subItems[1].text =
					esMarker2.chapter +
					esMarker2.url +
					esMarker2.frameTarget +
					esMarker2.cuePointName +
					esMarker2.getParameters().bord +
					esMarker2.getParameters().fsp +
					esMarker2.getParameters().be +
					esMarker2.getParameters().move +
					esMarker2.comment.replace(reg, "\r");
				pal.grp.rightPart.editText.text = esMarker2.comment.replace(reg, "\r");
			}
			app.endUndoGroup();
			fixList(pal.grp.leftPart.listArea);
		}

		function runCommand(pal, arg) {
			var cmds = "";
			var sysarg = ($.os.indexOf("Win") != -1) ? "^^^<" + arg + "^^^>" :
				"<" + arg + ">";
			var syscmd = ($.os.indexOf("Win") != -1) ?
				"echo | set /p= " + sysarg + "|clip" :
				"printf \"" + sysarg + "\"|pbcopy";
			cmds += syscmd;
			if ($.os.indexOf("Win") != -1) {
				var echoClip = new File(Folder.temp.toString() + encodeURI("/echoClip.bat"));
				writeFile(echoClip, cmds);
			}

			if ($.os.indexOf("Win") != -1) {
				echoVbs.execute();
			} else {
				system.callSystem(cmds);
			}
			//pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);
		}

		function quoteText(origin, splitor, lineNum, textSel, key, arg) {
			function u(origin, textSel, key, arg) {
				var quotesel = null !== key ? "<" + key + arg + ">" + textSel + "</" + key + ">" : textSel,
					originsel = null !== key ? "<" + key + arg + ">" + origin + "</" + key + ">" : origin;
				return 0 != textSel ? origin.replace(textSel, quotesel) : origin.replace(origin, originsel);
			}
			if (0 == lineNum) return u(origin, textSel, key, arg);
			if (void 0 !== origin.split(splitor)[lineNum - 1]) {
				var o = origin.split(splitor);
				return o[lineNum - 1] = u(o[lineNum - 1], textSel, key, arg), o = o.join(splitor);
			}
			return void 0 == origin.split(splitor)[lineNum - 1] ? origin : void 0;
		}

		function removeQuote(comment, splitor, lineNum) {
			var reg = /(<\/?(\s|\S)*?>)/g;
			if (void 0 !== comment.split(splitor)[lineNum - 1]) {
				var tmpArray = comment.split(splitor);
				return tmpArray[lineNum - 1] = tmpArray[lineNum - 1].replace(reg, ""), tmpArray = tmpArray.join(splitor);
			}
			if (0 == lineNum) return comment.replace(reg, "");
		}

		function time2code(frames, fps, precision) {
			var timeTpye = app.project.timeDisplayType,
				t = frames < 0 ? 0 : frames;
			app.project.timeDisplayType = 2012;
			var timecode = timeToCurrentFormat(t, fps),
				ms = Math.floor(timecode.substr(-fps.toFixed().toString().length) / fps * 1e3 / precision) * precision;
			for (ms = ms.toString(); ms.length < 3;) ms = 0 + ms;
			app.project.timeDisplayType = timeTpye;
			return timecode.substr(0, timecode.length - fps.toFixed().toString().length - 1) + "," + ms;
		}

		function checkMarker(layer) {
			var timeType = app.project.timeDisplayType;
			app.project.timeDisplayType = 2013;
			var esMarker = layer.property("Marker"),
				esMarkerTime = timeToCurrentFormat(layer.outPoint, comp.frameRate) - markerTimeOffset;
			if (void 0 != esMarker.numKeys) {
				for (var a = 1; a <= esMarker.numKeys; a++)
					if (timeToCurrentFormat(esMarker.keyTime(a), comp.frameRate) == esMarkerTime) return app.project.timeDisplayType = timeType, !0;
				return app.project.timeDisplayType = timeType, !1;
			}
		}

		function validMarker(layer) {
			if (!checkMarker(layer)) {
				var comment = layer.property("Source Text").valueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, !1);
				comment = String(comment).replace(/\comment/gm, newlineMark);
				var params = {};
				params.bord =
					params.fsp =
					params.be =
					params.move = "";
				var esMarker = new MarkerValue(comment, "", "", "", "", params);
				layer.property("Marker").setValueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, esMarker)
			}
		}

		function canWriteFiles() {
			if (isSecurityPrefSet()) return true;

			alert(es_str.writePermiss);
			app.executeCommand(2359);

			return isSecurityPrefSet();

			function isSecurityPrefSet() {
				return app.preferences.getPrefAsLong("Main Pref Section", "Pref_SCRIPTING_FILE_NETWORK_SECURITY") === 1;
			}
		}

		function hexToRgb(string) {
			"string" == typeof string && (string = parseInt(string, 16));
			var r = string >> 16 & 255,
				g = string >> 8 & 255,
				b = string >> 0 & 255;
			return [r / 255, g / 255, b / 255, 1];
		}

		function fixBlueHex(num) {
			for (var hex = num.toString(16); hex.length < 6;) hex = 0 + hex;
			return hex;
		}

		function fixList(control) {
			var wh = control.size;
			control.size = [1 + wh[0], 1 + wh[1]];
			control.size = [wh[0], wh[1]];
		}

		function validNum(inPut, def, express) {
			return String.prototype.trim || (String.prototype.trim = function () {
				return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
			}), "" == inPut.trim() || isNaN(inPut) || express ? parseFloat(def) : parseFloat(inPut);
		}

		function refreshButton(pal) {
			if (comp = app.project.activeItem, osl = sl, sl = comp ? sortLayers(comp.selectedLayers) : [], slIndex = [], checkTextLayer(sl))
				if (pal.grp.leftPart.buttonArea.olCheck.value && checkOverlap(sl)) sl = osl, alert(es_str.overlap);
				else {
					pal.grp.rightPart.editText.backupSelection = "",
						pal.grp.leftPart.listArea.removeAll(),
						//pal.grp.leftPart.buttonArea.resel.enabled = 0 == sl.length ? !1 : !0,
						app.beginUndoGroup(es_str.title);
					for (var t = 0; t < sl.length; t++) {
						slIndex.push(sl[t].index), validMarker(sl[t]), pal.grp.leftPart.listArea.add("item", t + 1), pal.grp.leftPart.listArea.items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) + " --> " + time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text);
						var r = sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, !0);
						pal.grp.leftPart.listArea.items[t].subItems[1].text = r.chapter + r.url + r.frameTarget + r.cuePointName + r.getParameters().bord + r.getParameters().fsp + r.getParameters().be + r.getParameters().move + r.comment.replace(reg, "\r"), sl[t].selected = !1;
					}
					app.endUndoGroup();
				}
			else sl = osl, alert(es_str.textOnly);



			// $.sleep(2100)
			for (var i = 5; i < pal.grp.leftPart.buttonArea.children.length; i++) {
				pal.grp.leftPart.buttonArea.children[i].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0
			};
			for (var x = 0; x < pal.grp.rightPart.btGroup.children.length - 1; x++) {
				pal.grp.rightPart.btGroup.children[x].enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0
			};
			pal.grp.rightPart.editText.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;
			pal.grp.rightPart.btGroup.rebtGroup.epButton.enabled = 0 == pal.grp.leftPart.listArea.items.length ? !1 : !0;





		}


		if (canWriteFiles()) {

			var ui = es_buildUI(thisObj),
				comp, sl, osl, slIndex, markerTimeOffset = 1,
				newlineMark = "↵",
				reg = new RegExp(newlineMark, "gm");

			if (-1 != $.os.indexOf("Win")) {
				if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat")).exists) var bat = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat"));
				else {
					var bat = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.bat")),
						batCommand = "powershell -Command \"$wshell = New-Object -ComObject wscript.shell;$wshell.SendKeys('^v')\"";
					writeFile(bat, batCommand)
				}
				if (File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs")).exists) var vbs = File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs"));
				else {
					var vbs = new File(Folder.temp.toString() + encodeURI("/es-win-ctrl-v.vbs")),
						vbsCommand = 'CreateObject("Wscript.Shell").Run "' + bat.fsName + '", 0, True';
					writeFile(vbs, vbsCommand)
				}
				if (File(Folder.temp.toString() + encodeURI("/echoClip.vbs")).exists) var echoVbs = File(Folder.temp.toString() + encodeURI("/echoClip.vbs"));
				else {
					var echoVbs = new File(Folder.temp.toString() + encodeURI("/echoClip.vbs")),
						echoVbsCommand = 'CreateObject("Wscript.Shell").Run "' + File(Folder.temp.toString() + encodeURI("/echoClip.bat")).fsName + '", 0, True';
					writeFile(echoVbs, echoVbsCommand)
				}
			}

			refreshButton(ui);

			if (ui !== null) {
				if (ui instanceof Window) {
					ui.center();
					ui.show();
				} else {
					ui.layout.layout(true);
				}
			}
		}
	})(this)