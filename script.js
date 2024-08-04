function bookmark(num) {
  navigationId = "q" + num;
  bookmarkId = "bookmark" + num;
  wrapperId = "wrapper" + num;

  navigationButton = document.getElementById(navigationId);
  bookmarkButton = document.getElementById(bookmarkId);
  wrapperButton = document.getElementById(wrapperId);

  navigationButton.classList.add("red");
  bookmarkButton.classList.add("red");
  wrapperButton.classList.add("red");
}
