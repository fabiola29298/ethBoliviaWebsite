const appStore = new Proxy({"src":"/ethBoliviaWebsite/_astro/app-store.t3tG4Jz3.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/app-store.png";
							}
							
							return target[name];
						}
					});

export { appStore as default };
