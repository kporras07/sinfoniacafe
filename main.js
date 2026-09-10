var WA_NUMBER = ['\x35\x30\x36', '854', '892', '36'].join('');

function formatPrice(n) {
  return '₡' + n.toLocaleString('es-CR');
}

function toggleNav() {
  document.getElementById('nav').classList.toggle('open');
}

function buildWhatsAppLink(items) {
  var msg = 'Hola! Me gustaría preordenar:\n\n';
  var total = 0;
  items.forEach(function(item) {
    var qty = item.qty || 1;
    msg += '• ' + item.name + ' — ' + formatPrice(item.price) + (qty > 1 ? ' (×' + qty + ')' : '') + '\n';
    total += item.price * qty;
  });
  msg += '\nTotal: ' + formatPrice(total);
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
}
