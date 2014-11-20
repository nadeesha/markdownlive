function renderMarkdown () {
	var mardown = editor.getSession().getValue();
	document.getElementById('ml-rendered').innerText = markdown;
}

var editor = ace.edit("ml-editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/markdown");

editor.getSession().on('change', renderMarkdown);


