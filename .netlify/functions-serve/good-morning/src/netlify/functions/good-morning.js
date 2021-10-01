// netlify/functions/good-morning.js
exports.handler = async function() {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Good morning!" })
  };
};
//# sourceMappingURL=good-morning.js.map
