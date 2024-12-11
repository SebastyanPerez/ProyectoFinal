document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar los checkboxes de "Todos"
    const allCheckboxGroups = document.querySelectorAll("[id$='-all']");

    // Agregar eventos a los checkboxes de "Todos"
    allCheckboxGroups.forEach((checkboxAll) => {
        checkboxAll.addEventListener("change", function () {
            const groupId = checkboxAll.id.split("-")[0]; // Obtener el grupo (price, color, brand)
            const groupCheckboxes = document.querySelectorAll(
                `input[data-filter='${groupId}']`
            );

            groupCheckboxes.forEach((checkbox) => {
                checkbox.checked = checkboxAll.checked; // Seleccionar o deseleccionar todos
            });

            filterProducts(); // Actualizar el filtro
        });
    });

    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const productCards = document.querySelectorAll(".product-card");

    // Escuchar cambios en los checkboxes
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", filterProducts);
    });

    // Filtrar productos según valores seleccionados
    function filterProducts() {
        const selectedPrices = getSelectedValues("price");
        const selectedColors = getSelectedValues("color");
        const selectedBrands = getSelectedValues("brand");

        productCards.forEach((card) => {
            const productPrice = parseInt(card.getAttribute("data-price"));
            const productColor = card.getAttribute("data-color");
            const productBrand = card.getAttribute("data-brand").toLowerCase();

            const matchesPrice =
                selectedPrices.length === 0 ||
                selectedPrices.some(([min, max]) => productPrice >= min && productPrice <= max);

            const matchesColor =
                selectedColors.length === 0 || selectedColors.includes(productColor);

            const matchesBrand =
                selectedBrands.length === 0 || selectedBrands.includes(productBrand);

            card.style.display = matchesPrice && matchesColor && matchesBrand ? "block" : "none";
        });
    }

    // Obtener valores seleccionados de los checkboxes
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

    // Resetea todos los checkboxes
    resetButton.addEventListener("click", () => {
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false; // Desmarcar todos los checkboxes
        });
        filterProducts(); // Actualizar la vista de productos
    });
});
