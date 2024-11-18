document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabs a');
    const grids = document.querySelectorAll('.portfolio-grid > div');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', event => {
        event.preventDefault();
  
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
  
        // Get the target grid ID
        const targetId = tab.getAttribute('data-target');
  
        // Show the corresponding grid and hide others
        grids.forEach(grid => {
          if (grid.id === targetId) {
            grid.classList.remove('d-none');
          } else {
            grid.classList.add('d-none');
          }
        });
      });
    });
  });
  