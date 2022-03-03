module.exports = (htxt, options={})=> {
	// 寻找所有变量
	let _options = {}
	let lines = htxt.split('\n');
	lines = lines.map(function(line){
		if(line.startsWith('-')){
			let splits = line.split('=');
			if(splits.length>1){
				_options[splits.shift().replace(/^-/, '')] = splits.join('=')
			}
			return false;
		}
		return line;
	}).filter(function(line){
		return (line === false || line === undefined)?false: true;
	})

	// 与外部变量

	Object.assign(options, _options );

	// 第二次遍历把变量替换块标签

	let currentTag = ''

	lines = lines.map(function(line){
		console.log(line)
		if(line.startsWith('<') && line.endsWith('>') ){
			// 兼容标签的属性 <div class="bold"> = bold
			currentTag = line.split(' ').shift().replace(/[<|>]/g, '');
		}else{
			line = line.replace(/<([^>]+)>/g, function(tag, name){
				return options[name]?options[name]:tag;
			});
		}

		if(line.trim() == '' && currentTag) {
			line = `</${currentTag}>`;
			currentTag = ''
		}


		if(line.trim() == '-'){
			line = '\n'
		}
		return line;
	})

	return lines.join('\n');
}