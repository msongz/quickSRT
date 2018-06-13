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

			
			var res = "group{\
							orientation:'row',\
							alignment:['fill','fill'],\
							\
							leftPart:Group{\
								orientation:'row',\
								alignment:['fill','fill'],\
								\
								listArea:ListBox{\
									properties:{\
										items:[1,2,3],\
										numberOfColumns:3,\
										showHeaders:true,\
										columnTitles:['#', '"+ es_str.time +"', '"+ es_str.content +"'],\
										multiselect:true},\
									alignment:['fill','fill'],\
									visible:true\
								}\
							}\
						}";

			pal.grp = pal.add(res);
			
			

			// pal.grp.leftPart.listArea.add("item");





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