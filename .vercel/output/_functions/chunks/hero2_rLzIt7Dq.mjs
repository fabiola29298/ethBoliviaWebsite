const hero2 = new Proxy({"src":"/ethBoliviaWebsite/_astro/hero2.CiAuxIbJ.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/hero2.png";
							}
							
							return target[name];
						}
					});

export { hero2 as default };
