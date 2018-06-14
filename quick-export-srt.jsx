//songz meng
//export srt 
//v0.01 
(function () {
	// body...

	var es_str = {};
	es_str.title = {en:"quick export srt",cn:"快捷导出字幕"};
	es_str.version = {en:" v0.01",cn:" v0.01"};
	es_str.export = {en:"export",cn:"导出"};
	es_str.refresh = {en:"refresh",cn:"刷新"};
	es_str.noLayer = {en:"no layer selected",cn:"没有选择图层"};
	es_str.website = {en:"https://github.com/msongz",cn:"https://github.com/msongz"};
	es_str.mail = {en:"songzmeng@gmail.com",cn:"msongz@qq.com"};
	es_str.time = {en:"time",cn:"时间"};
	es_str.content = {en:"content",cn:"内容"};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};

	if (true) {
		for(var i in es_str ){
			es_str[i] = es_str[i]["en"];
		};
	};







	function es_buildUI(thisObj) {
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {resizeable: true});

		if (pal !== null) {

			
			var res = "group\
			{\
				\
				\
				orientation:'row',\
				alignment:['fill','fill'],\
				minimumSize:[200, 200],\
				\
				leftPart:Group{\
					\
					\
					orientation:'row',\
					alignment:['fill','fill'],\
					\
					\
					listArea:ListBox{\
						\
						\
						alignment:['fill','fill'],\
						minimumSize:[100, 100],\
						\
						\
						properties:{\
							numberOfColumns:3,\
							columnTitles:['#', '"+ es_str.time +"', '"+ es_str.content +"'],\
							showHeaders:true,\
							multiselect:true\
						}\
					}\
				},\
				\
				\
				rightPart:Group{\
					\
					\
					orientation:'column',\
					alignment:['center','fill'],\
					margins:[0,20,0,0],\
					minimumSize:[100, 100],\
					\
					\
					editText:EditText{\
						text:'',\
						alignment:['fill','top'],\
						minimumSize:[0,0]\
						properties:{\
							multiline:false,\
						}\
						\
					},\
					\
					\
					\
					btGroup:Group:{\
						\
						\
						orientation:'column',\
						alignment:['fill','fill'],\
						\
						\
						bbt:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','top'],\
							\
							\
							bButton:Button{\
								text:'<b>',\
								alignment:['fill','fill']\
							},\
							bsButton:Button{\
								text:'</b>'\
							},\
							bbButton:Button{\
								text:'<b> </b>'\
							}\
						},\
						ibt:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','top'],\
							\
							\
							iButton:Button{\
								text:'<i>',\
								alignment:['fill','fill']\
							},\
							isButton:Button{\
								text:'</i>',\
							},\
							iiButton:Button{\
								text:'<i>   </i>'\
							}\
						},\
						ubt:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','top'],\
							\
							\
							uButton:Button{\
								text:'<u>',\
								alignment:['fill','fill']\
							},\
							usButton:Button{\
								text:'</u>'\
							},\
							uuButton:Button{\
								text:'<u> </u>'\
							}\
						},\
						fbt:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','top'],\
							\
							\
							fsButton:Button{\
								text:'<font size>',\
								alignment:['fill','fill']\
							},\
							fcButton:Button{\
								text:'<font color>'\
							},\
							fsButton:Button{\
								text:'</font>'\
							}\
						},\
						REbt:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','bottom'],\
							\
							\
							fsButton:Button{\
								text:'"+ es_str.refresh +"',\
								alignment:['fill','fill']\
							},\
							fcButton:Button{\
								text:'"+ es_str.export +"',\
								alignment:['fill','fill']\
							},\
						},\
					}\
					\
					\
					\
				}\
			}";

			pal.grp = pal.add(res);



			// pal.grp.leftPart.listArea.add("item",["1"])
			// pal.grp.leftPart.listArea.items[0].subItems[0].text="00:00:00 --> 00:00:00"
			// pal.grp.leftPart.listArea.items[0].subItems[1].text="world"





			// pal.layout.layout(true);
			pal.onResizing = pal.onResize = function() {
				this.layout.resize()
			}
			return pal
		}
	}


	var ui = es_buildUI();

	if (ui !== null) {
		if (ui instanceof Window) {
			ui.center();
			ui.show()
		} else {
            // ui.layout.layout(true)
        }
    }



})()