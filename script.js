

  /* =================== MENU RESPONSIVO ================== */
    var ul = document.querySelector('header #btnsMenu');
    var menuBtn = document.querySelector('.menu-btn i');

    function menuShow() {
        if (ulConfig.classList.contains('open')) {
            ulConfig.classList.remove('open');
        }

        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
            // Remove a classe fixando ao elemento overflowFixed
            overflowFixed.classList.remove('fixando');
        } else {
            ul.classList.add('open');
            // Adiciona a classe fixando ao elemento overflowFixed
            overflowFixed.classList.add('fixando');
        }
    }
  /* ================= FIM MENU RESPONSIVO ================ */


  /* ===================== CONFIGURAÇÕES =================== */
    var ulConfig = document.querySelector('header #Config');
    var configBtn = document.querySelector('.config-btn i');

    function config_Show() {
        if (ul.classList.contains('open')) {
            ul.classList.remove('open');
        }

        if (ulConfig.classList.contains('open')) {
            ulConfig.classList.remove('open');
            // Remove a classe fixando ao elemento overflowFixed
            overflowFixed.classList.remove('fixando');
        } else {
            ulConfig.classList.add('open');
            // Adiciona a classe fixando ao elemento overflowFixed
            overflowFixed.classList.add('fixando');
        }
    }
  /* =================== FIM CONFIGURAÇÕES ================= */


  /* ====================== GIRO CONFIG ==================== */
    var cog = document.querySelector('.config-btn i');
    var clickCount = 0;

    cog.addEventListener('click', function () {
        clickCount++;

        if (clickCount % 2 === 1) {
            cog.classList.remove('rotate_reverse');
            cog.classList.add('rotate');
        } else {
            cog.classList.remove('rotate');
            cog.classList.add('rotate_reverse');
        }
    });
  /* ==================== FIM GIRO CONFIG ================== */


  /* ============== SCRIPT FIXAR TELA AO CLICAR ============= */
    var overflowFixed = document.getElementById('overflowFixed');
    var fixo = false;           // variavel de controle de clique no botao

    function action() {
        fixo = !fixo;            // nega o valor conforme o clique no botao

        if (fixo) {
            overflowFixed.classList.toggle('fixando');
        } else { 
            overflowFixed.classList.remove('fixando');
        }
    }
  /* ===================== FIM SCRIPT ====================== */


  /* ================ SCRIPT CONFIGURA TEMA ================ */
    const TOGGLE = document.getElementById("chk");
    const THEME = window.localStorage.getItem("theme");

    // Verifica o tema e atualiza a caixa de seleção
    if (THEME === "dark") {
      document.body.classList.add("dark");
      TOGGLE.checked = true;
    }

    TOGGLE.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      //Atualiza o tema no armazenamento local com base no estado da caixa de seleção
      if (TOGGLE.checked) {
        window.localStorage.setItem("theme", "dark");
      } else {
        window.localStorage.setItem("theme", "light");
      }
    });
  /* ============== FIM SCRIPT CONFIGURA TEMA ============== */
