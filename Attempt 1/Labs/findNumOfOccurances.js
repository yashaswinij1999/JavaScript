function findNumOfOccurances(s1, s2) {
  pos = -1;
  count = 0;

  while ((pos = s1.indexOf(s2, pos + 1)) !== -1) {
    pos++;
    count++;
  }
  console.log(count);
}
findNumOfOccurances("AAbcAbcAbcc", "Abc");
