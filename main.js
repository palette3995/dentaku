function get_calc(btn) {
      if(btn.value == "=") {
        document.dentaku.display.value = eval(document.dentaku.display.value);
      } else if (btn.value == "AC") {
        document.dentaku.display.value = "";
      } else
        document.dentaku.display.value += btn.value;
      }
