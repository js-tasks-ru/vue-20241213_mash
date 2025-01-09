import { couldStartTrivia } from 'typescript';
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {

    const count = ref (0);

    function decrement(){
      count.value--;

    }

    function increment(){
      count.value++;
    }

  return {

    decrement,
    increment,
    count
    
    };
  },

  

  template: `
    <div class="counter">
      <button @click="decrement" :disabled= "count === 0"
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        disabled
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button @click="increment" :disabled= "count === 5"
        class="button button--secondary"
        type="button"
        aria-label="Increment"
      >➕</button>
    </div>
  `,
})
