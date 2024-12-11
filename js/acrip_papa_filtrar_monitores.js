document.addEventListener("DOMContentLoaded", function () {
    const allCheckboxGroups = document.querySelectorAll("[id$='-all']"); // Checkboxes como "Todos"
  
    // Agregar eventos a los checkboxes de "Todos"
    allCheckboxGroups.forEach((checkboxAll) => {
      checkboxAll.addEventListener("change", function () {
        const groupId = checkboxAll.id.split("-")[0]; // Obtener el grupo (price, panel, brand)
        const groupCheckboxes = document.querySelectorAll(
          `input[data-filter='${groupId}']`
        );
  
        groupCheckboxes.forEach((checkbox) => {
          checkbox.checked = checkboxAll.checked; // Seleccionar o deseleccionar todos
        });
  
        filterProducts(); // Llama a la función para actualizar el filtro
      });
    });
  
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const productCards = document.querySelectorAll(".product-card");
  
    // Escucha los cambios en los checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", filterProducts);
    });
  
    function filterProducts() {
      const selectedPrices = getSelectedValues("price");
      const selectedPanels = getSelectedValues("panel");
      const selectedBrands = getSelectedValues("brand");
  
      productCards.forEach((card) => {
        const productPrice = parseInt(card.getAttribute("data-price"));
        const productPanel = card.getAttribute("data-panel");
        const productBrand = card.getAttribute("data-brand");
  
        const matchesPrice =
          selectedPrices.length === 0 ||
          selectedPrices.some(([min, max]) => productPrice >= min && productPrice <= max);
  
        const matchesPanel =
          selectedPanels.length === 0 || selectedPanels.includes(productPanel);
  
        const matchesBrand =
          selectedBrands.length === 0 || selectedBrands.includes(productBrand);
  
        card.style.display = matchesPrice && matchesPanel && matchesBrand ? "block" : "none";
      });
    }
  
    function getSelectedValues(type) {
      const selectedCheckboxes = Array.from(
        document.querySelectorAll(`input[data-filter='${type}']:checked`)
      );
  
      if (type === "price") {
        return selectedCheckboxes.map((checkbox) => {
          const [min, max] = checkbox.value.split("-").map(Number);
          return [min, max];
        });
      } else {
        return selectedCheckboxes.map((checkbox) => checkbox.value.toLowerCase());
      }
    }
  
    const resetButton = document.getElementById("reset-filters");
  
    // Resetea todos los checkboxes cuando se hace clic en el botón
    resetButton.addEventListener("click", () => {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false; // Desmarcar todos los checkboxes
      });
      filterProducts(); // Actualizar la vista de productos
    });
  });
  