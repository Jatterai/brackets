module.exports = function check(str, bracketsConfig) {
	let open_brackets = bracketsConfig.map(item => item[0]);
	let bracket_pair = {};

	for (let config of bracketsConfig) {
		bracket_pair[config[1]] = config[0];
	}

	let stack = [];

	for (let bracket of str) {
		if (open_brackets.includes(bracket)) {
			stack.push(bracket);
		} else if (!stack.length) {
			return false;
		}

		let last_open_bracket = stack[stack.length - 1];

		if (bracket_pair[bracket] === bracket) {
			if (stack.length === 1) {
				continue;
			} else {
				if (last_open_bracket === stack[stack.length - 2]) {
					stack.pop();
					stack.pop();
				}
			}
		}
		if (bracket_pair[bracket] === last_open_bracket) {
			stack.pop();
		}
	}
	return !stack.length
}
