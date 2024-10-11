<script>
import Header from '~/components/Header.vue'
import ProductList from '~/components/ProductList.vue'

export default {
  name: 'IndexPage',
  components: { Header, ProductList }
}
</script>

<style scoped>
main {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
