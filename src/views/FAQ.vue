<template>
<div class="body-content">
  <aside class="faq-menu">
    <ul class="faq-menu__list">
      <li class="faq-menu__list__list-item"><a href="faq-section-1">FAQ menu item 1</a></li>
      <li class="faq-menu__list__list-item"><a href="faq-section-2">FAQ menu item 1</a></li>
      <!-- <li class="faq-menu__list__list-item"><a href="faq-section-3"></a>3</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-4"></a>4</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-5"></a>5</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-6"></a>6</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-7"></a>7</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-8"></a>8</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-9"></a>9</li>
        <li class="faq-menu__list__list-item"><a href="faq-section-10"></a>10</li> -->
    </ul>
  </aside>
  <section class="faq">
    <div id="help1" class="faq__accordion">
      <h1>FAQ Section 1</h1>
      <b-btn class="faq__accordion__btn" block v-b-toggle.help1-accordion-1 variant="primary">Section 1 Question 1</b-btn>
      <b-collapse id="help1-accordion-1" accordion="help1-accordion">
        <b-card class="faq__accordion__card">
          Section 1 Answer 1
        </b-card>
      </b-collapse>
      <b-btn class="faq__accordion__btn" block v-b-toggle.help1-accordion-2>Section 1 Question 2</b-btn>
      <b-collapse id="help1-accordion-2" accordion="help1-accordion">
        <b-card class="faq__accordion__card">
          Section 1 Answer 2
        </b-card>
      </b-collapse>
    </div>
    <div id="help2" class="faq__accordion">
      <h1>FAQ Section 2</h1>
      <b-btn class="faq__accordion__btn" block v-b-toggle.faq-1-accordion-2>Section 2 Question 1</b-btn>
      <b-collapse id="faq-1-accordion-2" accordion="faq-1-accordion">
        <b-card class="faq__accordion__card">
          Section 2 Answer 2
        </b-card>
      </b-collapse>
    </div>
  </section>
</div>
</template>

<style lang="scss">
@import '../assets/css/styles.scss';

.body-content {
  display: -webkit-box;display: -ms-flexbox;display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid red;
}
.faq-menu {
  flex: 0 0 200px;
  width: 300px;
  border: 1px solid $deep-black;
  display: -webkit-box;display: -ms-flexbox;display: flex;

  &__list {
    margin-top: 100px;

    &__list-item {
      list-style: none;
      line-height: 24px;

      a {
        text-decoration: none;
        font-size: 14px;
      }
    }
  }
}
.faq {
  flex: 1 1 900px;

  display: -webkit-box;display: -ms-flexbox;display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border: 1px solid $deep-black;
  padding: 20px;

  &__accordion {
    display: -webkit-box;display: -ms-flexbox;display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &__card {
      border: 1px solid $deep-black;
    }

    &__btn {
      margin: 2px 0 0;
      background-color: $midnight-tint-2;
      border: none;
      border-bottom: 1px solid transparent;

      &:active, &:focus {
        outline: none;
      }
    }
  }
}
</style>

<script>
export default {
  name: 'FAQ'
}
</script>
