const agendaSpeakers1 = new Proxy({"src":"/ethBoliviaWebsite/_astro/agendaSpeakers1.D1sPCbsS.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers1.png";
							}
							
							return target[name];
						}
					});

export { agendaSpeakers1 as default };
