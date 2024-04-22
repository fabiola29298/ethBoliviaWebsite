const heroNosotros = new Proxy({"src":"/ethBoliviaWebsite/_astro/heroNosotros.BEfs1uur.png","width":900,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/heroNosotros.png";
							}
							
							return target[name];
						}
					});

export { heroNosotros as default };
