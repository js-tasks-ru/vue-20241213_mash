import { defineComponent, ref, watch  } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedId = ref(1); 
    const meetupTitle = ref('');

    const fetchMeetupTitle = async (id) => {
      const meetup = await getMeetup(id);
      meetupTitle.value = meetup.title; 
    };

    fetchMeetupTitle(selectedId.value);

    watch(selectedId, (newId) => {
      fetchMeetupTitle(newId);
    });


    const nextMeetup = () => {
      if (selectedId.value < 5) {
        selectedId.value++;
      }
    };

    const prevMeetup = () => {
      if (selectedId.value > 1) {
        selectedId.value--;
      }
    };

    return {
      selectedId,
      meetupTitle,
      nextMeetup,
      prevMeetup,
    };
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
      <button class="button button--secondary" type="button" @click="prevMeetup" :disabled="selectedId === 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
        <div class="radio-group__button" v-for="id in [1, 2, 3, 4, 5]" :key="id">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="selectedId"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
                </div>

                <button class="button button--secondary" type="button" @click="nextMeetup" :disabled="selectedId === 5">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupTitle }}</h1>
        </div>
      </div>

    </div>
  `,
})



       