// worker.js

let data = [];

self.onmessage = function (e) {
  const { type, payload } = e.data;

  if (type === "init") {
    data = payload;
  }

  if (type === "search") {
    const query = payload.toLowerCase();
    if (!query || !data.length) {
      postMessage([]);
      return;
    }

    const results = data.filter(item =>
      item.name?.toLowerCase().includes(query)
    );

    postMessage(results);
  }
};
