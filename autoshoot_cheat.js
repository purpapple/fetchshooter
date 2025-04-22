(function autoShootCheat() {
  if (window.autoShootInterval) {
    clearInterval(window.autoShootInterval);
    console.log('%cAuto-shoot disabled.', 'color: red');
    window.autoShootInterval = null;
    return;
  }

  window.autoShootInterval = setInterval(() => {
    if (!window.player || !window.player.alive) return;
    const mouse = window.mouse || { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const angle = Math.atan2(mouse.y - player.y, mouse.x - player.x);
    bullets.push({
      x: player.x,
      y: player.y,
      dx: Math.cos(angle) * 10,
      dy: Math.sin(angle) * 10,
      size: 6
    });
  }, 100);

  console.log('%cAuto-shoot enabled 🔫', 'color: yellow; font-weight: bold');
})();
