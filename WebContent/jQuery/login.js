/**
 * login.js
 */

function login_check(){
	/* javascript 예 */
	if(frm.id.value==''){
		alert('아이디를 입력하세요.');
		frm.id.focus();
		return false;
	}
	/*jQuery 예*/
	if($("#pwd").val()==''){   //$('선택자') : 선택자는 '태그', '#id', '.class' 가 들어갈 수 있음
		alert('비밀번호를 입력하세요.');
		$("#pwd").focus();
		return false;
	}
	
}