export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.4b8cdc2c.js","imports":["_app/immutable/entry/start.4b8cdc2c.js","_app/immutable/chunks/index.6eed8bf6.js","_app/immutable/chunks/singletons.bc03173e.js","_app/immutable/chunks/index.fe00b169.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.d30155f9.js","imports":["_app/immutable/entry/app.d30155f9.js","_app/immutable/chunks/index.6eed8bf6.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
