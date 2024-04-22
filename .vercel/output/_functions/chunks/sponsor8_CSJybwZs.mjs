const sponsor8 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor8.nvxCCsSN.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor8.png";
							}
							
							return target[name];
						}
					});

export { sponsor8 as default };
