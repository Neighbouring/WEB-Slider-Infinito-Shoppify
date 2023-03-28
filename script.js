$('article').hover(function () {
  $('article').toggleClass('parar');
});

$('article').blur(function () {
  $('article').toggleClass('rodar');
});

// https://web.dev/fcp/
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
    console.log('FCP candidate:', entry.startTime, entry);
  }
}).observe({ type: 'paint', buffered: true });
