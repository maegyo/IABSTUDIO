var current = 0;  // 첫 번째 이미지
showSlides();  // 기본적으로 첫 번째 이미지 표시

function showSlides() {
  var slides = document.querySelectorAll("#slides > img");  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  // 모든 이미지 감춤
  }
  current++; // 다음 이미지로 이동
  if(current > slides.length)  // 마지막 이미지라면
    current = 1;   // 첫 번째로 이동
  slides[current - 1 ].style.display = "block";  // 현재 위치 이미지 표시
  setTimeout(showSlides, 1000);   // 2초마다 showSlides 함수 반복 실행 
}

var current1 = 0;  // 첫 번째 이미지
showSlides2();  // 기본적으로 첫 번째 이미지 표시

function showSlides2() {
  var slides2 = document.querySelectorAll("#slides2 > img");  
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  // 모든 이미지 감춤
  }
  current1++; // 다음 이미지로 이동
  if(current1 > slides2.length)  // 마지막 이미지라면
    current1 = 1;   // 첫 번째로 이동
  slides2[current1 - 1 ].style.display = "block";  // 현재 위치 이미지 표시
  setTimeout(showSlides2, 1000);   // 2초마다 showSlides 함수 반복 실행 
}