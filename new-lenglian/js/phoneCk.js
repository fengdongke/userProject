$(function() {
	/***********提货求和*******/

	$('.num').keyup(function(num) {
		$('.addSum').css('display', 'block');
		var count = 0;
		var num = $(this).val();
		if(num > 0) {
			num = $(this).val();
			num = parseInt(num) || 0;
		}
		if(num <= 0) {
			alert('请输入大于0的数字');
		}
		if(isNaN(num)) {
			alert('您输入有误，请输入大于0的整数');
		}
		$('.addSum .countBox').html(count);
		var addNum = 0;
		$(".num").each(function() {
			var r = /^-?\d+$/;　 //正整数
			if($(this).val() != '' && !r.test($(this).val())) {
				$(this).val(""); //正则表达式不匹配置空
			} else if($(this).val() != '') {
				addNum += parseInt($(this).val());
				console.log(addNum);
				if($(this).val() == 0) {
					count = count;
				} else {
					count++;
				}
			}
			$('.all_price').val(addNum);
			$('.addSum .countBox').html(count);
		});
	})

});

function Known() {
	$('.surePickBox2').toggle();
}

$('.applyBtmBtn').click(function() {
	var trArr = [];
	$('.num').each(function(index, obj) {
		var inputVal = $(obj).val();
		if(inputVal >= 1) {
			var tr = [];
			goodsinfo = $(obj).parent().parent().children().eq(0).html();
			goodsName = $(obj).parent().parent().children().eq(1).html();

			tr.push(goodsinfo);
			tr.push(goodsName);
			tr.push(inputVal);
			console.log(tr);
			trArr.push(tr)
		}

	})

	$.each(trArr, function(index, obj) {
		console.log(obj)
		var trinfo = $('<tr>' +
			'<td>' + (index + 1) + '</td>' +
			'<td>' + obj[0] + '</td>' +
			'<td>' + obj[1] + '</td>' +
			'<td>' + obj[2] + '</td>' +
			'<tr>')
		$('.sureListInfo').append(trinfo);
	})

	$('.sureListInfo')

	var count = $('.countBox').html();
	if(count >= 1) {
		$('.header').toggle();
		$('.headerBtm').toggle();
		$('.contentBox').toggle();
		$('.surePickBox').toggle();
	} else {
		var y = document.body.clientHeight + document.body.scrollTop + 'px';
		$('.surePickBox2').height(y);
		$('.surePickBox2').css('display', 'block');
	}
});