<template>
      <div class="navbar">
                <div class="navbar__list scrollbar">
                    <div class="navbar__item " v-for="tab in tabs" :key="tab.id" :data-tooltip="tab.contentTab">
                        <div class="icon icon-24 icon__navbar" :class="tab.iconTab"></div>
                        <div class="navbar__item__title" >{{ tab.contentTab}}</div>
                    </div>
                    <!-- <div class="navbar__item ">
                        <div class="icon-tien-mat icon icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Tiền mặt</div> 
                    </div>
                    <div class="navbar__item">
                        <div class="icon icon-tien-gui icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Tiền gửi</div>
                    </div>
                    <div class="navbar__item  navbar__item--active">
                        <div class="icon icon-mua-hang icon-24 icon__navbar "></div>
                        <div class="navbar__item__title"> Mua hàng</div> 
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-ban-hang icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Bán hàng</div> 
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-qly-hdon icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Quản lý hoá đơn</div> 
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-kho icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Kho</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-cong-cu icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Công cụ dụng cụ</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-tai-san-co-dinh icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Tài sản cố định</div>
                    </div>
                    <div class="navbar__item">
                        <div class="icon icon-tien-luong icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Tiền lương</div> 
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-thue icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Thuế</div> 
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-gia-thanh icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Giá thành</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-tong-hop icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Tổng hợp</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-ngan-sach icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Ngân sách</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-bao-cao icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Báo cáo</div>
                    </div>
                    <div class="navbar__item ">
                        <div class="icon icon-phan-tich-tai-chinh icon-24 icon__navbar"></div>
                        <div class="navbar__item__title">Phân tích tài chính</div>
                    </div> -->
                </div>
                <div class="navbar__footer"></div>
            </div>
</template>
<script>
import { ref } from 'vue'
import ListsTab from '../../constants/ListTab'
export default {
    setup() {
        const tabs = ref(ListsTab)
        return {
            tabs,
        }
    }
}
</script>