<template>
  <div id="help1" class="faq__accordion">
    <span class="icon"><img src="../../../assets/icons/icon-Termsofsale.svg" alt=""></span>
    <h1>Terms Of Sale</h1>
    <b-btn class="faq__accordion__btn" block v-b-toggle.help1-accordion-1>Section 1 Question 1
      <span class="accordion-toggle__circle"></span>
      <span class="accordion-toggle__plus icon-bar"></span>
      <span class="accordion-toggle__minus icon-bar"></span>
    </b-btn>
    <b-collapse id="help1-accordion-1" class="faq__accordion__body" accordion="help1-accordion">
      <b-card class="faq__accordion__card">
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Augue tollit fastidii cu mei, at delectus scribentur suscipiantur eos. Ut prompta laoreet duo, erat periculis ius eu. Eu pri ullum principes, numquam atomorum an ius. Erant interesset ex vim, modo iusto duo ei. Ex vel albucius expetenda delicatissimi. Ridens nominati pro at. Ei graecis civibus lobortis quo, probo atqui perfecto vel at.
        Est dico assum sanctus at, at autem ornatus sapientem qui. Ne duo eleifend oportere splendide, sale tamquam perfecto an mel. Ex usu choro labitur. Duo no probo civibus indoctum. Sea veri dicit omnes eu, vel an mundi assentior, pri albucius voluptatum id.
      </b-card>
    </b-collapse>
    <b-btn class="faq__accordion__btn" block v-b-toggle.help1-accordion-2>Section 1 Question 2
      <span class="accordion-toggle__circle"></span>
      <span class="accordion-toggle__plus icon-bar"></span>
      <span class="accordion-toggle__minus icon-bar"></span>
    </b-btn>
    <b-collapse id="help1-accordion-2" accordion="help1-accordion">
      <b-card class="faq__accordion__card">
        Lorem ipsum dolor sit amet, ut sea maiorum argumentum adversarium. Et dico elit mel, cu usu ferri eripuit. Ius nominavi luptatum facilisi ne. Eos modo verterem at, sumo veniam mentitum pri id.
        Augue tollit fastidii cu mei, at delectus scribentur suscipiantur eos. Ut prompta laoreet duo, erat periculis ius eu. Eu pri ullum principes, numquam atomorum an ius. Erant interesset ex vim, modo iusto duo ei. Ex vel albucius expetenda delicatissimi. Ridens nominati pro at. Ei graecis civibus lobortis quo, probo atqui perfecto vel at.
        Est dico assum sanctus at, at autem ornatus sapientem qui. Ne duo eleifend oportere splendide, sale tamquam perfecto an mel. Ex usu choro labitur. Duo no probo civibus indoctum. Sea veri dicit omnes eu, vel an mundi assentior, pri albucius voluptatum id.
      </b-card>
    </b-collapse>

  </div>
</template>

<style lang="scss">
@import '../../../assets/css/styles.scss';

</style>

<script>
  export default {
    name: 'FAQ-SaleTerms'
  }
</script>
