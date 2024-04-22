const photo4eth2023 = new Proxy({"src":"/ethBoliviaWebsite/_astro/photo4eth2023.Ctk3PUYm.jpg","width":900,"height":900,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/photo4eth2023.jpg";
							}
							
							return target[name];
						}
					});

export { photo4eth2023 as default };
