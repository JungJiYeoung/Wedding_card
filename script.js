const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img"); // HTML과 동일하게 맞추세요
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const bgm = document.getElementById("bgm");
const toggleBtn = document.getElementById("bgm-toggle");
let isPlaying = false;

toggleBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgm.pause();
    toggleBtn.textContent = "🔇 음악 꺼짐";
  } else {
    bgm.play();
    toggleBtn.textContent = "🔊 음악 켜짐";
  }
  isPlaying = !isPlaying;
});

function copyAccount(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text)
    .then(() => alert("계좌번호가 복사되었습니다!"))
    .catch(() => alert("복사 실패. 수동으로 복사해주세요."));
}

const galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

// 이미지 클릭 → 모달 열기
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    openModal();
  });
});

function openModal() {
  modal.style.display = "flex";
  modalImg.src = galleryItems[currentIndex].src;
}

// 닫기 버튼
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 모달 바깥 클릭 시 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// 이전/다음 버튼
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openModal();
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openModal();
});

// 키보드 제어 (← → ESC)
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape") modal.style.display = "none";
  }
});

