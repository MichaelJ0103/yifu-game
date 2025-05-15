function choose(option) {
  const response = document.getElementById('response');
  switch(option) {
    case 1:
      response.textContent = "（阿哲看起來更緊張了…）這樣說好像不太適合。";
      break;
    case 2:
      response.textContent = "（阿哲微笑了）你說得對，我會試試看，謝謝你！你獲得『安心徽章』！";
      break;
    case 3:
      response.textContent = "（阿哲低下頭不說話）這樣講讓他更難受了…";
      break;
  }
}
