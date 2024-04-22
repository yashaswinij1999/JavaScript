const button = document.querySelector("button");

button.addEventListener("click", async function (e) {
  e.preventDefault();
  const input = document.querySelector("input");
  const val = input.value;
  console.log(val);
  const config = { params: { q: val } };
  const response = await axios.get(
    "https://api.tvmaze.com/search/shows",
    config
  );
  console.log(response);
  const shows = response.data;
  getImage(shows);
  input.value = "";
});

const getImage = function (shows) {
  for (let data of shows) {
    console.log(data);
    if (data.show.image) {
      const img = document.createElement("img");
      img.src = data.show.image.medium;
      document.body.append(img);
      img.style.margin = "10px";
    }
  }
};
