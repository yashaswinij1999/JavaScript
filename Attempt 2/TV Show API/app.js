const button = document.querySelector("button");
const input = document.querySelector("#tv");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const param = input.value;
  const response = axios.get("https://api.tvmaze.com/search/shows");
  console.log(response);
});
