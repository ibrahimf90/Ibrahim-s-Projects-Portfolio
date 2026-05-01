document.addEventListener('DOMContentLoaded', () => {
  const markers = document.querySelectorAll('.marker');
  const infoPanel = document.getElementById('info-panel');
  const colorDisplay = document.getElementById('color-display');

  markers.forEach(marker => {
    marker.addEventListener('click', () => {
      // Remove active class from others
      markers.forEach(m => m.classList.remove('active'));
      
      // Add active class to clicked marker
      marker.classList.add('active');
      
      // Update info panel
      const color = marker.getAttribute('data-color');
      colorDisplay.textContent = color;
      colorDisplay.style.color = color;
      colorDisplay.style.borderColor = `${color}44`;
      colorDisplay.style.backgroundColor = `${color}11`;
      
      infoPanel.classList.add('visible');

      // Add a small shake or pop effect
      marker.animate([
        { transform: 'scale(1.1) translateX(20px)' },
        { transform: 'scale(1.15) translateX(25px)' },
        { transform: 'scale(1.1) translateX(20px)' }
      ], {
        duration: 300,
        easing: 'ease-out'
      });
    });
  });
});
