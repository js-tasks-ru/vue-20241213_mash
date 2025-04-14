import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstOperand = ref('');
    const secondOperand = ref('');
    const operator = ref("sum"); 

    const result = computed(() => {
      switch (operator.value) {
        case "sum":
          return firstOperand.value + secondOperand.value;
        case "subtract":
          return firstOperand.value - secondOperand.value;
        case "multiply":
          return firstOperand.value * secondOperand.value;
        case "divide":
          return secondOperand.value !== 0 ? firstOperand.value / secondOperand.value : 'Ошибка: Деление на ноль';
        default:
          return 0;
      }
    });

    return {
      firstOperand,
      secondOperand,
      operator,
      result,
    };
  },


  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model = "firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="operator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="operator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="operator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="operator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model = "secondOperand"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
});
