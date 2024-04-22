const googlePlay = new Proxy({"src":"/ethBoliviaWebsite/_astro/google-play.ISTMcpLO.png","width":300,"height":89,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/google-play.png";
							}
							
							return target[name];
						}
					});

export { googlePlay as default };
