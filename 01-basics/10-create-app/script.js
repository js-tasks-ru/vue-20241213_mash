import { defineComponent, createApp } from 'vue'

const App = defineComponent({
    name: 'app',
    
    setup() {
  
    var day = new Date();
    
    return {
      today: day.toLocaleDateString('en-US', { dateStyle: 'long' })
    }
  },

  template: `
  <div>Сегодня {{ today }}</div>`
});

createApp(App).mount('#app');