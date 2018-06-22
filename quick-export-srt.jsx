//songz meng
//export srt 
//v0.01 
(function es_subtitle(thisObj) {

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

			var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[420, 400],\
							leftPart:Group{orientation:'row',alignment:['fill','fill'],\
								listArea:ListBox{\
									alignment:['fill','fill'],minimumSize:[200, 100],\
									properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
									showHeaders:true,multiselect:true}\
								}\
							},\
							rightPart:Group{orientation:'column',alignment:['fill','fill'],margins:[0,20,0,0],minimumSize:[100, 100],\
								editText:EditText{\
									text:'',alignment:['fill','top'],minimumSize:[0,45],properties:{multiline:true,readonly:false,}\
								},\
								btGroup:Group{orientation:'column',alignment:['fill','fill'],\
									bbt:Group{orientation:'row',alignment:['fill','top'],\
										bButton:Button{text:'<b>',alignment:['fill','fill']},\
										bsButton:Button{text:'</b>'},\
										bbButton:Button{text:'<b> </b>'}\
									},\
									ibt:Group{orientation:'row',alignment:['fill','top'],\
										iButton:Button{text:'<i>',alignment:['fill','fill']},\
										isButton:Button{text:'</i>'},\
										iiButton:Button{text:'<i>   </i>'}\
									},\
									ubt:Group{orientation:'row',alignment:['fill','top'],\
										uButton:Button{text:'<u>',alignment:['fill','fill']},\
										usButton:Button{text:'</u>'},\
										uuButton:Button{text:'<u> </u>'}\
									},\
									fbt:Group{orientation:'row',alignment:['fill','top'],\
										fsButton:Button{text:'<font size>',alignment:['fill','fill']},\
										fcButton:Button{text:'<font color>'},\
										fsButton:Button{text:'</font>'}\
									},\
									midGroup:Group{orientation:'row',alignment:['fill','fill'],margins:[0,20,0,0],\
										poGroup:Group{orientation:'column',alignment:['left','fill'],\
											upbt:Group{orientation:'row',alignment:['left','top'],\
												ulButton:Button{text:'↖',preferredSize:[30,30]},\
												ucButton:Button{text:'⇡',preferredSize:[30,30]},\
												urButton:Button{text:'↗',preferredSize:[30,30]}\
											},\
											mdbt:Group{orientation:'row',alignment:['left','top'],\
												mlButton:Button{text:'⇠',preferredSize:[30,30]},\
												mcButton:Button{text:'●',preferredSize:[30,30]},\
												mrButton:Button{text:'⇢',preferredSize:[30,30]}\
											},\
											bobt:Group{orientation:'row',alignment:['left','top'],\
												blButton:Button{text:'↙',preferredSize:[30,30]},\
												bcButton:Button{text:'☻',preferredSize:[30,30]},\
												brButton:Button{text:'↘',preferredSize:[30,30]}\
											}\
										},\
										stGroup:Group{alignment:['fill','fill'],margins:[0,-8,0,0],\
											helpTip:Panel{alignment:['fill','fill'],text:'HelpTip'}\
										}\
									},\
									rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],\
										rfButton:Button{text:'" + es_str.refresh + "',alignment:['fill','fill']},\
										epButton:Button{text:'" + es_str.export+"',alignment:['fill','fill']}\
									}\
								}\
							}\
						}";


			pal.grp = pal.add(res);
			// pal.layout.layout(true);
			pal.onResizing = pal.onResize = function () {
				this.layout.resize()
			}






			pal.grp.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
				pal.grp.rightPart.editText.text = ""
				refreshButton(pal)
				fixList(pal.grp.leftPart.listArea)
			}
			pal.grp.leftPart.listArea.onChange = function () {
				var listIndex = parseInt(this.selection);
				comp.time = comp.layer(slIndex[listIndex - 1]).outPoint - 1 / comp.frameRate;
				// pal.grp.rightPart.editText.text = this.items[listIndex - 1].subItems[1].text
				pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex - 1]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex - 1]).outPoint - 1 / comp.frameRate, true).comment.replace(/↵/gm, "\r")
					// alert(slIndex)
			}
			pal.grp.rightPart.editText.onChanging = function () {
				triggerMarker(pal)

			}




			pal.grp.rightPart.editText.addEventListener('mouseout', function ( /*ev*/ ) {
				// alert(1)
				this.backupSelection = this.textselection
			});

			// pal.addEventListener("keydown", function () {
			// 	// for (var qq in pal.grp.leftPart.listArea.selection) {
			// 	// 	alert(pal.grp.leftPart.listArea.selection[qq])
			// 	// }
			// 	alert(pal.grp.leftPart.listArea.selection[0])
			// })


			pal.grp.rightPart.btGroup.bbt.bButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<b>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



				// w.txt.addEventListener("keyup", mouseEventHandler);
			}
			pal.grp.rightPart.btGroup.bbt.bsButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</b>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



				// w.txt.addEventListener("keyup", mouseEventHandler);
			}
			pal.grp.rightPart.btGroup.bbt.bbButton.onClick = function () {

				pal.grp.rightPart.editText.text = quoteText(pal.grp.rightPart.editText.text, pal.grp.rightPart.editText.backupSelection, "b")
				triggerMarker(pal)

			}





			pal.grp.rightPart.btGroup.ibt.iButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<i>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



				// w.txt.addEventListener("keyup", mouseEventHandler);
			}
			pal.grp.rightPart.btGroup.ibt.isButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</i>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



				// w.txt.addEventListener("keyup", mouseEventHandler);
			}

			pal.grp.rightPart.btGroup.ibt.iiButton.onClick = function () {

				pal.grp.rightPart.editText.text = quoteText(pal.grp.rightPart.editText.text, pal.grp.rightPart.editText.backupSelection, "i")
				triggerMarker(pal)

			}




			pal.grp.rightPart.btGroup.ubt.uButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<u>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);


				// w.txt.addEventListener("keyup", mouseEventHandler);
			}
			pal.grp.rightPart.btGroup.ubt.usButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</u>'|pbcopy";
				system.callSystem(cmds);
				// w.txt.addEventListener("click", mouseEventHandler,undefined,undefined,2);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



				// w.txt.addEventListener("keyup", mouseEventHandler);
			}

			pal.grp.rightPart.btGroup.ubt.uuButton.onClick = function () {

				pal.grp.rightPart.editText.text = quoteText(pal.grp.rightPart.editText.text, pal.grp.rightPart.editText.backupSelection, "u")
				triggerMarker(pal)

			}


			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.blButton.onClick = function () {


				triggerMarker(pal, "{\\an1}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.bcButton.onClick = function () {

				triggerMarker(pal, "")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.brButton.onClick = function () {

				triggerMarker(pal, "{\\an3}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mlButton.onClick = function () {


				triggerMarker(pal, "{\\an4}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mcButton.onClick = function () {

				triggerMarker(pal, "{\\an5}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mrButton.onClick = function () {

				triggerMarker(pal, "{\\an6}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.ulButton.onClick = function () {


				triggerMarker(pal, "{\\an7}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.ucButton.onClick = function () {

				triggerMarker(pal, "{\\an8}")

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.urButton.onClick = function () {

				triggerMarker(pal, "{\\an9}")

			}
		}
		return pal
	}

	function mouseEventHandler() {
		// alert(1);	
		// w.txt.active = false;
		// w.txt.active = true;
		var cmdd = "";
		cmdd += "osascript -e \'tell application \"System Events\" to keystroke \"v\" using {command down}\'";
		// cmdd +="open http://baidu.com"
		// cmdd += "open http://baidu.com"
		system.callSystem(cmdd);
		// alert(cmdd);
		this.removeEventListener("mouseout", mouseEventHandler);

	}

	function sortLayers(layers) {
		// by inPoint
		// in background
		return layers.sort(function (a, b) {
			return a.inPoint - b.inPoint
		})
	}


	function overlap(layers) {

		var result = false;

		for (var y = 1; y < layers.length; y++) {
			layers[y].selected = false

			if (layers[y].inPoint < layers[y - 1].outPoint) {
				result = true
				layers[y].selected = true
			}
		};
		layers[0].selected = false
		return result
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



	function triggerMarker(pal, povar) {
		// body...
		app.beginUndoGroup("triggerMarker");

		for (var qq = 0; qq < pal.grp.leftPart.listArea.selection.length; qq++) {
			var listIndex = pal.grp.leftPart.listArea.selection[qq].index;
			var noNewlineText = String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, "↵")
			var poValue = (povar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - 1 / comp.frameRate, true).chapter : povar


			var textValue = new MarkerValue(noNewlineText, poValue)
				//modify marker
			comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - 1 / comp.frameRate, textValue)
				//modify listbox
			pal.grp.leftPart.listArea.selection[qq].subItems[1].text = pal.grp.rightPart.editText.text + comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - 1 / comp.frameRate, true).chapter
		}
		app.endUndoGroup();

		fixList(pal.grp.leftPart.listArea)

	}

	function quoteText(origin, textSel, key) {
		return textSel.length != 0 ?
			origin.replace(textSel, "<" + key + ">" + textSel + "<" + "/" + key + ">") :
			origin.replace(origin, "<" + key + ">" + origin + "<" + "/" + key + ">")
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

	var ui = es_buildUI(),
		comp, sl, slIndex;


	function validMarker(layer) {
		function checkMarker(layer) {
			var timeTpye = app.project.timeDisplayType
			app.project.timeDisplayType = 2013 //frame

			var markerProp = layer.property("Marker")
			var esMarkTime = timeToCurrentFormat(layer.outPoint, comp.frameRate) - 1

			if (markerProp.numKeys != undefined) {
				for (var n = 1; n <= markerProp.numKeys; n++) {
					if (timeToCurrentFormat(markerProp.keyTime(n), comp.frameRate) == esMarkTime) {
						// this.markerIndex = n
						app.project.timeDisplayType = timeTpye
						return true
					}
				};
				app.project.timeDisplayType = timeTpye
				return false

			}

		}


		if (checkMarker(layer)) {

		} else {
			var layerText = layer.property("Source Text").valueAtTime(layer.outPoint - 1 / comp.frameRate, false)
			layerText = String(layerText).replace(/\r/gm, "↵")
			var esMarkValue = new MarkerValue(layerText);
			layer.property("Marker").setValueAtTime(layer.outPoint - 1 / comp.frameRate, esMarkValue);

		}
	}

	function fixList(control) {
		var wh = control.size;
		control.size = [1 + wh[0], 1 + wh[1]];
		control.size = [wh[0], wh[1]];
	}


	function refreshButton(pal) {
		comp = app.project.activeItem;
		sl = comp ? sortLayers(comp.selectedLayers) : [];
		slIndex = []



		pal.grp.leftPart.listArea.removeAll()
		app.beginUndoGroup("refresh")

		for (var t = 0; t < sl.length; t++) {
			slIndex.push(sl[t].index)

			validMarker(sl[t]);
			with(pal.grp.leftPart.listArea) {
				add("item", t + 1) //index #
				items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate) + " --> " + time2code(sl[t].outPoint, comp.frameRate) // time
				items[t].subItems[1].text = sl[t].property("Marker").valueAtTime(sl[t].outPoint - 1 / comp.frameRate, false).comment.replace(/↵/gm, "\r") + sl[t].property("Marker").valueAtTime(sl[t].outPoint - 1 / comp.frameRate, false).chapter //content
			}

		}
		app.endUndoGroup();


	}
	refreshButton(ui)

	if (ui !== null) {
		if (ui instanceof Window) {
			ui.center();
			ui.show()
		} else {
			ui.layout.layout(true)
		}
	}



})(this)