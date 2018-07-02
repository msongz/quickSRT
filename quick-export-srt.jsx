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

			var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[450, 400],\
							leftPart:Group{orientation:'column',alignment:['fill','fill'],\
								listArea:ListBox{\
									alignment:['fill','fill'],\
									properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
									showHeaders:true,multiselect:true}\
								},\
								buttonArea:Group{orientation:'row',alignment:['fill','bottom'],\
									info:Button{text:'?',alignment:['left','fill'],preferredSize:[28, 28]},\
									resel:Button{text:'↻',alignment:['left','fill'],preferredSize:[28, 28]},\
									olCheck:Checkbox{text:'↹',alignment:['right','bottom']},\
									cleanButton:Button{text:'⌧',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove tags'},\
									rmMarker:Button{text:'⌫',alignment:['right','fill'],preferredSize:[28, 28]}\
								}\
							},\
							rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[0,20,0,0],preferredSize:[100, 100],\
								editText:EditText{\
									text:'',alignment:['fill','top'],minimumSize:[0,35],properties:{multiline:true,readonly:false,}\
								},\
								btGroup:Group{orientation:'column',alignment:['fill','fill'],alignChildren:['fill','top'],\
									bbt:Group{orientation:'row',\
										bButton:Button{text:'<b>',alignment:['fill','fill']},\
										bsButton:Button{text:'</b>'},\
										bbButton:Button{text:'<b> </b>'}\
									},\
									ibt:Group{orientation:'row',\
										iButton:Button{text:'<i>',alignment:['fill','fill']},\
										isButton:Button{text:'</i>'},\
										iiButton:Button{text:'<i>   </i>'}\
									},\
									ubt:Group{orientation:'row',\
										uButton:Button{text:'<u>',alignment:['fill','fill']},\
										usButton:Button{text:'</u>'},\
										uuButton:Button{text:'<u> </u>'}\
									},\
									fbt:Group{orientation:'row',margins:[0,0,1,0],\
										fsButton:Button{text:'<font size=20>'},\
										fsValue:EditText{text:'20',characters:'3'},\
										fcButton:Button{text:'<font color=FB02FE>'},\
										fcValue:Button{preferredSize:[28,28]}\
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
										helpTipArea:Group{alignment:['fill','fill'],margins:[0,-8,0,0],\
											stGroup:Panel{alignment:['fill','fill'],text:'HelpTip',\
												content:StaticText{text:'',characters:20,justify:'center',alignment:['center','center'],properties:{multiline:true}}\
												}\
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

			pal.onResizing = pal.onResize = function () {
				this.layout.resize()
			}






			pal.grp.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
				pal.grp.rightPart.editText.text = ""

				refreshButton(pal)
				fixList(pal.grp.leftPart.listArea)

				ui.layout.layout(true)

			}




			pal.grp.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
				writeFile(pal.grp.leftPart.listArea.items)
			}




			pal.grp.leftPart.listArea.onChange = function () {
				pal.grp.rightPart.editText.backupSelection = ""
				var listIndex = this.selection[0].index;
				comp.time = comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate;

				pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")

			}

			pal.grp.leftPart.buttonArea.cleanButton.onClick = function () {
				triggerMarker(pal, null, "", "", true)
			}
			pal.grp.leftPart.buttonArea.resel.onClick = function () {
				for (var i = 0; i < sl.length; i++) {
					sl[i].selected = true
				};
			}
			pal.grp.leftPart.buttonArea.rmMarker.onClick = function () {
				sl = comp.selectedLayers;
				pal.grp.leftPart.listArea.removeAll()
				removeESmarker(sl)
			}
			pal.grp.rightPart.editText.onChanging = function () {
				triggerMarker(pal)

			}





			pal.grp.leftPart.buttonArea.cleanButton.addEventListener('mouseover', function () {
				pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "batch remove tagsbatch \rremove tagsbatch remove \rtagsbatch \remove \rtags \rremove tagsbatch remove";

			})
			pal.grp.leftPart.buttonArea.cleanButton.addEventListener('mouseout', function () {
				pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "default text";


			})



			pal.grp.rightPart.btGroup.rebtGroup.rfButton.addEventListener('mouseover', function () {
				pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "read selected\rlayers marker";

			})
			pal.grp.rightPart.btGroup.rebtGroup.rfButton.addEventListener('mouseout', function () {
				pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "default text";

			})







			pal.grp.rightPart.editText.addEventListener('mouseout', function () {

				this.backupSelection = this.textselection
			});

			// pal.addEventListener("keydown", function () {

			// 	try {
			// 		alert(pal.grp.leftPart.listArea.toSource())
			// 	} catch (e) {}
			// })


			pal.grp.rightPart.btGroup.bbt.bButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<b>'|pbcopy";
				system.callSystem(cmds);

				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);




			}
			pal.grp.rightPart.btGroup.bbt.bsButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</b>'|pbcopy";
				system.callSystem(cmds);

				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);




			}
			pal.grp.rightPart.btGroup.bbt.bbButton.onClick = function () {


				triggerMarker(pal, null, "b", "", false)

			}





			pal.grp.rightPart.btGroup.ibt.iButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<i>'|pbcopy";
				system.callSystem(cmds);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



			}
			pal.grp.rightPart.btGroup.ibt.isButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</i>'|pbcopy";
				system.callSystem(cmds);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);



			}

			pal.grp.rightPart.btGroup.ibt.iiButton.onClick = function () {

				triggerMarker(pal, null, "i", "", false)

			}


			pal.grp.rightPart.btGroup.fbt.fsButton.onClick = function () {

				var size = pal.grp.rightPart.btGroup.fbt.fsValue.text
				var keyString = " size=" + size

				size !== null ? triggerMarker(pal, null, "font", keyString, false) : null

			}

			pal.grp.rightPart.btGroup.fbt.fsValue.onChange = function () {

				// alert(1)
				with(this) {
					text = validNum(text)
					parent.fsButton.text = "<font size=" + text + ">"
				}
			}





			pal.grp.rightPart.btGroup.fbt.fcButton.onClick = function () {




				var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex)
				triggerMarker(pal, null, "font", keyString, false)


			}

			pal.grp.rightPart.btGroup.fbt.fcValue.colorHex = "FB02FE"
			pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = pal.grp.rightPart.btGroup.fbt.fcValue.graphics.newBrush(pal.grp.rightPart.btGroup.fbt.fcValue.graphics.BrushType.SOLID_COLOR, [1, 0, 1, 1])

			pal.grp.rightPart.btGroup.fbt.fcValue.onDraw = function () {
				// this.graphics.drawOSControl();
				with(this) {
					graphics.rectPath(0, 0, size[0], size[1]);
					graphics.fillPath(fillBrush);
				}
			}


			pal.grp.rightPart.btGroup.fbt.fcValue.onClick = function () {
				var colorString = $.colorPicker()
				with(this) {
					colorHex = colorString.toString(16).toUpperCase()
					parent.fcButton.text = "<font color=" + fixBlueHex(colorHex) + ">"

					fillBrush = graphics.newBrush(graphics.BrushType.SOLID_COLOR, hexToRgb(colorString))


					onDraw
				}
			}


			pal.grp.rightPart.btGroup.ubt.uButton.onClick = function () {
				var cmds = "";
				cmds += "printf '<u>'|pbcopy";
				system.callSystem(cmds);
				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);


			}
			pal.grp.rightPart.btGroup.ubt.usButton.onClick = function () {
				var cmds = "";
				cmds += "printf '</u>'|pbcopy";
				system.callSystem(cmds);

				pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);




			}

			pal.grp.rightPart.btGroup.ubt.uuButton.onClick = function () {

				triggerMarker(pal, null, "u", "", false)


			}


			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.blButton.onClick = function () {


				triggerMarker(pal, "{\\an1}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.bcButton.onClick = function () {

				triggerMarker(pal, "", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.bobt.brButton.onClick = function () {

				triggerMarker(pal, "{\\an3}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mlButton.onClick = function () {


				triggerMarker(pal, "{\\an4}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mcButton.onClick = function () {

				triggerMarker(pal, "{\\an5}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.mdbt.mrButton.onClick = function () {

				triggerMarker(pal, "{\\an6}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.ulButton.onClick = function () {


				triggerMarker(pal, "{\\an7}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.ucButton.onClick = function () {

				triggerMarker(pal, "{\\an8}", null, null, false)

			}
			pal.grp.rightPart.btGroup.midGroup.poGroup.upbt.urButton.onClick = function () {

				triggerMarker(pal, "{\\an9}", null, null, false)

			}

		}
		return pal
	}

	function mouseEventHandler() {

		var cmdd = "";
		cmdd += "osascript -e \'tell application \"System Events\" to keystroke \"v\" using {command down}\'";

		system.callSystem(cmdd);

		this.removeEventListener("mouseout", mouseEventHandler);

	}

	function sortLayers(layers) {

		return layers.sort(function (a, b) {
			return a.inPoint - b.inPoint
		})
	}


	function checkOverlap(layers) {

		var result = false;

		for (var y = 1; y < layers.length; y++) {
			layers[y].selected = true

			if (layers[y].inPoint < layers[y - 1].outPoint) {
				result = true
				layers[y].selected = false
			}

		};
		try {
			layers[0].selected = true
		} catch (e) {}

		if (result) {
			for (var i = 0; i < layers.length; i++) {
				layers[i].selected = !layers[i].selected
			};
		}


		return result
	}



	function writeFile(list) {


		var fileObj = File.saveDialog("lalala")
		fileObj.encoding = "utf-8";
		fileObj.open("w");

		for (var i = 0; i < list.length; i++) {
			fileObj.write(list[i].text + "\r" + list[i].subItems[0].text + "\r" + list[i].subItems[1].text + "\r\r")
		};


		fileObj.close();


		return fileObj;
	}

	function checkTextLayer(layers) {
		if (layers.length != 0) {


			for (var i = 0; i < layers.length; i++) {
				if (!(layers[i] instanceof TextLayer)) {
					return false
					break;
				}
			};
			return true

		} else {
			return true;
		}
	}

	function removeESmarker(layers) {
		app.beginUndoGroup("removeESmarker")
		for (var i = 0; i < layers.length; i++) {
			if (checkMarker(layers[i])) {
				var markerIndex = layers[i].property("Marker").nearestKeyIndex(layers[i].outPoint - markerTimeOffset / comp.frameRate)
				layers[i].property("Marker").removeKey(markerIndex)
			}
		}
		app.endUndoGroup()
	}

	function triggerMarker(pal, povar, key, arg, remove) {

		app.beginUndoGroup("triggerMarker");

		for (var qq = 0; qq < pal.grp.leftPart.listArea.selection.length; qq++) {
			var listIndex = pal.grp.leftPart.listArea.selection[qq].index;


			if (!remove) {
				var noNewlineText = (key == null && povar == null) ? String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) : quoteText(comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(/\n|\r/gm, newlineMark), pal.grp.rightPart.editText.backupSelection, key, arg)
			} else {
				var noNewlineText = (key == null && povar == null) ? String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) : removeQuote(comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment)
			}

			var poValue = (povar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).chapter : povar


			var textValue = new MarkerValue(noNewlineText, poValue)

			comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, textValue)

			pal.grp.leftPart.listArea.selection[qq].subItems[1].text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).chapter + comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")

			pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")
		}
		app.endUndoGroup();

		fixList(pal.grp.leftPart.listArea)

	}



	function quoteText(origin, textSel, key, arg) {

		if (key !== null) {
			var quotesel = "<" + key + arg + ">" + textSel + "</" + key + ">"
			var originsel = "<" + key + arg + ">" + origin + "</" + key + ">"
		} else {
			var quotesel = textSel
			var originsel = origin
		}

		return textSel != 0 ?
			origin.replace(textSel, quotesel) :
			origin.replace(origin, originsel)
	}

	function removeQuote(text) {
		var reg = /(<\/?(\s|\S)*?>)/g
		return text.replace(reg, "")

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




	function checkMarker(layer) {
		var timeTpye = app.project.timeDisplayType
		app.project.timeDisplayType = 2013

		var markerProp = layer.property("Marker")
		var esMarkTime = timeToCurrentFormat(layer.outPoint, comp.frameRate) - markerTimeOffset

		if (markerProp.numKeys != undefined) {
			for (var n = 1; n <= markerProp.numKeys; n++) {
				if (timeToCurrentFormat(markerProp.keyTime(n), comp.frameRate) == esMarkTime) {

					app.project.timeDisplayType = timeTpye
					return true
				}
			};
			app.project.timeDisplayType = timeTpye
			return false

		}

	}

	function validMarker(layer) {


		if (checkMarker(layer)) {

		} else {
			var layerText = layer.property("Source Text").valueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, false)
			layerText = String(layerText).replace(/\r/gm, newlineMark)
			var esMarkValue = new MarkerValue(layerText);
			layer.property("Marker").setValueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, esMarkValue);

		}
	}

	function hexToRgb(hex) {
		if (typeof hex === 'string') hex = parseInt(hex, 16);
		var r = (hex >> 16) & 0xFF;
		var g = (hex >> 8) & 0xFF;
		var b = (hex >> 0) & 0xFF;
		return [r / 255, g / 255, b / 255, 1];
	};

	function fixBlueHex(num) {
		var hex = num.toString(16)
		while (hex.length < 6) {
			hex = 0 + hex
		}
		return hex
	}

	function fixList(control) {
		var wh = control.size;
		control.size = [1 + wh[0], 1 + wh[1]];
		control.size = [wh[0], wh[1]];
	}

	function validNum(inPut) {
		return (isNaN(inPut) || 0 > inPut) ? 20 : inPut
	}

	function refreshButton(pal) {
		comp = app.project.activeItem;
		sl = comp ? sortLayers(comp.selectedLayers) : [];
		slIndex = []
		pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = " \r \r \r \r \r "

		if (!checkTextLayer(sl)) {
			alert("please select text layer only")
		} else if (pal.grp.leftPart.buttonArea.olCheck.value && checkOverlap(sl)) {
			alert("overlap!\rcheck the highlight layer")

		} else {
			pal.grp.rightPart.editText.backupSelection = ""
			pal.grp.leftPart.listArea.removeAll()
			app.beginUndoGroup("refresh")

			for (var t = 0; t < sl.length; t++) {
				slIndex.push(sl[t].index)

				validMarker(sl[t]);
				with(pal.grp.leftPart.listArea) {
					add("item", t + 1)
					items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate) + " --> " + time2code(sl[t].outPoint, comp.frameRate)
					items[t].subItems[1].text = sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).chapter + sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).comment.replace(reg, "\r")
				}
				sl[t].selected = false

			}
			app.endUndoGroup();
		}

	}


	var ui = es_buildUI(),
		comp, sl, slIndex,
		markerTimeOffset = 1,
		newlineMark = "↵",
		reg = new RegExp(newlineMark, "gm");

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