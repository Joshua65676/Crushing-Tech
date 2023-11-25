function showLogoMenu() {
    const logoMenu = document.querySelector('.logo-menu');
    if (logoMenu.matches('.logo-menu')) {
      logoMenu.style.display = 'flex';
    } else {
      logoMenu.style.display = 'none';
    }
    // logoMenu.target.matches('.logo-menu')
    // logoMenu.style.display = 'flex';
}

function showNotificantionMenu() {
    const notificantionMenu = document.querySelector('.notificantion-menu');
    if (notificantionMenu.matches('.notificantion-menu')) {
      notificantionMenu.style.display = 'flex';
    } else {
      notificantionMenu.style.display = 'none';
    }
    // logoMenu.target.matches('.logo-menu')
    // logoMenu.style.display = 'flex';
}

function hideSelectPlan() {
    const selectPlan = document.querySelector('.select-plan');
    selectPlan.style.display = 'none';
}

function showSecondSection() {
  const secondSection = document.querySelector('.second-section');
  const secondSection2 = document.querySelector('.second-section2');
  secondSection.style.display = 'flex';
  secondSection2.style.display = 'none';
}

function hideSecondSection2() {
  const secondSection = document.querySelector('.second-section');
  const secondSection2 = document.querySelector('.second-section2');
  secondSection2.style.display = 'flex';
  secondSection.style.display = 'none';
}


// const logoMenu = document.querySelector('.logo-menu');

// document.addEventListener('click', function(event) {
//   if (!logoMenu.contains(event.target)) {
//     logoMenu.style.display = 'none';
//   }
// });

// var logoMenu = document.querySelector('.logo-menu');

// document.addEventListener('click', function(logoMenu) {
// });
