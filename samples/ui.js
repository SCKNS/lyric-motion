// waveform mask for the scrub bar (fixed pattern of 120 bars)
(function(){ var s = 1234567, b = '';
  function r(){ s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }
  for (var i = 0; i < 120; i++){ var h = 5 + Math.pow(r(), 1.3)*23; b += '<rect x="' + i*4 + '" y="' + ((28 - h)/2).toFixed(1) + '" width="2.2" height="' + h.toFixed(1) + '" rx="1.1"/>'; }
  var url = 'url("data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 28" preserveAspectRatio="none">' + b + '</svg>') + '")';
  var m = document.getElementById('meterBox'); m.style.webkitMaskImage = url; m.style.maskImage = url;
})();
(function(){ var r = document.documentElement, b = document.getElementById('themeToggle');
  function label(){ var d = r.getAttribute('data-ui') === 'dark', t = d ? 'Açık temaya geç' : 'Koyu temaya geç'; b.setAttribute('aria-label', t); b.title = t; }
  label();
  b.addEventListener('click', function(){ var n = r.getAttribute('data-ui') === 'dark' ? 'light' : 'dark'; r.setAttribute('data-ui', n); try { localStorage.setItem('kls_theme', n); } catch(e){} label(); });
})();
