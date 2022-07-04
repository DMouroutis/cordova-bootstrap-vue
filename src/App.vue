<template>
  <div id="app">
    <b-overlay :show="isLoading" spinner-variant="primary" opacity="1">
      <b-modal v-model="isOffline" centered no-close-on-backdrop>
        <template #modal-header>
          <h4>No Internet Connection</h4>
        </template>

        <p>Try:</p>
        <ul>
          <li>Checking Network Data</li>
          <li>Reconnecting to Wi-Fi</li>
        </ul>
      </b-modal>

      <router-view />
    </b-overlay>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isLoading: true,
      isOffline: false
    }
  },
  computed: {
    isDevelopment() {
      return process.env.NODE_ENV === 'development'
    }
  },
  created() {
    // When cordova application is ready (or offline) these events will be fired
    document.addEventListener('deviceready', this.onDeviceReady, false)
    document.addEventListener('offline', this.showOfflineModal, false)
  },
  mounted() {
    // If in development fire the device ready event manually
    if (this.isDevelopment) {
      this.onDeviceReady()
    }
  },
  methods: {
    onDeviceReady() {
      this.isLoading = false
    },

    showOfflineModal() {
      this.isOffline = true
    }
  }
}
</script>
