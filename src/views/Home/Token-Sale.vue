<template lang="html">
  <section class="content-container content-container--large">
    <h2 class="section__header text--center title">
      <span v-if=" language === 'ru' ">продажа токенов</span>
      <span v-else-if=" language === 'ch' ">代金券销售</span>
      <span v-else-if=" language === 'ge' ">Token-Verkauf</span>
      <span v-else-if=" language === 'ja' ">トークンセール</span>
      <span v-else-if=" language === 'ko' ">토큰판매</span>
      <span v-else>TOKEN SALE</span>
    </h2>
    <h3 class="text--center sub-title" v-if="showPreSale">
      <span v-if=" language === 'ru' ">13 сентября 2017 года</span>
      <span v-else-if=" language === 'ch' ">2017 年 9 月 13 日</span>
      <span v-else-if=" language === 'ge' ">13. September 2017</span>
      <span v-else-if=" language === 'ja' ">2017年9月13日</span>
      <span v-else-if=" language === 'ko' ">2017년 9월 13일</span>
      <span v-else>Launches September 13, 2017</span>
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
    <br/><br/>
    <h5 class="text-center">
      <span v-if=" language === 'ch' ">销售合同 <a href="/sale-terms-ch.pdf" target="_blank"> https://matryx.ai/sale-terms.pdf</a></span>
      <span v-else >Sale Terms available at <a href="/sale-terms.pdf" target="_blank"> https://matryx.ai/sale-terms.pdf</a></span>
    </h5>
  </section>
</template>

<script>
import SaleIcon from '../../components/Sale-Icon'

import matryx from '../../assets/icons/icon-sale-matryx.png'
import cap from '../../assets/icons/icon-sale-cap.svg'
import allocated60 from '../../assets/icons/icon-sale-60allocated.svg'
import mtx from '../../assets/icons/icon-sale-mtx.png'

import { isPreSale, isMainSale } from '@/utils'

export default {
  name: 'TokenSale',
  components: {
    SaleIcon
  },
  mounted () {
    if (isPreSale()) {
      this.showPreSale = true
    } else if (isMainSale()) {
      this.showMainSale = true
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    }
  },
  data () {
    return {
      showPreSale: false,
      showMainSale: false,
      icons: [
        {
          img: mtx,
          text: '314,159,265 Total MTX Supply'
        },
        {
          img: allocated60,
          text: '60% of Total MTX Supply Allotted for Sale'
        },
        {
          img: cap,
          text: '161,803 ETH Sale Cap'
        },
        {
          img: matryx,
          text: 'Address will ONLY be posted on matryx.ai'
        }
      ],
      iconsRussian: [
        {
          img: mtx,
          text: '314,159,265 всего MTX в наличии'
        },
        {
          img: allocated60,
          text: '60% всего наличия MTC предназначено для предпродажи'
        },
        {
          img: cap,
          text: '161,803 Предел продаж ETH'
        },
        {
          img: matryx,
          text: 'адрес будет опубликован только на matryx.ai'
        }
      ],
      iconsChinese: [
        {
          img: mtx,
          text: '314,159,265 全部 MTX 供应量'
        },
        {
          img: allocated60,
          text: 'MTC 总供给的 60% 供销售'
        },
        {
          img: cap,
          text: '161,803 ETH 销售上限'
        },
        {
          img: matryx,
          text: '地址仅在 matryx.ai 张贴'
        }
      ],
      iconsGerman: [
        {
          img: mtx,
          text: '314,159,265 MTX-Gesamtvorrat'
        },
        {
          img: allocated60,
          text: '60 % des MTX-Gesamtvorrates für den Verkauf zugeteilt'
        },
        {
          img: cap,
          text: '161,803 ETH-Verkaufslimit'
        },
        {
          img: matryx,
          text: 'Adresse wird nur auf matryx.ai gepostet'
        }
      ],
      iconsJapanese: [
        {
          img: mtx,
          text: '314,159,265 MTX合計サプライ量'
        },
        {
          img: allocated60,
          text: 'MTX合計サプライ量の60%がセールに割り当て'
        },
        {
          img: cap,
          text: '161,803 ETH販売キャップ'
        },
        {
          img: matryx,
          text: 'アドレスはmatryx.ai上にのみ掲載されます'
        }
      ],
      iconsKorean: [
        {
          img: mtx,
          text: '314,159,265 공급된 MTX 총액'
        },
        {
          img: allocated60,
          text: '공급된 MTC 총액 중 60%가 판매를 위해 할당되었습니다'
        },
        {
          img: cap,
          text: '161,803 ETH 판매한도'
        },
        {
          img: matryx,
          text: '주소는 matryx.ai에만 게시됩니다'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
section.content-container {
  margin-top: 0;
  padding: 40px 0 80px;

  .title {
    font-size: 24px;
  }

  .sub-title {
    font-size: 28px;
    margin-bottom: 20px;
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
}
</style>
