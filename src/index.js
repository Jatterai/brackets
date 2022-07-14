module.exports = function check(str, bracketsConfig) {
	let open_brackets = bracketsConfig.filter(item => (item[0] !== item[1])).map(item => item[0]); let shit = bracketsConfig.filter(item => (item[0] === item[1])).map(item => item[0]);

	let bracket_pair = {};
	for (let config of bracketsConfig) {
		bracket_pair[config[1]] = config[0];
	}

	let stack = [];
	for (let bracket of str) {
		if (open_brackets.includes(bracket)) {
			stack.push(bracket);
		} else if (!stack.length && bracket !== bracket_pair[bracket]) {
			return false;
		}
		let last_open_bracket = stack[stack.length - 1];

		if (shit.includes(bracket)) {
			if (bracket !== last_open_bracket || !stack.length) {
				stack.push(bracket);
			} else {
				stack.pop();
				continue;
			}
		}
		if (bracket_pair[bracket] === last_open_bracket) {
			stack.pop();
		}
	}

	return !stack.length
}

