const agendaSpeakers2 = new Proxy({"src":"/ethBoliviaWebsite/_astro/agendaSpeakers2.Hmu7Kpoh.png","width":450,"height":450,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/fabi/april2024/ethBoliviaWebsite/src/assets/images/agendaSpeakers2.png";
							}
							
							return target[name];
						}
					});

export { agendaSpeakers2 as default };
