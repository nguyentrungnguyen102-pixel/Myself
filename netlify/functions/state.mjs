import { getStore } from "@netlify/blobs";

function keyFromPin(pin) {
  var clean = String(pin || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!clean) return null;
  return "state-" + clean.slice(0, 64);
}

export default async (req) => {
  var url = new URL(req.url);
  var pin = url.searchParams.get("pin");
  var key = keyFromPin(pin);
  var headers = { "content-type": "application/json" };

  if (!key) {
    return new Response(JSON.stringify({ error: "missing or invalid pin" }), { status: 400, headers: headers });
  }

  var store = getStore({ name: "bootcamp-sync", consistency: "strong" });

  if (req.method === "GET") {
    var data = await store.get(key, { type: "json" });
    return new Response(JSON.stringify(data || null), { status: 200, headers: headers });
  }

  if (req.method === "POST") {
    var body;
    try {
      body = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({ error: "invalid json body" }), { status: 400, headers: headers });
    }
    await store.setJSON(key, body);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: headers });
  }

  return new Response(JSON.stringify({ error: "method not allowed" }), { status: 405, headers: headers });
};
