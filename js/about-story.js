(function () {
    const sections = document.querySelectorAll('.about_block');
  
    sections.forEach(section => {
      section.addEventListener('mouseover', function () {
        section.style.transform = 'rotate(360deg)';
        section.style.transition = "transform 4s";
      });
    
      section.addEventListener('mouseout', function () {
        section.style.transform = 'rotate(0deg)';
        
      });
    });

  })();