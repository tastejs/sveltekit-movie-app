var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// netlify/functions/api-call.js
__export(exports, {
  handler: () => handler
});
async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello world!"
    })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=api-call.js.map
