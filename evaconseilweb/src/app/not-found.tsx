const basePath =
  process.env.PAGES_BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <div className="not-found-mark" aria-hidden="true">
        404
      </div>
      <p>EVA CONSEIL · ROMANIA</p>
      <h1>This page has moved beyond the horizon.</h1>
      <a href={`${basePath}/`}>
        Return home
        <span aria-hidden="true">→</span>
      </a>
    </main>
  );
}
