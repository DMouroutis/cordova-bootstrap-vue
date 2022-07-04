<template>
  <b-card :title="title" tag="article">
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </b-card-text>

    <b-button :variant="variant" href="#">
      <font-awesome-icon :icon="icon" />
      Go somewhere
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'DashboardCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
