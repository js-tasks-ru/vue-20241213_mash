import { defineComponent, createApp } from 'vue'

const App = defineComponent({
    name: 'app',
    
    setup() {
  
    var day = new Date();
    
    return {
      today: day.toLocaleDateString('ru-RU', { dateStyle: 'long' })
    }
  },

  template: `
  <div>Сегодня {{ today }}</div>`
});

createApp(App).mount('#app');