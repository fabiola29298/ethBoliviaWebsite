const sponsor1 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor1.B3E0F2ez.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor1.png";
							}
							
							return target[name];
						}
					});

export { sponsor1 as default };
