document
  .getElementById("qrForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const url = document.getElementById("url").value;

    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(url)}`,
    });

    if (response.ok) {
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);

      const qrCodeImage = document.getElementById("qrCodeImage");
      qrCodeImage.src = imageUrl;
      qrCodeImage.style.display = "block";

      const downloadBtn = document.getElementById("downloadBtn");
      downloadBtn.href = imageUrl;
      downloadBtn.style.display = "inline-block";
    } else {
      alert("Ошибка генерации QR-кода");
    }
  });
