const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"user.index":{"uri":"api\/user","methods":["GET","HEAD"]},"user.create":{"uri":"api\/user\/create","methods":["GET","HEAD"]},"user.store":{"uri":"api\/user","methods":["POST"]},"user.show":{"uri":"api\/user\/{user}","methods":["GET","HEAD"],"bindings":{"user":"id"}},"user.edit":{"uri":"api\/user\/{user}\/edit","methods":["GET","HEAD"]},"user.update":{"uri":"api\/user\/{user}","methods":["PUT","PATCH"],"bindings":{"user":"id"}},"user.destroy":{"uri":"api\/user\/{user}","methods":["DELETE"],"bindings":{"user":"id"}}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
