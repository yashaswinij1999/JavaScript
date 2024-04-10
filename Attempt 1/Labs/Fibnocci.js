function Fibnocci(num) {
  let f = 0;
  let s = 1;
  let r = 0;

  console.log(f);
  console.log(s);

  for (let i = 3; i <= num; i++) {
    r = f + s;

    console.log(r);
    f = s;
    s = r;
  }
}

Fibnocci(8);
