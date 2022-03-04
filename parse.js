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
	Object.assign(options, _options );

	// 第二次遍历把变量替换块标签
	let currentTag = ''
	lines = lines.map(function(line){
		if(line.startsWith('<') && line.endsWith('>') ){
			// 兼容标签的属性 <div class="bold"> = bold
			currentTag = line.split(' ').shift().replace(/[<|>]/g, '');
			return;
		}

		line = line.replace(/<([^>]+)>/g, function(tag, name){
			return options[name]?options[name]:tag;
		});

		if(line.startsWith('//') && currentTag!='code'){
			return '';
		}

		if(line.trim() == '') {
			if(currentTag){
				line = `</${currentTag}>`;
				currentTag = ''
			}
		}else{
			line = line.replace(/^\|/, '');
			line += '<br/>';//默认自动换行
		}
		return line;
	})

	return {
		html:lines.join(''),
		options: options
	}
}