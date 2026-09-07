// Bounce the default production *.pages.dev hostname to the real domain, so
// derfel.pages.dev is not a live duplicate of derfel.dev. Preview deployments
// (<hash>.derfel.pages.dev) are left untouched for review.
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.hostname === 'derfel.pages.dev') {
    url.hostname = 'derfel.dev';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return next();
}
