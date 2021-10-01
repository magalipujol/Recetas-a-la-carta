window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("shrink")
  } else {
    document.getElementById("navbar").classList.remove("shrink")
  }
} 