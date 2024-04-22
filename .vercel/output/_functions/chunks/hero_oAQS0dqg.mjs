const hero = new Proxy({"src":"/ethBoliviaWebsite/_astro/hero.D0-9_4zY.png","width":1600,"height":939,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/hero.png";
							}
							
							return target[name];
						}
					});

export { hero as default };
