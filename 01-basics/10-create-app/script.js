import { defineComponent, createApp } from 'vue'

const App = defineComponent({
    name: 'app',
    
    setup() {
  й
    var day = new Date();
    
    return {
      today: day.toLocaleDateString(navigator.language, { dateStyle: 'long' })
    }
  },

  template: `
  <div>Сегодня {{ today }}</div>`
});

createApp(App).mount('#app');
