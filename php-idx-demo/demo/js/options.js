var commonOptions = {};
commonOptions.apiKey = "<LoginRadius API Key>";
commonOptions.appName = "<App Name>";
const url = window.location.href;
const params = url.split("?")[1];
const domainName = url.substring(0, url.lastIndexOf("/"));

