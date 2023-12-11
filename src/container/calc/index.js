
class Calc {
    static #value =''

    static add = (newValue) => {
        console.log(this.#value)
        this.#value = this.#value.concat(newValue)
        this.#output()
    }
    static #output = () => {
        window.output.innerHTML = this.#value
    }
    static dot = () => {
        this.#value = this.#value.concat('.')
        this.#output()
    }
    static op = (opValue) => {
        this.#value = this.#value.concat(opValue)
        this.#output()
    }
}

