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

document.querySelector('.plan-img2').onclick = function() {
  document.querySelector('.select-plan2').style.display = 'none';
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

// document.querySelector('.setup-guide-heading-icon').onmouseover = function() {
//   document.querySelector('.setup-guide-heading-icon2').style.display = 'block';
//   document.querySelector('.setup-guide-heading-icon').style.display = 'none';
// }

// document.querySelector('.setup-guide-heading-icon').onmouseout = function() {
//   document.querySelector('.setup-guide-heading-icon2').style.display = 'none';
//   document.querySelector('.setup-guide-heading-icon').style.display = 'block';
// }

document.querySelector('.setup-guide-heading-icon').onclick = function() {
  document.querySelector('.setup-guide-heading-icon2').style.display = 'none';
  document.querySelector('.setup-guide-heading-icon').style.display = 'none';
  document.querySelector('.setup-guide-heading-icon3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading-addDomain').onclick = function() {
  document.querySelector('.setup-guide-heading-addDomain2').style.display = 'none';
  document.querySelector('.setup-guide-heading-addDomain').style.display = 'none';
  document.querySelector('.setup-guide-heading-addDomain3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading-store').onclick = function() {
  document.querySelector('.setup-guide-heading-store2').style.display = 'none';
  document.querySelector('.setup-guide-heading-store').style.display = 'none';
  document.querySelector('.setup-guide-heading-store3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading-provider').onclick = function() {
  document.querySelector('.setup-guide-heading-provider2').style.display = 'none';
  document.querySelector('.setup-guide-heading-provider').style.display = 'none';
  document.querySelector('.setup-guide-heading-provider3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading-addProduct').onclick = function() {
  document.querySelector('.setup-guide-heading-addProduct2').style.display = 'none';
  document.querySelector('.setup-guide-heading-addProduct').style.display = 'none';
  document.querySelector('.setup-guide-heading-addProduct3').style.display = 'flex';
}

document.querySelector('.setup-guide-heading-provider3').onclick = function() {
  document.querySelector('.setup-guide-heading-provider2').style.display = 'none';
  document.querySelector('.setup-guide-heading-provider').style.display = 'flex';
  document.querySelector('.setup-guide-heading-provider3').style.display = 'none';
}
document.querySelector('.setup-guide-heading-addProduct3').onclick = function() {
  document.querySelector('.setup-guide-heading-addProduct2').style.display = 'none';
  document.querySelector('.setup-guide-heading-addProduct').style.display = 'flex';
  document.querySelector('.setup-guide-heading-addProduct3').style.display = 'none';
}
document.querySelector('.setup-guide-heading-store3').onclick = function() {
  document.querySelector('.setup-guide-heading-store2').style.display = 'none';
  document.querySelector('.setup-guide-heading-store').style.display = 'flex';
  document.querySelector('.setup-guide-heading-store3').style.display = 'none';
}
document.querySelector('.setup-guide-heading-addDomain3').onclick = function() {
  document.querySelector('.setup-guide-heading-addDomain2').style.display = 'none';
  document.querySelector('.setup-guide-heading-addDomain').style.display = 'flex';
  document.querySelector('.setup-guide-heading-addDomain3').style.display = 'none';
}
document.querySelector('.setup-guide-heading-icon3').onclick = function() {
  document.querySelector('.setup-guide-heading-icon2').style.display = 'none';
  document.querySelector('.setup-guide-heading-icon').style.display = 'flex';
  document.querySelector('.setup-guide-heading-icon3').style.display = 'none';
}


document.querySelector('.setup-guide-heading2-icon').onclick = function() {
  document.querySelector('.setup-guide-heading2-icon2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-icon').style.display = 'none';
  document.querySelector('.setup-guide-heading2-icon3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading2-addDomain').onclick = function() {
  document.querySelector('.setup-guide-heading2-addDomain2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addDomain').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addDomain3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading2-store').onclick = function() {
  document.querySelector('.setup-guide-heading2-store2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-store').style.display = 'none';
  document.querySelector('.setup-guide-heading2-store3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading2-provider').onclick = function() {
  document.querySelector('.setup-guide-heading2-provider2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-provider').style.display = 'none';
  document.querySelector('.setup-guide-heading2-provider3').style.display = 'flex';
}
document.querySelector('.setup-guide-heading2-addProduct').onclick = function() {
  document.querySelector('.setup-guide-heading2-addProduct2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addProduct').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addProduct3').style.display = 'flex';
}

document.querySelector('.setup-guide-heading2-provider3').onclick = function() {
  document.querySelector('.setup-guide-heading2-provider2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-provider').style.display = 'flex';
  document.querySelector('.setup-guide-heading2-provider3').style.display = 'none';
}
document.querySelector('.setup-guide-heading2-addProduct3').onclick = function() {
  document.querySelector('.setup-guide-heading2-addProduct2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addProduct').style.display = 'flex';
  document.querySelector('.setup-guide-heading2-addProduct3').style.display = 'none';
}
document.querySelector('.setup-guide-heading2-store3').onclick = function() {
  document.querySelector('.setup-guide-heading2-store2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-store').style.display = 'flex';
  document.querySelector('.setup-guide-heading2-store3').style.display = 'none';
}
document.querySelector('.setup-guide-heading2-addDomain3').onclick = function() {
  document.querySelector('.setup-guide-heading2-addDomain2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-addDomain').style.display = 'flex';
  document.querySelector('.setup-guide-heading2-addDomain3').style.display = 'none';
}
document.querySelector('.setup-guide-heading2-icon3').onclick = function() {
  document.querySelector('.setup-guide-heading2-icon2').style.display = 'none';
  document.querySelector('.setup-guide-heading2-icon').style.display = 'flex';
  document.querySelector('.setup-guide-heading2-icon3').style.display = 'none';
}


document.querySelector('.link').onclick = function() {
  document.querySelector('.link').style.display = 'none';
  document.querySelector('.link2').style.display = 'flex';
  document.querySelector('.link3').style.display = 'flex';
  document.querySelector('.link4').style.display = 'flex';
  document.querySelector('.link5').style.display = 'flex';
  document.querySelector('.main1').style.display = 'flex';
  document.querySelector('.main2').style.display = 'none';
  document.querySelector('.main3').style.display = 'none';
  document.querySelector('.main4').style.display = 'none';
  document.querySelector('.main5').style.display = 'none';
}

document.querySelector('.link2').onclick = function() {
  document.querySelector('.link').style.display = 'flex';
  document.querySelector('.link2').style.display = 'none';
  document.querySelector('.link3').style.display = 'flex';
  document.querySelector('.link4').style.display = 'flex';
  document.querySelector('.link5').style.display = 'flex';
  document.querySelector('.main1').style.display = 'none';
  document.querySelector('.main2').style.display = 'flex';
  document.querySelector('.main3').style.display = 'none';
  document.querySelector('.main4').style.display = 'none';
  document.querySelector('.main5').style.display = 'none';
}

document.querySelector('.link3').onclick = function() {
  document.querySelector('.link').style.display = 'flex';
  document.querySelector('.link2').style.display = 'flex';
  document.querySelector('.link3').style.display = 'none';
  document.querySelector('.link4').style.display = 'flex';
  document.querySelector('.link5').style.display = 'flex';
  document.querySelector('.main1').style.display = 'none';
  document.querySelector('.main2').style.display = 'none';
  document.querySelector('.main3').style.display = 'flex';
  document.querySelector('.main4').style.display = 'none';
  document.querySelector('.main5').style.display = 'none';
}

document.querySelector('.link4').onclick = function() {
  document.querySelector('.link').style.display = 'flex';
  document.querySelector('.link2').style.display = 'flex';
  document.querySelector('.link3').style.display = 'flex';
  document.querySelector('.link4').style.display = 'none';
  document.querySelector('.link5').style.display = 'flex';
  document.querySelector('.main1').style.display = 'none';
  document.querySelector('.main2').style.display = 'none';
  document.querySelector('.main3').style.display = 'none';
  document.querySelector('.main4').style.display = 'flex';
  document.querySelector('.main5').style.display = 'none';
}

document.querySelector('.link5').onclick = function() {
  document.querySelector('.link').style.display = 'flex';
  document.querySelector('.link2').style.display = 'flex';
  document.querySelector('.link3').style.display = 'flex';
  document.querySelector('.link4').style.display = 'flex';
  document.querySelector('.link5').style.display = 'none';
  document.querySelector('.main1').style.display = 'none';
  document.querySelector('.main2').style.display = 'none';
  document.querySelector('.main3').style.display = 'none';
  document.querySelector('.main4').style.display = 'none';
  document.querySelector('.main5').style.display = 'flex';
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
