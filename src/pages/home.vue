<template>
  <b-container>
    {{ $t('Home') }}

    <h2 class="mt-2">{{ $t('Welcome!') }}</h2>

    <b-dropdown :text="$t('Change Language')" class="my-4">
      <b-dropdown-item
        v-for="(messages, code) in locales"
        :key="code"
        @click="changeLanguage(code)"
      >
        {{ $t(`language.${code}`) }}
      </b-dropdown-item>
    </b-dropdown>

    <b-row>
      <b-col v-for="card in cards" :key="card.title" cols="6" class="mb-4">
        <DashboardCard
          :title="card.title"
          :variant="card.variant"
          :icon="card.icon"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import locales from '@/locales'

export default {
  name: 'Home',
  components: {
    DashboardCard: () => import('@/components/DashboardCard')
  },
  computed: {
    cards() {
      return [
        {
          title: this.$t('Card One'),
          variant: 'primary',
          icon: 'paper-plane'
        },
        {
          title: this.$t('Card Two'),
          variant: 'danger',
          icon: 'boxes-stacked'
        },
        {
          title: this.$t('Card Three'),
          variant: 'info',
          icon: 'chart-column'
        },
        {
          title: this.$t('Card Four'),
          variant: 'warning',
          icon: 'user'
        }
      ]
    },

    locales() {
      return locales
    }
  },
  methods: {
    changeLanguage(code) {
      this.$i18n.locale = code
      this.$store.commit('language', code)
      document.querySelector('html').setAttribute('lang', code)
    }
  }
}
</script>
