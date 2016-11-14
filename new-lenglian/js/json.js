/********json 数据******/
$(function() {
	/********分拣页面******/
	/********提货单位******/
	var fenjianA = "[{pickcompany:'上海章进贸易公司',picktime:'2016-11-10',nim:''}]";
	var jsonDataA = eval(fenjianA);
	fenjianPA();
	function fenjianPA() {
		var html = '';
		for(var j in jsonDataA) {
			var obj = jsonDataA[j];
			html += '<tr>';
			html += '<td class="picTime">' + obj.pickcompany + '</td>';
			html += '<td class="picTime picTim2">' + obj.picktime + '</td>';
			html += '<td class="picTime picTim2">' + obj.nim + '</td>';

			html += '</tr>'
		}

		$('.ckdlA').append(html);
	}
	/********货物信息******/
    		 var fenjianB = "[{listNum:'PLS66079',goodsname:'带骨牛肉犊',weight:'297',num:'6',unit:'箱',lotNum:'20160811'},"+
    		 				"{listNum:'PLS66079',goodsname:'带骨牛肉犊',weight:'297',num:'6',unit:'箱',lotNum:'20160811'}]";
			var jsonDataB = eval(fenjianB);
			ckdtilPB();
			function ckdtilPB() {
				var html='';
				for(var j in jsonDataB) {
					var obj = jsonDataB[j];
					html += '<tr>';
					html += '<td>' + obj.listNum + '</td>';
					html += '<td>' + obj.goodsname + '</td>';
					html += '<td>' + obj.weight + '</td>';
					html += '<td>' + obj.num + '</td>';
					html += '<td>' + obj.unit + '</td>';
					html += '<td>' + obj.lotNum + '</td>';
					html += '</tr>'
				}

				$('.ckdlB').append(html);
			}
	/********司机信息******/
    		 var fenjianC = "[{drvname:'张三',cartNum:'鲁A33886',drvPhe:'18333563221'}]";
			var jsonDataC = eval(fenjianC);
			ckdtilPC();
			function ckdtilPC() {
				var html='';
				for(var j in jsonDataC) {
					var obj = jsonDataC[j];
					html += '<tr>';
					html += '<td>' + obj.drvname + '</td>';
					html += '<td>' + obj.cartNum + '</td>';
					html += '<td>' + obj.drvPhe + '</td>';
					html += '</tr>'
				}

				$('.ckdlC').append(html);
			}

	/********提货中心******/
    		 var fenjianD = "[{pickTimeC:'2016.10.24 10:56',pickLtnumC:'T21312213124',cerNumC:'20',unitC:'KG',payment:'/',pickState:'仓库分拣中',optionC:'查看明细',urlA:'checkDetail.html'},"+
    		 				"{pickTimeC:'2016.10.17 09:38',pickLtnumC:'T21312213124',cerNumC:'20',unitC:'KG',payment:'1,111,222.08',pickState:'抄码完成 等待付款',optionC:'上传水单',urlA:'uploadList.html'},"+
    		 				"{pickTimeC:'2016.10.13 10:24',pickLtnumC:'T21312213124',cerNumC:'20',unitC:'KG',payment:'1,111,222.08',pickState:'付款完成 等待确认',optionC:'查看明细',urlA:'waitSure.html'},"+
    		 				"{pickTimeC:'2016.10.13 12:16',pickLtnumC:'T21312213124',cerNumC:'20',unitC:'KG',payment:'1,111,222.08',pickState:'付款完成 准备出库',optionC:'查看明细',urlA:'readyOut.html'},"+
    		 				"{pickTimeC:'2016.10.13 12:16',pickLtnumC:'T21312213124',cerNumC:'10',unitC:'KG',payment:'1,111,222.08',pickState:'出库完成',optionC:'查看明细',urlA:'allOut.html'},"+
    		 				"{pickTimeC:'2016.10.13 12:16',pickLtnumC:'T21312213124',cerNumC:'10',unitC:'KG',payment:'1,111,222.08',pickState:'订单已取消',optionC:'查看明细',urlA:''}"+
    		 				"]";
			var jsonDataD = eval(fenjianD);
			ckdtilD();
			function ckdtilD() {
				var html='';
				for(var j in jsonDataD) {
					var obj = jsonDataD[j];
					html += '<tr>';
					html += '<td>' + obj.pickTimeC + '</td>';
					html += '<td>' + obj.pickLtnumC + '</td>';
					html += '<td>' + obj.cerNumC + '</td>';
					html += '<td>' + obj.unitC + '</td>';
					html += '<td>' + obj.payment + '</td>';
					html += '<td  class="statesColor">' + obj.pickState + '</td>';
					html += '<td><a href="'+obj.urlA+'" class="kanDetil">' + obj.optionC + '</a></td>';					
					html += '</tr>'
				}

				$('.ckdlD').append(html);
			}


});