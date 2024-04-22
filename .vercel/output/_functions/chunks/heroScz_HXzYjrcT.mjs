const heroScz = new Proxy({"src":"/ethBoliviaWebsite/_astro/heroScz.BlOkb2jx.png","width":900,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/heroScz.png";
							}
							
							return target[name];
						}
					});

export { heroScz as default };
