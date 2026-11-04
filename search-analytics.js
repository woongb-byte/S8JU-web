/* Public editorial pages only. Never send input, query strings or user IDs. */
(function () {
  'use strict';
  var pages = ['/about.html', '/free-saju-app.html', '/saju-birth-time.html', '/manse-calendar-guide.html'];
  var path = window.location.pathname;
  if (!['s8ju.co.kr', 'www.s8ju.co.kr'].includes(window.location.hostname) || !pages.includes(path)) return;
  var measurementId = 'G-B4LS0QQWKT';
  var referrer = '';
  try { referrer = new URL(document.referrer).origin; } catch (_) {}
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    page_location: 'https://s8ju.co.kr' + path,
    page_referrer: referrer,
    page_title: document.title
  });
  window.gtag('event', 'page_view', {
    send_to: measurementId,
    page_location: 'https://s8ju.co.kr' + path,
    page_referrer: referrer,
    page_title: document.title
  });
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(script);
  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a');
    if (!link) return;
    var target;
    try { target = new URL(link.href); } catch (_) { return; }
    if (target.hostname !== 'play.google.com' || target.pathname !== '/store/apps/details' || target.searchParams.get('id') !== 'com.hproduction.s8ju') return;
    window.gtag('event', 'play_store_click', {
      send_to: measurementId,
      content_page: path,
      link_position: link.closest('.hero') ? 'hero' : 'body',
      app_package: 'com.hproduction.s8ju',
      transport_type: 'beacon'
    });
  });
}());
