export default class ChainCall {
  #initNum: number = 0
  #result: number = 0
  constructor(initNum: number) {
    this.#initNum = initNum
  }

  get(): number {
    return this.#initNum
  }

  add(addend: number) {
    this.#result = this.#initNum + addend
    const num = new ChainCall(this.#result)
    return num
  }
}