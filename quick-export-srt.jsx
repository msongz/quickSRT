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
										preci:EditText{text:'1',characters:'2',alignment:['left','bottom']},\
										lineNum:EditText{text:'0',characters:'2',alignment:['right','bottom']},\
										olCheck:Checkbox{text:'↹',alignment:['right','bottom']},\
										cleanButton:Button{text:'⌧',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove tags'},\
										rmMarker:Button{text:'⌫',alignment:['right','fill'],preferredSize:[28, 28]}\
									}\
								},\
								rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[0,20,0,0],preferredSize:[100, 100],\
									editText:EditText{\
										text:'',alignment:['fill','fill'],minimumSize:[0,35],properties:{multiline:true,readonly:false,}\
									},\
									btGroup:Group{orientation:'column',alignment:['fill','bottom'],alignChildren:['fill','top'],\
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
										sbt:Group{orientation:'row',\
											sButton:Button{text:'<s>',alignment:['fill','fill']},\
											ssButton:Button{text:'</s>'},\
											sssButton:Button{text:'<s>  </s>'}\
										},\
										fbt:Group{orientation:'row',margins:[0,0,-8,0],\
											fsButton:Button{text:'<font size=20>'},\
											fsValue:EditText{text:'20',characters:'3'},\
											fcButton:Button{text:'<font color=FB02FE>'},\
											fcValue:Button{preferredSize:[28,28]}\
										},\
										midGroup:Group{orientation:'row',alignment:['fill','fill'],margins:[0,10,0,0],\
											position:Group{orientation:'column',alignment:['left','fill'],\
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
												},\
												direct:Group{orientation:'row',alignment:['fill','center'],\
													vertical:Checkbox{text:'vertical',alignment:['left','fill']},\
												},\
											},\
											extraPo:Group{orientation:'column',alignment:['fill','fill'],\
												pos:Group{orientation:'row',alignment:['right','top'],\
													posButton:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "pos( x , y )}',preferredSize:[101,30]},\
													textX:StaticText{text:'x:'},\
													posX:EditText{text:'384'},\
													textY:StaticText{text:'y:'},\
													posY:EditText{text:'288'},\
												},\
												fade:Group{orientation:'row',alignment:['right','top'],\
													fadButton:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fad( in , out )}'},\
													inText:StaticText{text:'i:'},\
													fadIn:EditText{text:'300'},\
													outText:StaticText{text:'o:'},\
													fadOut:EditText{text:'300'},\
												},\
												other:Group{orientation:'row',alignment:['right','top'],\
													bord:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "bord(n)}',preferredSize:[50,30]},\
													bordN:EditText{text:'2'},\
													metri:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fsp(n)}',preferredSize:[50,30]},\
													metriN:EditText{text:'2'},\
													blur:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "be(n)}',preferredSize:[50,30]},\
													blurN:EditText{text:'2'},\
												},\
											}\
										},\
										rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],\
											rfButton:Button{text:'" + es_str.refresh + "',alignment:['fill','fill']},\
											epButton:Button{text:'" + es_str.export+"',alignment:['fill','fill']}\
										}\
									}\
								}\
							}";

				/*											helpTipArea:Group{alignment:['fill','fill'],margins:[0,-8,0,0],\
																stGroup:Panel{alignment:['fill','fill'],text:'HelpTip',\
																	content:StaticText{text:'',characters:20,justify:'center',alignment:['center','center'],properties:{multiline:true}}\
																	}\
															}\
				*/
				pal.grp = pal.add(res);

				pal.onResizing = pal.onResize = function () {
					this.layout.resize()
				}


				var red = pal.graphics.newPen(pal.graphics.BrushType.SOLID_COLOR, [0, 1, 0], 1);
				var blue = pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, [0, 0, 1], 1);
				var green = pal.graphics.newBrush(pal.graphics.BrushType.SOLID_COLOR, [1, 0, 0], 1);

				// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.graphics.foregroundColor = red
				pal.grp.leftPart.listArea.graphics.foregroundColor = red

				pal.grp.rightPart.btGroup.fbt.fcValue.colorHex = "FB02FE"
				pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = pal.grp.rightPart.btGroup.fbt.fcValue.graphics.newBrush(pal.grp.rightPart.btGroup.fbt.fcValue.graphics.BrushType.SOLID_COLOR, [1, 0, 1, 1])



				// leftPart
				pal.grp.leftPart.listArea.onChange = function () {
					pal.grp.rightPart.editText.backupSelection = ""
					var listIndex = this.selection[0].index;
					comp.time = comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate;
					pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")

				}

				pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
					this.text = validNum(this.text, 0)
				}
				pal.grp.leftPart.buttonArea.cleanButton.onClick = function () {
					triggerMarker(pal, null, null, null, "", "", true, pal.grp.leftPart.buttonArea.lineNum.text)
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

				// refresh export button

				pal.grp.leftPart.buttonArea.cleanButton.addEventListener('mouseover', function () {
					// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "batch remove tagsbatch \rremove tagsbatch remove \rtagsbatch \remove \rtags \rremove tagsbatch remove";
				})
				pal.grp.leftPart.buttonArea.cleanButton.addEventListener('mouseout', function () {
					// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "default text";
				})
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.addEventListener('mouseover', function () {
					// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "read selected\rlayers marker";
				})
				pal.grp.rightPart.btGroup.rebtGroup.rfButton.addEventListener('mouseout', function () {
					// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "default text";
				})
				pal.grp.rightPart.editText.addEventListener('mouseout', function () {
					this.backupSelection = this.textselection
				});

				// pal.addEventListener("keydown", function () {

				// 	try {
				// 		alert(pal.grp.leftPart.listArea.columns.titles)
				// 			// alert(pal.grp.leftPart.listArea.columns.titles[0]) 
				// 	} catch (e) {
				// 		alert(e)
				// 	}
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
					triggerMarker(pal, null, null, null,null, "b", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}


				pal.grp.rightPart.btGroup.rebtGroup.rfButton.onClick = function () {
					pal.grp.rightPart.editText.text = ""
					refreshButton(pal)
					fixList(pal.grp.leftPart.listArea)
				}

				pal.grp.rightPart.btGroup.rebtGroup.epButton.onClick = function () {
					writeFile(pal.grp.leftPart.listArea.items)
				}


				pal.grp.rightPart.editText.onChanging = function () {
					triggerMarker(pal)

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
					triggerMarker(pal, null, null, null,null, "i", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}
				pal.grp.rightPart.btGroup.sbt.sButton.onClick = function () {
					var cmds = "";
					cmds += "printf '<s>'|pbcopy";
					system.callSystem(cmds);
					pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);
				}
				pal.grp.rightPart.btGroup.sbt.ssButton.onClick = function () {
					var cmds = "";
					cmds += "printf '</s>'|pbcopy";
					system.callSystem(cmds);
					pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);

				}

				pal.grp.rightPart.btGroup.sbt.sssButton.onClick = function () {
					triggerMarker(pal, null, null, null,null, "s", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}

				pal.grp.rightPart.btGroup.fbt.fsButton.onClick = function () {

					var size = pal.grp.rightPart.btGroup.fbt.fsValue.text
					var keyString = " size=" + size
					size !== null ? triggerMarker(pal, null, null, null,null, "font", keyString, false, pal.grp.leftPart.buttonArea.lineNum.text) : null
				}
				pal.grp.rightPart.btGroup.fbt.fsValue.onChange = function () {
					with(this) {
						text = validNum(text, 20)
						parent.fsButton.text = "<font size=" + text + ">"
					}
				}
				pal.grp.rightPart.btGroup.fbt.fcButton.onClick = function () {
					var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex)
					triggerMarker(pal, null, null, null,null, "font", keyString, false, pal.grp.leftPart.buttonArea.lineNum.text)
				}
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
							// onDraw
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
					triggerMarker(pal, null, null, null, null,"u", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}

				// position

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an1}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an3}", "{\\pos(0,288)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an2}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an6}", "{\\pos(192,288)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an3}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an9}", "{\\pos(384,288)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an4}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an2}", "{\\pos(0,144)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an5}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an5}", "{\\pos(192,144)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an6}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an8}", "{\\pos(384,144)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an7}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an1}", "{\\pos(0,0)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an8}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an4}", "{\\pos(192,0)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.midGroup.position.direct.vertical.value) {
						triggerMarker(pal, "{\\an9}", "", "", null, null, false)
					} else {
						triggerMarker(pal, "{\\an7}", "{\\pos(384,0)}", "{\\frz-90}{\\fn@*}", null, null, false)
					}

				}


				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {

					var px = pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.text;
					var py = pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.text;


					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, null, null, false)

				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {

					var fIn = pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.text;
					var fOut = pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.text;

					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", null, null, false)

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

				if (parseFloat(layers[y].inPoint) < parseFloat(layers[y - 1].outPoint)) {
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

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, key, arg, remove, lineNum) {

			app.beginUndoGroup("triggerMarker");

			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {

				var listIndex = pal.grp.leftPart.listArea.selection[i].index;

				if (!remove) {
					var markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null) ? String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) : quoteText(comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.rightPart.editText.backupSelection, key, arg)
				} else {
					var markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null) ? String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) : removeQuote(comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment, newlineMark, lineNum)
				}
				var chapVar = (poVar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).chapter : poVar

				var urlVar = (posVar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).url : posVar

				var frameTargetVar = (orientVar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).frameTarget : orientVar
				var cuePointNameVar = (fadeVar == null) ? comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).cuePointName : fadeVar

				var textValue = new MarkerValue(markComment, chapVar, urlVar, frameTargetVar, cuePointNameVar)

				comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, textValue)

				pal.grp.leftPart.listArea.selection[i].subItems[1].text =

					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).chapter +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).url +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).frameTarget +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).cuePointName +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")

				pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")
			}
			app.endUndoGroup();

			fixList(pal.grp.leftPart.listArea)

		}



		function quoteText(origin, splitor, lineNum, textSel, key, arg) {

			if (lineNum > 0 && origin.split(splitor)[lineNum - 1] !== undefined) {

				var tmp = origin.split(splitor)

				tmp[lineNum - 1] = quote(tmp[lineNum - 1], textSel, key, arg)

				tmp = tmp.join(splitor)

				return tmp
			} else {
				return quote(origin, textSel, key, arg)
			}


			function quote(origin, textSel, key, arg) {

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
		}

		function removeQuote(text, splitor, lineNum) {
			var reg = /(<\/?(\s|\S)*?>)/g
			if (lineNum > 0 && text.split(splitor)[lineNum - 1] !== undefined) {


				var dd = text.split(splitor)
				dd[lineNum - 1] = dd[lineNum - 1].replace(reg, "")
				dd = dd.join(splitor)

				return dd
			} else {
				return text.replace(reg, "")
			}

		}

		function time2code(frames, fps, precision) {

			var timeTpye = app.project.timeDisplayType

			app.project.timeDisplayType = 2012

			frames = frames < 0 ? 0 : frames;

			var timecode = timeToCurrentFormat(frames, fps);

			var ms = Math.floor(timecode.substr(-fps.toString().length) / fps * 1000 / precision) * precision

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

		function validNum(inPut, def) {
			return (isNaN(inPut) || 0 > inPut) ? def : parseFloat(inPut)
		}

		function refreshButton(pal) {
			comp = app.project.activeItem;
			sl = comp ? sortLayers(comp.selectedLayers) : [];
			slIndex = []
				// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = " \r \r \r \r \r "

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
						items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) + " --> " + time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text)
						items[t].subItems[1].text =
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).chapter +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).url +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).frameTarget +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).comment.replace(reg, "\r")
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