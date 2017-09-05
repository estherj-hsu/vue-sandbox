<template lang="pug">
  .jumbotron
    .container
      h1 Hello, world!
      p This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.
      p
        .btn.btn-primary.btn-lg(href="#" role="button") Learn more &raquo;
    hr.my-4
    slot
      h1 Default Slot Content
    slot(name="namedSlot")
      h1 Named Slot Content

</template>

<script>
</script>

<style>

</style>