const sponsor5 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor5.BCm7dCmm.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor5.png";
							}
							
							return target[name];
						}
					});

export { sponsor5 as default };
