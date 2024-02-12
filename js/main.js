/**
 * take all list className
 */

const draggable = document.querySelectorAll(".draggable");
const container = document.querySelectorAll(".container");
draggable.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

container.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    /**
     *  when drag any dragable component then dynamically add dragging class then
     * select the dragging classname and putting this element or tag into container div
     * whereas no need to drop eventlisher
     */
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
  });
});

function getDragAfterElement(container, y) {
  const draggeableElement = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];
  console.clear();
  console.log(draggeableElement);
}
