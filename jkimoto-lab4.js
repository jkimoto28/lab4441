// Jelani Kimoto
// ITMD 441-02
(function () {
  console.log("Applying modifications to Stellar Marketing page...");

  // 1. Change the main headline in the hero section
  const heroHeadline = document.querySelector("#hero h1");
  if (heroHeadline) {
    heroHeadline.textContent = "Uplift Your Brand with Stellar Marketing";
  }

  // 2. Change the subheading text below the hero headline
  const heroSubText = document.querySelector("#hero p");
  if (heroSubText) {
    heroSubText.innerHTML =
      "Utilize cutting-edge strategies from <strong>Stellar Marketing</strong> to help your business thrive and excel.";
  }

  // 3. Change the hero section background image
  const heroSection = document.querySelector("#hero");
  if (heroSection) {
    heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    heroSection.style.backgroundSize = "cover";
    heroSection.style.backgroundPosition = "center";
  }

  // 4. Change the background color of the nav bar to the same color that is used in the footer
  const navbar = document.querySelector("header");
  const footer = document.querySelector("footer");
  if (navbar && footer) {
    const footerBgColor = window.getComputedStyle(footer).backgroundColor;
    navbar.style.backgroundColor = footerBgColor;
  }

  // 5. Remove the “Get Started” CTA from the hero section
  const getStartedBtn = document.querySelector("#hero a");
  if (getStartedBtn) {
    getStartedBtn.remove();
  }

  // 6. Center align the section headings (Services, Solutions, Contact)
  const sectionHeadings = document.querySelectorAll("#services h2, #solutions h2, #contact h2");
  sectionHeadings.forEach((heading) => {
    heading.style.textAlign = "center";
  });

  // 7. Change the icon color in the services section
  const serviceIcons = document.querySelectorAll("#services .material-symbols-outlined");
  serviceIcons.forEach((icon) => {
    icon.style.color = "#47C714";
  });

  // 8. Change the digital marketing icon to 'Ads Click'
  const digitalMarketingIcon = document.querySelector("#services [data-icon='digital']");
  if (digitalMarketingIcon) {
    digitalMarketingIcon.textContent = "ads_click";
  }

  // 9. Adjust the specialized marketing solutions layout for >=1024px 
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @media (min-width: 1024px) {
      #solutions [data-section='product_cards'] {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
      }
    }
  `;
  document.head.appendChild(styleTag);

  // 10. Change the Musicians image in the specialized marketing solutions section
  const musicianImg = document.querySelector("#solutions img[alt='Musicians']");
  if (musicianImg) {
    musicianImg.src = "https://picsum.photos/id/453/400/300";
  }

  console.log("Modifications successfully applied.");
})();
