window.addEventListener("load", function () {
  const mathNavElem = document.getElementById("math-nav");
  const englishNavElem = document.getElementById("english-nav");
  // const physicsNavElem = document.getElementById("physics-nav");
  // const chemistryNavElem = document.getElementById("chemistry-nav");
  const arabicNavElem = document.getElementById("arabic-nav");
   const computerNavElem = document.getElementById("computer-nav");
  // const urduNavElem = document.getElementById("urdu-nav");
  // const biologyNavElem = document.getElementById("biology-nav");

  const mathSubjectElem = document.getElementById("math-link");
  const englishSubjectElem = document.getElementById("english-link");
  const arabicSubjectElem = document.getElementById("arabic-link");

  // const math = document.getElementById("computer-link");
  // const math = document.getElementById("chemistry-link");
  // const math = document.getElementById("physics-link");
  // const math = document.getElementById("biology-link");
  // const math = document.getElementById("-link");

  mathNavElem.addEventListener('click', function(e) {
    e.preventDefault();
    mathSubjectElem.scrollIntoView({behavior: 'smooth'})
  })

  englishNavElem.addEventListener('click', function(e) {
    e.preventDefault();
    englishSubjectElem.scrollIntoView({behavior: 'smooth'})
  })

 arabicNavElem.addEventListener('click', function(e) {
    e.preventDefault();
   arabicSubjectElem.scrollIntoView({behavior: 'smooth'})
  })
  computerNavElem.addEventListener('click', function(e) {
    e.preventDefault();
   arabicSubjectElem.scrollIntoView({behavior: 'smooth'})
  })
});
