
function LetterChanges (str) {
	return str.replace(/[a-zA-Z]/g, function(x) {
		return String.fromCharCode(x.charCodeAt(0)+1);
	});
}
console.log(LetterChanges('abc'));