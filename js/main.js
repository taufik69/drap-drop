/**
 * take all list className
 */

const list = document.querySelectorAll(".iist");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const arrList = Array.from(list);

let dragitem = null;
arrList.map((listItem) => {
  listItem.addEventListener("dragstart", (e) => {
    dragitem = e.target;
  });

  right.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  right.addEventListener("drop", (event) => {
    event.preventDefault();

    right.appendChild(dragitem);
    dragitem = null;
  });

  left.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  left.addEventListener("drop", (event) => {
    event.preventDefault();
    left.appendChild(dragitem);
    dragitem = null;
  });
});
