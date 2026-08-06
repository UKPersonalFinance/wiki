interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const authHeader = request.headers.get("Authorization");
    const suppliedPassword = authHeader?.startsWith("Basic ")
      ? atob(authHeader.slice(6)).split(":").slice(1).join(":")
      : undefined;

    if (suppliedPassword !== "flowchart") {
      return new Response("Authentication required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Staging"' },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
