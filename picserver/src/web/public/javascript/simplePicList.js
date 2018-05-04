/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-10-28
 * Time: 下午4:21
 * To change this template use File | Settings | File Templates.
 */

    var IMGPAGEINDEX = 0; //全局变量 层显示到第几页了。
    var IMGPAGESIZE = 0;  //全局变量 总页数
    var IMGLIMIT = 0;     //全局变量 单页显示多少张图片
    var IMGLIST=[];
    $('#divLeftButton').hide(); //初始化隐藏按钮
    $('#divRightButton').hide();//初始化隐藏按钮


//页面内容及控件控制
    function PageCtrl(_index,_size,_limit,_list) {
        IMGPAGEINDEX = _index;
        IMGPAGESIZE = _size;
        IMGLIMIT = _limit;
        IMGLIST = _list;
        $('#spanIMGPAGEINDEX').text(IMGPAGEINDEX + 1);
        $('#spanIMGPAGESIZE').text(IMGPAGESIZE);

        if(_index == 0) {
            $('#divLeftButton').hide();
        } else {
            $('#divLeftButton').show();
        }

        if(_index == _size -1) {
            $('#divRightButton').hide();
        } else {
            $('#divRightButton').show();
//            if(_size!=0){
//                $('#divRightButton').show();
//            }else{
//                $('#divRightButton').hide();
//            }

        }
    }

//首次加载图片
    function GetDivHTML(_imgList) {
        IMGLIST=_imgList;
        var imgDiv = $('#divImgList'); //获取层对象
        var imgHeight = imgDiv.height() - 5; //图片高度为层高上下减5px
        var imgWidth = (imgHeight/3)*4; //图片宽度为4:3的图高
        var divWidth = imgDiv.width(); // 获取层宽度
        var imgCount = Math.floor(( divWidth - 5 ) / (imgWidth + 5)); //求出最多能放多少张图片(带边缘余5px)。
        //设置页面属性
        PageCtrl(0,Math.ceil(_imgList.length / imgCount),imgCount,_imgList);

        var divHTML = "&nbsp;";
        var imgLength = imgCount < _imgList.length ? imgCount : _imgList.length;
        for(var i = 0;i < imgLength ; i ++) {
//                divHTML += '<a style="margin-left: 5px;" href="xx.html?data='+_imgList[i]+'" target="_blank">'+
            divHTML += '<a style="margin-left: 5px;" href="ImageShow.html?data='+_imgList[i]+'" target="_blank">' +
                '<img style="height: '+imgHeight+'px;width:'+imgWidth+'px;" src="'+_imgList[i]+'" />' +
                '</a>';

        }
        imgDiv.html(divHTML);
    }

//左右翻页按钮函数
    function BtnClick(_direction) {
        var startIndex = 0;
        if(_direction == 'L') {
//            如果左翻页
            if(IMGPAGEINDEX == 0) {
                alert("没有上一页了");
                return;
            } else {
                IMGPAGEINDEX--;
                startIndex = IMGPAGEINDEX*IMGLIMIT;
                PageChangeHTML(IMGLIST,startIndex,((IMGPAGEINDEX+1) * IMGLIMIT));
            }
        } else {
//            如果右翻页
            if(IMGPAGEINDEX == IMGPAGESIZE - 1) {
                alert("没有下一页了");
                return;
            } else {
                IMGPAGEINDEX++;
                var imgCount = IMGLIST.length;
                startIndex = IMGPAGEINDEX*IMGLIMIT;
                var pageLimit = startIndex+IMGLIMIT > imgCount ? imgCount : ((IMGPAGEINDEX+1) * IMGLIMIT);
                PageChangeHTML(IMGLIST,startIndex,pageLimit);
            }
        }
        PageCtrl(IMGPAGEINDEX,IMGPAGESIZE,IMGLIMIT,IMGLIST); //更新页面属性
    }


//翻页内容显示
    function PageChangeHTML(_imgList,_index,_limit) {
        var imgDiv = $('#divImgList'); //获取层对象
        var imgHeight = imgDiv.height() - 5; //图片高度为层高上下减5px
        var imgWidth = (imgHeight/3)*4; //图片宽度为4:3的图高

        var divHTML = "";
        for(var i = _index;i < _limit ; i ++) {
            divHTML += '<a style="margin-left: 5px;" href="'+_imgList[i]+'" target="_blank">' +
                '<img style="height: '+imgHeight+'px;width:'+imgWidth+'px;" src="'+_imgList[i]+'" />' +
                '</a>';
        }
        imgDiv.html(divHTML);
    }
