<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://github.com/Sch-Tomi/carbohydrate-calculator" target="_blank">Sch-Tomi</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}}</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://coreui.io/vue">CoreUI for Vue</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
