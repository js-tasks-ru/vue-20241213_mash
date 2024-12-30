import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const weatherData = getWeatherData();

    function convertToCelsius(k) {
      return (parseFloat(k - 273.15)).toFixed(1) ;
    }

    function formatPressure(hPa){
      return  parseInt(Math.round(hPa*0.75));
    }

    function isNight(currentHour, sunrise, sunset) {
    
      return currentHour < sunrise && currentHour > sunset;
      }
     

      return {
      weatherData,
      WeatherConditionIcons,
      formatPressure,
      isNight,
      convertToCelsius,
    };
  },

 template: `
 <div>
  <h1 class="title">Погода в Средиземье</h1>

  <ul class="weather-list unstyled-list">
  <li v-for="data in weatherData" v-bind:class="{ 'weather-card': true, 'weather-card--night': isNight(data.current.dt, data.current.sunrise, data.current.sunset) }">
      <div class="weather-alert" v-if="data.alert != null">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ data.alert.sender_name }}:{{ data.alert.description }}</span>
      </div>
      <div>
        <h2 class="weather-card__name">
        {{ data.geographic_name }} 
        </h2>
        <div class="weather-card__time">
        {{ data.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title = data.current.weather.description>{{WeatherConditionIcons[data.current.weather.id]}}</div>
        <div class="weather-conditions__temp">{{ convertToCelsius( data.current.temp ) }} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>

          <div class="weather-details__item-value">{{ formatPressure(data.current.pressure) }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ data.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ data.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ data.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  </ul>
</div>
`,
});