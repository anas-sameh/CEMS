  // العدسة
  const lens = document.createElement("div");
  lens.classList.add("img-zoom-lens");
  document.body.appendChild(lens);
  
  const mainImgSrc = document.getElementById('img_src');
  
  function updateLens() {
      lens.style.backgroundImage = `url(${mainImgSrc.src})`;
      lens.style.backgroundRepeat = "no-repeat";
      lens.style.backgroundSize = `${mainImgSrc.width * 2}px ${mainImgSrc.height * 2}px`;
  }
  
  updateLens();
  
  // إظهار وإخفاء العدسة
  mainImgSrc.addEventListener("mouseenter", () => lens.style.display = "block");
  mainImgSrc.addEventListener("mouseleave", () => lens.style.display = "none");
  mainImgSrc.addEventListener("mousemove", moveLens);
  
  function moveLens(e) {
      const rect = mainImgSrc.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const lensX = e.pageX - lens.offsetWidth / 2;
      const lensY = e.pageY - lens.offsetHeight / 2;
  
      lens.style.left = `${lensX}px`;
      lens.style.top = `${lensY}px`;
  
      const cx = 2;
      const cy = 2;
  
      const bgX = -x * cx + lens.offsetWidth / 2;
      const bgY = -y * cy + lens.offsetHeight / 2;
  
      lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
  }
  
  // -----------------------
  // كود الصور المصغرة
  var imgs = Array.from(document.querySelectorAll(".slider_imgs .imgA"));
  var lastClickedImg = null;
  
  for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function (event) {
          var imgSrc = event.target.src;
          mainImgSrc.src = imgSrc;
  
          // تحديث العدسة للصورة الجديدة
          updateLens();
  
          if (lastClickedImg) {
              lastClickedImg.style.transform = 'scale(1)';
          }
  
          event.target.style.transform = 'scale(0.8)';
          event.target.style.transition = 'transform 0.2s ease-in-out';
          lastClickedImg = event.target;
      });
  }


  function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
  }

  function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById("dropdown-menu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }


  document.addEventListener("click", function(event) {
    const dropdown = document.getElementById("dropdown-menu");
    const dropdownToggle = event.target.closest(".dropdown_items");

    if (!dropdownToggle && dropdown) {
      dropdown.style.display = "none";
    }
  });