const impact2 = new Proxy({"src":"/ethBoliviaWebsite/_astro/impact2.DYpBAqdx.png","width":900,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/impact2.png";
							}
							
							return target[name];
						}
					});

export { impact2 as default };
