function bookmark(num) {
  navigationId = 'q' + num;
  bookmarkId = 'bookmark' + num;

  navigationButton = document.getElementById(navigationId);
  bookmarkButton = document.getElementById(bookmarkId);

  navigationButton.classList.add('red');

  console.log(num);
  console.log(navigationButton);
  console.log(bookmarkButton);


}