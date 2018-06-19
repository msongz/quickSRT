//songz meng
//export srt 
//v0.01 
(function es_srt(thisObj) {
	// body...

	var es_str = {};
	es_str.title = {
		en: "quick export srt",
		cn: "快捷导出字幕"
	};
	es_str.version = {
		en: " v0.01",
		cn: " v0.01"
	};
	es_str.export = {
		en: "export",
		cn: "导出"
	};
	es_str.refresh = {
		en: "refresh",
		cn: "刷新"
	};
	es_str.noLayer = {
		en: "no layer selected",
		cn: "没有选择图层"
	};
	es_str.website = {
		en: "https://github.com/msongz",
		cn: "https://github.com/msongz"
	};
	es_str.mail = {
		en: "songzmeng@gmail.com",
		cn: "msongz@qq.com"
	};
	es_str.time = {
		en: "time",
		cn: "时间"
	};
	es_str.content = {
		en: "content",
		cn: "内容"
	};
	es_str.helptip = {
		en: "HelpTip",
		cn: "帮助"
	};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};
	// es_str.version = {en:"",cn:""};

	if (true) {
		for (var i in es_str) {
			es_str[i] = es_str[i]["en"];
		};
	};







	function es_buildUI(thisObj) {
		var pal = (thisObj instanceof Panel) ? thisObj : new Window("palette", es_str.title + es_str.version, undefined, {
			closeOnKey: 'OSCmnd+W',
			resizeable: true
		});

		if (pal !== null) {


			var res = "group\
			{\
				\
				\
				orientation:'row',\
				alignment:['fill','fill'],\
				minimumSize:[420, 400],\
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
							columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
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
					alignment:['fill','fill'],\
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
							readonly:false,\
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
						\
						\
						\
						lowGroup:Group{\
							\
							\
							orientation:'row',\
							alignment:['fill','fill'],\
							margins:[0,20,0,0],\
							\
							\
							poGroup:Group{\
								\
								\
								orientation:'column',\
								alignment:['left','fill'],\
								\
								\
								upbt:Group{\
									\
									\
									orientation:'row',\
									alignment:['left','top'],\
									\
									\
									ulButton:Button{\
										text:'↖',\
										preferredSize:[30,30],\
									},\
									ucButton:Button{\
										text:'⇡',\
										preferredSize:[30,30]\
									},\
									urButton:Button{\
										text:'↗',\
										preferredSize:[30,30]\
									}\
								},\
								mdbt:Group{\
									\
									\
									orientation:'row',\
									alignment:['left','top'],\
									\
									\
									mlButton:Button{\
										text:'⇠',\
										preferredSize:[30,30],\
									},\
									mdButton:Button{\
										text:'●',\
										preferredSize:[30,30]\
									},\
									mrButton:Button{\
										text:'⇢',\
										preferredSize:[30,30]\
									}\
								},\
								bobt:Group{\
									\
									\
									orientation:'row',\
									alignment:['left','top'],\
									\
									\
									blButton:Button{\
										text:'↙',\
										preferredSize:[30,30],\
									},\
									bmButton:Button{\
										text:'☻',\
										preferredSize:[30,30]\
									},\
									brButton:Button{\
										text:'↘',\
										preferredSize:[30,30]\
									}\
								}\
								\
								\
								\
							},\
							stGroup:Group{\
								alignment:['fill','fill'],\
								margins:[0,-8,0,0],\
								\
								helpTip:Panel{\
									alignment:['fill','fill'],\
									text:'HelpTip'}\
								}\
							},\
							rebt:Group{\
								\
								\
								orientation:'row',\
								alignment:['fill','bottom'],\
								\
								\
								rfButton:Button{\
									text:'" + es_str.refresh + "',\
									alignment:['fill','fill']\
								},\
								epButton:Button{\
									text:'" + es_str.export+"',\
									alignment:['fill','fill']\
								},\
							},\
							\
							\
							\
						}\
					}";

			pal.grp = pal.add(res);
			// pal.layout.layout(true);
			pal.onResizing = pal.onResize = function () {
					this.layout.resize()
				}
				// pal.grp.rightPart.btGroup.bbt.bButton.onClick= function() {
				// refreshButton(this.parent.parent.parent.parent.parent.parent)
				// alert(1)
				// }
		}
		return pal
	}


	function sortLayers(layers) {
		// by inPoint
		// in background
		return layers.sort(function (a, b) {
			return a.inPoint - b.inPoint
		})
	}

	function overlap(inPoints, outPoints) {
		// wait for add output the overlap position...
		var result = false;

		for (var i = 1; i < inPoints.length; i++) {
			if (inPoints[i] < outPoints[i - 1]) {
				result = true;
			}
		};

		return result;
	}

	function validSel(arr) {
		if (arr != null && arr.length != 0) {


			for (var i = 0; i < arr.length; i++) {
				if (!(arr[i] instanceof TextLayer)) {
					alert("please only selected Text Layer");
					return false
					break;
				}
			};
			return true

		} else {
			alert("please select some layers");
			return false;
		}
	}

	function time2code(frames, fps) {

		var timeTpye = app.project.timeDisplayType

		app.project.timeDisplayType = 2012

		frames = frames < 0 ? 0 : frames;

		var timecode = timeToCurrentFormat(frames, fps);

		var ms = Math.floor(timecode.substr(-fps.toString().length) / fps * 1000)

		ms = ms < 100 && ms >= 10 ? "0" + ms : ms

		ms = ms < 10 ? "00" + ms : ms

		app.project.timeDisplayType = timeTpye

		return timecode.substr(0, timecode.length - fps.toString().length - 1) + "," + ms
	}

	var ui = es_buildUI();
	var comp = app.project.activeItem;
	var sl = comp ? sortLayers(comp.selectedLayers) : [];

	var ips = [];

	var ops = [];

	for (var x = 0; x < sl.length; x++) {
		ips.push(sl[x].inPoint);
		ops.push(sl[x].outPoint);
	}



	function validMarker(layer) {
		function checkMarker(layer) {

			var markerProp = layer.property("Marker")
			var esMarkTime = layer.outPoint - 1 / comp.frameRate

			if (markerProp.numKeys != undefined) {
				for (var n = 1; n <= markerProp.numKeys; n++) {
					if (markerProp.keyTime(n) == esMarkTime) {
						// this.markerIndex = n
						return true
					}
				};
				return false
			}

		}


		if (checkMarker(layer)) {

		} else {
			var layerText = layer.property("Source Text").valueAtTime(layer.outPoint - 1 / comp.frameRate, false)
			var esMarkValue = new MarkerValue(layerText);
			layer.property("Marker").setValueAtTime(layer.outPoint - 1 / comp.frameRate, esMarkValue);

		}
	}




	// var markerIndex=1;
	// function refreshButton(pal,arr) {
	// body...

	for (var t = 0; t < sl.length; t++) {

		validMarker(sl[t]);
		with(ui.grp.leftPart.listArea) {
			add("item", t + 1) //index #
			items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate) + " --> " + time2code(sl[t].outPoint, comp.frameRate) // time
			items[t].subItems[1].text = sl[t].property("Marker").valueAtTime(sl[t].outPoint - 1 / comp.frameRate, false).comment //content
		}



	}

	if (ui !== null) {
		if (ui instanceof Window) {
			ui.center();
			ui.show()
		} else {
			ui.layout.layout(true)
		}
	}



})(this)