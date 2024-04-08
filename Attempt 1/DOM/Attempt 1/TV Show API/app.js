const btn = document.querySelector("button");
const form = document.querySelector("form");

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const input = document.querySelector("input").value;
  console.log(input);
  const config = { params: { q: input } };
  const shows = await axios.get("https://api.tvmaze.com/search/shows", config);
  makeImg(shows.data);
  document.querySelector("input").value = "";
});

const makeImg = (shows) => {
  for (let result of shows) {
    console.log(result);
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
