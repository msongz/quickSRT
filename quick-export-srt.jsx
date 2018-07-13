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

				var res = "group{orientation:'row',alignment:['fill','fill'],minimumSize:[690, 460],\
								leftPart:Group{orientation:'column',alignment:['fill','fill'],\
									listArea:ListBox{\
										alignment:['fill','fill'],\
										properties:{numberOfColumns:3,columnTitles:['#', '" + es_str.time + "', '" + es_str.content + "'],\
										showHeaders:true,multiselect:true}\
									},\
									buttonArea:Group{orientation:'row',alignment:['fill','bottom'],\
										info:Button{text:'?',alignment:['left','fill'],preferredSize:[28, 28]},\
										resel:Button{text:'↻',alignment:['left','fill'],preferredSize:[28, 28]},\
										pickPos:Button{text:'☉',alignment:['left','fill'],preferredSize:[28, 28]},\
										preci:EditText{text:'1',characters:'2',alignment:['left','bottom']},\
										lineNum:EditText{text:'0',characters:'2',alignment:['right','bottom']},\
										olCheck:Checkbox{text:'↹',alignment:['right','bottom']},\
										killOther:Button{text:'⒳',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove other'},\
										killTag:Button{text:'⌧',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove tags'},\
										rmMarker:Button{text:'⌫',alignment:['right','fill'],preferredSize:[28, 28]}\
									}\
								},\
								rightPart:Group{orientation:'column',alignment:['right','fill'],margins:[0,20,0,0],\
									editText:EditText{\
										text:'',alignment:['fill','fill'],properties:{multiline:true,readonly:false,}\
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
											fcValue:Button{preferredSize:[58,28]}\
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
											},\
											extraPo:Group{orientation:'column',alignment:['fill','fill'],\
												pos:Group{orientation:'row',alignment:['fill','top'],\
													posButton:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "pos(384,288)}',preferredSize:[101,30],alignment:['left','fill']},\
													textX:StaticText{text:'x:',alignment:['right','center']},\
													posX:EditText{text:'384',characters:4},\
													textY:StaticText{text:'y:'},\
													posY:EditText{text:'288',characters:4},\
												},\
												fade:Group{orientation:'row',alignment:['fill','fill'],\
													fadButton:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fad(300,300)}',preferredSize:[101,30],alignment:['left','fill']},\
													inText:StaticText{text:'i:',alignment:['right','fill']},\
													fadIn:EditText{text:'300',characters:4},\
													outText:StaticText{text:'o:'},\
													fadOut:EditText{text:'300',characters:4},\
												},\
												other:Group{orientation:'row',alignment:['fill','fill'],spacing:8,\
													bord:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "bord(2)}',preferredSize:[71,30]},\
													metri:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "fsp(2)}',preferredSize:[61,30]},\
													blur:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "be(2)}',preferredSize:[51,30]},\
													bfbVal:EditText{text:'2',characters:2,alignment:['right','center']},\
												},\
											}\
										},\
										fix:Group{orientation:'row',alignment:['fill','fill'],\
												direct:Group{orientation:'row',alignment:['fill','fill'],\
													vertical:Checkbox{text:'vertical',alignment:['left','center']},\
												},\
												move:Group{orientation:'row',alignment:['right','fill'],spacing:3,\
													moveButton:Button{text:'{" + String.fromCharCode(92) + String.fromCharCode(92) + "move(...)}',preferredSize:[81,30]},\
													x1:EditText{text:'384',characters:3},\
													y1:EditText{text:'144',characters:3},\
													x2:EditText{text:'-50',characters:3},\
													y2:EditText{text:'144',characters:3},\
													moveIn:EditText{text:'0',characters:4},\
													moveOut:EditText{text:'1000',characters:4},\
												},\
										}\
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
				pal.grp.leftPart.listArea.graphics.foregroundColor = red;

				pal.grp.rightPart.btGroup.fbt.fcValue.colorHex = "FB02FE";
				pal.grp.rightPart.btGroup.fbt.fcValue.fillBrush = pal.grp.rightPart.btGroup.fbt.fcValue.graphics.newBrush(pal.grp.rightPart.btGroup.fbt.fcValue.graphics.BrushType.SOLID_COLOR, [1, 0, 1, 1])



				// leftPart
				pal.grp.leftPart.listArea.onChange = function () {
					pal.grp.rightPart.editText.backupSelection = ""
					var listIndex = this.selection[0].index;
					comp.time = comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate;
					pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")
				}

				pal.grp.leftPart.buttonArea.preci.onChange = function () {
					this.text = validNum(this.text, 1, this.text <= 0)
				}
				pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0)
				}
				pal.grp.leftPart.buttonArea.killOther.onClick = function () {
					triggerMarker(pal, "", "", "", "", ["", "", "", ""], null, null, false, pal.grp.leftPart.buttonArea.lineNum.text)
				}
				pal.grp.leftPart.buttonArea.killTag.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", true, pal.grp.leftPart.buttonArea.lineNum.text)
				}
				pal.grp.leftPart.buttonArea.pickPos.onClick = function () {
					comp = app.project.activeItem;
					var currentSel = comp.selectedLayers[0];
					var posX = Math.round(currentSel.property("transform").property("Position").value[0] / comp.width * 384)
					var posY = Math.round(currentSel.property("transform").property("Position").value[1] / comp.height * 288)
					alert([posX, posY])
				}
				pal.grp.leftPart.buttonArea.info.onClick = function () {
					es_help()
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

				pal.grp.leftPart.buttonArea.killTag.addEventListener('mouseover', function () {
					// pal.grp.rightPart.btGroup.midGroup.helpTipArea.stGroup.content.text = "batch remove tagsbatch \rremove tagsbatch remove \rtagsbatch \remove \rtags \rremove tagsbatch remove";
				})
				pal.grp.leftPart.buttonArea.killTag.addEventListener('mouseout', function () {
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
					triggerMarker(pal, null, null, null, null, [], "b", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
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
					triggerMarker(pal, null, null, null, null, [])

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
					triggerMarker(pal, null, null, null, null, [], "i", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
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
					triggerMarker(pal, null, null, null, null, [], "s", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}

				pal.grp.rightPart.btGroup.fbt.fsButton.onClick = function () {

					var size = pal.grp.rightPart.btGroup.fbt.fsValue.text
					var keyString = " size=" + size
					size !== null ? triggerMarker(pal, null, null, null, null, [], "font", keyString, false, pal.grp.leftPart.buttonArea.lineNum.text) : null
				}
				pal.grp.rightPart.btGroup.fbt.fsValue.onChange = function () {
					with(this) {
						text = validNum(text, 20)
						parent.fsButton.text = "<font size=" + text + ">"
					}
				}
				pal.grp.rightPart.btGroup.fbt.fcButton.onClick = function () {
					var keyString = " color=" + fixBlueHex(this.parent.fcValue.colorHex)
					triggerMarker(pal, null, null, null, null, [], "font", keyString, false, pal.grp.leftPart.buttonArea.lineNum.text)
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
					triggerMarker(pal, null, null, null, null, [], "u", "", false, pal.grp.leftPart.buttonArea.lineNum.text)
				}

				// position

				pal.grp.rightPart.btGroup.midGroup.position.bobt.blButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an1}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an3}", "{\\pos(0,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.bobt.bcButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an2}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an6}", "{\\pos(192,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)

					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.bobt.brButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an3}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an9}", "{\\pos(384,288)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mlButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an4}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an2}", "{\\pos(0,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mcButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an5}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an5}", "{\\pos(192,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}

				}
				pal.grp.rightPart.btGroup.midGroup.position.mdbt.mrButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an6}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an8}", "{\\pos(384,144)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ulButton.onClick = function () {

					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an7}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an1}", "{\\pos(0,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.ucButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an8}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an4}", "{\\pos(192,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}
				pal.grp.rightPart.btGroup.midGroup.position.upbt.urButton.onClick = function () {
					if (!pal.grp.rightPart.btGroup.fix.direct.vertical.value) {
						triggerMarker(pal, "{\\an9}", "", "", null, [], null, null, false)
					} else {
						triggerMarker(pal, "{\\an7}", "{\\pos(384,0)}", "{\\frz-90}{\\fn@*}", null, [], null, null, false)
					}
				}

				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posButton.onClick = function () {

					var px = pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.text;
					var py = pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.text;

					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, [], null, null, false)
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posX.onChange = function () {

					with(this) {
						text = validNum(text, 384)
						parent.posButton.text = "{\\pos(" + text + "," + parent.posY.text + ")}"
					}
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.pos.posY.onChange = function () {

					with(this) {
						text = validNum(text, 288)
						parent.posButton.text = "{\\pos(" + parent.posX.text + "," + text + ")}"
					}
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.onChange = function () {

					with(this) {
						text = validNum(text, 300, text < 0)
						parent.fadButton.text = "{\\fad(" + text + "," + parent.fadOut.text + ")}"
					}
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.onChange = function () {

					with(this) {
						text = validNum(text, 300, text < 0)
						parent.fadButton.text = "{\\fad(" + parent.fadIn.text + "," + text + ")}"
					}
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {

					var fIn = pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadIn.text;
					var fOut = pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadOut.text;

					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", [], null, null, false)

				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {

					var bordVar = "{\\bord(" + pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.text + ")}"

					triggerMarker(pal, null, null, null, null, [bordVar], null, null, false)
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {

					var fspVar = "{\\fsp(" + pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.text + ")}"

					triggerMarker(pal, null, null, null, null, [, fspVar], null, null, false)
				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {

					var blurVar = "{\\be(" + pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.text + ")}"

					triggerMarker(pal, null, null, null, null, [, , blurVar], null, null, false)

				}
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bfbVal.onChange = function () {

					with(this) {
						text = validNum(text, 2)
						parent.bord.text = "{\\bord(" + text + ")}"
						parent.metri.text = "{\\fsp(" + text + ")}"
						parent.blur.text = "{\\be(" + text + ")}"
					}
				}
				pal.grp.rightPart.btGroup.fix.move.moveButton.onClick = function () {

					var x1 = this.parent.x1.text
					var y1 = this.parent.y1.text
					var x2 = this.parent.x2.text
					var y2 = this.parent.y2.text
					var moveIn = this.parent.moveIn.text
					var moveOut = this.parent.moveOut.text

					var moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}"

					triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, false)
				}
				pal.grp.rightPart.btGroup.fix.move.x1.onChange = function () {

					this.text = validNum(this.text, 384)
				}
				pal.grp.rightPart.btGroup.fix.move.y1.onChange = function () {

					this.text = validNum(this.text, 144)
				}
				pal.grp.rightPart.btGroup.fix.move.x2.onChange = function () {

					this.text = validNum(this.text, -50)
				}
				pal.grp.rightPart.btGroup.fix.move.y2.onChange = function () {

					this.text = validNum(this.text, -144)
				}
				pal.grp.rightPart.btGroup.fix.move.moveIn.onChange = function () {

					this.text = validNum(this.text, 0, this.text < 0)
				}
				pal.grp.rightPart.btGroup.fix.move.moveOut.onChange = function () {

					this.text = validNum(this.text, 1000, this.text < 0)
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
						return false;
						break;
					}
				};
				return true;
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

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum) {

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

				var paramsVar = {};
				paramsVar.bord = (otherVar[0] == null) ? (comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().bord == undefined ? "" : comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().bord) : otherVar[0]
				paramsVar.fsp = (otherVar[1] == null) ? (comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().fsp == undefined ? "" : comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().fsp) : otherVar[1]
				paramsVar.be = (otherVar[2] == null) ? (comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().be == undefined ? "" : comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().be) : otherVar[2]
				paramsVar.move = (otherVar[3] == null) ? (comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().move == undefined ? "" : comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().move) : otherVar[3]


				var markValue = new MarkerValue(markComment, chapVar, urlVar, frameTargetVar, cuePointNameVar, paramsVar)

				comp.layer(slIndex[listIndex]).property("Marker").setValueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, markValue)

				pal.grp.leftPart.listArea.selection[i].subItems[1].text =

					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).chapter +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).url +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).frameTarget +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).cuePointName +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().bord +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().fsp +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().be +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).getParameters().move +
					comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")

				pal.grp.rightPart.editText.text = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true).comment.replace(reg, "\r")
			}
			app.endUndoGroup();

			fixList(pal.grp.leftPart.listArea)

		}

		function es_help() {
			var res = "group {orientation:'column', alignment:['fill','fill'], alignChildren:['fill','fill'],                             \
        pnl: Panel { type:'tabbedpanel',                                 \
        aboutTab: Panel { type:'tab', text:'" + "descript" + "',                                 \
        aboutEt: EditText { text:'" + "qe_str.desContent" + "', preferredSize:[250,100], properties:{multiline:true} }                             },                                 \
        usageTab: Panel { type:'tab', text:'" + "qe_str.usage" + "',                                 \
        usageEt: EditText { text:'" + "qe_str.useContent" + "', preferredSize:[250,100], properties:{multiline:true} }                         }                     },                     \
        btns: Group {orientation:'row', alignment:['fill','bottom'],                         \
        otherScriptsBtn: Button { text:'" + "qe_str.other" + "', alignment:['left','center'] },                         \
        okBtn: Button { text:'" + "qe_str.close" + "', alignment:['right','center'] }                 }             }";
			var helpWin = new Window("palette", "qe_str.about");
			helpWin.gr = helpWin.add(res);
			helpWin.gr.btns.otherScriptsBtn.onClick = function () {
				var cmd = "";
				var url = "qe_str.website";
				if ($.os.indexOf("Win") != -1) {
					if (File("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe").exists) {
						cmd += "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe " + url
					} else if (File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe").exists) {
						cmd += "C:/Program Files (x86)/Mozilla Firefox/firefox.exe " + url
					} else {
						cmd += "C:/Program Files/Internet Explorer/iexplore.exe " + url
					}
				} else {
					cmd += "open " + url
				}
				try {
					system.callSystem(cmd)
				} catch (e) {
					alert(e)
				}
			};
			helpWin.gr.btns.okBtn.onClick = function () {
				helpWin.close()
			};
			helpWin.center();
			helpWin.show()
		}


		function quoteText(origin, splitor, lineNum, textSel, key, arg) {

			if (lineNum == 0) {
				return quote(origin, textSel, key, arg)
			} else if (lineNum > 0 && origin.split(splitor)[lineNum - 1] !== undefined) {

				var tmp = origin.split(splitor)

				tmp[lineNum - 1] = quote(tmp[lineNum - 1], textSel, key, arg)

				tmp = tmp.join(splitor)

				return tmp
			} else if (origin.split(splitor)[lineNum - 1] == undefined) {

				// return quote(origin, textSel, key, arg)
				return origin

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
				var comment = layer.property("Source Text").valueAtTime(layer.outPoint - markerTimeOffset / comp.frameRate, false);
				comment = String(comment).replace(/\r/gm, newlineMark);
				var params = {}
				params.bord = "";
				params.fsp = "";
				params.be = "";
				params.move = "";
				var esMarkValue = new MarkerValue(comment, "", "", "", "", params);
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

		function validNum(inPut, def, express) {
			if (!String.prototype.trim) {
				String.prototype.trim = function () {
					return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
				};
			}
			return (inPut.trim() == "" || isNaN(inPut) || express) ?
				parseFloat(def) : parseFloat(inPut)
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

						items[t].subItems[0].text =
							time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) +
							" --> " +
							time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text)

						items[t].subItems[1].text =
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).chapter +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).url +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).frameTarget +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).cuePointName +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).getParameters().bord +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).getParameters().fsp +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).getParameters().be +
							sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, false).getParameters().move +
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