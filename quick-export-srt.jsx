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
				cn: "请选择2D图层"
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
			// overlap: {
			// 	en: "overlap!\rcheck the highlight layer",
			// 	cn: "重叠！\r请检查选中的图层"
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
										killTag:Button{text:'⌧',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove tags'},\
										killOther:Button{text:'⒳',alignment:['right','fill'],preferredSize:[28, 28],helpTip:'batch remove other'},\
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
											fcButton:Button{text:'<font color=00FF00>'},\
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
													moveOut:EditText{text:'3000',characters:4},\
												},\
										}\
										rebtGroup:Group{orientation:'row',alignment:['fill','bottom'],\
											rfButton:Button{text:'" + es_str.refresh + "',alignment:['fill','fill']},\
											epButton:Button{text:'" + es_str.xport + "',alignment:['fill','fill']}\
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
				pal.grp.leftPart.buttonArea.killOther.onClick = function () {
					triggerMarker(pal, "", "", "", "", ["", "", "", ""], null, null, !1, this.parent.lineNum.text);
				};
				pal.grp.leftPart.buttonArea.killTag.onClick = function () {
					triggerMarker(pal, null, null, null, null, [], "", "", !0, this.parent.lineNum.text);
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
				pal.grp.leftPart.buttonArea.info.onClick = function () {
					es_help();
				};
				pal.grp.leftPart.buttonArea.resel.onClick = function () {
					for (var i = 0; i < sl.length; i++) {
						sl[i].selected = true;
					}
				};
				pal.grp.leftPart.buttonArea.rmMarker.onClick = function () {
					var rsl = comp.selectedLayers;
					pal.grp.leftPart.listArea.removeAll();
					removeESmarker(rsl);
				};

				pal.grp.rightPart.editText.addEventListener('mouseout', function () {
					this.backupSelection = this.textselection;
				});

				// pal.addEventListener("keydown", function () {

				// 	try {
				// 		// alert(pal.grp.leftPart.listArea.columns.titles)
				// 		fixList(pal.grp.leftPart.listArea)

				// 		// alert(pal.grp.leftPart.listArea.columns.titles[0]) 
				// 	} catch (e) {
				// 		alert(e)
				// 	}
				// })

				pal.grp.rightPart.btGroup.bbt.bButton.onClick = function () {
					runCommand(pal, "printf '<b>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.bbt.bsButton.onClick = function () {
					runCommand(pal, "printf '</b>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.ibt.iButton.onClick = function () {
					runCommand(pal, "printf '<i>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.ibt.isButton.onClick = function () {
					runCommand(pal, "printf '</i>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.ubt.uButton.onClick = function () {
					runCommand(pal, "printf '<u>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.ubt.usButton.onClick = function () {
					runCommand(pal, "printf '</u>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.sbt.sButton.onClick = function () {
					runCommand(pal, "printf '<s>'|pbcopy");
				};
				pal.grp.rightPart.btGroup.sbt.ssButton.onClick = function () {
					runCommand(pal, "printf '</s>'|pbcopy");
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
				pal.grp.rightPart.editText.onChanging = function () {
					triggerMarker(pal, null, null, null, null, []);
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
					var colorString = $.colorPicker();
					this.colorHex = colorString.toString(16).toUpperCase();
					this.parent.fcButton.text = "<font color=" + fixBlueHex(this.colorHex) + ">";
					this.fillBrush = this.graphics.newBrush(this.graphics.BrushType.SOLID_COLOR, hexToRgb(colorString));
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
					triggerMarker(pal, null, "{\\pos(" + px + "," + py + ")}", null, null, []);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.fade.fadButton.onClick = function () {
					var fIn = this.parent.fadIn.text,
						fOut = this.parent.fadOut.text;
					triggerMarker(pal, null, null, null, "{\\fad(" + fIn + "," + fOut + ")}", []);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.bord.onClick = function () {
					var bordVar = "{\\bord(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [bordVar], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.metri.onClick = function () {
					var fspVar = "{\\fsp(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, fspVar], null, null, !1);
				};
				pal.grp.rightPart.btGroup.midGroup.extraPo.other.blur.onClick = function () {
					var blurVar = "{\\be(" + this.parent.bfbVal.text + ")}";
					triggerMarker(pal, null, null, null, null, [, , blurVar], null, null, !1);
				};
				pal.grp.rightPart.btGroup.fix.move.moveButton.onClick = function () {
					var x1 = this.parent.x1.text,
						y1 = this.parent.y1.text,
						x2 = this.parent.x2.text,
						y2 = this.parent.y2.text,
						moveIn = this.parent.moveIn.text,
						moveOut = this.parent.moveOut.text,
						moveVar = "{\\move(" + x1 + "," + y1 + "," + x2 + "," + y2 + "," + moveIn + "," + moveOut + ")}";
					triggerMarker(pal, null, null, null, null, [, , , moveVar], null, null, !1)
				};
				pal.grp.leftPart.buttonArea.preci.onChange = function () {
					this.text = validNum(this.text, 1, this.text <= 0);
				};
				pal.grp.leftPart.buttonArea.lineNum.onChange = function () {
					this.text = validNum(this.text, 0, this.text < 0);
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
					writeFile(pal.grp.leftPart.listArea.items);
				};
			}
			return pal;
		}

		function mouseEventHandler() {
			var cmdd = "";
			cmdd += "osascript -e \'tell application \"System Events\" to keystroke \"v\" using {command down}\'";
			system.callSystem(cmdd);
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

		function writeFile(list) {
			var srtFile = File.saveDialog(es_str.saveDialog);
			srtFile.encoding = "utf-8", srtFile.open("w");
			for (var r = 0; r < list.length; r++) srtFile.write(list[r].text + "\r" + list[r].subItems[0].text + "\r" + list[r].subItems[1].text + "\r\r");
			return srtFile.close(), srtFile;
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

		function triggerMarker(pal, poVar, posVar, orientVar, fadeVar, otherVar, key, arg, remove, lineNum) {
			app.beginUndoGroup(es_str.title);
			for (var i = 0; i < pal.grp.leftPart.listArea.selection.length; i++) {
				var listIndex = pal.grp.leftPart.listArea.selection[i].index,
					esMarker = comp.layer(slIndex[listIndex]).property("Marker").valueAtTime(comp.layer(slIndex[listIndex]).outPoint - markerTimeOffset / comp.frameRate, true),
					markComment = (key == null && poVar == null && posVar == null && orientVar == null && fadeVar == null && otherVar.length == 0) ?
					String(pal.grp.rightPart.editText.text).replace(/\n|\r/gm, newlineMark) :
					(remove ?
						removeQuote(esMarker.comment, newlineMark, lineNum) :
						quoteText(esMarker.comment.replace(/\n|\r/gm, newlineMark), newlineMark, lineNum, pal.grp.rightPart.editText.backupSelection, key, arg)),
					chapVar = (poVar == null) ? esMarker.chapter : poVar,
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

		function runCommand(pal, command) {
			var cmds = "";
			cmds += command;
			system.callSystem(cmds);
			pal.grp.rightPart.editText.addEventListener("mouseout", mouseEventHandler);
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
				ms = Math.floor(timecode.substr(-fps.toString().length) / fps * 1e3 / precision) * precision;
			for (ms = ms.toString(); ms.length < 3;) ms = 0 + ms;
			app.project.timeDisplayType = timeTpye;
			return timecode.substr(0, timecode.length - fps.toString().length - 1) + "," + ms;
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
			if (comp = app.project.activeItem, sl = comp ? sortLayers(comp.selectedLayers) : [], slIndex = [], checkTextLayer(sl))
				if (pal.grp.leftPart.buttonArea.olCheck.value && checkOverlap(sl)) alert(es_str.overlap);
				else {
					pal.grp.rightPart.editText.backupSelection = "",
						pal.grp.leftPart.listArea.removeAll(),
						pal.grp.leftPart.buttonArea.resel.enabled = 0 == sl.length ? !1 : !0,
						app.beginUndoGroup(es_str.title);
					for (var t = 0; t < sl.length; t++) {
						slIndex.push(sl[t].index), validMarker(sl[t]), pal.grp.leftPart.listArea.add("item", t + 1), pal.grp.leftPart.listArea.items[t].subItems[0].text = time2code(sl[t].inPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text) + " --> " + time2code(sl[t].outPoint, comp.frameRate, pal.grp.leftPart.buttonArea.preci.text);
						var r = sl[t].property("Marker").valueAtTime(sl[t].outPoint - markerTimeOffset / comp.frameRate, !0);
						pal.grp.leftPart.listArea.items[t].subItems[1].text = r.chapter + r.url + r.frameTarget + r.cuePointName + r.getParameters().bord + r.getParameters().fsp + r.getParameters().be + r.getParameters().move + r.comment.replace(reg, "\r"), sl[t].selected = !1;
					}
					app.endUndoGroup();
				}
			else alert(es_str.textOnly);
		}
		var ui = es_buildUI(thisObj),
			comp, sl, slIndex, markerTimeOffset = 1,
			newlineMark = "↵",
			reg = new RegExp(newlineMark, "gm");

		refreshButton(ui);

		if (ui !== null) {
			if (ui instanceof Window) {
				ui.center();
				ui.show();
			} else {
				ui.layout.layout(true);
			}
		}
	})(this)