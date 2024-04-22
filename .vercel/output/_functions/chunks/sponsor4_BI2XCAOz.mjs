const sponsor4 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor4.DETe5Fyd.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor4.png";
							}
							
							return target[name];
						}
					});

export { sponsor4 as default };
