var lc={};
var msg_con   = 0;
//验证浏览器是否支持activeX控件
lc.activeX = window.ActiveXObject ? true : false;

//验证浏览器所支持的控件类型
//conId:父元素ID（可为空）
//lc.controls：可用控件数组
function checkControl(conId){
	var temps,i;
	var con = conId ? document.getElementById(conId) : document;
	if (lc.activeX) {//支持activeX控件则生成列表，隐藏其他类型控件
		lc.controls = con.getElementsByTagName('object');
		//hide <embed> in IE
		temps = con.getElementsByTagName('embed');
		for (i = 0; i < temps.length; i += 1) {
			temps[i].style.display = 'none';
		}
		activeXEvent();//绑定activeX控件事件响应
	}
	else {
		lc.controls = con.getElementsByTagName('embed');
		for (i = 0; i < lc.controls.length; i += 1) {
			//对控件标识赋值（类似ID）；在事件中返回该值，以区别单个控件
			lc.controls[i]._WktckPro = 1;//用于控件修正整数webkit类型问题！
			lc.controls[i]._WktckFun(1);//用于控件修正整数webkit类型问题！
			lc.controls[i]._biubiu = (i+"");//属性需设置为字符串
		}
		//hide <object> in other browser
		temps = con.getElementsByTagName('object');
		for (i = 0; i < temps.length; i += 1) {
			temps[i].style.display = 'none';
		}
	}
}
//更改TCP/MULT时，自动断开重联视频（onclick事件调用）
function linkChg(){
	if(document.getElementById("stream_type")){//如果有码流选择
		if(document.view.linktype[1].checked){//选择多播时隐藏码流选择
			document.getElementById("stream_type").style.display = "none";
			document.view.stream[0].checked = true;
		}
		else{
			document.getElementById("stream_type").style.display = "block";
		}
	}
	if(lc.controls[0].Trantype!=(document.view.linktype[1].checked ? 2 : 3)){//切换时重连
    	setTimeout('cnt_all(0);',500);
    	setTimeout('cnt_all(1);',500);
	}
}
//更改连接码流，重连视频（onchange事件调用）
function streamChg(){
	setTimeout('cnt_all(0);',500);
	setTimeout('cnt_all(1);',500);
}

//单控件控制
//no：控件编号；ch：通道号；act（0：OFF/1:ON）
function ctrl_cnt(no,ch,act){
	if(act==0||(typeof(act)=="undefined"&&is_play[no] != 0)){
		lc.controls[no].StopView();
		is_play[no] = 0;
		if(no==cur_ch){
		    if(is_rec[no]){
		        ctrl_rcd();//本地录像状态
		    }
		    if(is_aud[no]){
		        ctrl_audio();//音频状态
		    }
		}
		if(is_talk=1&&lc.controls[no]==talkCmr){
			is_talk=0;
			btnImgChg("talk","talk",is_talk);
		}
	}
	else if(act==1||(typeof(act)=="undefined"&&is_play[no] == 0)){
		ctrl_init(no,ch);
		lc.controls[no].Trantype   = (document.view.linktype&&document.view.linktype[1].checked) ? 2 : 3;//3 is TCP
		lc.controls[no].Streamtype = (document.view.stream&&document.view.stream[1].checked) ? 1 : 0;
		lc.controls[no].Delaytime = g.delay[no];
		getdt();
		lc.controls[no].SetRecordType(1);//录像格式（1=H264/0=ASF）
		lc.controls[no].StartView();
		lc.controls[no].SoundOff();
		is_play[no] = 1;
	}
	if(typeof(document.view["play"+no])!="undefined"){
	    document.view["play"+no].checked=is_play[no] ? true : false;
	}
	//如果 已开启 所有 连接 则 “连接所有”按钮不可用
	//如果 已关闭 所有 视频 则 “关闭所有”按钮不可用
	var tempStr = is_play.join('');//把 数组所有元素 连接为 字符串，检测是否有0/1
	if(document.getElementById("stopall")){//如果存在“关闭所有”按钮
		//没有一个状态为1 = 所有视频关闭
		document.getElementById("stopall").className = (tempStr.indexOf('1') == -1) ? 'dis' : '';
	}
	if(document.getElementById("playall")){//如果存在“开启所有”按钮
		//没有一个状态为0 = 所有视频开启
		document.getElementById("playall").className = (tempStr.indexOf('0') == -1) ? 'dis' : '';
	}
}
//控件基本的参数赋值
//act：播放视频；为空：不播放仅赋值
function ctrl_init(no,ch,act){
	lc.controls[no].Url         = g.serverAddr;
	lc.controls[no].WServerPort = parseInt(serverport,10);//端口必须是整数格式
	lc.controls[no].Channel     = ch;
	lc.controls[no].Username    = g.id;
	lc.controls[no].Password    = g.pw;
	if(act=1){
	    lc.controls[no].StartView();
	    lc.controls[no].SoundOff()
	}
}
//控制所有通道
//onff（0/1）
function cnt_all(onff){
	var i;
	for(i=0;i<max_ch;i++){
		ctrl_cnt(i,i,onff);//默认：编号通道号相同
	}
}
//录象
function ctrl_rcd(){
	if(is_play[cur_ch]){//连接开启时，开启/关闭录像
		if(is_rec[cur_ch]){
			lc.controls[cur_ch].StopRecord();
			is_rec[cur_ch] = 0;
		}
		else{
			lc.controls[cur_ch].StartRecord("");
			is_rec[cur_ch] = 1;
		}
	}
	else{//没有连接视频，为录像关闭状态
		is_rec[cur_ch] = 0;
	}
	btnImgChg("rec","rec",is_rec[cur_ch]);
}

function ctrl_audio(){//音频
	if(is_play[cur_ch]){
		if(is_aud[cur_ch]){
			lc.controls[cur_ch].SoundOff();
		}
		else{
			lc.controls[cur_ch].SoundOn();
		}
	}
	else{
	   is_aud[cur_ch] = 0; 
	}
	btnImgChg("aud","aud",is_aud[cur_ch]);
}
//音频状态事件
function eAudioState(ch,stt){
	if(ch==cur_ch||stt){
		is_aud[ch] = stt;
	}
	btnImgChg("aud","aud",is_aud[cur_ch]);
}
//切换通道时判断音频状态
function swch_aud(prev){
	if(is_aud[prev]){
		lc.controls[prev].SoundOff();
	}
	if(is_aud[cur_ch]){
		lc.controls[cur_ch].SoundOn();
	}
	btnImgChg("aud","aud",is_aud[cur_ch]);
}
//通话
function ctrl_talk(){
	if(is_talk){
		talkCmr.StopTalk();
		is_talk = 0;
		btnImgChg("talk","talk",is_talk);
		msgBox();
	}
	else if(is_play[cur_ch]){
		lc.controls[cur_ch].StartTalk();
	}		
}
//通话状态,控件返回参数
function eTalkStatus(ch,stt){
	var img_pre,sttTxt;
	if(stt==0){				
		is_talk = 0;
		img_pre = "talk";	
		sttTxt = "00 02 100 002 01";
	}
	else if(stt==1){//单向对讲
		is_talk = 1;
		img_pre = "talk1";
		talkCmr = lc.controls[ch];
		sttTxt = "00 02 100 002 02";
	}
	else if(stt==2){//双向对讲
		is_talk = 1;
		img_pre = "talk2";
		talkCmr = lc.controls[ch];
		sttTxt = "00 02 100 002 03";
	}
	msgBox(getTxt(sttTxt));
	btnImgChg("talk",img_pre,is_talk);	
}
//云台速度
function ptz_speed(value){
	ptz_spd = value<10 ? (value>1 ? value : 1) : 10;
	//msgBox(getTxt("00 02 005 005 01")+" "+ptz_spd);
	for(i=1; i<11; i++){		
		btnImgChg("ptzspd"+i,"ptz_spd",(i>ptz_spd ? 0 : 1));
	}
}
//云台转动
function ptz_mv(i,act){
	if(act != 0){
		if(ort_ptz[i] != 0){
			ort_ptz[i] = 0;
		}
		else{
			ort_ptz[i] = 1;
			lc.controls[cur_ch].PTZCtrl(i, ptz_spd);
	        //window.status +=(i)
		}
	}
	else{
		if(ort_ptz[i]!=0){//验证状态，保证命令成对发送（防止频繁双击发送2次停止命令）
    		lc.controls[cur_ch].PTZCtrl(13, ptz_spd);
    		ort_ptz[i] = 0;
	        //window.status +=(13)
		}
	}
}
//i: action or stop action; act: zoom98, iris45, focus67;
function ptz_iris(i, act){
	if(i){
		lc.controls[cur_ch].PTZCtrl(act, ptz_spd);
		g.mouseDown = 1;//增加按下状态标记，防止双击导致的发送2次停止命令
	        //window.status +=(act)
	}
	else{
		if(g.mouseDown){//验证按下状态标记，防止双击导致的发送2次停止命令
    		lc.controls[cur_ch].PTZCtrl(13, ptz_spd);
    		g.mouseDown = 0
	        //window.status +=(13)
	    }
	}
}
//预置点
function presetPoint(act){
	 lc.controls[cur_ch].PTZCtrl(act, document.view.preset.value);
}
//报警
//ch:保留占位
function eExOutPutStatus(ch,i){
	var x;
	for(x=0; x<lcElem.almOut; x++){
		if(i & Math.pow(2, x)){
			is_aux[x] = 1;
		}
		else{
			is_aux[x] = 0;
		}
		btnBgChg("alm"+x, "alm", is_aux[x]);
	}
}
function set_aux(i){
	if(is_aux[i] != 0){
		lc.controls[cur_ch].CtrolAlarmOut(i, 0);
		is_aux[i] = 0;
	}
	else{
		lc.controls[cur_ch].CtrolAlarmOut(i, 1);
		is_aux[i] = 1;
	}			
	btnBgChg(("alm"+i), "alm", is_aux[i]);
}

//云台自动
function cruise(){
	if (is_auto[cur_ch]){
		lc.controls[cur_ch].PTZCtrl(32, ptz_spd);
		is_auto[cur_ch] = 0;
	}
	else{
		lc.controls[cur_ch].PTZCtrl(12, ptz_spd);
		is_auto[cur_ch] = 1;
	}
}
function ctrl_cpt(){//抓拍
	lc.controls[cur_ch].CaptureBmp("");
}
function changedt(value,obj){//流畅度,缓冲
	lc.controls[cur_ch].Delaytime = value;
	g.delay[cur_ch] = value
	getdt();
	/*修正IE界面变化*/
	var version = parseFloat(navigator.appVersion.split("MSIE")[1]);
	if(version<8)
	{
		zoomcon = document.getElementById("zoom");
		zoomcon.style.marginBottom = "-3px";
	}
}
//缓冲按钮状态
function getdt(){
	var btnArray = document.getElementById("buf").getElementsByTagName("button")
	for(i=0; i<btnArray.length;i+=1){
		btnArray[i].className = btnArray[i].innerHTML == lc.controls[cur_ch].Delaytime ? "on" : "";
	}		
}
function ctrl_pis(){
	if(is_pis[cur_ch]){
		if(lc.controls[cur_ch].PISNow(true)){
			is_pis[cur_ch] = 1;
		}
	}
	else{
		if(lc.controls[cur_ch].PISNow(false)){
			is_pis[cur_ch] = 0;
		}
	}
	btnBgChg("pis","zoom_bg",is_pis);			
}
function btnImgChg(objId, pic, stt)//按钮图案变化(对象ID，图片名，状态：0/1=关/开)
{
	document.getElementById(objId).src="../css/images/"+pic+(stt ? "_act":"")+".gif";
}
function btnBgChg(objId, pic, stt)//按钮背景变化
{
	document.getElementById(objId).style.backgroundImage="url(../css/images/"+pic+(stt ? "_act" : "")+".gif)";
}
function onlyNum()//输入字符类型仅数字
{
	var keys=event.keyCode
	if (!((keys>=48&&keys<=57)||(keys>=96&&keys<=105)||keys==37||keys==39||keys==8||keys==46))
	{event.returnValue=false;}
}
function eLinkStatus(chn,stt){
	if(stt==-105||stt==-103)
	{
		msgContent(1,getTxt("00 00 002 007 01")+chn+" "+getTxt("00 02 100 001 01"));//示例:通道1 满员……
	}
}
//调用消息框
//act：（0=关闭/1=显示）
//info：消息
function msgContent(act,info){
	if(act){
		var str_tmp='';
		if(msg_con==0)
		{
			document.getElementById('alert').className = 'show';
			msg_con = 1;
		}
		else{
			str_tmp = "<br/>"
		}
		str_tmp += info;
		document.getElementById('alertText').innerHTML += str_tmp;
	}
	else{
		document.getElementById('alert').className = '';
		document.getElementById('alertText').innerHTML = '';
		msg_con = 0;
	}
}
function Debug(mark,arg){
}