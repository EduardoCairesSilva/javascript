// Essa calculadora será feita usando factory functions!!

function criaCalculadora() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaBackSpace();
            this.pressionaEnter();
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
                if (e.keyCode === 8) {
                    e.preventDefault();
                    this.clearDisplay();
                }
            })
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },


        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('conta inválida!');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagar() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            // this --> calculadora.]
            document.addEventListener('click', (e) => {

                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagar();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            });
        },

        btnDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
