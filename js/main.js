document.querySelectorAll(".menu-card").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode;

    let gambar = parent.querySelector(".card-img").src;
    let nama = parent.querySelector(".menu-card-title").innerHTML;
    let harga = parent.querySelector(".menu-card-price").innerHTML;
    let deskripsi = parent.querySelector(".menu-card-desc").innerHTML;

    let tombolModal = document.querySelector(".btnModal");
    tombolModal.click();

    document.querySelector(".modalTitle").innerHTML = nama;

    let image = document.createElement("img");
    image.src = gambar;
    image.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(image);
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi;
    document.querySelector(".modalHarga").innerHTML = harga;
  });
});
