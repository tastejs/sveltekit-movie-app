var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// .svelte-kit/netlify/entry.js
__export(exports, {
  handler: () => handler
});

// node_modules/@sveltejs/kit/dist/install-fetch.js
var import_http = __toModule(require("http"));
var import_https = __toModule(require("https"));
var import_zlib = __toModule(require("zlib"));
var import_stream = __toModule(require("stream"));
var import_util = __toModule(require("util"));
var import_crypto = __toModule(require("crypto"));
var import_url = __toModule(require("url"));
function dataUriToBuffer(uri) {
  if (!/^data:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }
  uri = uri.replace(/\r?\n/g, "");
  const firstComma = uri.indexOf(",");
  if (firstComma === -1 || firstComma <= 4) {
    throw new TypeError("malformed data: URI");
  }
  const meta = uri.substring(5, firstComma).split(";");
  let charset = "";
  let base64 = false;
  const type = meta[0] || "text/plain";
  let typeFull = type;
  for (let i = 1; i < meta.length; i++) {
    if (meta[i] === "base64") {
      base64 = true;
    } else {
      typeFull += `;${meta[i]}`;
      if (meta[i].indexOf("charset=") === 0) {
        charset = meta[i].substring(8);
      }
    }
  }
  if (!meta[0] && !charset.length) {
    typeFull += ";charset=US-ASCII";
    charset = "US-ASCII";
  }
  const encoding = base64 ? "base64" : "ascii";
  const data = unescape(uri.substring(firstComma + 1));
  const buffer = Buffer.from(data, encoding);
  buffer.type = type;
  buffer.typeFull = typeFull;
  buffer.charset = charset;
  return buffer;
}
var src = dataUriToBuffer;
var dataUriToBuffer$1 = src;
var { Readable } = import_stream.default;
var wm = new WeakMap();
async function* read(parts) {
  for (const part of parts) {
    if ("stream" in part) {
      yield* part.stream();
    } else {
      yield part;
    }
  }
}
var Blob = class {
  constructor(blobParts = [], options2 = {}) {
    let size = 0;
    const parts = blobParts.map((element) => {
      let buffer;
      if (element instanceof Buffer) {
        buffer = element;
      } else if (ArrayBuffer.isView(element)) {
        buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
      } else if (element instanceof ArrayBuffer) {
        buffer = Buffer.from(element);
      } else if (element instanceof Blob) {
        buffer = element;
      } else {
        buffer = Buffer.from(typeof element === "string" ? element : String(element));
      }
      size += buffer.length || buffer.size || 0;
      return buffer;
    });
    const type = options2.type === void 0 ? "" : String(options2.type).toLowerCase();
    wm.set(this, {
      type: /[^\u0020-\u007E]/.test(type) ? "" : type,
      size,
      parts
    });
  }
  get size() {
    return wm.get(this).size;
  }
  get type() {
    return wm.get(this).type;
  }
  async text() {
    return Buffer.from(await this.arrayBuffer()).toString();
  }
  async arrayBuffer() {
    const data = new Uint8Array(this.size);
    let offset = 0;
    for await (const chunk of this.stream()) {
      data.set(chunk, offset);
      offset += chunk.length;
    }
    return data.buffer;
  }
  stream() {
    return Readable.from(read(wm.get(this).parts));
  }
  slice(start = 0, end = this.size, type = "") {
    const { size } = this;
    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);
    const span = Math.max(relativeEnd - relativeStart, 0);
    const parts = wm.get(this).parts.values();
    const blobParts = [];
    let added = 0;
    for (const part of parts) {
      const size2 = ArrayBuffer.isView(part) ? part.byteLength : part.size;
      if (relativeStart && size2 <= relativeStart) {
        relativeStart -= size2;
        relativeEnd -= size2;
      } else {
        const chunk = part.slice(relativeStart, Math.min(size2, relativeEnd));
        blobParts.push(chunk);
        added += ArrayBuffer.isView(chunk) ? chunk.byteLength : chunk.size;
        relativeStart = 0;
        if (added >= span) {
          break;
        }
      }
    }
    const blob = new Blob([], { type: String(type).toLowerCase() });
    Object.assign(wm.get(blob), { size: span, parts: blobParts });
    return blob;
  }
  get [Symbol.toStringTag]() {
    return "Blob";
  }
  static [Symbol.hasInstance](object) {
    return object && typeof object === "object" && typeof object.stream === "function" && object.stream.length === 0 && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[Symbol.toStringTag]);
  }
};
Object.defineProperties(Blob.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true }
});
var fetchBlob = Blob;
var Blob$1 = fetchBlob;
var FetchBaseError = class extends Error {
  constructor(message, type) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.type = type;
  }
  get name() {
    return this.constructor.name;
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
};
var FetchError = class extends FetchBaseError {
  constructor(message, type, systemError) {
    super(message, type);
    if (systemError) {
      this.code = this.errno = systemError.code;
      this.erroredSysCall = systemError.syscall;
    }
  }
};
var NAME = Symbol.toStringTag;
var isURLSearchParameters = (object) => {
  return typeof object === "object" && typeof object.append === "function" && typeof object.delete === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.has === "function" && typeof object.set === "function" && typeof object.sort === "function" && object[NAME] === "URLSearchParams";
};
var isBlob = (object) => {
  return typeof object === "object" && typeof object.arrayBuffer === "function" && typeof object.type === "string" && typeof object.stream === "function" && typeof object.constructor === "function" && /^(Blob|File)$/.test(object[NAME]);
};
function isFormData(object) {
  return typeof object === "object" && typeof object.append === "function" && typeof object.set === "function" && typeof object.get === "function" && typeof object.getAll === "function" && typeof object.delete === "function" && typeof object.keys === "function" && typeof object.values === "function" && typeof object.entries === "function" && typeof object.constructor === "function" && object[NAME] === "FormData";
}
var isAbortSignal = (object) => {
  return typeof object === "object" && object[NAME] === "AbortSignal";
};
var carriage = "\r\n";
var dashes = "-".repeat(2);
var carriageLength = Buffer.byteLength(carriage);
var getFooter = (boundary) => `${dashes}${boundary}${dashes}${carriage.repeat(2)}`;
function getHeader(boundary, name, field) {
  let header = "";
  header += `${dashes}${boundary}${carriage}`;
  header += `Content-Disposition: form-data; name="${name}"`;
  if (isBlob(field)) {
    header += `; filename="${field.name}"${carriage}`;
    header += `Content-Type: ${field.type || "application/octet-stream"}`;
  }
  return `${header}${carriage.repeat(2)}`;
}
var getBoundary = () => (0, import_crypto.randomBytes)(8).toString("hex");
async function* formDataIterator(form, boundary) {
  for (const [name, value] of form) {
    yield getHeader(boundary, name, value);
    if (isBlob(value)) {
      yield* value.stream();
    } else {
      yield value;
    }
    yield carriage;
  }
  yield getFooter(boundary);
}
function getFormDataLength(form, boundary) {
  let length = 0;
  for (const [name, value] of form) {
    length += Buffer.byteLength(getHeader(boundary, name, value));
    if (isBlob(value)) {
      length += value.size;
    } else {
      length += Buffer.byteLength(String(value));
    }
    length += carriageLength;
  }
  length += Buffer.byteLength(getFooter(boundary));
  return length;
}
var INTERNALS$2 = Symbol("Body internals");
var Body = class {
  constructor(body, {
    size = 0
  } = {}) {
    let boundary = null;
    if (body === null) {
      body = null;
    } else if (isURLSearchParameters(body)) {
      body = Buffer.from(body.toString());
    } else if (isBlob(body))
      ;
    else if (Buffer.isBuffer(body))
      ;
    else if (import_util.types.isAnyArrayBuffer(body)) {
      body = Buffer.from(body);
    } else if (ArrayBuffer.isView(body)) {
      body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
    } else if (body instanceof import_stream.default)
      ;
    else if (isFormData(body)) {
      boundary = `NodeFetchFormDataBoundary${getBoundary()}`;
      body = import_stream.default.Readable.from(formDataIterator(body, boundary));
    } else {
      body = Buffer.from(String(body));
    }
    this[INTERNALS$2] = {
      body,
      boundary,
      disturbed: false,
      error: null
    };
    this.size = size;
    if (body instanceof import_stream.default) {
      body.on("error", (err) => {
        const error2 = err instanceof FetchBaseError ? err : new FetchError(`Invalid response body while trying to fetch ${this.url}: ${err.message}`, "system", err);
        this[INTERNALS$2].error = error2;
      });
    }
  }
  get body() {
    return this[INTERNALS$2].body;
  }
  get bodyUsed() {
    return this[INTERNALS$2].disturbed;
  }
  async arrayBuffer() {
    const { buffer, byteOffset, byteLength } = await consumeBody(this);
    return buffer.slice(byteOffset, byteOffset + byteLength);
  }
  async blob() {
    const ct = this.headers && this.headers.get("content-type") || this[INTERNALS$2].body && this[INTERNALS$2].body.type || "";
    const buf = await this.buffer();
    return new Blob$1([buf], {
      type: ct
    });
  }
  async json() {
    const buffer = await consumeBody(this);
    return JSON.parse(buffer.toString());
  }
  async text() {
    const buffer = await consumeBody(this);
    return buffer.toString();
  }
  buffer() {
    return consumeBody(this);
  }
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true }
});
async function consumeBody(data) {
  if (data[INTERNALS$2].disturbed) {
    throw new TypeError(`body used already for: ${data.url}`);
  }
  data[INTERNALS$2].disturbed = true;
  if (data[INTERNALS$2].error) {
    throw data[INTERNALS$2].error;
  }
  let { body } = data;
  if (body === null) {
    return Buffer.alloc(0);
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return body;
  }
  if (!(body instanceof import_stream.default)) {
    return Buffer.alloc(0);
  }
  const accum = [];
  let accumBytes = 0;
  try {
    for await (const chunk of body) {
      if (data.size > 0 && accumBytes + chunk.length > data.size) {
        const err = new FetchError(`content size at ${data.url} over limit: ${data.size}`, "max-size");
        body.destroy(err);
        throw err;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    }
  } catch (error2) {
    if (error2 instanceof FetchBaseError) {
      throw error2;
    } else {
      throw new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error2.message}`, "system", error2);
    }
  }
  if (body.readableEnded === true || body._readableState.ended === true) {
    try {
      if (accum.every((c) => typeof c === "string")) {
        return Buffer.from(accum.join(""));
      }
      return Buffer.concat(accum, accumBytes);
    } catch (error2) {
      throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error2.message}`, "system", error2);
    }
  } else {
    throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
  }
}
var clone = (instance, highWaterMark) => {
  let p1;
  let p2;
  let { body } = instance;
  if (instance.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof import_stream.default && typeof body.getBoundary !== "function") {
    p1 = new import_stream.PassThrough({ highWaterMark });
    p2 = new import_stream.PassThrough({ highWaterMark });
    body.pipe(p1);
    body.pipe(p2);
    instance[INTERNALS$2].body = p1;
    body = p2;
  }
  return body;
};
var extractContentType = (body, request) => {
  if (body === null) {
    return null;
  }
  if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  }
  if (isURLSearchParameters(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  }
  if (isBlob(body)) {
    return body.type || null;
  }
  if (Buffer.isBuffer(body) || import_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
    return null;
  }
  if (body && typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  }
  if (isFormData(body)) {
    return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
  }
  if (body instanceof import_stream.default) {
    return null;
  }
  return "text/plain;charset=UTF-8";
};
var getTotalBytes = (request) => {
  const { body } = request;
  if (body === null) {
    return 0;
  }
  if (isBlob(body)) {
    return body.size;
  }
  if (Buffer.isBuffer(body)) {
    return body.length;
  }
  if (body && typeof body.getLengthSync === "function") {
    return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
  }
  if (isFormData(body)) {
    return getFormDataLength(request[INTERNALS$2].boundary);
  }
  return null;
};
var writeToStream = (dest, { body }) => {
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
};
var validateHeaderName = typeof import_http.default.validateHeaderName === "function" ? import_http.default.validateHeaderName : (name) => {
  if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
    const err = new TypeError(`Header name must be a valid HTTP token [${name}]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_HTTP_TOKEN" });
    throw err;
  }
};
var validateHeaderValue = typeof import_http.default.validateHeaderValue === "function" ? import_http.default.validateHeaderValue : (name, value) => {
  if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
    const err = new TypeError(`Invalid character in header content ["${name}"]`);
    Object.defineProperty(err, "code", { value: "ERR_INVALID_CHAR" });
    throw err;
  }
};
var Headers = class extends URLSearchParams {
  constructor(init2) {
    let result = [];
    if (init2 instanceof Headers) {
      const raw = init2.raw();
      for (const [name, values] of Object.entries(raw)) {
        result.push(...values.map((value) => [name, value]));
      }
    } else if (init2 == null)
      ;
    else if (typeof init2 === "object" && !import_util.types.isBoxedPrimitive(init2)) {
      const method = init2[Symbol.iterator];
      if (method == null) {
        result.push(...Object.entries(init2));
      } else {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        result = [...init2].map((pair) => {
          if (typeof pair !== "object" || import_util.types.isBoxedPrimitive(pair)) {
            throw new TypeError("Each header pair must be an iterable object");
          }
          return [...pair];
        }).map((pair) => {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          return [...pair];
        });
      }
    } else {
      throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");
    }
    result = result.length > 0 ? result.map(([name, value]) => {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return [String(name).toLowerCase(), String(value)];
    }) : void 0;
    super(result);
    return new Proxy(this, {
      get(target, p, receiver) {
        switch (p) {
          case "append":
          case "set":
            return (name, value) => {
              validateHeaderName(name);
              validateHeaderValue(name, String(value));
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase(), String(value));
            };
          case "delete":
          case "has":
          case "getAll":
            return (name) => {
              validateHeaderName(name);
              return URLSearchParams.prototype[p].call(receiver, String(name).toLowerCase());
            };
          case "keys":
            return () => {
              target.sort();
              return new Set(URLSearchParams.prototype.keys.call(target)).keys();
            };
          default:
            return Reflect.get(target, p, receiver);
        }
      }
    });
  }
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
  toString() {
    return Object.prototype.toString.call(this);
  }
  get(name) {
    const values = this.getAll(name);
    if (values.length === 0) {
      return null;
    }
    let value = values.join(", ");
    if (/^content-encoding$/i.test(name)) {
      value = value.toLowerCase();
    }
    return value;
  }
  forEach(callback) {
    for (const name of this.keys()) {
      callback(this.get(name), name);
    }
  }
  *values() {
    for (const name of this.keys()) {
      yield this.get(name);
    }
  }
  *entries() {
    for (const name of this.keys()) {
      yield [name, this.get(name)];
    }
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  raw() {
    return [...this.keys()].reduce((result, key) => {
      result[key] = this.getAll(key);
      return result;
    }, {});
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return [...this.keys()].reduce((result, key) => {
      const values = this.getAll(key);
      if (key === "host") {
        result[key] = values[0];
      } else {
        result[key] = values.length > 1 ? values : values[0];
      }
      return result;
    }, {});
  }
};
Object.defineProperties(Headers.prototype, ["get", "entries", "forEach", "values"].reduce((result, property) => {
  result[property] = { enumerable: true };
  return result;
}, {}));
function fromRawHeaders(headers = []) {
  return new Headers(headers.reduce((result, value, index2, array) => {
    if (index2 % 2 === 0) {
      result.push(array.slice(index2, index2 + 2));
    }
    return result;
  }, []).filter(([name, value]) => {
    try {
      validateHeaderName(name);
      validateHeaderValue(name, String(value));
      return true;
    } catch {
      return false;
    }
  }));
}
var redirectStatus = new Set([301, 302, 303, 307, 308]);
var isRedirect = (code) => {
  return redirectStatus.has(code);
};
var INTERNALS$1 = Symbol("Response internals");
var Response = class extends Body {
  constructor(body = null, options2 = {}) {
    super(body, options2);
    const status = options2.status || 200;
    const headers = new Headers(options2.headers);
    if (body !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: options2.url,
      status,
      statusText: options2.statusText || "",
      headers,
      counter: options2.counter,
      highWaterMark: options2.highWaterMark
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  get highWaterMark() {
    return this[INTERNALS$1].highWaterMark;
  }
  clone() {
    return new Response(clone(this, this.highWaterMark), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
      size: this.size
    });
  }
  static redirect(url, status = 302) {
    if (!isRedirect(status)) {
      throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
    }
    return new Response(null, {
      headers: {
        location: new URL(url).toString()
      },
      status
    });
  }
  get [Symbol.toStringTag]() {
    return "Response";
  }
};
Object.defineProperties(Response.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true }
});
var getSearch = (parsedURL) => {
  if (parsedURL.search) {
    return parsedURL.search;
  }
  const lastOffset = parsedURL.href.length - 1;
  const hash2 = parsedURL.hash || (parsedURL.href[lastOffset] === "#" ? "#" : "");
  return parsedURL.href[lastOffset - hash2.length] === "?" ? "?" : "";
};
var INTERNALS = Symbol("Request internals");
var isRequest = (object) => {
  return typeof object === "object" && typeof object[INTERNALS] === "object";
};
var Request = class extends Body {
  constructor(input, init2 = {}) {
    let parsedURL;
    if (isRequest(input)) {
      parsedURL = new URL(input.url);
    } else {
      parsedURL = new URL(input);
      input = {};
    }
    let method = init2.method || input.method || "GET";
    method = method.toUpperCase();
    if ((init2.body != null || isRequest(input)) && input.body !== null && (method === "GET" || method === "HEAD")) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    const inputBody = init2.body ? init2.body : isRequest(input) && input.body !== null ? clone(input) : null;
    super(inputBody, {
      size: init2.size || input.size || 0
    });
    const headers = new Headers(init2.headers || input.headers || {});
    if (inputBody !== null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody, this);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init2) {
      signal = init2.signal;
    }
    if (signal !== null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS] = {
      method,
      redirect: init2.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal
    };
    this.follow = init2.follow === void 0 ? input.follow === void 0 ? 20 : input.follow : init2.follow;
    this.compress = init2.compress === void 0 ? input.compress === void 0 ? true : input.compress : init2.compress;
    this.counter = init2.counter || input.counter || 0;
    this.agent = init2.agent || input.agent;
    this.highWaterMark = init2.highWaterMark || input.highWaterMark || 16384;
    this.insecureHTTPParser = init2.insecureHTTPParser || input.insecureHTTPParser || false;
  }
  get method() {
    return this[INTERNALS].method;
  }
  get url() {
    return (0, import_url.format)(this[INTERNALS].parsedURL);
  }
  get headers() {
    return this[INTERNALS].headers;
  }
  get redirect() {
    return this[INTERNALS].redirect;
  }
  get signal() {
    return this[INTERNALS].signal;
  }
  clone() {
    return new Request(this);
  }
  get [Symbol.toStringTag]() {
    return "Request";
  }
};
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true }
});
var getNodeRequestOptions = (request) => {
  const { parsedURL } = request[INTERNALS];
  const headers = new Headers(request[INTERNALS].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  let contentLengthValue = null;
  if (request.body === null && /^(post|put)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body !== null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number" && !Number.isNaN(totalBytes)) {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set("User-Agent", "node-fetch");
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate,br");
  }
  let { agent } = request;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  if (!headers.has("Connection") && !agent) {
    headers.set("Connection", "close");
  }
  const search = getSearch(parsedURL);
  const requestOptions = {
    path: parsedURL.pathname + search,
    pathname: parsedURL.pathname,
    hostname: parsedURL.hostname,
    protocol: parsedURL.protocol,
    port: parsedURL.port,
    hash: parsedURL.hash,
    search: parsedURL.search,
    query: parsedURL.query,
    href: parsedURL.href,
    method: request.method,
    headers: headers[Symbol.for("nodejs.util.inspect.custom")](),
    insecureHTTPParser: request.insecureHTTPParser,
    agent
  };
  return requestOptions;
};
var AbortError = class extends FetchBaseError {
  constructor(message, type = "aborted") {
    super(message, type);
  }
};
var supportedSchemas = new Set(["data:", "http:", "https:"]);
async function fetch(url, options_) {
  return new Promise((resolve2, reject) => {
    const request = new Request(url, options_);
    const options2 = getNodeRequestOptions(request);
    if (!supportedSchemas.has(options2.protocol)) {
      throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${options2.protocol.replace(/:$/, "")}" is not supported.`);
    }
    if (options2.protocol === "data:") {
      const data = dataUriToBuffer$1(request.url);
      const response2 = new Response(data, { headers: { "Content-Type": data.typeFull } });
      resolve2(response2);
      return;
    }
    const send = (options2.protocol === "https:" ? import_https.default : import_http.default).request;
    const { signal } = request;
    let response = null;
    const abort = () => {
      const error2 = new AbortError("The operation was aborted.");
      reject(error2);
      if (request.body && request.body instanceof import_stream.default.Readable) {
        request.body.destroy(error2);
      }
      if (!response || !response.body) {
        return;
      }
      response.body.emit("error", error2);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = () => {
      abort();
      finalize();
    };
    const request_ = send(options2);
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    const finalize = () => {
      request_.abort();
      if (signal) {
        signal.removeEventListener("abort", abortAndFinalize);
      }
    };
    request_.on("error", (err) => {
      reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, "system", err));
      finalize();
    });
    request_.on("response", (response_) => {
      request_.setTimeout(0);
      const headers = fromRawHeaders(response_.rawHeaders);
      if (isRedirect(response_.statusCode)) {
        const location = headers.get("Location");
        const locationURL = location === null ? null : new URL(location, request.url);
        switch (request.redirect) {
          case "error":
            reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, "no-redirect"));
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (error2) {
                reject(error2);
              }
            }
            break;
          case "follow": {
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(new FetchError(`maximum redirect reached at: ${request.url}`, "max-redirect"));
              finalize();
              return;
            }
            const requestOptions = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              size: request.size
            };
            if (response_.statusCode !== 303 && request.body && options_.body instanceof import_stream.default.Readable) {
              reject(new FetchError("Cannot follow redirect with body being a readable stream", "unsupported-redirect"));
              finalize();
              return;
            }
            if (response_.statusCode === 303 || (response_.statusCode === 301 || response_.statusCode === 302) && request.method === "POST") {
              requestOptions.method = "GET";
              requestOptions.body = void 0;
              requestOptions.headers.delete("content-length");
            }
            resolve2(fetch(new Request(locationURL, requestOptions)));
            finalize();
            return;
          }
        }
      }
      response_.once("end", () => {
        if (signal) {
          signal.removeEventListener("abort", abortAndFinalize);
        }
      });
      let body = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
        reject(error2);
      });
      if (process.version < "v12.10") {
        response_.on("aborted", abortAndFinalize);
      }
      const responseOptions = {
        url: request.url,
        status: response_.statusCode,
        statusText: response_.statusMessage,
        headers,
        size: request.size,
        counter: request.counter,
        highWaterMark: request.highWaterMark
      };
      const codings = headers.get("Content-Encoding");
      if (!request.compress || request.method === "HEAD" || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      const zlibOptions = {
        flush: import_zlib.default.Z_SYNC_FLUSH,
        finishFlush: import_zlib.default.Z_SYNC_FLUSH
      };
      if (codings === "gzip" || codings === "x-gzip") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createGunzip(zlibOptions), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      if (codings === "deflate" || codings === "x-deflate") {
        const raw = (0, import_stream.pipeline)(response_, new import_stream.PassThrough(), (error2) => {
          reject(error2);
        });
        raw.once("data", (chunk) => {
          if ((chunk[0] & 15) === 8) {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflate(), (error2) => {
              reject(error2);
            });
          } else {
            body = (0, import_stream.pipeline)(body, import_zlib.default.createInflateRaw(), (error2) => {
              reject(error2);
            });
          }
          response = new Response(body, responseOptions);
          resolve2(response);
        });
        return;
      }
      if (codings === "br") {
        body = (0, import_stream.pipeline)(body, import_zlib.default.createBrotliDecompress(), (error2) => {
          reject(error2);
        });
        response = new Response(body, responseOptions);
        resolve2(response);
        return;
      }
      response = new Response(body, responseOptions);
      resolve2(response);
    });
    writeToStream(request_, request);
  });
}

// .svelte-kit/output/server/app.js
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _map;
function get_single_valued_header(headers, key) {
  const value = headers[key];
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return void 0;
    }
    if (value.length > 1) {
      throw new Error(`Multiple headers provided for ${key}. Multiple may be provided only for set-cookie`);
    }
    return value[0];
  }
  return value;
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
function lowercase_keys(obj) {
  const clone2 = {};
  for (const key in obj) {
    clone2[key.toLowerCase()] = obj[key];
  }
  return clone2;
}
function error(body) {
  return {
    status: 500,
    body,
    headers: {}
  };
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
function is_content_type_textual(content_type) {
  if (!content_type)
    return true;
  const [type] = content_type.split(";");
  return type === "text/plain" || type === "application/json" || type === "application/x-www-form-urlencoded" || type === "multipart/form-data";
}
async function render_endpoint(request, route, match) {
  const mod = await route.load();
  const handler2 = mod[request.method.toLowerCase().replace("delete", "del")];
  if (!handler2) {
    return;
  }
  const params = route.params(match);
  const response = await handler2({ ...request, params });
  const preface = `Invalid response from route ${request.path}`;
  if (!response) {
    return;
  }
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  let { status = 200, body, headers = {} } = response;
  headers = lowercase_keys(headers);
  const type = get_single_valued_header(headers, "content-type");
  const is_type_textual = is_content_type_textual(type);
  if (!is_type_textual && !(body instanceof Uint8Array || is_string(body))) {
    return error(`${preface}: body must be an instance of string or Uint8Array if content-type is not a supported textual content-type`);
  }
  let normalized_body;
  if ((typeof body === "object" || typeof body === "undefined") && !(body instanceof Uint8Array) && (!type || type.startsWith("application/json"))) {
    headers = { ...headers, "content-type": "application/json; charset=utf-8" };
    normalized_body = JSON.stringify(typeof body === "undefined" ? {} : body);
  } else {
    normalized_body = body;
  }
  return { status, body: normalized_body, headers };
}
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key) {
            return walk(thing[key]);
          });
      }
    }
  }
  walk(value);
  var names = new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key) {
          return safeKey(key) + ":" + stringify(thing[key]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key) {
            statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$1) {
      result += escaped$1[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop$1() {
}
function safe_not_equal$1(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue$1 = [];
function writable$1(value, start = noop$1) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal$1(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue$1.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue$1.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue$1.length; i += 2) {
            subscriber_queue$1[i][0](subscriber_queue$1[i + 1]);
          }
          subscriber_queue$1.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop$1) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop$1;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
var s$1 = JSON.stringify;
async function render_response({
  branch,
  options: options2,
  $session,
  page_config,
  status,
  error: error2,
  page: page2
}) {
  const css2 = new Set(options2.entry.css);
  const js = new Set(options2.entry.js);
  const styles = new Set();
  const serialized_data = [];
  let rendered;
  let is_private = false;
  let maxage;
  if (error2) {
    error2.stack = options2.get_stack(error2);
  }
  if (page_config.ssr) {
    branch.forEach(({ node, loaded, fetched, uses_credentials }) => {
      if (node.css)
        node.css.forEach((url) => css2.add(url));
      if (node.js)
        node.js.forEach((url) => js.add(url));
      if (node.styles)
        node.styles.forEach((content) => styles.add(content));
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (uses_credentials)
        is_private = true;
      maxage = loaded.maxage;
    });
    const session = writable$1($session);
    const props = {
      stores: {
        page: writable$1(null),
        navigating: writable$1(null),
        session
      },
      page: page2,
      components: branch.map(({ node }) => node.module.default)
    };
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    let session_tracking_active = false;
    const unsubscribe = session.subscribe(() => {
      if (session_tracking_active)
        is_private = true;
    });
    session_tracking_active = true;
    try {
      rendered = options2.root.render(props);
    } finally {
      unsubscribe();
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  const include_js = page_config.router || page_config.hydrate;
  if (!include_js)
    js.clear();
  const links = options2.amp ? styles.size > 0 || rendered.css.code.length > 0 ? `<style amp-custom>${Array.from(styles).concat(rendered.css.code).join("\n")}</style>` : "" : [
    ...Array.from(js).map((dep) => `<link rel="modulepreload" href="${dep}">`),
    ...Array.from(css2).map((dep) => `<link rel="stylesheet" href="${dep}">`)
  ].join("\n		");
  let init2 = "";
  if (options2.amp) {
    init2 = `
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
		<noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
		<script async src="https://cdn.ampproject.org/v0.js"><\/script>`;
  } else if (include_js) {
    init2 = `<script type="module">
			import { start } from ${s$1(options2.entry.file)};
			start({
				target: ${options2.target ? `document.querySelector(${s$1(options2.target)})` : "document.body"},
				paths: ${s$1(options2.paths)},
				session: ${try_serialize($session, (error3) => {
      throw new Error(`Failed to serialize session data: ${error3.message}`);
    })},
				host: ${page2 && page2.host ? s$1(page2.host) : "location.host"},
				route: ${!!page_config.router},
				spa: ${!page_config.ssr},
				trailing_slash: ${s$1(options2.trailing_slash)},
				hydrate: ${page_config.ssr && page_config.hydrate ? `{
					status: ${status},
					error: ${serialize_error(error2)},
					nodes: [
						${(branch || []).map(({ node }) => `import(${s$1(node.entry)})`).join(",\n						")}
					],
					page: {
						host: ${page2 && page2.host ? s$1(page2.host) : "location.host"}, // TODO this is redundant
						path: ${s$1(page2 && page2.path)},
						query: new URLSearchParams(${page2 ? s$1(page2.query.toString()) : ""}),
						params: ${page2 && s$1(page2.params)}
					}
				}` : "null"}
			});
		<\/script>`;
  }
  if (options2.service_worker) {
    init2 += `<script>
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('${options2.service_worker}');
			}
		<\/script>`;
  }
  const head = [
    rendered.head,
    styles.size && !options2.amp ? `<style data-svelte>${Array.from(styles).join("\n")}</style>` : "",
    links,
    init2
  ].join("\n\n		");
  const body = options2.amp ? rendered.html : `${rendered.html}

			${serialized_data.map(({ url, body: body2, json }) => {
    let attributes = `type="application/json" data-type="svelte-data" data-url="${url}"`;
    if (body2)
      attributes += ` data-body="${hash(body2)}"`;
    return `<script ${attributes}>${json}<\/script>`;
  }).join("\n\n	")}
		`;
  const headers = {
    "content-type": "text/html"
  };
  if (maxage) {
    headers["cache-control"] = `${is_private ? "private" : "public"}, max-age=${maxage}`;
  }
  if (!options2.floc) {
    headers["permissions-policy"] = "interest-cohort=()";
  }
  return {
    status,
    headers,
    body: options2.template({ head, body })
  };
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
function serialize_error(error2) {
  if (!error2)
    return null;
  let serialized = try_serialize(error2);
  if (!serialized) {
    const { name, message, stack } = error2;
    serialized = try_serialize({ ...error2, name, message, stack });
  }
  if (!serialized) {
    serialized = "{}";
  }
  return serialized;
}
function normalize(loaded) {
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error()
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`)
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')
      };
    }
    if (typeof loaded.redirect !== "string") {
      return {
        status: 500,
        error: new Error('"redirect" property returned from load() must be a string')
      };
    }
  }
  if (loaded.context) {
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  }
  return loaded;
}
var s = JSON.stringify;
async function load_node({
  request,
  options: options2,
  state,
  route,
  page: page2,
  node,
  $session,
  stuff,
  prerender_enabled,
  is_leaf,
  is_error,
  status,
  error: error2
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  let set_cookie_headers = [];
  let loaded;
  const page_proxy = new Proxy(page2, {
    get: (target, prop, receiver) => {
      if (prop === "query" && prerender_enabled) {
        throw new Error("Cannot access query on a page with prerendering enabled");
      }
      return Reflect.get(target, prop, receiver);
    }
  });
  if (module2.load) {
    const load_input = {
      page: page_proxy,
      get session() {
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let url;
        if (typeof resource === "string") {
          url = resource;
        } else {
          url = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        const resolved = resolve(request.path, url.split("?")[0]);
        let response;
        const filename = resolved.replace(options2.paths.assets, "").slice(1);
        const filename_html = `${filename}/index.html`;
        const asset = options2.manifest.assets.find((d2) => d2.file === filename || d2.file === filename_html);
        if (asset) {
          response = options2.read ? new Response(options2.read(asset.file), {
            headers: asset.type ? { "content-type": asset.type } : {}
          }) : await fetch(`http://${page2.host}/${asset.file}`, opts);
        } else if (resolved.startsWith("/") && !resolved.startsWith("//")) {
          const relative = resolved;
          const headers = {
            ...opts.headers
          };
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            headers.cookie = request.headers.cookie;
            if (!headers.authorization) {
              headers.authorization = request.headers.authorization;
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          const search = url.includes("?") ? url.slice(url.indexOf("?") + 1) : "";
          const rendered = await respond({
            host: request.host,
            method: opts.method || "GET",
            headers,
            path: relative,
            rawBody: opts.body == null ? null : new TextEncoder().encode(opts.body),
            query: new URLSearchParams(search)
          }, options2, {
            fetched: url,
            initiator: route
          });
          if (rendered) {
            if (state.prerender) {
              state.prerender.dependencies.set(relative, rendered);
            }
            response = new Response(rendered.body, {
              status: rendered.status,
              headers: rendered.headers
            });
          }
        } else {
          if (resolved.startsWith("//")) {
            throw new Error(`Cannot request protocol-relative URL (${url}) in server-side fetch`);
          }
          if (typeof request.host !== "undefined") {
            const { hostname: fetch_hostname } = new URL(url);
            const [server_hostname] = request.host.split(":");
            if (`.${fetch_hostname}`.endsWith(`.${server_hostname}`) && opts.credentials !== "omit") {
              uses_credentials = true;
              opts.headers = {
                ...opts.headers,
                cookie: request.headers.cookie
              };
            }
          }
          const external_request = new Request(url, opts);
          response = await options2.hooks.externalFetch.call(null, external_request);
        }
        if (response) {
          const proxy = new Proxy(response, {
            get(response2, key, receiver) {
              async function text() {
                const body = await response2.text();
                const headers = {};
                for (const [key2, value] of response2.headers) {
                  if (key2 === "set-cookie") {
                    set_cookie_headers = set_cookie_headers.concat(value);
                  } else if (key2 !== "etag") {
                    headers[key2] = value;
                  }
                }
                if (!opts.body || typeof opts.body === "string") {
                  fetched.push({
                    url,
                    body: opts.body,
                    json: `{"status":${response2.status},"statusText":${s(response2.statusText)},"headers":${s(headers)},"body":${escape$1(body)}}`
                  });
                }
                return body;
              }
              if (key === "text") {
                return text;
              }
              if (key === "json") {
                return async () => {
                  return JSON.parse(await text());
                };
              }
              return Reflect.get(response2, key, response2);
            }
          });
          return proxy;
        }
        return response || new Response("Not found", {
          status: 404
        });
      },
      stuff: { ...stuff }
    };
    if (is_error) {
      load_input.status = status;
      load_input.error = error2;
    }
    loaded = await module2.load.call(null, load_input);
  } else {
    loaded = {};
  }
  if (!loaded && is_leaf && !is_error)
    return;
  if (!loaded) {
    throw new Error(`${node.entry} - load must return a value except for page fall through`);
  }
  return {
    node,
    loaded: normalize(loaded),
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers,
    uses_credentials
  };
}
var escaped$2 = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
function escape$1(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped$2) {
      result += escaped$2[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
var absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
async function respond_with_error({ request, options: options2, state, $session, status, error: error2 }) {
  const default_layout = await options2.load_component(options2.manifest.layout);
  const default_error = await options2.load_component(options2.manifest.error);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params: {}
  };
  const loaded = await load_node({
    request,
    options: options2,
    state,
    route: null,
    page: page2,
    node: default_layout,
    $session,
    stuff: {},
    prerender_enabled: is_prerender_enabled(options2, default_error, state),
    is_leaf: false,
    is_error: false
  });
  const branch = [
    loaded,
    await load_node({
      request,
      options: options2,
      state,
      route: null,
      page: page2,
      node: default_error,
      $session,
      stuff: loaded ? loaded.stuff : {},
      prerender_enabled: is_prerender_enabled(options2, default_error, state),
      is_leaf: false,
      is_error: true,
      status,
      error: error2
    })
  ];
  try {
    return await render_response({
      options: options2,
      $session,
      page_config: {
        hydrate: options2.hydrate,
        router: options2.router,
        ssr: options2.ssr
      },
      status,
      error: error2,
      branch,
      page: page2
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return {
      status: 500,
      headers: {},
      body: error3.stack
    };
  }
}
function is_prerender_enabled(options2, node, state) {
  return options2.prerender && (!!node.module.prerender || !!state.prerender && state.prerender.all);
}
async function respond$1(opts) {
  const { request, options: options2, state, $session, route } = opts;
  let nodes;
  try {
    nodes = await Promise.all(route.a.map((id) => id ? options2.load_component(id) : void 0));
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return await respond_with_error({
      request,
      options: options2,
      state,
      $session,
      status: 500,
      error: error3
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options2);
  if (!leaf.prerender && state.prerender && !state.prerender.all) {
    return {
      status: 204,
      headers: {},
      body: ""
    };
  }
  let branch = [];
  let status = 200;
  let error2;
  let set_cookie_headers = [];
  ssr:
    if (page_config.ssr) {
      let stuff = {};
      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i];
        let loaded;
        if (node) {
          try {
            loaded = await load_node({
              ...opts,
              node,
              stuff,
              prerender_enabled: is_prerender_enabled(options2, node, state),
              is_leaf: i === nodes.length - 1,
              is_error: false
            });
            if (!loaded)
              return;
            set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
            if (loaded.loaded.redirect) {
              return with_cookies({
                status: loaded.loaded.status,
                headers: {
                  location: encodeURI(loaded.loaded.redirect)
                }
              }, set_cookie_headers);
            }
            if (loaded.loaded.error) {
              ({ status, error: error2 } = loaded.loaded);
            }
          } catch (err) {
            const e = coalesce_to_error(err);
            options2.handle_error(e, request);
            status = 500;
            error2 = e;
          }
          if (loaded && !error2) {
            branch.push(loaded);
          }
          if (error2) {
            while (i--) {
              if (route.b[i]) {
                const error_node = await options2.load_component(route.b[i]);
                let node_loaded;
                let j = i;
                while (!(node_loaded = branch[j])) {
                  j -= 1;
                }
                try {
                  const error_loaded = await load_node({
                    ...opts,
                    node: error_node,
                    stuff: node_loaded.stuff,
                    prerender_enabled: is_prerender_enabled(options2, error_node, state),
                    is_leaf: false,
                    is_error: true,
                    status,
                    error: error2
                  });
                  if (error_loaded.loaded.error) {
                    continue;
                  }
                  page_config = get_page_config(error_node.module, options2);
                  branch = branch.slice(0, j + 1).concat(error_loaded);
                  break ssr;
                } catch (err) {
                  const e = coalesce_to_error(err);
                  options2.handle_error(e, request);
                  continue;
                }
              }
            }
            return with_cookies(await respond_with_error({
              request,
              options: options2,
              state,
              $session,
              status,
              error: error2
            }), set_cookie_headers);
          }
        }
        if (loaded && loaded.loaded.stuff) {
          stuff = {
            ...stuff,
            ...loaded.loaded.stuff
          };
        }
      }
    }
  try {
    return with_cookies(await render_response({
      ...opts,
      page_config,
      status,
      error: error2,
      branch: branch.filter(Boolean)
    }), set_cookie_headers);
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options2.handle_error(error3, request);
    return with_cookies(await respond_with_error({
      ...opts,
      status: 500,
      error: error3
    }), set_cookie_headers);
  }
}
function get_page_config(leaf, options2) {
  return {
    ssr: "ssr" in leaf ? !!leaf.ssr : options2.ssr,
    router: "router" in leaf ? !!leaf.router : options2.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options2.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    response.headers["set-cookie"] = set_cookie_headers;
  }
  return response;
}
async function render_page(request, route, match, options2, state) {
  if (state.initiator === route) {
    return {
      status: 404,
      headers: {},
      body: `Not found: ${request.path}`
    };
  }
  const params = route.params(match);
  const page2 = {
    host: request.host,
    path: request.path,
    query: request.query,
    params
  };
  const $session = await options2.hooks.getSession(request);
  const response = await respond$1({
    request,
    options: options2,
    state,
    $session,
    route,
    page: page2
  });
  if (response) {
    return response;
  }
  if (state.fetched) {
    return {
      status: 500,
      headers: {},
      body: `Bad request in load function: failed to fetch ${state.fetched}`
    };
  }
}
function read_only_form_data() {
  const map = new Map();
  return {
    append(key, value) {
      if (map.has(key)) {
        (map.get(key) || []).push(value);
      } else {
        map.set(key, [value]);
      }
    },
    data: new ReadOnlyFormData(map)
  };
}
var ReadOnlyFormData = class {
  constructor(map) {
    __privateAdd(this, _map, void 0);
    __privateSet(this, _map, map);
  }
  get(key) {
    const value = __privateGet(this, _map).get(key);
    return value && value[0];
  }
  getAll(key) {
    return __privateGet(this, _map).get(key);
  }
  has(key) {
    return __privateGet(this, _map).has(key);
  }
  *[Symbol.iterator]() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *entries() {
    for (const [key, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield [key, value[i]];
      }
    }
  }
  *keys() {
    for (const [key] of __privateGet(this, _map))
      yield key;
  }
  *values() {
    for (const [, value] of __privateGet(this, _map)) {
      for (let i = 0; i < value.length; i += 1) {
        yield value[i];
      }
    }
  }
};
_map = new WeakMap();
function parse_body(raw, headers) {
  if (!raw)
    return raw;
  const content_type = headers["content-type"];
  const [type, ...directives] = content_type ? content_type.split(/;\s*/) : [];
  const text = () => new TextDecoder(headers["content-encoding"] || "utf-8").decode(raw);
  switch (type) {
    case "text/plain":
      return text();
    case "application/json":
      return JSON.parse(text());
    case "application/x-www-form-urlencoded":
      return get_urlencoded(text());
    case "multipart/form-data": {
      const boundary = directives.find((directive) => directive.startsWith("boundary="));
      if (!boundary)
        throw new Error("Missing boundary");
      return get_multipart(text(), boundary.slice("boundary=".length));
    }
    default:
      return raw;
  }
}
function get_urlencoded(text) {
  const { data, append } = read_only_form_data();
  text.replace(/\+/g, " ").split("&").forEach((str) => {
    const [key, value] = str.split("=");
    append(decodeURIComponent(key), decodeURIComponent(value));
  });
  return data;
}
function get_multipart(text, boundary) {
  const parts = text.split(`--${boundary}`);
  if (parts[0] !== "" || parts[parts.length - 1].trim() !== "--") {
    throw new Error("Malformed form data");
  }
  const { data, append } = read_only_form_data();
  parts.slice(1, -1).forEach((part) => {
    const match = /\s*([\s\S]+?)\r\n\r\n([\s\S]*)\s*/.exec(part);
    if (!match) {
      throw new Error("Malformed form data");
    }
    const raw_headers = match[1];
    const body = match[2].trim();
    let key;
    const headers = {};
    raw_headers.split("\r\n").forEach((str) => {
      const [raw_header, ...raw_directives] = str.split("; ");
      let [name, value] = raw_header.split(": ");
      name = name.toLowerCase();
      headers[name] = value;
      const directives = {};
      raw_directives.forEach((raw_directive) => {
        const [name2, value2] = raw_directive.split("=");
        directives[name2] = JSON.parse(value2);
      });
      if (name === "content-disposition") {
        if (value !== "form-data")
          throw new Error("Malformed form data");
        if (directives.filename) {
          throw new Error("File upload is not yet implemented");
        }
        if (directives.name) {
          key = directives.name;
        }
      }
    });
    if (!key)
      throw new Error("Malformed form data");
    append(key, body);
  });
  return data;
}
async function respond(incoming, options2, state = {}) {
  if (incoming.path !== "/" && options2.trailing_slash !== "ignore") {
    const has_trailing_slash = incoming.path.endsWith("/");
    if (has_trailing_slash && options2.trailing_slash === "never" || !has_trailing_slash && options2.trailing_slash === "always" && !(incoming.path.split("/").pop() || "").includes(".")) {
      const path = has_trailing_slash ? incoming.path.slice(0, -1) : incoming.path + "/";
      const q = incoming.query.toString();
      return {
        status: 301,
        headers: {
          location: options2.paths.base + path + (q ? `?${q}` : "")
        }
      };
    }
  }
  const headers = lowercase_keys(incoming.headers);
  const request = {
    ...incoming,
    headers,
    body: parse_body(incoming.rawBody, headers),
    params: {},
    locals: {}
  };
  try {
    return await options2.hooks.handle({
      request,
      resolve: async (request2) => {
        if (state.prerender && state.prerender.fallback) {
          return await render_response({
            options: options2,
            $session: await options2.hooks.getSession(request2),
            page_config: { ssr: false, router: true, hydrate: true },
            status: 200,
            branch: []
          });
        }
        const decoded = decodeURI(request2.path);
        for (const route of options2.manifest.routes) {
          const match = route.pattern.exec(decoded);
          if (!match)
            continue;
          const response = route.type === "endpoint" ? await render_endpoint(request2, route, match) : await render_page(request2, route, match, options2, state);
          if (response) {
            if (response.status === 200) {
              const cache_control = get_single_valued_header(response.headers, "cache-control");
              if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
                const etag = `"${hash(response.body || "")}"`;
                if (request2.headers["if-none-match"] === etag) {
                  return {
                    status: 304,
                    headers: {},
                    body: ""
                  };
                }
                response.headers["etag"] = etag;
              }
            }
            return response;
          }
        }
        const $session = await options2.hooks.getSession(request2);
        return await respond_with_error({
          request: request2,
          options: options2,
          state,
          $session,
          status: 404,
          error: new Error(`Not found: ${request2.path}`)
        });
      }
    });
  } catch (err) {
    const e = coalesce_to_error(err);
    options2.handle_error(e, request);
    return {
      status: 500,
      headers: {},
      body: options2.dev ? e.stack : e.message
    };
  }
}
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
function set_store_value(store, ret, value) {
  store.set(value);
  return ret;
}
function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onDestroy(fn) {
  get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
function setContext(key, context) {
  get_current_component().$$.context.set(key, context);
}
function getContext(key) {
  return get_current_component().$$.context.get(key);
}
Promise.resolve();
var escaped = {
  '"': "&quot;",
  "'": "&#39;",
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;"
};
function escape(html) {
  return String(html).replace(/["'&<>]/g, (match) => escaped[match]);
}
function each(items, fn) {
  let str = "";
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
var missing_component = {
  $$render: () => ""
};
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
var on_destroy;
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  return ` ${name}${value === true ? "" : `=${typeof value === "string" ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function afterUpdate() {
}
var css$2 = {
  code: "#svelte-announcer.svelte-1pdgbjn{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}",
  map: `{"version":3,"file":"root.svelte","sources":["root.svelte"],"sourcesContent":["<!-- This file is generated by @sveltejs/kit \u2014 do not edit it! -->\\n<script>\\n\\timport { setContext, afterUpdate, onMount } from 'svelte';\\n\\n\\t// stores\\n\\texport let stores;\\n\\texport let page;\\n\\n\\texport let components;\\n\\texport let props_0 = null;\\n\\texport let props_1 = null;\\n\\texport let props_2 = null;\\n\\n\\tsetContext('__svelte__', stores);\\n\\n\\t$: stores.page.set(page);\\n\\tafterUpdate(stores.page.notify);\\n\\n\\tlet mounted = false;\\n\\tlet navigated = false;\\n\\tlet title = null;\\n\\n\\tonMount(() => {\\n\\t\\tconst unsubscribe = stores.page.subscribe(() => {\\n\\t\\t\\tif (mounted) {\\n\\t\\t\\t\\tnavigated = true;\\n\\t\\t\\t\\ttitle = document.title || 'untitled page';\\n\\t\\t\\t}\\n\\t\\t});\\n\\n\\t\\tmounted = true;\\n\\t\\treturn unsubscribe;\\n\\t});\\n<\/script>\\n\\n<svelte:component this={components[0]} {...(props_0 || {})}>\\n\\t{#if components[1]}\\n\\t\\t<svelte:component this={components[1]} {...(props_1 || {})}>\\n\\t\\t\\t{#if components[2]}\\n\\t\\t\\t\\t<svelte:component this={components[2]} {...(props_2 || {})}/>\\n\\t\\t\\t{/if}\\n\\t\\t</svelte:component>\\n\\t{/if}\\n</svelte:component>\\n\\n{#if mounted}\\n\\t<div id=\\"svelte-announcer\\" aria-live=\\"assertive\\" aria-atomic=\\"true\\">\\n\\t\\t{#if navigated}\\n\\t\\t\\t{title}\\n\\t\\t{/if}\\n\\t</div>\\n{/if}\\n\\n<style>#svelte-announcer{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;left:0;overflow:hidden;position:absolute;top:0;white-space:nowrap;width:1px}</style>"],"names":[],"mappings":"AAqDO,gCAAiB,CAAC,KAAK,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,kBAAkB,MAAM,GAAG,CAAC,CAAC,UAAU,MAAM,GAAG,CAAC,CAAC,OAAO,GAAG,CAAC,KAAK,CAAC,CAAC,SAAS,MAAM,CAAC,SAAS,QAAQ,CAAC,IAAI,CAAC,CAAC,YAAY,MAAM,CAAC,MAAM,GAAG,CAAC"}`
};
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  $$result.css.add(css$2);
  {
    stores.page.set(page2);
  }
  return `


${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => `${components[1] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
      default: () => `${components[2] ? `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}` : ``}`
    })}` : ``}`
  })}

${``}`;
});
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
function set_prerendering(value) {
}
var user_hooks = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
var template = ({ head, body }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="/favicon.ico" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body>\n		<div id="svelte">' + body + "</div>\n	</body>\n</html>\n";
var options = null;
var default_settings = { paths: { "base": "", "assets": "" } };
function init(settings = default_settings) {
  set_paths(settings.paths);
  set_prerendering(settings.prerendering || false);
  const hooks = get_hooks(user_hooks);
  options = {
    amp: false,
    dev: false,
    entry: {
      file: assets + "/_app/start-16552aea.js",
      css: [assets + "/_app/assets/start-464e9d0a.css"],
      js: [assets + "/_app/start-16552aea.js", assets + "/_app/chunks/vendor-8fe9a59e.js", assets + "/_app/chunks/singletons-12a22614.js"]
    },
    fetched: void 0,
    floc: false,
    get_component_path: (id) => assets + "/_app/" + entry_lookup[id],
    get_stack: (error2) => String(error2),
    handle_error: (error2, request) => {
      hooks.handleError({ error: error2, request });
      error2.stack = options.get_stack(error2);
    },
    hooks,
    hydrate: true,
    initiator: void 0,
    load_component,
    manifest,
    paths: settings.paths,
    prerender: true,
    read: settings.read,
    root: Root,
    service_worker: null,
    router: true,
    ssr: true,
    target: "#svelte",
    template,
    trailing_slash: "never"
  };
}
var d = (s2) => s2.replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
var empty = () => ({});
var manifest = {
  assets: [{ "file": "default.jpg", "size": 30844, "type": "image/jpeg" }, { "file": "favicon.ico", "size": 1150, "type": "image/vnd.microsoft.icon" }, { "file": "icons8-moon-60.png", "size": 1338, "type": "image/png" }, { "file": "icons8-sun-24.png", "size": 423, "type": "image/png" }, { "file": "icons8-sun-48.png", "size": 2286, "type": "image/png" }, { "file": "icons8-sun.svg", "size": 973, "type": "image/svg+xml" }, { "file": "person.svg", "size": 2693, "type": "image/svg+xml" }, { "file": "robots.txt", "size": 67, "type": "text/plain" }, { "file": "testl.d.ts", "size": 4087, "type": "video/mp2t" }],
  layout: "src/routes/__layout.svelte",
  error: "src/routes/__error.svelte",
  routes: [
    {
      type: "page",
      pattern: /^\/$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/NotFound\/?$/,
      params: empty,
      a: ["src/routes/__layout.svelte", "src/routes/NotFound.svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/episode\/([^/]+?)\/([^/]+?)\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]), season_number: d(m[2]), episode_number: d(m[3]) }),
      a: ["src/routes/__layout.svelte", "src/routes/episode/[id]/[season_number]/[episode_number].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/seasons\/([^/]+?)\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]), season_number: d(m[2]) }),
      a: ["src/routes/__layout.svelte", "src/routes/seasons/[id]/[season_number].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/person\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/person/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/search\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/search/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/genre\/movie\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/genre/movie/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/genre\/tv\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/genre/tv/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/movie\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/movie/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    },
    {
      type: "page",
      pattern: /^\/tv\/([^/]+?)\/?$/,
      params: (m) => ({ id: d(m[1]) }),
      a: ["src/routes/__layout.svelte", "src/routes/tv/[id].svelte"],
      b: ["src/routes/__error.svelte"]
    }
  ]
};
var get_hooks = (hooks) => ({
  getSession: hooks.getSession || (() => ({})),
  handle: hooks.handle || (({ request, resolve: resolve2 }) => resolve2(request)),
  handleError: hooks.handleError || (({ error: error2 }) => console.error(error2.stack)),
  externalFetch: hooks.externalFetch || fetch
});
var module_lookup = {
  "src/routes/__layout.svelte": () => Promise.resolve().then(function() {
    return __layout;
  }),
  "src/routes/__error.svelte": () => Promise.resolve().then(function() {
    return __error;
  }),
  "src/routes/index.svelte": () => Promise.resolve().then(function() {
    return index;
  }),
  "src/routes/NotFound.svelte": () => Promise.resolve().then(function() {
    return NotFound$1;
  }),
  "src/routes/episode/[id]/[season_number]/[episode_number].svelte": () => Promise.resolve().then(function() {
    return _episode_number_;
  }),
  "src/routes/seasons/[id]/[season_number].svelte": () => Promise.resolve().then(function() {
    return _season_number_;
  }),
  "src/routes/person/[id].svelte": () => Promise.resolve().then(function() {
    return _id_$5;
  }),
  "src/routes/search/[id].svelte": () => Promise.resolve().then(function() {
    return _id_$4;
  }),
  "src/routes/genre/movie/[id].svelte": () => Promise.resolve().then(function() {
    return _id_$3;
  }),
  "src/routes/genre/tv/[id].svelte": () => Promise.resolve().then(function() {
    return _id_$2;
  }),
  "src/routes/movie/[id].svelte": () => Promise.resolve().then(function() {
    return _id_$1;
  }),
  "src/routes/tv/[id].svelte": () => Promise.resolve().then(function() {
    return _id_;
  })
};
var metadata_lookup = { "src/routes/__layout.svelte": { "entry": "pages/__layout.svelte-059797b0.js", "css": ["assets/pages/__layout.svelte-87c9195c.css"], "js": ["pages/__layout.svelte-059797b0.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/singletons-12a22614.js"], "styles": [] }, "src/routes/__error.svelte": { "entry": "pages/__error.svelte-a82205d1.js", "css": ["assets/pages/__error.svelte-8a5069d9.css"], "js": ["pages/__error.svelte-a82205d1.js", "chunks/vendor-8fe9a59e.js"], "styles": [] }, "src/routes/index.svelte": { "entry": "pages/index.svelte-17c00717.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/index.svelte-17c00717.js", "chunks/vendor-8fe9a59e.js", "chunks/MainSection-5ed8f046.js", "chunks/store-892411d9.js", "chunks/Spinner-5ae9cd83.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/NotFound.svelte": { "entry": "pages/NotFound.svelte-1e2d7744.js", "css": [], "js": ["pages/NotFound.svelte-1e2d7744.js", "chunks/vendor-8fe9a59e.js"], "styles": [] }, "src/routes/episode/[id]/[season_number]/[episode_number].svelte": { "entry": "pages/episode/[id]/[season_number]/[episode_number].svelte-f3aaf948.js", "css": [], "js": ["pages/episode/[id]/[season_number]/[episode_number].svelte-f3aaf948.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/seasons/[id]/[season_number].svelte": { "entry": "pages/seasons/[id]/[season_number].svelte-22abc6de.js", "css": [], "js": ["pages/seasons/[id]/[season_number].svelte-22abc6de.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/person/[id].svelte": { "entry": "pages/person/[id].svelte-88649804.js", "css": [], "js": ["pages/person/[id].svelte-88649804.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/search/[id].svelte": { "entry": "pages/search/[id].svelte-77987a82.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/search/[id].svelte-77987a82.js", "chunks/vendor-8fe9a59e.js", "chunks/MainSection-5ed8f046.js", "chunks/store-892411d9.js", "chunks/Spinner-5ae9cd83.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/genre/movie/[id].svelte": { "entry": "pages/genre/movie/[id].svelte-192f7e60.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/genre/movie/[id].svelte-192f7e60.js", "chunks/vendor-8fe9a59e.js", "chunks/MainSection-5ed8f046.js", "chunks/store-892411d9.js", "chunks/Spinner-5ae9cd83.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/genre/tv/[id].svelte": { "entry": "pages/genre/tv/[id].svelte-3608d970.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/genre/tv/[id].svelte-3608d970.js", "chunks/vendor-8fe9a59e.js", "chunks/MainSection-5ed8f046.js", "chunks/store-892411d9.js", "chunks/Spinner-5ae9cd83.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/movie/[id].svelte": { "entry": "pages/movie/[id].svelte-b0eeac15.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/movie/[id].svelte-b0eeac15.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/Spinner-5ae9cd83.js", "chunks/Cast-72e210fe.js", "chunks/stores-d4b77a7d.js"], "styles": [] }, "src/routes/tv/[id].svelte": { "entry": "pages/tv/[id].svelte-948ed61e.js", "css": ["assets/Spinner-11011231.css"], "js": ["pages/tv/[id].svelte-948ed61e.js", "chunks/vendor-8fe9a59e.js", "chunks/store-892411d9.js", "chunks/stores-d4b77a7d.js", "chunks/Spinner-5ae9cd83.js", "chunks/Cast-72e210fe.js"], "styles": [] } };
async function load_component(file) {
  const { entry, css: css2, js, styles } = metadata_lookup[file];
  return {
    module: await module_lookup[file](),
    entry: assets + "/_app/" + entry,
    css: css2.map((dep) => assets + "/_app/" + dep),
    js: js.map((dep) => assets + "/_app/" + dep),
    styles
  };
}
function render(request, {
  prerender
} = {}) {
  const host = request.headers["host"];
  return respond({ ...request, host }, options, { prerender });
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
var current_page = writable(1);
var media_type = writable("movie");
var tv_genres = writable({});
var movie_genres = writable({});
var selected = writable(null);
var show_name = writable("");
var season_count = writable(0);
var show_id = writable(0);
var ApiKey = readable("61e588d14c9ac42a437e560cc3d65659", () => {
});
var Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchTerm;
  return `<section id="${"search"}"><form class="${"flex justify-end items-center pr-0.5"}" label="${"search form"}"><input label="${"search"}" class="${"bg-transparent w-24 xl:w-48 h-7 rounded-full text-l px-2 text-skin-muted placeholder-text-skin-base::placeholder border-2 border-skin-border"}" type="${"text"}" placeholder="${"Search..."}"${add_attribute("value", searchTerm, 0)}></form></section>`;
});
var Genre = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movie_genres, $$unsubscribe_movie_genres;
  let $selected, $$unsubscribe_selected;
  let $media_type, $$unsubscribe_media_type;
  let $tv_genres, $$unsubscribe_tv_genres;
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_movie_genres();
  $$unsubscribe_selected();
  $$unsubscribe_media_type();
  $$unsubscribe_tv_genres();
  return `<div class="${"bg-skin-primary w-full xl:w-96"}"><p class="${"py-0.5 justify-center bg-skin-bg"}"></p>
	<h4 class="${"uppercase items-center flex justify-center text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>Movies
	</h4>
	<p class="${"py-0.5 justify-center bg-skin-inverted"}"></p>
	<ul class="${"flex flex-wrap justify-center"}">${each($movie_genres, (genre, i) => `<li class="${"flex"}"><button${add_attribute("aria-label", genre.name, 0)} class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "movie" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
				${i !== $movie_genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}
			</li>`)}</ul>
	<p class="${"py-0.5 justify-center bg-skin-bg"}"></p>
	<h4 class="${"uppercase items-center flex justify-center text-skin-base"}"><span class="${"mr-2"}"><i class="${"fa fa-tv"}" aria-hidden="${"true"}"></i></span>Tv
	</h4>
	<p class="${"py-0.5 justify-center text-skin-base"}"></p>
	<ul class="${"flex flex-wrap justify-center"}">${each($tv_genres, (genre, j) => `<li class="${"flex"}"><button class="${[
    "hover:bg-skin-bg p-1 block text-skin-base whitespace-nowrap",
    $selected === genre.id && $media_type === "tv" ? "bg-selected" : ""
  ].join(" ").trim()}">${escape(genre.name)}</button>
				${j !== $tv_genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}
			</li>`)}</ul></div>`;
});
var Selector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_current_page;
  let $$unsubscribe_selected;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_current_page = subscribe(current_page, (value) => value);
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  $$unsubscribe_media_type();
  $$unsubscribe_current_page();
  $$unsubscribe_selected();
  return `<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Movies"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "movie" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-video-camera"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Movies</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"TV Shows"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "tv" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-television"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">Tv</span></button></div></div>

<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"People"}" class="${[
    "text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected",
    $media_type === "person" ? "text-skin-selected" : ""
  ].join(" ").trim()}"><span><i class="${"fa fa-user"}" aria-hidden="${"true"}"></i></span>
			<span class="${"hidden xl:block mx-2"}">People</span></button></div></div>
<div class="${"pl-6 xl:pl-8 "}"><div class="${"group inline-block relative z-50"}"><button aria-label="${"Genres"}" class="${"text-skin-base font-semibold py-2 rounded inline-flex items-center hover:text-skin-selected"}"><span><i class="${"fa fa-tag"}" aria-hidden="${"true"}"></i></span>
				<span class="${"hidden xl:block mx-2"}">Genres</span></button>
			<ul class="${"rounded xl:absolute fixed left-0 hidden bg-skin-primary text-skin-base pt-4 group-hover:block"}">${validate_component(Genre, "Genre").$$render($$result, {}, {}, {})}</ul></div></div>`;
});
function _theme() {
  const { set, subscribe: subscribe2 } = writable("");
  return {
    subscribe: subscribe2,
    update: (theme2) => get_store_value(theme2),
    get: (theme2) => get_store_value(theme2),
    set: (theme2) => {
      return;
    },
    init: () => {
      return;
    },
    reset: () => {
      set(void 0);
    }
  };
}
var theme = _theme();
var ToggleDarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$unsubscribe_theme();
  return `<button class="${"text-skin-base"}"><div class="${"text-skin-base mr-2 flex text-lg px-3 py-2 rounded-lg border border-transparent focus:outline-none"}" aria-label="${"Toggle Light and Dark mode"}">${$theme === "dark" ? `<img class="${"h-8 w-8"}" src="${"/icons8-sun-48.png"}" alt="${"profile"}">` : `<div class="${"h-6 w-6"}"><img src="${"/icons8-moon-60.png"}" alt="${"light mode"}"></div>`}</div></button>`;
});
var Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="${"bg-skin-secondary"}"><div class="${"max-w-7xl mx-auto flex justify-between pl-2 md:pl-5 lg:pl-7 pr-1 items-center h-10"}"><div class="${"flex flex-row items-center"}"><a class="${"text-3xl text-skin-base hover:text-skin-selected"}" href="${"/"}"><i class="${"fa fa-home"}"></i></a>
			${validate_component(Selector, "Selector").$$render($$result, {}, {}, {})}</div>
		${validate_component(ToggleDarkMode, "ToggleDarkMode").$$render($$result, {}, {}, {})}
		${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div></header>`;
});
var __awaiter$5 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var GENRES_MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=${get_store_value(ApiKey)}&language-en-GB`;
var GENRES_TV_API = `https://api.themoviedb.org/3/genre/tv/list?api_key=${get_store_value(ApiKey)}&language-en-GB`;
var load$6 = ({ fetch: fetch2 }) => __awaiter$5(void 0, void 0, void 0, function* () {
  const res_mov = yield fetch2(GENRES_MOVIE_API);
  const res_mov_json = yield res_mov.json();
  let movie_genre = res_mov_json.genres;
  const res_tv = yield fetch2(GENRES_TV_API);
  const res_tv_json = yield res_tv.json();
  let tv_genre = res_tv_json.genres;
  return { props: { tv_genre, movie_genre } };
});
var _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $movie_genres, $$unsubscribe_movie_genres;
  let $tv_genres, $$unsubscribe_tv_genres;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { tv_genre } = $$props;
  let { movie_genre } = $$props;
  theme.init();
  set_store_value(tv_genres, $tv_genres = tv_genre, $tv_genres);
  set_store_value(movie_genres, $movie_genres = movie_genre, $movie_genres);
  if ($$props.tv_genre === void 0 && $$bindings.tv_genre && tv_genre !== void 0)
    $$bindings.tv_genre(tv_genre);
  if ($$props.movie_genre === void 0 && $$bindings.movie_genre && movie_genre !== void 0)
    $$bindings.movie_genre(movie_genre);
  $$unsubscribe_movie_genres();
  $$unsubscribe_tv_genres();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,600;0,700;1,400&display=swap"}" data-svelte="svelte-wejjgj"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}" data-svelte="svelte-wejjgj">${$$result.title = `<title>TMDB on Sveltekit</title>`, ""}<meta name="${"description"}" content="${"TMDB movie & tv database"}" data-svelte="svelte-wejjgj"><meta name="${"keywords"}" content="${"HTML, CSS, JavaScript, svelte"}" data-svelte="svelte-wejjgj"><meta name="${"author"}" content="${"Wayne Morgan"}" data-svelte="svelte-wejjgj">`, ""}

<main class="${["bg-skin-bg min-h-screen", $theme ? "$theme" : ""].join(" ").trim()}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<section class="${"max-w-7xl mx-auto"}">${slots.default ? slots.default({}) : ``}</section></main>`;
});
var __layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _layout,
  load: load$6
});
var css$1 = {
  code: "h1.svelte-be3lyz,p.svelte-be3lyz{margin:0 auto}h1.svelte-be3lyz{font-size:2.8em;font-weight:700;margin:0 0 .5em}p.svelte-be3lyz{margin:1em auto}@media(min-width:480px){h1.svelte-be3lyz{font-size:4em}}",
  map: `{"version":3,"file":"__error.svelte","sources":["__error.svelte"],"sourcesContent":["<script context=\\"module\\">\\n\\texport function load({ error, status }) {\\n\\t\\treturn {\\n\\t\\t\\tprops: { error, status }\\n\\t\\t};\\n\\t}\\n<\/script>\\n\\n<script lang=\\"ts\\">import { dev } from '$app/env';\\r\\nexport let status;\\r\\nexport let error;\\r\\nconst offline = typeof navigator !== 'undefined' && navigator.onLine === false;\\r\\nconst title = offline ? 'Offline' : status;\\r\\nconst message = offline ? 'Find the internet and try again' : error.message;\\r\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<h1>{title}</h1>\\n\\n<p>{message}</p>\\n\\n{#if !dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\\n<style>h1,p{margin:0 auto}h1{font-size:2.8em;font-weight:700;margin:0 0 .5em}p{margin:1em auto}@media (min-width:480px){h1{font-size:4em}}</style>\\n"],"names":[],"mappings":"AA4BO,gBAAE,CAAC,eAAC,CAAC,OAAO,CAAC,CAAC,IAAI,CAAC,gBAAE,CAAC,UAAU,KAAK,CAAC,YAAY,GAAG,CAAC,OAAO,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,eAAC,CAAC,OAAO,GAAG,CAAC,IAAI,CAAC,MAAM,AAAC,WAAW,KAAK,CAAC,CAAC,gBAAE,CAAC,UAAU,GAAG,CAAC,CAAC"}`
};
function load$5({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error: error2 } = $$props;
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  const title = offline ? "Offline" : status;
  const message = offline ? "Find the internet and try again" : error2.message;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
    $$bindings.error(error2);
  $$result.css.add(css$1);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

<h1 class="${"svelte-be3lyz"}">${escape(title)}</h1>

<p class="${"svelte-be3lyz"}">${escape(message)}</p>

${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
});
var __error = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _error,
  load: load$5
});
var ProgressBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { progress } = $$props;
  let progress_percent;
  let canvas;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  progress_percent = progress * 10;
  return `<section id="${"progress"}" class="${"bg-gray-900 block rounded-full align-center relative w-24 h-24"}"><div class="${"box"}"><div class="${"percent"}"><canvas class="${"w-24 h-24"}" width="${"98"}" height="${"98"}"${add_attribute("this", canvas, 0)}></canvas>
			<div class="${"absolute top-0 left-0 w-full h-full flex justify-center items-center"}"><h2 class="${"text-gray-200 text-3xl"}">${escape(progress_percent)}<span class="${"text-xl align-top"}">%</span></h2></div></div></div></section>`;
});
var css = {
  code: "div.svelte-11hc8a6{-webkit-animation:svelte-11hc8a6-wave .8s ease-in-out infinite alternate;animation:svelte-11hc8a6-wave .8s ease-in-out infinite alternate}div.svelte-11hc8a6:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}div.svelte-11hc8a6:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes svelte-11hc8a6-wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}@keyframes svelte-11hc8a6-wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}",
  map: '{"version":3,"file":"Spinner.svelte","sources":["Spinner.svelte"],"sourcesContent":["<section id=\\"spinner\\" class=\\"w-full h-full m-auto\\">\\n\\t<section class=\\"flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 \\">\\n\\t\\t<div class=\\"inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12\\">\\n\\t\\t\\t<div class=\\"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full\\" />\\n\\t\\t\\t<div class=\\"w-3 h-3 rounded-full bg-primary  -translate-x-1/2 -translate-y-full\\" />\\n\\t\\t\\t<div class=\\"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full\\" />\\n\\t\\t</div>\\n\\t</section>\\n</section>\\n\\n<style>div{-webkit-animation:wave .8s ease-in-out infinite alternate;animation:wave .8s ease-in-out infinite alternate}div:first-of-type{-webkit-animation-delay:-.4s;animation-delay:-.4s}div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}@keyframes wave{0%{transform:translateY(-100%)}to{transform:translateY(100%)}}</style>\\n"],"names":[],"mappings":"AAUO,kBAAG,CAAC,kBAAkB,mBAAI,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAAC,SAAS,CAAC,UAAU,mBAAI,CAAC,GAAG,CAAC,WAAW,CAAC,QAAQ,CAAC,SAAS,CAAC,kBAAG,cAAc,CAAC,wBAAwB,IAAI,CAAC,gBAAgB,IAAI,CAAC,kBAAG,aAAa,CAAC,CAAC,CAAC,wBAAwB,IAAI,CAAC,gBAAgB,IAAI,CAAC,mBAAmB,mBAAI,CAAC,EAAE,CAAC,UAAU,WAAW,KAAK,CAAC,CAAC,EAAE,CAAC,UAAU,WAAW,IAAI,CAAC,CAAC,CAAC,WAAW,mBAAI,CAAC,EAAE,CAAC,UAAU,WAAW,KAAK,CAAC,CAAC,EAAE,CAAC,UAAU,WAAW,IAAI,CAAC,CAAC,CAAC"}'
};
var Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"spinner"}" class="${"w-full h-full m-auto"}"><section class="${"flex absolute items-center h-8 top-1/2 left-1/2 transform -translate-x-1/2 "}"><div class="${"inline-flex flex-nowrap flex-row items-center justify-between mx-auto w-12 svelte-11hc8a6"}"><div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div>
			<div class="${"w-3 h-3 rounded-full bg-primary -translate-x-1/2 -translate-y-full svelte-11hc8a6"}"></div></div></section>
</section>`;
});
var IMAGE_API$9 = "https://image.tmdb.org/t/p/w300";
var MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { poster_path } = $$props;
  let { name } = $$props;
  let { title } = $$props;
  let { vote_average } = $$props;
  let { overview } = $$props;
  let { id } = $$props;
  let { release_date } = $$props;
  let { first_air_date } = $$props;
  if ($$props.poster_path === void 0 && $$bindings.poster_path && poster_path !== void 0)
    $$bindings.poster_path(poster_path);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.vote_average === void 0 && $$bindings.vote_average && vote_average !== void 0)
    $$bindings.vote_average(vote_average);
  if ($$props.overview === void 0 && $$bindings.overview && overview !== void 0)
    $$bindings.overview(overview);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.release_date === void 0 && $$bindings.release_date && release_date !== void 0)
    $$bindings.release_date(release_date);
  if ($$props.first_air_date === void 0 && $$bindings.first_air_date && first_air_date !== void 0)
    $$bindings.first_air_date(first_air_date);
  $$unsubscribe_media_type();
  return `${id ? `<section id="${"movie-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${add_attribute("src", poster_path ? IMAGE_API$9 + poster_path : "/default.jpg", 0)}${add_attribute("alt", title ? title : name, 0)}>
				<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(title ? title : name)}</h6>
					<h6 class="${"xl:text-lg font-bold"}">${escape(release_date ? release_date.substring(0, 4) : first_air_date ? first_air_date.substring(0, 4) : "-")}</h6></div>
				<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: vote_average }, {}, {})}</div></div>
			<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${add_attribute("href", `/${$media_type}/${id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
				<p class="${"md:text-base mt-1"}">${escape(overview)}</p></a></div></section>` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
var Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${each(Array(20), (_) => `<section id="${"movie-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"top-0 right-0 text-textDark bg-skin-bg xl:rounded-lg"}"><div class="${"w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg bg-skin-muted"}"></div>
			<div class="${"py-4 xl:ml-6 h-18 w-44 xl:w-60"}"><div class="${"w-28 xl:w-40 h-5 bg-skin-muted rounded"}"></div>
				<div class="${"mt-2 w-20 xl:w-26 h-5 bg-skin-muted rounded"}"></div>
			</div></div>
	</section>`)}`;
});
var MovieList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${data.length > 0 ? `${each(data, (datum, i) => `${validate_component(MovieCard, "MovieCard").$$render($$result, Object.assign({ key: i }, datum), {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
var IMAGE_API$8 = "https://image.tmdb.org/t/p/w300";
var TvCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_show_name = subscribe(show_name, (value) => $show_name = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { datum } = $$props;
  set_store_value(show_name, $show_name = datum.name, $show_name);
  if ($$props.datum === void 0 && $$bindings.datum && datum !== void 0)
    $$bindings.datum(datum);
  $$unsubscribe_show_name();
  $$unsubscribe_media_type();
  return `${datum.id ? `<section id="${"tv-card"}" class="${"group perspective-1000 w-44 xl:w-60 my-0.5 xl:my-2 xl:rounded-lg"}"><div class="${"relative preserve-3d w-full duration-700 group-hover:rotate-y-180"}"><div class="${"backface-hidden top-0 right-0 text-skin-base bg-skin-bg xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-muted "}"${add_attribute("src", datum.poster_path ? IMAGE_API$8 + datum.poster_path : "/default.jpg", 0)}${add_attribute("alt", datum.name, 0)}>
				<div class="${"p-2 xl:ml-4"}"><h6 class="${"text-sm xl:text-lg text-skin-base w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(datum.name)}</h6>
					<h6 class="${"xl:text-lg font-bold"}">${escape(datum.first_air_date ? datum.first_air_date.substring(0, 4) : "-")}</h6></div>
				<div class="${"transform scale-44 origin-top-left absolute left-1 top-56 xl:top-80"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: datum.vote_average }, {}, {})}</div></div>
			<a class="${"w-full backface-hidden text-skin-base top-0 right-0 bg-skin-bg rounded-lg absolute bottom-0 text-decoration-none rotate-y-180 p-2 h-full ease-in-out movie-back text-sm overflow-auto duration-300 z-10"}"${add_attribute("href", `/${$media_type}/${datum.id}`, 0)}><h6 class="${"mt-1 xl:text-xl uppercase text-skin-base bg-secondary rounded"}">Overview</h6>
				<p class="${"md:text-base mt-1"}">${escape(datum.overview)}</p></a></div></section>` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
var TvList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl mx-auto xl:mt-2 xl:rounded-2xl"}">${data.length > 0 ? `${each(data, (datum) => `${validate_component(TvCard, "TvCard").$$render($$result, { datum }, {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
var IMAGE_API$7 = "https://image.tmdb.org/t/p/w500";
var PersonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { profile_path } = $$props;
  let { name } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.profile_path === void 0 && $$bindings.profile_path && profile_path !== void 0)
    $$bindings.profile_path(profile_path);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${id ? `<section id="${"main"}" class="${"h-full"}"><section id="${"person-card"}" class="${"w-44 xl:h-108 xl:w-60 my-0.5 xl:my-2 bg-skin-primary xl:rounded-lg"}"><a${add_attribute("href", `/person/${id}`, 0)} class="${"top-0 right-0 text-skin-base xl:rounded-lg"}"><img class="${"oject-cover w-44 h-64 xl:w-60 xl:h-90 xl:rounded-t-lg text-skin-base"}"${add_attribute("src", profile_path === null ? "/person.svg" : IMAGE_API$7 + profile_path, 0)}${add_attribute("alt", name, 0)}>
				<div class="${"p-2 h-18 w-44 xl:w-60 bg-skin-bg"}"><h6 class="${"text-sm xl:text-lg text-textDark w-40 xl:w-52 whitespace-nowrap overflow-hidden overflow-ellipsis"}">${escape(name)}</h6></div></a></section></section>

	` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
var PersonList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section id="${"movie-list"}" class="${"bg-skin-tertiary flex flex-wrap justify-around max-w-7xl xl:mt-2 mx-auto xl:rounded-2xl"}">${data.length > 0 ? `${each(data, (person) => `${validate_component(PersonCard, "PersonCard").$$render($$result, Object.assign(person), {}, {})}`)}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}</section>`;
});
var getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
var page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $movie_genres, $$unsubscribe_movie_genres;
  let $tv_genres, $$unsubscribe_tv_genres;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_movie_genres = subscribe(movie_genres, (value) => $movie_genres = value);
  $$unsubscribe_tv_genres = subscribe(tv_genres, (value) => $tv_genres = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let page_title;
  let media_option;
  let genre;
  if ($media_type === "tv") {
    media_option = "TV";
  } else if ($media_type === "person") {
    media_option = "People";
  } else {
    media_option = "Movies";
  }
  if ($page.path.startsWith("/search/")) {
    page_title = media_option + " > Search > " + $page.path.substring(8);
  } else if ($page.path !== "/") {
    if ($media_type === "tv") {
      genre = $tv_genres.find((item) => item.id == $page.params.id).name;
    } else {
      genre = $movie_genres.find((item) => item.id == $page.params.id).name;
    }
    page_title = media_option + " > " + genre;
  } else {
    page_title = "Popular " + media_option;
  }
  $$unsubscribe_page();
  $$unsubscribe_movie_genres();
  $$unsubscribe_tv_genres();
  $$unsubscribe_media_type();
  return `<div class="${"bg-skin-primary text-skin-base max-w-7xl xl:rounded-2xl xl:mt-2"}"><h4 class="${"py-2 ml-4"}">${escape(page_title)}</h4></div>`;
});
var InfiniteScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let component;
  onDestroy(() => {
  });
  return `<div id="${"svelte-infinite-scroll"}" class="${"w-0"}"${add_attribute("this", component, 0)}></div>`;
});
var MainSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $current_page, $$unsubscribe_current_page;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_current_page = subscribe(current_page, (value) => $current_page = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { api_url } = $$props;
  set_store_value(current_page, $current_page = 1, $current_page);
  let data = [];
  let total_pages = 0;
  if ($$props.api_url === void 0 && $$bindings.api_url && api_url !== void 0)
    $$bindings.api_url(api_url);
  $$unsubscribe_current_page();
  $$unsubscribe_media_type();
  return `<section id="${"main"}" class="${"h-full"}">${validate_component(PageTitle, "PageTitle").$$render($$result, {}, {}, {})}

	${$media_type === "person" ? `${validate_component(PersonList, "PersonList").$$render($$result, { data }, {}, {})}` : `${$media_type === "movie" ? `${validate_component(MovieList, "MovieList").$$render($$result, { data }, {}, {})}` : `${$media_type === "tv" ? `${validate_component(TvList, "TvList").$$render($$result, { data }, {}, {})}` : ``}`}`}

	${$current_page < total_pages ? `${validate_component(InfiniteScroll, "InfiniteScroll").$$render($$result, {}, {}, {})}` : ``}</section>`;
});
var Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let api_url;
  let $ApiKey, $$unsubscribe_ApiKey;
  let $media_type, $$unsubscribe_media_type;
  let $selected, $$unsubscribe_selected;
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => $ApiKey = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_selected = subscribe(selected, (value) => $selected = value);
  set_store_value(selected, $selected = null, $selected);
  api_url = `https://api.themoviedb.org/3/trending/${$media_type}/week?api_key=${$ApiKey}&language=en-GB&page=`;
  $$unsubscribe_ApiKey();
  $$unsubscribe_media_type();
  $$unsubscribe_selected();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { api_url }, {}, {})}`;
});
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Routes
});
var NotFound = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Not Found</h1>
<p>This route doesn&#39;t exist.</p>`;
});
var NotFound$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": NotFound
});
var IMAGE_API$6 = "https://image.tmdb.org/t/p/original";
var Episode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  return `

<section id="${"season"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}">${episode_details.id ? `<div class="${"flex"}" pt-3><div class="${"flex flex-col xl:flex-row pb-4"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none"}"><img class="${"flex max-w-2xl"}"${add_attribute("src", episode_details.still_path ? IMAGE_API$6 + episode_details.still_path : "/default.jpg", 0)} alt="${"episode"}"></div></div>
				<div class="${"ml-2 block"}"><h4 class="${"pb-8"}">Episode Information</h4>
					<h4>Season: ${escape(episode_details.season_number)} Episode: ${escape(episode_details.episode_number)}</h4>
					<h4>Episode Name: ${escape(episode_details.name)}</h4>
					<hr>
					<h6>Air Date: ${escape(episode_details.air_date)}</h6>
					<h6>Overview:</h6>
					<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode_details.overview)}</h6></div></div>

			${episode_details.guest_stars.length ? `<div><h3>Guest Stars</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.guest_stars, (guest_star) => `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${guest_star.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", guest_star.profile_path ? IMAGE_API$6 + guest_star.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>Character ${escape(guest_star.character)}</p>
								<p>Name ${escape(guest_star.name)}</p>
							</div>`)}</div></div>` : ``}

			${episode_details.crew.length ? `<div><h3>Crew</h3>
					<div class="${"text-skin-base flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(episode_details.crew, (crew_member) => `<div class="${"w-40 h-72 flex-shrink-0 rounded mb-2 relative bg-secondary m-0.5 sm:mr-3 hover:bg-selected"}"><a class="${"rounded w-28"}"${add_attribute("href", `/person/${crew_member.id}`, 0)}><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", crew_member.profile_path ? IMAGE_API$6 + crew_member.profile_path : "/default.jpg", 0)} alt="${"episode"}"></a>
								<p>${escape(crew_member.job)}</p>
								<p>${escape(crew_member.name)}</p>
							</div>`)}</div></div>` : ``}` : ``}</div></section>
<pre>${escape(JSON.stringify(episode_details, null, 2))}</pre>



`;
});
var __awaiter$4 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load$4({ page: page2 }) {
  return __awaiter$4(this, void 0, void 0, function* () {
    let api_url = `https://api.themoviedb.org/3/tv/${page2.params.id}/season/${page2.params.season_number}/episode/${page2.params.episode_number}?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let episode_details = yield fetch(api_url).then((x) => x.json());
    return { props: { episode_details } };
  });
}
var U5Bepisode_numberu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { episode_details } = $$props;
  if ($$props.episode_details === void 0 && $$bindings.episode_details && episode_details !== void 0)
    $$bindings.episode_details(episode_details);
  $$unsubscribe_page();
  return `${validate_component(Episode, "Episode").$$render($$result, { episode_details }, {}, {})}`;
});
var _episode_number_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bepisode_numberu5D,
  load: load$4
});
var IMAGE_API$5 = "https://image.tmdb.org/t/p/w500/";
var Season = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { season_details } = $$props;
  let { movie_id } = $$props;
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  return `

<section id="${"season"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}">${season_details.id ? `<h4 class="${"pb-8"}">Season Information</h4>
			${each(season_details.episodes, (episode) => `<div class="${"flex flex-col xl:flex-row pb-4"}"><a${add_attribute("href", `/episode/${movie_id}/${season_details.season_number}/${episode.episode_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-80 xl:h-44 xl:items-start"}"><img class="${"flex xl:w-80 xl:h-44 items-start"}"${add_attribute("src", episode.still_path ? IMAGE_API$5 + episode.still_path : "/default.jpg", 0)} alt="${"episode"}"></div>
						<div class="${"ml-2 block"}"><h4>${escape(episode.name)}</h4>
							<hr>
							<h6>Air Date: ${escape(episode.air_date)}</h6>
							<h6>Overview:</h6>
							<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode.overview)}</h6>
						</div></a>
				</div>`)}` : ``}</div>
	<pre>${escape(JSON.stringify(season_details, null, 2))}</pre></section>`;
});
var __awaiter$3 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load$3({ page: page2 }) {
  return __awaiter$3(this, void 0, void 0, function* () {
    let api_url = `https://api.themoviedb.org/3/tv/${page2.params.id}/season/${page2.params.season_number}?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let season_details = yield fetch(api_url).then((x) => x.json());
    return { props: { season_details } };
  });
}
var U5Bseason_numberu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { season_details } = $$props;
  let movie_id = $page.params.id;
  console.log("Season Details", season_details);
  if ($$props.season_details === void 0 && $$bindings.season_details && season_details !== void 0)
    $$bindings.season_details(season_details);
  $$unsubscribe_page();
  return `${validate_component(Season, "Season").$$render($$result, { season_details, movie_id }, {}, {})}`;
});
var _season_number_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bseason_numberu5D,
  load: load$3
});
var KnownFor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_ApiKey;
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { personId } = $$props;
  if ($$props.personId === void 0 && $$bindings.personId && personId !== void 0)
    $$bindings.personId(personId);
  $$unsubscribe_ApiKey();
  return `${``}`;
});
var IMAGE_API$4 = "https://image.tmdb.org/t/p/w500/";
var Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { person } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  return `<section id="${"person"}" class="${"xl:rounded-2xl mx-auto max-w-7xl xl:pb-20 xl:mt-5"}"><div class="${"grid xl:grid-cols-5 xl:grid-rows-auto xl:auto-rows-fr"}"><div class="${"xl:rounded-2xl bg-skin-secondary w-full xl:p-2 xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-3 mx-auto"}">${person.profile_path ? `<img class="${"mt-4 xl:mt-0 xl:pt-0 w-64 h-96 rounded-2xl mx-auto"}"${add_attribute("src", IMAGE_API$4 + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"mt-4 xl:pt-0 flex justify-end w-64 h-96 rounded-2xl mx-auto"}" src="${"/person.svg"}" alt="${"profile"}">`}
			<h4 class="${"mt-2 w-full text-skin-base text-center mx-auto xl:hidden"}">${escape(person.name)}</h4>
			<div class="${"text-skin-base pl-8 w-full xl:p-3"}"><h4 class="${"xl:text-2xl mt-2"}">Personal Info</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Known For</h6>
				<p class="${"text-skin-muted xl:text-base"}">${escape(person.known_for_department)}</p>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Gender</h6>
				${person.gender === 2 ? `<p class="${"text-skin-muted xl:text-base"}">Male</p>` : `<p class="${"text-skin-muted xl:text-base"}">Female</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Birthdate</h6>
				${person.birthday ? `<p class="${"text-skin-muted xl:text-base"}">${escape(person.birthday)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Place of Birth</h6>
				${person.place_of_birth ? `<p class="${"text-skin-muted xl:text-base"}">${escape(person.place_of_birth)}</p>` : `<p class="${"text-skin-muted xl:text-base"}">Unknown</p>`}
				${person.also_known_as && person.also_known_as.length ? `<h4 class="${"mt-4 mb-1"}">Also Known As</h4>
					${each(person.also_known_as, (alias) => `<p class="${"text-skin-muted xl:text-base"}">${escape(alias)}</p>`)}` : ``}</div></div>

		<div class="${"bg-skin-tertiary xl:rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-1 xl:row-end-2 xl:ml-5 xl:mb-5"}"><div class="${"mb-2 xl:mb-4 relative bg-primary xl:ml-5 p-3.5 rounded-2xl"}"><h4 class="${"xl:text-2xl hidden xl:inline-block"}">${escape(person.name)}</h4>
				<h6 class="${"xl:text-lg font-bold mt-4 mb-1"}">Biography</h6>
				<p class="${"text-skin-muted xl:text-base"}">${escape(person.biography)}</p></div></div>
		<div class="${"bg-skin-tertiary rounded-2xl text-skin-base xl:col-start-2 xl:col-end-6 xl:row-start-2 xl:row-end-3 xl:bg-primary xl:ml-5 xl:p-3.5"}"><div class="${"pt-8"}"><h4 class="${"xl:text-2xl pl-3.5 xl:pl-0"}">Known For</h4>
				${validate_component(KnownFor, "KnownFor").$$render($$result, { personId: person.id }, {}, {})}</div></div></div></section>`;
});
var __awaiter$2 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load$2({ page: page2 }) {
  return __awaiter$2(this, void 0, void 0, function* () {
    let api_url = `https://api.themoviedb.org/3/person/${page2.params.id}?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let person = yield fetch(api_url).then((x) => x.json());
    return { props: { person } };
  });
}
var U5Bidu5D$5 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  let $$unsubscribe_page;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  set_store_value(media_type, $media_type = "person", $media_type);
  let { person } = $$props;
  if ($$props.person === void 0 && $$bindings.person && person !== void 0)
    $$bindings.person(person);
  $$unsubscribe_media_type();
  $$unsubscribe_page();
  return `${validate_component(Person, "Person").$$render($$result, { person }, {}, {})}`;
});
var _id_$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D$5,
  load: load$2
});
var U5Bidu5D$4 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let api_url;
  let $page, $$unsubscribe_page;
  let $ApiKey, $$unsubscribe_ApiKey;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => $ApiKey = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let SEARCH_API = `https://api.themoviedb.org/3/search/${$media_type}?api_key=${$ApiKey}&language=en-GB"&page=1&include_adult=false&query=`;
  api_url = SEARCH_API + $page.params.id + "&page=";
  $$unsubscribe_page();
  $$unsubscribe_ApiKey();
  $$unsubscribe_media_type();
  return `${$page.params.id ? `${validate_component(MainSection, "MainSection").$$render($$result, { api_url }, {}, {})}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}`;
});
var _id_$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D$4
});
var U5Bidu5D$3 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let api_url;
  let $page, $$unsubscribe_page;
  let $ApiKey, $$unsubscribe_ApiKey;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => $ApiKey = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  set_store_value(media_type, $media_type = "movie", $media_type);
  api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${$ApiKey}&with_genres=${$page.params.id}&page=`;
  $$unsubscribe_page();
  $$unsubscribe_ApiKey();
  $$unsubscribe_media_type();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { api_url }, {}, {})}`;
});
var _id_$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D$3
});
var U5Bidu5D$2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let api_url;
  let $page, $$unsubscribe_page;
  let $ApiKey, $$unsubscribe_ApiKey;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => $ApiKey = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  set_store_value(media_type, $media_type = "tv", $media_type);
  api_url = `https://api.themoviedb.org/3/discover/tv?api_key=${$ApiKey}&with_genres=${$page.params.id}&page=`;
  $$unsubscribe_page();
  $$unsubscribe_ApiKey();
  $$unsubscribe_media_type();
  return `${validate_component(MainSection, "MainSection").$$render($$result, { api_url }, {}, {})}`;
});
var _id_$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D$2
});
var Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { trailer_id } = $$props;
  let shown = false;
  function show() {
    shown = true;
  }
  function hide() {
    shown = false;
  }
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  return `${shown ? `<section id="${"trailer"}" class="${"top-0 left-0 bottom-0 right-0 bg-gray-800 bg-opacity-60 fixed z-50"}"><div class="${"absolute top-0 left-0 w-full h-full bg-contain"}"><iframe class="${"iframe absolute top-0 left-0 w-full h-full bg-contain"}" title="${"Trailer"}" src="${"https://www.youtube.com/embed/" + escape(trailer_id) + "?rel=0"}" allow="${"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen><track default kind="${"captions"}"></iframe></div>

		<div class="${"close absolute top-1 left-1 text-red-900 text-4xl xl:text-5xl hover:font-bold"}"><i class="${"fa fa-window-close"}" aria-hidden="${"true"}"></i></div></section>` : ``}`;
});
var IMAGE_API$3 = "https://image.tmdb.org/t/p/w200/";
var Cast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_ApiKey;
  let $$unsubscribe_media_type;
  $$unsubscribe_ApiKey = subscribe(ApiKey, (value) => value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { movie_id } = $$props;
  let persons = [];
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  $$unsubscribe_ApiKey();
  $$unsubscribe_media_type();
  return `${persons.length ? `<section id="${"people"}" class="${"max-w-7xl mx-auto xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}"><h3 class="${"text-skin-base flex xl:inline-block justify-center xl:justify-start xl:my-5 text-2xl font-bold"}">Top Billed Cast
		</h3>
		<div class="${"flex flex-wrap justify-center sm:justify-start sm:flex-nowrap sm:overflow-y-hidden relative"}">${each(persons, (person) => `<div class="${"w-28 flex-shrink-0 mb-2 rounded relative bg-skin-primary m-0.5 sm:mr-3 hover:bg-selected"}"><a${add_attribute("href", `/person/${person.id}`, 0)}><div class="${"w-28 h-42 bg-blue-900"}">${person.profile_path ? `<img class="${"w-28 h-42 rounded-t"}"${add_attribute("src", IMAGE_API$3 + person.profile_path, 0)} alt="${"profile"}">` : `<img class="${"pt-8 flex justify-end items-end w-28 h-42 bottom-0 rounded-t"}" src="${"/person.svg"}" alt="${"profile"}">`}</div>
						<p class="${"text-center flex justify-center items-center text-skin-base font-semibold line-clamp-1 xl:line-clamp-2"}">${escape(person.character)}</p>
						<p class="${"text-center flex justify-center items-center text-skin-muted line-clamp-1 xl:line-clamp-2"}">${escape(person.name)}
						</p></a>
				</div>`)}</div></section>` : ``}`;
});
var IMAGE_API$2 = "https://image.tmdb.org/t/p/";
var MovieMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { movie_details } = $$props;
  let { trailer_id } = $$props;
  let { movie_id } = $$props;
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${movie_details.id && trailer_id ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API$2) + "original/" + escape(movie_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r xl:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"}"${add_attribute("src", movie_details.poster_path ? IMAGE_API$2 + "w500" + movie_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10"}"><div class="${"mt-6 xl:mt-0 w-full mb-6 flex flex-wrap"}"><h4 class="${"w-full xl:text-4xl"}">${escape(movie_details.title)}
							<span class="${"text-lg xl:text-4xl text-skin-inverted"}">${escape(movie_details.release_date ? movie_details.release_date.substring(0, 4) : "")}</span></h4>
						<div class="${"xl:flex"}"><div class="${"pl-0"}">${escape(movie_details.release_date ? movie_details.release_date : "No Date Available")}
								<span class="${"hidden xl:px-2 xl:inline"}">\u2022</span></div>
							<div>${each(movie_details.genres, ({ id, name }, i) => `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== movie_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`)}</div>
							${"runtime" in movie_details ? `<div class="${"duration"}"><span class="${"hidden xl:px-2 xl:inline"}">\u2022</span>${escape((movie_details.runtime - movie_details.runtime % 60) / 60)}h ${escape(movie_details.runtime % 60)}m
								</div>` : ``}</div></div>
					<div class="${"mb-5 w-full h-16 flex items-center justify-start"}">${movie_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: movie_details.vote_average }, {}, {})}</div>` : ``}
						${trailer_id !== 999 ? `<div class="${"transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80"}"><i class="${"flex items-center fa fa-play fa-2x"}" aria-hidden="${"true"}"></i>
								<p class="${"flex justify-center ml-4 text-2xl items-center"}">Play Trailer</p></div>` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(movie_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(movie_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { movie_id }, {}, {})}

	${trailer_id !== 999 ? `${validate_component(Modal, "Modal").$$render($$result, { trailer_id, this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_media_type();
  return $$rendered;
});
var __awaiter$1 = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load$1({ page: page2 }) {
  return __awaiter$1(this, void 0, void 0, function* () {
    let movie_api_url = `https://api.themoviedb.org/3/movie/${page2.params.id}?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let trailer_api_url = `https://api.themoviedb.org/3/movie/${page2.params.id}/videos?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let movie_details = yield fetch(movie_api_url).then((x) => x.json());
    let trailer = yield fetch(trailer_api_url).then((x) => x.json());
    let trailer_id = trailer.results.length ? trailer.results[0].key : 999;
    return { props: { movie_details, trailer_id } };
  });
}
var U5Bidu5D$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { movie_details } = $$props;
  let { trailer_id } = $$props;
  set_store_value(media_type, $media_type = "movie", $media_type);
  let movie_id = $page.params.id;
  if ($$props.movie_details === void 0 && $$bindings.movie_details && movie_details !== void 0)
    $$bindings.movie_details(movie_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  $$unsubscribe_page();
  $$unsubscribe_media_type();
  return `${movie_details && trailer_id ? `${validate_component(MovieMedia, "MovieMedia").$$render($$result, { movie_details, trailer_id, movie_id }, {}, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
var _id_$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D$1,
  load: load$1
});
var IMAGE_API$1 = "https://www.themoviedb.org/t/p/original";
var Seasons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tv_details } = $$props;
  let { movie_id } = $$props;
  console.log("movie details", tv_details);
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  return `<section id="${"Seasons"}"><div class="${"max-w-7xl mx-auto text-skin-base xl:mt-5 xl:mb-10 bg-skin-secondary xl:pl-5 pt-1 xl:rounded-2xl"}"><h4 class="${"pb-8"}">Season Information</h4>
		${each(tv_details.seasons, (episode) => `<div class="${"flex flex-col xl:flex-row pb-4"}"><a${add_attribute("href", `/seasons/${movie_id}/${episode.season_number}`, 0)} class="${"flex flex-col xl:flex-row text-skin-base xl:rounded-lg"}"><div class="${"flex mx-auto max-h-full max-w-full xl:m-0 xl:flex-none xl:w-40 xl:h-60 xl:items-start"}"><img class="${"flex xl:w-40 xl: h-60 items-start"}"${add_attribute("src", episode.poster_path ? IMAGE_API$1 + episode.poster_path : "/default.jpg", 0)} alt="${"episode"}"></div>
					<div class="${"justify-self-center ml-2 block xl:justify-start"}"><h4>${escape(episode.name)}</h4>
						<hr>
						<h6>Air Date: ${escape(episode.air_date)}</h6>
						<h6>Overview:</h6>
						<h6 class="${"flex-1 pr-8 text-skin-muted mb-4"}">${escape(episode.overview)}</h6>
					</div></a>
			</div>`)}</div>

	<pre>${escape(JSON.stringify(tv_details, null, 2))}</pre>
	</section>`;
});
var IMAGE_API = "https://image.tmdb.org/t/p/";
var TvMedia = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $show_id, $$unsubscribe_show_id;
  let $season_count, $$unsubscribe_season_count;
  let $show_name, $$unsubscribe_show_name;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_show_id = subscribe(show_id, (value) => $show_id = value);
  $$unsubscribe_season_count = subscribe(season_count, (value) => $season_count = value);
  $$unsubscribe_show_name = subscribe(show_name, (value) => $show_name = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  let { tv_details } = $$props;
  let { trailer_id } = $$props;
  let { movie_id } = $$props;
  set_store_value(show_name, $show_name = tv_details.name, $show_name);
  set_store_value(season_count, $season_count = tv_details.number_of_seasons, $season_count);
  set_store_value(show_id, $show_id = tv_details.id, $show_id);
  let modal;
  window.scrollTo({ top: -1e3, behavior: "smooth" });
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  if ($$props.movie_id === void 0 && $$bindings.movie_id && movie_id !== void 0)
    $$bindings.movie_id(movie_id);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${tv_details.id && trailer_id ? `<section id="${"media"}" class="${"text-skin-inverted xl:mt-5 bg-no-repeat bg-right-top bg-contain xl:bg-cover xl:rounded-2xl"}" style="${"background-image: url(" + escape(IMAGE_API) + "original/" + escape(tv_details.backdrop_path) + ")"}"><div class="${"bg-gradient-to-r xl:rounded-2xl"}" style="${"background-image: linear-gradient(to right, rgb(5, 69, 112) 150px, rgba(37, 137, 204, 0.84) 100%)"}"><div class="${"grid max-w-7xl xl:grid-cols-4 px-10 py-8 mx-auto xl:rounded-2xl"}"><div class="${"col-start-1 col-end-2 "}"><img class="${"h-96 w-64 xl:h-120 xl:w-80 overflow-hidden rounded-2xl mx-auto"}"${add_attribute("src", tv_details.poster_path ? IMAGE_API + "w500" + tv_details.poster_path : "/default.jpg", 0)} alt="${"movie poster"}"></div>
				<div class="${"xl:col-start-2 xl:col-end-5 flex flex-wrap content-start xl:pl-10"}"><div class="${"mt-6 xl:mt-0 w-full mb-6 flex flex-wrap"}"><h4 class="${"w-full xl:text-4xl"}">${escape(tv_details.name)}
							<span class="${"text-lg xl:text-4xl text-skin-inverted"}">${escape(tv_details ? tv_details.first_air_date.substring(0, 4) : "")}</span></h4>
						<div class="${"xl:flex"}"><div class="${"pl-0"}">${escape("first_air_date" in tv_details ? tv_details.first_air_date : "No Date Available")}
								<span class="${"hidden xl:px-2 xl:inline"}">\u2022</span></div>
							<div>${each(tv_details.genres, ({ id, name }, i) => `<a class="${"hover:text-skin-selected"}" href="${"/genre/" + escape($media_type) + "/" + escape(id)}">${escape(name)}</a>
									${i !== tv_details.genres.length - 1 ? `<span class="${"mx-2"}">|</span>` : ``}`)}</div></div></div>
					<div class="${"mb-5 w-full h-16 flex items-center justify-start"}">${tv_details.vote_average ? `<div class="${"bg-transparent inline-flex align-center justify-center transform -translate-x-5 scale-60"}">${validate_component(ProgressBar, "ProgressBar").$$render($$result, { progress: tv_details.vote_average }, {}, {})}</div>` : ``}
						${trailer_id !== 999 ? `<div class="${"transform -translate-x-10 flex pl-5 cursor-pointer hover:opacity-80"}"><i class="${"flex items-center fa fa-play fa-2x"}" aria-hidden="${"true"}"></i>
								<p class="${"flex justify-center ml-4 text-2xl items-center"}">Play Trailer</p></div>` : `<div class="${"flex pl-5"}"><p class="${"flex justify-center ml-4"}">No Trailer Available</p></div>`}</div>
					<div class="${"w-full"}"><div class="${"text-lg italic opacity-70"}">${escape(tv_details.tagline)}</div>
						<h4 class="${"my-2 w-full font-semibold"}">Overview</h4>
						<div class="${"overview-details"}">${escape(tv_details.overview)}</div></div></div></div></div></section>

	${validate_component(Cast, "Cast").$$render($$result, { movie_id }, {}, {})}

	${trailer_id !== 999 ? `${validate_component(Modal, "Modal").$$render($$result, { trailer_id, this: modal }, {
      this: ($$value) => {
        modal = $$value;
        $$settled = false;
      }
    }, {})}` : ``}

	${$media_type === "tv" ? `${validate_component(Seasons, "Seasons").$$render($$result, { tv_details, movie_id }, {}, {})}` : ``}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
  } while (!$$settled);
  $$unsubscribe_show_id();
  $$unsubscribe_season_count();
  $$unsubscribe_show_name();
  $$unsubscribe_media_type();
  return $$rendered;
});
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function load({ page: page2 }) {
  return __awaiter(this, void 0, void 0, function* () {
    let tv_api_url = `https://api.themoviedb.org/3/tv/${page2.params.id}?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let trailer_api_url = `https://api.themoviedb.org/3/tv/${page2.params.id}/videos?api_key=${get_store_value(ApiKey)}&language=en-US`;
    let tv_details = yield fetch(tv_api_url).then((x) => x.json());
    let trailer = yield fetch(trailer_api_url).then((x) => x.json());
    let trailer_id = trailer.results.length ? trailer.results[0].key : 999;
    return { props: { tv_details, trailer_id } };
  });
}
var U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $media_type, $$unsubscribe_media_type;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_media_type = subscribe(media_type, (value) => $media_type = value);
  (function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve2) {
        resolve2(value);
      });
    }
    return new (P || (P = Promise))(function(resolve2, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  });
  let { tv_details } = $$props;
  let { trailer_id } = $$props;
  set_store_value(media_type, $media_type = "tv", $media_type);
  let movie_id = $page.params.id;
  if ($$props.tv_details === void 0 && $$bindings.tv_details && tv_details !== void 0)
    $$bindings.tv_details(tv_details);
  if ($$props.trailer_id === void 0 && $$bindings.trailer_id && trailer_id !== void 0)
    $$bindings.trailer_id(trailer_id);
  $$unsubscribe_page();
  $$unsubscribe_media_type();
  return `${tv_details && trailer_id ? `${validate_component(TvMedia, "TvMedia").$$render($$result, { tv_details, trailer_id, movie_id }, {}, {})}` : `${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
var _id_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": U5Bidu5D,
  load
});

// .svelte-kit/netlify/entry.js
init();
async function handler(event) {
  const { path, httpMethod, headers, rawQuery, body, isBase64Encoded } = event;
  const query = new URLSearchParams(rawQuery);
  const encoding = isBase64Encoded ? "base64" : headers["content-encoding"] || "utf-8";
  const rawBody = typeof body === "string" ? Buffer.from(body, encoding) : body;
  const rendered = await render({
    method: httpMethod,
    headers,
    path,
    query,
    rawBody
  });
  if (rendered) {
    return {
      isBase64Encoded: false,
      statusCode: rendered.status,
      ...splitHeaders(rendered.headers),
      body: rendered.body
    };
  }
  return {
    statusCode: 404,
    body: "Not found"
  };
}
function splitHeaders(headers) {
  const h = {};
  const m = {};
  for (const key in headers) {
    const value = headers[key];
    const target = Array.isArray(value) ? m : h;
    target[key] = value;
  }
  return {
    headers: h,
    multiValueHeaders: m
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
