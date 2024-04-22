const sponsor7 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor7.LpyIPUPa.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor7.png";
							}
							
							return target[name];
						}
					});

export { sponsor7 as default };
