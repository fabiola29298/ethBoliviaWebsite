const sponsor9 = new Proxy({"src":"/ethBoliviaWebsite/_astro/sponsor9.BusXkBzL.png","width":1280,"height":640,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/sponsor9.png";
							}
							
							return target[name];
						}
					});

export { sponsor9 as default };
