const links ={
  one:"../01_color_changer/colorChanger.html",
  two:"../02_BMI_Calculator/BMI.html",
  three:"../03_DigitalClock/clock.html",
  four:"../04_Guess_Number/guess_number.html",
  five:"../05_photos_Remove/remover.html",
  six:"../06_Background_color_changer/Bkd_Color_Changer.html",
  seven:"../07_keybord_testing/keyboard.html",
  eight:"../08_To_Do_list/TO_Do_list.html",
  nine:"../09_Calculator/calculator.html",
  ten:"../10_Weather_App/weather.html",
  eleven:"../11_Movie_search/movie_search.html",
  twelve:"../12_Quiz/quiz.html"
}

Object.entries(links).forEach(([id, path]) => {
const btn = document.querySelector(`#${id}`);
if (btn) {
  btn.addEventListener("click", () => (window.location.href = path));
}
});
