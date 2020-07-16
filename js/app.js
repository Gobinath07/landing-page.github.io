
const navigation = document.getElementById('navbar__list');

const sectionSet = document.querySelectorAll('section');



// build the nav
const naviBuilder = () => {
    let navigationUI = '';
    // loop to iterate through different sections
    sectionSet.forEach(section => {
        const sectionId = section.id;
        const sectionNavigatorData = section.dataset.nav;

        navigationUI += `<li><a class="menu__link" href="#${sectionId}">${sectionNavigatorData}</a></li>`;
    });
    // Here elements will be appended to the navigation section
    navigation.innerHTML = navigationUI;
};

naviBuilder();


const activeSection = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

// adding the active class
const addActive = (condition,section) => {
  if(condition) {
      section.classList.add('your-active-class');
    
  };
};

const removeActive=(section) => {
  section.classList.remove('your-active-class');

};

//actual function is implemeted here
const sectionActivation = () => {
  sectionSet.forEach(section => {
      const elementOffset = activeSection(section);

      viewPort = () => elementOffset < 180 && elementOffset >= -180;
      removeActive(section);
      addActive(viewPort(),section);
  });
};
  
window.addEventListener('scroll',sectionActivation);

// Scroll to anchor ID using scrollTO event

const scroll = () => {
  const links= document.querySelectorAll('.navbar__menu a');
  links.forEach(link => { 
      link.addEventListener('click', () => {
          for(i =0; i<sections; i++) {
              sections[i].addEventListener("click",sectionScroll(link));
          }
      });
  });
};

scroll();
