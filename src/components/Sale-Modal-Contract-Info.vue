<template>
  <div class="salemodal-contract-info">
    <h2 class="text-color--matryx-grey-blue">SALE CONTRACT</h2>
    <form>
      <label for="contract-address">Contract Address</label>
      <input type="text" id="contract-address" v-model="contractAddress">

      <label for="data-field">Data Field</label>
      <input type="text" id="data-field" v-model="dataField">

      <label for="gas">Gas</label>
      <input type="text" id="gas" v-model="gas">
    </form>
    <h4>How to Participate Using:</h4>
    <hr>
    <p><a href="#" class="text-color--matryx-blue">MetaMask &rsaquo;</a></p>
    <p><a href="#" class="text-color--matryx-blue">Mist &rsaquo;</a></p>
    <p><a href="#" class="text-color--matryx-blue">MyEtherWallet &rsaquo;</a></p>
  </div>
</template>

<script>
  export default {
    name: 'SaleModalContractInfo'
  }
</script>

<style lang="scss">
.salemodal__body__address {

}
</style>
