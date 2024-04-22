const sponsor2 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor2.CJrTGEX5.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor2.png";
							}
							
							return target[name];
						}
					});

export { sponsor2 as default };
