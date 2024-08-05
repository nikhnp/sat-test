function bookmark(num) {
  navigationId = "q" + num;
  bookmarkId = "bookmark" + num;
  wrapperId = "wrapper" + num;
  wrapperIdChild = "wrapper" + num + "a";

  navigationButton = document.getElementById(navigationId);
  bookmarkButton = document.getElementById(bookmarkId);
  wrapperButton = document.getElementById(wrapperId);
  wrapperChild = document.getElementById(wrapperIdChild);

  navigationButton.classList.add("red");
  bookmarkButton.classList.add("red");
  wrapperButton.classList.add("red");
  wrapperChild.classList.remove("remove");
}

function remove(num) {
  navigationId = "q" + num;
  bookmarkId = "bookmark" + num;
  wrapperId = "wrapper" + num;
  wrapperIdChild = "wrapper" + num + "a";

  navigationButton = document.getElementById(navigationId);
  bookmarkButton = document.getElementById(bookmarkId);
  wrapperButton = document.getElementById(wrapperId);
  wrapperChild = document.getElementById(wrapperIdChild);

  navigationButton.classList.remove("red");
  bookmarkButton.classList.remove("red");
  wrapperButton.classList.remove("red");
  wrapperChild.classList.add("remove");
}
