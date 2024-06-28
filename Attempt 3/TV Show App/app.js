const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const find = input.value;
  const config = { params: { q: find } };
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`,
    config
  );
  setImage(response.data);
  input.value = "";
});

function setImage(data) {
  for (let show of data) {
    if (show.show.image.medium) {
      const image = document.createElement("img");
      image.src = show.show.image.medium;
      document.body.appendChild(image);
    }
  }
}
