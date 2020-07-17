
const navigation = document.getElementById('navbar__list');

const sectionSet = document.querySelectorAll('section');



// build the nav
const navigationBar = () => {
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

navigationBar();


const links = document.querySelectorAll('li');

function activate(links) {
  links.forEach(function(link) {
    link.classList.remove('active');
  });
  this.classList.add("active");
}

links.forEach(function(link) {
   link.addEventListener('click', activate.bind(link, links));
})


window.addEventListener('scroll', event => { 
    let nav = document.querySelector('.navbar__menu'); 
    
    
});

//Active navigation on scroll
window.addEventListener('scroll', event => {
  let navigationLinks = document.querySelectorAll('li a');
  let fromTop = window.scrollY;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    
    
    

    } else {
      link.classList.remove('active');
    
      
    }
  });
});

