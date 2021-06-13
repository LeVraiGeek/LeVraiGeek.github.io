params = new URLSearchParams(window.location.search);
url = params.get('url');

location.replace(url);
