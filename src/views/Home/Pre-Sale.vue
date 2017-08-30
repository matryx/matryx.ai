<template lang="html">
  <section class="content-container content-container--large">
    <h2 class="section__header text--center title">
      <span v-if=" language === 'ru' ">предпродажа</span>
      <span v-else-if=" language === 'ch' ">预售</span>
      <span v-else-if=" language === 'ge' ">Vorverkauf</span>
      <span v-else-if=" language === 'ja' ">プリセール</span>
      <span v-else-if=" language === 'ko' ">사전판매</span>
      <span v-else>PRE-SALE</span>
    </h2>
    <h3 class="sub-title text--center">
      <span v-if=" language === 'ru' ">6 сентября 2017 года</span>
      <span v-else-if=" language === 'ch' ">2017 年 9 月 6 日</span>
      <span v-else-if=" language === 'ge' ">6. September 2017</span>
      <span v-else-if=" language === 'ja' ">2017年9月6日</span>
      <span v-else-if=" language === 'ko' ">2017년 9월 6일</span>
      <span v-else>Opening September 6, 2017</span>
    </h3>
    <div class="icon-list" v-if=" language === 'ru' ">
      <SaleIcon
        v-for="(icon, index) in iconsRussian"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <div class="icon-list" v-else-if=" language === 'ch' ">
      <SaleIcon
        v-for="(icon, index) in iconsChinese"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <div class="icon-list" v-else-if=" language === 'ge' ">
      <SaleIcon
        v-for="(icon, index) in iconsGerman"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <div class="icon-list" v-else-if=" language === 'ja' ">
      <SaleIcon
        v-for="(icon, index) in iconsJapanese"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <div class="icon-list" v-else-if=" language === 'ko' ">
      <SaleIcon
        v-for="(icon, index) in iconsKorean"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <div class="icon-list" v-else>
      <SaleIcon
        v-for="(icon, index) in icons"
        :img="icon.img"
        :text="icon.text"
        :alt="icon.text"
        :key="index"
      ></SaleIcon>
    </div>
    <p class="discount">
      <span v-if=" language === 'ru' ">*скидки действуют только на покупки во время предпродажи</span>
      <span v-else-if=" language === 'ch' ">*折扣仅在预售期间有效</span>
      <span v-else-if=" language === 'ge' ">*Rabatte gelten nur für Käufe während des Vorverkaufs</span>
      <span v-else-if=" language === 'ja' ">*ディスカウントはプリセール中の購入にのみ適用</span>
      <span v-else-if=" language === 'ko' ">*이번 사전판매 기간 동안에 이루어진 구매에 대해서만 할인이 적용됩니다</span>
      <span v-else>*Discounts only apply for purchases during the Pre-Sale.</span>
    </p>
  </section>
</template>

<script>
import SaleIcon from '../../components/Sale-Icon'

import discount10 from '../../assets/icons/icon-sale-10discount.svg'
import discount15 from '../../assets/icons/icon-sale-15discount.svg'
import eth from '../../assets/icons/icon-sale-eth.png'
import upto50 from '../../assets/icons/icon-sale-upto50.svg'

export default {
  name: 'PreSale',
  components: {
    SaleIcon
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },
  data () {
    return {
      icons: [
        {
          img: eth,
          text: '75 ETH Minimum Purchase'
        },
        {
          img: discount10,
          text: 'Purchases > 150 ETH Eligible for 10% Discount*'
        },
        {
          img: discount15,
          text: 'Purchases > 300 ETH Eligible for 15% Discount*'
        },
        {
          img: upto50,
          text: 'Up to 50% of Total Sale Cap Alloted for Pre-Sale'
        }
      ],
      iconsRussian: [
        {
          img: eth,
          text: 'Минимальная покупка – 75 ETH'
        },
        {
          img: discount10,
          text: 'При покупке > 150 ETH вы получаете скидку 10%*'
        },
        {
          img: discount15,
          text: 'при покупке > 300 ETH ВЫ ПОЛУЧАЕТЕ СКИДКУ 15%*'
        },
        {
          img: upto50,
          text: 'до 50% всего продающегося количества предназначено для предпродажи'
        }
      ],
      iconsChinese: [
        {
          img: eth,
          text: '75 ETH 最少购买量'
        },
        {
          img: discount10,
          text: '购买量 > 150 ETH 可有 10% 折扣*'
        },
        {
          img: discount15,
          text: '购买量 > 300 ETH 可有 15% 折扣*'
        },
        {
          img: upto50,
          text: '预售将销售总销售额上限的 50%'
        }
      ],
      iconsGerman: [
        {
          img: eth,
          text: 'Mindestabnahmewert 75 ETH'
        },
        {
          img: discount10,
          text: 'Käufe im Wert von mehr als 150 ETH sind für einen Rabatt von 10 % qualifiziert*'
        },
        {
          img: discount15,
          text: 'Käufe im Wert von mehr als 300 ETH SIND FÜR EINEN RABATT VON 15 % QUALIFIZIERT*'
        },
        {
          img: upto50,
          text: 'bis zu 50 % des Gesamtverkaufslimits für den Vorverkauf zugeteilt'
        }
      ],
      iconsJapanese: [
        {
          img: eth,
          text: '最低購入額　75 ETH'
        },
        {
          img: discount10,
          text: '購入 > 150 ETHが10%ディスカウント対象*'
        },
        {
          img: discount15,
          text: '購入 > 300 ETHが15%ディスカウント対象*'
        },
        {
          img: upto50,
          text: 'プリセールには最大で合計販売キャップの50%の割り当て'
        }
      ],
      iconsKorean: [
        {
          img: eth,
          text: '최소 구매액 75 ETH'
        },
        {
          img: discount10,
          text: '150 ETH 이상 구매 시10% 할인 적용*'
        },
        {
          img: discount15,
          text: '(300 ETH 이상 구매 시 15% 할인적용*'
        },
        {
          img: upto50,
          text: '사전판매에 대해서는 최대 50%까지의 총 판매한도가 걸려 있습니다'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section.content-container {
  padding: 30px 0 30px;

  .title {
    font-size: 24px;
  }

  .sub-title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .discount {
    font-size: smaller;
    text-align:center;
    margin-top: 50px;
  }

  .icon-list {
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 560px) {
    .discount {
      margin-bottom: 80px;
    }
  }
}
</style>
