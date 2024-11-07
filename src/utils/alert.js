export function showAlert(type, message) {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
  script.onload = () => {
    showAlert.fire({
      icon: type,
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  document.head.appendChild(script);
}
