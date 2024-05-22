// Essa calculadora será feita usando funções construtoras.

function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.realizaConta();
            this.display.focus();
        });
    }

    this.addNumDisplay = el => this.display.value += el.innerText;
    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();
